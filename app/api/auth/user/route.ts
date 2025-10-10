import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { connectToDB } from "@/lib/database";
import User from "@/models/user";

export const GET = async (req: Request) => {
  try {
    await connectToDB();

    // 1️⃣ Vérifie le header Authorization
    const authHeader = req.headers.get("authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json(
        { error: "Unauthorized: no token provided" },
        { status: 401 }
      );
    }

    // 2️⃣ Récupère le token
    const token = authHeader.split(" ")[1];

    // 3️⃣ Décode le token
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as {
      userId: string;
    };

    // 4️⃣ Cherche l’utilisateur en DB
    const user = await User.findById(decoded.userId).select("firstname _id");
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // 5️⃣ Retourne les infos essentielles
    return NextResponse.json(
      {
        id: user._id,
        firstname: user.firstname,
      },
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
  } catch (error) {
    console.error("Failed to fetch user:", error);
    return NextResponse.json(
      { error: "Invalid or expired token" },
      { status: 401 }
    );
  }
};
