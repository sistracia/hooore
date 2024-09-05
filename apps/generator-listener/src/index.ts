import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { createNodeWebSocket } from "@hono/node-ws";
import postgres from "postgres";

const sql = postgres(process.env.PG_URL);

type Result<T> = { data: T; success: true } | { success: false; error: string };

type ProjectSchema = {
  business_name: string;
  business_logo: string;
  id: string;
  domain: string;
  user_id: string;
  need_publish: boolean;
  build_pid: string;
  build_last_step: number;
  build_total_step: number;
  env: {
    NEXT_PUBLIC_UMAMI_ID?: string | undefined;
  };
};

type MessageData = {
  userId: string;
  projectId: string;
};

async function getProject(projectId: string, userId: string) {
  const [project] = await sql<[ProjectSchema?]>`
      SELECT
            id,
            domain,
            user_id,
            business_name,
            business_logo,
            env,
            build_pid,
            build_last_step,
            build_total_step
      FROM project
      WHERE 
          id = ${projectId}
          AND user_id = ${userId}
      `;

  return project;
}

const app = new Hono();

const { injectWebSocket, upgradeWebSocket } = createNodeWebSocket({ app });

app.use(cors());

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.get(
  "/ws",
  upgradeWebSocket(async () => {
    let intervalId: NodeJS.Timeout;
    let projectId: string;
    let userId: string;
    return {
      onOpen: (_, ws) => {
        intervalId = setInterval(() => {
          if (!projectId || !userId) {
            return;
          }
          getProject(projectId, userId)
            .then((project) => {
              if (!project) {
                return;
              }

              const data: Result<
                Pick<ProjectSchema, "build_last_step" | "build_total_step">
              > = {
                success: true,
                data: {
                  build_last_step: project.build_last_step,
                  build_total_step: project.build_total_step,
                },
              };

              ws.send(JSON.stringify(data));
            })
            .catch((reason) => {
              const data: Result<string> = {
                success: false,
                error: `${reason}`,
              };

              ws.send(JSON.stringify(data));
            });
        }, 1000);
      },
      onMessage: (event) => {
        const messageData = JSON.parse(event.data.toString()) as MessageData;
        projectId = messageData.projectId;
        userId = messageData.userId;
      },
      onClose: () => {
        clearInterval(intervalId);
      },
    };
  }),
);

const PORT = Number(process.env.PORT);
const HOSTNAME = process.env.HOSTNAME;
console.log(`Server is running on port ${PORT}`);

const server = serve({
  fetch: app.fetch,
  hostname: HOSTNAME,
  port: PORT,
});

injectWebSocket(server);
