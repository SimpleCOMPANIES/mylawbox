import React, { useState } from 'react';
// Original MyLawBox app saved in MyLawBox.backup.jsx - do not delete!
// import MyLawBox from './MyLawBox';
import Home from './Home';
import Contact from './Contact';
import ServicePage from './ServicePage';
import './App.css';

const SERVICE_PAGES = [
  'fractional-coo',
  'fractional-cfo',
  'bookkeeping',
  'hr-payroll',
  'fractional-cio',
  'fractional-cmo',
  'fractional-caio',
  'tax-strategy',
];

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const navigate = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  // To restore the original app, uncomment MyLawBox and comment out the return below
  // return <MyLawBox />;

  if (currentPage === 'contact') {
    return <Contact onNavigateHome={() => navigate('home')} />;
  }

  if (SERVICE_PAGES.includes(currentPage)) {
    return (
      <ServicePage
        serviceId={currentPage}
        onNavigate={navigate}
        onNavigateContact={() => navigate('contact')}
      />
    );
  }

  return <Home onNavigateContact={() => navigate('contact')} onNavigate={navigate} />;
}

export default App;
