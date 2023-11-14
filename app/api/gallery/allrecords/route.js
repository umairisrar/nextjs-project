import Gallery from "@/models/gallery";
import { connectToDB } from "@/utils/database";
import { forceRevalidate } from "@/utils/removeCache";

export const GET = async (request) => {
  forceRevalidate(request);

  try {
    await connectToDB();

    const Data = await Gallery.find({});
    if (!Data) return new Response("Data Not Found", { status: 500 });

    return new Response(JSON.stringify(Data), { status: 200 });
  } catch (error) {
    return new Response("Internal Server Error", { status: 400 });
  }
};

export const revalidate = 0;
