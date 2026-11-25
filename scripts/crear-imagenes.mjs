// Crea las imágenes del sitio a partir del logo y de dibujos sencillos.
// Uso: node scripts/crear-imagenes.mjs
import sharp from 'sharp';

const Y = '#FFD200';
const K = '#141414';
const logo = 'public/logo-original.png';

// Logo en tamaños pequeños (cabecera, ícono de pestaña, ícono del celular)
await sharp(logo).resize(192, 192).png().toFile('public/logo-192.png');
await sharp(logo).resize(48, 48).png().toFile('public/favicon.png');
await sharp(logo).resize(180, 180).png().toFile('public/apple-touch-icon.png');

const sello = (x, y, bg = K, fg = Y) => `
  <g transform="translate(${x} ${y})">
    <rect width="190" height="54" rx="8" fill="${bg}"/>
    <text x="95" y="37" font-family="Montserrat, Arial, sans-serif" font-size="28" font-weight="900" fill="${fg}" text-anchor="middle" letter-spacing="3">SÁTIRA</text>
  </g>`;

// Imagen por defecto al compartir (1200x630)
const circle = await sharp(logo)
  .resize(360, 360)
  .composite([{ input: Buffer.from('<svg width="360" height="360"><circle cx="180" cy="180" r="180"/></svg>'), blend: 'dest-in' }])
  .png()
  .toBuffer();
const ogSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <rect width="1200" height="630" fill="${K}"/>
  <circle cx="300" cy="315" r="196" fill="${Y}"/>
  <text x="540" y="300" font-family="Montserrat, Arial, sans-serif" font-size="96" font-weight="900" fill="${Y}">LÍO DIARIO</text>
  <text x="544" y="370" font-family="Montserrat, Arial, sans-serif" font-size="34" font-weight="700" fill="#fff">Noticias que nunca pasaron</text>
  ${sello(544, 410, Y, K)}
</svg>`;
await sharp(Buffer.from(ogSvg))
  .composite([{ input: circle, left: 120, top: 135 }])
  .jpeg({ quality: 85 })
  .toFile('public/og-default.jpg');

// Ilustraciones de los artículos de ejemplo
const dibujos = {
  'bombillo-cumpleanos': `
    <rect width="1200" height="630" fill="${K}"/>
    ${Array.from({ length: 40 }, (_, i) => {
      const x = (i * 197) % 1200, y = (i * 113) % 630, c = i % 3 ? Y : '#fff';
      return `<rect x="${x}" y="${y}" width="14" height="26" rx="3" fill="${c}" transform="rotate(${i * 37} ${x} ${y})"/>`;
    }).join('')}
    <circle cx="600" cy="300" r="190" fill="${Y}" opacity="0.18"/>
    <circle cx="600" cy="290" r="130" fill="${Y}"/>
    <rect x="545" y="400" width="110" height="34" rx="6" fill="#bbb"/>
    <rect x="545" y="440" width="110" height="26" rx="6" fill="#999"/>
    <rect x="565" y="472" width="70" height="26" rx="10" fill="#777"/>
    <path d="M560 380 L580 290 L600 330 L620 290 L640 380" stroke="${K}" stroke-width="10" fill="none" stroke-linejoin="round"/>
    <path d="M540 170 L600 40 L660 170 Z" fill="#ff4d6d"/>
    <circle cx="600" cy="38" r="18" fill="#fff"/>
    <circle cx="570" cy="125" r="9" fill="${Y}"/><circle cx="625" cy="95" r="9" fill="${Y}"/><circle cx="615" cy="150" r="9" fill="${Y}"/>
    ${sello(970, 540, Y, K)}`,
  'motoconcho-nevera': `
    <rect width="1200" height="630" fill="${Y}"/>
    <rect y="470" width="1200" height="160" fill="${K}"/>
    ${[0, 1, 2, 3, 4, 5].map((i) => `<rect x="${i * 220 + 20}" y="540" width="120" height="16" fill="${Y}"/>`).join('')}
    <circle cx="400" cy="440" r="70" fill="none" stroke="${K}" stroke-width="26"/>
    <circle cx="760" cy="440" r="70" fill="none" stroke="${K}" stroke-width="26"/>
    <path d="M400 440 L520 330 L700 330 L760 440" stroke="${K}" stroke-width="24" fill="none" stroke-linejoin="round"/>
    <path d="M700 330 L740 250 L790 250" stroke="${K}" stroke-width="20" fill="none" stroke-linecap="round"/>
    <rect x="470" y="120" width="170" height="220" rx="12" fill="#fff" stroke="${K}" stroke-width="10"/>
    <line x1="470" y1="200" x2="640" y2="200" stroke="${K}" stroke-width="8"/>
    <rect x="610" y="140" width="10" height="40" fill="${K}"/><rect x="610" y="220" width="10" height="60" fill="${K}"/>
    <rect x="300" y="250" width="420" height="60" rx="18" fill="#7ec8e3" stroke="${K}" stroke-width="10" transform="rotate(-8 510 280)"/>
    <circle cx="555" cy="70" r="44" fill="${K}"/>
    <rect x="525" y="20" width="60" height="22" rx="10" fill="#ff4d6d"/>
    <path d="M140 300 h120 M100 360 h150 M160 420 h90" stroke="${K}" stroke-width="12" stroke-linecap="round"/>
    ${sello(970, 30)}`,
  'colmado-fiao-digital': `
    <rect width="1200" height="630" fill="${Y}"/>
    <rect x="0" y="0" width="1200" height="90" fill="${K}"/>
    ${[0, 1, 2, 3, 4, 5, 6, 7].map((i) => `<path d="M${i * 150} 90 h150 v40 a75 40 0 0 1 -150 0 Z" fill="${i % 2 ? '#fff' : '#e63946'}"/>`).join('')}
    <rect x="330" y="190" width="420" height="370" rx="14" fill="#fff" stroke="${K}" stroke-width="12"/>
    ${[0, 1, 2, 3, 4, 5].map((i) => `<line x1="380" y1="${270 + i * 45}" x2="700" y2="${270 + i * 45}" stroke="#ccc" stroke-width="5"/>`).join('')}
    <rect x="330" y="190" width="40" height="370" fill="${K}"/>
    <rect x="720" y="300" width="200" height="170" rx="20" fill="${K}"/>
    <path d="M760 300 v-50 a60 60 0 0 1 120 0 v50" fill="none" stroke="${K}" stroke-width="28"/>
    <circle cx="820" cy="370" r="22" fill="${Y}"/><rect x="810" y="380" width="20" height="50" rx="6" fill="${Y}"/>
    <text x="450" y="250" font-family="Montserrat, Arial, sans-serif" font-size="40" font-weight="900" fill="${K}">FIAO</text>
    <text x="410" y="330" font-family="Montserrat, Arial, sans-serif" font-size="34" font-weight="700" fill="#888">* * * * * *</text>
    ${sello(60, 540)}`,
};

for (const [name, body] of Object.entries(dibujos)) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">${body}</svg>`;
  await sharp(Buffer.from(svg)).jpeg({ quality: 82 }).toFile(`public/images/noticias/${name}.jpg`);
}

console.log('Imágenes listas');
