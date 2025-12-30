import React from 'react';
import { motion } from 'framer-motion';

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  return (
    <>
      {/* 
        This is the actual page content.
        We apply a subtle scale/fade effect to it during transition 
        to add depth.
      */}
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -20, scale: 0.98 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="w-full h-full"
      >
        {children}
      </motion.div>

      {/* 
        The "Curtain" Slide Effect.
        
        1. On Exit (Navigating AWAY):
           A black div slides UP from bottom (y:100%) to cover the screen (y:0%).
           
        2. On Enter (Navigating TO):
           A black div starts covering the screen (y:0%) and slides UP (y:-100%) to reveal new content.
      */}

      {/* The Enter Curtain (Slides UP and AWAY) */}
      <motion.div
        className="fixed inset-0 z-[100] bg-black pointer-events-none"
        initial={{ y: "0%" }}
        animate={{ y: "-100%" }}
        exit={{ y: "-100%" }} // Stays out of the way on exit
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* The Exit Curtain (Slides UP and COVERS) */}
      <motion.div
        className="fixed inset-0 z-[100] bg-black pointer-events-none"
        initial={{ y: "100%" }}
        animate={{ y: "100%" }} // Normally hidden below
        exit={{ y: "0%" }} // Slides up to cover
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      />
    </>
  );
};

export default PageTransition;