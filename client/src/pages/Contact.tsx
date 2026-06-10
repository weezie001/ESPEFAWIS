import { useState } from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Send } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Without a backend mail service, compose the message in the visitor's
    // email client and address it to the company inbox.
    const subjectText = formData.subject
      ? `Website enquiry: ${formData.subject}`
      : 'Website enquiry';
    const bodyLines = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone || '-'}`,
      `Company: ${formData.company || '-'}`,
      `Subject: ${formData.subject || '-'}`,
      '',
      formData.message,
    ];
    const mailtoUrl =
      `mailto:info@espefawis.com` +
      `?subject=${encodeURIComponent(subjectText)}` +
      `&body=${encodeURIComponent(bodyLines.join('\n'))}`;

    window.location.href = mailtoUrl;

    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', company: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663587645243/Ey3xhhhkNe26ssGz7PgGF7/hero-sustainability-3fvfoHBNMAYfAtVeQyhbXr.webp)',
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Mail,
                title: 'Email',
                content: 'info@espefawis.com',
                link: 'mailto:info@espefawis.com',
              },
              {
                icon: Phone,
                title: 'Phone',
                content: '07037785676',
                link: 'tel:07037785676',
              },
              {
                icon: MapPin,
                title: 'Location',
                content: 'Nigeria',
                link: '#',
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <a key={idx} href={item.link} className="card-hover bg-white p-8 rounded-lg shadow-sm border border-gray-100 text-center no-underline">
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

              {submitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800 font-semibold">Thank you! Your email app should now be open with your message ready to send.</p>
                  <p className="text-green-700 text-sm">If it didn't open, email us directly at info@espefawis.com and we'll get back to you as soon as possible.</p>
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
                  className="btn-primary w-full justify-center"
                >
                  Send Message <Send size={18} />
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
