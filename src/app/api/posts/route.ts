import { NextResponse } from "next/server"
import { content } from "./content2"

export const dynamic = "force-dynamic"

export function GET() {
  return NextResponse.json(
    { posts: content, total: content.length },
    { headers: { "Cache-Control": "no-store" } },
  )
}
