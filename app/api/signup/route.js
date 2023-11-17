import User from "@/models/user";
import { forceRevalidate } from "@/utils/removeCache";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { connectToDB } from "@/utils/database";

const secretKey = "albwardysecretkey";

export const POST = async (req) => {
  forceRevalidate(req);

  const values = await req.json();
  const { name: username, password, email } = values;
  console.log({ username, email, password });

  try {
    await connectToDB();

    let user = await User.findOne({ email });

    if (user) {
      return new Response("User already exist", { status: 400 });
    }

    // Create a new user
    user = new User({
      username,
      email,
      password, // Ensure the password is hashed before saving
    });

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    // Save the user to the database
    await user.save();

    // Create JWT payload
    const payload = {
      user: {
        id: user.id,
        username,
        email,
        password,
      },
    };

    // Generate JWT token
    const token = await signToken(payload, secretKey, { expiresIn: "24h" });

    if (token) {
      // Send the token in the response
      return new Response(JSON.stringify({ token }), { status: 201 });
    } else {
      return new Response("Failed to create token", { status: 500 });
    }
  } catch (error) {
    console.error(error.message);
    return new Response("Failed to Signup User", { status: 400 });
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
