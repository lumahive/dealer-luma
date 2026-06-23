const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\madk\\.gemini\\antigravity-ide\\brain\\5deff66c-a6db-45d5-934b-45c06164c522';
const destDir = path.join(__dirname, '..', 'public', 'images');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const images = {
  'hero_luxury_car_1782170622285.png': 'hero.png',
  'premium_suv_1782170632167.png': 'suv.png',
  'luxury_ev_1782170641006.png': 'ev.png',
  'dealership_showroom_1782170650183.png': 'showroom.png'
};

for (const [srcName, destName] of Object.entries(images)) {
  const srcPath = path.join(srcDir, srcName);
  const destPath = path.join(destDir, destName);
  
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
    console.log(`Berhasil menyalin ${destName} ke folder public/images`);
  } else {
    console.error(`Gagal menemukan sumber gambar: ${srcPath}`);
  }
}

console.log('Selesai! Sekarang Anda bisa commit dan push ke Vercel.');
