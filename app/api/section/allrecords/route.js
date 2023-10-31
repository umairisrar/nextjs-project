import Section from "@/models/section";
import { connectToDB } from "@/utils/database";

export const GET = async (request) => {
  try {
    await connectToDB();

    const section = await Section.find({});
    if (!section) return new Response("section Not Found", { status: 404 });

    return new Response(JSON.stringify(section), { status: 200 });
  } catch (error) {
    return new Response("Internal Server Error", { status: 500 });
  }
};
