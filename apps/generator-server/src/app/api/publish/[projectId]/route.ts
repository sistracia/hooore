import { sql } from "@/lib/db";
import { spawn } from "node:child_process";

type ProjectSchema = {
  business_name: string;
  business_logo: string;
  id: string;
  domain: string;
  user_id: string;
  need_publish: boolean;
  env: {
    NEXT_PUBLIC_UMAMI_ID?: string | undefined;
  };
};

type Params = {
  projectId: string;
};

export async function GET(request: Request, context: { params: Params }) {
  if (
    request.headers.get("Authorization")?.replace("Bearer ", "") !==
    process.env.GENERATOR_SERVER_TOKEN
  ) {
    return new Response(JSON.stringify({ message: "Unauthorized." }), {
      status: 403,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  const projectId = context.params.projectId;
  const [project] = await sql<[ProjectSchema?]>`
        SELECT
            id,
            domain,
            user_id,
            business_name,
            business_logo,
            env
        FROM project
        WHERE id = ${projectId}
  `;

  if (!project) {
    return new Response(JSON.stringify({ message: "Not found." }), {
      status: 404,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  const SUB_DOMAIN = project.domain.replace(
    `.${process.env.MAIN_HOST_DOMAIN}`,
    "",
  );

  await new Promise((resolve) => {
    const dockerBuild = spawn(
      "docker",
      [
        "build",
        "-t",
        `${SUB_DOMAIN}:latest`,
        "--build-arg",
        `APP_NAME=${process.env.PROJECT_APP_NAME}`,
        "--build-arg",
        `PG_URL=${process.env.PG_URL}`,
        "--build-arg",
        `NEXT_PUBLIC_DASHBOARD_URL=${process.env.PROJECT_NEXT_PUBLIC_DASHBOARD_URL}`,
        "--build-arg",
        `NEXT_PUBLIC_UMAMI_ID=${project.env.NEXT_PUBLIC_UMAMI_ID}`,
        "--build-arg",
        `PROJECT_ID=${project.id}`,
        "-f",
        "Dockerfile.export",
        ".",
      ],
      {
        cwd: process.env.PROJECT_PATH,
      },
    );

    dockerBuild.stdout.on("data", (data) => {
      console.log(`dockerBuild:stdout: ${data}`);
    });

    dockerBuild.stderr.on("data", (data) => {
      console.error(`dockerBuild:stderr: ${data}`);
    });

    dockerBuild.on("close", (code) => {
      console.log(`dockerBuild:child process exited with code ${code}`);
      resolve(code);
    });
  });

  await new Promise((resolve) => {
    const dockerRun = spawn("docker", [
      "run",
      "-d",
      "--restart=unless-stopped",
      `--network=${process.env.PROJECT_DOCKER_NETWORK}`,
      "-l",
      "traefik.enable=true",
      "-l",
      `traefik.docker.network=${process.env.PROJECT_DOCKER_NETWORK}`,
      "-l",
      `traefik.http.routers.${SUB_DOMAIN}.rule=Host(\`${project.domain}\`)`,
      "-l",
      `traefik.http.routers.${SUB_DOMAIN}.entrypoints=${process.env.PROJECT_HTTP_ENTRYPOINTS}`,
      "-l",
      `traefik.http.routers.${SUB_DOMAIN}.tls.certresolver=${process.env.PROJECT_TLS_CERTRESOLVER}`,
      "-l",
      `traefik.http.services.${SUB_DOMAIN}.loadbalancer.server.port=${process.env.PROJECT_PORT}`,
      "--name",
      SUB_DOMAIN,
      `${SUB_DOMAIN}:latest`,
    ]);

    dockerRun.stdout.on("data", (data) => {
      console.log(`dockerRun:stdout: ${data}`);
    });

    dockerRun.stderr.on("data", (data) => {
      console.error(`dockerRun:stderr: ${data}`);
    });

    dockerRun.on("close", (code) => {
      console.log(`dockerRun:child process exited with code ${code}`);
      resolve(code);
    });
  });

  return new Response(JSON.stringify({ message: "Success." }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
