import Project from "@/models/project";
import { connectToDB } from "@/utils/database";
import { forceRevalidate } from "@/utils/removeCache";
import { revalidatePath } from "next/cache";
import { NextRequest } from "next/server";

export const GET = async (request) => {
  forceRevalidate(request);

  try {
    await connectToDB();

    const project = await Project.find({});
    console.log(project);
    if (!project) return new Response("project Not Found", { status: 500 });
    return new Response(JSON.stringify(project), {
      status: 200,
      headers: {
        "Cache-Control": "no-store",
      },
    });
  } catch (error) {
    return new Response("Internal Server Error", { status: 404 });
  }
};

export const revalidate = 0;
