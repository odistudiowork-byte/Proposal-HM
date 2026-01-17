import React from 'react';
import { insightData } from '../data/mock';
import { Target, Eye, Camera } from 'lucide-react';

const CampaignInsight = () => {
  const goalIcons = [Target, Eye, Camera];

  return (
    <section className="py-24 md:py-32 bg-[#FDF8F3]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-16">
          <span className="text-sm font-medium text-[#B8845C] tracking-widest uppercase mb-4 block">02</span>
          <h2 className="text-3xl md:text-4xl font-light text-[#5C3D2E] mb-4">{insightData.title}</h2>
        </div>

        {/* Core thought card */}
        <div className="relative mb-16">
          <div className="bg-white rounded-3xl p-10 md:p-14 shadow-sm border border-[#E8D4C4]/50">
            <span className="text-xs font-medium text-[#B8845C] tracking-widest uppercase mb-6 block">Core Thought</span>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#5C3D2E] leading-tight">
              "{insightData.coreThought}"
            </h3>
          </div>
        </div>

        {/* Description grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="space-y-6">
            <p className="text-lg text-[#6B5344] leading-relaxed">
              {insightData.description}
            </p>
          </div>
          <div className="space-y-6">
            <div className="p-6 bg-white/60 rounded-2xl border border-[#E8D4C4]/30">
              <p className="text-lg text-[#5C3D2E] leading-relaxed font-medium italic">
                "{insightData.philosophy}"
              </p>
            </div>
          </div>
        </div>

        {/* Goals */}
        <div>
          <h4 className="text-sm font-medium text-[#B8845C] tracking-widest uppercase mb-8">This Campaign is Designed To</h4>
          <div className="grid md:grid-cols-3 gap-6">
            {insightData.goals.map((goal, index) => {
              const Icon = goalIcons[index];
              return (
                <div
                  key={index}
                  className="group p-6 bg-white rounded-2xl border border-[#E8D4C4]/30 hover:border-[#D4A574]/50 transition-all duration-300 hover:shadow-md"
                >
                  <div className="w-12 h-12 rounded-full bg-[#FDF8F3] flex items-center justify-center mb-4 group-hover:bg-[#D4A574]/10 transition-colors">
                    <Icon className="w-5 h-5 text-[#B8845C]" />
                  </div>
                  <p className="text-[#5C3D2E] font-medium">{goal}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampaignInsight;
