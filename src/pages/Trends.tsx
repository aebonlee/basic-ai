import { Link, useParams } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import SEOHead from '../components/SEOHead';
import type { ReactElement } from 'react';

type TrendTopic = 'llm' | 'multimodal' | 'agents' | 'opensource';

const Trends = (): ReactElement => {
  const { topic } = useParams<{ topic: string }>();
  const { language } = useLanguage();

  const topics: Record<TrendTopic, { titleKo: string; titleEn: string; contentKo: ReactElement; contentEn: ReactElement }> = {
    llm: {
      titleKo: 'LLM 동향',
      titleEn: 'LLM Trends',
      contentKo: (
        <>
          <h3>대규모 언어모델(LLM)의 진화</h3>
          <p>
            LLM(Large Language Model)은 현재 AI 혁명의 핵심입니다. 수천억 개의 매개변수로 학습된 이 모델들은
            텍스트 생성, 코드 작성, 번역, 요약 등 다양한 작업을 수행합니다.
          </p>

          <h3>주요 LLM 모델 (2025)</h3>
          <ul>
            <li><strong>GPT-4o / GPT-4.5 (OpenAI)</strong>: 멀티모달 지원, 가장 넓은 사용자 기반</li>
            <li><strong>Claude 3.5 / Claude 4 (Anthropic)</strong>: 안전성 중시, 긴 문맥 처리에 강점</li>
            <li><strong>Gemini 2.0 (Google)</strong>: 구글 서비스 통합, 검색 연동</li>
            <li><strong>Llama 3.1 (Meta)</strong>: 오픈소스 최강, 405B 파라미터</li>
            <li><strong>Mistral Large (Mistral AI)</strong>: 유럽 기반 오픈소스 LLM</li>
            <li><strong>DeepSeek-V3 (DeepSeek)</strong>: 중국발 고성능 오픈소스 모델</li>
          </ul>

          <h3>LLM의 핵심 발전 방향</h3>
          <ul>
            <li><strong>추론 능력 강화</strong>: Chain-of-Thought, Tree-of-Thought 등 단계적 사고 기법</li>
            <li><strong>멀티모달</strong>: 텍스트+이미지+음성+영상 동시 처리</li>
            <li><strong>컨텍스트 윈도우 확대</strong>: 100K~1M+ 토큰 처리 가능</li>
            <li><strong>도구 사용(Tool Use)</strong>: 외부 API, 검색, 코드 실행 능력</li>
            <li><strong>비용 절감</strong>: 경량화, 양자화로 운영 비용 감소</li>
          </ul>

          <div className="info-box">
            <h4>스케일링 법칙(Scaling Law)</h4>
            <p>모델 크기, 데이터 양, 컴퓨팅 파워를 늘리면 성능이 예측 가능하게 향상된다는 법칙입니다.
            하지만 최근에는 '추론 시간 컴퓨팅'(inference-time compute) 스케일링도 주목받고 있습니다.</p>
          </div>

          <h3>LLM의 한계</h3>
          <ul>
            <li>환각(Hallucination): 사실이 아닌 정보를 자신있게 생성</li>
            <li>지식 단절: 학습 데이터 이후의 정보를 알지 못함 (RAG로 보완)</li>
            <li>수학/논리: 복잡한 수학적 추론에서 여전히 오류 가능</li>
            <li>에너지 소비: 대규모 모델 학습/운영에 막대한 전력 필요</li>
          </ul>
        </>
      ),
      contentEn: (
        <>
          <h3>Evolution of Large Language Models</h3>
          <p>
            LLMs are the core of the current AI revolution. Trained with hundreds of billions of parameters,
            these models perform text generation, coding, translation, summarization, and more.
          </p>

          <h3>Major LLM Models (2025)</h3>
          <ul>
            <li><strong>GPT-4o / GPT-4.5 (OpenAI)</strong>: Multimodal, largest user base</li>
            <li><strong>Claude 3.5 / Claude 4 (Anthropic)</strong>: Safety-focused, strong in long context</li>
            <li><strong>Gemini 2.0 (Google)</strong>: Google services integration</li>
            <li><strong>Llama 3.1 (Meta)</strong>: Strongest open-source, 405B parameters</li>
            <li><strong>Mistral Large (Mistral AI)</strong>: European open-source LLM</li>
            <li><strong>DeepSeek-V3 (DeepSeek)</strong>: High-performance open-source from China</li>
          </ul>

          <h3>Key Development Directions</h3>
          <ul>
            <li><strong>Enhanced Reasoning</strong>: Chain-of-Thought, Tree-of-Thought techniques</li>
            <li><strong>Multimodal</strong>: Simultaneous text+image+voice+video processing</li>
            <li><strong>Context Window Expansion</strong>: 100K~1M+ token capacity</li>
            <li><strong>Tool Use</strong>: External APIs, search, code execution</li>
            <li><strong>Cost Reduction</strong>: Lightweight models, quantization</li>
          </ul>

          <div className="info-box">
            <h4>Scaling Laws</h4>
            <p>Model size, data volume, and computing power predictably improve performance.
            Recently, 'inference-time compute' scaling has also gained attention.</p>
          </div>

          <h3>LLM Limitations</h3>
          <ul>
            <li>Hallucination: Confidently generating false information</li>
            <li>Knowledge cutoff: Cannot know post-training information (mitigated by RAG)</li>
            <li>Math/Logic: Still prone to errors in complex mathematical reasoning</li>
            <li>Energy consumption: Massive power needed for training/operation</li>
          </ul>
        </>
      )
    },
    multimodal: {
      titleKo: '멀티모달 AI',
      titleEn: 'Multimodal AI',
      contentKo: (
        <>
          <h3>멀티모달 AI란?</h3>
          <p>
            멀티모달(Multimodal) AI는 텍스트, 이미지, 음성, 영상 등 여러 형태의 데이터를 동시에 이해하고 생성할 수 있는
            AI 시스템입니다. 2024-2025년 AI 발전의 가장 중요한 트렌드 중 하나입니다.
          </p>

          <h3>멀티모달 AI의 능력</h3>
          <ul>
            <li><strong>이미지 이해</strong>: 사진을 보고 내용 설명, 질문 답변 (GPT-4V, Claude Vision)</li>
            <li><strong>이미지 생성</strong>: 텍스트 설명으로 이미지 생성 (DALL-E 3, Midjourney)</li>
            <li><strong>음성 대화</strong>: 실시간 음성으로 AI와 대화 (GPT-4o Voice)</li>
            <li><strong>영상 생성</strong>: 텍스트/이미지에서 영상 생성 (Sora, Runway)</li>
            <li><strong>문서 분석</strong>: PDF, 차트, 표를 보고 분석 (Claude, Gemini)</li>
          </ul>

          <h3>주요 멀티모달 모델</h3>
          <ul>
            <li><strong>GPT-4o</strong>: OpenAI의 통합 모델. 텍스트+이미지+음성 동시 처리</li>
            <li><strong>Gemini 2.0</strong>: Google의 네이티브 멀티모달 모델</li>
            <li><strong>Claude 3.5 Sonnet</strong>: Anthropic의 비전 모델. 문서/이미지 분석 강점</li>
          </ul>

          <h3>실용적 활용 사례</h3>
          <ul>
            <li>사진을 찍어서 AI에게 "이 요리의 레시피 알려줘" 질문</li>
            <li>차트나 그래프를 보여주고 데이터 분석 요청</li>
            <li>외국어 간판을 촬영하여 즉시 번역</li>
            <li>손글씨 노트를 AI가 디지털 텍스트로 변환</li>
            <li>제품 사진으로 온라인 검색 및 가격 비교</li>
          </ul>

          <div className="info-box">
            <h4>미래 전망</h4>
            <p>멀티모달 AI는 점점 더 자연스러운 인간-AI 상호작용을 가능하게 합니다.
            향후 AR 글래스, 로봇 등과 결합하여 물리적 세계와의 상호작용도 확대될 전망입니다.</p>
          </div>
        </>
      ),
      contentEn: (
        <>
          <h3>What is Multimodal AI?</h3>
          <p>
            Multimodal AI systems can simultaneously understand and generate multiple types of data including
            text, images, audio, and video. It's one of the most important AI trends of 2024-2025.
          </p>

          <h3>Multimodal AI Capabilities</h3>
          <ul>
            <li><strong>Image Understanding</strong>: Describe and answer questions about photos</li>
            <li><strong>Image Generation</strong>: Create images from text descriptions</li>
            <li><strong>Voice Conversation</strong>: Real-time voice interaction with AI</li>
            <li><strong>Video Generation</strong>: Create video from text/images</li>
            <li><strong>Document Analysis</strong>: Analyze PDFs, charts, and tables</li>
          </ul>

          <h3>Major Multimodal Models</h3>
          <ul>
            <li><strong>GPT-4o</strong>: OpenAI's unified model for text+image+voice</li>
            <li><strong>Gemini 2.0</strong>: Google's native multimodal model</li>
            <li><strong>Claude 3.5 Sonnet</strong>: Anthropic's vision model, strong in document analysis</li>
          </ul>

          <div className="info-box">
            <h4>Future Outlook</h4>
            <p>Multimodal AI enables increasingly natural human-AI interaction.
            Future integration with AR glasses and robots will expand interaction with the physical world.</p>
          </div>
        </>
      )
    },
    agents: {
      titleKo: 'AI 에이전트',
      titleEn: 'AI Agents',
      contentKo: (
        <>
          <h3>AI 에이전트란?</h3>
          <p>
            AI 에이전트(AI Agent)는 사용자의 목표를 이해하고, 스스로 계획을 세우고, 도구를 사용하며,
            여러 단계의 작업을 자율적으로 수행하는 AI 시스템입니다. 단순한 질문-답변을 넘어
            실제로 '일'을 하는 AI입니다.
          </p>

          <h3>AI 에이전트의 핵심 능력</h3>
          <ul>
            <li><strong>계획 수립</strong>: 복잡한 작업을 단계별로 분해</li>
            <li><strong>도구 사용</strong>: 웹 검색, 코드 실행, API 호출, 파일 조작</li>
            <li><strong>자기 반성</strong>: 결과를 평가하고 전략을 수정</li>
            <li><strong>메모리</strong>: 이전 대화와 작업 내용을 기억</li>
            <li><strong>멀티 에이전트</strong>: 여러 에이전트가 협력하여 작업 수행</li>
          </ul>

          <h3>주요 AI 에이전트</h3>
          <ul>
            <li><strong>Claude Code</strong>: 코드 작성, 파일 수정, Git 작업을 자율적으로 수행</li>
            <li><strong>Devin</strong>: 소프트웨어 개발 전문 AI 에이전트</li>
            <li><strong>AutoGPT</strong>: 목표를 주면 자동으로 작업을 수행하는 오픈소스 에이전트</li>
            <li><strong>Microsoft Copilot Studio</strong>: 맞춤형 비즈니스 에이전트 제작 플랫폼</li>
            <li><strong>Google Gemini Deep Research</strong>: 자율적 온라인 리서치 에이전트</li>
          </ul>

          <h3>에이전트의 활용 분야</h3>
          <ul>
            <li><strong>소프트웨어 개발</strong>: 자동 코딩, 테스트, 배포</li>
            <li><strong>데이터 분석</strong>: 데이터 수집 → 분석 → 보고서 자동 생성</li>
            <li><strong>고객 서비스</strong>: 문의 접수 → 문제 해결 → 후속 조치 자동화</li>
            <li><strong>연구/리서치</strong>: 자료 수집 → 정리 → 요약 보고서 작성</li>
          </ul>

          <div className="warning-box">
            <h4>에이전트의 위험성</h4>
            <p>AI 에이전트는 자율적으로 행동하므로 예상치 못한 결과를 만들 수 있습니다.
            항상 적절한 권한 제한과 사람의 감독(Human-in-the-Loop)이 필요합니다.</p>
          </div>
        </>
      ),
      contentEn: (
        <>
          <h3>What are AI Agents?</h3>
          <p>
            AI Agents understand user goals, create plans autonomously, use tools,
            and perform multi-step tasks independently. They go beyond simple Q&A to actually 'do work'.
          </p>

          <h3>Core Agent Capabilities</h3>
          <ul>
            <li><strong>Planning</strong>: Break complex tasks into steps</li>
            <li><strong>Tool Use</strong>: Web search, code execution, API calls, file manipulation</li>
            <li><strong>Self-reflection</strong>: Evaluate results and adjust strategy</li>
            <li><strong>Memory</strong>: Remember previous conversations and work</li>
            <li><strong>Multi-agent</strong>: Multiple agents collaborating on tasks</li>
          </ul>

          <h3>Major AI Agents</h3>
          <ul>
            <li><strong>Claude Code</strong>: Autonomously writes code, modifies files, manages Git</li>
            <li><strong>Devin</strong>: Software development specialized AI agent</li>
            <li><strong>AutoGPT</strong>: Open-source agent that automatically performs tasks</li>
            <li><strong>Microsoft Copilot Studio</strong>: Custom business agent platform</li>
          </ul>

          <div className="warning-box">
            <h4>Agent Risks</h4>
            <p>AI agents act autonomously and can produce unexpected results.
            Always maintain proper permission limits and human oversight (Human-in-the-Loop).</p>
          </div>
        </>
      )
    },
    opensource: {
      titleKo: '오픈소스 AI',
      titleEn: 'Open-source AI',
      contentKo: (
        <>
          <h3>오픈소스 AI 생태계</h3>
          <p>
            오픈소스 AI는 모델의 가중치와 코드를 공개하여 누구나 사용, 수정, 배포할 수 있는 AI입니다.
            상용 AI 서비스에 대한 대안으로, 비용 절감, 커스터마이징, 데이터 프라이버시 측면에서 주목받고 있습니다.
          </p>

          <h3>주요 오픈소스 모델</h3>
          <ul>
            <li><strong>Llama 3.1 (Meta)</strong>: 8B~405B 파라미터. 가장 영향력 있는 오픈소스 LLM</li>
            <li><strong>Mistral / Mixtral (Mistral AI)</strong>: 유럽 기반 고효율 모델</li>
            <li><strong>DeepSeek (DeepSeek)</strong>: 중국 기반 고성능 오픈소스</li>
            <li><strong>Qwen (Alibaba)</strong>: 다국어 지원 강점</li>
            <li><strong>Stable Diffusion (Stability AI)</strong>: 오픈소스 이미지 생성의 대명사</li>
            <li><strong>Whisper (OpenAI)</strong>: 오픈소스 음성 인식 모델</li>
          </ul>

          <h3>오픈소스 AI의 장점</h3>
          <ul>
            <li><strong>비용</strong>: API 비용 없이 자체 서버에서 실행 가능</li>
            <li><strong>커스터마이징</strong>: 특정 분야에 맞게 파인튜닝 가능</li>
            <li><strong>프라이버시</strong>: 데이터가 외부로 나가지 않음</li>
            <li><strong>투명성</strong>: 모델 작동 방식을 직접 확인 가능</li>
            <li><strong>커뮤니티</strong>: 전 세계 개발자들의 지속적 개선</li>
          </ul>

          <h3>오픈소스 AI 활용 도구</h3>
          <ul>
            <li><strong>Hugging Face</strong>: 모델 허브. 수십만 개의 모델 무료 공개</li>
            <li><strong>Ollama</strong>: 로컬에서 LLM을 쉽게 실행하는 도구</li>
            <li><strong>LM Studio</strong>: GUI 기반 로컬 LLM 실행 도구</li>
            <li><strong>vLLM</strong>: 고성능 LLM 추론 서버</li>
          </ul>

          <div className="info-box">
            <h4>오픈소스의 미래</h4>
            <p>오픈소스 AI는 빠르게 상용 모델의 성능을 따라잡고 있습니다. Meta의 Llama를 시작으로
            '오픈 웨이트' 모델들이 AI의 민주화를 이끌고 있습니다.</p>
          </div>
        </>
      ),
      contentEn: (
        <>
          <h3>Open-source AI Ecosystem</h3>
          <p>
            Open-source AI makes model weights and code publicly available for anyone to use, modify, and distribute.
            As alternatives to commercial AI, they're gaining attention for cost savings, customization, and data privacy.
          </p>

          <h3>Major Open-source Models</h3>
          <ul>
            <li><strong>Llama 3.1 (Meta)</strong>: 8B~405B parameters, most influential open-source LLM</li>
            <li><strong>Mistral / Mixtral (Mistral AI)</strong>: European high-efficiency models</li>
            <li><strong>DeepSeek</strong>: High-performance open-source from China</li>
            <li><strong>Qwen (Alibaba)</strong>: Strong multilingual support</li>
            <li><strong>Stable Diffusion</strong>: Synonymous with open-source image generation</li>
            <li><strong>Whisper (OpenAI)</strong>: Open-source speech recognition</li>
          </ul>

          <h3>Advantages of Open-source AI</h3>
          <ul>
            <li><strong>Cost</strong>: Run on your own servers without API fees</li>
            <li><strong>Customization</strong>: Fine-tune for specific domains</li>
            <li><strong>Privacy</strong>: Data stays local</li>
            <li><strong>Transparency</strong>: Directly inspect how models work</li>
            <li><strong>Community</strong>: Continuous improvements from global developers</li>
          </ul>

          <div className="info-box">
            <h4>Future of Open-source</h4>
            <p>Open-source AI is rapidly catching up to commercial models. Starting with Meta's Llama,
            'open weight' models are leading the democratization of AI.</p>
          </div>
        </>
      )
    }
  };

  const currentTopic = (topic as TrendTopic) || 'llm';
  const content = topics[currentTopic] || topics.llm;

  const subNavItems = [
    { path: '/trends/llm', labelKo: 'LLM 동향', labelEn: 'LLM Trends' },
    { path: '/trends/multimodal', labelKo: '멀티모달 AI', labelEn: 'Multimodal' },
    { path: '/trends/agents', labelKo: 'AI 에이전트', labelEn: 'AI Agents' },
    { path: '/trends/opensource', labelKo: '오픈소스 AI', labelEn: 'Open-source' }
  ];

  return (
    <>
      <SEOHead
        title={`${language === 'ko' ? content.titleKo : content.titleEn} | Basic AI`}
        description={`AI 트렌드 - ${content.titleKo}`}
      />

      <section className="page-header">
        <div className="container">
          <h2>{language === 'ko' ? 'AI 트렌드' : 'AI Trends'}</h2>
          <p>{language === 'ko' ? '최신 인공지능 기술 동향을 파악합니다' : 'Stay updated with the latest AI technology trends'}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="content-layout">
            <nav className="side-nav">
              <div className="side-nav-title">{language === 'ko' ? 'AI 트렌드' : 'AI Trends'}</div>
              {subNavItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`/trends/${currentTopic}` === item.path ? 'active' : ''}
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

export default Trends;
