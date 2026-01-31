import React from 'react';
import { FantasyHeader } from '../components/FantasyHeader';
import { HeroSection } from '../components/HeroSection';
import { BioSection } from '../components/BioSection';
import { IllustrationsList } from '../components/IllustrationsList';
import { FantasyFooter } from '../components/FantasyFooter';
export function AboutPage() {
  return <div className="min-h-screen bg-fantasy-bg text-white selection:bg-fantasy-accent selection:text-fantasy-bg">
      <FantasyHeader />

      <main>
        <HeroSection />
        <BioSection />
        <IllustrationsList />
      </main>

      <FantasyFooter />
    </div>;
}