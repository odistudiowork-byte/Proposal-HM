import React from 'react';
import { nextStepsData } from '../data/mock';
import { ArrowRight, CheckCircle2, Calendar, MapPin, FileText, Hammer } from 'lucide-react';
import { Button } from './ui/button';

const NextSteps = () => {
  const stepIcons = [FileText, MapPin, Calendar, Hammer];

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#5C3D2E]">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-[#D4A574] tracking-widest uppercase mb-4 block">08</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-4">{nextStepsData.title}</h2>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 gap-6 mb-16">
          {nextStepsData.steps.map((step, index) => {
            const Icon = stepIcons[index];
            return (
              <div
                key={index}
                className="group flex items-center gap-4 p-6 bg-[#6B5344] rounded-2xl hover:bg-[#7B6354] transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-[#D4A574]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#D4A574]/30 transition-colors">
                  <Icon className="w-4 h-4 text-[#D4A574]" />
                </div>
                <div className="flex-1">
                  <span className="text-xs text-[#D4A574] tracking-widest uppercase mb-1 block">Step {index + 1}</span>
                  <p className="text-white font-medium">{step}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Closing message */}
        <div className="text-center">
          <p className="text-xl md:text-2xl text-[#E8D4C4] font-light mb-10 leading-relaxed">
            {nextStepsData.closing}
          </p>

          <Button
            size="lg"
            className="bg-white text-[#5C3D2E] hover:bg-[#FDF8F3] px-10 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-xl"
          >
            Let's Begin
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NextSteps;
