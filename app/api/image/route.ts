import { NextResponse } from 'next/server';

export async function GET() {
  return new NextResponse('Image API retired. Use direct image URLs instead.', { status: 404 });
}
