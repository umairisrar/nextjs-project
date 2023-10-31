import Section from "@/models/section";
import { connectToDB } from "@/utils/database";

export const DELETE = async (request, { params }) => {
  try {
    await connectToDB();

    await Section.findByIdAndRemove(params.id);

    return new Response("Section deleted successfully", { status: 200 });
  } catch (error) {
    return new Response("Error deleting section", { status: 500 });
  }
};
