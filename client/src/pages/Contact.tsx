import { useState } from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Send, MessageCircle } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useSEO } from '@/hooks/useSEO';

// FormSubmit.co delivers submissions to this inbox (no API key required).
// NOTE: the very first submission triggers a one-time activation email to this
// address — click the link in it once to start receiving messages.
const FORM_ENDPOINT = 'https://formsubmit.co/ajax/emmanuelenang17@gmail.com';

export default function Contact() {
  useSEO({
    title: 'Contact Us',
    description:
      "Get in touch with ESPEFAWIS Global Nig Ltd. Send us a message, call, or chat on WhatsApp to discuss agro-allied solutions, supply chain, and asset management.",
    path: '/contact',
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone || '-',
          company: formData.company || '-',
          subject: formData.subject || '-',
          message: formData.message,
          _subject: `Website enquiry${formData.subject ? `: ${formData.subject}` : ''}`,
          _template: 'table',
        }),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', company: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 8000);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/gallery/24_corporate_partnership_meeting.webp)',
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-6xl font-merriweather font-bold drop-shadow-lg text-white">Get in Touch</h1>
          <p className="text-2xl mt-6 text-white font-light drop-shadow-md">We'd love to hear from you and discuss how we can help</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: Mail,
                title: 'Email',
                content: 'info@espefawis.com',
                link: 'mailto:info@espefawis.com',
                external: false,
              },
              {
                icon: Phone,
                title: 'Phone',
                content: '07037785676',
                link: 'tel:07037785676',
                external: false,
              },
              {
                icon: MessageCircle,
                title: 'WhatsApp',
                content: 'Chat with us',
                link: 'https://wa.me/2347037785676',
                external: true,
              },
              {
                icon: MapPin,
                title: 'Location',
                content: 'Nigeria',
                link: '#',
                external: false,
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <a
                  key={idx}
                  href={item.link}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  className="card-hover bg-white p-8 rounded-lg shadow-sm border border-gray-100 text-center no-underline"
                >
                  <div className="mb-4 inline-block p-4 bg-primary/10 rounded-lg">
                    <Icon size={32} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-merriweather font-bold mb-2 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600">{item.content}</p>
                </a>
              );
            })}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-merriweather font-bold mb-8">Send us a Message</h2>

              {status === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800 font-semibold">Thank you! Your message has been sent.</p>
                  <p className="text-green-700 text-sm">We'll get back to you within 24 business hours.</p>
                </div>
              )}

              {status === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-800 font-semibold">Sorry, something went wrong.</p>
                  <p className="text-red-700 text-sm">Please try again, or email us directly at info@espefawis.com.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your name"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="07037785676"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-gray-900 mb-2">
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-900 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select a subject</option>
                    <option value="supply-chain">Supply Chain Solutions</option>
                    <option value="asset-management">Asset Management</option>
                    <option value="consulting">Consulting Services</option>
                    <option value="partnership">Partnership Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Tell us about your needs and how we can help..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? 'Sending…' : <>Send Message <Send size={18} /></>}
                </button>
              </form>
            </div>

            {/* Contact Info & Social */}
            <div>
              <h2 className="text-3xl font-merriweather font-bold mb-8">Connect With Us</h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Business Hours</h3>
                  <p className="text-gray-600 mb-2">Monday - Friday: 9:00 AM - 5:00 PM</p>
                  <p className="text-gray-600">Saturday - Sunday: Closed</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Follow Us</h3>
                  <div className="flex gap-4">
                    <a
                      href="https://www.facebook.com/share/1BnzuqFk9r/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-100 rounded-lg hover:bg-primary hover:text-white transition-colors"
                    >
                      <Facebook size={24} />
                    </a>
                    <a
                      href="https://www.instagram.com/espefawis__global?igsh=MWUyczlwbndzMXU3ag=="
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-100 rounded-lg hover:bg-primary hover:text-white transition-colors"
                    >
                      <Instagram size={24} />
                    </a>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">What to Expect</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex gap-3 items-start">
                      <span className="text-primary font-bold">✓</span>
                      <span>Quick response to your inquiry</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <span className="text-primary font-bold">✓</span>
                      <span>Initial consultation to understand your needs</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <span className="text-primary font-bold">✓</span>
                      <span>Customized proposal and next steps</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <span className="text-primary font-bold">✓</span>
                      <span>Dedicated support throughout partnership</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-merriweather font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Quick answers to common questions</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: 'How quickly can you respond to inquiries?',
                a: 'We typically respond to all inquiries within 24 business hours. For urgent matters, please call us directly.',
              },
              {
                q: 'Do you offer customized solutions?',
                a: 'Yes, all our solutions are tailored to your specific needs, challenges, and business objectives. We conduct a thorough assessment before proposing any solution.',
              },
              {
                q: 'What is your service area?',
                a: 'We primarily serve organizations across Nigeria and other African countries. We can discuss specific service areas during your initial consultation.',
              },
              {
                q: 'How do you ensure quality and compliance?',
                a: 'We maintain strict quality standards, conduct regular audits, and ensure compliance with international best practices and local regulations.',
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{item.q}</h3>
                <p className="text-gray-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
