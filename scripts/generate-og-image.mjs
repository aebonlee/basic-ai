/**
 * OG Image Generator for Basic AI
 * sharp를 사용하여 1200x630 OG 이미지를 생성합니다.
 *
 * 실행: node scripts/generate-og-image.mjs
 */

import sharp from 'sharp';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

async function generateOgImage() {
  const width = 1200;
  const height = 630;

  // 다크 블루 그라데이션 배경 + 텍스트를 SVG로 구성
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#0d1442;stop-opacity:1" />
          <stop offset="50%" style="stop-color:#1a237e;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#283593;stop-opacity:1" />
        </linearGradient>
        <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:#536dfe;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#7c4dff;stop-opacity:1" />
        </linearGradient>
      </defs>

      <!-- 배경 -->
      <rect width="${width}" height="${height}" fill="url(#bg)" />

      <!-- 장식 원 -->
      <circle cx="100" cy="530" r="200" fill="#304ffe" opacity="0.08" />
      <circle cx="1100" cy="100" r="250" fill="#7c4dff" opacity="0.06" />
      <circle cx="600" cy="600" r="180" fill="#536dfe" opacity="0.05" />

      <!-- 상단 라인 -->
      <rect x="0" y="0" width="${width}" height="6" fill="url(#accent)" />

      <!-- 아이콘 영역 (뇌 이모지 대용) -->
      <text x="600" y="200" font-family="Segoe UI Emoji, Apple Color Emoji, sans-serif" font-size="80" text-anchor="middle" fill="white">🧠</text>

      <!-- 메인 타이틀 -->
      <text x="600" y="310" font-family="'Noto Sans KR', Arial, sans-serif" font-size="72" font-weight="900" text-anchor="middle" fill="white">Basic AI</text>

      <!-- 서브타이틀 -->
      <text x="600" y="380" font-family="'Noto Sans KR', Arial, sans-serif" font-size="32" font-weight="500" text-anchor="middle" fill="#b0bec5">인공지능 기초 학습</text>

      <!-- 설명 -->
      <text x="600" y="440" font-family="'Noto Sans KR', Arial, sans-serif" font-size="22" text-anchor="middle" fill="#90a4ae">기초 개념 · AI 활용 · 윤리</text>

      <!-- 하단 구분선 -->
      <rect x="480" y="470" width="240" height="2" fill="#536dfe" opacity="0.5" />

      <!-- 브랜드 -->
      <text x="600" y="520" font-family="'Noto Sans KR', Arial, sans-serif" font-size="18" text-anchor="middle" fill="#78909c">DreamIT Biz</text>

      <!-- 도메인 -->
      <text x="600" y="560" font-family="'Noto Sans KR', Arial, sans-serif" font-size="16" text-anchor="middle" fill="#546e7a">basic-ai.dreamitbiz.com</text>

      <!-- 하단 라인 -->
      <rect x="0" y="${height - 6}" width="${width}" height="6" fill="url(#accent)" />
    </svg>
  `;

  const outputPath = join(__dirname, '..', 'public', 'og-image.png');

  await sharp(Buffer.from(svg))
    .png()
    .toFile(outputPath);

  console.log(`OG image generated: ${outputPath}`);
}

generateOgImage().catch(console.error);
