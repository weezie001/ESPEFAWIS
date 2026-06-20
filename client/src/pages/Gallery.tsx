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
  { src: '/images/gallery/01_maize_field_sunrise.webp', alt: 'Maize field at sunrise' },
  { src: '/images/gallery/02_farmer_harvest_basket.webp', alt: 'Farmer with a basket of fresh harvest' },
  { src: '/images/gallery/03_tractor_crop_field.webp', alt: 'Tractor cultivating a crop field' },
  { src: '/images/gallery/26_farmer_cooperative_group.webp', alt: 'Farmer cooperative group' },
  { src: '/images/gallery/27_greenhouse_crop_production.webp', alt: 'Greenhouse crop production' },
  { src: '/images/gallery/28_drip_irrigation_seedlings.webp', alt: 'Drip irrigation of seedlings' },
  { src: '/images/gallery/29_solar_powered_agriculture.webp', alt: 'Solar-powered agriculture' },
  { src: '/images/gallery/25_seedling_in_hands.webp', alt: 'A seedling held in hands' },
  { src: '/images/gallery/05_livestock_cattle_field.webp', alt: 'Cattle on open pasture' },
  { src: '/images/gallery/06_fresh_vegetables_assortment.webp', alt: 'Assortment of fresh vegetables' },
  { src: '/images/gallery/30_quality_guaranteed_produce.webp', alt: 'Quality-guaranteed produce' },
  { src: '/images/gallery/04_cocoa_cashew_commodities.webp', alt: 'Cocoa and cashew commodities' },
  { src: '/images/gallery/07_rice_grains_closeup.webp', alt: 'Close-up of rice grains' },
  { src: '/images/gallery/08_maize_kernels_closeup.webp', alt: 'Close-up of maize kernels' },
  { src: '/images/gallery/09_cassava_roots_closeup.webp', alt: 'Close-up of cassava roots' },
  { src: '/images/gallery/10_sesame_seeds_closeup.webp', alt: 'Close-up of sesame seeds' },
  { src: '/images/gallery/11_cocoa_pods_beans_closeup.webp', alt: 'Close-up of cocoa pods and beans' },
  { src: '/images/gallery/12_cashew_nuts_closeup.webp', alt: 'Close-up of cashew nuts' },
  { src: '/images/gallery/15_food_processing_quality_control.webp', alt: 'Food processing and quality control' },
  { src: '/images/gallery/13_warehouse_partnership_handshake.webp', alt: 'Partnership handshake at a warehouse' },
  { src: '/images/gallery/14_warehouse_storage_forklift.webp', alt: 'Forklift in a storage warehouse' },
  { src: '/images/gallery/17_warehouse_pallet_operations.webp', alt: 'Pallet operations in a warehouse' },
  { src: '/images/gallery/16_truck_fleet_logistics.webp', alt: 'Truck fleet logistics' },
  { src: '/images/gallery/20_road_freight_delivery_truck.webp', alt: 'Road freight delivery truck' },
  { src: '/images/gallery/21_cargo_ship_export_logistics.webp', alt: 'Cargo ship export logistics' },
  { src: '/images/gallery/22_port_terminal_containers.webp', alt: 'Port terminal containers' },
  { src: '/images/gallery/23_air_cargo_export_loading.webp', alt: 'Air cargo export loading' },
  { src: '/images/gallery/18_supply_chain_dashboard_tablet.webp', alt: 'Supply chain dashboard on a tablet' },
  { src: '/images/gallery/19_mobile_agri_dashboard.webp', alt: 'Mobile agriculture dashboard' },
  { src: '/images/gallery/24_corporate_partnership_meeting.webp', alt: 'Corporate partnership meeting' },
];

export default function Gallery() {
  useSEO({
    title: 'Gallery',
    description:
      'Explore the ESPEFAWIS gallery — a closer look at our farms, commodities, processing, warehousing, logistics, exports, and the partnerships that power Nigeria’s agricultural value chain.',
    path: '/gallery',
  });

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      {/* Hero */}
      <section className="relative h-72 md:h-80 flex items-center justify-center overflow-hidden">
        <img src="/images/gallery/01_maize_field_sunrise.webp" alt="" className="absolute inset-0 w-full h-full object-cover" />
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
            viewport={{ once: false, margin: '-80px' }}
            variants={fadeUp}
            className="max-w-3xl"
          >
            <span className="text-accent font-semibold uppercase tracking-wide text-sm">A Closer Look</span>
            <h2 className="mt-2 mb-4">Inside the ESPEFAWIS Value Chain</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Every image tells part of our story — from the farms and crops we nurture, to the
              commodities we source, the facilities where we process and store them, and the
              logistics and partnerships that move quality produce to markets at home and abroad.
            </p>
          </motion.div>

          {/* Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: '-60px' }}
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
