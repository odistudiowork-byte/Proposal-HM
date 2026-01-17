import React from 'react';
import { whyOdiData } from '../data/mock';
import { Compass, Brain, Film, Rocket } from 'lucide-react';

const WhyOdi = () => {
  const expertiseIcons = [Compass, Brain, Film, Rocket];

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-16">
          <span className="text-sm font-medium text-[#B8845C] tracking-widest uppercase mb-4 block">07</span>
          <h2 className="text-3xl md:text-4xl font-light text-[#5C3D2E] mb-4">{whyOdiData.title}</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Tagline */}
          <div>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#5C3D2E] leading-tight mb-8">
              {whyOdiData.tagline}
            </h3>
            
            {/* Philosophy */}
            <div className="inline-block">
              <div className="bg-[#5C3D2E] rounded-2xl px-8 py-6">
                <p className="text-xl md:text-2xl text-white font-light italic">
                  "{whyOdiData.philosophy}"
                </p>
              </div>
            </div>
          </div>

          {/* Right - Expertise grid */}
          <div className="grid grid-cols-2 gap-4">
            {whyOdiData.expertise.map((item, index) => {
              const Icon = expertiseIcons[index];
              return (
                <div
                  key={index}
                  className="group bg-[#FDF8F3] rounded-2xl p-6 hover:bg-[#E8D4C4]/30 transition-all duration-300 hover:shadow-md cursor-default"
                >
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-4 group-hover:bg-[#D4A574]/10 transition-colors shadow-sm">
                    <Icon className="w-5 h-5 text-[#B8845C]" />
                  </div>
                  <p className="text-[#5C3D2E] font-medium">{item}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyOdi;
