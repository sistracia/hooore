type Params = {
  projectId: string;
};

export async function GET(_: Request, __: { params: Params }) {
  return new Response("Hello World!", {
    status: 200,
  });
}
