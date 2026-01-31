import { useState } from 'react';
import { Facebook, Mail, Search } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { SearchModal } from './SearchModal';
import { useSearch } from '../contexts/SearchContext';
export function FantasyFooter() {
  const {
    t
  } = useLanguage();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { paintings, illustrations, comics } = useSearch();
  return <>
      <footer className="relative bg-[#0a0514] pt-16 pb-8 px-4 overflow-hidden">
      {/* Top Border Ornament */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-fantasy-accent/40 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 -mt-4 bg-[#0a0514] border border-fantasy-accent/40 rotate-45 flex items-center justify-center">
        <div className="w-4 h-4 bg-fantasy-accent/20 rotate-45" />
      </div>

      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Social / Contact Links */}
        <div className="flex space-x-8 mb-12">
          {[{
          icon: Facebook,
          label: 'Facebook',
            href: 'https://www.facebook.com/vesselin.chakarov',
            external: true,
            onClick: undefined
        }, {
          icon: Mail,
          label: 'Email',
            href: '/contact',
            external: false,
            onClick: undefined
        }, {
          icon: Search,
          label: 'Search',
            href: '#',
            external: false,
            onClick: () => setIsSearchOpen(true)
          }].map((item, i) => item.onClick ? <button key={i} onClick={item.onClick} className="group relative p-3 text-fantasy-accent/60 hover:text-fantasy-accent transition-colors duration-300" aria-label={item.label}>
                <div className="absolute inset-0 border border-fantasy-accent/20 rotate-45 group-hover:rotate-90 group-hover:border-fantasy-accent/60 transition-all duration-500" />
                <item.icon size={20} />
              </button> : <a key={i} href={item.href} target={item.external ? '_blank' : undefined} rel={item.external ? 'noopener noreferrer' : undefined} className="group relative p-3 text-fantasy-accent/60 hover:text-fantasy-accent transition-colors duration-300" aria-label={item.label}>
              <div className="absolute inset-0 border border-fantasy-accent/20 rotate-45 group-hover:rotate-90 group-hover:border-fantasy-accent/60 transition-all duration-500" />
              <item.icon size={20} />
            </a>)}
        </div>

        {/* Footer Text */}
        <div className="text-center space-y-4">
          <h3 className="font-fantasy text-2xl text-white tracking-widest">
            VESELIN CHAKAROV
          </h3>
          <p className="font-body text-gray-500 italic">{t.footer.role}</p>
          <div className="w-24 h-[1px] bg-fantasy-accent/30 mx-auto my-4" />
          <p className="font-body text-sm text-gray-600">
            &copy; {new Date().getFullYear()} Веселин Чакъров / Veselin Chakarov.{' '}
            {t.footer.rights}.
          </p>
        </div>
      </div>

      {/* Bottom Glow */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-fantasy-accent/20 to-transparent" />
      </footer>
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} paintings={paintings} illustrations={illustrations} comics={comics} />
    </>;
}