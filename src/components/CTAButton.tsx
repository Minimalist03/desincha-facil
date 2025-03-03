
import React from 'react';
import { cn } from "@/lib/utils";

interface CTAButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  large?: boolean;
}

const CTAButton = ({ children, className, onClick, large = false }: CTAButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "group relative overflow-hidden bg-cta-orange hover:bg-cta-orange-hover text-white font-display font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl",
        large ? "text-lg md:text-xl px-8 py-4" : "px-6 py-3",
        "cta-glow",
        className
      )}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
};

export default CTAButton;
