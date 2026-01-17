import React, { useState } from 'react';
import { experiencesData } from '../data/mock';
import { Camera, Box, MapPin, ChevronRight, Lightbulb, StickyNote, Thermometer, HelpCircle } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const Experiences = () => {
  const [activeExperience, setActiveExperience] = useState(1);

  const experienceIcons = {
    1: Camera,
    2: Box,
    3: MapPin
  };

  return (
    <section id="experiences" className="py-24 md:py-32 bg-[#FDF8F3]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-16">
          <span className="text-sm font-medium text-[#B8845C] tracking-widest uppercase mb-4 block">04</span>
          <h2 className="text-3xl md:text-4xl font-light text-[#5C3D2E] mb-4">Experience Overview</h2>
          <p className="text-lg text-[#8B6346]/70 max-w-2xl">Three distinct installations designed to create memorable moments</p>
        </div>

        {/* Experience tabs */}
        <div className="flex flex-wrap gap-3 mb-12">
          {experiencesData.map((exp) => {
            const Icon = experienceIcons[exp.id];
            return (
              <button
                key={exp.id}
                onClick={() => setActiveExperience(exp.id)}
                className={`flex items-center gap-3 px-6 py-4 rounded-2xl transition-all duration-300 ${
                  activeExperience === exp.id
                    ? 'bg-[#5C3D2E] text-white shadow-lg'
                    : 'bg-white text-[#5C3D2E] hover:bg-[#E8D4C4]/50 border border-[#E8D4C4]/50'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{exp.title}</span>
              </button>
            );
          })}
        </div>

        {/* Experience content */}
        {experiencesData.map((exp) => (
          <div
            key={exp.id}
            className={`transition-all duration-500 ${activeExperience === exp.id ? 'opacity-100 block' : 'opacity-0 hidden'}`}
          >
            {/* Experience 1: First Bite Booth */}
            {exp.id === 1 && (
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Main card */}
                <Card className="bg-white border-0 shadow-sm rounded-3xl overflow-hidden">
                  <CardContent className="p-8 md:p-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-full bg-[#FDF8F3] flex items-center justify-center">
                        <Camera className="w-5 h-5 text-[#B8845C]" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-medium text-[#5C3D2E]">{exp.title}</h3>
                        <span className="text-sm text-[#B8845C]">{exp.subtitle}</span>
                      </div>
                    </div>
                    <p className="text-[#6B5344] text-lg leading-relaxed mb-8">{exp.description}</p>
                    
                    {/* Design Language */}
                    <div className="mb-8">
                      <h4 className="text-sm font-medium text-[#B8845C] tracking-widest uppercase mb-4">Design Language</h4>
                      <div className="space-y-3">
                        {exp.designLanguage.map((item, idx) => (
                          <div key={idx} className="flex items-center gap-3 text-[#6B5344]">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#D4A574]" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Inside/Outside cards */}
                <div className="space-y-6">
                  <Card className="bg-[#5C3D2E] border-0 rounded-3xl overflow-hidden">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <Lightbulb className="w-5 h-5 text-[#D4A574]" />
                        <h4 className="text-lg font-medium text-white">{exp.inside.title}</h4>
                      </div>
                      <div className="bg-[#6B5344] rounded-2xl p-6 mb-4">
                        <p className="text-xl text-[#E8D4C4] italic font-light">"{exp.inside.instruction}"</p>
                      </div>
                      <p className="text-[#E8D4C4]/80">{exp.inside.detail}</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-white border-[#E8D4C4]/50 rounded-3xl overflow-hidden">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <StickyNote className="w-5 h-5 text-[#B8845C]" />
                        <h4 className="text-lg font-medium text-[#5C3D2E]">{exp.outside.title}</h4>
                      </div>
                      <p className="text-[#6B5344]">{exp.outside.detail}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}

            {/* Experience 2: The Melt Box */}
            {exp.id === 2 && (
              <div className="grid lg:grid-cols-2 gap-8">
                <Card className="bg-white border-0 shadow-sm rounded-3xl overflow-hidden">
                  <CardContent className="p-8 md:p-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-full bg-[#FDF8F3] flex items-center justify-center">
                        <Box className="w-5 h-5 text-[#B8845C]" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-medium text-[#5C3D2E]">{exp.title}</h3>
                        <span className="text-sm text-[#B8845C]">{exp.subtitle}</span>
                      </div>
                    </div>
                    <p className="text-[#6B5344] text-lg leading-relaxed mb-8">{exp.description}</p>
                    
                    {/* Inside elements */}
                    <div className="mb-8">
                      <h4 className="text-sm font-medium text-[#B8845C] tracking-widest uppercase mb-4">Inside the Cube</h4>
                      <div className="space-y-3">
                        {exp.inside.elements.map((item, idx) => (
                          <div key={idx} className="flex items-center gap-3 text-[#6B5344]">
                            <Thermometer className="w-4 h-4 text-[#D4A574]" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <p className="text-[#6B5344] italic">{exp.experience}</p>
                  </CardContent>
                </Card>

                <div className="space-y-6">
                  {/* Exterior text card */}
                  <Card className="bg-[#5C3D2E] border-0 rounded-3xl overflow-hidden">
                    <CardContent className="p-8 text-center">
                      <span className="text-xs text-[#D4A574] tracking-widest uppercase mb-4 block">Exterior Text</span>
                      <p className="text-3xl md:text-4xl text-white font-light italic">"{exp.exteriorText}"</p>
                    </CardContent>
                  </Card>

                  {/* Question card */}
                  <Card className="bg-white border-[#E8D4C4]/50 rounded-3xl overflow-hidden">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <HelpCircle className="w-5 h-5 text-[#B8845C]" />
                        <span className="text-sm text-[#B8845C] tracking-widest uppercase">The Question</span>
                      </div>
                      <p className="text-xl text-[#5C3D2E] mb-4 italic">"{exp.question}"</p>
                      <p className="text-[#6B5344]">{exp.outcome}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}

            {/* Experience 3: Soft Street Journey */}
            {exp.id === 3 && (
              <div className="grid lg:grid-cols-2 gap-8">
                <Card className="bg-white border-0 shadow-sm rounded-3xl overflow-hidden">
                  <CardContent className="p-8 md:p-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-full bg-[#FDF8F3] flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-[#B8845C]" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-medium text-[#5C3D2E]">{exp.title}</h3>
                        <span className="text-sm text-[#B8845C]">{exp.subtitle}</span>
                      </div>
                    </div>
                    <p className="text-[#6B5344] text-lg leading-relaxed mb-8">{exp.description}</p>
                    
                    {/* Elements */}
                    <div className="mb-8">
                      <h4 className="text-sm font-medium text-[#B8845C] tracking-widest uppercase mb-4">Elements Include</h4>
                      <div className="space-y-3">
                        {exp.elements.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-3 text-[#6B5344]">
                            <ChevronRight className="w-4 h-4 text-[#D4A574] mt-1 flex-shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="p-4 bg-[#FDF8F3] rounded-xl">
                      <p className="text-[#5C3D2E] font-medium">{exp.outcome}</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Prompts card */}
                <Card className="bg-[#5C3D2E] border-0 rounded-3xl overflow-hidden h-fit">
                  <CardContent className="p-8 md:p-10">
                    <span className="text-xs text-[#D4A574] tracking-widest uppercase mb-8 block">Street Prompts</span>
                    <div className="space-y-6">
                      {exp.prompts.map((prompt, idx) => (
                        <div key={idx} className="group">
                          <div className="bg-[#6B5344] rounded-2xl p-6 transform transition-all duration-300 hover:scale-[1.02] hover:bg-[#7B6354]">
                            <p className="text-xl text-white font-light italic">"{prompt}"</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experiences;
