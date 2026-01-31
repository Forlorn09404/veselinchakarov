import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
  fullHeight?: boolean;
}
export function HeroSection({
  title,
  subtitle,
  backgroundImage = 'https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?q=80&w=2574&auto=format&fit=crop',
  fullHeight = true
}: HeroSectionProps) {
  const {
    t
  } = useLanguage();
  return <section className={`relative w-full flex items-center justify-center overflow-hidden ${fullHeight ? 'min-h-screen' : 'h-[60vh] min-h-[400px]'}`}>
      {/* Background Image */}
      <div className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed" style={{
      backgroundImage: `url("${backgroundImage}")`,
      filter: 'brightness(0.6) sepia(0.2)'
    }} />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-fantasy-bg/60 via-fantasy-bg/30 to-fantasy-bg" />

      {/* Particle/Dust Effects */}
      <div className="absolute inset-0 z-10 opacity-30 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-fantasy-accent rounded-full animate-pulse shadow-[0_0_10px_#d4af37]" />
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-700 shadow-[0_0_8px_purple]" />
        <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-fantasy-accentLight rounded-full animate-pulse delay-300 shadow-[0_0_12px_white]" />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto mt-16">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 1,
        ease: 'easeOut'
      }} className="mb-6">
          {/* Ornamental Top Flourish */}
          <div className="flex items-center justify-center gap-4 mb-6 opacity-80">
            <div className="h-[1px] w-12 md:w-24 bg-gradient-to-r from-transparent to-fantasy-accent" />
            <div className="w-3 h-3 rotate-45 border border-fantasy-accent bg-fantasy-bg" />
            <div className="h-[1px] w-12 md:w-24 bg-gradient-to-l from-transparent to-fantasy-accent" />
          </div>

          <h1 className="font-fantasy text-4xl md:text-6xl lg:text-7xl text-white mb-4 tracking-wider drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">
            {title ? <span className="block text-fantasy-accent mb-2 text-3xl md:text-5xl lg:text-6xl opacity-90">
                {title}
              </span> : <>
                <span className="block text-fantasy-accent mb-2 text-2xl md:text-4xl lg:text-5xl opacity-90">
                  {t.hero.titlePrefix}
                </span>
                {t.hero.title}
              </>}
          </h1>

          <p className="font-body text-xl md:text-2xl text-gray-200 italic max-w-2xl mx-auto leading-relaxed drop-shadow-md">
            {subtitle || t.hero.subtitle}
          </p>
        </motion.div>

        {fullHeight && <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 0.8,
        duration: 1
      }} className="mt-12">
            <p className="font-fantasy text-sm tracking-[0.3em] text-fantasy-accentLight uppercase mb-8">
              {t.hero.scroll}
            </p>
            <motion.div animate={{
          y: [0, 10, 0]
        }} transition={{
          repeat: Infinity,
          duration: 2,
          ease: 'easeInOut'
        }} className="flex justify-center">
              <ChevronDown className="text-fantasy-accent w-8 h-8 opacity-80" />
            </motion.div>
          </motion.div>}
      </div>
    </section>;
}