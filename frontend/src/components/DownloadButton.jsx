import React from 'react';
import { Download } from 'lucide-react';
import { Button } from './ui/button';
import { generateProposalHTML } from '../utils/proposalHTML';

const DownloadButton = () => {
  const handleDownload = () => {
    const htmlContent = generateProposalHTML();
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'ODI-Studios-Hello-Mallows-Proposal.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <Button
      onClick={handleDownload}
      className="fixed bottom-6 right-6 z-50 bg-[#5C3D2E] hover:bg-[#4A3125] text-white px-6 py-6 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-2"
    >
      <Download className="w-5 h-5" />
      <span className="font-medium">Download as HTML</span>
    </Button>
  );
};

export default DownloadButton;
