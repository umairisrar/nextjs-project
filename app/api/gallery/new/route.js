import fs from "fs/promises";
import path from "path";
import { connectToDB } from "@/utils/database";
import Gallery from "@/models/gallery";
import { forceRevalidate } from "@/utils/removeCache";
import cloudinary from "@/utils/cloudinary";
import DatauriParser from "datauri/parser";

export const POST = async (request) => {
  forceRevalidate(request);

  const formData = await request.formData();
  const name = formData.get("name");

  // Create a directory to store images (if not exists)
  // const imagesDirectory = path.join(process.cwd(), "public", "gallery");
  // await fs.mkdir(imagesDirectory, { recursive: true });

  const imageFiles = [];

  for (const [fieldName, file] of formData.entries()) {
    if (fieldName.startsWith("image")) {
      let bufers = Buffer.from(await file.arrayBuffer());
      let imageurl = await createImage(file, bufers);

      // Upload in public Folder
      // const uniqueFilename = `${name}-${Date.now()}-${file.name}`;
      // const filePath = path.join(imagesDirectory, uniqueFilename);
      // await fs.writeFile(filePath, Buffer.from(await file.arrayBuffer()));

      imageFiles.push(imageurl);
    }
  }
  console.log(imageFiles);

  try {
    await connectToDB();
    const newGallery = new Gallery({
      name: name,
      images: imageFiles, // Store image paths in the model
    });
    await newGallery.save();

    return new Response(JSON.stringify({ submit: "submitted" }), {
      status: 201,
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ status: "invalid submission" }), {
      status: 404,
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
      { folder: "gallery", resource_type: "image" }
    );
    return uploadedImageResponse.url;
  } catch (error) {
    console.log("🚀 ~ file: route.js:69 ~ createImage ~ error:", error);
  }
};

export const config = {
  api: {
    bodyParser: false,
  },
};

export const revalidate = 0;
