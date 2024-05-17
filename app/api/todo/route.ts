import { NextResponse } from 'next/server'

// creating an API route
export const GET = async (request: Request) => {
  return NextResponse.json({ message: 'Hello!' })
}

export const POST = async (request: Request) => {
  const data = await request.json()
  return NextResponse.json({ message: data })
}
