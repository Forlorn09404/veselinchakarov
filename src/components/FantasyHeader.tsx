import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
export function FantasyHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const {
    t,
    toggleLanguage
  } = useLanguage();
  const location = useLocation();
  const navLinks = [{
    name: t.nav.about,
    href: '/'
  }, {
    name: t.nav.painting,
    href: '/painting'
  }, {
    name: t.nav.illustrations,
    href: '/illustrations'
  }, {
    name: t.nav.comics,
    href: '/comics'
  }, {
    name: t.nav.blog,
    href: '/blog'
  }, {
    name: t.nav.contact,
    href: '/contact'
  }];
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-fantasy-bg/95 backdrop-blur-md border-b border-fantasy-accent/30 py-2 shadow-[0_4px_30px_rgba(0,0,0,0.5)]' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo / Artist Name */}
          <Link to="/" className="flex flex-col group cursor-pointer">
            <h1 className="font-fantasy text-xl md:text-2xl text-fantasy-accent tracking-wider group-hover:text-fantasy-accentLight transition-colors duration-300">
              ВЕСЕЛИН ЧАКЪРОВ
            </h1>
            <span className="font-fantasy text-sm md:text-base text-gray-300 tracking-[0.2em] group-hover:text-white transition-colors duration-300">
              VESELIN CHAKAROV
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => <Link key={link.href} to={link.href} className={`relative font-fantasy text-sm tracking-widest transition-colors duration-300 py-2 group ${location.pathname === link.href ? 'text-fantasy-accent' : 'text-gray-300 hover:text-fantasy-accent'}`}>
                {link.name}
                <span className={`absolute bottom-0 left-0 h-[1px] bg-fantasy-accent transition-all duration-300 ease-out ${location.pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </Link>)}

            {/* Language Toggle */}
            <button onClick={toggleLanguage} className="flex items-center gap-2 px-3 py-1 border border-fantasy-accent/30 rounded-sm text-fantasy-accent hover:bg-fantasy-accent/10 transition-colors font-fantasy text-sm tracking-wider">
              <Globe size={14} />
              {t.nav.languageBtn}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-fantasy-accent hover:text-white transition-colors" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && <motion.div initial={{
        opacity: 0,
        height: 0
      }} animate={{
        opacity: 1,
        height: 'auto'
      }} exit={{
        opacity: 0,
        height: 0
      }} className="md:hidden bg-fantasy-bg/95 backdrop-blur-xl border-b border-fantasy-accent/30 overflow-hidden">
            <nav className="flex flex-col items-center py-8 space-y-6">
              {navLinks.map((link, index) => <Link key={link.href} to={link.href} className={`font-fantasy text-lg tracking-widest transition-colors ${location.pathname === link.href ? 'text-fantasy-accent' : 'text-gray-300 hover:text-white'}`}>
                  {link.name}
                </Link>)}
              <button onClick={toggleLanguage} className="mt-4 px-4 py-2 border border-fantasy-accent/30 rounded-sm text-fantasy-accent hover:bg-fantasy-accent/10 transition-colors font-fantasy tracking-wider">
                {t.nav.languageBtn}
              </button>
            </nav>
          </motion.div>}
      </AnimatePresence>

      <div className={`absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-fantasy-accent/30 to-transparent transition-opacity duration-500 ${isScrolled ? 'opacity-100' : 'opacity-0'}`} />
    </header>;
}