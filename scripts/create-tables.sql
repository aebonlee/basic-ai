-- =====================================================
-- Basic AI (basic-ai.dreamitbiz.com)
-- Supabase 테이블 생성 스크립트
-- 접두사: bai_
-- =====================================================

-- ── 1. 주문 테이블 ──
CREATE TABLE IF NOT EXISTS bai_orders (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  order_number TEXT UNIQUE NOT NULL,
  user_id UUID DEFAULT auth.uid(),
  user_email TEXT NOT NULL,
  user_name TEXT NOT NULL,
  user_phone TEXT NOT NULL DEFAULT '',
  total_amount INTEGER NOT NULL DEFAULT 0,
  payment_method TEXT NOT NULL DEFAULT 'card',
  payment_status TEXT NOT NULL DEFAULT 'pending'
    CHECK (payment_status IN ('pending', 'paid', 'failed', 'cancelled', 'refunded')),
  portone_payment_id TEXT,
  paid_at TIMESTAMPTZ,
  cancelled_at TIMESTAMPTZ,
  cancel_reason TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- ── 2. 주문 상품 테이블 ──
CREATE TABLE IF NOT EXISTS bai_order_items (
  id SERIAL PRIMARY KEY,
  order_id UUID REFERENCES bai_orders(id) ON DELETE CASCADE,
  product_title TEXT NOT NULL,
  quantity INTEGER NOT NULL DEFAULT 1,
  unit_price INTEGER NOT NULL DEFAULT 0,
  subtotal INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- ── 3. 상품 테이블 ──
CREATE TABLE IF NOT EXISTS bai_products (
  id SERIAL PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  category TEXT NOT NULL DEFAULT 'book',
  title TEXT NOT NULL,
  title_en TEXT NOT NULL DEFAULT '',
  description TEXT NOT NULL DEFAULT '',
  description_en TEXT NOT NULL DEFAULT '',
  price INTEGER NOT NULL DEFAULT 0,
  image_url TEXT NOT NULL DEFAULT '',
  is_sold_out BOOLEAN NOT NULL DEFAULT false,
  is_active BOOLEAN NOT NULL DEFAULT true,
  sort_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- ── 4. 댓글 테이블 ──
CREATE TABLE IF NOT EXISTS bai_comments (
  id SERIAL PRIMARY KEY,
  post_id INTEGER NOT NULL,
  post_type TEXT NOT NULL DEFAULT 'page',
  author_id UUID NOT NULL,
  author_name TEXT NOT NULL DEFAULT '',
  content TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- ── 5. 검색 로그 테이블 ──
CREATE TABLE IF NOT EXISTS bai_search_logs (
  id SERIAL PRIMARY KEY,
  query TEXT NOT NULL,
  user_id UUID,
  results_count INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- =====================================================
-- RLS (Row Level Security) 정책
-- =====================================================

-- orders: 자신의 주문만 조회 가능
ALTER TABLE bai_orders ENABLE ROW LEVEL SECURITY;

CREATE POLICY "bai_orders_select_own" ON bai_orders
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "bai_orders_insert_auth" ON bai_orders
  FOR INSERT WITH CHECK (true);

CREATE POLICY "bai_orders_update_own" ON bai_orders
  FOR UPDATE USING (auth.uid() = user_id);

-- order_items: 주문자가 주문 상품 조회 가능
ALTER TABLE bai_order_items ENABLE ROW LEVEL SECURITY;

CREATE POLICY "bai_order_items_select" ON bai_order_items
  FOR SELECT USING (
    EXISTS (SELECT 1 FROM bai_orders WHERE id = bai_order_items.order_id AND user_id = auth.uid())
  );

CREATE POLICY "bai_order_items_insert" ON bai_order_items
  FOR INSERT WITH CHECK (true);

-- products: 누구나 조회 가능
ALTER TABLE bai_products ENABLE ROW LEVEL SECURITY;

CREATE POLICY "bai_products_select_all" ON bai_products
  FOR SELECT USING (true);

-- comments: 누구나 조회, 로그인 사용자 작성, 본인만 삭제
ALTER TABLE bai_comments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "bai_comments_select_all" ON bai_comments
  FOR SELECT USING (true);

CREATE POLICY "bai_comments_insert_auth" ON bai_comments
  FOR INSERT WITH CHECK (auth.uid() IS NOT NULL);

CREATE POLICY "bai_comments_delete_own" ON bai_comments
  FOR DELETE USING (auth.uid() = author_id);

-- search_logs: 누구나 삽입 가능
ALTER TABLE bai_search_logs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "bai_search_logs_insert" ON bai_search_logs
  FOR INSERT WITH CHECK (true);

-- =====================================================
-- 인덱스
-- =====================================================
CREATE INDEX IF NOT EXISTS idx_bai_orders_user ON bai_orders(user_id);
CREATE INDEX IF NOT EXISTS idx_bai_orders_number ON bai_orders(order_number);
CREATE INDEX IF NOT EXISTS idx_bai_order_items_order ON bai_order_items(order_id);
CREATE INDEX IF NOT EXISTS idx_bai_products_category ON bai_products(category);
CREATE INDEX IF NOT EXISTS idx_bai_products_active ON bai_products(is_active);
CREATE INDEX IF NOT EXISTS idx_bai_comments_post ON bai_comments(post_id, post_type);

-- =====================================================
-- 샘플 상품 데이터 (AI 학습 교재)
-- =====================================================
INSERT INTO bai_products (slug, category, title, title_en, description, description_en, price, image_url, sort_order) VALUES
('ai-fundamentals-book', 'book', '인공지능 기초 완전정복', 'AI Fundamentals Complete Guide', 'AI의 기초 개념부터 활용까지 체계적으로 학습하는 입문서', 'A systematic introductory book covering AI basics to applications', 28000, '', 1),
('prompt-engineering-book', 'book', '프롬프트 엔지니어링 실전', 'Practical Prompt Engineering', 'ChatGPT, Claude 등 AI 챗봇을 200% 활용하는 프롬프트 작성법', 'How to write prompts to maximize AI chatbot usage', 25000, '', 2),
('ai-ethics-book', 'book', 'AI 윤리와 사회', 'AI Ethics and Society', 'AI 시대에 반드시 알아야 할 윤리적 이슈와 대응 방안', 'Essential ethical issues and responses for the AI era', 22000, '', 3),
('ai-coding-course', 'course', 'AI 코딩 도구 마스터 강좌', 'AI Coding Tools Master Course', 'GitHub Copilot, Cursor, Claude Code 활용 실전 강좌', 'Practical course on using GitHub Copilot, Cursor, Claude Code', 49000, '', 4),
('generative-ai-course', 'course', '생성형 AI 활용 완벽 가이드', 'Complete Guide to Generative AI', '이미지, 영상, 음성 AI 도구의 종합 활용 가이드', 'Comprehensive guide to image, video, and voice AI tools', 55000, '', 5)
ON CONFLICT (slug) DO NOTHING;

-- =====================================================
-- 완료 메시지
-- =====================================================
-- Basic AI 테이블 생성 완료!
-- 접두사: bai_
-- 테이블: bai_orders, bai_order_items, bai_products, bai_comments, bai_search_logs
