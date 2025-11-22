import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Predictions from './components/Predictions';
import StatsChart from './components/StatsChart';
import AiTools from './components/AiTools';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-dark-bg text-white font-sans selection:bg-med-blue selection:text-white">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        <Hero />
        <About />
        <StatsChart />
        <Predictions />
        <AiTools />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;