import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import SEOHead from '../components/SEOHead';
import site from '../config/site';
import type { ReactElement } from 'react';

const Home = (): ReactElement => {
  const { t, language } = useLanguage();

  const highlights = [
    {
      icon: '🧠',
      titleKo: 'AI 기초',
      titleEn: 'AI Basics',
      descKo: '인공지능의 정의, 역사, 종류, 작동 원리를 기초부터 체계적으로 학습합니다.',
      descEn: 'Learn AI definitions, history, types, and how it works from the ground up.',
      path: '/fundamentals/what-is-ai'
    },
    {
      icon: '🚀',
      titleKo: 'AI 활용',
      titleEn: 'AI Applications',
      descKo: '챗봇, 이미지 생성, 음성·영상, AI 코딩 도구까지 다양한 활용법을 배웁니다.',
      descEn: 'Explore chatbots, image generation, voice & video AI, and coding tools.',
      path: '/applications/chatbot'
    },
    {
      icon: '⚖️',
      titleKo: 'AI 윤리',
      titleEn: 'AI Ethics',
      descKo: '편향성, 개인정보, 책임 문제 등 반드시 알아야 할 AI 윤리를 다룹니다.',
      descEn: 'Learn about bias, privacy, responsibility, and the future of AI ethics.',
      path: '/ethics/bias'
    },
    {
      icon: '📈',
      titleKo: 'AI 트렌드',
      titleEn: 'AI Trends',
      descKo: 'LLM, 멀티모달, AI 에이전트, 오픈소스 AI 등 최신 동향을 파악합니다.',
      descEn: 'Stay updated with LLMs, multimodal AI, agents, and open-source trends.',
      path: '/trends/llm'
    },
    {
      icon: '🏢',
      titleKo: 'AX',
      titleEn: 'AX',
      descKo: 'AI 트랜스포메이션 전략, 산업별 사례, 실행 가이드를 학습합니다.',
      descEn: 'Learn AI Transformation strategy, industry cases, and implementation guides.',
      path: '/ax/what-is-ax'
    }
  ];

  const topics = [
    { icon: '💡', titleKo: 'AI란 무엇인가', titleEn: 'What is AI', path: '/fundamentals/what-is-ai', tag: 'fundamentals' },
    { icon: '📜', titleKo: 'AI의 역사', titleEn: 'History of AI', path: '/fundamentals/history', tag: 'fundamentals' },
    { icon: '🔬', titleKo: 'AI의 종류', titleEn: 'Types of AI', path: '/fundamentals/types', tag: 'fundamentals' },
    { icon: '⚙️', titleKo: 'AI 작동 원리', titleEn: 'How AI Works', path: '/fundamentals/how-it-works', tag: 'fundamentals' },
    { icon: '💬', titleKo: '챗봇 & 대화형 AI', titleEn: 'Chatbots', path: '/applications/chatbot', tag: 'applications' },
    { icon: '🎨', titleKo: '이미지 생성 AI', titleEn: 'Image Gen AI', path: '/applications/image', tag: 'applications' },
    { icon: '🎙️', titleKo: '음성 & 영상 AI', titleEn: 'Voice & Video', path: '/applications/voice', tag: 'applications' },
    { icon: '💻', titleKo: 'AI 코딩 도구', titleEn: 'AI Coding', path: '/applications/coding', tag: 'applications' },
    { icon: '⚖️', titleKo: '편향과 공정성', titleEn: 'Bias & Fairness', path: '/ethics/bias', tag: 'ethics' },
    { icon: '🔒', titleKo: '개인정보 보호', titleEn: 'Privacy', path: '/ethics/privacy', tag: 'ethics' },
    { icon: '🤝', titleKo: '책임있는 AI', titleEn: 'Responsible AI', path: '/ethics/responsibility', tag: 'ethics' },
    { icon: '🌏', titleKo: 'AI와 미래사회', titleEn: 'AI & Future', path: '/ethics/future', tag: 'ethics' },
    { icon: '📊', titleKo: 'LLM 동향', titleEn: 'LLM Trends', path: '/trends/llm', tag: 'trends' },
    { icon: '👁️', titleKo: '멀티모달 AI', titleEn: 'Multimodal AI', path: '/trends/multimodal', tag: 'trends' },
    { icon: '🤖', titleKo: 'AI 에이전트', titleEn: 'AI Agents', path: '/trends/agents', tag: 'trends' },
    { icon: '🔓', titleKo: '오픈소스 AI', titleEn: 'Open-source', path: '/trends/opensource', tag: 'trends' },
    { icon: '🏢', titleKo: 'AX란 무엇인가', titleEn: 'What is AX', path: '/ax/what-is-ax', tag: 'ax' },
    { icon: '📋', titleKo: '기업 AX 전략', titleEn: 'AX Strategy', path: '/ax/strategy', tag: 'ax' },
    { icon: '🏭', titleKo: '산업별 AX 사례', titleEn: 'Industry Cases', path: '/ax/cases', tag: 'ax' },
    { icon: '📘', titleKo: 'AX 실행 가이드', titleEn: 'AX Guide', path: '/ax/guide', tag: 'ax' }
  ];

  const tagLabels: Record<string, { ko: string; en: string }> = {
    fundamentals: { ko: '기초', en: 'Basics' },
    applications: { ko: '활용', en: 'Apps' },
    ethics: { ko: '윤리', en: 'Ethics' },
    trends: { ko: '트렌드', en: 'Trends' },
    ax: { ko: 'AX', en: 'AX' }
  };

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
            {language === 'ko' ? '🧠 인공지능 기초 학습 플랫폼' : '🧠 AI Learning Platform'}
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
              <strong>5</strong>
              <span>{language === 'ko' ? '학습 영역' : 'Areas'}</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <strong>20</strong>
              <span>{language === 'ko' ? '세부 주제' : 'Topics'}</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <strong>80+</strong>
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

      {/* 5 Highlights */}
      <section className="section highlights-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              {language === 'ko' ? '학습 영역' : 'Learning Areas'}
            </h2>
            <p className="section-subtitle">
              {language === 'ko'
                ? '5개 영역, 20개 주제로 인공지능을 체계적으로 학습하세요'
                : 'Learn AI systematically across 5 areas and 20 topics'}
            </p>
          </div>
          <div className="highlights-grid">
            {highlights.map((h, i) => (
              <Link to={h.path} className="highlight-card" key={i}>
                <div className="highlight-icon">{h.icon}</div>
                <h3>{language === 'ko' ? h.titleKo : h.titleEn}</h3>
                <p>{language === 'ko' ? h.descKo : h.descEn}</p>
                <span className="highlight-link">
                  {language === 'ko' ? '학습하기 →' : 'Learn →'}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Topics */}
      <section className="section topics-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              {language === 'ko' ? '전체 학습 주제' : 'All Topics'}
            </h2>
            <p className="section-subtitle">
              {language === 'ko'
                ? '20개 주제로 인공지능을 체계적으로 학습하세요'
                : 'Learn AI systematically through 20 detailed topics'}
            </p>
          </div>
          <div className="topics-grid">
            {topics.map((topic, i) => (
              <Link to={topic.path} className="topic-card" key={i}>
                <div className="topic-card-top">
                  <span className="topic-icon">{topic.icon}</span>
                  <span className={`topic-tag tag-${topic.tag}`}>
                    {language === 'ko' ? tagLabels[topic.tag].ko : tagLabels[topic.tag].en}
                  </span>
                </div>
                <h4>{language === 'ko' ? topic.titleKo : topic.titleEn}</h4>
              </Link>
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
