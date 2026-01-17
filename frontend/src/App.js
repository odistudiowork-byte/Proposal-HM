import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import CampaignInsight from './components/CampaignInsight';
import WhyMumbai from './components/WhyMumbai';
import Experiences from './components/Experiences';
import Packages from './components/Packages';
import Scope from './components/Scope';
import WhyOdi from './components/WhyOdi';
import NextSteps from './components/NextSteps';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Introduction />
        <CampaignInsight />
        <WhyMumbai />
        <Experiences />
        <Packages />
        <Scope />
        <WhyOdi />
        <NextSteps />
      </main>
      <Footer />
    </div>
  );
}

export default App;
