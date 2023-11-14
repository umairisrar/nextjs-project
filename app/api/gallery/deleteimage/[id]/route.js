import Gallery from "@/models/gallery";
import { connectToDB } from "@/utils/database";
import { forceRevalidate } from "@/utils/removeCache";

export const PATCH = async (request, { params }) => {
  forceRevalidate(request);

  const name = await request.json();
  console.log(name);
  try {
    await connectToDB();
    await Gallery.updateOne({ _id: params.id }, { $pull: { images: name } });
    return new Response("Delete Successfully", { status: 200 });
  } catch (error) {
    return new Response("Error deleting prompt", { status: 500 });
  }
};

export const revalidate = 0;
