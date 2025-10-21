import { Menu, X, ChevronRight, Users, TrendingUp, Award, MessageSquare, MessageCircle } from 'lucide-react';
import { useState } from 'react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-slate-900">AVENTUS</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-slate-700 hover:text-slate-900 font-medium transition-colors">Services</a>
              <a href="#about" className="text-slate-700 hover:text-slate-900 font-medium transition-colors">About</a>
              <a href="#process" className="text-slate-700 hover:text-slate-900 font-medium transition-colors">Process</a>
              <a href="#contact" className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-6 py-2.5 rounded-lg hover:from-amber-600 hover:to-orange-700 transition-all transform hover:scale-105 shadow-[0_4px_0_0_rgba(217,119,6,0.4)] hover:shadow-[0_2px_0_0_rgba(217,119,6,0.4)] hover:translate-y-[2px] active:shadow-none active:translate-y-[4px]">Get Started</a>
            </div>

            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100">
            <div className="px-6 py-4 space-y-3">
              <a href="#services" className="block text-slate-700 hover:text-slate-900 font-medium py-2">Services</a>
              <a href="#about" className="block text-slate-700 hover:text-slate-900 font-medium py-2">About</a>
              <a href="#process" className="block text-slate-700 hover:text-slate-900 font-medium py-2">Process</a>
              <a href="#contact" className="block bg-gradient-to-r from-amber-500 to-orange-600 text-white px-6 py-2.5 rounded-lg text-center mt-4 shadow-[0_4px_0_0_rgba(217,119,6,0.4)] active:shadow-none active:translate-y-[4px]">Get Started</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block">
                <span className="bg-gradient-to-r from-amber-50 to-orange-50 text-amber-900 px-4 py-2 rounded-full text-sm font-medium border border-amber-200">
                  Digital Media Marketing Excellence
                </span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                Elevate Your Digital Presence
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                We partner with creators and digital personalities to amplify their online impact through strategic media marketing and brand development.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-4 rounded-lg hover:from-amber-600 hover:to-orange-700 transition-all transform flex items-center justify-center group shadow-[0_6px_0_0_rgba(217,119,6,0.5)] hover:shadow-[0_3px_0_0_rgba(217,119,6,0.5)] hover:translate-y-[3px] active:shadow-none active:translate-y-[6px]">
                  Start Your Journey
                  <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#services" className="border-2 border-slate-900 text-slate-900 px-8 py-4 rounded-lg hover:bg-slate-50 transition-all flex items-center justify-center shadow-[0_6px_0_0_rgba(15,23,42,0.3)] hover:shadow-[0_3px_0_0_rgba(15,23,42,0.3)] hover:translate-y-[3px] active:shadow-none active:translate-y-[6px]">
                  Our Services
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl shadow-2xl overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center space-y-4 p-8">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform border border-amber-100">
                        <TrendingUp className="w-8 h-8 text-amber-600 mb-2" />
                        <p className="text-2xl font-bold text-slate-900">500%</p>
                        <p className="text-sm text-slate-600">Avg. Growth</p>
                      </div>
                      <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform border border-orange-100">
                        <Users className="w-8 h-8 text-orange-600 mb-2" />
                        <p className="text-2xl font-bold text-slate-900">100+</p>
                        <p className="text-sm text-slate-600">Creators</p>
                      </div>
                      <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform border border-amber-100">
                        <Award className="w-8 h-8 text-amber-600 mb-2" />
                        <p className="text-2xl font-bold text-slate-900">1M+</p>
                        <p className="text-sm text-slate-600">Reach</p>
                      </div>
                      <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform border border-orange-100">
                        <MessageSquare className="w-8 h-8 text-orange-600 mb-2" />
                        <p className="text-2xl font-bold text-slate-900">24/7</p>
                        <p className="text-sm text-slate-600">Support</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Services</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Comprehensive digital media solutions tailored for modern creators and influencers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Brand Strategy',
                description: 'Develop a compelling brand identity that resonates with your audience and sets you apart in the digital landscape.',
                icon: '🎯'
              },
              {
                title: 'Content Creation',
                description: 'Professional content production that captures attention and drives engagement across all platforms.',
                icon: '📸'
              },
              {
                title: 'Social Media Management',
                description: 'Strategic planning and execution across all major social platforms to maximise your reach and impact.',
                icon: '📱'
              },
              {
                title: 'Analytics & Insights',
                description: 'Data-driven strategies backed by comprehensive analytics to optimise your digital performance.',
                icon: '📊'
              },
              {
                title: 'Influencer Partnerships',
                description: 'Connect with the right brands and collaborators to expand your influence and revenue streams.',
                icon: '🤝'
              },
              {
                title: 'Monetisation Strategy',
                description: 'Maximise your earning potential through diversified revenue streams and strategic partnerships.',
                icon: '💰'
              }
            ].map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-50 to-amber-50/30 p-8 rounded-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group cursor-pointer border border-slate-200"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Why Choose Aventus?</h2>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                At Aventus Digital Media, we understand the unique challenges facing today's digital creators. Our team combines creative excellence with data-driven strategies to deliver measurable results.
              </p>
              <div className="space-y-6">
                {[
                  {
                    title: 'Expert Team',
                    description: 'Industry veterans with proven track records in digital media and marketing'
                  },
                  {
                    title: 'Tailored Approach',
                    description: 'Custom strategies designed specifically for your unique brand and goals'
                  },
                  {
                    title: 'Proven Results',
                    description: 'Consistent delivery of exceptional outcomes across all client partnerships'
                  }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                        <ChevronRight className="w-6 h-6" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-slate-300">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
              <div className="space-y-8">
                <div>
                  <p className="text-slate-400 mb-2">Client Satisfaction</p>
                  <div className="flex items-end gap-2">
                    <span className="text-5xl font-bold">98%</span>
                    <span className="text-amber-400 mb-2">↑ 5%</span>
                  </div>
                </div>
                <div>
                  <p className="text-slate-400 mb-2">Average ROI Increase</p>
                  <div className="flex items-end gap-2">
                    <span className="text-5xl font-bold">425%</span>
                    <span className="text-orange-400 mb-2">↑ 12%</span>
                  </div>
                </div>
                <div>
                  <p className="text-slate-400 mb-2">Active Campaigns</p>
                  <div className="flex items-end gap-2">
                    <span className="text-5xl font-bold">150+</span>
                    <span className="text-amber-400 mb-2">↑ 25</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Process</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              A streamlined approach to elevating your digital presence
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'We analyse your current presence and identify opportunities for growth'
              },
              {
                step: '02',
                title: 'Strategy',
                description: 'Develop a comprehensive roadmap tailored to your unique goals'
              },
              {
                step: '03',
                title: 'Execution',
                description: 'Implement campaigns with precision and creative excellence'
              },
              {
                step: '04',
                title: 'Optimisation',
                description: 'Continuously refine and improve based on performance data'
              }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-5xl font-bold text-slate-200 mb-4">{item.step}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600">{item.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ChevronRight className="w-8 h-8 text-slate-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-xl text-slate-300 mb-10 leading-relaxed">
            Join hundreds of successful creators who have elevated their brands with Aventus Digital Media.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:info@aventusdigital.co.uk" className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-4 rounded-lg hover:from-amber-600 hover:to-orange-700 transition-all transform font-medium shadow-[0_6px_0_0_rgba(217,119,6,0.3)] hover:shadow-[0_3px_0_0_rgba(217,119,6,0.3)] hover:translate-y-[3px] active:shadow-none active:translate-y-[6px]">
              Get in Touch
            </a>
            <a href="tel:+441213841333" className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all font-medium shadow-[0_6px_0_0_rgba(255,255,255,0.2)] hover:shadow-[0_3px_0_0_rgba(255,255,255,0.2)] hover:translate-y-[3px] active:shadow-none active:translate-y-[6px]">
              Call Us Today
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="mb-4">
                <span className="text-2xl font-bold text-white">AVENTUS</span>
              </div>
              <p className="text-slate-400 mb-4 max-w-sm">
                Empowering creators and digital personalities to reach their full potential through strategic media marketing.
              </p>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#process" className="hover:text-white transition-colors">Process</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li>info@aventusdigital.co.uk</li>
                <li>+44 121 384 1333</li>
                <li>England, United Kingdom</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p>&copy; 2025 Aventus Digital Media. All rights reserved.</p>
              <div className="flex gap-6 text-sm">
                <a href="/legal/terms-of-use.html" className="hover:text-white transition-colors">Terms of Use</a>
                <a href="/legal/privacy-policy.html" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="/legal/disclaimer.html" className="hover:text-white transition-colors">Disclaimer</a>
                <a href="/legal/company-info.html" className="hover:text-white transition-colors">Company Info</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/441213841333"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] hover:bg-[#20BD5A] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-110 z-50 group animate-bounce-subtle"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-slate-900 text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Chat on WhatsApp
        </span>
      </a>
    </div>
  );
}

export default App;
