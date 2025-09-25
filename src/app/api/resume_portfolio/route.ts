import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    {
      project: "miniproject 1",
      url: "https://github.com/lyj2174/Incheon-airport-forecast"
    },
    {
      project: "miniproject 2",
      url: "https://github.com/orgs/lgcns-2nd-mp/repositories"
    }
  ]);
}