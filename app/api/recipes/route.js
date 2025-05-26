import { NextResponse } from "next/server";

export async function POST(request) {
  const { title } = await request.json();

  // ← here you could insert into a database, etc.
  console.log("New recipe title:", title);

  return NextResponse.json(
    { message: "Recipe added successfully!", recipe: { title } },
    { status: 201 },
  );
}
