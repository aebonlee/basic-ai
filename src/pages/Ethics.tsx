import { Link, useParams } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import SEOHead from '../components/SEOHead';
import type { ReactElement } from 'react';

type EthicsTopic = 'bias' | 'privacy' | 'responsibility' | 'future';

const Ethics = (): ReactElement => {
  const { topic } = useParams<{ topic: string }>();
  const { language } = useLanguage();

  const topics: Record<EthicsTopic, { titleKo: string; titleEn: string; contentKo: ReactElement; contentEn: ReactElement }> = {
    bias: {
      titleKo: '편향과 공정성',
      titleEn: 'Bias & Fairness',
      contentKo: (
        <>
          <h3>AI 편향이란?</h3>
          <p>
            AI 편향(bias)은 AI 시스템이 특정 그룹에 대해 불공정한 결과를 만들어내는 현상입니다.
            AI는 학습 데이터의 패턴을 그대로 반영하므로, 데이터에 존재하는 사회적 편견이
            AI 시스템에 그대로 반영될 수 있습니다.
          </p>

          <h3>편향의 유형</h3>
          <ul>
            <li>
              <strong>데이터 편향</strong>: 학습 데이터가 특정 집단에 치우친 경우
              <br />예: 주로 백인 얼굴로 학습된 안면 인식 AI → 유색인종 인식률 저하
            </li>
            <li>
              <strong>선택 편향</strong>: 데이터 수집 과정에서 특정 집단이 과대/과소 대표되는 경우
              <br />예: 온라인 설문 → 인터넷 접근이 어려운 고령층 의견 누락
            </li>
            <li>
              <strong>확인 편향</strong>: 기존 가설을 확인하는 방향으로 데이터 해석
            </li>
            <li>
              <strong>자동화 편향</strong>: AI 결과를 무비판적으로 신뢰하는 경향
            </li>
          </ul>

          <h3>실제 사례</h3>
          <ul>
            <li><strong>채용 AI</strong>: 아마존의 AI 채용 시스템이 여성 지원자를 불리하게 평가 (2018, 폐기됨)</li>
            <li><strong>의료 AI</strong>: 흑인 환자의 건강 위험도를 과소평가하는 알고리즘 발견</li>
            <li><strong>형사사법</strong>: 재범 예측 AI(COMPAS)가 흑인에게 불리한 예측 경향</li>
            <li><strong>이미지 생성</strong>: 특정 직업을 성별/인종 고정관념으로 생성하는 경향</li>
          </ul>

          <div className="warning-box">
            <h4>공정한 AI를 위한 노력</h4>
            <p>편향 문제 해결을 위해 다양한 데이터셋 구축, 편향 감사(Bias Audit), 공정성 지표 모니터링, 다양한 배경의 팀 구성 등이 필요합니다. AI 개발자와 사용자 모두 이 문제에 대한 인식이 중요합니다.</p>
          </div>
        </>
      ),
      contentEn: (
        <>
          <h3>What is AI Bias?</h3>
          <p>
            AI bias occurs when AI systems produce unfair results for certain groups.
            Since AI reflects patterns in training data, social prejudices in data
            can be directly reflected in AI systems.
          </p>

          <h3>Types of Bias</h3>
          <ul>
            <li><strong>Data Bias</strong>: Training data skewed toward specific groups</li>
            <li><strong>Selection Bias</strong>: Certain groups over/under-represented in data collection</li>
            <li><strong>Confirmation Bias</strong>: Interpreting data to confirm existing hypotheses</li>
            <li><strong>Automation Bias</strong>: Uncritically trusting AI results</li>
          </ul>

          <h3>Real Cases</h3>
          <ul>
            <li><strong>Hiring AI</strong>: Amazon's AI recruiting system penalized female applicants (2018, discontinued)</li>
            <li><strong>Medical AI</strong>: Algorithm underestimating health risks for Black patients</li>
            <li><strong>Criminal Justice</strong>: COMPAS recidivism prediction biased against Black defendants</li>
            <li><strong>Image Generation</strong>: Generating professions with gender/racial stereotypes</li>
          </ul>

          <div className="warning-box">
            <h4>Toward Fair AI</h4>
            <p>Addressing bias requires diverse datasets, bias audits, fairness metric monitoring, and diverse teams. Both AI developers and users need awareness of these issues.</p>
          </div>
        </>
      )
    },
    privacy: {
      titleKo: '개인정보 보호',
      titleEn: 'Privacy Protection',
      contentKo: (
        <>
          <h3>AI와 개인정보</h3>
          <p>
            AI 시스템은 대량의 데이터를 수집하고 분석합니다. 이 과정에서 개인정보 보호는
            가장 중요한 윤리적 과제 중 하나입니다.
          </p>

          <h3>주요 개인정보 이슈</h3>
          <ul>
            <li>
              <strong>학습 데이터 수집</strong>: AI 학습에 사용된 개인정보의 동의 문제
              <br />예: SNS 게시물, 온라인 사진이 AI 학습에 무단 사용
            </li>
            <li>
              <strong>대화 데이터 ��장</strong>: AI 챗봇과의 대화 내용 저장/활용 문제
              <br />예: 업무 기밀을 ChatGPT에 입력 → 데이터 유출 우려
            </li>
            <li>
              <strong>안면 인식</strong>: 동의 없는 얼굴 인식, 추적 감시 위험
            </li>
            <li>
              <strong>프로파일링</strong>: 행동 패턴 분석을 통한 개인 추적/분류
            </li>
          </ul>

          <h3>자기 보호 방법</h3>
          <ul>
            <li>AI 서비스 사용 시 개인정보(주민번호, 비밀번호, 금융정보) 입력 금지</li>
            <li>AI 서비스의 데이터 활용 정책 확인</li>
            <li>민감한 업무 내용은 기업용(Enterprise) 버전 사용</li>
            <li>불필요한 데이터 수집에 대한 동의 거부</li>
            <li>AI 서비스의 대화 기록 삭제 기능 활용</li>
          </ul>

          <div className="info-box">
            <h4>관련 법규</h4>
            <p><strong>한국</strong>: 개인정보보호법, AI 기본법(제정 추진 중)<br />
            <strong>EU</strong>: GDPR(일반 데이터 보호 규정), EU AI Act<br />
            <strong>미국</strong>: 주별 개인정보 보호법, AI 행정명령</p>
          </div>
        </>
      ),
      contentEn: (
        <>
          <h3>AI and Privacy</h3>
          <p>
            AI systems collect and analyze large amounts of data. Privacy protection
            is one of the most important ethical challenges in this process.
          </p>

          <h3>Key Privacy Issues</h3>
          <ul>
            <li><strong>Training Data Collection</strong>: Consent issues for personal data used in AI training</li>
            <li><strong>Conversation Data Storage</strong>: Storage/use of AI chatbot conversations</li>
            <li><strong>Facial Recognition</strong>: Recognition without consent, surveillance risks</li>
            <li><strong>Profiling</strong>: Individual tracking/classification through behavior analysis</li>
          </ul>

          <h3>Self-Protection Methods</h3>
          <ul>
            <li>Never input personal info (SSN, passwords, financial data) to AI services</li>
            <li>Review AI service data usage policies</li>
            <li>Use enterprise versions for sensitive work content</li>
            <li>Refuse unnecessary data collection consent</li>
            <li>Utilize conversation history deletion features</li>
          </ul>

          <div className="info-box">
            <h4>Related Regulations</h4>
            <p><strong>Korea</strong>: Personal Information Protection Act, AI Basic Law (pending)<br />
            <strong>EU</strong>: GDPR, EU AI Act<br />
            <strong>US</strong>: State privacy laws, AI Executive Order</p>
          </div>
        </>
      )
    },
    responsibility: {
      titleKo: '책임있는 AI',
      titleEn: 'Responsible AI',
      contentKo: (
        <>
          <h3>책임있는 AI 개발과 사용</h3>
          <p>
            AI가 사회에 미치는 영향이 커짐에 따라, AI를 책임있게 개발하고 사용하는 것이
            점점 더 중요해지고 있습니다.
          </p>

          <h3>책임있는 AI의 5대 원칙</h3>
          <ul>
            <li>
              <strong>투명성(Transparency)</strong>: AI가 어떻게 결정을 내리는지 설명할 수 있어야 함
              <br />블랙박스가 아닌, 설명 가능한 AI(Explainable AI, XAI) 추구
            </li>
            <li>
              <strong>공정성(Fairness)</strong>: 모든 사용자에게 공평하게 작동해야 함
              <br />특정 집단에 대한 차별 없는 결과 보장
            </li>
            <li>
              <strong>안전성(Safety)</strong>: 인간에게 해를 끼치지 않아야 함
              <br />위험한 정보 제공 금지, 안전 가드레일 설정
            </li>
            <li>
              <strong>책임성(Accountability)</strong>: AI의 결정에 대한 책임 소재가 명확해야 함
              <br />개발자, 운영자, 사용자의 책임 범위 명확화
            </li>
            <li>
              <strong>프라이버시(Privacy)</strong>: 개인정보를 존중하고 보호해야 함
            </li>
          </ul>

          <h3>AI 사용자의 책임</h3>
          <ul>
            <li>AI 생성 콘텐츠를 자신의 것으로 무단 사용하지 않기</li>
            <li>AI를 사기, 조작, 해킹 등 불법 목적으로 사용하지 않기</li>
            <li>AI 결과를 맹신하지 않고 비판적으로 검토하기</li>
            <li>타인의 권리(저작권, 초상권 등)를 침해하지 않기</li>
            <li>AI 사용 사실을 적절히 밝히기 (학술/업무 문서 등)</li>
          </ul>

          <div className="info-box">
            <h4>AI 윤리 가이드라인</h4>
            <p>한국 과학���술정보통신부의 'AI 윤리기준', EU의 'AI Act', UNESCO의 'AI 윤리 권고' 등
            국제적으로 AI 윤리 가이드라인이 마련되고 있습니다.</p>
          </div>
        </>
      ),
      contentEn: (
        <>
          <h3>Responsible AI Development and Use</h3>
          <p>
            As AI's impact on society grows, developing and using AI responsibly
            becomes increasingly important.
          </p>

          <h3>5 Principles of Responsible AI</h3>
          <ul>
            <li><strong>Transparency</strong>: AI decisions should be explainable (Explainable AI, XAI)</li>
            <li><strong>Fairness</strong>: Must work equitably for all users without discrimination</li>
            <li><strong>Safety</strong>: Must not harm humans. Safety guardrails required</li>
            <li><strong>Accountability</strong>: Clear responsibility for AI decisions</li>
            <li><strong>Privacy</strong>: Must respect and protect personal information</li>
          </ul>

          <h3>User Responsibilities</h3>
          <ul>
            <li>Don't pass off AI-generated content as your own</li>
            <li>Don't use AI for fraud, manipulation, or hacking</li>
            <li>Critically review AI outputs, don't blindly trust them</li>
            <li>Don't infringe on others' rights (copyright, likeness, etc.)</li>
            <li>Appropriately disclose AI usage (academic/work documents)</li>
          </ul>
        </>
      )
    },
    future: {
      titleKo: 'AI와 미래사회',
      titleEn: 'AI & Future Society',
      contentKo: (
        <>
          <h3>AI가 바꾸는 미래</h3>
          <p>
            인공지능은 산업혁명에 비견되는 사회적 변화를 가져올 것으로 예상됩니다.
            직업, 교육, 의료, 환경 등 거의 모든 분야에서 근본적인 변화가 진행되고 있습니다.
          </p>

          <h3>직업과 노동의 변화</h3>
          <ul>
            <li><strong>자동화되는 직업</strong>: 단순 반복 ��업, 데이터 입력, 기본 고객 응대 등</li>
            <li><strong>변화하는 직업</strong>: 대부분의 지식 노동. AI를 도구로 활용하여 생산성 향상</li>
            <li><strong>새로 생기는 직업</strong>: AI 트레이너, 프롬프트 엔지니어, AI 윤리 전문가, AI 감사관 등</li>
          </ul>

          <div className="info-box">
            <h4>핵심 메시지</h4>
            <p>"AI가 일자리를 대체하는 것이 아니라, AI를 잘 활용하는 사람이 그렇지 못한 사람의 일자리를 대체합니다."
            AI 리터러시(활용 능력)가 미래의 핵심 역량이 됩니다.</p>
          </div>

          <h3>교육의 변화</h3>
          <ul>
            <li>개인 맞춤형 학습 경로 (AI 튜터)</li>
            <li>실시간 피드백과 수준별 학습</li>
            <li>암기 중심에서 창의력/문제해결 중심으로 전환</li>
            <li>평생학습의 중요성 증가</li>
          </ul>

          <h3>AI 시대의 필수 역량</h3>
          <ul>
            <li><strong>AI 리터러시</strong>: AI 도구를 효과적으로 활용하는 능력</li>
            <li><strong>비판적 사고</strong>: AI 결과를 검증하고 판단하는 능력</li>
            <li><strong>창의성</strong>: AI가 대체하기 어려운 독창적 아이디어 생성</li>
            <li><strong>감성 지능</strong>: 공감, 소통, 팀워크 등 인간 고유의 역량</li>
            <li><strong>윤리적 판단</strong>: AI의 올바른 사용에 대한 판단력</li>
            <li><strong>적응력</strong>: 빠르게 변하는 기술 환경에 적응하는 능력</li>
          </ul>

          <h3>긍정적 미래 시나리오</h3>
          <ul>
            <li>AI가 의료 진단을 보조하여 질병 조기 발견률 향상</li>
            <li>AI 기반 기후 모델링으로 환경 문제 해결 가속화</li>
            <li>교육 불평등 해소 (누구나 AI 튜터 접근 가능)</li>
            <li>위험한 작업의 자동화로 산업 안전 향상</li>
            <li>과학 연구 가속화 (신약 개발, 소재 발견 등)</li>
          </ul>

          <div className="warning-box">
            <h4>함께 만들어가는 미래</h4>
            <p>AI의 미래는 기술이 아니라 우리의 선택에 달려 있습니다. 기술의 발전과 함께 윤리적 가이드라인, 법적 제도, 교육 시스템을 함께 발전시켜야 모두에게 이로운 AI 사회를 만들 수 있습니다.</p>
          </div>
        </>
      ),
      contentEn: (
        <>
          <h3>The Future AI is Shaping</h3>
          <p>
            AI is expected to bring social changes comparable to the Industrial Revolution.
            Fundamental changes are underway in nearly every field.
          </p>

          <h3>Changes in Work and Employment</h3>
          <ul>
            <li><strong>Automated jobs</strong>: Simple repetitive tasks, data entry, basic customer service</li>
            <li><strong>Changing jobs</strong>: Most knowledge work using AI as a tool</li>
            <li><strong>New jobs</strong>: AI trainers, prompt engineers, AI ethics experts, AI auditors</li>
          </ul>

          <div className="info-box">
            <h4>Key Message</h4>
            <p>"AI doesn't replace jobs - people who use AI well replace those who don't."
            AI literacy becomes the essential competency for the future.</p>
          </div>

          <h3>Essential Skills for the AI Era</h3>
          <ul>
            <li><strong>AI Literacy</strong>: Ability to effectively use AI tools</li>
            <li><strong>Critical Thinking</strong>: Ability to verify and judge AI outputs</li>
            <li><strong>Creativity</strong>: Original ideas that AI cannot easily replicate</li>
            <li><strong>Emotional Intelligence</strong>: Empathy, communication, teamwork</li>
            <li><strong>Ethical Judgment</strong>: Discernment about proper AI use</li>
            <li><strong>Adaptability</strong>: Adapting to rapidly changing tech environments</li>
          </ul>

          <div className="warning-box">
            <h4>A Future We Build Together</h4>
            <p>The future of AI depends on our choices, not just technology. We must develop ethical guidelines, legal frameworks, and education systems alongside technology to create an AI society beneficial to all.</p>
          </div>
        </>
      )
    }
  };

  const currentTopic = (topic as EthicsTopic) || 'bias';
  const content = topics[currentTopic] || topics['bias'];

  const subNavItems = [
    { path: '/ethics/bias', labelKo: 'AI 편향 & 공정성', labelEn: 'Bias & Fairness' },
    { path: '/ethics/privacy', labelKo: 'Privacy · 개인정보', labelEn: 'Privacy' },
    { path: '/ethics/responsibility', labelKo: 'Responsible AI', labelEn: 'Responsible AI' },
    { path: '/ethics/future', labelKo: 'AI & 미래사회', labelEn: 'AI & Future' }
  ];

  return (
    <>
      <SEOHead
        title={`${language === 'ko' ? content.titleKo : content.titleEn} | Basic AI`}
        description={`AI 윤리 학습 - ${content.titleKo}`}
      />

      <section className="page-header">
        <div className="container">
          <h2>AI Ethics</h2>
          <p>{language === 'ko' ? '인공지능의 윤리적 이슈와 책임있는 사용법을 배웁니다' : 'Learn about ethical issues and responsible use of AI'}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="content-layout">
            <nav className="side-nav">
              <div className="side-nav-title">AI Ethics</div>
              {subNavItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`/ethics/${currentTopic}` === item.path ? 'active' : ''}
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

export default Ethics;
