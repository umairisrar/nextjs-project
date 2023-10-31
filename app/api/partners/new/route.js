import { connectToDB } from "@/utils/database";
import Partners from "@/models/partners";
import fs from "fs";
import path from "path";

export const POST = async (request, res) => {
  const formData0 = await request.formData();
  const name = formData0.get("name");
  const image = formData0.get("image");
  const uniqueFilename = `${name}-${Date.now()}-${image.name}`;
  const filePath = path.join(process.cwd(), "public", "images", uniqueFilename);
  fs.writeFileSync(filePath, Buffer.from(await image.arrayBuffer()));

  try {
    await connectToDB();
    const newPartner = new Partners({
      name: name,
      image: `/images/${uniqueFilename}`,
    });
    await newPartner.save();
    return new Response(JSON.stringify({ submit: "submitted" }), { status: 201 });
    return;
  } catch (e) {
    return new Response(JSON.stringify({ status: "invalid submission" }), { status: 500 });
    return;
  }
};
