//import prisma from "@/utils/prisma";
import { NextRequest, NextResponse } from "next/server";
import { encode62 } from "@/utils/encode";
import prisma from "@/utils/prisma";

export const POST = async (request: NextRequest) => {
  try {
    const { url } = await request.json();
    
    const fullUrl = await prisma.fullUrl.create({
      data: {
        url
      }
    })

    const shortUrl = encode62(fullUrl.id);
    return NextResponse.json({
      shortUrl
    })
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      {message: "Something went wrong when encoding", result: e},
      { status: 500 }
    )
  }
}