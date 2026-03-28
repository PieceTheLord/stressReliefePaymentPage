import path from "path";
import fs from "fs";
import { NextResponse } from "next/server";


export async function GET(request: Request) {


  const authorized = true;


  if (!authorized) {
    return new NextResponse("Unauthorized", { status: 401 })
  }

  try {
    const filePath = path.join(process.cwd(), "private_assets", "guide.jpg")
    const fileBuffer = fs.readFileSync(filePath)

    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Type': 'image/jpg',
        'Content-Disposition': 'attachment; filename="guide.jpg"',
      }
    })
  } catch (error) {
    return new NextResponse("File not found", { status: 404 })
  }
}