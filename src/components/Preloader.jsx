import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const duration = 1200; // 1.2s total max
    const intervalTime = 25;
    const steps = duration / intervalTime;
    const increment = 100 / steps;

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsFinished(true);
            setTimeout(onComplete, 350);
          }, 100);
          return 100;
        }
        return next;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-50 bg-primaryBlack text-primaryText flex flex-col justify-between p-8 sm:p-12 font-mono select-none"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold tracking-widest text-goldAccent">ZAKKI.DEV</span>
            <span className="text-[10px] text-mutedText uppercase tracking-widest">LOADING EXPERIENCE</span>
          </div>

          <div className="text-center space-y-3">
            <h1 className="font-headline text-6xl sm:text-8xl font-extrabold tracking-wider text-primaryText">
              ZAKKI.DEV
            </h1>
            <p className="text-xs font-mono text-mutedText uppercase tracking-widest">
              PYTHON FULL STACK & REACT.JS DEVELOPER • PERNAMBUT, TAMIL NADU, INDIA
            </p>
          </div>

          <div className="flex items-end justify-between border-t border-gridBorder pt-6">
            <span className="text-xs text-mutedText uppercase tracking-wider">CREATIVE DEVELOPER PORTFOLIO</span>
            <span className="font-headline text-6xl sm:text-8xl font-black text-goldAccent leading-none">
              {String(Math.floor(progress)).padStart(2, '0')}%
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
