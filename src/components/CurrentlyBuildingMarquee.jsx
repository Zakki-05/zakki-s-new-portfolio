import React from 'react';

export default function CurrentlyBuildingMarquee() {
  const marqueeText = [
    'PYTHON FULL STACK +',
    'REACT.JS +',
    'DJANGO & REST APIs +',
    'INTERACTION +',
    'DEVELOPMENT +'
  ];

  return (
    <section id="journal" className="py-16 bg-primaryBlack text-primaryText relative overflow-hidden border-t border-white/10">
      
      {/* Horizontal Scrolling Typography Strip */}
      <div className="w-full overflow-hidden bg-black/90 border-y border-white/10 py-8 select-none">
        <div className="flex whitespace-nowrap animate-marquee">
          {marqueeText.concat(marqueeText).concat(marqueeText).map((item, idx) => (
            <div key={idx} className="flex items-center gap-8 px-6">
              <span className="font-condensed text-5xl sm:text-7xl lg:text-8xl font-bold text-primaryText hover:text-goldAccent transition-colors uppercase tracking-wider">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
