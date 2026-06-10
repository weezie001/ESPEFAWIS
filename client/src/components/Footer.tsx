import { Link } from 'wouter';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-white font-merriweather font-bold text-lg mb-4">ESPEFAWIS Global Nig Ltd</h3>
            <p className="text-sm text-gray-400 mb-6">
              Bridging the gap between the farm and the wider economy through innovative agro-allied solutions.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/share/1BnzuqFk9r/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-lg hover:bg-primary transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://www.instagram.com/espefawis__global?igsh=MWUyczlwbndzMXU3ag=="
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-lg hover:bg-primary transition-colors"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/why-us" className="text-gray-400 hover:text-white transition-colors">Why Choose Us</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Supply Chain Solutions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Asset Management</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Agricultural Innovation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Consulting Services</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-3 items-start">
                <Mail size={16} className="mt-1 flex-shrink-0 text-accent" />
                <span className="text-gray-400">info@espefawis.com</span>
              </li>
              <li className="flex gap-3 items-start">
                <Phone size={16} className="mt-1 flex-shrink-0 text-accent" />
                <span className="text-gray-400">07037785676</span>
              </li>
              <li className="flex gap-3 items-start">
                <MapPin size={16} className="mt-1 flex-shrink-0 text-accent" />
                <span className="text-gray-400">Nigeria</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; {currentYear} ESPEFAWIS Global Nig Ltd. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
