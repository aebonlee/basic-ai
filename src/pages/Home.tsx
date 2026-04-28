import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import SEOHead from '../components/SEOHead';
import site from '../config/site';
import type { ReactElement } from 'react';

interface Topic {
  ko: string;
  en: string;
  path: string;
}

interface Category {
  titleKo: string;
  titleEn: string;
  descKo: string;
  descEn: string;
  accent: string;
  topics: Topic[];
}

const Home = (): ReactElement => {
  const { t, language } = useLanguage();

  const categories: Category[] = [
    {
      titleKo: 'AI 기초',
      titleEn: 'AI Basics',
      descKo: '인공지능의 정의, 역사, 종류, 작동 원리를 기초부터 체계적으로 학습합니다.',
      descEn: 'Learn AI definitions, history, types, and how it works from the ground up.',
      accent: '#1a237e',
      topics: [
        { ko: 'AI 개요', en: 'What is AI', path: '/fundamentals/what-is-ai' },
        { ko: 'AI 발전사', en: 'History of AI', path: '/fundamentals/history' },
        { ko: 'AI 분류 체계', en: 'Types of AI', path: '/fundamentals/types' },
        { ko: 'AI 작동 원리', en: 'How AI Works', path: '/fundamentals/how-it-works' },
      ]
    },
    {
      titleKo: 'AI 활용',
      titleEn: 'AI Applications',
      descKo: '챗봇, 이미지 생성, 음성·영상, AI 코딩 도구까지 다양한 활용법을 배웁니다.',
      descEn: 'Explore chatbots, image generation, voice & video AI, and coding tools.',
      accent: '#304ffe',
      topics: [
        { ko: '챗봇 & 대화형 AI', en: 'Chatbots & Conversational AI', path: '/applications/chatbot' },
        { ko: '이미지 생성 AI', en: 'Image Generation AI', path: '/applications/image' },
        { ko: '음성 & 영상 AI', en: 'Voice & Video AI', path: '/applications/voice' },
        { ko: 'AI 코딩 도구', en: 'AI Coding Tools', path: '/applications/coding' },
      ]
    },
    {
      titleKo: 'AI 윤리',
      titleEn: 'AI Ethics',
      descKo: '편향성, 개인정보, 책임 문제 등 반드시 알아야 할 AI 윤리를 다룹니다.',
      descEn: 'Bias, privacy, responsibility, and the future of AI ethics.',
      accent: '#283593',
      topics: [
        { ko: '편향과 공정성', en: 'Bias & Fairness', path: '/ethics/bias' },
        { ko: '개인정보 보호', en: 'Privacy Protection', path: '/ethics/privacy' },
        { ko: '책임있는 AI', en: 'Responsible AI', path: '/ethics/responsibility' },
        { ko: 'AI와 미래사회', en: 'AI & Future Society', path: '/ethics/future' },
      ]
    },
    {
      titleKo: 'AI 트렌드',
      titleEn: 'AI Trends',
      descKo: 'LLM, 멀티모달, AI 에이전트, 오픈소스 AI 등 최신 동향을 파악합니다.',
      descEn: 'Stay updated with LLMs, multimodal AI, agents, and open-source trends.',
      accent: '#00796b',
      topics: [
        { ko: 'LLM 동향', en: 'LLM Trends', path: '/trends/llm' },
        { ko: '멀티모달 AI', en: 'Multimodal AI', path: '/trends/multimodal' },
        { ko: 'AI 에이전트', en: 'AI Agents', path: '/trends/agents' },
        { ko: '오픈소스 AI', en: 'Open-source AI', path: '/trends/opensource' },
      ]
    },
    {
      titleKo: 'AX (AI Transformation)',
      titleEn: 'AX (AI Transformation)',
      descKo: 'AI 트랜스포메이션 전략, 산업별 사례, 실행 가이드를 학습합니다.',
      descEn: 'AI Transformation strategy, industry cases, and implementation guides.',
      accent: '#e65100',
      topics: [
        { ko: 'AX 개요', en: 'What is AX', path: '/ax/what-is-ax' },
        { ko: '기업 AX 전략', en: 'AX Strategy', path: '/ax/strategy' },
        { ko: '산업별 AX 사례', en: 'Industry Cases', path: '/ax/cases' },
        { ko: 'AX 실행 가이드', en: 'AX Guide', path: '/ax/guide' },
      ]
    },
    {
      titleKo: '용어사전',
      titleEn: 'Glossary',
      descKo: 'AI 기초, 기술, 도구, 비즈니스 관련 핵심 용어를 한눈에 정리합니다.',
      descEn: 'Key terms covering AI basics, technology, tools, and business.',
      accent: '#4a148c',
      topics: [
        { ko: 'AI 기초 용어', en: 'Basic Terms', path: '/glossary/basics' },
        { ko: 'AI 기술 용어', en: 'Technical Terms', path: '/glossary/tech' },
        { ko: 'AI 도구 & 서비스', en: 'Tools & Services', path: '/glossary/tools' },
        { ko: '비즈니스 & AX 용어', en: 'Business & AX Terms', path: '/glossary/business' },
      ]
    }
  ];

  return (
    <>
      <SEOHead
        title={`${site.name} | ${site.nameKo}`}
        description={site.description}
      />

      {/* Hero */}
      <section className="hero-main">
        <div className="hero-bg-pattern" />
        <div className="container hero-content">
          <div className="hero-badge">
            {language === 'ko' ? 'AI Basic Learning Platform' : 'AI Learning Platform'}
          </div>
          <h1 className="hero-title">
            {language === 'ko' ? (
              <>AI 시대를 여는<br /><span className="hero-accent">기초부터 AX까지</span></>
            ) : (
              <>Opening the AI Era<br /><span className="hero-accent">From Basics to AX</span></>
            )}
          </h1>
          <p className="hero-desc">
            {t('site.home.description')}
          </p>
          <div className="hero-actions">
            <Link to="/about/intro" className="btn-hero-primary">
              {language === 'ko' ? '학습 시작하기' : 'Start Learning'}
            </Link>
            <Link to="/trends/llm" className="btn-hero-secondary">
              {language === 'ko' ? 'AI 트렌드 보기' : 'View AI Trends'}
            </Link>
          </div>
          <div className="hero-stats-row">
            <div className="hero-stat">
              <strong>6</strong>
              <span>{language === 'ko' ? '학습 영역' : 'Areas'}</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <strong>24</strong>
              <span>{language === 'ko' ? '세부 주제' : 'Topics'}</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <strong>100+</strong>
              <span>{language === 'ko' ? '핵심 개념' : 'Concepts'}</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <strong>{language === 'ko' ? '무료' : 'Free'}</strong>
              <span>{language === 'ko' ? '모든 콘텐츠' : 'All Content'}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 6 Category Cards */}
      <section className="section categories-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              {language === 'ko' ? '학습 영역' : 'Learning Areas'}
            </h2>
            <p className="section-subtitle">
              {language === 'ko'
                ? '6개 영역, 24개 주제로 인공지능을 체계적으로 학습하세요'
                : 'Learn AI systematically across 6 areas and 24 topics'}
            </p>
          </div>
          <div className="category-grid">
            {categories.map((cat, i) => (
              <div
                className="category-card"
                key={i}
                style={{ '--card-accent': cat.accent } as React.CSSProperties}
              >
                <div className="category-header">
                  <span className="category-number">{String(i + 1).padStart(2, '0')}</span>
                  <h3>{language === 'ko' ? cat.titleKo : cat.titleEn}</h3>
                </div>
                <p className="category-desc">
                  {language === 'ko' ? cat.descKo : cat.descEn}
                </p>
                <ul className="category-topics">
                  {cat.topics.map((topic, j) => (
                    <li key={j}>
                      <Link to={topic.path}>
                        {language === 'ko' ? topic.ko : topic.en}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-box">
            <h2>{language === 'ko' ? '지금 AI 학습을 시작하세요' : 'Start Learning AI Today'}</h2>
            <p>
              {language === 'ko'
                ? '무료로 제공되는 체계적인 AI 학습 콘텐츠로 인공지능 시대를 준비하세요.'
                : 'Prepare for the AI era with our free, systematic AI learning content.'}
            </p>
            <Link to="/about/intro" className="btn-hero-primary">
              {language === 'ko' ? 'AI 기초부터 시작' : 'Start with AI Basics'}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
