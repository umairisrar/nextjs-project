import Career from "@/models/career";
import { connectToDB } from "@/utils/database";
import fs from "fs";
import path from "path";

export const POST = async (request, res) => {
  const formData0 = await request.formData();
  const name = formData0.get("name");
  const address = formData0.get("address");
  const phoneno = formData0.get("phoneno");
  const email = formData0.get("email");
  const resume = formData0.get("resume");
  const position = formData0.get("position");
  let type = resume.type;
  type = type.split("/")[1];
  const uniqueFilename = `${name}-${Date.now()}-${name}.${type}`;
  const filePath = path.join(process.cwd(), "public", "files", uniqueFilename);
  fs.writeFileSync(filePath, Buffer.from(await resume.arrayBuffer()));

  try {
    await connectToDB();
    const newCareer = new Career({
      name: name,
      phoneno: phoneno,
      address: address,
      email: email,
      position: position,
      resume: `/files/${uniqueFilename}`,
    });
    await newCareer.save();
    return new Response(JSON.stringify({ submit: "submitted" }), { status: 201 });
    return;
  } catch (e) {
    return new Response(JSON.stringify({ status: "invalid submission" }), { status: 500 });
    return;
  }
};
