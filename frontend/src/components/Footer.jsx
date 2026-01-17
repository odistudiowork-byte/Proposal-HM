import React from 'react';
import { footerData } from '../data/mock';
import { FileText } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-16 bg-white border-t border-[#E8D4C4]/50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Proposal closing */}
        <div className="mb-10">
          <div className="w-16 h-16 rounded-full bg-[#5C3D2E] flex items-center justify-center mx-auto mb-6">
            <FileText className="w-7 h-7 text-[#D4A574]" />
          </div>
          <h3 className="text-2xl font-light text-[#5C3D2E] mb-2">Proposed by</h3>
          <p className="text-3xl font-medium text-[#5C3D2E]">{footerData.brand}</p>
          <p className="text-[#8B6346]/70 mt-2">{footerData.tagline}</p>
        </div>

        {/* Divider */}
        <div className="w-24 h-px bg-[#D4A574]/30 mx-auto mb-8" />

        {/* Contact info */}
        <div className="text-sm text-[#8B6346]/60 space-y-1">
          <p>For inquiries regarding this proposal, please contact ODI STUDIOS</p>
          <p className="mt-4">{footerData.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
