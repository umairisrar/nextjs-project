import Feedback from "@/models/feedback";
import { connectToDB } from "@/utils/database";
import { forceRevalidate } from "@/utils/removeCache";
import { revalidatePath } from "next/cache";
import { NextRequest } from "next/server";

export const GET = async (request) => {
  forceRevalidate(request);

  try {
    await connectToDB();

    const Feedbackvalue = await Feedback.find({});
    if (!Feedbackvalue) {
      return new Response("Feedback Not Found", { status: 500 });
    }
    return new Response(JSON.stringify(Feedbackvalue), {
      status: 200,
      headers: {
        "Cache-Control": "no-store",
      },
    });
  } catch (error) {
    return new Response("Internal Server Error", { status: 404 });
  }
};

export const revalidate = 0;
