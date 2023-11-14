import Project from "@/models/project";
import { connectToDB } from "@/utils/database";
import { forceRevalidate } from "@/utils/removeCache";

export const DELETE = async (request, { params }) => {
  forceRevalidate(request);

  try {
    await connectToDB();

    // Find the prompt by ID and remove it
    await Project.findByIdAndRemove(params.id);

    return new Response("Project deleted successfully", { status: 200 });
  } catch (error) {
    return new Response("Error deleting prompt", { status: 500 });
  }
};

export const revalidate = 0;
