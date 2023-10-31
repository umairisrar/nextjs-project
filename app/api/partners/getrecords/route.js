import Partners from "@/models/partners";
import { connectToDB } from "@/utils/database";

export const GET = async (request) => {
  try {
    await connectToDB();

    const PartnersData = await Partners.find({});
    if (!PartnersData) return new Response("Partners Not Found", { status: 404 });

    return new Response(JSON.stringify(PartnersData), { status: 200 });
  } catch (error) {
    return new Response("Internal Server Error", { status: 500 });
  }
};
