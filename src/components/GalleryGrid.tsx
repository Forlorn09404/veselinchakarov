import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
interface Artwork {
  id: number;
  title: string;
  year: string;
  medium?: string;
  image: string;
}
interface GalleryGridProps {
  items: Artwork[];
  aspectRatio?: 'square' | 'portrait' | 'landscape';
}
export function GalleryGrid({
  items,
  aspectRatio = 'square'
}: GalleryGridProps) {
  const [selectedImage, setSelectedImage] = useState<Artwork | null>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedImage(null);
      }
    };
    if (selectedImage) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  return <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 py-12">
        {items.map((item, index) => <motion.div key={item.id} data-item-id={item.id} initial={{
      opacity: 0,
      y: 30
    }} whileInView={{
      opacity: 1,
      y: 0
    }} viewport={{
      once: true
    }} transition={{
      delay: index * 0.1,
      duration: 0.6
    }} className="group relative">
          {/* Frame/Border */}
          <div className="absolute -inset-2 bg-fantasy-parchment/20 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Image Container */}
            <div onClick={() => setSelectedImage(item)} className={`relative overflow-hidden rounded-sm shadow-lg border border-fantasy-accent/20 bg-fantasy-bg cursor-pointer ${aspectRatio === 'square' ? 'aspect-square' : aspectRatio === 'portrait' ? 'aspect-[3/4]' : 'aspect-video'}`}>
            <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-fantasy-bg via-fantasy-bg/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <h3 className="font-fantasy text-xl text-fantasy-accent mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                {item.title}
              </h3>
              <div className="flex justify-between items-center text-sm text-gray-300 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                <span>{item.medium}</span>
                <span className="font-fantasy tracking-widest">
                  {item.year}
                </span>
              </div>
            </div>

            {/* Gold Border Effect */}
            <div className="absolute inset-0 border border-fantasy-accent/0 group-hover:border-fantasy-accent/50 transition-colors duration-300 pointer-events-none" />
          </div>
        </motion.div>)}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} exit={{
        opacity: 0
      }} onClick={() => setSelectedImage(null)} className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 cursor-pointer">
            <motion.div initial={{
          scale: 0.8,
          opacity: 0
        }} animate={{
          scale: 1,
          opacity: 1
        }} exit={{
          scale: 0.8,
          opacity: 0
        }} transition={{
          type: 'spring',
          damping: 25,
          stiffness: 300
        }} onClick={(e) => e.stopPropagation()} className="relative max-w-7xl max-h-[90vh] w-full">
              {/* Close Button */}
              <button onClick={() => setSelectedImage(null)} className="absolute -top-12 right-0 text-fantasy-accent hover:text-fantasy-accentLight transition-colors z-10">
                <X size={32} />
              </button>

              {/* Image Container */}
              <div className="relative bg-fantasy-bg rounded-sm border border-fantasy-accent/30 overflow-hidden shadow-2xl">
                <img src={selectedImage.image} alt={selectedImage.title} className="w-full h-auto max-h-[85vh] object-contain" />

                {/* Image Info */}
                <div className="bg-fantasy-bg/95 p-6 border-t border-fantasy-accent/20">
                  <h3 className="font-fantasy text-2xl text-fantasy-accent mb-2">
                    {selectedImage.title}
                  </h3>
                  <div className="flex justify-between items-center text-sm text-gray-300">
                    <span>{selectedImage.medium}</span>
                    <span className="font-fantasy tracking-widest text-lg">
                      {selectedImage.year}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>}
      </AnimatePresence>
    </>;
}