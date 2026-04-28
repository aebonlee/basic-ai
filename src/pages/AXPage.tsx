import { Link, useParams } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import SEOHead from '../components/SEOHead';
import type { ReactElement } from 'react';

type AXTopic = 'what-is-ax' | 'strategy' | 'cases' | 'guide';

const AXPage = (): ReactElement => {
  const { topic } = useParams<{ topic: string }>();
  const { language } = useLanguage();

  const topics: Record<AXTopic, { titleKo: string; titleEn: string; contentKo: ReactElement; contentEn: ReactElement }> = {
    'what-is-ax': {
      titleKo: 'AX란 무엇인가',
      titleEn: 'What is AX',
      contentKo: (
        <>
          <h3>AX(AI Transformation)의 정의</h3>
          <p>
            AX(AI Transformation)는 인공지능을 활용하여 조직의 업무 프로세스, 의사결정, 비즈니스 모델을
            근본적으로 혁신하는 것을 의미합니다. 단순히 AI 도구를 도입하는 것을 넘어,
            조직 문화와 일하는 방식 자체를 AI 중심으로 변화시키는 포괄적 전략입니다.
          </p>

          <div className="info-box">
            <h4>DX → AX</h4>
            <p><strong>DX(디지털 트랜스포메이션)</strong>가 아날로그를 디지털로 바꾸는 것이었다면,
            <strong> AX(AI 트랜스포메이션)</strong>는 디지털화된 프로세스에 AI를 접목하여
            자동화, 지능화, 최적화하는 다음 단계입니다.</p>
          </div>

          <h3>AX의 3단계</h3>
          <ul>
            <li>
              <strong>1단계: AI 도구 도입</strong>
              <br />개인 수준에서 AI 도구를 업무에 활용 (ChatGPT로 이메일 작성, Copilot으로 코딩)
            </li>
            <li>
              <strong>2단계: AI 프로세스 자동화</strong>
              <br />부서/팀 수준에서 반복 업무를 AI로 자동화 (데이터 처리, 보고서 생성, 고객 분류)
            </li>
            <li>
              <strong>3단계: AI 비즈니스 혁신</strong>
              <br />조직 전체의 비즈니스 모델을 AI 기반으로 재설계 (AI 네이티브 서비스, 자율 의사결정)
            </li>
          </ul>

          <h3>왜 AX가 중요한가?</h3>
          <ul>
            <li><strong>생산성 혁신</strong>: McKinsey 보고서 — AI 도입 기업 생산성 40%+ 향상 가능</li>
            <li><strong>경쟁 우위</strong>: AI를 먼저 도입한 기업이 시장을 선점</li>
            <li><strong>비용 절감</strong>: 반복 작업 자동화로 운영비 절감</li>
            <li><strong>의사결정 개선</strong>: 데이터 기반 정확한 예측과 판단</li>
            <li><strong>고객 경험 향상</strong>: 개인화된 서비스 제공</li>
          </ul>

          <div className="warning-box">
            <h4>AX ≠ 기술 도입</h4>
            <p>AX는 기술만의 문제가 아닙니다. 조직 문화, 인재 역량, 데이터 인프라, 리더십까지
            종합적으로 변화해야 성공할 수 있습니다. 기술 도입만으로는 AX가 실패할 확률이 높습니다.</p>
          </div>
        </>
      ),
      contentEn: (
        <>
          <h3>Definition of AX (AI Transformation)</h3>
          <p>
            AX (AI Transformation) means fundamentally innovating organizational processes,
            decision-making, and business models through AI. It goes beyond simply adopting AI tools —
            it's a comprehensive strategy to transform organizational culture and work methods around AI.
          </p>

          <div className="info-box">
            <h4>DX → AX</h4>
            <p>If <strong>DX (Digital Transformation)</strong> was about converting analog to digital,
            <strong> AX (AI Transformation)</strong> is the next step: applying AI to digitized processes
            for automation, intelligence, and optimization.</p>
          </div>

          <h3>Three Stages of AX</h3>
          <ul>
            <li><strong>Stage 1: AI Tool Adoption</strong> — Individual-level AI tool usage</li>
            <li><strong>Stage 2: AI Process Automation</strong> — Team/department-level automation</li>
            <li><strong>Stage 3: AI Business Innovation</strong> — Organization-wide AI-native redesign</li>
          </ul>

          <h3>Why AX Matters</h3>
          <ul>
            <li><strong>Productivity</strong>: McKinsey reports 40%+ productivity gains possible</li>
            <li><strong>Competitive Edge</strong>: Early AI adopters capture market share</li>
            <li><strong>Cost Reduction</strong>: Automate repetitive tasks</li>
            <li><strong>Better Decisions</strong>: Data-driven predictions and judgments</li>
            <li><strong>Customer Experience</strong>: Personalized service delivery</li>
          </ul>

          <div className="warning-box">
            <h4>AX ≠ Technology Adoption</h4>
            <p>AX isn't just about technology. Success requires comprehensive changes in organizational
            culture, talent capabilities, data infrastructure, and leadership.</p>
          </div>
        </>
      )
    },
    strategy: {
      titleKo: '기업 AX 전략',
      titleEn: 'Enterprise AX Strategy',
      contentKo: (
        <>
          <h3>성공적인 AX 전략 프레임워크</h3>
          <p>
            AX를 성공적으로 실행하려면 체계적인 전략이 필요합니다.
            기술, 인재, 데이터, 문화의 4가지 축을 동시에 변화시켜야 합니다.
          </p>

          <h3>1. 리더십과 비전</h3>
          <ul>
            <li>경영진의 AI 비전 수립과 강력한 지지</li>
            <li>CAIO(Chief AI Officer) 또는 AI 전담 조직 신설</li>
            <li>AX 로드맵 수립: 단기(6개월), 중기(1-2년), 장기(3-5년)</li>
            <li>예산 확보와 투자 우선순위 결정</li>
          </ul>

          <h3>2. 인재 육성</h3>
          <ul>
            <li><strong>전사 AI 리터러시</strong>: 모든 직원 대상 AI 기초 교육</li>
            <li><strong>부서별 AI 활용</strong>: 업무별 AI 도구 교육 (마케팅-AI 카피, 개발-AI 코딩)</li>
            <li><strong>AI 전문가</strong>: 데이터 사이언티스트, ML 엔지니어 채용/양성</li>
            <li><strong>AI 챔피언</strong>: 각 부서에서 AI 전파자 역할을 하는 직원 육성</li>
          </ul>

          <h3>3. 데이터 인프라</h3>
          <ul>
            <li>데이터 거버넌스: 수집, 저장, 활용 정책 수립</li>
            <li>데이터 품질 관리: 정제, 라벨링, 표준화</li>
            <li>데이터 통합: 부서별 사일로 해소</li>
            <li>보안/규정: 개인정보보호법, 산업별 규제 준수</li>
          </ul>

          <h3>4. 문화 변화</h3>
          <ul>
            <li>실험 문화: "실패해도 괜찮다"는 분위기 조성</li>
            <li>데이터 기반 의사결정 습관화</li>
            <li>AI와 사람의 협업 방식 정의</li>
            <li>변화 관리(Change Management) 프로그램 운영</li>
          </ul>

          <div className="info-box">
            <h4>Quick Win 전략</h4>
            <p>처음부터 대규모 프로젝트를 시작하지 마세요. 작은 성공(Quick Win)을 먼저 만들어
            조직의 AI 신뢰와 동력을 확보한 후 점진적으로 확대하는 것이 효과적입니다.</p>
          </div>
        </>
      ),
      contentEn: (
        <>
          <h3>Successful AX Strategy Framework</h3>
          <p>
            Successful AX execution requires systematic strategy across four pillars:
            technology, talent, data, and culture.
          </p>

          <h3>1. Leadership and Vision</h3>
          <ul>
            <li>Executive AI vision and strong support</li>
            <li>Establish CAIO or dedicated AI organization</li>
            <li>AX roadmap: short (6 months), mid (1-2 years), long-term (3-5 years)</li>
          </ul>

          <h3>2. Talent Development</h3>
          <ul>
            <li><strong>Company-wide AI Literacy</strong>: Basic AI training for all employees</li>
            <li><strong>Department AI Usage</strong>: Role-specific AI tool training</li>
            <li><strong>AI Experts</strong>: Hire/develop data scientists, ML engineers</li>
            <li><strong>AI Champions</strong>: Develop AI evangelists in each department</li>
          </ul>

          <h3>3. Data Infrastructure</h3>
          <ul>
            <li>Data governance: collection, storage, usage policies</li>
            <li>Data quality management: cleaning, labeling, standardization</li>
            <li>Data integration: break down departmental silos</li>
          </ul>

          <h3>4. Culture Change</h3>
          <ul>
            <li>Experiment-friendly culture</li>
            <li>Data-driven decision making habits</li>
            <li>Define human-AI collaboration methods</li>
          </ul>

          <div className="info-box">
            <h4>Quick Win Strategy</h4>
            <p>Don't start with massive projects. Create small wins first to build organizational
            trust and momentum, then gradually expand.</p>
          </div>
        </>
      )
    },
    cases: {
      titleKo: '산업별 AX 사례',
      titleEn: 'AX by Industry',
      contentKo: (
        <>
          <h3>산업별 AI 트랜스포메이션 사례</h3>
          <p>
            각 산업은 고유한 특성에 맞게 AI를 도입하고 있습니다.
            대표적인 산업별 AX 사례를 살펴보겠습니다.
          </p>

          <h3>제조업</h3>
          <ul>
            <li><strong>예측 유지보수</strong>: 설비 고장을 사전 예측하여 다운타임 감소</li>
            <li><strong>품질 검사</strong>: AI 비전으로 불량품 자동 검출 (정확도 99%+)</li>
            <li><strong>공급망 최적화</strong>: 수요 예측으로 재고 비용 절감</li>
            <li>사례: 삼성전자 — AI 반도체 설계 자동화, 불량률 50% 감소</li>
          </ul>

          <h3>금융</h3>
          <ul>
            <li><strong>이상 거래 탐지</strong>: 실시간 사기 거래 감지</li>
            <li><strong>신용 평가</strong>: AI 기반 대출 심사 자동화</li>
            <li><strong>로보어드바이저</strong>: AI 자산관리 서비스</li>
            <li>사례: KB금융 — AI 챗봇 상담 건수 월 200만+, 상담사 업무 30% 감소</li>
          </ul>

          <h3>의료/헬스케어</h3>
          <ul>
            <li><strong>의료 영상 분석</strong>: X-ray, CT, MRI에서 질병 자동 검출</li>
            <li><strong>신약 개발</strong>: AI로 후보 물질 발굴 기간 단축</li>
            <li><strong>개인 맞춤 치료</strong>: 유전자/건강 데이터 기반 치료 계획</li>
            <li>사례: 뷰노 — AI 의료 영상 분석으로 폐 질환 조기 발견률 향상</li>
          </ul>

          <h3>유통/커머스</h3>
          <ul>
            <li><strong>추천 시스템</strong>: 개인화된 상품 추천 (매출 15-35% 기여)</li>
            <li><strong>수요 예측</strong>: 정확한 수요 예측으로 재고 최적화</li>
            <li><strong>자동 가격 책정</strong>: 시장 상황에 따른 동적 가격 조정</li>
            <li>사례: 쿠팡 — AI 물류 최적화로 당일 배송 비율 90%+ 달성</li>
          </ul>

          <h3>교육</h3>
          <ul>
            <li><strong>AI 튜터</strong>: 학생 수준에 맞는 개인화 학습</li>
            <li><strong>자동 채점</strong>: 서술형 답안 AI 채점</li>
            <li><strong>학습 분석</strong>: 학습 패턴 분석으로 맞춤 피드백</li>
            <li>사례: 뤼이드(Riiid) — AI 기반 적응형 학습으로 토익 점수 평균 150점 향상</li>
          </ul>

          <div className="info-box">
            <h4>공통 성공 요인</h4>
            <p>성공적인 AX 사례들의 공통점: ① 명확한 비즈니스 문제 정의
            ② 양질의 데이터 확보 ③ 단계적 도입 ④ 현장 인력과 AI 전문가 협업</p>
          </div>
        </>
      ),
      contentEn: (
        <>
          <h3>AI Transformation Cases by Industry</h3>
          <p>Each industry adopts AI according to its unique characteristics.</p>

          <h3>Manufacturing</h3>
          <ul>
            <li><strong>Predictive Maintenance</strong>: Pre-predict equipment failures</li>
            <li><strong>Quality Inspection</strong>: AI vision automatic defect detection (99%+ accuracy)</li>
            <li><strong>Supply Chain</strong>: Demand forecasting to reduce inventory costs</li>
          </ul>

          <h3>Finance</h3>
          <ul>
            <li><strong>Fraud Detection</strong>: Real-time transaction monitoring</li>
            <li><strong>Credit Scoring</strong>: AI-based loan assessment automation</li>
            <li><strong>Robo-advisors</strong>: AI asset management services</li>
          </ul>

          <h3>Healthcare</h3>
          <ul>
            <li><strong>Medical Imaging</strong>: Automatic disease detection from X-ray, CT, MRI</li>
            <li><strong>Drug Discovery</strong>: AI-accelerated candidate molecule identification</li>
            <li><strong>Personalized Treatment</strong>: Gene/health data-based treatment plans</li>
          </ul>

          <h3>Retail/Commerce</h3>
          <ul>
            <li><strong>Recommendation Systems</strong>: Personalized product suggestions (15-35% revenue impact)</li>
            <li><strong>Demand Forecasting</strong>: Accurate prediction for inventory optimization</li>
          </ul>

          <h3>Education</h3>
          <ul>
            <li><strong>AI Tutors</strong>: Personalized learning at each student's level</li>
            <li><strong>Auto Grading</strong>: AI essay/answer grading</li>
          </ul>

          <div className="info-box">
            <h4>Common Success Factors</h4>
            <p>Clear business problem definition, quality data, phased implementation,
            and collaboration between domain experts and AI specialists.</p>
          </div>
        </>
      )
    },
    guide: {
      titleKo: 'AX 실행 가이드',
      titleEn: 'AX Implementation Guide',
      contentKo: (
        <>
          <h3>AX 실행 5단계</h3>
          <p>
            조직에서 AX를 실행하기 위한 실용적인 단계별 가이드입니다.
            규모에 관계없이 적용할 수 있는 프레임워크입니다.
          </p>

          <h3>1단계: 현황 진단</h3>
          <ul>
            <li>현재 업무 프로세스 중 AI로 개선 가능한 영역 파악</li>
            <li>데이터 현황 점검: 어떤 데이터가 있고, 품질은 어떤지</li>
            <li>직원 AI 역량 수준 파악</li>
            <li>경쟁사/업계 AI 도입 현황 벤치마킹</li>
          </ul>

          <h3>2단계: 파일럿 프로젝트 선정</h3>
          <ul>
            <li>높은 효과 + 낮은 난이도 = Quick Win 과제 선정</li>
            <li>측정 가능한 성과 지표(KPI) 설정</li>
            <li>3-6개월 내 결과가 나오는 프로젝트 선택</li>
            <li>예시: 고객 문의 AI 자동 분류, 보고서 자동 생성, 데이터 입력 자동화</li>
          </ul>

          <h3>3단계: 파일럿 실행</h3>
          <ul>
            <li>소규모 팀으로 빠르게 실행</li>
            <li>기존 도구 활용: ChatGPT, Copilot 등 SaaS 우선</li>
            <li>주간 피드백 루프: 결과 확인 → 개선 반복</li>
            <li>성과 데이터 꼼꼼히 기록</li>
          </ul>

          <h3>4단계: 성과 평가 및 확산</h3>
          <ul>
            <li>파일럿 성과를 정량적으로 측정 (시간 절감, 비용 절감, 품질 향상)</li>
            <li>성공 사례를 전사에 공유</li>
            <li>우수 사례를 다른 부서에 확대 적용</li>
            <li>실패한 프로젝트도 교훈으로 공유</li>
          </ul>

          <h3>5단계: 조직 내재화</h3>
          <ul>
            <li>AI 활용을 일상 업무의 표준 프로세스로 정착</li>
            <li>AI 가이드라인/정책 수립 (데이터 보안, 윤리 기준)</li>
            <li>정기적 AI 교육 프로그램 운영</li>
            <li>AI 성과 관리 체계 구축 (측정 → 개선 → 확대 사이클)</li>
          </ul>

          <div className="info-box">
            <h4>개인 수준의 AX</h4>
            <p>조직 차원의 AX 외에 개인도 자신만의 AX를 실천할 수 있습니다.
            일상 업무에서 AI 도구를 적극 활용하고, AI 리터러시를 지속적으로 높여가는 것이
            개인 경쟁력의 핵심입니다.</p>
          </div>

          <div className="warning-box">
            <h4>주의: AX 실패 원인 Top 5</h4>
            <p>① 명확한 비즈니스 목표 없이 기술 도입<br />
            ② 데이터 품질 문제 방치<br />
            ③ 경영진의 관심 부족<br />
            ④ 직원 저항에 대한 변화 관리 실패<br />
            ⑤ 처음부터 너무 큰 프로젝트 시작</p>
          </div>
        </>
      ),
      contentEn: (
        <>
          <h3>5 Steps to AX Execution</h3>
          <p>
            A practical step-by-step guide for executing AX in organizations.
            This framework applies regardless of scale.
          </p>

          <h3>Step 1: Assessment</h3>
          <ul>
            <li>Identify areas where AI can improve current processes</li>
            <li>Data audit: what data exists and its quality</li>
            <li>Assess employee AI capability levels</li>
            <li>Benchmark competitor/industry AI adoption</li>
          </ul>

          <h3>Step 2: Select Pilot Projects</h3>
          <ul>
            <li>High impact + Low difficulty = Quick Win projects</li>
            <li>Set measurable KPIs</li>
            <li>Choose projects with 3-6 month results</li>
          </ul>

          <h3>Step 3: Execute Pilot</h3>
          <ul>
            <li>Execute quickly with small teams</li>
            <li>Leverage existing tools: ChatGPT, Copilot SaaS first</li>
            <li>Weekly feedback loops: check results → iterate</li>
          </ul>

          <h3>Step 4: Evaluate and Scale</h3>
          <ul>
            <li>Measure pilot results quantitatively</li>
            <li>Share success stories company-wide</li>
            <li>Expand best practices to other departments</li>
          </ul>

          <h3>Step 5: Institutionalize</h3>
          <ul>
            <li>Establish AI as standard business process</li>
            <li>Create AI guidelines/policies</li>
            <li>Run regular AI training programs</li>
          </ul>

          <div className="warning-box">
            <h4>Top 5 AX Failure Causes</h4>
            <p>① Adopting tech without clear business goals<br />
            ② Neglecting data quality issues<br />
            ③ Lack of executive commitment<br />
            ④ Failed change management for employee resistance<br />
            ⑤ Starting with overly ambitious projects</p>
          </div>
        </>
      )
    }
  };

  const currentTopic = (topic as AXTopic) || 'what-is-ax';
  const content = topics[currentTopic] || topics['what-is-ax'];

  const subNavItems = [
    { path: '/ax/what-is-ax', labelKo: 'AX 개요', labelEn: 'What is AX' },
    { path: '/ax/strategy', labelKo: 'AX 전략 수립', labelEn: 'AX Strategy' },
    { path: '/ax/cases', labelKo: '산업별 AX 사례', labelEn: 'Industry Cases' },
    { path: '/ax/guide', labelKo: 'AX 실행 가이드', labelEn: 'AX Guide' }
  ];

  return (
    <>
      <SEOHead
        title={`${language === 'ko' ? content.titleKo : content.titleEn} | Basic AI`}
        description={`AX - ${content.titleKo}`}
      />

      <section className="page-header">
        <div className="container">
          <h2>AX (AI Transformation)</h2>
          <p>{language === 'ko' ? 'AI 트랜스포메이션 전략과 실행을 학습합니다' : 'Learn AI Transformation strategy and execution'}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="content-layout">
            <nav className="side-nav">
              <div className="side-nav-title">AX (AI Transformation)</div>
              {subNavItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`/ax/${currentTopic}` === item.path ? 'active' : ''}
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

export default AXPage;
