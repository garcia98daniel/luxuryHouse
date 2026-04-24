"use client";

import { useState, useEffect } from 'react';

export type Language = 'es' | 'en';

export const useLanguage = () => {
  const [language, setLanguage] = useState<Language>('es');

  useEffect(() => {
    // Detect browser/system language on client side
    const detectLanguage = () => {
      if (typeof window !== 'undefined') {
        const browserLang = navigator.language || navigator.languages?.[0];
        
        // Check if language is Spanish
        if (browserLang?.startsWith('es')) {
          return 'es';
        }
        
        // For any other language, default to English
        return 'en';
      }
      
      return 'es'; // Default fallback for SSR
    };

    setLanguage(detectLanguage());
  }, []);

  return { language, setLanguage };
};
