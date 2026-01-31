import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Search as SearchIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

interface Artwork {
  id: number;
  title: string;
  year: string;
  medium?: string;
  image: string;
  type: 'painting' | 'illustration' | 'comic';
  route: string;
}

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  paintings: Artwork[];
  illustrations: Artwork[];
  comics: Artwork[];
}

export function SearchModal({ isOpen, onClose, paintings, illustrations, comics }: SearchModalProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const { t, language } = useLanguage();
  const navigate = useNavigate();

  const allItems = useMemo(() => [
    ...paintings.map(item => ({ ...item, type: 'painting' as const, route: '/painting' })),
    ...illustrations.map(item => ({ ...item, type: 'illustration' as const, route: '/illustrations' })),
    ...comics.map(item => ({ ...item, type: 'comic' as const, route: '/comics' }))
  ], [paintings, illustrations, comics]);

  const filteredItems = useMemo(() => {
    if (!searchQuery.trim()) return [];
    
    const query = searchQuery.toLowerCase().trim();
    return allItems.filter(item => {
      const title = item.title.toLowerCase();
      const year = item.year.toLowerCase();
      const medium = item.medium?.toLowerCase() || '';
      return title.includes(query) || year.includes(query) || medium.includes(query);
    });
  }, [searchQuery, allItems]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
      // Focus the input when modal opens
      setTimeout(() => {
        const input = document.querySelector('#search-input') as HTMLInputElement;
        if (input) input.focus();
      }, 100);
    } else {
      document.body.style.overflow = 'unset';
      setSearchQuery('');
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const handleItemClick = (item: Artwork) => {
    onClose();
    navigate(item.route);
    // Scroll to the item after navigation
    setTimeout(() => {
      const element = document.querySelector(`[data-item-id="${item.id}"]`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 300);
  };

  const getTypeLabel = (type: string) => {
    if (language === 'bg') {
      return type === 'painting' ? 'Живопис' : type === 'illustration' ? 'Илюстрация' : 'Комикс';
    }
    return type === 'painting' ? 'Painting' : type === 'illustration' ? 'Illustration' : 'Comic';
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 bg-black/95 flex items-start justify-center p-4 pt-20"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: -20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: -20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-2xl w-full"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute -top-12 right-0 text-fantasy-accent hover:text-fantasy-accentLight transition-colors z-10"
            >
              <X size={32} />
            </button>

            {/* Search Input */}
            <div className="relative mb-6">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-fantasy-accent/60">
                <SearchIcon size={20} />
              </div>
              <input
                id="search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={language === 'bg' ? 'Търсене...' : 'Search...'}
                className="w-full bg-fantasy-bg/50 border-2 border-fantasy-accent/30 rounded-sm px-12 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-fantasy-accent transition-colors font-body text-lg"
              />
            </div>

            {/* Results */}
            <div className="bg-fantasy-bg/50 backdrop-blur-sm border border-fantasy-accent/20 rounded-sm max-h-[60vh] overflow-y-auto">
              {searchQuery.trim() && filteredItems.length === 0 ? (
                <div className="p-8 text-center text-gray-400">
                  {language === 'bg' ? 'Няма резултати' : 'No results found'}
                </div>
              ) : searchQuery.trim() ? (
                <div className="p-4 space-y-2">
                  {filteredItems.map((item) => (
                    <motion.div
                      key={`${item.type}-${item.id}`}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      onClick={() => handleItemClick(item)}
                      className="flex items-center gap-4 p-4 bg-fantasy-bg/30 hover:bg-fantasy-accent/10 rounded-sm cursor-pointer transition-colors group border border-transparent hover:border-fantasy-accent/30"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-16 h-16 object-cover rounded-sm"
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-fantasy text-fantasy-accent group-hover:text-fantasy-accentLight transition-colors truncate">
                          {item.title}
                        </h3>
                        <div className="flex items-center gap-3 text-sm text-gray-400 mt-1">
                          <span className="font-fantasy text-xs tracking-wider uppercase">
                            {getTypeLabel(item.type)}
                          </span>
                          {item.year && (
                            <>
                              <span>•</span>
                              <span>{item.year}</span>
                            </>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="p-8 text-center text-gray-400">
                  {language === 'bg' ? 'Започнете да пишете за търсене...' : 'Start typing to search...'}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
