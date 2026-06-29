import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useSEO } from '@/hooks/useSEO';

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

export default function About() {
  useSEO({
    title: 'About Us',
    description:
      'Learn about ESPEFAWIS Global Nig Ltd — our mission, vision, and core values as a premier agro-allied and multi-sector solutions firm in Nigeria.',
    path: '/about',
  });

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-neutral-900">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/gallery/01_maize_field_sunrise.webp)',
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.h1 variants={fadeInUp} className="text-6xl font-merriweather font-bold drop-shadow-lg text-white">About ESPEFAWIS</motion.h1>
            <motion.p variants={fadeInUp} className="text-2xl mt-6 text-white font-light drop-shadow-md">Our Journey, Mission, and Vision</motion.p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeInUp} className="text-4xl font-merriweather font-bold mb-6">Who We Are</motion.h2>
              <motion.p variants={fadeInUp} className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                We are a premier agro-allied and multi sector solutions firm. Our mission is to bridge the gap between the farm and the wider economy. We combine innovation with nature, building supply chains that makes food security thrive.
              </motion.p>
              <motion.p variants={fadeInUp} className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                With a future focused mindset, we provide reliable services that meet global standards, ensuring that whether we are growing crops and managing assets, we are cultivating long term value for our clients and our country.
              </motion.p>
              <motion.div variants={fadeInUp}>
                <Link href="/contact" className="btn-primary inline-flex">
                  Work With Us <ArrowRight size={18} className="ml-2" />
                </Link>
              </motion.div>
            </motion.div>
            <div>
              <img
                src="/images/about-seedling.webp"
                alt="ESPEFAWIS — nurturing crops in the field"
                loading="lazy"
                className="rounded-lg shadow-lg w-full object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50 dark:bg-neutral-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white dark:bg-neutral-900 p-10 rounded-lg shadow-sm">
              <div className="w-12 h-1 bg-accent rounded-full mb-6"></div>
              <h3 className="text-2xl font-merriweather font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                To bridge the gap between the farm and the wider economy by providing innovative, reliable, and globally-standard agro-allied solutions that enhance food security, create sustainable supply chains, and generate long-term value for our clients and communities.
              </p>
            </div>
            <div className="bg-white dark:bg-neutral-900 p-10 rounded-lg shadow-sm">
              <div className="w-12 h-1 bg-primary rounded-full mb-6"></div>
              <h3 className="text-2xl font-merriweather font-bold mb-4">Our Vision</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                To be the leading agro-allied solutions provider in Africa, recognized for our commitment to innovation, sustainability, and excellence. We envision a future where agricultural productivity and economic prosperity are interconnected through intelligent systems and strategic partnerships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-merriweather font-bold mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              These principles guide every decision we make and every solution we deliver
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                title: 'Innovation',
                image: '/images/showcase/24.webp',
                description: 'We continuously seek new technologies and methodologies to solve agricultural challenges and create competitive advantages for our clients.',
              },
              {
                title: 'Integrity',
                image: '/images/showcase/22.webp',
                description: 'We operate with transparency, honesty, and ethical standards in all our business dealings and partnerships.',
              },
              {
                title: 'Excellence',
                image: '/images/gallery/30_quality_guaranteed_produce.webp',
                description: 'We maintain the highest standards of quality in our services, products, and professional conduct.',
              },
              {
                title: 'Sustainability',
                image: '/images/showcase/07.webp',
                description: 'We prioritize environmental responsibility and long-term viability in all our operations and recommendations.',
              },
              {
                title: 'Partnership',
                image: '/images/showcase/23.webp',
                description: 'We believe in collaborative relationships that create mutual value and shared success with our clients and stakeholders.',
              },
              {
                title: 'Impact',
                image: '/images/showcase/10.webp',
                description: 'We measure success by the positive impact we create for farmers, businesses, and communities we serve.',
              },
            ].map((value, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="card-hover bg-white dark:bg-neutral-900 rounded-xl shadow-sm border border-gray-100 dark:border-white/10 overflow-hidden flex flex-col"
              >
                <div className="relative h-48 overflow-hidden group">
                  <img
                    src={value.image}
                    alt={value.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <h4 className="absolute bottom-4 left-5 text-xl font-merriweather font-bold text-white drop-shadow">{value.title}</h4>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed p-6">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-merriweather font-bold mb-6 text-white">Why Choose ESPEFAWIS?</h2>
            <p className="text-2xl text-white max-w-3xl mx-auto font-light leading-relaxed">
              We combine deep industry expertise with innovative solutions to deliver measurable results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              'Proven track record in agro-allied solutions',
              'Global standards and best practices',
              'Experienced team of industry professionals',
              'Customized solutions for unique challenges',
              'Commitment to sustainable practices',
              'Long-term partnership approach',
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4 items-start">
                <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">✓</span>
                </div>
                <p className="text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-merriweather font-bold mb-6">Let's Build Something Great Together</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Connect with our team to explore how ESPEFAWIS can drive growth and innovation in your organization.
          </p>
          <Link href="/contact" className="btn-primary">
            Get in Touch <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
