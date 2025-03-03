
import React, { useEffect, useState } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-2 bg-white/95 backdrop-blur-md shadow-md' 
          : 'py-3 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center">
          <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-dark-green animate-fade-in leading-tight">
            Nova técnica viral: 3 perguntas e seu inchaço some sem remédios ou academia!
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-gray-600 mt-1 animate-fade-in-fast">
            Desinche em 7 dias com esses chás e exercícios que viralizaram no TikTok!
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
