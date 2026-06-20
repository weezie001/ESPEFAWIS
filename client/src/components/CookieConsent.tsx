import { useEffect, useState } from 'react';
import { Link } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X } from 'lucide-react';

const CONSENT_KEY = 'espefawis_cookie_consent';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(CONSENT_KEY);
      if (!stored) setVisible(true);
    } catch {
      // If storage is unavailable, show the banner but don't block the site.
      setVisible(true);
    }
  }, []);

  const setConsent = (value: 'accepted' | 'declined') => {
    try {
      localStorage.setItem(CONSENT_KEY, value);
    } catch {
      // ignore storage errors
    }
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 60 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          role="dialog"
          aria-live="polite"
          aria-label="Cookie consent"
          className="fixed bottom-0 left-0 right-0 z-[100] p-4"
        >
          <div className="container mx-auto">
            <div className="bg-white border border-gray-200 shadow-2xl rounded-xl p-5 md:p-6 flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
              <div className="flex items-start gap-3 flex-1">
                <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                  <Cookie size={22} className="text-primary" />
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  We use cookies to enhance your browsing experience, analyse site traffic, and improve
                  our services. By clicking "Accept", you consent to our use of cookies. Read our{' '}
                  <Link href="/cookies" className="text-primary font-medium underline underline-offset-2">
                    Cookie Policy
                  </Link>{' '}
                  for details.
                </p>
              </div>

              <div className="flex items-center gap-3 flex-shrink-0">
                <button
                  type="button"
                  onClick={() => setConsent('declined')}
                  className="px-5 py-2.5 text-sm font-semibold text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                >
                  Decline
                </button>
                <button
                  type="button"
                  onClick={() => setConsent('accepted')}
                  className="btn-primary text-sm"
                >
                  Accept
                </button>
                <button
                  type="button"
                  onClick={() => setConsent('declined')}
                  aria-label="Close cookie banner"
                  className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-md transition-colors md:hidden"
                >
                  <X size={18} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
