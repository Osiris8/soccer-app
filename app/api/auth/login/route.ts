import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { connectToDB } from "@/lib/database";
import User from "@/models/user";

export const POST = async (req: Request) => {
  try {
    await connectToDB();

    const { email, password } = await req.json();

    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 401 }
      );
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 401 }
      );
    }

    const access_token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET as string,
      { expiresIn: "1d" }
    );

    return NextResponse.json(
      { message: "Login successful", access_token },
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
  } catch (error) {
    console.error("Login failed:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
};
