import React from 'react';
import { heroData } from '../data/mock';
import { Button } from './ui/button';
import { ChevronDown, Sparkles } from 'lucide-react';

const Hero = () => {
  const scrollToContent = () => {
    document.getElementById('introduction')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#FDF8F3]">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[#E8D4C4] blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-[#F5E6D8] blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#FAF0E6] blur-3xl" />
      </div>

      {/* Floating soft shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[15%] left-[10%] w-16 h-16 rounded-full bg-[#D4A574]/20 animate-float" style={{ animationDelay: '0s' }} />
        <div className="absolute top-[25%] right-[15%] w-24 h-24 rounded-full bg-[#C9956C]/15 animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-[30%] left-[20%] w-20 h-20 rounded-full bg-[#E8D4C4]/25 animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-[20%] right-[25%] w-12 h-12 rounded-full bg-[#D4A574]/20 animate-float" style={{ animationDelay: '0.5s' }} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-[#D4A574]/20 mb-8 animate-fade-in">
          <Sparkles className="w-4 h-4 text-[#B8845C]" />
          <span className="text-sm font-medium text-[#8B6346] tracking-wide">{heroData.tagline}</span>
        </div>

        {/* Main headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-[#5C3D2E] mb-6 tracking-tight leading-tight animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <span className="block">{heroData.headline.split(' ').slice(0, 1).join(' ')}</span>
          <span className="block font-medium italic text-[#B8845C]">{heroData.headline.split(' ').slice(1).join(' ')}</span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-[#8B6346]/80 max-w-2xl mx-auto mb-12 font-light leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          {heroData.subheadline}
        </p>

        {/* CTA Button */}
        <Button
          onClick={scrollToContent}
          className="bg-[#5C3D2E] hover:bg-[#4A3125] text-white px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg animate-fade-in-up"
          style={{ animationDelay: '0.6s' }}
        >
          {heroData.cta}
        </Button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <button onClick={scrollToContent} className="text-[#B8845C]/60 hover:text-[#B8845C] transition-colors">
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
