import path from "path";
import fs from "fs";
import { NextResponse } from "next/server";


export async function GET(request: Request) {
    const authorized = true;


    if (!authorized) {
      return new NextResponse("Unauthorized", { status: 401 })
    }

    try {
      const filePath = path.join(process.cwd(), "private_assets", "stress-reliefe-guide.png")
      const fileBuffer = fs.readFileSync(filePath)

      return new NextResponse(fileBuffer, {
        headers: {
          'Content-Type': 'image/png',
          'Content-Disposition': 'attachment; filename="stress-reliefe-guide.png"',
        }
      })
    } catch (error) {
      return new NextResponse("File not found", {status: 404})
    }
}