import fs from "fs/promises";
import path from "path";
import { connectToDB } from "@/utils/database";
import Gallery from "@/models/gallery";

export const POST = async (request) => {
  const formData = await request.formData();
  const name = formData.get("name");

  // Create a directory to store images (if not exists)
  const imagesDirectory = path.join(process.cwd(), "public", "images");
  await fs.mkdir(imagesDirectory, { recursive: true });

  const imageFiles = [];

  for (const [fieldName, file] of formData.entries()) {
    if (fieldName.startsWith("image")) {
      const uniqueFilename = `${name}-${Date.now()}-${file.name}`;
      const filePath = path.join(imagesDirectory, uniqueFilename);

      await fs.writeFile(filePath, Buffer.from(await file.arrayBuffer()));

      imageFiles.push(`/images/${uniqueFilename}`);
    }
  }

  try {
    await connectToDB();
    const newGallery = new Gallery({
      name: name,
      images: imageFiles, // Store image paths in the model
    });
    await newGallery.save();

    return new Response(JSON.stringify({ submit: "submitted" }), { status: 201 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ status: "invalid submission" }), { status: 500 });
  }
};
