import { Link, useParams } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import SEOHead from '../components/SEOHead';
import type { ReactElement } from 'react';

type AboutTopic = 'intro' | 'roadmap' | 'how-to-learn';

const About = (): ReactElement => {
  const { topic } = useParams<{ topic: string }>();
  const { language } = useLanguage();

  const topics: Record<AboutTopic, { titleKo: string; titleEn: string; contentKo: ReactElement; contentEn: ReactElement }> = {
    intro: {
      titleKo: '사이트 소개',
      titleEn: 'About This Site',
      contentKo: (
        <>
          <p className="about-intro">
            <strong>Basic AI</strong>는 인공지능을 처음 접하는 분들을 위한 체계적인 학습 플랫폼입니다.
            AI가 일상이 된 시대, 누구나 쉽게 이해할 수 있도록 기초 개념부터 실전 활용, 윤리, 최신 트렌드까지
            다양한 주제를 다룹니다.
          </p>

          <h3>학습 목표</h3>
          <ul>
            <li>인공지능의 기본 개념과 작동 원리를 이해합니다</li>
            <li>ChatGPT, 이미지 생성, AI 코딩 등 실전 AI 도구를 활용할 수 있습니다</li>
            <li>AI 편향, 개인정보, 책임 등 윤리적 이슈를 인식합니다</li>
            <li>AI 트렌드와 AX(AI Transformation) 전략을 이해합니다</li>
            <li>AI 시대에 필요한 역량을 파악하고 준비합니다</li>
          </ul>

          <h3>대상 학습자</h3>
          <ul>
            <li><strong>AI 입문자</strong>: 인공지능을 처음 배우고 싶은 일반인</li>
            <li><strong>대학생</strong>: AI 기초 교양 과목 수강자</li>
            <li><strong>직장인</strong>: AI 도구 활용과 AX 전략을 학습하려는 비즈니스 종사자</li>
            <li><strong>교육자</strong>: AI 교육 콘텐츠가 필요한 교수/강사</li>
          </ul>

          <h3>학습 영역</h3>
          <div className="roadmap-grid">
            <div className="roadmap-item">
              <div className="roadmap-step">1</div>
              <h4>AI 기초</h4>
              <p>AI 정의, 역사, 종류, 작동 원리</p>
            </div>
            <div className="roadmap-item">
              <div className="roadmap-step">2</div>
              <h4>AI 활용</h4>
              <p>챗봇, 이미지, 음성·영상, 코딩 도구</p>
            </div>
            <div className="roadmap-item">
              <div className="roadmap-step">3</div>
              <h4>AI 윤리</h4>
              <p>편향, 개인정보, 책임, 미래사회</p>
            </div>
            <div className="roadmap-item">
              <div className="roadmap-step">4</div>
              <h4>AI 트렌드</h4>
              <p>LLM, 멀티모달, 에이전트, 오픈소스</p>
            </div>
            <div className="roadmap-item">
              <div className="roadmap-step">5</div>
              <h4>AX</h4>
              <p>AI 트랜스포메이션 전략과 실행</p>
            </div>
          </div>

          <div className="info-box">
            <h4>운영 정보</h4>
            <p>Basic AI는 <strong>DreamIT Biz</strong>에서 운영하는 AI 교육 플랫폼입니다.
            모든 학습 콘텐츠는 무료로 제공됩니다.</p>
          </div>
        </>
      ),
      contentEn: (
        <>
          <p className="about-intro">
            <strong>Basic AI</strong> is a systematic learning platform for those new to artificial intelligence.
            In an era where AI has become part of daily life, we cover everything from basic concepts to practical
            applications, ethics, and the latest trends — all in an easy-to-understand format.
          </p>

          <h3>Learning Objectives</h3>
          <ul>
            <li>Understand basic AI concepts and how AI works</li>
            <li>Use practical AI tools like ChatGPT, image generation, and AI coding</li>
            <li>Recognize ethical issues including bias, privacy, and accountability</li>
            <li>Understand AI trends and AX (AI Transformation) strategies</li>
            <li>Identify and prepare for essential skills in the AI era</li>
          </ul>

          <h3>Target Audience</h3>
          <ul>
            <li><strong>AI Beginners</strong>: Anyone wanting to learn AI for the first time</li>
            <li><strong>University Students</strong>: Enrolled in introductory AI courses</li>
            <li><strong>Professionals</strong>: Business people learning AI tools and AX strategy</li>
            <li><strong>Educators</strong>: Instructors needing AI educational content</li>
          </ul>

          <h3>Learning Areas</h3>
          <div className="roadmap-grid">
            <div className="roadmap-item">
              <div className="roadmap-step">1</div>
              <h4>AI Basics</h4>
              <p>AI definition, history, types, how it works</p>
            </div>
            <div className="roadmap-item">
              <div className="roadmap-step">2</div>
              <h4>Applications</h4>
              <p>Chatbots, images, voice & video, coding tools</p>
            </div>
            <div className="roadmap-item">
              <div className="roadmap-step">3</div>
              <h4>AI Ethics</h4>
              <p>Bias, privacy, responsibility, future society</p>
            </div>
            <div className="roadmap-item">
              <div className="roadmap-step">4</div>
              <h4>AI Trends</h4>
              <p>LLMs, multimodal, agents, open-source</p>
            </div>
            <div className="roadmap-item">
              <div className="roadmap-step">5</div>
              <h4>AX</h4>
              <p>AI Transformation strategy & execution</p>
            </div>
          </div>

          <div className="info-box">
            <h4>About Us</h4>
            <p>Basic AI is an AI education platform operated by <strong>DreamIT Biz</strong>.
            All learning content is provided free of charge.</p>
          </div>
        </>
      )
    },
    roadmap: {
      titleKo: '학습 로드맵',
      titleEn: 'Learning Roadmap',
      contentKo: (
        <>
          <h3>추천 학습 순서</h3>
          <p>
            아래 순서대로 학습하면 인공지능에 대한 체계적인 이해를 쌓을 수 있습니다.
            각 단계는 이전 단계의 지식을 기반으로 합니다.
          </p>

          <h3>1단계: AI 기초 다지기</h3>
          <ul>
            <li>AI란 무엇인가 — AI의 정의와 핵심 구성 요소</li>
            <li>AI의 역사 — 1950년대부터 현재까지의 발전</li>
            <li>AI의 종류 — 약한 AI, 강한 AI, 학습 방식별 분류</li>
            <li>AI 작동 원리 — 신경망, 딥러닝, LLM의 원리</li>
          </ul>

          <h3>2단계: AI 도구 활용하기</h3>
          <ul>
            <li>챗봇 & 대화형 AI — ChatGPT, Claude, Gemini 활용</li>
            <li>이미지 생성 AI — DALL-E, Midjourney, Stable Diffusion</li>
            <li>음성 & 영상 AI — 음성 합성, 영상 생성 기술</li>
            <li>AI 코딩 도구 — GitHub Copilot, Cursor, Claude Code</li>
          </ul>

          <h3>3단계: AI 윤리 이해하기</h3>
          <ul>
            <li>편향과 공정성 — AI가 만드는 불공정 문제</li>
            <li>개인정보 보호 — 데이터 수집과 프라이버시</li>
            <li>책임있는 AI — 5대 원칙과 사용자 책임</li>
            <li>AI와 미래사회 — 직업 변화와 필수 역량</li>
          </ul>

          <h3>4단계: 최신 트렌드 파악하기</h3>
          <ul>
            <li>LLM 동향 — GPT, Claude, Gemini 등 최신 모델</li>
            <li>멀티모달 AI — 텍스트+이미지+음성 통합 AI</li>
            <li>AI 에이전트 — 자율적으로 업무를 수행하는 AI</li>
            <li>오픈소스 AI — Llama, Mistral 등 오픈 모델 생태계</li>
          </ul>

          <h3>5단계: AX 전략 이해하기</h3>
          <ul>
            <li>AX란 무엇인가 — AI 트랜스포메이션의 개념</li>
            <li>기업 AX 전략 — 조직 차원의 AI 도입 방법</li>
            <li>산업별 AX 사례 — 업종별 AI 적용 사례</li>
            <li>AX 실행 가이드 — 단계별 실행 전략</li>
          </ul>

          <div className="info-box">
            <h4>학습 팁</h4>
            <p>순서대로 학습하는 것을 권장하지만, 관심 있는 주제부터 시작해도 됩니다.
            각 페이지는 독립적으로 이해할 수 있도록 구성되어 있습니다.</p>
          </div>
        </>
      ),
      contentEn: (
        <>
          <h3>Recommended Learning Path</h3>
          <p>
            Following this order will help build a systematic understanding of AI.
            Each stage builds on knowledge from the previous one.
          </p>

          <h3>Stage 1: Build AI Foundations</h3>
          <ul>
            <li>What is AI — Definitions and core components</li>
            <li>History of AI — Development from 1950s to present</li>
            <li>Types of AI — Narrow AI, General AI, learning methods</li>
            <li>How AI Works — Neural networks, deep learning, LLMs</li>
          </ul>

          <h3>Stage 2: Use AI Tools</h3>
          <ul>
            <li>Chatbots — ChatGPT, Claude, Gemini</li>
            <li>Image Generation — DALL-E, Midjourney, Stable Diffusion</li>
            <li>Voice & Video AI — Speech synthesis, video generation</li>
            <li>AI Coding — GitHub Copilot, Cursor, Claude Code</li>
          </ul>

          <h3>Stage 3: Understand AI Ethics</h3>
          <ul>
            <li>Bias & Fairness — Unfairness created by AI</li>
            <li>Privacy — Data collection and privacy</li>
            <li>Responsible AI — 5 principles and user responsibility</li>
            <li>AI & Future — Job changes and essential skills</li>
          </ul>

          <h3>Stage 4: Know the Latest Trends</h3>
          <ul>
            <li>LLM Trends — GPT, Claude, Gemini latest models</li>
            <li>Multimodal AI — Text + image + voice integration</li>
            <li>AI Agents — AI that autonomously performs tasks</li>
            <li>Open-source AI — Llama, Mistral ecosystem</li>
          </ul>

          <h3>Stage 5: Understand AX Strategy</h3>
          <ul>
            <li>What is AX — Concept of AI Transformation</li>
            <li>Enterprise AX — Organization-level AI adoption</li>
            <li>Industry AX Cases — AI applications by sector</li>
            <li>AX Guide — Step-by-step execution strategy</li>
          </ul>

          <div className="info-box">
            <h4>Learning Tip</h4>
            <p>We recommend sequential learning, but feel free to start with topics that interest you.
            Each page is designed to be understandable independently.</p>
          </div>
        </>
      )
    },
    'how-to-learn': {
      titleKo: '학습 방법',
      titleEn: 'How to Learn',
      contentKo: (
        <>
          <h3>효과적인 AI 학습법</h3>
          <p>
            인공지능 학습의 핵심은 '이론 + 실습'의 균형입니다.
            개념을 이해한 후 직접 AI 도구를 사용해 보는 것이 가장 효과적입니다.
          </p>

          <h3>1. 읽고 이해하기</h3>
          <ul>
            <li>각 주제의 핵심 개념을 먼저 읽고 이해합니다</li>
            <li>모르는 용어는 AI 기초 섹션에서 다시 확인합니다</li>
            <li>정보 박스와 경고 박스의 내용에 특히 주의합니다</li>
          </ul>

          <h3>2. 직접 체험하기</h3>
          <ul>
            <li><strong>챗봇</strong>: ChatGPT나 Claude에 직접 질문해 봅니다</li>
            <li><strong>이미지 생성</strong>: DALL-E로 그림을 만들어 봅니다</li>
            <li><strong>AI 코딩</strong>: GitHub Copilot 무료 체험을 사용해 봅니다</li>
            <li><strong>음성 AI</strong>: 스마트폰 음성 어시스턴트를 다양하게 활용해 봅니다</li>
          </ul>

          <h3>3. 비판적으로 생각하기</h3>
          <ul>
            <li>AI가 생성한 결과물이 항상 정확한지 의문을 가집니다</li>
            <li>AI의 한계와 윤리적 문제를 함께 생각합니다</li>
            <li>"이 AI 기술이 사회에 미치는 영향은?"을 항상 질문합니다</li>
          </ul>

          <h3>4. 최신 정보 추적하기</h3>
          <ul>
            <li>AI 트렌드 섹션을 정기적으로 확인합니다</li>
            <li>새로운 AI 도구가 출시되면 직접 사용해 봅니다</li>
            <li>AI 관련 뉴스와 블로그를 팔로우합니다</li>
          </ul>

          <div className="warning-box">
            <h4>학습 시 주의사항</h4>
            <p>AI 도구를 사용할 때 개인정보(주민번호, 비밀번호, 금융정보)를 절대 입력하지 마세요.
            또한 AI의 답변을 무비판적으로 신뢰하지 않도록 주의하세요.</p>
          </div>
        </>
      ),
      contentEn: (
        <>
          <h3>Effective AI Learning Methods</h3>
          <p>
            The key to AI learning is balancing 'theory + practice'.
            Understanding concepts and then trying AI tools yourself is the most effective approach.
          </p>

          <h3>1. Read and Understand</h3>
          <ul>
            <li>Read and understand core concepts of each topic first</li>
            <li>Review unfamiliar terms in the AI Basics section</li>
            <li>Pay special attention to info boxes and warning boxes</li>
          </ul>

          <h3>2. Hands-on Experience</h3>
          <ul>
            <li><strong>Chatbots</strong>: Ask questions to ChatGPT or Claude directly</li>
            <li><strong>Image Gen</strong>: Create images with DALL-E</li>
            <li><strong>AI Coding</strong>: Try GitHub Copilot free trial</li>
            <li><strong>Voice AI</strong>: Explore smartphone voice assistants</li>
          </ul>

          <h3>3. Think Critically</h3>
          <ul>
            <li>Question whether AI-generated results are always accurate</li>
            <li>Consider AI's limitations and ethical issues together</li>
            <li>Always ask "What impact does this AI technology have on society?"</li>
          </ul>

          <h3>4. Track Latest Information</h3>
          <ul>
            <li>Check the AI Trends section regularly</li>
            <li>Try new AI tools when they launch</li>
            <li>Follow AI-related news and blogs</li>
          </ul>

          <div className="warning-box">
            <h4>Caution</h4>
            <p>Never input personal information (SSN, passwords, financial data) into AI tools.
            Also, be careful not to blindly trust AI responses.</p>
          </div>
        </>
      )
    }
  };

  const currentTopic = (topic as AboutTopic) || 'intro';
  const content = topics[currentTopic] || topics.intro;

  const subNavItems = [
    { path: '/about/intro', labelKo: '사이트 소개', labelEn: 'About' },
    { path: '/about/roadmap', labelKo: '학습 로드맵', labelEn: 'Roadmap' },
    { path: '/about/how-to-learn', labelKo: '학습 방법', labelEn: 'How to Learn' }
  ];

  return (
    <>
      <SEOHead
        title={`${language === 'ko' ? content.titleKo : content.titleEn} | Basic AI`}
        description="Basic AI 인공지능 기초 학습 플랫폼 소개"
      />

      <section className="page-header">
        <div className="container">
          <h2>{language === 'ko' ? 'About' : 'About'}</h2>
          <p>{language === 'ko' ? 'Basic AI 학습 플랫폼을 소개합니다' : 'Learn about the Basic AI learning platform'}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="content-layout">
            <nav className="side-nav">
              <div className="side-nav-title">About</div>

              {subNavItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`/about/${currentTopic}` === item.path ? 'active' : ''}
                >
                  {language === 'ko' ? item.labelKo : item.labelEn}
                </Link>
              ))}
            </nav>

            <div className="content-page">
              <h2>{language === 'ko' ? content.titleKo : content.titleEn}</h2>
              {language === 'ko' ? content.contentKo : content.contentEn}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
