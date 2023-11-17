import User from "@/models/user";
import { connectToDB } from "@/utils/database";
import { forceRevalidate } from "@/utils/removeCache";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const secretKey = "albwardysecretkey";

export const POST = async (request, res) => {
  forceRevalidate(request);

  const values = await request.json();
  const { email, password } = values;
  console.log({ email, password });
  try {
    await connectToDB();

    // Check if the user exists
    const user = await User.findOne({ email });

    if (!user) {
      return new Response("Invalid Credentials", { status: 500 });
    }

    // Compare entered password with hashed password in the database
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return new Response("Invalid Credentials", { status: 500 });
    }

    // Create JWT payload
    const payload = {
      user: {
        id: user.id,
        password,
        email,
      },
    };

    // Generate JWT token
    const token = await signToken(payload, secretKey, { expiresIn: "1h" });

    if (token) {
      // Send the token in the response
      return new Response(JSON.stringify({ token }), { status: 201 });
    } else {
      return new Response("Failed to create token", { status: 500 });
    }
  } catch (error) {
    console.error(error.message);
    return new Response("Server Error", { status: 400 });
  }
};

const signToken = (payload, secretKey, options) => {
  return new Promise((resolve, reject) => {
    jwt.sign(payload, secretKey, options, (err, token) => {
      if (err) {
        console.error("Error signing token:", err);
        reject(err);
      } else {
        resolve(token);
      }
    });
  });
};

export const revalidate = 0;
