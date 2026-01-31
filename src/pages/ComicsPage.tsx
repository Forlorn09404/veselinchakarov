import { motion } from 'framer-motion';
import { FantasyHeader } from '../components/FantasyHeader';
import { FantasyFooter } from '../components/FantasyFooter';
import { HeroSection } from '../components/HeroSection';
import { GalleryGrid } from '../components/GalleryGrid';
import { useLanguage } from '../contexts/LanguageContext';
import moonlake from '../assets/comics/katana_pirates_moon_lake.jpg';
import bluetop from '../assets/comics/katana_sorcerer_bluetop.jpg';
import battle from '../assets/comics/katana_battle_for_valokaan.jpg';
import comic1 from '../assets/comics/36283378_1833664943358477_2251773863492845568_n-1.jpg';
import comic2 from '../assets/comics/51dd0141-1703-4e63-b379-1b287f051edb500x375-1.jpg';
import comic3 from '../assets/comics/Untitled-5-e1582721796761.jpg';
import comic4 from '../assets/comics/Untitled-6-1-e1582721764316.jpg';
import comic5 from '../assets/comics/Untitled-7-1-e1582721754889.jpg';
import comic6 from '../assets/comics/Untitled-7-2-e1582721735244.jpg';
import comic7 from '../assets/comics/Untitled-9-1-e1582721743819.jpg';
import comic8 from '../assets/comics/Untitled4-e1582721776288.jpg';
import comic9 from '../assets/comics/илюстрации-Веско-Чакъров1-e1582721930774.jpg';
import comic10 from '../assets/comics/илюстрации-Веско-Чакъров12-e1582722102925.jpg';
import comic11 from '../assets/comics/илюстрации-Веско-Чакъров14-e1582722088837.jpg';
import comic12 from '../assets/comics/илюстрации-Веско-Чакъров15-e1582722077915.jpg';
import comic13 from '../assets/comics/илюстрации-Веско-Чакъров18-e1582721964204.jpg';
import comic14 from '../assets/comics/илюстрации-Веско-Чакъров19-e1582721951283.jpg';
import comic15 from '../assets/comics/илюстрации-Веско-Чакъров2-e1582721941157.jpg';
import comic16 from '../assets/comics/илюстрации-Веско-Чакъров3-e1582721920382.jpg';
import comic17 from '../assets/comics/илюстрации-Веско-Чакъров4-e1582721909159.jpg';
import comic18 from '../assets/comics/К3-29-1.jpg';
import comic19 from '../assets/comics/К3-29.jpg';
import comic20 from '../assets/comics/К3-40-1.jpg';
import comic21 from '../assets/comics/К3-40.jpg';
import comic22 from '../assets/comics/комикс-веско-чакъров-1-e1582722242566.jpg';
import comic23 from '../assets/comics/комикс-веско-чакъров-10-e1582722186699.jpg';
import comic24 from '../assets/comics/комикс-веско-чакъров-11-e1582722177235.jpg';
import comic25 from '../assets/comics/комикс-веско-чакъров-13-e1582722170523.jpg';
import comic26 from '../assets/comics/комикс-веско-чакъров-14-e1582722162411.jpg';
import comic27 from '../assets/comics/комикс-веско-чакъров-15-e1582722155799.jpg';
import comic28 from '../assets/comics/комикс-веско-чакъров-16-e1582722148922.jpg';
import comic29 from '../assets/comics/комикс-веско-чакъров-17-e1582722140321.jpg';
import comic30 from '../assets/comics/комикс-веско-чакъров-2-e1582722231199.jpg';
import comic31 from '../assets/comics/комикс-веско-чакъров-3-e1582722224802.jpg';
import comic32 from '../assets/comics/комикс-веско-чакъров-4-e1582722216728.jpg';
import comic33 from '../assets/comics/комикс-веско-чакъров-6-e1582722207566.jpg';
import comic34 from '../assets/comics/комикс-веско-чакъров-8-e1582722199726.jpg';
import comic35 from '../assets/comics/комикс-веско-чакъров-9-e1582722192751.jpg';

export function ComicsPage() {
  const {
    t,
    language
  } = useLanguage();
  const getTitle = (enTitle: string) => {
    if (language === 'bg') {
      return t.artwork.comics[enTitle as keyof typeof t.artwork.comics] || enTitle;
    }
    return enTitle;
  };
  const comics = [{
    id: 1,
    title: getTitle('KATANA: The Battle for Valokaan'),
    year: '2023',
    image: battle
  }, {
    id: 2,
    title: getTitle('KATANA: The Sorcerer of Bluetop'),
    year: '2021',
    image: bluetop
  }, {
    id: 3,
    title: getTitle('KATANA: The Pirates of Moon Lake'),
    year: '2021',
    image: moonlake
  }, {
    id: 4,
    title: '',
    year: '',
    image: comic1
  }, {
    id: 5,
    title: '',
    year: '',
    image: comic2
  }, {
    id: 6,
    title: '',
    year: '',
    image: comic3
  }, {
    id: 7,
    title: '',
    year: '',
    image: comic4
  }, {
    id: 8,
    title: '',
    year: '',
    image: comic5
  }, {
    id: 9,
    title: '',
    year: '',
    image: comic6
  }, {
    id: 10,
    title: '',
    year: '',
    image: comic7
  }, {
    id: 11,
    title: '',
    year: '',
    image: comic8
  }, {
    id: 12,
    title: '',
    year: '',
    image: comic9
  }, {
    id: 13,
    title: '',
    year: '',
    image: comic10
  }, {
    id: 14,
    title: '',
    year: '',
    image: comic11
  }, {
    id: 15,
    title: '',
    year: '',
    image: comic12
  }, {
    id: 16,
    title: '',
    year: '',
    image: comic13
  }, {
    id: 17,
    title: '',
    year: '',
    image: comic14
  }, {
    id: 18,
    title: '',
    year: '',
    image: comic15
  }, {
    id: 19,
    title: '',
    year: '',
    image: comic16
  }, {
    id: 20,
    title: '',
    year: '',
    image: comic17
  }, {
    id: 21,
    title: '',
    year: '',
    image: comic18
  }, {
    id: 22,
    title: '',
    year: '',
    image: comic19
  }, {
    id: 23,
    title: '',
    year: '',
    image: comic20
  }, {
    id: 24,
    title: '',
    year: '',
    image: comic21
  }, {
    id: 25,
    title: '',
    year: '',
    image: comic22
  }, {
    id: 26,
    title: '',
    year: '',
    image: comic23
  }, {
    id: 27,
    title: '',
    year: '',
    image: comic24
  }, {
    id: 28,
    title: '',
    year: '',
    image: comic25
  }, {
    id: 29,
    title: '',
    year: '',
    image: comic26
  }, {
    id: 30,
    title: '',
    year: '',
    image: comic27
  }, {
    id: 31,
    title: '',
    year: '',
    image: comic28
  }, {
    id: 32,
    title: '',
    year: '',
    image: comic29
  }, {
    id: 33,
    title: '',
    year: '',
    image: comic30
  }, {
    id: 34,
    title: '',
    year: '',
    image: comic31
  }, {
    id: 35,
    title: '',
    year: '',
    image: comic32
  }, {
    id: 36,
    title: '',
    year: '',
    image: comic33
  }, {
    id: 37,
    title: '',
    year: '',
    image: comic34
  }, {
    id: 38,
    title: '',
    year: '',
    image: comic35
  }];
  return <div className="min-h-screen bg-fantasy-bg text-white selection:bg-fantasy-accent selection:text-fantasy-bg">
      <FantasyHeader />
      <main>
        <HeroSection title={t.pages.comics.title} subtitle={t.pages.comics.subtitle} backgroundImage={battle} fullHeight={false} />
        <GalleryGrid items={comics} aspectRatio="portrait" />
        
        {/* Publications Section */}
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
                {t.pages.comics.publications.title}
              </h2>
              
              <ul className="space-y-4 font-body text-gray-300">
                {t.pages.comics.publications.items.map((item, index) => (
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
                      {item.links && item.links.map((link, linkIndex) => (
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
                      {item.links && '.'}
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