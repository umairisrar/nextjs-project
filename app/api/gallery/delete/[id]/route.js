import Gallery from "@/models/gallery";
import { connectToDB } from "@/utils/database";

export const DELETE = async (request, { params }) => {
  try {
    await connectToDB();

    await Gallery.findByIdAndRemove(params.id);

    return new Response("Gallery deleted successfully", { status: 200 });
  } catch (error) {
    return new Response("Error deleting prompt", { status: 500 });
  }
};
