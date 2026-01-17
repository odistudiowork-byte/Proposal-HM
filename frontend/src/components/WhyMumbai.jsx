import React from 'react';
import { whyMumbaiData } from '../data/mock';
import { MapPin, Users, Share2, TrendingUp } from 'lucide-react';

const WhyMumbai = () => {
  const benefitIcons = [TrendingUp, Users, Share2];

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-16">
          <span className="text-sm font-medium text-[#B8845C] tracking-widest uppercase mb-4 block">03</span>
          <h2 className="text-3xl md:text-4xl font-light text-[#5C3D2E] mb-4">{whyMumbaiData.title}</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left column */}
          <div>
            <h3 className="text-2xl md:text-3xl text-[#5C3D2E] font-light mb-8">
              {whyMumbaiData.subtitle}
            </h3>

            {/* Cultural points */}
            <div className="space-y-4 mb-10">
              {whyMumbaiData.points.map((point, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-[#FDF8F3] rounded-xl">
                  <div className="w-2 h-2 rounded-full bg-[#D4A574]" />
                  <span className="text-[#6B5344] font-light text-lg">{point}</span>
                </div>
              ))}
            </div>

            {/* Approach text */}
            <p className="text-lg text-[#6B5344] leading-relaxed">
              {whyMumbaiData.approach}
            </p>
          </div>

          {/* Right column - Benefits */}
          <div>
            <div className="bg-[#5C3D2E] rounded-3xl p-8 md:p-10">
              <div className="flex items-center gap-3 mb-8">
                <MapPin className="w-5 h-5 text-[#D4A574]" />
                <span className="text-[#E8D4C4] text-sm font-medium tracking-widest uppercase">This Approach Ensures</span>
              </div>

              <div className="space-y-6">
                {whyMumbaiData.benefits.map((benefit, index) => {
                  const Icon = benefitIcons[index];
                  return (
                    <div key={index} className="flex items-start gap-4 group">
                      <div className="w-10 h-10 rounded-full bg-[#D4A574]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#D4A574]/30 transition-colors">
                        <Icon className="w-4 h-4 text-[#D4A574]" />
                      </div>
                      <div>
                        <span className="text-white text-lg font-medium">{benefit}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Location tags */}
              <div className="mt-10 pt-8 border-t border-[#6B5344]">
                <span className="text-[#E8D4C4]/60 text-sm mb-4 block">Potential Locations</span>
                <div className="flex flex-wrap gap-2">
                  {['Bandra', 'Kala Ghoda', 'Fort', 'Juhu'].map((location) => (
                    <span key={location} className="px-4 py-2 bg-[#6B5344] text-[#E8D4C4] rounded-full text-sm">
                      {location}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyMumbai;
