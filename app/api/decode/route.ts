//import prisma from "@/utils/prisma";
import { NextRequest, NextResponse } from "next/server";
import { decode62 } from "@/utils/decode";
import prisma from "@/utils/prisma";

export const POST = async (request: NextRequest) => {
  try {
    const { shortUrl } = await request.json();

    const fullUrlId = decode62(shortUrl);
    
    const fullUrl = await prisma.fullUrl.findFirstOrThrow({
      where: {
        id: fullUrlId
      }
    })

    return NextResponse.json({
      fullUrl: fullUrl.url
    });

  } catch (e) {
    console.error(e);
    return NextResponse.json(
      {message: "Something went wrong when decoding", result: e},
      { status: 500 }
    )
  }
}