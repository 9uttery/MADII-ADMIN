import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <header style={{ backgroundColor: '#333', color: '#fff', padding: '1rem' }}>
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <Link to="/" style={{ color: '#fff', textDecoration: 'none', marginRight: '1rem' }}>
            홈
          </Link>
          <Link to="/other" style={{ color: '#fff', textDecoration: 'none' }}>
            다른 페이지
          </Link>
        </div>
        <button onClick={handleLogout} style={{ backgroundColor: '#555', color: '#fff', border: 'none', padding: '0.5rem 1rem', cursor: 'pointer' }}>
          로그아웃
        </button>
      </nav>
    </header>
  );
};

export default Header;