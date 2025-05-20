import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const magneticBtnRef = useRef<HTMLAnchorElement | null>(null);
  
  useEffect(() => {
    const btn = magneticBtnRef.current;
    if (!btn) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      const strength = 20;
      btn.style.transform = `translate(${x / strength}px, ${y / strength}px)`;
    };
    
    const handleMouseLeave = () => {
      btn.style.transform = 'translate(0, 0)';
    };
    
    btn.addEventListener('mousemove', handleMouseMove);
    btn.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      btn.removeEventListener('mousemove', handleMouseMove);
      btn.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);
  
  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center relative overflow-hidden pt-20"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background-primary via-background-secondary to-background-primary opacity-60"></div>
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-accent-blue/10 text-accent-blue font-medium text-sm mb-4">
              SEO Copywriter & Content Strategist
            </span>
          </motion.div>
          
          <motion.h1 
            className="heading-xl mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Creating content that 
            <span className="bg-gradient-to-r from-accent-blue to-accent-purple text-transparent bg-clip-text animate-gradient-x"> ranks and converts</span>
          </motion.h1>
          
          <motion.p 
            className="subtitle text-xl mb-10 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            I'm Shama, an SEO copywriter who creates captivating narratives that rank and convert by fusing creativity and data-driven strategy. I transform complex ideas into compelling content that engages readers and drives results.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <a 
              href="#projects" 
              className="btn-primary"
              ref={magneticBtnRef}
            >
              View My Work
              <ArrowRight size={16} />
            </a>
            <a href="#contact" className="btn-secondary">
              Get In Touch
            </a>
          </motion.div>
        </div>
        
        <div className="absolute right-4 md:right-20 top-1/3">
          <motion.div 
            className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-accent-purple/20 blur-xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.6, 0.8, 0.6] 
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut" 
            }}
          ></motion.div>
        </div>
        
        <div className="absolute left-10 md:left-40 bottom-1/4">
          <motion.div 
            className="w-20 h-20 md:w-32 md:h-32 rounded-full bg-accent-blue/20 blur-xl"
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.5, 0.7, 0.5] 
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1 
            }}
          ></motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;