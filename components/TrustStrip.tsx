import React from 'react';
import { ShieldCheck, Star, Users, CheckCircle, Award } from 'lucide-react';

const TrustStrip: React.FC = () => {
  const trustItems = [
    { text: 'Trusted by 4,500+ Locals', icon: Users },
    { text: 'A+ BBB Rating', icon: Star },
    { text: 'Independent Agency', icon: ShieldCheck },
    { text: 'Local to Lake of the Ozarks', icon: CheckCircle },
    { text: 'Over 35 Years Experience', icon: Award },
  ];

  // Duplicate to create seamless loop
  const duplicatedItems = [...trustItems, ...trustItems, ...trustItems, ...trustItems];

  return (
    <div className="bg-brand-navy border-b border-brand-gold/20 py-8 overflow-hidden relative">
      {/* Fade edges for smooth look */}
      <div className="absolute left-0 top-0 bottom-0 w-8 md:w-32 bg-gradient-to-r from-brand-navy to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-8 md:w-32 bg-gradient-to-l from-brand-navy to-transparent z-10 pointer-events-none"></div>
      
      {/* Infinite Scroll Container */}
      <div className="flex overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap items-center">
           {duplicatedItems.map((item, index) => {
             const Icon = item.icon;
             return (
               <div key={index} className="flex items-center gap-3 mx-8 md:mx-12 flex-shrink-0 group">
                 <Icon className="text-brand-gold group-hover:scale-110 transition-transform" size={24} />
                 <span className="text-lg md:text-xl font-bold text-white">{item.text}</span>
               </div>
             );
           })}
        </div>
      </div>
    </div>
  );
};

export default TrustStrip;