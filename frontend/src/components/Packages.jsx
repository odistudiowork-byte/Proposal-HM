import React from 'react';
import { packagesData } from '../data/mock';
import { Check, Star, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardFooter } from './ui/card';
import { Badge } from './ui/badge';

const Packages = () => {
  return (
    <section id="packages" className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-[#B8845C] tracking-widest uppercase mb-4 block">05</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#5C3D2E] mb-4">Package Options & Pricing</h2>
          <p className="text-lg text-[#8B6346]/70 max-w-2xl mx-auto">Choose the experience level that matches your vision</p>
        </div>

        {/* Packages grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {packagesData.map((pkg) => (
            <Card
              key={pkg.id}
              className={`relative rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-xl ${
                pkg.popular
                  ? 'bg-[#5C3D2E] text-white border-0 scale-105 shadow-2xl'
                  : 'bg-white border-[#E8D4C4]/50 hover:border-[#D4A574]/50'
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-6 right-6">
                  <Badge className="bg-[#D4A574] text-white border-0 px-3 py-1">
                    <Star className="w-3 h-3 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}

              <CardHeader className="pt-8 pb-0 px-8">
                <span className={`text-xs tracking-widest uppercase mb-2 block ${pkg.popular ? 'text-[#D4A574]' : 'text-[#B8845C]'}`}>
                  Package {pkg.id}
                </span>
                <h3 className={`text-xl md:text-2xl font-medium mb-4 ${pkg.popular ? 'text-white' : 'text-[#5C3D2E]'}`}>
                  {pkg.name}
                </h3>
                <div className={`text-4xl md:text-5xl font-light ${pkg.popular ? 'text-white' : 'text-[#5C3D2E]'}`}>
                  {pkg.price}
                </div>
              </CardHeader>

              <CardContent className="px-8 py-8">
                {/* Includes list */}
                <div className="space-y-4 mb-8">
                  {pkg.includes.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        pkg.popular ? 'bg-[#D4A574]/20' : 'bg-[#FDF8F3]'
                      }`}>
                        <Check className={`w-3 h-3 ${pkg.popular ? 'text-[#D4A574]' : 'text-[#B8845C]'}`} />
                      </div>
                      <span className={`text-sm ${pkg.popular ? 'text-[#E8D4C4]' : 'text-[#6B5344]'}`}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Impact */}
                <div className={`p-4 rounded-xl ${pkg.popular ? 'bg-[#6B5344]' : 'bg-[#FDF8F3]'}`}>
                  <span className={`text-xs tracking-widest uppercase mb-2 block ${pkg.popular ? 'text-[#D4A574]' : 'text-[#B8845C]'}`}>
                    Impact
                  </span>
                  <p className={`text-sm ${pkg.popular ? 'text-[#E8D4C4]' : 'text-[#5C3D2E]'}`}>
                    {pkg.impact}
                  </p>
                </div>
              </CardContent>

              <CardFooter className="px-8 pb-8">
                <Button
                  className={`w-full py-6 rounded-xl transition-all duration-300 ${
                    pkg.popular
                      ? 'bg-white text-[#5C3D2E] hover:bg-[#FDF8F3]'
                      : 'bg-[#5C3D2E] text-white hover:bg-[#4A3125]'
                  }`}
                >
                  Select Package
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
