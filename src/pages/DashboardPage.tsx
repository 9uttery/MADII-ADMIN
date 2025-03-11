import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import HomePage from './HomePage';
import OtherPage from './OtherPage';

const DashboardPage: React.FC = () => {
  return (
    <div>
      <Header />
      <main style={{ padding: '1rem' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="other" element={<OtherPage />} />
          {/* 추가 페이지는 여기에서 Route로 연결 */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default DashboardPage;