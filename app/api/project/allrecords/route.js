import Project from "@/models/project";
import { connectToDB } from "@/utils/database";
import { revalidatePath } from "next/cache";
import { NextRequest } from "next/server";

export const forceRevalidate = (request) => {
  const path = request.nextUrl.searchParams.get("path") || "/";
  revalidatePath(path);
};
export const GET = async (request) => {
  forceRevalidate(request);

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

export const revalidate = 0;
