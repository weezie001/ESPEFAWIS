import { useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Link, useLocation } from 'wouter';
import { useTheme } from '@/contexts/ThemeContext';

function ThemeToggle({ className = '' }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      onClick={() => toggleTheme?.()}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`p-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors ${className}`}
    >
      {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const isActive = (href: string) =>
    href === '/' ? location === '/' : location === href || location.startsWith(href + '/');

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Why Us', href: '/why-us' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-neutral-900 border-b border-gray-200 dark:border-white/10 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img src="/logo.png" alt="ESPEFAWIS Global Nig Ltd logo" className="h-11 sm:h-12 w-auto object-contain" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-sm font-medium transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:bg-primary after:transition-all ${
                  isActive(item.href)
                    ? 'text-primary font-semibold after:w-full'
                    : 'text-gray-700 dark:text-gray-300 hover:text-primary after:w-0 hover:after:w-full'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right cluster: theme toggle (before Get Started) + CTA + mobile menu */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link href="/contact" className="btn-primary hidden lg:inline-flex">
              Get Started
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="lg:hidden p-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/10 rounded-lg transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden border-t border-gray-200 dark:border-white/10 py-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  isActive(item.href)
                    ? 'text-primary font-semibold bg-primary/5'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/5'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block px-4 py-2 text-sm font-medium bg-primary text-white rounded-lg hover:bg-opacity-90 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
