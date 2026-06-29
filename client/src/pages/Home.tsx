import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import {
  ArrowRight,
  CheckCircle2,
  Sprout,
  Truck,
  Warehouse,
  ShieldCheck,
  Store,
  Handshake,
} from 'lucide-react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useSEO } from '@/hooks/useSEO';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const heroSlides = [
  '/images/hero-1.webp',
  '/images/hero-2.webp',
  '/images/hero-3.webp',
];

const services = [
  {
    icon: Sprout,
    img: '/images/svc-procurement.webp',
    title: 'Procurement & Sourcing',
    desc: 'We help you source quality commodities directly from trusted farms at the best value.',
  },
  {
    icon: Truck,
    img: '/images/svc-supply.webp',
    title: 'Supply Chain Management',
    desc: 'Efficient systems that ensure seamless movement, traceability, and on-time delivery.',
  },
  {
    icon: Warehouse,
    img: '/images/svc-warehousing.webp',
    title: 'Warehousing & Storage',
    desc: 'Safe, modern, and efficient storage that preserves quality at every stage.',
  },
  {
    icon: ShieldCheck,
    img: '/images/svc-quality.webp',
    title: 'Quality Assurance & Control',
    desc: 'We maintain rigorous standards and testing across the entire value chain.',
  },
  {
    icon: Store,
    img: '/images/svc-market.webp',
    title: 'Market Access & Distribution',
    desc: 'We connect your products to reliable local and global markets.',
  },
];

const commodities = [
  { name: 'Guinea Corn', img: '/images/gallery/01_maize_field_sunrise.webp' },
  { name: 'Rice', img: '/images/gallery/07_rice_grains_closeup.webp' },
  { name: 'Maize', img: '/images/gallery/08_maize_kernels_closeup.webp' },
  { name: 'Cassava', img: '/images/gallery/09_cassava_roots_closeup.webp' },
  { name: 'Plantain', img: '/images/com-plantain.webp' },
  { name: 'Plantain Chips', img: '/images/com-plantain-chips.webp' },
  { name: 'Plantain Powder', img: '/images/com-plantain-powder.webp' },
  { name: 'Sesame', img: '/images/gallery/10_sesame_seeds_closeup.webp' },
  { name: 'Cocoa', img: '/images/gallery/11_cocoa_pods_beans_closeup.webp' },
  { name: 'Cashew', img: '/images/gallery/12_cashew_nuts_closeup.webp' },
  { name: 'Livestock', img: '/images/gallery/05_livestock_cattle_field.webp' },
  { name: 'Vegetables', img: '/images/gallery/06_fresh_vegetables_assortment.webp' },
  { name: 'Fruits', img: '/images/gallery/30_quality_guaranteed_produce.webp' },
  { name: 'Processed Food', img: '/images/gallery/15_food_processing_quality_control.webp' },
  { name: 'General Commodities', img: '/images/gallery/04_cocoa_cashew_commodities.webp' },
];

const operations = [
  { img: '/images/ops-farming.webp', label: 'Farming' },
  { img: '/images/ops-cultivation.webp', label: 'Cultivation' },
  { img: '/images/ops-nursery.webp', label: 'Nursery' },
  { img: '/images/ops-harvest.webp', label: 'Harvest' },
  { img: '/images/ops-processing.webp', label: 'Processing' },
  { img: '/images/ops-packaging.webp', label: 'Packaging' },
  { img: '/images/ops-market.webp', label: 'Market' },
];

const homeGallery = [
  { src: '/images/showcase/14.webp', alt: 'ESPEFAWIS plantain products' },
  { src: '/images/showcase/11.webp', alt: 'Foodstuff at the market' },
  { src: '/images/showcase/08.webp', alt: 'Our team in the field' },
];

export default function Home() {
  useSEO({
    title: 'Building Reliable Agro Supply Chains for Nigeria',
    description:
      'ESPEFAWIS Global Nig Ltd is a premier agro-allied and multi-sector solutions firm connecting Nigerian farmers to markets through integrated, sustainable supply chain solutions.',
    path: '/',
    image: 'https://www.espefawis.com/images/hero-1.webp',
  });

  const [slide, setSlide] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = setInterval(() => setSlide((s) => (s + 1) % heroSlides.length), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-neutral-950">
      <Navigation />

      {/* ===== HERO (auto-slide carousel) ===== */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          {heroSlides.map((src, i) => (
            <img
              key={src}
              src={src}
              alt=""
              aria-hidden={i !== slide}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                i === slide ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/55 to-black/65" />
        </div>

        <div className="relative z-10 container mx-auto px-4 py-32 lg:py-48">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-3xl mx-auto text-center text-white"
          >
            <motion.h1
              variants={fadeUp}
              className="font-merriweather font-bold leading-[1.05] text-white drop-shadow-md text-5xl sm:text-6xl lg:text-7xl"
            >
              Building Reliable{' '}
              <span className="text-[#5DC264]">Agro Supply Chains</span> for Nigeria
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mt-6 mx-auto max-w-2xl text-xl text-gray-200 font-light leading-relaxed"
            >
              We connect farmers to markets through integrated supply chain solutions that drive
              growth, reduce waste, and create lasting value.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-9 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/services" className="btn-primary justify-center shadow-lg">
                Our Services <ArrowRight size={18} />
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 bg-white/95 text-primary font-semibold rounded-md inline-flex items-center justify-center gap-2 transition-all duration-200 hover:bg-white"
              >
                Partner With Us
              </Link>
            </motion.div>
          </motion.div>

          {/* Slide indicators */}
          <div className="relative z-10 mt-12 flex justify-center gap-2.5">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setSlide(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === slide ? 'w-8 bg-white' : 'w-2.5 bg-white/50 hover:bg-white/80'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ===== ABOUT (below hero) ===== */}
      <section className="py-20 lg:py-24 bg-white dark:bg-neutral-950 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
              className="order-2 lg:order-1"
            >
              <span className="text-accent font-semibold tracking-wide text-sm uppercase">About Us</span>
              <h2 className="mt-2 mb-5">Bridging the Gap Between the Farm and the Wider Economy</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                ESPEFAWIS Global Nig Ltd is a premier agro-allied and multi-sector solutions firm
                committed to transforming Nigeria's agricultural value chains through innovation,
                integrity, and excellence.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                From the farm to the wider economy, we build dependable supply chains that create
                lasting value for farmers, businesses, and the communities we serve.
              </p>
              <Link href="/about" className="btn-primary">
                Learn More <ArrowRight size={18} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
              className="order-1 lg:order-2"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/about-seedling.webp"
                  alt="Hands holding a young seedling in soil"
                  className="w-full object-cover aspect-[4/3] hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="py-20 lg:py-24 bg-gray-50 dark:bg-neutral-900 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
            className="max-w-3xl"
          >
            <span className="text-accent font-semibold uppercase tracking-wide text-sm">Our Services</span>
            <h2 className="mt-2 mb-4">End-to-End Agro Supply Chain Solutions</h2>
            <p className="text-lg text-muted-foreground">
              We design and implement smart, sustainable, and scalable solutions that connect every
              part of the agricultural value chain.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
            className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
          >
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <motion.div
                  variants={fadeUp}
                  key={s.title}
                  className="group bg-white dark:bg-neutral-800 rounded-2xl overflow-hidden border border-gray-100 dark:border-white/10 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={s.img}
                      alt={s.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute -bottom-5 left-5 w-11 h-11 rounded-xl bg-primary text-white flex items-center justify-center shadow-lg">
                      <Icon size={20} />
                    </div>
                  </div>
                  <div className="p-5 pt-7">
                    <h3 className="text-base font-merriweather font-bold mb-2 leading-snug">{s.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{s.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mt-10"
          >
            <Link href="/services" className="btn-primary">
              View All Services <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ===== FEATURE BAND: Why / Commodities / Partnership ===== */}
      <section className="py-20 lg:py-24 bg-white dark:bg-neutral-950 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Why Choose */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp}
              className="relative rounded-2xl overflow-hidden min-h-[420px] flex"
            >
              <img src="/images/showcase/08.webp" alt="" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/45" />
              <div className="relative z-10 p-7 flex flex-col justify-end text-white">
                <span className="text-[#9FE6A8] font-semibold uppercase tracking-wide text-xs">Why Choose ESPEFAWIS</span>
                <h3 className="text-2xl font-merriweather font-bold mt-2 mb-4 text-white">
                  Your Trusted Partner in Agro Supply Chain Solutions
                </h3>
                <ul className="space-y-2.5 mb-6">
                  {[
                    'Proven expertise in agro-allied solutions',
                    'Integrated end-to-end supply chain systems',
                    'Commitment to quality, innovation & sustainability',
                    'Strong network of partners and stakeholders',
                    'Focused on long-term value and impact',
                  ].map((item) => (
                    <li key={item} className="flex gap-2.5 items-start text-sm text-gray-100">
                      <CheckCircle2 size={18} className="text-[#5DC264] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/why-us"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-primary font-semibold rounded-md w-fit hover:bg-gray-100 transition-colors"
                >
                  Why Us <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>

            {/* Commodities */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp}
              className="rounded-2xl bg-primary text-white p-7 min-h-[420px]"
            >
              <span className="text-[#9FE6A8] font-semibold uppercase tracking-wide text-xs">Commodities We Handle</span>
              <h3 className="text-2xl font-merriweather font-bold mt-2 mb-6 text-white">
                Quality Commodities, Reliable Supply
              </h3>
              <div className="grid grid-cols-4 gap-x-3 gap-y-5">
                {commodities.map((c) => (
                  <div key={c.name} className="flex flex-col items-center text-center">
                    <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-white/30 shadow-md">
                      <img src={c.img} alt={c.name} loading="lazy" className="w-full h-full object-cover" />
                    </div>
                    <span className="mt-1.5 text-[11px] leading-tight text-gray-100">{c.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Partnerships */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp}
              className="relative rounded-2xl overflow-hidden min-h-[420px] flex"
            >
              <img src="/images/showcase/23.webp" alt="" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/45" />
              <div className="relative z-10 p-7 flex flex-col justify-end text-white">
                <span className="text-[#9FE6A8] font-semibold uppercase tracking-wide text-xs">Partnerships</span>
                <h3 className="text-2xl font-merriweather font-bold mt-2 mb-4 text-white">
                  Building Strong Relationships for Sustainable Growth
                </h3>
                <p className="text-sm text-gray-100 leading-relaxed mb-6">
                  We work with government agencies, corporate organizations, exporters, processors,
                  and development partners to build resilient and profitable agricultural value chains.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-white font-semibold rounded-md w-fit hover:opacity-90 transition-opacity"
                >
                  <Handshake size={16} /> Become a Partner
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== OPERATIONS STRIP ===== */}
      <section className="py-20 lg:py-24 bg-gray-50 dark:bg-neutral-900 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
            className="max-w-3xl mb-12"
          >
            <span className="text-accent font-semibold uppercase tracking-wide text-sm">Our Operations</span>
            <h2 className="mt-2">From Farm to Market, We Deliver Value</h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4"
          >
            {operations.map((op) => (
              <motion.div
                variants={fadeUp}
                key={op.label}
                className="group relative rounded-xl overflow-hidden aspect-[3/4] shadow-sm"
              >
                <img
                  src={op.img}
                  alt={op.label}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <span className="absolute bottom-3 left-0 right-0 text-center text-white text-sm font-semibold">
                  {op.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== GALLERY ===== */}
      <section className="py-20 lg:py-24 bg-white dark:bg-neutral-950 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
            className="section-heading mb-12"
          >
            <h2>Our Gallery</h2>
            <p>A closer look at our operations, products, and the value chain we power.</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4"
          >
            {homeGallery.map((img) => (
              <motion.div
                variants={fadeUp}
                key={img.src}
                className="group relative rounded-xl overflow-hidden aspect-[4/3] shadow-sm"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-10">
            <Link href="/gallery" className="btn-primary">
              View Full Gallery <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-20 lg:py-24 bg-primary text-white overflow-hidden">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="container mx-auto px-4 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-merriweather font-bold mb-6 text-white">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-lg md:text-xl text-gray-100 mb-10 max-w-2xl mx-auto font-light">
            Contact our team today to discuss how ESPEFAWIS can help you achieve sustainable growth
            and maximize value across your agricultural value chain.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            Get in Touch <ArrowRight size={20} className="ml-2" />
          </Link>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
