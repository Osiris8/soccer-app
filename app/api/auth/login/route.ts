import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { connectToDB } from "@/lib/database";
import User from "@/models/user";

// ✅ Méthode POST : connexion utilisateur
export const POST = async (req: Request) => {
  try {
    // 1. Connexion à la base de données
    await connectToDB();

    // 2. Lecture du corps de la requête
    const { email, password } = await req.json();

    // 3. Recherche de l'utilisateur
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 401 }
      );
    }

    // 4. Vérification du mot de passe
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 401 }
      );
    }

    // 5. Génération du token JWT
    const access_token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET as string,
      { expiresIn: "1d" }
    );

    // 6. Réponse au frontend
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
