import { Link, useParams } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import SEOHead from '../components/SEOHead';
import type { ReactElement } from 'react';

type AppTopic = 'chatbot' | 'image' | 'voice' | 'coding';

const Applications = (): ReactElement => {
  const { topic } = useParams<{ topic: string }>();
  const { language } = useLanguage();

  const topics: Record<AppTopic, { titleKo: string; titleEn: string; contentKo: ReactElement; contentEn: ReactElement }> = {
    chatbot: {
      titleKo: '챗봇 & 대화형 AI',
      titleEn: 'Chatbots & Conversational AI',
      contentKo: (
        <>
          <h3>대화형 AI란?</h3>
          <p>
            대화형 AI는 자연어를 이해하고 인간과 대화할 수 있는 인공지능 시스템입니다.
            최근 대규모 언어모델(LLM)의 발전으로 놀라운 수준의 대화 능력을 갖추게 되었습니다.
          </p>

          <h3>주요 대화형 AI 서비스</h3>
          <ul>
            <li>
              <strong>ChatGPT (OpenAI)</strong>: GPT-4o 기반, 가장 대중적인 AI 챗봇.
              텍스트, 이미지, 코드 생성 가능
            </li>
            <li>
              <strong>Claude (Anthropic)</strong>: 안전성과 정확성에 중점. 긴 문서 분석에 강점.
              Claude Code로 개발 작업 지원
            </li>
            <li>
              <strong>Gemini (Google)</strong>: 구글 서비스 통합. 검색, Gmail, 문서 연동 가능
            </li>
            <li>
              <strong>Copilot (Microsoft)</strong>: Microsoft 365 통합. 워드, 엑셀, 파워포인트 AI 지원
            </li>
          </ul>

          <h3>효과적인 프롬프트 작성법</h3>
          <div className="info-box">
            <h4>좋은 프롬프트의 5가지 원칙</h4>
            <p>1. <strong>역할 부여</strong>: "너는 마케팅 전문가야"<br />
            2. <strong>구체적 지시</strong>: 원하는 결과의 형식, 분량, 톤 명시<br />
            3. <strong>맥락 제공</strong>: 배경 정보, 대상 독자 등 설명<br />
            4. <strong>예시 제공</strong>: 원하는 결과물의 예시 포함<br />
            5. <strong>제약 조건</strong>: "500자 이내로", "한국어로" 등 제한 명시</p>
          </div>

          <h3>활용 분야</h3>
          <ul>
            <li><strong>교육</strong>: 개인 맞춤형 학습 도우미, 과제 피드백</li>
            <li><strong>비즈니스</strong>: 이메일 작성, 보고서 요약, 회의록 정리</li>
            <li><strong>창작</strong>: 글쓰기 보조, 아이디어 브레인스토밍</li>
            <li><strong>번역</strong>: 실시간 다국어 번역, 문맥 기반 번역</li>
            <li><strong>고객 서비스</strong>: 24시간 자동 상담, FAQ 응답</li>
          </ul>

          <div className="warning-box">
            <h4>주의사항</h4>
            <p>AI 챗봇은 '환각(Hallucination)' 현상이 있을 수 있습니다. 사실처럼 보이지만 실제로는 잘못된 정보를 생성할 수 있으므로, 중요한 정보는 반드시 검증해야 합니다.</p>
          </div>
        </>
      ),
      contentEn: (
        <>
          <h3>What is Conversational AI?</h3>
          <p>
            Conversational AI systems can understand natural language and converse with humans.
            Recent advances in Large Language Models (LLMs) have enabled remarkable conversational capabilities.
          </p>

          <h3>Major Conversational AI Services</h3>
          <ul>
            <li><strong>ChatGPT (OpenAI)</strong>: GPT-4o based, most popular AI chatbot. Generates text, images, and code</li>
            <li><strong>Claude (Anthropic)</strong>: Focused on safety and accuracy. Strong in long document analysis</li>
            <li><strong>Gemini (Google)</strong>: Google services integration. Search, Gmail, Docs connectivity</li>
            <li><strong>Copilot (Microsoft)</strong>: Microsoft 365 integration. AI support for Word, Excel, PowerPoint</li>
          </ul>

          <h3>Effective Prompt Writing</h3>
          <div className="info-box">
            <h4>5 Principles of Good Prompts</h4>
            <p>1. <strong>Assign a role</strong>: "You are a marketing expert"<br />
            2. <strong>Specific instructions</strong>: Specify format, length, tone<br />
            3. <strong>Provide context</strong>: Background info, target audience<br />
            4. <strong>Give examples</strong>: Include sample outputs<br />
            5. <strong>Set constraints</strong>: "Under 500 words", "In English"</p>
          </div>

          <h3>Application Areas</h3>
          <ul>
            <li><strong>Education</strong>: Personalized learning assistants, assignment feedback</li>
            <li><strong>Business</strong>: Email drafting, report summarization, meeting notes</li>
            <li><strong>Creative</strong>: Writing assistance, idea brainstorming</li>
            <li><strong>Translation</strong>: Real-time multilingual translation</li>
            <li><strong>Customer Service</strong>: 24/7 automated support, FAQ responses</li>
          </ul>

          <div className="warning-box">
            <h4>Caution</h4>
            <p>AI chatbots can exhibit 'hallucination' - generating plausible but incorrect information. Always verify important information.</p>
          </div>
        </>
      )
    },
    image: {
      titleKo: '이미지 생성 AI',
      titleEn: 'Image Generation AI',
      contentKo: (
        <>
          <h3>이미지 생성 AI란?</h3>
          <p>
            텍스트 설명(프롬프트)만으로 새로운 이미지를 만들어내는 AI 기술입니다.
            2022년 이후 폭발적으로 발전하며, 디자인, 마케팅, 교육 등 다양한 분야에서 활용되고 있습니다.
          </p>

          <h3>주요 이미지 생성 AI</h3>
          <ul>
            <li><strong>DALL-E 3 (OpenAI)</strong>: ChatGPT에 통합. 텍스트 묘사를 정확히 반영하는 이미지 생성</li>
            <li><strong>Midjourney</strong>: 예술적 품질이 높은 이미지 생성. 디스코드 기반</li>
            <li><strong>Stable Diffusion</strong>: 오픈소스 모델. 로컬 PC에서 실행 가능. 커스터마이징 자유도 높음</li>
            <li><strong>Adobe Firefly</strong>: 상업적 사용에 안전한 이미지 생성. Photoshop 통합</li>
            <li><strong>Flux</strong>: 최신 고품질 오픈소스 이미지 생성 모델</li>
          </ul>

          <h3>작동 원리: 확산 모델(Diffusion Model)</h3>
          <p>
            대부분의 이미지 생성 AI는 '확산 모델'을 사용합니다. 노이즈(잡음)가 가득한 이미지에서
            점진적으로 노이즈를 제거하여 의미 있는 이미지를 생성하는 방식입니다.
          </p>
          <ul>
            <li>Forward Process: 원본 이미지에 점차 노이즈 추가</li>
            <li>Reverse Process: 노이즈에서 의미 있는 이미지 복원 (AI가 학습)</li>
            <li>텍스트 조건(프롬프트)에 맞는 이미지로 유도</li>
          </ul>

          <h3>활용 사례</h3>
          <ul>
            <li>마케팅 배너, 소셜 미디어 콘텐츠 제작</li>
            <li>교육 자료 일러스트레이션</li>
            <li>제품 콘셉트 디자인, 프로토타이핑</li>
            <li>게임/영화 아트 콘셉트</li>
            <li>개인 창작 활동</li>
          </ul>
        </>
      ),
      contentEn: (
        <>
          <h3>What is Image Generation AI?</h3>
          <p>
            AI technology that creates new images from text descriptions (prompts).
            Since 2022, it has exploded in development and is used in design, marketing, education, and more.
          </p>

          <h3>Major Image Generation AI</h3>
          <ul>
            <li><strong>DALL-E 3 (OpenAI)</strong>: Integrated with ChatGPT. Accurately reflects text descriptions</li>
            <li><strong>Midjourney</strong>: High artistic quality. Discord-based</li>
            <li><strong>Stable Diffusion</strong>: Open-source. Runs locally. High customization freedom</li>
            <li><strong>Adobe Firefly</strong>: Commercially safe image generation. Photoshop integration</li>
            <li><strong>Flux</strong>: Latest high-quality open-source image generation model</li>
          </ul>

          <h3>How it Works: Diffusion Models</h3>
          <p>
            Most image generation AI uses 'diffusion models'. Starting from a noisy image,
            they progressively remove noise to generate meaningful images.
          </p>

          <h3>Use Cases</h3>
          <ul>
            <li>Marketing banners, social media content creation</li>
            <li>Educational material illustrations</li>
            <li>Product concept design, prototyping</li>
            <li>Game/movie art concepts</li>
            <li>Personal creative activities</li>
          </ul>
        </>
      )
    },
    voice: {
      titleKo: '음성 & 영상 AI',
      titleEn: 'Voice & Video AI',
      contentKo: (
        <>
          <h3>음성 AI 기술</h3>
          <p>
            음성 AI는 음성을 텍스트로 변환(STT)하거나, 텍스트를 음성으로 변환(TTS)하는 기술입니다.
            최근에는 실시간 음성 대화와 감정 표현이 가능한 수준까지 발전했습니다.
          </p>

          <h3>주요 음성 AI 서비스</h3>
          <ul>
            <li><strong>ElevenLabs</strong>: 가장 자연스러운 AI 음성 합성. 30+개 언어 지원</li>
            <li><strong>OpenAI Whisper</strong>: 오픈소스 음성 인식. 99개 언어 지원</li>
            <li><strong>Clova Note</strong>: 네이버의 회의록 자동 작성 서비스</li>
            <li><strong>Google Cloud Speech-to-Text</strong>: 고정밀 음성 인식 API</li>
          </ul>

          <h3>영상 생성 AI</h3>
          <p>
            텍스트나 이미지로부터 동영상을 생성하는 AI 기술입니다.
            2024-2025년에 급격한 발전을 이루고 있습니다.
          </p>
          <ul>
            <li><strong>Sora (OpenAI)</strong>: 고품질 영상 생성. 최대 1분 영상 제작</li>
            <li><strong>Runway Gen-3</strong>: 전문 영상 편집 AI. 영화급 효과</li>
            <li><strong>Kling AI</strong>: 중국의 영상 생성 AI. 빠른 발전</li>
            <li><strong>Veo 2 (Google)</strong>: 4K 영상 생성 가능</li>
          </ul>

          <h3>실시간 번역/통역</h3>
          <ul>
            <li>실시간 음성 통역으로 언어 장벽 해소</li>
            <li>화상 회의에서 실시간 자막 및 번역</li>
            <li>여행 시 즉시 통역 앱 활용</li>
          </ul>

          <div className="warning-box">
            <h4>딥페이크 주의</h4>
            <p>AI 음성/영상 합성 기술은 딥페이크(deepfake)에 악용될 수 있습니다. 타인의 음성이나 얼굴을 동의 없이 합성하는 것은 법적, 윤리적 문제를 야기합니다.</p>
          </div>
        </>
      ),
      contentEn: (
        <>
          <h3>Voice AI Technology</h3>
          <p>
            Voice AI converts speech to text (STT) or text to speech (TTS).
            Recent advances enable real-time voice conversation with emotional expression.
          </p>

          <h3>Major Voice AI Services</h3>
          <ul>
            <li><strong>ElevenLabs</strong>: Most natural AI voice synthesis. 30+ languages</li>
            <li><strong>OpenAI Whisper</strong>: Open-source speech recognition. 99 languages</li>
            <li><strong>Google Cloud Speech-to-Text</strong>: High-precision speech recognition API</li>
          </ul>

          <h3>Video Generation AI</h3>
          <ul>
            <li><strong>Sora (OpenAI)</strong>: High-quality video generation up to 1 minute</li>
            <li><strong>Runway Gen-3</strong>: Professional video editing AI with cinema-grade effects</li>
            <li><strong>Veo 2 (Google)</strong>: 4K video generation capable</li>
          </ul>

          <div className="warning-box">
            <h4>Deepfake Warning</h4>
            <p>AI voice/video synthesis can be misused for deepfakes. Synthesizing someone's voice or face without consent raises legal and ethical issues.</p>
          </div>
        </>
      )
    },
    coding: {
      titleKo: 'AI 코딩 도구',
      titleEn: 'AI Coding Tools',
      contentKo: (
        <>
          <h3>AI 기반 코딩의 시대</h3>
          <p>
            AI가 코드를 작성, 수정, 디버깅하는 시대가 도래했습니다. 프로그래머의 생산성을 혁신적으로 높이고,
            비개발자도 코딩에 접근할 수 있게 해주는 도구들이 빠르게 발전하고 있습니다.
          </p>

          <h3>주요 AI 코딩 도구</h3>
          <ul>
            <li>
              <strong>GitHub Copilot</strong>: GitHub + OpenAI 협업. VS Code, JetBrains IDE 통합.
              코드 자동 완성, 함수 생성, 테스트 코드 작성
            </li>
            <li>
              <strong>Cursor</strong>: AI 네이티브 코드 에디터. GPT-4, Claude 통합.
              자연어로 코드 수정 요청 가능
            </li>
            <li>
              <strong>Claude Code</strong>: Anthropic의 CLI 기반 AI 코딩 도구.
              터미널에서 직접 코드 작성, 파일 수정, Git 작업 수행
            </li>
            <li>
              <strong>Windsurf</strong>: AI 에이전트 기반 IDE. 전체 프로젝트 맥락 이해
            </li>
            <li>
              <strong>Replit AI</strong>: 브라우저 기반 AI 코딩. 설치 없이 바로 코딩 가능
            </li>
          </ul>

          <h3>바이브 코딩(Vibe Coding)</h3>
          <div className="info-box">
            <h4>바이브 코딩이란?</h4>
            <p>AI에게 자연어로 원하는 기능을 설명하면, AI가 코드를 생성하는 새로운 프로그래밍 방식입니다. '코딩의 민주화'라고도 불리며, 프로그래밍 경험이 없는 사람도 앱이나 웹사이트를 만들 수 있습니다.</p>
          </div>

          <h3>AI 코딩 도구 활용 팁</h3>
          <ul>
            <li>명확하고 구체적인 요청: "로그인 페이지 만들어줘"보다 "React로 이메일/비밀번호 로그인 폼을 만들고, 입력 유효성 검사를 추가해줘"</li>
            <li>AI가 생성한 코드를 반드시 검토하고 이해하기</li>
            <li>보안 관련 코드는 특히 주의깊게 확인</li>
            <li>점진적으로 기능 추가 — 한 번에 너무 많은 것을 요청하지 않기</li>
          </ul>
        </>
      ),
      contentEn: (
        <>
          <h3>The Era of AI-Powered Coding</h3>
          <p>
            AI now writes, modifies, and debugs code. Tools that revolutionize programmer productivity
            and make coding accessible to non-developers are rapidly evolving.
          </p>

          <h3>Major AI Coding Tools</h3>
          <ul>
            <li><strong>GitHub Copilot</strong>: VS Code/JetBrains integration. Auto-completion, function generation</li>
            <li><strong>Cursor</strong>: AI-native code editor. GPT-4, Claude integrated</li>
            <li><strong>Claude Code</strong>: Anthropic's CLI-based AI coding tool</li>
            <li><strong>Windsurf</strong>: AI agent-based IDE with full project context</li>
            <li><strong>Replit AI</strong>: Browser-based AI coding. No installation needed</li>
          </ul>

          <h3>Vibe Coding</h3>
          <div className="info-box">
            <h4>What is Vibe Coding?</h4>
            <p>A new programming paradigm where you describe desired functionality in natural language and AI generates the code. Also called 'democratization of coding'.</p>
          </div>

          <h3>Tips for AI Coding Tools</h3>
          <ul>
            <li>Be clear and specific in requests</li>
            <li>Always review and understand AI-generated code</li>
            <li>Pay extra attention to security-related code</li>
            <li>Add features incrementally — don't request too much at once</li>
          </ul>
        </>
      )
    }
  };

  const currentTopic = (topic as AppTopic) || 'chatbot';
  const content = topics[currentTopic] || topics['chatbot'];

  const subNavItems = [
    { path: '/applications/chatbot', labelKo: '챗봇 & 대화형 AI', labelEn: 'Chatbots' },
    { path: '/applications/image', labelKo: '이미지 생성', labelEn: 'Image Gen' },
    { path: '/applications/voice', labelKo: '음성 & 영상', labelEn: 'Voice & Video' },
    { path: '/applications/coding', labelKo: 'AI 코딩', labelEn: 'AI Coding' }
  ];

  return (
    <>
      <SEOHead
        title={`${language === 'ko' ? content.titleKo : content.titleEn} | Basic AI`}
        description={`AI 활용 학습 - ${content.titleKo}`}
      />

      <section className="page-header">
        <div className="container">
          <h2>{language === 'ko' ? 'AI 활용' : 'AI Applications'}</h2>
          <p>{language === 'ko' ? '다양한 AI 도구와 서비스의 활용법을 배웁니다' : 'Learn to use various AI tools and services'}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="content-layout">
            <nav className="side-nav">
              <div className="side-nav-title">{language === 'ko' ? 'AI 활용' : 'Applications'}</div>
              {subNavItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`/applications/${currentTopic}` === item.path ? 'active' : ''}
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

export default Applications;
