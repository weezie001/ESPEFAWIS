import { Link } from 'wouter';
import { ArrowRight, Leaf, Zap, Shield, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const galleryImages = [
  'https://d2xsxph8kpxj0f.cloudfront.net/310519663587645243/Ey3xhhhkNe26ssGz7PgGF7/hero-supply-chain-XVSupCHiAc92K7AEi9AuBE.webp',
  'https://d2xsxph8kpxj0f.cloudfront.net/310519663587645243/Ey3xhhhkNe26ssGz7PgGF7/service-supply-chain-RUSMkyBbb3gAmWact4q7xg.webp',
  'https://d2xsxph8kpxj0f.cloudfront.net/310519663587645243/Ey3xhhhkNe26ssGz7PgGF7/service-asset-management-LgrKBNGAdNi9abdVmWB8y5.webp',
  'https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?q=80&w=1000&auto=format&fit=crop',
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Home() {
  const [emblaRef] = useEmblaCarousel({ loop: true });

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663587645243/Ey3xhhhkNe26ssGz7PgGF7/hero-supply-chain-XVSupCHiAc92K7AEi9AuBE.webp)',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white py-20">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h1 variants={fadeInUp} className="text-6xl md:text-8xl font-merriweather font-bold mb-6 leading-tight text-white drop-shadow-md">
              Bridging Farm & Economy
            </motion.h1>
            <motion.h2 variants={fadeInUp} className="text-2xl md:text-3xl mb-12 text-white font-light leading-relaxed drop-shadow-sm">
              Sustainable Agricultural Solutions for the Future
            </motion.h2>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary bg-white text-primary hover:bg-gray-100">
                Get Started <ArrowRight size={20} />
              </Link>
              <Link href="/about" className="btn-secondary border-white text-white hover:bg-white hover:text-primary">
                Learn More
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24 bg-primary text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="max-w-5xl mx-auto text-center"
          >
            <h2 className="text-5xl md:text-6xl font-merriweather font-bold mb-10 text-white drop-shadow-sm">Who We Are</h2>
            <div className="space-y-8">
              <p className="text-2xl md:text-3xl text-gray-100 font-light leading-relaxed">
                We are a premier agro-allied and multi sector solutions firm. Our mission is to bridge the gap between the farm and the wider economy. We combine innovation with nature, building supply chains that makes food security thrive.
              </p>
              <p className="text-xl md:text-2xl text-gray-200 font-light leading-relaxed max-w-4xl mx-auto">
                With a future focused mindset, we provide reliable services that meet global standards, ensuring that whether we are growing crops and managing assets, we are cultivating long term value for our clients and our country.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="section-heading"
          >
            <h2>Our Core Values</h2>
            <p>Combining innovation with nature to create sustainable solutions</p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
          >
            {[
              {
                icon: Leaf,
                title: 'Sustainability',
                description: 'Cultivating practices that ensure long-term environmental and economic viability.',
              },
              {
                icon: Zap,
                title: 'Innovation',
                description: 'Leveraging cutting-edge technology to solve agricultural challenges.',
              },
              {
                icon: Shield,
                title: 'Reliability',
                description: 'Meeting global standards with consistent, dependable service delivery.',
              },
              {
                icon: TrendingUp,
                title: 'Growth',
                description: 'Creating value for clients and stakeholders through strategic partnerships.',
              },
            ].map((value, idx) => {
              const Icon = value.icon;
              return (
                <motion.div variants={fadeInUp} key={idx} className="card-hover bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                  <div className="mb-4 inline-block p-3 bg-primary/10 rounded-lg">
                    <Icon size={24} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-merriweather font-bold mb-3">{value.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="section-heading mb-12"
          >
            <h2>Our Gallery</h2>
            <p>A glimpse into our operations and facilities</p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="overflow-hidden cursor-grab active:cursor-grabbing" 
            ref={emblaRef}
          >
            <div className="flex gap-4">
              {galleryImages.map((src, idx) => (
                <div key={idx} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 pl-4">
                  <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden group">
                    <img
                      src={src}
                      alt={`Gallery image ${idx + 1}`}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500"></div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="section-heading"
          >
            <h2>Our Services</h2>
            <p>Comprehensive solutions tailored to meet your agro-allied and business needs</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663587645243/Ey3xhhhkNe26ssGz7PgGF7/service-supply-chain-RUSMkyBbb3gAmWact4q7xg.webp"
                  alt="Supply Chain Solutions"
                  className="w-full object-cover aspect-[4/3] hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h3 className="text-3xl font-merriweather font-bold mb-4">Supply Chain Solutions</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We optimize agricultural supply chains from farm to market, ensuring efficiency, transparency, and maximum value retention. Our integrated approach manages logistics, storage, and distribution with precision.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex gap-3 items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2.5 flex-shrink-0"></div>
                  <span className="text-gray-700">End-to-end supply chain management</span>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2.5 flex-shrink-0"></div>
                  <span className="text-gray-700">Logistics optimization and tracking</span>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2.5 flex-shrink-0"></div>
                  <span className="text-gray-700">Quality assurance and compliance</span>
                </li>
              </ul>
              <Link href="/services" className="btn-primary inline-flex">
                Explore Service <ArrowRight size={18} className="ml-2" />
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
              className="order-2 md:order-1"
            >
              <h3 className="text-3xl font-merriweather font-bold mb-4">Asset Management</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Maximize the performance and longevity of your agricultural assets through intelligent tracking, maintenance scheduling, and optimization strategies. We ensure your equipment operates at peak efficiency.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex gap-3 items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2.5 flex-shrink-0"></div>
                  <span className="text-gray-700">Real-time asset tracking and monitoring</span>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2.5 flex-shrink-0"></div>
                  <span className="text-gray-700">Predictive maintenance scheduling</span>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2.5 flex-shrink-0"></div>
                  <span className="text-gray-700">Performance optimization and reporting</span>
                </li>
              </ul>
              <Link href="/services" className="btn-primary inline-flex">
                Explore Service <ArrowRight size={18} className="ml-2" />
              </Link>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
              className="order-1 md:order-2"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663587645243/Ey3xhhhkNe26ssGz7PgGF7/service-asset-management-LgrKBNGAdNi9abdVmWB8y5.webp"
                  alt="Asset Management"
                  className="w-full object-cover aspect-[4/3] hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-white overflow-hidden">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="container mx-auto px-4 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-merriweather font-bold mb-6">Ready to Transform Your Operations?</h2>
          <p className="text-lg md:text-xl text-gray-100 mb-10 max-w-2xl mx-auto font-light">
            Contact our team today to discuss how ESPEFAWIS can help you achieve sustainable growth and maximize value.
          </p>
          <Link href="/contact" className="inline-flex px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Get in Touch <ArrowRight size={20} className="inline ml-2" />
          </Link>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
