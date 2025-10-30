import { readFileSync, writeFileSync } from 'fs';
import { createCanvas, loadImage } from 'canvas';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = join(__dirname, '..');

const sizes = [
  { size: 192, name: 'icon-192.png' },
  { size: 512, name: 'icon-512.png' },
  { size: 180, name: 'apple-touch-icon.png' }
];

async function generateIcons() {
  console.log('🎨 Generiere PNG-Icons aus SVG...\n');

  const svgPath = join(projectRoot, 'public', 'icon-512.svg');
  const svgContent = readFileSync(svgPath, 'utf-8');
  
  // Erstelle temporäres PNG aus SVG (Browser-based)
  const svgDataUrl = `data:image/svg+xml;base64,${Buffer.from(svgContent).toString('base64')}`;
  
  for (const { size, name } of sizes) {
    try {
      const canvas = createCanvas(size, size);
      const ctx = canvas.getContext('2d');
      
      // Lade SVG als Image
      const img = await loadImage(svgDataUrl);
      
      // Zeichne auf Canvas
      ctx.drawImage(img, 0, 0, size, size);
      
      // Speichere als PNG
      const outputPath = join(projectRoot, 'public', name);
      const buffer = canvas.toBuffer('image/png');
      writeFileSync(outputPath, buffer);
      
      console.log(`✅ ${name} (${size}x${size})`);
    } catch (error) {
      console.error(`❌ Fehler bei ${name}:`, error.message);
    }
  }
  
  console.log('\n🎉 Icon-Generierung abgeschlossen!');
}

generateIcons().catch(console.error);
