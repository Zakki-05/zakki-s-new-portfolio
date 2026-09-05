import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorVariant, setCursorVariant] = useState('default');
  const [cursorText, setCursorText] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(hover: none) and (pointer: coarse)').matches) {
      return;
    }

    const onMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target.closest('[data-cursor]');
      if (target) {
        const type = target.getAttribute('data-cursor');
        if (type === 'project') {
          setCursorVariant('project');
          setCursorText('VIEW PROJECT →');
        } else if (type === 'cta') {
          setCursorVariant('cta');
          setCursorText('OPEN');
        } else if (type === 'button' || type === 'link') {
          setCursorVariant('hover');
          setCursorText('');
        } else {
          setCursorVariant('default');
          setCursorText('');
        }
      } else {
        setCursorVariant('default');
        setCursorText('');
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  const variants = {
    default: {
      x: mousePosition.x - 5,
      y: mousePosition.y - 5,
      height: 10,
      width: 10,
      backgroundColor: '#B9A36A',
      border: 'none',
      transition: { type: 'spring', damping: 30, stiffness: 450, mass: 0.15 }
    },
    hover: {
      x: mousePosition.x - 18,
      y: mousePosition.y - 18,
      height: 36,
      width: 36,
      backgroundColor: 'rgba(185, 163, 106, 0.15)',
      border: '1.5px solid #B9A36A',
      transition: { type: 'spring', damping: 25, stiffness: 350, mass: 0.2 }
    },
    cta: {
      x: mousePosition.x - 28,
      y: mousePosition.y - 28,
      height: 56,
      width: 56,
      backgroundColor: '#B9A36A',
      border: 'none',
      color: '#050505',
      transition: { type: 'spring', damping: 24, stiffness: 320 }
    },
    project: {
      x: mousePosition.x - 44,
      y: mousePosition.y - 44,
      height: 88,
      width: 88,
      backgroundColor: '#B9A36A',
      border: 'none',
      color: '#050505',
      transition: { type: 'spring', damping: 22, stiffness: 300 }
    }
  };

  return (
    <motion.div
      className="custom-cursor fixed top-0 left-0 rounded-full pointer-events-none z-50 flex items-center justify-center font-mono text-[10px] font-extrabold tracking-widest hidden md:flex text-center px-1"
      variants={variants}
      animate={cursorVariant}
    >
      {(cursorVariant === 'project' || cursorVariant === 'cta') && (
        <span className="uppercase text-primaryBlack font-black tracking-widest">{cursorText}</span>
      )}
    </motion.div>
  );
}
