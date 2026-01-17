import React, { useState, useEffect } from 'react';
import { Menu, X, FileText } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: 'Experiences', id: 'experiences' },
    { label: 'Packages', id: 'packages' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3 group"
          >
            <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
              isScrolled ? 'bg-[#5C3D2E]' : 'bg-[#5C3D2E]/90'
            }`}>
              <FileText className="w-5 h-5 text-[#D4A574]" />
            </div>
            <div className="flex flex-col items-start">
              <span className={`font-medium text-lg tracking-wide transition-colors ${
                isScrolled ? 'text-[#5C3D2E]' : 'text-[#5C3D2E]'
              }`}>
                ODI STUDIOS
              </span>
              <span className="text-xs text-[#B8845C] tracking-wider">PROPOSAL</span>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors hover:text-[#B8845C] ${
                  isScrolled ? 'text-[#5C3D2E]' : 'text-[#5C3D2E]'
                }`}
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection('contact')}
              className={`rounded-full px-6 transition-all duration-300 ${
                isScrolled
                  ? 'bg-[#5C3D2E] text-white hover:bg-[#4A3125]'
                  : 'bg-[#5C3D2E] text-white hover:bg-[#4A3125]'
              }`}
            >
              Get Started
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-[#E8D4C4]/30 transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-[#5C3D2E]" />
            ) : (
              <Menu className="w-6 h-6 text-[#5C3D2E]" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white rounded-2xl shadow-lg border border-[#E8D4C4]/30">
            <nav className="flex flex-col">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="px-6 py-3 text-left text-[#5C3D2E] hover:bg-[#FDF8F3] transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <div className="px-6 pt-3">
                <Button
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-[#5C3D2E] text-white hover:bg-[#4A3125] rounded-full"
                >
                  Get Started
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
