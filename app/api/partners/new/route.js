import { connectToDB } from "@/utils/database";
import nc from "next-connect";
import Partners from "@/models/partners";
import fs from "fs";
import path from "path";
import { forceRevalidate } from "@/utils/removeCache";
import dotenv from "dotenv";
import multer from "multer";
import cloudinary from "@/utils/cloudinary";
import DatauriParser from "datauri/parser";

dotenv.config();

export const POST = async (request, res) => {
  forceRevalidate(request);
  console.log(request.file);
  const formData0 = await request.formData();
  const name = formData0.get("name");
  const image = formData0.get("image");
  let bufers = Buffer.from(await image.arrayBuffer());
  let imageurl = await createImage(image, bufers);
  console.log("🚀 ~ file: route.js:24 ~ POST ~ imageurl:", imageurl);

  try {
    await connectToDB();
    const newPartner = new Partners({
      name: name,
      image: imageurl.url,
    });
    await newPartner.save();
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
  try {
    const parser = new DatauriParser();
    const base64Image = parser.format(
      path.extname(img.name).toString(),
      buffers
    );

    const uploadedImageResponse = await cloudinary.uploader.upload(
      base64Image.content,
      { folder: "partners", resource_type: "image" }
    );
    return uploadedImageResponse;
  } catch (error) {
    console.log("🚀 ~ file: route.js:69 ~ createImage ~ error:", error);
  }
};

export const revalidate = 0;
