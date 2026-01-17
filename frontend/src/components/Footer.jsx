import React from 'react';
import { footerData } from '../data/mock';
import { Sparkles } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 bg-[#FDF8F3] border-t border-[#E8D4C4]/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#5C3D2E] flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-[#D4A574]" />
            </div>
            <div>
              <span className="text-lg font-medium text-[#5C3D2E] block">{footerData.brand}</span>
              <span className="text-sm text-[#8B6346]/70">{footerData.tagline}</span>
            </div>
          </div>

          {/* Copyright */}
          <p className="text-sm text-[#8B6346]/70">
            {footerData.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
