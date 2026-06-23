import { NextResponse } from 'next/server';
import fs from 'fs';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get('name');
  
  if (!name) return new NextResponse('Missing name', { status: 400 });

  const images: Record<string, string> = {
    'hero': 'C:\\Users\\madk\\.gemini\\antigravity-ide\\brain\\5deff66c-a6db-45d5-934b-45c06164c522\\hero_luxury_car_1782170622285.png',
    'suv': 'C:\\Users\\madk\\.gemini\\antigravity-ide\\brain\\5deff66c-a6db-45d5-934b-45c06164c522\\premium_suv_1782170632167.png',
    'ev': 'C:\\Users\\madk\\.gemini\\antigravity-ide\\brain\\5deff66c-a6db-45d5-934b-45c06164c522\\luxury_ev_1782170641006.png',
    'showroom': 'C:\\Users\\madk\\.gemini\\antigravity-ide\\brain\\5deff66c-a6db-45d5-934b-45c06164c522\\dealership_showroom_1782170650183.png'
  };

  const imagePath = images[name];
  if (!imagePath || !fs.existsSync(imagePath)) {
    return new NextResponse('Image not found', { status: 404 });
  }

  const fileBuffer = fs.readFileSync(imagePath);
  return new NextResponse(fileBuffer, {
    headers: { 'Content-Type': 'image/png', 'Cache-Control': 'public, max-age=86400' },
  });
}
