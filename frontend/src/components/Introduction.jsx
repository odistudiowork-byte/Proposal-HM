import React from 'react';
import { introData } from '../data/mock';
import { Quote } from 'lucide-react';

const Introduction = () => {
  return (
    <section id="introduction" className="py-24 md:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section title */}
        <div className="mb-12">
          <span className="text-sm font-medium text-[#B8845C] tracking-widest uppercase mb-4 block">01</span>
          <h2 className="text-3xl md:text-4xl font-light text-[#5C3D2E]">{introData.title}</h2>
        </div>

        {/* Main content */}
        <div className="space-y-8">
          <p className="text-lg md:text-xl text-[#6B5344] leading-relaxed font-light">
            {introData.content}
          </p>

          {/* Highlight quote */}
          <div className="relative pl-8 py-6 border-l-2 border-[#D4A574]">
            <Quote className="absolute -left-4 top-4 w-8 h-8 text-[#D4A574] bg-white" />
            <p className="text-xl md:text-2xl text-[#5C3D2E] font-medium leading-relaxed italic">
              {introData.highlight}
            </p>
          </div>

          {/* Additional note */}
          <p className="text-base text-[#8B6346]/70">
            This will not be a pop-up or a stall — it will be a <span className="font-medium text-[#5C3D2E]">temporary street installation</span> that people stumble upon, participate in, and talk about.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
