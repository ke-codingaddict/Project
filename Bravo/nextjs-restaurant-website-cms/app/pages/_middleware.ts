import { NextResponse, NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  let response = NextResponse.next();

  const country = request.headers.get("x-vercel-ip-country") || "Kenya";
  const city = request.headers.get("x-vercel-ip-city") || "Nairobi";

  let cookieFromRequest = request.cookies.get("location-cookie");

  if (!cookieFromRequest) {
    response.cookies.set("location-cookie", `${country || city}`);
  }

  return response;
}
