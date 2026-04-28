/**
 * 사이트 설정 파일
 * Basic AI - 인공지능 기본학습 사이트
 */

import type { SiteConfig } from '../types';

const site: SiteConfig = {
  // ── 사이트 식별자 ──
  id: 'basic-ai',

  // 사이트 기본 정보
  name: 'Basic AI',
  nameKo: '인공지능 기초 학습',
  description: '인공지능의 기초부터 다양한 활용, 윤리까지 체계적으로 학습하는 교육 플랫폼',
  url: 'https://basic-ai.dreamitbiz.com',

  // ── Supabase 테이블 접두어 ──
  dbPrefix: 'bai_',

  // 부모 사이트
  parentSite: {
    name: 'DreamIT Biz',
    url: 'https://www.dreamitbiz.com'
  },

  // 브랜드 로고 텍스트
  brand: {
    parts: [
      { text: 'Basic', className: 'brand-dream' },
      { text: 'AI', className: 'brand-it' }
    ]
  },

  // 테마 컬러 (다크 블루)
  themeColor: '#1a237e',

  // ── 회사 정보 (Footer에서 참조) ──
  company: {
    name: '드림아이티비즈(DreamIT Biz)',
    ceo: '이애본',
    bizNumber: '601-45-20154',
    salesNumber: '제2024-수원팔달-0584호',
    address: '경기도 수원시 팔달구 매산로 45, 419호',
    email: 'aebon@dreamitbiz.com',
    phone: '010-3700-0629',
    kakao: 'aebon',
    businessHours: '평일: 09:00 ~ 18:00',
  },

  // ── 기능 토글 ──
  features: {
    shop: true,
    community: true,
    search: true,
    auth: true,
    license: false,
  },

  // ── 색상 ���마 옵션 (다크 블루 기본 + 4개 추가) ──
  colors: [
    { name: 'blue', color: '#1a237e' },
    { name: 'purple', color: '#4a148c' },
    { name: 'green', color: '#1b5e20' },
    { name: 'red', color: '#b71c1c' },
    { name: 'orange', color: '#e65100' },
  ],

  // 네비게이션 ��뉴
  menuItems: [
    { path: '/', labelKey: 'nav.home' },
    {
      labelKey: 'site.nav.fundamentals',
      path: '/fundamentals',
      activePath: '/fundamentals',
      dropdown: [
        { path: '/fundamentals/what-is-ai', labelKey: 'site.nav.whatIsAi' },
        { path: '/fundamentals/history', labelKey: 'site.nav.history' },
        { path: '/fundamentals/types', labelKey: 'site.nav.types' },
        { path: '/fundamentals/how-it-works', labelKey: 'site.nav.howItWorks' }
      ]
    },
    {
      labelKey: 'site.nav.applications',
      path: '/applications',
      activePath: '/applications',
      dropdown: [
        { path: '/applications/chatbot', labelKey: 'site.nav.chatbot' },
        { path: '/applications/image', labelKey: 'site.nav.image' },
        { path: '/applications/voice', labelKey: 'site.nav.voice' },
        { path: '/applications/coding', labelKey: 'site.nav.coding' }
      ]
    },
    {
      labelKey: 'site.nav.ethics',
      path: '/ethics',
      activePath: '/ethics',
      dropdown: [
        { path: '/ethics/bias', labelKey: 'site.nav.bias' },
        { path: '/ethics/privacy', labelKey: 'site.nav.privacy' },
        { path: '/ethics/responsibility', labelKey: 'site.nav.responsibility' },
        { path: '/ethics/future', labelKey: 'site.nav.future' }
      ]
    },
    { path: '/shop', labelKey: 'shop.title', activePath: '/shop' }
  ],

  // 푸터 바로가기 링크
  footerLinks: [
    { path: '/', labelKey: 'nav.home' },
    { path: '/fundamentals', labelKey: 'site.nav.fundamentals' },
    { path: '/applications', labelKey: 'site.nav.applications' },
    { path: '/ethics', labelKey: 'site.nav.ethics' },
    { path: '/shop', labelKey: 'shop.title' }
  ],

  // Family Site 목록
  familySites: [
    { name: 'DreamIT Biz (본사이트)', url: 'https://www.dreamitbiz.com' },
    { name: 'AI Hub', url: 'https://ai-hub.dreamitbiz.com' },
    { name: 'AI Prompt', url: 'https://ai-prompt.dreamitbiz.com' },
    { name: 'ChatGPT 활용', url: 'https://chatgpt.dreamitbiz.com' },
    { name: 'Claude 활용', url: 'https://claude.dreamitbiz.com' },
    { name: 'AI Agents', url: 'https://ai-agents.dreamitbiz.com' },
    { name: 'Fine-Tuning', url: 'https://fine-tuning.dreamitbiz.com' }
  ]
};

export default site;
