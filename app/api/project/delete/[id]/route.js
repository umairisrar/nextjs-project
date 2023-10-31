import Project from "@/models/project";
import { connectToDB } from "@/utils/database";

export const DELETE = async (request, { params }) => {
  try {
    await connectToDB();

    // Find the prompt by ID and remove it
    await Project.findByIdAndRemove(params.id);

    return new Response("Project deleted successfully", { status: 200 });
  } catch (error) {
    return new Response("Error deleting prompt", { status: 500 });
  }
};
