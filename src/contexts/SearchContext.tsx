import { createContext, useContext, ReactNode, useEffect, useState } from 'react';
import { useLanguage } from './LanguageContext';
import { paintingsData, illustrationsData, comicsData } from '../data/artworkData';

interface Artwork {
  id: number;
  title: string;
  year: string;
  medium?: string;
  image: string;
  type: 'painting' | 'illustration' | 'comic';
  route: string;
}

interface SearchContextType {
  paintings: Artwork[];
  illustrations: Artwork[];
  comics: Artwork[];
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export function SearchProvider({ children }: { children: ReactNode }) {
  const { t, language } = useLanguage();
  const [paintings, setPaintings] = useState<Artwork[]>([]);
  const [illustrations, setIllustrations] = useState<Artwork[]>([]);
  const [comics, setComics] = useState<Artwork[]>([]);

  useEffect(() => {
    // Get translated titles based on current language
    const getTitle = (enTitle: string, type: 'paintings' | 'illustrations' | 'comics') => {
      if (language === 'bg') {
        const artworkType = t.artwork[type];
        return (artworkType as Record<string, string>)[enTitle] || enTitle;
      }
      return enTitle;
    };

    // Initialize paintings
    setPaintings(
      paintingsData.map((p) => ({
        id: p.id,
        title: getTitle(p.enTitle, 'paintings'),
        year: p.year,
        image: p.image,
        type: 'painting' as const,
        route: '/painting',
      }))
    );

    // Initialize illustrations
    setIllustrations(
      illustrationsData.map((i) => ({
        id: i.id,
        title: getTitle(i.enTitle, 'illustrations'),
        year: i.year,
        medium: i.medium,
        image: i.image,
        type: 'illustration' as const,
        route: '/illustrations',
      }))
    );

    // Initialize comics
    setComics(
      comicsData.map((c) => ({
        id: c.id,
        title: getTitle(c.enTitle, 'comics'),
        year: c.year,
        image: c.image,
        type: 'comic' as const,
        route: '/comics',
      }))
    );
  }, [language, t]);

  return (
    <SearchContext.Provider value={{ paintings, illustrations, comics }}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
}
