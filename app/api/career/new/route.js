import Career from "@/models/career";
import { connectToDB } from "@/utils/database";
import { forceRevalidate } from "@/utils/removeCache";
import fs from "fs";
import path from "path";
import cloudinary from "@/utils/cloudinary";
import DatauriParser from "datauri/parser";

export const POST = async (request, res) => {
  forceRevalidate(request);

  const formData0 = await request.formData();
  const name = formData0.get("name");
  const address = formData0.get("address");
  const phoneno = formData0.get("phoneno");
  const email = formData0.get("email");
  const resume = formData0.get("resume");
  const position = formData0.get("position");

  // upload in public folder
  // let type = resume.type;
  // type = type.split("/")[1];
  // const uniqueFilename = `${name}-${Date.now()}-${name}.${type}`;
  // const filePath = path.join(process.cwd(), "public", "files", uniqueFilename);
  // fs.writeFileSync(filePath, Buffer.from(await resume.arrayBuffer()));

  let bufers = Buffer.from(await resume.arrayBuffer());
  let fileurl = await createImage(resume, bufers);

  try {
    await connectToDB();
    const newCareer = new Career({
      name: name,
      phoneno: phoneno,
      address: address,
      email: email,
      position: position,
      resume: fileurl,
    });
    await newCareer.save();
    return new Response(JSON.stringify({ submit: "submitted" }), {
      status: 200,
    });
  } catch (e) {
    return new Response(JSON.stringify({ status: "invalid submission" }), {
      status: 400,
    });
  }
};

const createImage = async (img, buffers) => {
  console.log(img);
  try {
    const parser = new DatauriParser();
    const base64Image = parser.format(
      path.extname(img.name).toString(),
      buffers
    );

    const uploadedImageResponse = await cloudinary.uploader.upload(
      base64Image.content,
      { resource_type: "raw" }
    );
    console.log(uploadedImageResponse);
    return uploadedImageResponse.secure_url;
  } catch (error) {
    console.log("🚀 ~ file: route.js:69 ~ createImage ~ error:", error);
  }
};

export const revalidate = 0;
