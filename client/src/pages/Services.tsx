import { useEffect } from 'react';
import { Link } from 'wouter';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useSEO } from '@/hooks/useSEO';

export default function Services() {
  useSEO({
    title: 'Our Services',
    description:
      'Explore ESPEFAWIS services: supply chain solutions, asset management, agricultural consulting, training, market research, technology integration, and sustainability consulting.',
    path: '/services',
  });

  // Scroll to a section when arriving via a hash link (e.g. /services#asset-management).
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      const el = document.getElementById(hash);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
      }
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/gallery/03_tractor_crop_field.webp)',
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-6xl font-merriweather font-bold drop-shadow-lg text-white">Our Services</h1>
          <p className="text-2xl mt-6 text-white font-light drop-shadow-md">Comprehensive solutions for agricultural excellence</p>
        </div>
      </section>

      {/* Supply Chain Solutions */}
      <section id="supply-chain" className="py-20 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/images/gallery/16_truck_fleet_logistics.webp"
                alt="Packing harvested rice for distribution"
                loading="lazy"
                className="rounded-lg shadow-lg w-full object-cover aspect-[4/3]"
              />
            </div>
            <div>
              <h2 className="text-4xl font-merriweather font-bold mb-6">Supply Chain Solutions</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We design and implement end-to-end supply chain systems that connect farmers to markets efficiently and profitably. Our integrated approach ensures product quality, reduces waste, and maximizes value at every stage.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  'Procurement and sourcing optimization',
                  'Logistics and transportation management',
                  'Warehouse and storage solutions',
                  'Quality assurance and compliance',
                  'Market linkage and distribution',
                  'Real-time tracking and transparency',
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-3 items-start">
                    <CheckCircle2 size={20} className="text-primary flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <Link href="/contact" className="btn-primary">
                Learn More <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Asset Management */}
      <section id="asset-management" className="py-20 bg-gray-50 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-4xl font-merriweather font-bold mb-6">Asset Management</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Maximize the performance and longevity of your agricultural equipment and resources. We provide comprehensive asset management services that ensure optimal utilization, reduce downtime, and extend asset lifespan.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  'Asset inventory and registration',
                  'GPS tracking and monitoring',
                  'Predictive maintenance scheduling',
                  'Performance analytics and reporting',
                  'Depreciation management',
                  'Resource optimization strategies',
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-3 items-start">
                    <CheckCircle2 size={20} className="text-accent flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <Link href="/contact" className="btn-primary">
                Learn More <ArrowRight size={18} />
              </Link>
            </div>
            <div className="order-1 md:order-2">
              <img
                src="/images/gallery/05_livestock_cattle_field.webp"
                alt="Livestock grazing — managed agricultural assets"
                loading="lazy"
                className="rounded-lg shadow-lg w-full object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section id="additional-services" className="py-20 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-merriweather font-bold mb-4">Additional Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Beyond our core offerings, we provide specialized consulting and support services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Agricultural Consulting',
                description: 'Strategic guidance on crop selection, farming practices, market trends, and business planning to optimize productivity and profitability.',
              },
              {
                title: 'Training & Capacity Building',
                description: 'Comprehensive training programs for farmers and agricultural professionals on best practices, technology adoption, and sustainable farming.',
              },
              {
                title: 'Market Research & Analysis',
                description: 'In-depth market intelligence, pricing analysis, and demand forecasting to inform strategic business decisions.',
              },
              {
                title: 'Technology Integration',
                description: 'Implementation of agricultural technology solutions including IoT sensors, data analytics, and digital platforms.',
              },
              {
                title: 'Risk Management',
                description: 'Comprehensive risk assessment and mitigation strategies for agricultural operations and supply chains.',
              },
              {
                title: 'Sustainability Consulting',
                description: 'Guidance on implementing sustainable practices that enhance productivity while protecting the environment.',
              },
            ].map((service, idx) => (
              <div key={idx} className="card-hover bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-xl font-merriweather font-bold mb-3 text-primary">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-merriweather font-bold mb-6 text-white">Our Service Approach</h2>
            <p className="text-2xl text-white max-w-3xl mx-auto font-light leading-relaxed">
              We follow a structured, client-focused methodology to ensure successful implementation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Assessment', desc: 'Comprehensive analysis of your current operations and challenges' },
              { step: '02', title: 'Strategy', desc: 'Customized solution design tailored to your specific needs' },
              { step: '03', title: 'Implementation', desc: 'Professional deployment with full support and training' },
              { step: '04', title: 'Optimization', desc: 'Continuous monitoring and refinement for maximum impact' },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="text-5xl font-bold mb-4 opacity-20">{item.step}</div>
                <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-100 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-merriweather font-bold mb-6">Ready to Transform Your Operations?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact our team to discuss which services are right for your organization and how we can help you achieve your goals.
          </p>
          <Link href="/contact" className="btn-primary">
            Schedule a Consultation <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
