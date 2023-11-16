import Feedback from "@/models/feedback";
import { connectToDB } from "@/utils/database";
import { forceRevalidate } from "@/utils/removeCache";

export const POST = async (request) => {
  forceRevalidate(request);

  const values = await request.json();
  const { name, message, subject, email } = values;
  try {
    await connectToDB();
    const newFeedback = new Feedback({ name, message, subject, email });

    await newFeedback.save();
    return new Response(JSON.stringify(newFeedback), { status: 201 });
  } catch (error) {
    return new Response("Failed to create a new prompt", { status: 400 });
  }
};

export const revalidate = 0;
