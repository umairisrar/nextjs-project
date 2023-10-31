import Project from "@/models/project";
import { connectToDB } from "@/utils/database";

export const POST = async (request) => {
  const values = await request.json();
  const { name, date, section } = values;
  try {
    await connectToDB();
    const newProject = new Project({ name, date, section });

    await newProject.save();
    return new Response(JSON.stringify(newProject), { status: 201 });
  } catch (error) {
    return new Response("Failed to create a new prompt", { status: 500 });
  }
};
