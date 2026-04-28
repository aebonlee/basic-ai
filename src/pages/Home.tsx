import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import SEOHead from '../components/SEOHead';
import site from '../config/site';
import type { ReactElement } from 'react';

const Home = (): ReactElement => {
  const { t, language } = useLanguage();

  const categories = [
    {
      icon: '\uD83E\uDDE0',
      titleKo: 'AI 기초',
      titleEn: 'AI Basics',
      descKo: '인공지능이란 무엇인지, 어떻게 발전해 왔는지, 어떤 종류가 있는지 기초부터 학습합니다.',
      descEn: 'Learn what AI is, how it has evolved, and what types exist from the ground up.',
      path: '/fundamentals/what-is-ai'
    },
    {
      icon: '\uD83D\uDCAC',
      titleKo: '챗봇 & 대화형 AI',
      titleEn: 'Chatbots & Conversational AI',
      descKo: 'ChatGPT, Claude, Gemini 등 대화형 AI의 원리와 효과적 활용법을 알아봅니다.',
      descEn: 'Explore the principles and effective use of conversational AI like ChatGPT, Claude, and Gemini.',
      path: '/applications/chatbot'
    },
    {
      icon: '\uD83C\uDFA8',
      titleKo: '이미지 생성 AI',
      titleEn: 'Image Generation AI',
      descKo: 'DALL-E, Midjourney, Stable Diffusion 등 이미지 생성 AI의 세계를 탐험합니다.',
      descEn: 'Explore the world of image generation AI including DALL-E, Midjourney, and Stable Diffusion.',
      path: '/applications/image'
    },
    {
      icon: '\uD83C\uDF99\uFE0F',
      titleKo: '음성 & 영상 AI',
      titleEn: 'Voice & Video AI',
      descKo: '음성 합성, 음성 인식, AI 영상 생성 등 멀티미디어 AI 기술을 학습합니다.',
      descEn: 'Learn about speech synthesis, recognition, and AI video generation technologies.',
      path: '/applications/voice'
    },
    {
      icon: '\uD83D\uDCBB',
      titleKo: 'AI 코딩 도구',
      titleEn: 'AI Coding Tools',
      descKo: 'GitHub Copilot, Cursor, Claude Code 등 AI 기반 코딩 도구의 활용법을 배웁니다.',
      descEn: 'Learn to use AI-powered coding tools like GitHub Copilot, Cursor, and Claude Code.',
      path: '/applications/coding'
    },
    {
      icon: '\u2696\uFE0F',
      titleKo: 'AI 윤리',
      titleEn: 'AI Ethics',
      descKo: 'AI의 편향성, 개인정보, 책임 문제 등 반드시 알아야 할 AI 윤리를 다룹니다.',
      descEn: 'Explore essential AI ethics including bias, privacy, and accountability.',
      path: '/ethics/bias'
    }
  ];

  const stats = [
    { numberKo: '6개', numberEn: '6', labelKo: '학습 영역', labelEn: 'Learning Areas' },
    { numberKo: '12+', numberEn: '12+', labelKo: '세부 주제', labelEn: 'Detailed Topics' },
    { numberKo: '50+', numberEn: '50+', labelKo: '핵심 개념', labelEn: 'Key Concepts' },
    { numberKo: '무료', numberEn: 'Free', labelKo: '학습 콘텐츠', labelEn: 'Learning Content' }
  ];

  return (
    <>
      <SEOHead
        title={`${site.name} | ${site.nameKo}`}
        description={site.description}
      />

      {/* Hero */}
      <section className="page-header">
        <div className="container">
          <h2>{t('site.home.title')}</h2>
          <p>{t('site.home.subtitle')}</p>
        </div>
      </section>

      {/* Welcome */}
      <section className="section">
        <div className="container">
          <div className="site-welcome">
            <h3>{t('site.home.welcome')}</h3>
            <p>{t('site.home.description')}</p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <div className="stats-banner">
            {stats.map((stat, i) => (
              <div className="stat-item" key={i}>
                <div className="stat-number">{language === 'ko' ? stat.numberKo : stat.numberEn}</div>
                <div className="stat-label">{language === 'ko' ? stat.labelKo : stat.labelEn}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Categories */}
      <section className="section">
        <div className="container">
          <div className="site-welcome">
            <h3>{language === 'ko' ? '\uD83D\uDCDA \uD559\uC2B5 \uCE74\uD14C\uACE0\uB9AC' : '\uD83D\uDCDA Learning Categories'}</h3>
          </div>
          <div className="learning-grid">
            {categories.map((cat, i) => (
              <Link to={cat.path} className="learning-card" key={i}>
                <div className="learning-card-icon">{cat.icon}</div>
                <h4>{language === 'ko' ? cat.titleKo : cat.titleEn}</h4>
                <p>{language === 'ko' ? cat.descKo : cat.descEn}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
