import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import Veselin from '../assets/Veselin_Chakarov.jpg'
export function BioSection() {
  const {
    t
  } = useLanguage();
  // Helper to split title for styling
  const titleParts = t.bio.title.split(' ');
  const firstWord = titleParts[0];
  const restOfTitle = titleParts.slice(1).join(' ');
  return <section className="relative py-20 px-4 md:px-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-fantasy-bg" />
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-fantasy-bg to-transparent z-10" />

      <div className="max-w-5xl mx-auto relative z-20">
        <motion.div initial={{
        opacity: 0,
        scale: 0.95
      }} whileInView={{
        opacity: 1,
        scale: 1
      }} viewport={{
        once: true,
        margin: '-100px'
      }} transition={{
        duration: 0.8
      }} className="bg-fantasy-parchment text-fantasy-text p-8 md:p-12 rounded-sm shadow-[0_0_50px_rgba(0,0,0,0.5)] relative" style={{
        backgroundImage: `url("https://www.transparenttextures.com/patterns/aged-paper.png"), linear-gradient(to bottom right, #f5e6d3, #e8d5b7)`
      }}>
          {/* Ornamental Corners */}
          <div className="absolute top-4 left-4 w-16 h-16 border-t-2 border-l-2 border-fantasy-text/30 rounded-tl-lg" />
          <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-fantasy-text/30 rounded-tr-lg" />
          <div className="absolute bottom-4 left-4 w-16 h-16 border-b-2 border-l-2 border-fantasy-text/30 rounded-bl-lg" />
          <div className="absolute bottom-4 right-4 w-16 h-16 border-b-2 border-r-2 border-fantasy-text/30 rounded-br-lg" />

          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="font-fantasy text-3xl md:text-4xl text-fantasy-text border-b-2 border-fantasy-text/20 inline-block pb-2 px-8 relative">
              <span className="text-4xl md:text-5xl mr-1">
                {firstWord.charAt(0)}
              </span>
              {firstWord.slice(1)}{' '}
              <span className="text-4xl md:text-5xl ml-1">
                {restOfTitle.charAt(0)}
              </span>
              {restOfTitle.slice(1)}
              <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2 h-2 bg-fantasy-text rotate-45" />
            </h2>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Artist Photo Frame */}
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="relative p-2 bg-fantasy-text/10 rounded-sm rotate-[-2deg] shadow-lg hover:rotate-0 transition-transform duration-500">
                <div className="relative overflow-hidden border-2 border-fantasy-text/40 sepia-[0.3]">
                
                  <img src={Veselin} alt="Veselin Chakarov" className="w-full h-auto object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-500" />
                  {/* Photo Overlay Texture */}
                  <div className="absolute inset-0 bg-yellow-900/10 mix-blend-multiply pointer-events-none" />
                </div>
                {/* Tape effect */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-8 bg-white/40 rotate-1 backdrop-blur-sm shadow-sm" />
              </div>
            </div>

            {/* Bio Text */}
            <div className="w-full md:w-2/3 font-body text-lg md:text-xl leading-relaxed space-y-4 text-justify">
              <p>
                <span className="font-fantasy text-4xl float-left mt-[-6px] text-fantasy-text/80">
                  {t.bio.p1.charAt(0)}
                </span>
                {t.bio.p1.slice(1)}
              </p>
              <p>{t.bio.p2}</p>
              <p className="font-semibold italic text-fantasy-text/90 border-l-4 border-fantasy-accent pl-4 my-6">
                {t.bio.p3}
              </p>
              <p>{t.bio.p4}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>;
}