"use client";

import { useEffect } from 'react';
import { useLanguageContext } from '@/contexts/LanguageContext';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const { language } = useLanguageContext();

  useEffect(() => {
    // Update HTML lang attribute when language changes
    document.documentElement.lang = language;
  }, [language]);

  return <>{children}</>;
}
