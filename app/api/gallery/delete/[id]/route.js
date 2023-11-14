import Gallery from "@/models/gallery";
import { connectToDB } from "@/utils/database";
import { forceRevalidate } from "@/utils/removeCache";

export const DELETE = async (request, { params }) => {
  forceRevalidate(request);

  try {
    await connectToDB();

    await Gallery.findByIdAndRemove(params.id);

    return new Response("Gallery deleted successfully", { status: 200 });
  } catch (error) {
    return new Response("Error deleting prompt", { status: 500 });
  }
};

export const revalidate = 0;
