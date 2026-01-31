import { motion } from 'framer-motion';
import { Trophy, Award, Star, Medal, Crown, Gem, Palette, Briefcase } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function IllustrationsList() {
  const { t } = useLanguage();
  
  // Helper to map icon names for awards
  const getIcon = (index: number) => {
    const icons = [Trophy, Award, Star, Medal, Crown, Gem];
    return icons[index % icons.length];
  };

  const renderColumn = (items: Array<{ year: string; title: string; url?: string }>, startDelay: number = 0, defaultIcon: typeof Trophy = Trophy) => {
    return items.map((item, index) => {
      const Icon = defaultIcon;
      const content = (
        <div className="flex items-start gap-3">
          <div className="p-1.5 bg-fantasy-accent/10 rounded-full border border-fantasy-accent/30 group-hover:bg-fantasy-accent/20 transition-colors flex-shrink-0 mt-0.5">
            <Icon className="w-4 h-4 text-fantasy-accent" />
          </div>
          <div className="flex-grow min-w-0">
            <span className="font-fantasy text-sm text-fantasy-accent/80 block mb-1">
              {item.year}
            </span>
            <p className="font-body text-sm text-gray-300 leading-relaxed">
              {item.title}
              {item.url && (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 text-fantasy-accent hover:text-fantasy-accentLight underline transition-colors inline-block"
                  onClick={(e) => e.stopPropagation()}
                >
                  →
                </a>
              )}
            </p>
          </div>
        </div>
      );

      return (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: startDelay + index * 0.05, duration: 0.4 }}
          className="group relative mb-4"
        >
          {item.url ? (
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative block p-4 bg-fantasy-bg border border-fantasy-accent/20 rounded-lg hover:border-fantasy-accent/50 transition-colors"
            >
              {content}
            </a>
          ) : (
            <div className="relative p-4 bg-fantasy-bg border border-fantasy-accent/20 rounded-lg hover:border-fantasy-accent/50 transition-colors">
              {content}
            </div>
          )}
        </motion.div>
      );
    });
  };

  return (
    <section className="relative py-20 px-4 md:px-8 bg-fantasy-bg">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <h2 className="font-fantasy text-3xl md:text-5xl text-fantasy-accent mb-4 drop-shadow-[0_2px_10px_rgba(212,175,55,0.3)]">
              {t.illustrationsList.title}
            </h2>
            <div className="h-1 w-full bg-gradient-to-r from-transparent via-fantasy-accent to-transparent opacity-50" />
            <div className="mt-1 h-[1px] w-3/4 mx-auto bg-gradient-to-r from-transparent via-fantasy-accent to-transparent opacity-30" />
          </motion.div>
        </div>

        {/* Three Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Column 1: Awards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3 mb-6 pb-3 border-b border-fantasy-accent/30">
              <Trophy className="w-6 h-6 text-fantasy-accent" />
              <h3 className="font-fantasy text-xl text-fantasy-accent">
                {t.illustrationsList.awards.title}
              </h3>
                    </div>
            {renderColumn(t.illustrationsList.awards.items, 0, Trophy)}
          </motion.div>

          {/* Column 2: Participation in exhibitions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3 mb-6 pb-3 border-b border-fantasy-accent/30">
              <Palette className="w-6 h-6 text-fantasy-accent" />
              <h3 className="font-fantasy text-xl text-fantasy-accent">
                {t.illustrationsList.exhibitions.title}
              </h3>
                  </div>
            {renderColumn(t.illustrationsList.exhibitions.items, 0.2, Palette)}
          </motion.div>

          {/* Column 3: Solo exhibitions and Other projects */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {/* Solo Exhibitions */}
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-fantasy-accent/30">
                <Star className="w-6 h-6 text-fantasy-accent" />
                <h3 className="font-fantasy text-xl text-fantasy-accent">
                  {t.illustrationsList.soloExhibitions.title}
                    </h3>
                      </div>
              {renderColumn(t.illustrationsList.soloExhibitions.items, 0.3, Star)}
                  </div>

            {/* Other Projects */}
            <div className="mt-8">
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-fantasy-accent/30">
                <Briefcase className="w-6 h-6 text-fantasy-accent" />
                <h3 className="font-fantasy text-xl text-fantasy-accent">
                  {t.illustrationsList.otherProjects.title}
                </h3>
                  </div>
              {renderColumn(t.illustrationsList.otherProjects.items, 0.4, Briefcase)}
                </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}