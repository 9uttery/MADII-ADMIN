import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={{ backgroundColor: '#f1f1f1', padding: '1rem', textAlign: 'center' }}>
      <p>&copy; {new Date().getFullYear()} 관리자 페이지. All rights reserved.</p>
    </footer>
  );
};

export default Footer;