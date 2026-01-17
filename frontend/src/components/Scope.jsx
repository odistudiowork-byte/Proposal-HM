import React from 'react';
import { scopeData, deliverablesData } from '../data/mock';
import { Settings, Palette, Hammer, FileCheck, Users, ShieldCheck, Camera, Film, Clock, Sparkles, ImageIcon, Video } from 'lucide-react';

const Scope = () => {
  const scopeIcons = [Sparkles, Palette, Hammer, FileCheck, Users, ShieldCheck, Camera];
  const deliverableIcons = [Film, Clock, ImageIcon, Video, Video];

  return (
    <section className="py-24 md:py-32 bg-[#FDF8F3]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Execution Scope */}
          <div>
            <span className="text-sm font-medium text-[#B8845C] tracking-widest uppercase mb-4 block">06</span>
            <h2 className="text-3xl md:text-4xl font-light text-[#5C3D2E] mb-4">{scopeData.title}</h2>
            <p className="text-lg text-[#8B6346]/70 mb-10">{scopeData.subtitle}</p>

            <div className="space-y-4">
              {scopeData.items.map((item, index) => {
                const Icon = scopeIcons[index];
                return (
                  <div
                    key={index}
                    className="group flex items-center gap-4 p-4 bg-white rounded-xl border border-[#E8D4C4]/30 hover:border-[#D4A574]/50 transition-all duration-300 hover:shadow-sm"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#FDF8F3] flex items-center justify-center group-hover:bg-[#D4A574]/10 transition-colors">
                      <Icon className="w-4 h-4 text-[#B8845C]" />
                    </div>
                    <span className="text-[#5C3D2E]">{item}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Content Deliverables */}
          <div>
            <div className="bg-[#5C3D2E] rounded-3xl p-8 md:p-10 h-full">
              <div className="flex items-center gap-3 mb-8">
                <Settings className="w-5 h-5 text-[#D4A574]" />
                <span className="text-[#E8D4C4] text-sm font-medium tracking-widest uppercase">{deliverablesData.title}</span>
              </div>

              <div className="space-y-6">
                {deliverablesData.items.map((item, index) => {
                  const Icon = deliverableIcons[index];
                  return (
                    <div key={index} className="flex items-start gap-4 group">
                      <div className="w-10 h-10 rounded-lg bg-[#D4A574]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#D4A574]/30 transition-colors">
                        <Icon className="w-4 h-4 text-[#D4A574]" />
                      </div>
                      <div className="pt-2">
                        <span className="text-white">{item}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Note */}
              <div className="mt-10 pt-8 border-t border-[#6B5344]">
                <p className="text-[#E8D4C4]/60 text-sm italic">
                  All content will be edited and ready for social media use across all platforms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Scope;
