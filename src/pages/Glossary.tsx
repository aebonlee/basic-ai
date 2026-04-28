import { Link, useParams } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import SEOHead from '../components/SEOHead';
import type { ReactElement } from 'react';

type GlossaryTopic = 'basics' | 'tech' | 'tools' | 'business';

const Glossary = (): ReactElement => {
  const { topic } = useParams<{ topic: string }>();
  const { language } = useLanguage();

  const topics: Record<GlossaryTopic, { titleKo: string; titleEn: string; contentKo: ReactElement; contentEn: ReactElement }> = {
    basics: {
      titleKo: 'AI 기초 용어',
      titleEn: 'AI Basic Terms',
      contentKo: (
        <>
          <h3>A</h3>
          <ul>
            <li><strong>AI (Artificial Intelligence, 인공지능)</strong>: 인간의 학습, 추론, 지각, 언어 이해 능력을 컴퓨터로 구현하는 기술</li>
            <li><strong>AGI (Artificial General Intelligence, 범용 인공지능)</strong>: 인간 수준의 범용적 지능을 갖춘 AI. 아직 실현되지 않음</li>
            <li><strong>ANI (Artificial Narrow Intelligence, 약한 AI)</strong>: 특정 작업만 수행할 수 있는 현재 수준의 AI</li>
            <li><strong>ASI (Artificial Super Intelligence, 초인공지능)</strong>: 인간의 지능을 뛰어넘는 가상의 AI 단계</li>
            <li><strong>Algorithm (알고리즘)</strong>: 문제를 해결하기 위한 단계별 절차. AI에서는 데이터를 처리하고 학습하는 수학적 규칙</li>
          </ul>

          <h3>B ~ D</h3>
          <ul>
            <li><strong>Bias (편향)</strong>: AI 시스템이 특정 그룹에 불공정한 결과를 만드는 현상</li>
            <li><strong>Big Data (빅데이터)</strong>: 기존 도구로 처리하기 어려운 대규모의 다양한 데이터</li>
            <li><strong>Classification (분류)</strong>: 데이터를 미리 정의된 범주로 나누는 작업 (예: 스팸/정상 메일 분류)</li>
            <li><strong>Clustering (군집화)</strong>: 유사한 데이터를 자동으로 그룹으로 묶는 비지도학습 기법</li>
            <li><strong>Computer Vision (컴퓨터 비전)</strong>: 컴퓨터가 이미지와 영상을 이해하는 AI 분야</li>
            <li><strong>Data (데이터)</strong>: AI가 학습하는 원료. 텍스트, 이미지, 음성, 숫자 등 모든 형태의 정보</li>
            <li><strong>Dataset (데이터셋)</strong>: AI 학습에 사용되는 구조화된 데이터 모음</li>
            <li><strong>Deep Learning (딥러닝)</strong>: 여러 층의 신경망을 사용하는 머신러닝 기법. 현대 AI의 핵심 기술</li>
          </ul>

          <h3>F ~ I</h3>
          <ul>
            <li><strong>Feature (특징)</strong>: 모델이 학습에 사용하는 입력 데이터의 개별 속성</li>
            <li><strong>Generative AI (생성형 AI)</strong>: 텍스트, 이미지, 코드 등 새로운 콘텐츠를 생성하는 AI</li>
            <li><strong>GPU (Graphics Processing Unit)</strong>: AI 학습에 필수적인 병렬 연산 장치</li>
            <li><strong>Hallucination (환각)</strong>: AI가 사실이 아닌 정보를 자신있게 생성하는 현상</li>
            <li><strong>Hyperparameter (하이퍼파라미터)</strong>: 모델 학습 전에 사람이 설정하는 값 (학습률, 배치 크기 등)</li>
            <li><strong>Inference (추론)</strong>: 학습된 모델이 새로운 데이터에 대해 예측/생성하는 과정</li>
          </ul>

          <h3>L ~ M</h3>
          <ul>
            <li><strong>Label (라벨)</strong>: 지도학습에서 데이터에 부여된 정답 표시</li>
            <li><strong>Machine Learning (머신러닝)</strong>: 데이터에서 패턴을 자동으로 학습하는 AI의 하위 분야</li>
            <li><strong>Model (모델)</strong>: 데이터를 학습한 결과물. 새로운 입력에 대해 예측/판단 수행</li>
          </ul>

          <h3>N ~ P</h3>
          <ul>
            <li><strong>Natural Language Processing (자연어 처리, NLP)</strong>: 인간의 언어를 이해하고 생성하는 AI 기술</li>
            <li><strong>Neural Network (신경망)</strong>: 인간 뇌의 뉴런을 모방한 수학적 모델. 딥러닝의 기반</li>
            <li><strong>Overfitting (과적합)</strong>: 학습 데이터에 너무 맞춰져서 새로운 데이터에 대한 성능이 떨어지는 현상</li>
            <li><strong>Parameter (매개변수)</strong>: 모델 학습 과정에서 자동으로 조정되는 값 (가중치)</li>
            <li><strong>Pattern Recognition (패턴 인식)</strong>: 데이터에서 규칙성이나 반복되는 구조를 찾아내는 것</li>
            <li><strong>Prediction (예측)</strong>: 학습된 모델이 새로운 데이터에 대해 결과를 추정하는 것</li>
          </ul>

          <h3>R ~ T</h3>
          <ul>
            <li><strong>Reinforcement Learning (강화학습)</strong>: 보상/벌칙을 통해 최적의 행동을 학습하는 방식</li>
            <li><strong>Supervised Learning (지도학습)</strong>: 정답(라벨)이 있는 데이터로 학습하는 방식</li>
            <li><strong>Training (학습/훈련)</strong>: 데이터를 모델에 반복 입력하여 패턴을 학습시키는 과정</li>
            <li><strong>Turing Test (튜링 테스트)</strong>: AI가 인간과 구별할 수 없는 대화를 할 수 있는지 평가하는 시험</li>
          </ul>

          <h3>U ~ W</h3>
          <ul>
            <li><strong>Underfitting (과소적합)</strong>: 모델이 데이터의 패턴을 충분히 학습하지 못한 상태</li>
            <li><strong>Unsupervised Learning (비지도학습)</strong>: 정답 없이 데이터의 패턴을 스스로 발견하는 학습 방식</li>
            <li><strong>Weight (가중치)</strong>: 신경망에서 입력 신호의 중요도를 나타내는 값. 학습을 통해 조정됨</li>
          </ul>
        </>
      ),
      contentEn: (
        <>
          <h3>A</h3>
          <ul>
            <li><strong>AI (Artificial Intelligence)</strong>: Technology that implements human learning, reasoning, and language understanding through computers</li>
            <li><strong>AGI (Artificial General Intelligence)</strong>: AI with human-level general intelligence. Not yet achieved</li>
            <li><strong>ANI (Artificial Narrow Intelligence)</strong>: Current AI that can only perform specific tasks</li>
            <li><strong>Algorithm</strong>: Step-by-step procedure for solving problems. In AI, mathematical rules for processing and learning from data</li>
          </ul>

          <h3>B ~ D</h3>
          <ul>
            <li><strong>Bias</strong>: When AI systems produce unfair results for certain groups</li>
            <li><strong>Big Data</strong>: Massive, diverse datasets too large for traditional tools</li>
            <li><strong>Classification</strong>: Categorizing data into predefined classes</li>
            <li><strong>Computer Vision</strong>: AI field enabling computers to understand images and video</li>
            <li><strong>Deep Learning</strong>: Machine learning using multi-layered neural networks. Core of modern AI</li>
          </ul>

          <h3>F ~ M</h3>
          <ul>
            <li><strong>Generative AI</strong>: AI that creates new content (text, images, code)</li>
            <li><strong>GPU</strong>: Parallel processing hardware essential for AI training</li>
            <li><strong>Hallucination</strong>: AI confidently generating false information</li>
            <li><strong>Inference</strong>: A trained model making predictions on new data</li>
            <li><strong>Machine Learning</strong>: AI subfield that automatically learns patterns from data</li>
            <li><strong>Model</strong>: The trained result that performs predictions on new inputs</li>
          </ul>

          <h3>N ~ W</h3>
          <ul>
            <li><strong>NLP (Natural Language Processing)</strong>: AI technology for understanding and generating human language</li>
            <li><strong>Neural Network</strong>: Mathematical model inspired by brain neurons. Foundation of deep learning</li>
            <li><strong>Overfitting</strong>: Model too closely fitted to training data, poor on new data</li>
            <li><strong>Reinforcement Learning</strong>: Learning optimal actions through rewards/penalties</li>
            <li><strong>Supervised Learning</strong>: Learning from labeled (answer-provided) data</li>
            <li><strong>Training</strong>: Process of repeatedly feeding data to teach a model patterns</li>
            <li><strong>Unsupervised Learning</strong>: Discovering patterns without labeled answers</li>
          </ul>
        </>
      )
    },
    tech: {
      titleKo: 'AI 기술 용어',
      titleEn: 'AI Technical Terms',
      contentKo: (
        <>
          <h3>LLM & Transformer</h3>
          <ul>
            <li><strong>LLM (Large Language Model, 대규모 언어모델)</strong>: 수천억 개의 매개변수로 학습된 언어 모델. GPT, Claude, Gemini 등</li>
            <li><strong>Transformer</strong>: 2017년 발표된 AI 아키텍처. 현대 LLM의 기반. "Attention is All You Need" 논문</li>
            <li><strong>Attention (어텐션)</strong>: 입력 데이터의 어느 부분에 집중할지 결정하는 메커니즘</li>
            <li><strong>Self-Attention</strong>: 입력 시퀀스 내의 모든 위치 간 관계를 동시에 계산하는 기법</li>
            <li><strong>Token (토큰)</strong>: LLM이 처리하는 텍스트의 최소 단위 (단어, 서브워드, 문자)</li>
            <li><strong>Context Window (컨텍스트 윈도우)</strong>: LLM이 한 번에 처리할 수 있는 토큰 수의 한계</li>
            <li><strong>Embedding (임베딩)</strong>: 단어, 문장, 이미지를 수학적 벡터로 변환하는 것</li>
          </ul>

          <h3>학습 기법</h3>
          <ul>
            <li><strong>Pre-training (사전학습)</strong>: 대규모 데이터로 모델의 기본 능력을 학습시키는 단계</li>
            <li><strong>Fine-tuning (파인튜닝)</strong>: 사전학습된 모델을 특정 용도에 맞게 추가 학습시키는 것</li>
            <li><strong>RLHF (Reinforcement Learning from Human Feedback)</strong>: 인간 피드백으로 AI 응답 품질을 개선하는 기법</li>
            <li><strong>Few-shot Learning</strong>: 소수의 예시만으로 새로운 작업을 학습하는 능력</li>
            <li><strong>Zero-shot Learning</strong>: 예시 없이 지시만으로 새로운 작업을 수행하는 능력</li>
            <li><strong>Transfer Learning (전이학습)</strong>: 한 작업에서 학습한 지식을 다른 작업에 적용하는 기법</li>
            <li><strong>Distillation (증류)</strong>: 큰 모델의 지식을 작은 모델로 압축하는 기법</li>
            <li><strong>Quantization (양자화)</strong>: 모델의 연산 정밀도를 낮춰 크기와 속도를 개선하는 기법</li>
          </ul>

          <h3>생성 기술</h3>
          <ul>
            <li><strong>Diffusion Model (확산 모델)</strong>: 노이즈에서 점진적으로 의미 있는 이미지를 생성하는 모델 (Stable Diffusion, DALL-E)</li>
            <li><strong>GAN (Generative Adversarial Network)</strong>: 생성자와 판별자가 경쟁하며 학습하는 생성 모델</li>
            <li><strong>VAE (Variational Autoencoder)</strong>: 데이터를 잠재 공간으로 인코딩/디코딩하는 생성 모델</li>
            <li><strong>Autoregressive (자기회귀)</strong>: 이전 출력을 기반으로 다음 토큰을 순차 생성하는 방식 (GPT 계열)</li>
            <li><strong>Temperature (온도)</strong>: 생성 결과의 무작위성을 조절하는 파라미터. 높을수록 창의적, 낮을수록 일관적</li>
            <li><strong>Top-p / Top-k</strong>: 다음 토큰 선택 시 후보를 제한하는 샘플링 방법</li>
          </ul>

          <h3>멀티모달 & 검색</h3>
          <ul>
            <li><strong>Multimodal (멀티모달)</strong>: 텍스트, 이미지, 음성 등 여러 형태의 데이터를 동시에 처리하는 AI</li>
            <li><strong>RAG (Retrieval-Augmented Generation)</strong>: 외부 문서를 검색하여 LLM 답변의 정확도를 높이는 기법</li>
            <li><strong>Vector Database (벡터 DB)</strong>: 임베딩 벡터를 저장하고 유사도 검색하는 특수 데이터베이스</li>
            <li><strong>Semantic Search (의미 검색)</strong>: 단어 일치가 아닌 의미적 유사성으로 검색하는 기술</li>
          </ul>

          <h3>평가 & 안전</h3>
          <ul>
            <li><strong>Benchmark (벤치마크)</strong>: AI 모델의 성능을 비교 평가하는 표준 테스트 (MMLU, HumanEval 등)</li>
            <li><strong>Guardrails (가드레일)</strong>: AI가 유해한 출력을 생성하지 못하도록 하는 안전 장치</li>
            <li><strong>Red Teaming (레드팀)</strong>: AI의 취약점을 의도적으로 찾아내는 보안 테스트</li>
            <li><strong>Alignment (정렬)</strong>: AI의 행동을 인간의 의도와 가치관에 맞추는 것</li>
          </ul>
        </>
      ),
      contentEn: (
        <>
          <h3>LLM & Transformer</h3>
          <ul>
            <li><strong>LLM (Large Language Model)</strong>: Language models trained with hundreds of billions of parameters</li>
            <li><strong>Transformer</strong>: AI architecture from 2017. Foundation of modern LLMs</li>
            <li><strong>Attention</strong>: Mechanism that determines which parts of input to focus on</li>
            <li><strong>Token</strong>: Minimum text unit processed by LLMs (words, subwords, characters)</li>
            <li><strong>Context Window</strong>: Maximum number of tokens an LLM can process at once</li>
            <li><strong>Embedding</strong>: Converting words, sentences, or images into mathematical vectors</li>
          </ul>

          <h3>Training Techniques</h3>
          <ul>
            <li><strong>Pre-training</strong>: Training basic capabilities with large-scale data</li>
            <li><strong>Fine-tuning</strong>: Additional training for specific use cases</li>
            <li><strong>RLHF</strong>: Improving AI responses through human feedback</li>
            <li><strong>Few-shot / Zero-shot</strong>: Learning new tasks with few or no examples</li>
            <li><strong>Quantization</strong>: Reducing model precision for better size/speed</li>
          </ul>

          <h3>Generation & Retrieval</h3>
          <ul>
            <li><strong>Diffusion Model</strong>: Progressively generating images from noise</li>
            <li><strong>GAN</strong>: Generator and discriminator competing during training</li>
            <li><strong>Temperature</strong>: Parameter controlling output randomness</li>
            <li><strong>RAG</strong>: Retrieving external documents to improve LLM accuracy</li>
            <li><strong>Multimodal</strong>: AI processing text, images, and audio simultaneously</li>
          </ul>

          <h3>Evaluation & Safety</h3>
          <ul>
            <li><strong>Benchmark</strong>: Standard tests for comparing AI model performance</li>
            <li><strong>Guardrails</strong>: Safety mechanisms preventing harmful outputs</li>
            <li><strong>Alignment</strong>: Aligning AI behavior with human intent and values</li>
          </ul>
        </>
      )
    },
    tools: {
      titleKo: 'AI 도구 & 서비스',
      titleEn: 'AI Tools & Services',
      contentKo: (
        <>
          <h3>대화형 AI (챗봇)</h3>
          <ul>
            <li><strong>ChatGPT</strong>: OpenAI의 대화형 AI. GPT-4o 기반. 가장 대중적인 AI 챗봇</li>
            <li><strong>Claude</strong>: Anthropic의 대화형 AI. 안전성과 긴 문맥 처리에 강점</li>
            <li><strong>Gemini</strong>: Google의 AI. 구글 서비스(검색, Gmail, Docs) 통합</li>
            <li><strong>Copilot</strong>: Microsoft의 AI. Microsoft 365(Word, Excel, PPT) 통합</li>
            <li><strong>Perplexity</strong>: AI 기반 검색 엔진. 출처와 함께 답변 제공</li>
          </ul>

          <h3>이미지 생성 AI</h3>
          <ul>
            <li><strong>DALL-E</strong>: OpenAI의 이미지 생성 AI. ChatGPT에 통합</li>
            <li><strong>Midjourney (MJ)</strong>: 예술적 품질이 높은 이미지 생성 AI. Discord 기반</li>
            <li><strong>Stable Diffusion</strong>: Stability AI의 오픈소스 이미지 생성 모델</li>
            <li><strong>Adobe Firefly</strong>: Adobe의 상업용 이미지 생성 AI. Photoshop 통합</li>
            <li><strong>Flux</strong>: 최신 고품질 오픈소스 이미지 생성 모델</li>
          </ul>

          <h3>AI 코딩 도구</h3>
          <ul>
            <li><strong>GitHub Copilot</strong>: GitHub+OpenAI의 AI 코드 자동 완성 도구. VS Code/JetBrains 통합</li>
            <li><strong>Cursor</strong>: AI 네이티브 코드 에디터. 자연어로 코드 수정 가능</li>
            <li><strong>Claude Code</strong>: Anthropic의 CLI 기반 AI 코딩 도구. 터미널에서 직접 코드 작성</li>
            <li><strong>Windsurf</strong>: AI 에이전트 기반 IDE. 전체 프로젝트 맥락 이해</li>
            <li><strong>Replit AI</strong>: 브라우저 기반 AI 코딩 환경. 설치 없이 바로 코딩</li>
            <li><strong>Vibe Coding (바이브 코딩)</strong>: AI에게 자연어로 설명하여 코드를 생성하는 프로그래밍 방식</li>
          </ul>

          <h3>음성 & 영상 AI</h3>
          <ul>
            <li><strong>ElevenLabs</strong>: 가장 자연스러운 AI 음성 합성 서비스. 30+ 언어 지원</li>
            <li><strong>Whisper</strong>: OpenAI의 오픈소스 음성 인식 모델. 99개 언어 지원</li>
            <li><strong>Sora</strong>: OpenAI의 텍스트-영상 생성 AI</li>
            <li><strong>Runway</strong>: 전문 영상 편집 AI. Gen-3 모델</li>
            <li><strong>Kling AI</strong>: 중국 기반 영상 생성 AI</li>
          </ul>

          <h3>AI 개발 플랫폼</h3>
          <ul>
            <li><strong>Hugging Face</strong>: AI 모델 허브. 수십만 개의 오픈소스 모델 공유 플랫폼</li>
            <li><strong>Ollama</strong>: 로컬에서 LLM을 쉽게 실행하는 도구</li>
            <li><strong>LangChain</strong>: LLM 애플리케이션 개발 프레임워크</li>
            <li><strong>OpenAI API</strong>: GPT 모델에 프로그래밍 방식으로 접근하는 인터페이스</li>
            <li><strong>Anthropic API</strong>: Claude 모델을 프로그래밍으로 활용하는 인터페이스</li>
          </ul>

          <h3>프롬프트 관련</h3>
          <ul>
            <li><strong>Prompt (프롬프트)</strong>: AI에게 주는 입력/지시문</li>
            <li><strong>Prompt Engineering (프롬프트 엔지니어링)</strong>: AI에서 원하는 결과를 얻기 위해 프롬프트를 설계하는 기술</li>
            <li><strong>System Prompt (시스템 프롬프트)</strong>: AI의 역할과 행동 규칙을 정의하는 초기 설정 프롬프트</li>
            <li><strong>Chain-of-Thought (CoT)</strong>: AI가 단계별로 사고하여 답을 도출하도록 유도하는 프롬프트 기법</li>
          </ul>
        </>
      ),
      contentEn: (
        <>
          <h3>Conversational AI</h3>
          <ul>
            <li><strong>ChatGPT</strong>: OpenAI's conversational AI based on GPT-4o</li>
            <li><strong>Claude</strong>: Anthropic's AI focused on safety and long context</li>
            <li><strong>Gemini</strong>: Google's AI integrated with Google services</li>
            <li><strong>Copilot</strong>: Microsoft's AI integrated with Microsoft 365</li>
          </ul>

          <h3>Image Generation</h3>
          <ul>
            <li><strong>DALL-E</strong>: OpenAI's image generation AI</li>
            <li><strong>Midjourney</strong>: High artistic quality image generation</li>
            <li><strong>Stable Diffusion</strong>: Open-source image generation model</li>
          </ul>

          <h3>AI Coding Tools</h3>
          <ul>
            <li><strong>GitHub Copilot</strong>: AI code auto-completion for VS Code/JetBrains</li>
            <li><strong>Cursor</strong>: AI-native code editor with natural language editing</li>
            <li><strong>Claude Code</strong>: Anthropic's CLI-based AI coding tool</li>
            <li><strong>Vibe Coding</strong>: Programming by describing to AI in natural language</li>
          </ul>

          <h3>Voice & Video / Platforms</h3>
          <ul>
            <li><strong>ElevenLabs</strong>: Natural AI voice synthesis, 30+ languages</li>
            <li><strong>Whisper</strong>: OpenAI's open-source speech recognition</li>
            <li><strong>Sora</strong>: OpenAI's text-to-video AI</li>
            <li><strong>Hugging Face</strong>: AI model hub with hundreds of thousands of open-source models</li>
            <li><strong>Prompt Engineering</strong>: Designing inputs to get desired AI outputs</li>
          </ul>
        </>
      )
    },
    business: {
      titleKo: '비즈니스 & AX 용어',
      titleEn: 'Business & AX Terms',
      contentKo: (
        <>
          <h3>AI 트랜스포메이션</h3>
          <ul>
            <li><strong>AX (AI Transformation)</strong>: AI를 활용하여 조직의 업무, 의사결정, 비즈니스 모델을 혁신하는 것</li>
            <li><strong>DX (Digital Transformation)</strong>: 디지털 기술을 활용한 조직 전환. AX의 전 단계</li>
            <li><strong>AI Literacy (AI 리터러시)</strong>: AI 도구를 효과적으로 이해하고 활용할 수 있는 능력</li>
            <li><strong>AI Native (AI 네이티브)</strong>: 처음부터 AI를 중심으로 설계된 서비스/조직</li>
            <li><strong>CAIO (Chief AI Officer)</strong>: 조직의 AI 전략을 총괄하는 최고 AI 책임자</li>
          </ul>

          <h3>AI 도입 전략</h3>
          <ul>
            <li><strong>PoC (Proof of Concept)</strong>: AI 도입 전 가능성을 검증하는 소규모 시범 프로젝트</li>
            <li><strong>Pilot (파일럿)</strong>: 본격 도입 전 제한된 범위에서 실행하는 시험 운영</li>
            <li><strong>Quick Win</strong>: 빠르게 성과를 낼 수 있는 쉬운 AI 도입 과제</li>
            <li><strong>Scaling (스케일링)</strong>: 성공한 AI 프로젝트를 조직 전체로 확대하는 것</li>
            <li><strong>ROI (Return on Investment)</strong>: AI 투자 대비 수익률</li>
            <li><strong>TCO (Total Cost of Ownership)</strong>: AI 시스템의 도입~운영~유지보수 총비용</li>
          </ul>

          <h3>데이터 & 인프라</h3>
          <ul>
            <li><strong>Data Governance (데이터 거버넌스)</strong>: 데이터 수집, 저장, 활용에 대한 정책과 관리 체계</li>
            <li><strong>Data Pipeline (데이터 파이프라인)</strong>: 데이터 수집 → 처리 → 저장 → 활용의 자동화 흐름</li>
            <li><strong>Data Lake (데이터 레이크)</strong>: 다양한 형태의 원본 데이터를 저장하는 중앙 저장소</li>
            <li><strong>MLOps</strong>: 머신러닝 모델의 개발 → 배포 → 운영을 자동화하는 방법론</li>
            <li><strong>Edge AI</strong>: 클라우드가 아닌 기기 자체에서 AI를 실행하는 기술</li>
            <li><strong>Cloud AI</strong>: 클라우드 서버에서 AI를 실행하는 방식 (AWS, Azure, GCP)</li>
          </ul>

          <h3>AI 윤리 & 규제</h3>
          <ul>
            <li><strong>XAI (Explainable AI, 설명 가능한 AI)</strong>: AI의 판단 과정을 인간이 이해할 수 있게 설명하는 기술</li>
            <li><strong>AI Ethics (AI 윤리)</strong>: AI 개발/사용에 관한 윤리적 원칙과 가이드라인</li>
            <li><strong>EU AI Act</strong>: EU의 AI 규제법. AI를 위험도별로 분류하여 규제</li>
            <li><strong>GDPR</strong>: EU의 일반 데이터 보호 규정. 개인정보 처리에 대한 엄격한 규제</li>
            <li><strong>Deepfake (딥페이크)</strong>: AI로 사람의 얼굴/음성을 합성하여 만든 가짜 콘텐츠</li>
            <li><strong>Bias Audit (편향 감사)</strong>: AI 시스템의 편향성을 검사하고 측정하는 프로세스</li>
            <li><strong>Human-in-the-Loop (HITL)</strong>: AI 의사결정에 인간의 검토/승인을 포함하는 방식</li>
          </ul>

          <h3>AI 에이전트 & 자동화</h3>
          <ul>
            <li><strong>AI Agent (AI 에이전트)</strong>: 목표를 이해하고 자율적으로 여러 단계를 수행하는 AI 시스템</li>
            <li><strong>Agentic AI</strong>: 에이전트처럼 자율적으로 행동하는 AI의 특성</li>
            <li><strong>Tool Use (도구 사용)</strong>: AI가 외부 도구(API, 검색, 코드 실행)를 활용하는 능력</li>
            <li><strong>MCP (Model Context Protocol)</strong>: AI가 외부 데이터 소스/도구와 상호작용하는 표준 프로토콜</li>
            <li><strong>RPA (Robotic Process Automation)</strong>: 반복적 업무를 소프트웨어로 자동화하는 기술. AI와 결합하면 지능형 자동화</li>
            <li><strong>Workflow Automation</strong>: 업무 프로세스를 AI로 자동화하는 것</li>
          </ul>

          <h3>산업 적용</h3>
          <ul>
            <li><strong>Predictive Maintenance (예측 유지보수)</strong>: AI로 설비 고장을 사전 예측하여 다운타임 감소</li>
            <li><strong>Recommendation System (추천 시스템)</strong>: 사용자 행동 분석으로 맞춤 상품/콘텐츠를 추천하는 AI</li>
            <li><strong>Chatbot (챗봇)</strong>: 자동으로 고객 문의에 응답하는 AI 대화 시스템</li>
            <li><strong>Robo-advisor (로보어드바이저)</strong>: AI 기반 자동 자산관리/투자 서비스</li>
            <li><strong>Computer-Aided Diagnosis (AI 진단)</strong>: AI가 의료 영상을 분석하여 질병을 탐지하는 기술</li>
          </ul>
        </>
      ),
      contentEn: (
        <>
          <h3>AI Transformation</h3>
          <ul>
            <li><strong>AX (AI Transformation)</strong>: Innovating organizational processes and business models with AI</li>
            <li><strong>DX (Digital Transformation)</strong>: Digital technology-driven organizational change. Pre-stage of AX</li>
            <li><strong>AI Literacy</strong>: Ability to effectively understand and use AI tools</li>
            <li><strong>CAIO (Chief AI Officer)</strong>: Executive overseeing organizational AI strategy</li>
          </ul>

          <h3>AI Adoption Strategy</h3>
          <ul>
            <li><strong>PoC (Proof of Concept)</strong>: Small-scale project to verify AI feasibility</li>
            <li><strong>Quick Win</strong>: Easy AI tasks that deliver fast results</li>
            <li><strong>ROI (Return on Investment)</strong>: Revenue relative to AI investment</li>
            <li><strong>MLOps</strong>: Automating ML model development → deployment → operation</li>
          </ul>

          <h3>Ethics & Regulation</h3>
          <ul>
            <li><strong>XAI (Explainable AI)</strong>: Making AI decisions understandable to humans</li>
            <li><strong>EU AI Act</strong>: EU's AI regulation classifying AI by risk level</li>
            <li><strong>GDPR</strong>: EU's data protection regulation</li>
            <li><strong>Human-in-the-Loop</strong>: Including human review in AI decision-making</li>
          </ul>

          <h3>AI Agents & Automation</h3>
          <ul>
            <li><strong>AI Agent</strong>: AI that autonomously performs multi-step tasks</li>
            <li><strong>Tool Use</strong>: AI ability to use external tools (APIs, search, code execution)</li>
            <li><strong>MCP (Model Context Protocol)</strong>: Standard protocol for AI-external tool interaction</li>
            <li><strong>RPA</strong>: Software automation of repetitive tasks. Combined with AI for intelligent automation</li>
          </ul>
        </>
      )
    }
  };

  const currentTopic = (topic as GlossaryTopic) || 'basics';
  const content = topics[currentTopic] || topics.basics;

  const subNavItems = [
    { path: '/glossary/basics', labelKo: 'AI 기초 용어', labelEn: 'Basic Terms' },
    { path: '/glossary/tech', labelKo: 'AI 기술 용어', labelEn: 'Technical' },
    { path: '/glossary/tools', labelKo: 'AI 도구 & 서비스', labelEn: 'Tools & Services' },
    { path: '/glossary/business', labelKo: '비즈니스 & AX', labelEn: 'Business & AX' }
  ];

  return (
    <>
      <SEOHead
        title={`${language === 'ko' ? content.titleKo : content.titleEn} | Basic AI`}
        description="AI 용어사전 - 인공지능 관련 핵심 용어 정리"
      />

      <section className="page-header">
        <div className="container">
          <h2>{language === 'ko' ? '용어사전' : 'Glossary'}</h2>
          <p>{language === 'ko' ? '인공지능 관련 핵심 용어를 체계적으로 정리합니다' : 'A systematic collection of key AI terminology'}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="content-layout">
            <nav className="side-nav">
              <div className="side-nav-title">{language === 'ko' ? '용어사전' : 'Glossary'}</div>
              {subNavItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`/glossary/${currentTopic}` === item.path ? 'active' : ''}
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

export default Glossary;
