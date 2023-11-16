import Feedback from "@/models/feedback";
import { connectToDB } from "@/utils/database";
import { forceRevalidate } from "@/utils/removeCache";

export const DELETE = async (request, { params }) => {
  forceRevalidate(request);

  try {
    await connectToDB();

    // Find the prompt by ID and remove it
    await Feedback.findByIdAndRemove(params.id);

    return new Response("Feedback deleted successfully", { status: 200 });
  } catch (error) {
    return new Response("Error deleting prompt", { status: 500 });
  }
};

export const revalidate = 0;
