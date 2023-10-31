import Section from "@/models/section";
import { connectToDB } from "@/utils/database";

export const POST = async (request) => {
  const section = await request.json();
  try {
    await connectToDB();
    const newSection = new Section({ section });

    await newSection.save();
    return new Response(JSON.stringify(newSection), { status: 201 });
  } catch (error) {
    return new Response("Failed to create a new section", { status: 500 });
  }
};
