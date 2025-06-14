import { connectDB } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(req: NextRequest) {
  try {
    const { userid, password } = await req.json();

    if (!userid || !password) {
      return NextResponse.json(
        { message: "Email and password are required" },
        { status: 400 }
      );
    }

    const [results]: any = await new Promise((resolve, reject) => {
      connectDB.query(
        "SELECT * FROM user WHERE userid = ? AND password = ?",
        [userid, password],
        (error: any, results: any) => {
          if (error) {
            reject(error);
          } else {
            resolve([results]);
          }
        }
      );
    });

    if (!Array.isArray(results) || results.length === 0) {
      return NextResponse.json(
        { message: "Invalid credentials" },
        { status: 401 }
      );
    } else {
      let token = jwt.sign({ userid }, process.env.JWT_SECRET!, {
        algorithm: "HS256",
        expiresIn: "1h",
      });
      return NextResponse.json(
        {
          message: token,
        },
        { status: 200 }
      );
    }
  } catch (error) {
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
