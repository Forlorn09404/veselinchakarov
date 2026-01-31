import { motion } from 'framer-motion';
import { FantasyHeader } from '../components/FantasyHeader';
import { FantasyFooter } from '../components/FantasyFooter';
import { HeroSection } from '../components/HeroSection';
import { GalleryGrid } from '../components/GalleryGrid';
import { useLanguage } from '../contexts/LanguageContext';
import aQuarterOfInfinity from '../assets/illustrations/a_quarter_of_infinity.jpg';
import aQuarterOfInfinity2 from '../assets/illustrations/a_quarter_of_infinity2.jpg';
import aQuarterOfInfinity3 from '../assets/illustrations/a_quarter_of_infinity3.jpg';
import battleOfAdrianople from '../assets/illustrations/battle_of_adrianople.jpg';
import capturedMoment from '../assets/illustrations/captured_moment.jpg';
import katana1 from '../assets/illustrations/katana_1.jpg';
import katana from '../assets/illustrations/katana.jpg';
import kingKaloyan from '../assets/illustrations/king_kaloyan.jpg';
import seuthes from '../assets/illustrations/seuthes.jpg';
import shino from '../assets/illustrations/shino.jpg';
import spartacus from '../assets/illustrations/spartacus.jpg';
import spartacus2 from '../assets/illustrations/spartacus2.jpg';
import thePortOfTyrizis from '../assets/illustrations/the_port_of_tyrizis.jpg';
import theUnfinishedDream from '../assets/illustrations/the_unfinished_dream.jpg';
import thracianPrincess from '../assets/illustrations/thracian_princess.jpg';
import thracianTales from '../assets/illustrations/thracian_tales.jpg';
import thracianWine from '../assets/illustrations/thracian_wine.jpg';

export function IllustrationsPage() {
  const {
    t,
    language
  } = useLanguage();
  const getTitle = (enTitle: string) => {
    if (language === 'bg') {
      return t.artwork.illustrations[enTitle as keyof typeof t.artwork.illustrations] || enTitle;
    }
    return enTitle;
  };
  const illustrations = [
    {
    id: 1,
    title: getTitle('THE SAMURAI CODE'),
    year: '2024',
    medium: 'Taira Shigesuke • Together Academy',
    image: katana
  }, {
    id: 2,
    title: getTitle('KING KALOYAN'),
    year: '2019-2020',
    medium: 'Illustrated Encyclopedia • Petrov M. • Historical Park',
    image: kingKaloyan
  }, {
    id: 3,
    title: getTitle('A Quarter of Infinity'),
    year: '2017',
    image: aQuarterOfInfinity
  }, {
    id: 4,
    title: getTitle('A Quarter of Infinity (Interior)'),
    year: '2017',
    image: aQuarterOfInfinity2
  }, {
    id: 5,
    title: getTitle('The Roman Ambush'),
    year: '2017',
    image: aQuarterOfInfinity3
  }, {
    id: 6,
    title: getTitle('Captured Moment'),
    year: '',
    image: capturedMoment
  },  {
    id: 7,
    title: getTitle('Katana'),
    year: '',
    image: katana1
  }, {
    id: 8,
    title: getTitle('King Seuthes III'),
    year: '2022',
    image: seuthes
  }, {
    id: 9,
    title: getTitle('Shino'),
    year: '',
    image: shino
  }, {
    id: 10,
    title: getTitle('Spartacus in Battle'),
    year: '2018',
    image: spartacus2
  }, {
    id: 11,
    title: getTitle('The Unfinished Dream'),
    year: '',
    image: theUnfinishedDream
  }, {
    id: 12,
    title: getTitle('Thracian Princess'),
    year: '2018',
    image: thracianPrincess
  }, {
    id: 13,
    title: getTitle('Spartacus (The Duel)'),
    year: '2017',
    image: spartacus
  }, {
    id: 14,
    title: getTitle('The Port of Tyrizis'),
    year: '2018',
    image: thePortOfTyrizis
  }, {
    id: 15,
    title: getTitle('Thracian Ritual (Women Crushing Grapes)'),
    year: '2018',
    image: thracianWine
  }, {
    id: 16,
    title: getTitle('Thracian Tales (Man Watching Woman)'),
    year: '2018',
    image: thracianTales
  }, {
    id: 17,
    title: getTitle('Battle of Adrianople (King Kaloyan)'),
    year: '2019',
    image: battleOfAdrianople
  },
];
  return <div className="min-h-screen bg-fantasy-bg text-white selection:bg-fantasy-accent selection:text-fantasy-bg">
      <FantasyHeader />
      <main>
        <HeroSection title={t.pages.illustrations.title} subtitle={t.pages.illustrations.subtitle} backgroundImage= {shino} fullHeight={false} />
        <GalleryGrid items={illustrations} aspectRatio="portrait" />
        
        {/* Illustrated Books Section */}
        <section className="py-20 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-fantasy-parchment/10 backdrop-blur-sm border border-fantasy-accent/20 rounded-sm p-8 md:p-12 hover:border-fantasy-accent/40 transition-colors relative group"
            >
              {/* Ornamental Top Border */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-fantasy-accent/50 to-transparent" />
              
              <h2 className="font-fantasy text-2xl md:text-3xl text-fantasy-accent mb-8">
                {t.pages.illustrations.books.title}
              </h2>
              
              <ul className="space-y-4 font-body text-gray-300">
                {t.pages.illustrations.books.items.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.4 }}
                    className="flex items-start gap-3"
                  >
                    <span className="text-fantasy-accent/60 mt-1">•</span>
                    <span className="leading-relaxed">
                      {item.text}
                      {'links' in item && Array.isArray(item.links) && item.links.map((link: { text: string; url: string }, linkIndex: number) => (
                        <span key={linkIndex}>
                          {linkIndex > 0 && ' , '}
                          <a
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-fantasy-accent hover:text-fantasy-accentLight underline transition-colors"
                          >
                            {link.text}
                          </a>
                        </span>
                      ))}
                      {'links' in item && Array.isArray(item.links) && item.links.length > 0 && '.'}
                      {'textAfter' in item && item.textAfter}
                      {'linksAfter' in item && Array.isArray(item.linksAfter) && item.linksAfter.map((link: { text: string; url: string }, linkIndex: number) => (
                        <span key={linkIndex}>
                          {linkIndex > 0 && ' , '}
                          <a
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-fantasy-accent hover:text-fantasy-accentLight underline transition-colors"
                          >
                            {link.text}
                          </a>
                        </span>
                      ))}
                    </span>
                  </motion.li>
                ))}
              </ul>

              {/* Ornamental Bottom Border */}
              <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-fantasy-accent/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          </div>
        </section>
      </main>
      <FantasyFooter />
    </div>;
}