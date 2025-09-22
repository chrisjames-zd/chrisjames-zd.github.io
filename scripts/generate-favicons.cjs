const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function generate() {
  const svgPath = path.resolve(__dirname, '../public/favicon.svg');
  if (!fs.existsSync(svgPath)) {
    console.error('favicon.svg not found at', svgPath);
    process.exit(1);
  }

  const outDir = path.resolve(__dirname, '../public');
  const sizes = [16, 32, 180];

  for (const size of sizes) {
    const outName = size === 180 ? 'apple-touch-icon.png' : `favicon-${size}x${size}.png`;
    const outPath = path.join(outDir, outName);
    console.log(`Generating ${outName}...`);
    await sharp(svgPath)
      .resize(size, size, { fit: 'cover' })
      .png({ quality: 90 })
      .toFile(outPath);
  }

  console.log('Favicons generated in', outDir);
}

generate().catch(err => {
  console.error(err);
  process.exit(1);
});
