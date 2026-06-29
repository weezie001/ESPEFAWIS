import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useSEO } from '@/hooks/useSEO';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
};

const images = [
  { src: '/images/showcase/01.webp', alt: 'Hands holding a young seedling in soil' },
  { src: '/images/showcase/04.webp', alt: 'Farmers with fresh plantains' },
  { src: '/images/showcase/03.webp', alt: 'Plantains for sale at the market' },
  { src: '/images/showcase/05.webp', alt: 'Harvested plantains loaded for transport' },
  { src: '/images/showcase/07.webp', alt: 'Sorting plantains at the warehouse' },
  { src: '/images/showcase/10.webp', alt: 'Workers in the plantain field' },
  { src: '/images/showcase/08.webp', alt: 'The ESPEFAWIS team in the field' },
  { src: '/images/showcase/06.webp', alt: 'Fresh produce at a local market' },
  { src: '/images/showcase/11.webp', alt: 'Grains and foodstuff at the market' },
  { src: '/images/showcase/09.webp', alt: 'Processing and quality control' },
  { src: '/images/showcase/17.webp', alt: 'ESPEFAWIS products in a retail store' },
  { src: '/images/showcase/14.webp', alt: 'ESPEFAWIS plantain product range' },
  { src: '/images/showcase/15.webp', alt: 'ESPEFAWIS plantain flour packaging' },
  { src: '/images/showcase/16.webp', alt: 'Premium quality plantain products' },
  { src: '/images/showcase/02.webp', alt: 'Commodities we handle' },
  { src: '/images/showcase/12.webp', alt: 'ESPEFAWIS at a trade exhibition' },
  { src: '/images/showcase/13.webp', alt: 'ESPEFAWIS plantain products banner' },
  { src: '/images/showcase/22.webp', alt: 'Partnership handshake at our stand' },
  { src: '/images/showcase/23.webp', alt: 'The ESPEFAWIS team at an exhibition' },
  { src: '/images/showcase/24.webp', alt: 'ESPEFAWIS supply-chain dashboard' },
  { src: '/images/showcase/25.webp', alt: 'Young plantains in the field' },
  { src: '/images/showcase/26.webp', alt: 'Plantain field' },
  { src: '/images/showcase/27.webp', alt: 'Plantain plantation' },
];

export default function Gallery() {
  useSEO({
    title: 'Gallery',
    description:
      'Explore the ESPEFAWIS gallery — a closer look at our farms, commodities, processing, warehousing, logistics, exports, and the partnerships that power Nigeria’s agricultural value chain.',
    path: '/gallery',
  });

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-neutral-900">
      <Navigation />

      {/* Hero */}
      <section className="relative h-72 md:h-80 flex items-center justify-center overflow-hidden">
        <img src="/images/showcase/27.webp" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-merriweather font-bold drop-shadow-lg text-white">Our Gallery</h1>
          <p className="text-xl mt-4 text-gray-100 font-light drop-shadow">From farm to market — our work in pictures</p>
        </div>
      </section>

      {/* Intro write-up */}
      <section className="py-14 lg:py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
            className="max-w-3xl"
          >
            <span className="text-accent font-semibold uppercase tracking-wide text-sm">A Closer Look</span>
            <h2 className="mt-2 mb-4">Inside the ESPEFAWIS Value Chain</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Every image tells part of our story — from the farms and crops we nurture, to the
              commodities we source, the facilities where we process and store them, and the
              logistics and partnerships that move quality produce to markets at home and abroad.
            </p>
          </motion.div>

          {/* Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
            className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {images.map((img) => (
              <motion.figure
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <figcaption className="absolute bottom-0 left-0 right-0 p-3 text-white text-xs font-medium translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  {img.alt}
                </figcaption>
              </motion.figure>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
