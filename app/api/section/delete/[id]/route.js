import Section from "@/models/section";
import { connectToDB } from "@/utils/database";
import { forceRevalidate } from "@/utils/removeCache";

export const DELETE = async (request, { params }) => {
  forceRevalidate(request);

  try {
    await connectToDB();

    await Section.findByIdAndRemove(params.id);

    return new Response("Section deleted successfully", { status: 200 });
  } catch (error) {
    return new Response("Error deleting section", { status: 500 });
  }
};

export const revalidate = 0;
