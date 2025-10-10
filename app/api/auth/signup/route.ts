// app/api/auth/register/route.ts
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { connectToDB } from "@/lib/database";
import User from "@/models/user";

export const POST = async (req: Request) => {
  try {
    await connectToDB();
    const { firstname, lastname, email, password } = await req.json();

    // ✅ Vérification si l'utilisateur existe déjà
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { error: "Email already in use" },
        { status: 400 }
      );
    }

    // 🔒 Hash du mot de passe
    const hashedPassword = await bcrypt.hash(password, 10);

    // ✅ Création de l'utilisateur
    const newUser = await User.create({
      firstname,
      lastname,
      email,
      password: hashedPassword,
    });

    return NextResponse.json(
      { message: "User registered successfully", userId: newUser._id },
      { status: 201 }
    );
  } catch (error) {
    console.error("Register error:", error);
    return NextResponse.json({ error: "Registration failed" }, { status: 500 });
  }
};
