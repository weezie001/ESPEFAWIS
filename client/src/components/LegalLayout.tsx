import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useSEO } from '@/hooks/useSEO';

interface LegalLayoutProps {
  title: string;
  subtitle?: string;
  lastUpdated: string;
  path: string;
  children: ReactNode;
}

export default function LegalLayout({ title, subtitle, lastUpdated, path, children }: LegalLayoutProps) {
  useSEO({
    title,
    description: subtitle || `${title} for ESPEFAWIS Global Nig Ltd.`,
    path,
  });

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      {/* Hero */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-merriweather font-bold drop-shadow-md"
          >
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl mt-4 text-white/90 font-light"
            >
              {subtitle}
            </motion.p>
          )}
          <p className="text-sm mt-6 text-white/70">Last updated: {lastUpdated}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 flex-1">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto legal-content">{children}</div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
