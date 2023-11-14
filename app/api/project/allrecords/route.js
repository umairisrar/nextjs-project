import Project from "@/models/project";
import { connectToDB } from "@/utils/database";

export const GET = async (request) => {
  try {
    await connectToDB();

    const project = await Project.find({});
    console.log(project);
    if (!project) return new Response("project Not Found", { status: 500 });
    console.log("🚀 ~ file: route.js:12 ~ GET ~ project:", project);
    return new Response(JSON.stringify(project), {
      status: 200,
      headers: {
        "Cache-Control": "no-store",
      },
    });
  } catch (error) {
    console.log("🚀 ~ file: route.js:13 ~ GET ~ error:", error);
    return new Response("Internal Server Error", { status: 404 });
  }
};
