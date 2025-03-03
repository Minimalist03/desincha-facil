
import React from 'react';
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  name: string;
  age: number;
  text: string;
  className?: string;
}

const TestimonialCard = ({ name, age, text, className }: TestimonialCardProps) => {
  return (
    <div 
      className={cn(
        "testimonial-card scroll-reveal",
        className
      )}
    >
      <span className="testimonial-quote">"</span>
      <div className="pt-5 pb-2">
        <p className="text-gray-700 italic relative z-10">{text}</p>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div>
          <p className="font-semibold text-dark-green">{name}, {age} anos</p>
        </div>
        <div className="h-1 w-12 bg-dark-green rounded-full"></div>
      </div>
    </div>
  );
};

export default TestimonialCard;
