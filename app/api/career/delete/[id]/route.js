import Career from "@/models/career";
import { connectToDB } from "@/utils/database";

export const DELETE = async (request, { params }) => {
  forceRevalidate(request);
  try {
    await connectToDB();

    await Career.findByIdAndRemove(params.id);

    return new Response("Gallery deleted successfully", { status: 200 });
  } catch (error) {
    return new Response("Error deleting prompt", { status: 500 });
  }
};

export const revalidate = 0;
