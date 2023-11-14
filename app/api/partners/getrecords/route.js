import Partners from "@/models/partners";
import { connectToDB } from "@/utils/database";
import { forceRevalidate } from "@/utils/removeCache";

export const GET = async (request) => {
  forceRevalidate(request);

  try {
    await connectToDB();

    const PartnersData = await Partners.find({});
    if (!PartnersData)
      return new Response("Partners Not Found", { status: 404 });

    return new Response(JSON.stringify(PartnersData), { status: 200 });
  } catch (error) {
    return new Response("Internal Server Error", { status: 500 });
  }
};

export const revalidate = 0;
