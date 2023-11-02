import Gallery from "@/models/gallery";
import { connectToDB } from "@/utils/database";

export const GET = async (request, { params }) => {
  try {
    await connectToDB();

    const Data = await Gallery.find({ _id: params.id });
    if (!Data) return new Response("Data Not Found", { status: 404 });

    return new Response(JSON.stringify(Data), { status: 200 });
  } catch (error) {
    return new Response("Error ", { status: 500 });
  }
};