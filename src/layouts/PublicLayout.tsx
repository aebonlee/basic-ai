import { lazy, Suspense, type ReactElement } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AuthGuard from '../components/AuthGuard';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import site from '../config/site';

// 페이지 lazy import
const Home = lazy(() => import('../pages/Home'));
const NotFound = lazy(() => import('../pages/NotFound'));

// AI 학습 페이지
const About = lazy(() => import('../pages/About'));
const Fundamentals = lazy(() => import('../pages/Fundamentals'));
const Applications = lazy(() => import('../pages/Applications'));
const Ethics = lazy(() => import('../pages/Ethics'));
const Trends = lazy(() => import('../pages/Trends'));
const AXPage = lazy(() => import('../pages/AXPage'));
const Glossary = lazy(() => import('../pages/Glossary'));

// Auth 페이지 (features.auth로 토글)
const Login = lazy(() => import('../pages/Login'));
const Register = lazy(() => import('../pages/Register'));
const ForgotPassword = lazy(() => import('../pages/ForgotPassword'));
const MyPage = lazy(() => import('../pages/MyPage'));

// 주문 이력 (마이페이지 내)
const OrderHistory = lazy(() => import('../pages/OrderHistory'));

const Loading = (): ReactElement => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
    <div className="loading-spinner"></div>
  </div>
);

const PublicLayout = (): ReactElement => {
  return (
    <>
      <Navbar />
      <main>
        <Suspense fallback={<Loading />}>
          <Routes>
            {/* Home */}
            <Route path="/" element={<Home />} />

            {/* 소개 */}
            <Route path="/about" element={<Navigate to="/about/intro" replace />} />
            <Route path="/about/:topic" element={<About />} />

            {/* AI 기초 */}
            <Route path="/fundamentals" element={<Navigate to="/fundamentals/what-is-ai" replace />} />
            <Route path="/fundamentals/:topic" element={<Fundamentals />} />

            {/* AI 활용 */}
            <Route path="/applications" element={<Navigate to="/applications/chatbot" replace />} />
            <Route path="/applications/:topic" element={<Applications />} />

            {/* AI 윤리 */}
            <Route path="/ethics" element={<Navigate to="/ethics/bias" replace />} />
            <Route path="/ethics/:topic" element={<Ethics />} />

            {/* AI 트렌드 */}
            <Route path="/trends" element={<Navigate to="/trends/llm" replace />} />
            <Route path="/trends/:topic" element={<Trends />} />

            {/* AX */}
            <Route path="/ax" element={<Navigate to="/ax/what-is-ax" replace />} />
            <Route path="/ax/:topic" element={<AXPage />} />

            {/* 용어사전 */}
            <Route path="/glossary" element={<Navigate to="/glossary/basics" replace />} />
            <Route path="/glossary/:topic" element={<Glossary />} />

            {/* Auth */}
            {site.features.auth && (
              <>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/mypage" element={<AuthGuard><MyPage /></AuthGuard>} />
                <Route path="/mypage/orders" element={<AuthGuard><OrderHistory /></AuthGuard>} />
              </>
            )}

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  );
};

export default PublicLayout;
