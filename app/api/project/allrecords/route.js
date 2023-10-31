import Project from "@/models/project";
import { connectToDB } from "@/utils/database";

export const GET = async (request) => {
  try {
    await connectToDB();

    const project = await Project.find({});
    if (!project) return new Response("project Not Found", { status: 404 });

    return new Response(JSON.stringify(project), { status: 200 });
  } catch (error) {
    return new Response("Internal Server Error", { status: 500 });
  }
};
