
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import CaseStudy from './pages/CaseStudy';
import AIConsultant from './components/AIConsultant';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work/:id" element={<CaseStudy />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <AIConsultant />
      </Layout>
    </Router>
  );
};

export default App;
