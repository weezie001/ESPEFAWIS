import { Link } from 'wouter';
import { ArrowRight, Award, Users, Zap, Globe, Target, TrendingUp } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function WhyUs() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663587645243/Ey3xhhhkNe26ssGz7PgGF7/hero-innovation-Jie5DJvVBR2FHahrQLomH6.webp)',
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-6xl font-merriweather font-bold drop-shadow-lg">Why Choose ESPEFAWIS?</h1>
          <p className="text-2xl mt-6 text-white font-light drop-shadow-md">The competitive advantages that set us apart</p>
        </div>
      </section>

      {/* Key Differentiators */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Award,
                title: 'Industry Expertise',
                description: 'Decades of combined experience in agriculture, supply chain management, and business development across Africa.',
              },
              {
                icon: Globe,
                title: 'Global Standards',
                description: 'We implement international best practices and maintain compliance with global quality and sustainability standards.',
              },
              {
                icon: Users,
                title: 'Dedicated Team',
                description: 'Our professionals bring specialized knowledge and commitment to delivering exceptional results for every client.',
              },
              {
                icon: Zap,
                title: 'Innovation-Driven',
                description: 'We continuously adopt new technologies and methodologies to stay ahead of industry trends and challenges.',
              },
              {
                icon: Target,
                title: 'Customized Solutions',
                description: 'We tailor every service to your unique needs, ensuring solutions that fit your specific context and goals.',
              },
              {
                icon: TrendingUp,
                title: 'Proven Results',
                description: 'Our track record demonstrates measurable impact on productivity, efficiency, and profitability for our clients.',
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="card-hover bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                  <div className="mb-4 inline-block p-3 bg-primary/10 rounded-lg">
                    <Icon size={24} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-merriweather font-bold mb-3">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-merriweather font-bold mb-4">What Sets Us Apart</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A comprehensive comparison of our approach versus traditional service providers
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-primary">
                  <th className="text-left py-4 px-4 font-merriweather font-bold text-gray-900">Feature</th>
                  <th className="text-center py-4 px-4 font-semibold text-primary">ESPEFAWIS</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-500">Traditional Providers</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'Integrated Solutions', espefawis: true, traditional: false },
                  { feature: 'Real-time Tracking', espefawis: true, traditional: false },
                  { feature: 'Predictive Analytics', espefawis: true, traditional: false },
                  { feature: 'Customization', espefawis: true, traditional: false },
                  { feature: 'Local Expertise', espefawis: true, traditional: false },
                  { feature: 'Sustainability Focus', espefawis: true, traditional: false },
                  { feature: 'Long-term Partnership', espefawis: true, traditional: false },
                  { feature: 'Continuous Support', espefawis: true, traditional: false },
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-gray-200 hover:bg-white">
                    <td className="py-4 px-4 font-medium text-gray-900">{row.feature}</td>
                    <td className="py-4 px-4 text-center">
                      {row.espefawis ? (
                        <span className="inline-block w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm">✓</span>
                      ) : (
                        <span className="text-gray-300">—</span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {row.traditional ? (
                        <span className="inline-block w-6 h-6 bg-gray-300 text-white rounded-full flex items-center justify-center text-sm">✓</span>
                      ) : (
                        <span className="text-gray-300">—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-merriweather font-bold mb-4">Client Success</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real results from organizations we've partnered with
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                metric: '45%',
                description: 'Average increase in supply chain efficiency',
              },
              {
                metric: '60%',
                description: 'Reduction in asset downtime through predictive maintenance',
              },
              {
                metric: '35%',
                description: 'Cost savings through optimized logistics and operations',
              },
            ].map((item, idx) => (
              <div key={idx} className="text-center p-8 bg-white rounded-lg shadow-sm border border-gray-100">
                <div className="text-5xl font-bold text-primary mb-2">{item.metric}</div>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Philosophy */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-merriweather font-bold mb-12 text-center text-white drop-shadow-sm">Our Partnership Philosophy</h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">Long-term Commitment</h3>
                <p className="text-gray-100">
                  We view every engagement as a long-term partnership, not a one-time transaction. Your success is our success, and we invest in understanding your business deeply to deliver lasting value.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Transparency & Accountability</h3>
                <p className="text-gray-100">
                  We maintain open communication, provide regular reporting, and hold ourselves accountable for delivering on our commitments. You'll always know what's happening and why.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Continuous Improvement</h3>
                <p className="text-gray-100">
                  We don't stop after implementation. We continuously monitor performance, gather feedback, and optimize solutions to ensure you're always getting maximum value.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Shared Values</h3>
                <p className="text-gray-100">
                  We partner with organizations that share our commitment to sustainability, integrity, and creating positive impact in the agricultural sector and beyond.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-merriweather font-bold mb-6">Experience the ESPEFAWIS Difference</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join organizations across Africa that are transforming their operations with our innovative solutions and dedicated partnership.
          </p>
          <Link href="/contact" className="btn-primary">
            Start Your Journey <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
