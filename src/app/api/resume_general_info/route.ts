import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    name: "홍길동",
    github: "https://github.com/lyj2174"
  });
}