import { db } from "@/lib/db";
import { organizationsTable } from "@/lib/db/schema";
import { NextResponse } from "next/server";
import { eq, or } from "drizzle-orm";
import bcrypt from "bcrypt";

export async function POST(req) {
  try {
    const body = await req.json();
    const { data } = body;
    const existing = await db
      .select()
      .from(organizationsTable)
      .where(
        or(
          eq(organizationsTable.email, data.email),
          eq(organizationsTable.organization_name, data.organization_name),
          eq(organizationsTable.nin, data.nin)
        )
      );

    if (existing.length > 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Email or organization name or Nin already exists",
        },
        { status: 400 }
      );
    }
    const hashedPassword = await bcrypt.hash(data.password, 10);

    await db.insert(organizationsTable).values({
      firstname: data.firstname,
      lastname: data.lastname,
      email: data.email,
      nin: data.nin,
      organization_name: data.organization_name,
      country: data.country,
      postal_code: data.postal_code,
      password: hashedPassword,
    });

    return NextResponse.json({
      success: true,
      message: "Organization registered successfully!!",
    });
  } catch (err) {
    console.error("Database Error:", err);
    return NextResponse.json(
      { success: false, error: err.message },
      { status: 500 }
    );
  }
}
