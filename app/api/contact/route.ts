import { connectDB } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  try {
    const { firstName, lastName, email, phone, subject, message } =
      await request.json();

    if (!firstName || !lastName || !email || !phone || !subject || !message) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }
    const query =
      "INSERT INTO contact_us (`first_name`, `last_name`, `email`, `phone`, `subject`, `message`) VALUES (?, ?, ?, ?, ?, ?)";
    const values = [firstName, lastName, email, phone, subject, message];

    try {
      await connectDB.promise().query(query, values);
      return NextResponse.json(
        { message: "Contact information submitted successfully" },
        { status: 200 }
      );
    } catch (error: any) {
      return NextResponse.json(
        {
          message: `DB insertion failed: ${error.message}`,
        },
        { status: 400 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      {
        message: "Server Error",
      },
      { status: 500 }
    );
  }
};
