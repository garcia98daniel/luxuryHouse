"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Maximize } from 'lucide-react';

interface CarouselImage {
  url: string;
  category: string;
  title: string;
}

interface ImageCarouselProps {
  images: CarouselImage[];
  className?: string;
}

export default function ImageCarousel({ images, className = "" }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  }

  const currentImage = images[currentIndex];
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className={`group relative overflow-hidden rounded-[2rem] shadow-2xl ${className}`}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="min-h-[520px] bg-cover bg-center"
            style={{ backgroundImage: `url('${currentImage.url}')` }}
          >
            <div className="flex h-full items-end p-6">
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="rounded-3xl bg-black/55 p-6 text-white backdrop-blur-md"
              >
                <p className="text-sm uppercase tracking-[0.25em] text-[#dfc894]">{currentImage.category}</p>
                <h3 className="mt-2 text-3xl font-semibold">{currentImage.title}</h3>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Expand / Fullscreen Button */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="absolute right-4 top-4 z-20 rounded-full bg-black/30 p-3 text-white backdrop-blur-md transition hover:bg-black/50 shadow-lg cursor-pointer opacity-0 group-hover:opacity-100 md:opacity-0 md:group-hover:opacity-100 opacity-100" // To be always visible or hover based
          aria-label="View full screen"
        >
          <Maximize size={24} />
        </button>

        {/* Navigation Buttons */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/30 p-4 text-white backdrop-blur-md transition hover:bg-white/40 shadow-lg cursor-pointer opacity-0 group-hover:opacity-100 md:opacity-0 md:group-hover:opacity-100 opacity-100 mix-blend-difference" // Make navigation more visible on white photos
          aria-label="Previous image"
        >
          <ChevronLeft size={32} />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/30 p-4 text-white backdrop-blur-md transition hover:bg-white/40 shadow-lg cursor-pointer opacity-0 group-hover:opacity-100 md:opacity-0 md:group-hover:opacity-100 opacity-100 mix-blend-difference"
          aria-label="Next image"
        >
          <ChevronRight size={32} />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 z-20">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 w-2 rounded-full transition-all ${
                index === currentIndex 
                  ? "w-8 bg-white" 
                  : "bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div 
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-10"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-full h-full flex items-center justify-center max-w-7xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 md:top-0 md:-right-8 text-white hover:text-[#c6a15b] transition-colors z-50 bg-black/50 rounded-full p-2"
                aria-label="Close full screen"
              >
                <svg className="w-8 h-8 md:w-10 md:h-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                </svg>
              </button>

              <img 
                src={currentImage.url} 
                alt={currentImage.title}
                className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
              />

              {/* Title info */}
              <div className="absolute bottom-6 left-0 right-0 text-center pointer-events-none">
                <div className="inline-block bg-black/60 backdrop-blur-md px-6 py-3 rounded-full pointer-events-auto">
                  <p className="text-[#dfc894] text-xs uppercase tracking-widest">{currentImage.category}</p>
                  <p className="text-white text-lg font-medium">{currentImage.title}</p>
                </div>
              </div>

              {/* Modal Navigation */}
              <button
                onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
                className="absolute left-2 md:-left-12 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 md:p-4 text-white backdrop-blur-md transition hover:bg-white/25 shadow-lg cursor-pointer"
                aria-label="Previous image full screen"
              >
                <ChevronLeft size={32} />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); goToNext(); }}
                className="absolute right-2 md:-right-12 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 md:p-4 text-white backdrop-blur-md transition hover:bg-white/25 shadow-lg cursor-pointer"
                aria-label="Next image full screen"
              >
                <ChevronRight size={32} />
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
