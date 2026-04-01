/* Human-Crafted Legal Tech Brand
 * - Playfair Display for headlines (sophistication)
 * - Deep Navy (#0F172A) + Burnt Orange (#EA580C)
 * - Asymmetric layouts, real photography, human touches
 * - Professional firm credibility
 */

import React, { useEffect, useRef, useState } from 'react';
import { Button } from './components/ui/Button';
import { Card } from './components/ui/Card';
import Logo from './components/Logo';

// Custom hook for scroll animations
const useScrollReveal = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return [ref, isVisible];
};

// Icons as simple components
const ArrowRight = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);

const CheckCircle2 = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export default function Home({ onNavigateContact, onNavigate }) {
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [socialProofRef, socialProofVisible] = useScrollReveal();
  const [differentiatorRef, differentiatorVisible] = useScrollReveal();
  const [valuePropRef, valuePropVisible] = useScrollReveal();
  const [servicesRef, servicesVisible] = useScrollReveal();
  const [timelineRef, timelineVisible] = useScrollReveal();
  const [frameworkRef, frameworkVisible] = useScrollReveal();
  const [integrationRef, integrationVisible] = useScrollReveal();
  const [teamRef, teamVisible] = useScrollReveal();
  const [trustRef, trustVisible] = useScrollReveal();

  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <style>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideDown {
          from {
            opacity: 0;
            max-height: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            max-height: 500px;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-down {
          animation: fadeInDown 0.8s ease-out forwards;
        }
        
        .animate-slide-down {
          animation: slideDown 0.3s ease-out forwards;
        }
        
        .opacity-0 {
          opacity: 0;
        }
        
        /* Hide scrollbar but keep functionality */
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      {/* Hero Section - Nav + Hero share one background container */}
      <section className="relative pb-16 sm:pb-20 md:pb-28 overflow-hidden" style={{ background: 'linear-gradient(to bottom right, #0A1628, #1A2740, #0A1628)' }}>

        {/* Navigation - inside hero for seamless background */}
        <nav className="relative z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 md:h-20">
              <Logo variant="inverse" size="small" className="h-10 md:h-11 w-auto" />
              
              <div className="hidden md:flex items-center gap-8">
                <a href="#how-it-works" className="text-sm font-semibold transition-colors" style={{ color: 'rgba(255, 255, 255, 0.85)' }} onMouseEnter={(e) => e.target.style.color = '#C9A961'} onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.85)'}>How it Works</a>
                <a href="#lawfirm-in-a-box" className="text-sm font-semibold transition-colors" style={{ color: 'rgba(255, 255, 255, 0.85)' }} onMouseEnter={(e) => e.target.style.color = '#C9A961'} onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.85)'}>LawFirm In A Box</a>
                <button
                  className="text-sm font-semibold transition-colors"
                  style={{ color: 'rgba(255, 255, 255, 0.85)', background: 'none', border: 'none', cursor: 'pointer' }}
                  onMouseEnter={(e) => e.target.style.color = '#C9A961'}
                  onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.85)'}
                  onClick={() => onNavigate('metrics')}
                >
                  Metrics
                </button>
                
                <div className="relative" onMouseEnter={() => setServicesDropdownOpen(true)} onMouseLeave={() => setServicesDropdownOpen(false)}>
                  <button className="text-sm font-semibold transition-colors flex items-center gap-1" style={{ color: servicesDropdownOpen ? '#C9A961' : 'rgba(255, 255, 255, 0.85)' }}>
                    Services
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {servicesDropdownOpen && (
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 pt-2 w-[720px] max-w-[calc(100vw-2rem)]">
                      <div className="rounded-lg shadow-2xl" style={{ backgroundColor: '#0A1628', border: '1px solid rgba(201, 169, 97, 0.2)' }}>
                        <div className="grid grid-cols-3 gap-6 p-8">
                        {/* Fractional Services */}
                        <div>
                          <h3 className="text-sm font-bold mb-4 pb-2 border-b" style={{ color: '#C9A961', borderColor: 'rgba(201, 169, 97, 0.3)' }}>Fractional Services</h3>
                          <ul className="space-y-2">
                            {[
                              { label: 'Chief Operating Officer', id: 'fractional-coo' },
                              { label: 'Chief Financial Officer', id: 'fractional-cfo' },
                              { label: 'Bookkeeping & IOLTA', id: 'bookkeeping' },
                              { label: 'HR & Payroll', id: 'hr-payroll' },
                              { label: 'Chief Information Officer', id: 'fractional-cio' },
                              { label: 'Chief Marketing Officer', id: 'fractional-cmo' },
                              { label: 'Chief AI Officer', id: 'fractional-caio' },
                              { label: 'Tax Strategy', id: 'tax-strategy' },
                            ].map(({ label, id }) => (
                              <li key={id}>
                                <button
                                  onClick={() => { onNavigate(id); setServicesDropdownOpen(false); }}
                                  className="text-xs block py-1 transition-colors text-left w-full"
                                  style={{ color: 'rgba(255, 255, 255, 0.7)', background: 'none', border: 'none', cursor: 'pointer' }}
                                  onMouseEnter={(e) => (e.target.style.color = '#C9A961')}
                                  onMouseLeave={(e) => (e.target.style.color = 'rgba(255, 255, 255, 0.7)')}
                                >
                                  {label}
                                </button>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        {/* Litigation Finance */}
                        <div>
                          <h3 className="text-sm font-bold mb-4 pb-2 border-b" style={{ color: '#C9A961', borderColor: 'rgba(201, 169, 97, 0.3)' }}>Litigation Finance</h3>
                          <ul className="space-y-2">
                            <li><a href="#services" className="text-xs block py-1 transition-colors" style={{ color: 'rgba(255, 255, 255, 0.7)' }} onMouseEnter={(e) => e.target.style.color = '#C9A961'} onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.7)'}>Growth Marketing Loans</a></li>
                            <li><a href="#services" className="text-xs block py-1 transition-colors" style={{ color: 'rgba(255, 255, 255, 0.7)' }} onMouseEnter={(e) => e.target.style.color = '#C9A961'} onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.7)'}>Pre-Settlement Advance</a></li>
                            <li><a href="#services" className="text-xs block py-1 transition-colors" style={{ color: 'rgba(255, 255, 255, 0.7)' }} onMouseEnter={(e) => e.target.style.color = '#C9A961'} onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.7)'}>Case Cost Advance</a></li>
                            <li><a href="#services" className="text-xs block py-1 transition-colors" style={{ color: 'rgba(255, 255, 255, 0.7)' }} onMouseEnter={(e) => e.target.style.color = '#C9A961'} onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.7)'}>Medical Funding</a></li>
                          </ul>
                        </div>
                        
                        {/* Advisory */}
                        <div>
                          <h3 className="text-sm font-bold mb-4 pb-2 border-b" style={{ color: '#C9A961', borderColor: 'rgba(201, 169, 97, 0.3)' }}>Advisory</h3>
                          <ul className="space-y-2">
                            <li><a href="#services" className="text-xs block py-1 transition-colors" style={{ color: 'rgba(255, 255, 255, 0.7)' }} onMouseEnter={(e) => e.target.style.color = '#C9A961'} onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.7)'}>Mergers & Acquisitions</a></li>
                            <li><a href="#services" className="text-xs block py-1 transition-colors" style={{ color: 'rgba(255, 255, 255, 0.7)' }} onMouseEnter={(e) => e.target.style.color = '#C9A961'} onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.7)'}>Management Services Organization</a></li>
                            <li><a href="#services" className="text-xs block py-1 transition-colors" style={{ color: 'rgba(255, 255, 255, 0.7)' }} onMouseEnter={(e) => e.target.style.color = '#C9A961'} onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.7)'}>Alternative Business Structure</a></li>
                            <li><a href="#services" className="text-xs block py-1 transition-colors" style={{ color: 'rgba(255, 255, 255, 0.7)' }} onMouseEnter={(e) => e.target.style.color = '#C9A961'} onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.7)'}>AI Hub & Innovation Advisory</a></li>
                          </ul>
                        </div>
                      </div>
                      </div>
                    </div>
                  )}
                </div>
                
                <a href="#team" className="text-sm font-semibold transition-colors" style={{ color: 'rgba(255, 255, 255, 0.85)' }} onMouseEnter={(e) => e.target.style.color = '#C9A961'} onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.85)'}>About</a>
              </div>
              
              {/* Mobile menu button */}
              <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
              
              <Button className="hidden md:block text-white text-sm md:text-base font-bold shadow-lg hover:shadow-xl transition-all px-5 py-2.5" style={{ backgroundColor: '#C9A961' }} onMouseEnter={(e) => e.target.style.backgroundColor = '#B8941F'} onMouseLeave={(e) => e.target.style.backgroundColor = '#C9A961'} onClick={onNavigateContact}>
                Schedule a Call
              </Button>
            </div>
          </div>
          
          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden max-h-[70vh] overflow-y-auto animate-slide-down" style={{ backgroundColor: '#0A1628' }}>
              <div className="px-4 pt-2 pb-4 space-y-4">
                <a href="#how-it-works" className="block py-2 text-sm font-semibold" style={{ color: 'rgba(255, 255, 255, 0.85)' }} onClick={() => setMobileMenuOpen(false)}>How it Works</a>
                <a href="#lawfirm-in-a-box" className="block py-2 text-sm font-semibold" style={{ color: 'rgba(255, 255, 255, 0.85)' }} onClick={() => setMobileMenuOpen(false)}>LawFirm In A Box</a>
                <button
                  className="block py-2 text-sm font-semibold w-full text-left"
                  style={{ color: 'rgba(255, 255, 255, 0.85)', background: 'none', border: 'none', cursor: 'pointer' }}
                  onClick={() => { onNavigate('metrics'); setMobileMenuOpen(false); }}
                >
                  Metrics
                </button>
                
                {/* Services Section */}
                <div>
                  <div className="py-2 text-sm font-semibold" style={{ color: '#C9A961' }}>Services</div>
                  
                  <div className="ml-4 mt-2 space-y-3">
                    {/* Fractional Services */}
                    <div>
                      <h4 className="text-xs font-bold mb-1" style={{ color: '#C9A961' }}>Fractional Services</h4>
                      <ul className="space-y-1">
                        {[
                          { label: 'Chief Operating Officer', id: 'fractional-coo' },
                          { label: 'Chief Financial Officer', id: 'fractional-cfo' },
                          { label: 'Bookkeeping & IOLTA', id: 'bookkeeping' },
                          { label: 'HR & Payroll', id: 'hr-payroll' },
                          { label: 'Chief Information Officer', id: 'fractional-cio' },
                          { label: 'Chief Marketing Officer', id: 'fractional-cmo' },
                          { label: 'Chief AI Officer', id: 'fractional-caio' },
                          { label: 'Tax Strategy', id: 'tax-strategy' },
                        ].map(({ label, id }) => (
                          <li key={id}>
                            <button
                              onClick={() => { onNavigate(id); setMobileMenuOpen(false); }}
                              className="block py-0.5 text-xs text-left w-full"
                              style={{ color: 'rgba(255, 255, 255, 0.7)', background: 'none', border: 'none', cursor: 'pointer' }}
                            >
                              {label}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Litigation Finance */}
                    <div>
                      <h4 className="text-xs font-bold mb-1" style={{ color: '#C9A961' }}>Litigation Finance</h4>
                      <ul className="space-y-1">
                        <li><a href="#services" className="block py-0.5 text-xs" style={{ color: 'rgba(255, 255, 255, 0.7)' }} onClick={() => setMobileMenuOpen(false)}>Growth Marketing Loans</a></li>
                        <li><a href="#services" className="block py-0.5 text-xs" style={{ color: 'rgba(255, 255, 255, 0.7)' }} onClick={() => setMobileMenuOpen(false)}>Pre-Settlement • Case Cost</a></li>
                        <li><a href="#services" className="block py-0.5 text-xs" style={{ color: 'rgba(255, 255, 255, 0.7)' }} onClick={() => setMobileMenuOpen(false)}>Medical Funding</a></li>
                      </ul>
                    </div>
                    
                    {/* Advisory */}
                    <div>
                      <h4 className="text-xs font-bold mb-1" style={{ color: '#C9A961' }}>Advisory</h4>
                      <ul className="space-y-1">
                        <li><a href="#services" className="block py-0.5 text-xs" style={{ color: 'rgba(255, 255, 255, 0.7)' }} onClick={() => setMobileMenuOpen(false)}>M&A • MSO • ABS</a></li>
                        <li><a href="#services" className="block py-0.5 text-xs" style={{ color: 'rgba(255, 255, 255, 0.7)' }} onClick={() => setMobileMenuOpen(false)}>AI Hub & Innovation</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <a href="#team" className="block py-2 text-sm font-semibold" style={{ color: 'rgba(255, 255, 255, 0.85)' }} onClick={() => setMobileMenuOpen(false)}>About</a>
              </div>
            </div>
          )}
        </nav>
        
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10 pt-12 sm:pt-16 md:pt-24">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-normal mb-8 sm:mb-10 md:mb-12 mt-8 sm:mt-10 leading-tight" style={{ color: '#FFFFFF', letterSpacing: '-0.02em' }}>
              Human Centric + AI =<br />More Cases, Less Overhead
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl mb-10 sm:mb-12 leading-relaxed max-w-3xl mx-auto font-light" style={{ color: 'rgba(255, 255, 255, 0.95)' }}>
              LawBOX is the nation's Gold Standard for AI powered end to end pre-litigation. Effortlessly remove friction from Intake to Settlement, handle more cases with less overhead.
            </p>
            
            <div className="flex justify-center">
              <Button className="text-base sm:text-lg px-8 py-3.5 font-semibold rounded-lg transition-all hover:scale-105" style={{ backgroundColor: '#FFFFFF', color: '#0A1628' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#F5F5F5'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#FFFFFF'; }} onClick={onNavigateContact}>
                Schedule a Call
              </Button>
            </div>
          
          </div>
        </div>
      </section>

      {/* Main Value Prop - Asymmetric layout with real photography */}
      <section ref={valuePropRef} className={`py-16 ${valuePropVisible ? 'animate-fade-in-down' : 'opacity-0'}`} style={{ backgroundColor: '#FAFAF8' }} id="how-it-works">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-md text-xs sm:text-sm font-bold mb-6" style={{ backgroundColor: '#C9A961', color: 'white' }}>
              <span className="w-2 h-2 rounded-full animate-pulse flex-shrink-0" style={{ backgroundColor: 'white' }}></span>
              Trusted by top personal injury firms nationwide
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-12">
            {/* How it Works Content */}
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-white mb-6" style={{ backgroundColor: '#C9A961' }}>
                How it Works
              </div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6" style={{ color: '#0A1628' }}>
                AI powered humans in the loop operations team handles your <span style={{ color: '#C9A961' }}>cases from intake to demand</span>
              </h2>
              <p className="text-lg mb-8 leading-relaxed font-light max-w-3xl mx-auto" style={{ color: '#2B3544' }}>
                From the moment a lead comes in to final settlement, LawBOX manages every case for one flat fee. No more hiring, training, or managing case staff.
              </p>
              <div className="flex justify-center">
                <Button className="text-white font-bold shadow-lg px-6 py-3" style={{ backgroundColor: '#C9A961', boxShadow: '0 10px 25px rgba(201, 169, 97, 0.2)' }} onMouseEnter={(e) => e.target.style.backgroundColor = '#B8941F'} onMouseLeave={(e) => e.target.style.backgroundColor = '#C9A961'} onClick={onNavigateContact}>
                  Schedule a Call
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
            
            {/* Client testimonial */}
            <div className="text-center p-8">
              <svg className="w-12 h-12 mb-6 opacity-20 mx-auto" fill="currentColor" viewBox="0 0 24 24" style={{ color: '#C9A961' }}>
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-2xl md:text-3xl italic mb-6 leading-relaxed font-light max-w-3xl mx-auto" style={{ color: '#0A1628' }}>LawBOX reduced our case prep time by 60% while increasing our settlement values. It's like having a dedicated ops team without the overhead.</p>
              <p className="text-sm font-bold" style={{ color: '#C9A961' }}>— Sarah Chen, Managing Partner, Chen & Associates</p>
            </div>
          </div>
        </div>
      </section>

      {/* LawFirm In A Box Section */}
      <section className="py-16 overflow-hidden" style={{ backgroundColor: '#1A2740' }} id="lawfirm-in-a-box">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">Hyperscale Your Firm</h2>
            <p className="text-lg sm:text-xl md:text-2xl text-white">LawBOX - Law Firm In A Box™</p>
          </div>

          {/* Flow Diagram */}
          <div className="pb-4">
            <div className="flex flex-col md:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-3 lg:gap-6">
              {/* Marketing Growth Capital */}
              <div className="w-full max-w-xs md:w-28 lg:w-36">
                <div className="border-2 rounded-lg p-4 md:p-3 lg:p-5 h-full flex flex-col items-center justify-center text-center" style={{ borderColor: '#C9A961', backgroundColor: 'transparent' }}>
                  <svg className="w-10 h-10 md:w-8 md:h-8 lg:w-10 lg:h-10 mb-3 md:mb-2 lg:mb-3" fill="none" stroke="#C9A961" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="font-bold text-white text-sm md:text-xs lg:text-sm mb-2">Marketing Growth Capital</h3>
                  <p className="text-xs md:text-[0.65rem] lg:text-xs" style={{ color: '#C9A961' }}>Litigation Finance</p>
                </div>
              </div>

              {/* Arrow */}
              <svg className="w-8 h-8 rotate-90 md:rotate-0 md:w-6 md:h-6 lg:w-8 lg:h-8 flex-shrink-0" fill="#C9A961" viewBox="0 0 24 24">
                <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/>
              </svg>

              {/* Lead Gen */}
              <div className="w-full max-w-xs md:w-28 lg:w-36">
                <div className="border-2 rounded-lg p-4 md:p-3 lg:p-5 h-full flex flex-col items-center justify-center text-center" style={{ borderColor: '#C9A961', backgroundColor: 'transparent' }}>
                  <svg className="w-10 h-10 md:w-8 md:h-8 lg:w-10 lg:h-10 mb-3 md:mb-2 lg:mb-3" fill="none" stroke="#C9A961" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                  </svg>
                  <h3 className="font-bold text-white text-sm md:text-xs lg:text-sm mb-2">Lead Gen</h3>
                  <p className="text-xs md:text-[0.65rem] lg:text-xs" style={{ color: '#C9A961' }}>Marketing Partners</p>
                  <p className="text-xs md:text-[0.65rem] lg:text-xs" style={{ color: '#C9A961' }}>Plaintiff Acquisition</p>
                </div>
              </div>

              {/* Arrow */}
              <svg className="w-8 h-8 rotate-90 md:rotate-0 md:w-6 md:h-6 lg:w-8 lg:h-8 flex-shrink-0" fill="#C9A961" viewBox="0 0 24 24">
                <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/>
              </svg>

              {/* Signed Retainer */}
              <div className="w-full max-w-xs md:w-32 lg:w-36">
                <div className="border-2 rounded-lg p-4 md:p-4 lg:p-5 h-full flex flex-col items-center justify-center text-center" style={{ borderColor: '#C9A961', backgroundColor: 'transparent' }}>
                  <svg className="w-10 h-10 md:w-10 md:h-10 mb-3 md:mb-3" fill="none" stroke="#C9A961" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <h3 className="font-bold text-white text-sm md:text-sm mb-2 md:mb-1">Signed Retainer</h3>
                  <p className="text-xs md:text-xs" style={{ color: '#C9A961' }}>Client Onboarding</p>
                  <p className="text-xs md:text-xs" style={{ color: '#C9A961' }}>Intake Complete</p>
                </div>
              </div>

              {/* Arrow */}
              <svg className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8" fill="#C9A961" viewBox="0 0 24 24">
                <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/>
              </svg>

              {/* LawBOX - Center Large Box */}
              <div className="w-full max-w-xl md:w-96 lg:w-[28rem]">
                <div className="border-2 rounded-lg p-4 md:p-5 lg:p-6 h-full" style={{ borderColor: '#C9A961', backgroundColor: 'rgba(201, 169, 97, 0.1)' }}>
                  <div className="flex items-center justify-center mb-3 md:mb-4">
                    <svg className="w-8 h-8 md:w-10 md:h-10 mr-2" fill="none" stroke="#C9A961" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <h3 className="font-bold text-white text-base md:text-lg lg:text-xl">LawBOX™</h3>
                  </div>
                  <p className="text-center font-bold mb-3 md:mb-4 text-xs md:text-sm" style={{ color: '#C9A961' }}>Full Service Operations</p>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs md:text-sm text-white">
                    <p>• Document Collection</p>
                    <p>• Medical Records</p>
                    <p>• Journey of Care</p>
                    <p>• Treatment</p>
                    <p>• Chronologies</p>
                    <p>• Demand Writing</p>
                    <p>• Case Management</p>
                    <p>• AI + Expert Team</p>
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <svg className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8" fill="#C9A961" viewBox="0 0 24 24">
                <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/>
              </svg>

              {/* Demand Ready */}
              <div className="w-full max-w-xs md:w-32 lg:w-36">
                <div className="border-2 rounded-lg p-4 md:p-4 lg:p-5 h-full flex flex-col items-center justify-center text-center" style={{ borderColor: '#C9A961', backgroundColor: 'transparent' }}>
                  <svg className="w-10 h-10 md:w-10 md:h-10 mb-3 md:mb-3" fill="none" stroke="#C9A961" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="font-bold text-white text-sm md:text-sm mb-2 md:mb-1">Demand Ready</h3>
                  <p className="text-xs md:text-xs" style={{ color: '#C9A961' }}>Settlement Ready</p>
                  <p className="text-xs md:text-xs" style={{ color: '#C9A961' }}>Cases Delivered</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Summary */}
          <div className="mt-12 text-center">
            <p className="text-lg sm:text-xl md:text-2xl text-white mb-4">
              <span className="font-bold">Capital</span> <span style={{ color: '#C9A961' }}>→</span> <span className="font-bold">Lead Gen</span> <span style={{ color: '#C9A961' }}>→</span> <span className="font-bold">Signed Retainer</span> <span style={{ color: '#C9A961' }}>→</span> <span className="font-bold">Demand Ready</span>
            </p>
            <p className="text-base sm:text-lg md:text-xl text-white font-semibold">Eliminate Friction, Maximize Output.</p>
          </div>
        </div>
      </section>

      {/* Services Section - Detailed breakdown with new color scheme */}
      <section ref={servicesRef} className={`py-20 bg-white texture-overlay ${servicesVisible ? 'animate-fade-in-down' : 'opacity-0'}`} id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6" style={{ color: '#0A1628' }}>Pre Litigation Services</h2>
            <p className="text-xl max-w-3xl mx-auto font-light leading-relaxed" style={{ color: '#64748B' }}>Transform your operations with AI-powered teams & case managers that work around the clock</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Intake Card */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
              <div className="p-8 lg:p-10">
                <h3 className="text-2xl lg:text-3xl font-bold mb-2" style={{ color: '#0A1628' }}><span style={{ color: '#C9A961', WebkitTextStroke: '1px #C9A961' }}>Intake</span></h3>
                <p className="text-sm mb-4 font-medium" style={{ color: '#888888' }}>That Captures Every Opportunity</p>
                <p className="leading-relaxed" style={{ color: '#64748B' }}>
                  AI monitors every intake call 24/7, identifies lost leads in real time, and alerts you to rescue them before they sign with another firm. Multilingual specialists qualify all leads.
                </p>
              </div>
            </div>

            {/* Document Collection Card */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
              <div className="p-8 lg:p-10">
                <h3 className="text-2xl lg:text-3xl font-bold mb-4" style={{ color: '#0A1628' }}><span style={{ color: '#C9A961', WebkitTextStroke: '1px #C9A961' }}>Document Collection & Claims Setup</span></h3>
                <p className="leading-relaxed" style={{ color: '#64748B' }}>
                  Police reports, medical retrievals, insurance claims setup, and facts of loss—all handled seamlessly.
                </p>
              </div>
            </div>

            {/* Journey of Care Card - Full Width */}
            <div className="md:col-span-2 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
              <div className="p-8 lg:p-10">
                <h3 className="text-2xl lg:text-3xl font-bold mb-4" style={{ color: '#0A1628' }}><span style={{ color: '#C9A961', WebkitTextStroke: '1px #C9A961' }}>Journey Of Care</span></h3>
                <p className="leading-relaxed mb-6 text-lg" style={{ color: '#64748B' }}>
                  Keep clients treating until maximum medical improvement. We check in weekly to ensure clients complete their treatment plan, because finished treatment means higher settlements.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-0.5" style={{ color: '#C9A961' }} />
                    <div>
                      <div className="font-semibold mb-1" style={{ color: '#0A1628' }}>90% Faster Retrieval</div>
                      <div className="text-sm leading-relaxed" style={{ color: '#64748B' }}>No more spending hours hunting facilities</div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-0.5" style={{ color: '#C9A961' }} />
                    <div>
                      <div className="font-semibold mb-1" style={{ color: '#0A1628' }}>Auto Provider ID</div>
                      <div className="text-sm leading-relaxed" style={{ color: '#64748B' }}>We find where they were treated automatically</div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-0.5" style={{ color: '#C9A961' }} />
                    <div>
                      <div className="font-semibold mb-1" style={{ color: '#0A1628' }}>Complete Package</div>
                      <div className="text-sm leading-relaxed" style={{ color: '#64748B' }}>Bills, notes, imaging—organized & ready</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Medical Chronologies Card */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
              <div className="p-8 lg:p-10">
                <h3 className="text-2xl lg:text-3xl font-bold mb-2" style={{ color: '#0A1628' }}><span style={{ color: '#C9A961', WebkitTextStroke: '1px #C9A961' }}>Medical Chronologies</span></h3>
                <p className="text-sm mb-4 font-medium" style={{ color: '#888888' }}>That Save 50+ Hours Per Case</p>
                <p className="leading-relaxed" style={{ color: '#64748B' }}>
                  Hundreds of pages transformed into organized, searchable timelines with source citations, delivered in hours. Process records 8x faster than manual review.
                </p>
              </div>
            </div>

            {/* Demand Letters Card */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
              <div className="p-8 lg:p-10">
                <h3 className="text-2xl lg:text-3xl font-bold mb-2" style={{ color: '#0A1628' }}><span style={{ color: '#C9A961', WebkitTextStroke: '1px #C9A961' }}>Demand Letters</span></h3>
                <p className="text-sm mb-4 font-medium" style={{ color: '#888888' }}>That Sound Like Your Firm, Not a Robot</p>
                <p className="leading-relaxed" style={{ color: '#64748B' }}>
                  Demands built to your specifications with adjuster psychology baked in. Sounds exactly like your firm, not a robot. Delivered in 48 hours with unlimited revisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* From Lead to Settlement Section */}
      <section ref={timelineRef} className={`py-16 ${timelineVisible ? 'animate-fade-in-down' : 'opacity-0'}`} style={{ backgroundColor: '#FAFAF8' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6" style={{ color: '#0A1628' }}>
              From Lead to Settlement. <span style={{ color: '#C9A961' }}>Effortlessly.</span>
            </h2>
          </div>

          <div className="relative">
            {/* Desktop Timeline */}
            <div className="hidden lg:block">
              <div className="grid grid-cols-6 gap-4 relative">
                {/* Connecting Line */}
                <div className="absolute top-16 left-0 right-0 h-0.5" style={{ backgroundColor: '#E5E7EB' }}></div>
                
                {/* Step 1: LEADS */}
                <div className="relative text-center group">
                  <div className="relative inline-flex items-center justify-center w-32 h-32 bg-white rounded-3xl shadow-lg group-hover:shadow-2xl transition-all duration-300 border-2 mb-6" style={{ borderColor: '#E5E7EB' }}>
                    <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#64748B' }}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                    <div className="absolute -bottom-3 -right-3 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold shadow-lg" style={{ backgroundColor: '#0A1628' }}>1</div>
                  </div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: '#0A1628' }}>LEADS</h3>
                </div>

                {/* Step 2: INTAKE */}
                <div className="relative text-center group">
                  <div className="relative inline-flex items-center justify-center w-32 h-32 bg-white rounded-3xl shadow-lg group-hover:shadow-2xl transition-all duration-300 border-2 mb-6" style={{ borderColor: '#E5E7EB' }}>
                    <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#64748B' }}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div className="absolute -bottom-3 -right-3 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold shadow-lg" style={{ backgroundColor: '#0A1628' }}>2</div>
                  </div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: '#0A1628' }}>INTAKE</h3>
                </div>

                {/* Step 3: SIGNED RETAINER */}
                <div className="relative text-center group">
                  <div className="relative inline-flex items-center justify-center w-32 h-32 bg-white rounded-3xl shadow-lg group-hover:shadow-2xl transition-all duration-300 border-2 mb-6" style={{ borderColor: '#E5E7EB' }}>
                    <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#64748B' }}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <div className="absolute -bottom-3 -right-3 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold shadow-lg" style={{ backgroundColor: '#0A1628' }}>3</div>
                  </div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: '#0A1628' }}>SIGNED RETAINER</h3>
                </div>

                {/* Step 4: PRE LITIGATION */}
                <div className="relative text-center group">
                  <div className="relative inline-flex items-center justify-center w-32 h-32 bg-white rounded-3xl shadow-lg group-hover:shadow-2xl transition-all duration-300 border-2 mb-6" style={{ borderColor: '#C9A961' }}>
                    <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#C9A961' }}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div className="absolute -bottom-3 -right-3 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold shadow-lg" style={{ backgroundColor: '#C9A961' }}>4</div>
                  </div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: '#0A1628' }}>PRE LITIGATION</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#64748B' }}>Medical records, Police reports, Chronology, Liability, Damages</p>
                </div>

                {/* Step 5: DEMAND LETTER */}
                <div className="relative text-center group">
                  <div className="relative inline-flex items-center justify-center w-32 h-32 bg-white rounded-3xl shadow-lg group-hover:shadow-2xl transition-all duration-300 border-2 mb-6" style={{ borderColor: '#C9A961' }}>
                    <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#C9A961' }}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div className="absolute -bottom-3 -right-3 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold shadow-lg" style={{ backgroundColor: '#C9A961' }}>5</div>
                  </div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: '#0A1628' }}>DEMAND LETTER</h3>
                </div>

                {/* Step 6: LIEN RESOLUTION */}
                <div className="relative text-center group">
                  <div className="relative inline-flex items-center justify-center w-32 h-32 bg-white rounded-3xl shadow-lg group-hover:shadow-2xl transition-all duration-300 border-2 mb-6" style={{ borderColor: '#C9A961' }}>
                    <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#C9A961' }}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div className="absolute -bottom-3 -right-3 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold shadow-lg" style={{ backgroundColor: '#C9A961' }}>6</div>
                  </div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: '#0A1628' }}>LIEN RESOLUTION</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#64748B' }}>Medicare/Medicaid negotiation, Hospital liens, Settlement distribution</p>
                </div>
              </div>
            </div>

            {/* Mobile/Tablet Timeline */}
            <div className="lg:hidden space-y-8">
              <div className="flex items-start gap-4">
                <div className="relative flex-shrink-0">
                  <div className="w-20 h-20 bg-white rounded-2xl shadow-lg border-2 border-navy-200 flex items-center justify-center">
                    <svg className="w-10 h-10 text-navy-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-navy-700 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">LEADS</h3>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="relative flex-shrink-0">
                  <div className="w-20 h-20 bg-white rounded-2xl shadow-lg border-2 border-navy-200 flex items-center justify-center">
                    <svg className="w-10 h-10 text-navy-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-navy-700 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">INTAKE</h3>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="relative flex-shrink-0">
                  <div className="w-20 h-20 bg-white rounded-2xl shadow-lg border-2 border-navy-200 flex items-center justify-center">
                    <svg className="w-10 h-10 text-navy-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-navy-700 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">SIGNED RETAINER</h3>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="relative flex-shrink-0">
                  <div className="w-20 h-20 bg-white rounded-2xl shadow-lg border-2 border-burnt-200 flex items-center justify-center">
                    <svg className="w-10 h-10 text-burnt-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-burnt-600 rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">PRE LITIGATION</h3>
                  <p className="text-sm text-slate-600">Medical records, Police reports, Chronology, Liability, Damages</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="relative flex-shrink-0">
                  <div className="w-20 h-20 bg-white rounded-2xl shadow-lg border-2 border-burnt-200 flex items-center justify-center">
                    <svg className="w-10 h-10 text-burnt-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-burnt-600 rounded-full flex items-center justify-center text-white font-bold text-sm">5</div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">DEMAND LETTER</h3>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="relative flex-shrink-0">
                  <div className="w-20 h-20 bg-white rounded-2xl shadow-lg border-2 border-burnt-200 flex items-center justify-center">
                    <svg className="w-10 h-10 text-burnt-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-burnt-600 rounded-full flex items-center justify-center text-white font-bold text-sm">6</div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">LIEN RESOLUTION</h3>
                  <p className="text-sm text-slate-600">Medicare/Medicaid negotiation, Hospital liens, Settlement distribution</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Bar - Trusted Integrations */}
      <section ref={socialProofRef} className={`py-20 border-y border-gray-200 ${socialProofVisible ? 'animate-fade-in-down' : 'opacity-0'}`} style={{ backgroundColor: '#FAFAF8' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center mb-10 text-sm font-bold uppercase tracking-widest" style={{ color: '#64748B' }}>Trusted Integrations</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="flex items-center justify-center">
                <img src="/images/filevine.png" alt="Filevine" className="w-32 h-auto object-contain grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100" />
            </div>
            <div className="flex items-center justify-center">
                <img src="/images/smokeball.png" alt="Smokeball" className="w-40 h-auto object-contain grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100" />
            </div>
            <div className="flex items-center justify-center">
                <img src="/images/litify.png" alt="Litify" className="w-36 h-auto object-contain grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100" />
            </div>
            <div className="flex items-center justify-center">
                <img src="/images/casepeer.png" alt="CASEpeer" className="w-36 h-auto object-contain grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100" />
            </div>
            <div className="flex items-center justify-center">
                <img src="/images/mycase.png" alt="MyCase" className="w-36 h-auto object-contain grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100" />
            </div>
            <div className="flex items-center justify-center">
                <img src="/images/clio.png" alt="Clio" className="w-28 h-auto object-contain grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100" />
            </div>
            </div>
        </div>
      </section>

      {/* Support Services Framework Section */}
      <section ref={frameworkRef} className={`py-24 ${frameworkVisible ? 'animate-fade-in-down' : 'opacity-0'}`} style={{ background: 'linear-gradient(to bottom, #FFFFFF, #FAFAF8)' }} id="support-services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#0A1628' }}>
              Support Services <span style={{ color: '#C9A961' }}>Framework</span>
            </h2>
            <p className="text-xl max-w-2xl mx-auto" style={{ color: '#64748B' }}>Everything your firm needs to scale. Nothing it doesn't.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Fractional Services */}
            <div className="bg-white rounded-lg p-8 border" style={{ borderColor: '#E5E7EB' }}>
              <h3 className="text-xl font-bold mb-6 pb-3" style={{ color: '#0A1628', borderBottom: '2px solid #C9A961' }}>Fractional Services</h3>
              <ul className="space-y-3">
                {[
                  { label: 'Chief Information Officer', id: 'fractional-cio' },
                  { label: 'Chief Operating Officer', id: 'fractional-coo' },
                  { label: 'Chief Financial Officer', id: 'fractional-cfo' },
                  { label: 'Chief Marketing Officer', id: 'fractional-cmo' },
                  { label: 'Chief AI Officer', id: 'fractional-caio' },
                  { label: 'Tax Strategist', id: 'tax-strategy' },
                  { label: 'Payroll & HR', id: 'hr-payroll' },
                ].map(({ label, id }) => (
                  <li key={id}>
                    <button
                      onClick={() => onNavigate(id)}
                      className="leading-relaxed text-left w-full transition-colors"
                      style={{ color: '#2B3544', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = '#C9A961')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = '#2B3544')}
                    >
                      {label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Litigation Finance */}
            <div className="bg-white rounded-lg p-8 border" style={{ borderColor: '#E5E7EB' }}>
              <h3 className="text-xl font-bold mb-6 pb-3" style={{ color: '#0A1628', borderBottom: '2px solid #C9A961' }}>Litigation Finance</h3>
              <ul className="space-y-3" style={{ color: '#2B3544' }}>
                <li className="leading-relaxed">Growth Marketing Loans</li>
                <li className="leading-relaxed">Pre-Settlement Advance</li>
                <li className="leading-relaxed">Case Cost Advance</li>
                <li className="leading-relaxed">Medical Funding</li>
              </ul>
            </div>

            {/* Advisory */}
            <div className="bg-white rounded-lg p-8 border" style={{ borderColor: '#E5E7EB' }}>
              <h3 className="text-xl font-bold mb-6 pb-3" style={{ color: '#0A1628', borderBottom: '2px solid #C9A961' }}>Advisory</h3>
              <ul className="space-y-3" style={{ color: '#2B3544' }}>
                <li className="leading-relaxed">Mergers & Acquisitions</li>
                <li className="leading-relaxed">Management Services Organization</li>
                <li className="leading-relaxed">Alternative Business Structure</li>
                <li className="leading-relaxed">AI Hub & Innovation Advisory</li>
              </ul>
            </div>
          </div>

          <div className="text-center rounded-3xl p-12 relative overflow-hidden" style={{ backgroundColor: '#0A1628' }}>
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
              <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full blur-3xl" style={{ backgroundColor: '#C9A961' }}></div>
            </div>
            <p className="text-3xl md:text-4xl font-bold text-white relative z-10">
              World-class infrastructure <span style={{ color: '#C9A961' }}>Fractional cost</span>
            </p>
          </div>
        </div>
      </section>

      <section ref={integrationRef} className={`py-24 ${integrationVisible ? 'animate-fade-in-down' : 'opacity-0'}`} style={{ background: 'linear-gradient(to bottom, #FFFFFF, #FAFAF8)' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6" style={{ color: '#0A1628' }}>Seamless integration with <span style={{ color: '#C9A961' }}>your case management system</span></h2>
          <p className="text-lg mb-12 leading-relaxed max-w-3xl mx-auto" style={{ color: '#64748B' }}>
            We operate and integrate directly within Filevine, Smokeball, Litify, CASEpeer, and all major platforms. Our case managers are specifically trained on each CMS—working inside your existing tools, following your workflows. Every document, update, and communication flows directly into your system. Your team sees everything in real-time, nothing falls through the cracks.
          </p>
          <p className="text-base font-bold mb-8 uppercase tracking-wider" style={{ color: '#0A1628' }}>Integrates with leading case management platforms</p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md flex items-center justify-center h-24">
              <img src="/images/filevine.png" alt="Filevine" className="max-h-12 max-w-full object-contain" />
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md flex items-center justify-center h-24">
              <img src="/images/smokeball.png" alt="Smokeball" className="max-h-12 max-w-full object-contain" />
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md flex items-center justify-center h-24">
              <img src="/images/litify.png" alt="Litify" className="max-h-12 max-w-full object-contain" />
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md flex items-center justify-center h-24">
              <img src="/images/casepeer.png" alt="CASEpeer" className="max-h-12 max-w-full object-contain" />
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md flex items-center justify-center h-24">
              <img src="/images/mycase.png" alt="MyCase" className="max-h-12 max-w-full object-contain" />
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md flex items-center justify-center h-24">
              <img src="/images/clio.png" alt="Clio" className="max-h-12 max-w-full object-contain" />
            </div>
          </div>
        </div>
      </section>

      <section ref={teamRef} className={`py-16 ${teamVisible ? 'animate-fade-in-down' : 'opacity-0'}`} style={{ background: 'linear-gradient(to bottom, #FAFAF8, #FFFFFF)' }} id="team">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4" style={{ color: '#0A1628' }}>Built by PI veterans who've managed <span style={{ color: '#C9A961' }}>thousands of cases</span></h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: '#64748B' }}>
              LawBOX's team brings decades of operational experience from the nation's top personal injury firms, having helped recover millions in settlements. We combine this deep expertise with advanced AI to deliver results you can trust.
            </p>
          </div>
          

        </div>
      </section>

      <section ref={trustRef} className={`py-16 bg-white ${trustVisible ? 'animate-fade-in-down' : 'opacity-0'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4" style={{ color: '#0A1628' }}>Security and transparency you can trust</h2>
            <p className="text-xl" style={{ color: '#64748B' }}>
              The control, compliance, and peace of mind you need to scale confidently
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <h3 className="text-lg font-semibold mb-2">Your brand, amplified</h3>
              <p className="text-sm text-slate-600">LawBOX staff operate as extensions...</p>
            </Card>
            <Card>
              <h3 className="text-lg font-semibold mb-2">Trained on excellence</h3>
              <p className="text-sm text-slate-600">Every team member trained on PI workflows...</p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2000&q=80" alt="Modern office" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ backgroundColor: 'rgba(10, 22, 40, 0.95)' }}></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Ready to scale <span style={{ color: '#C9A961' }}>without limits?</span>
          </h2>
          <p className="text-xl mb-10 leading-relaxed max-w-2xl mx-auto" style={{ color: '#FAFAF8' }}>
            Top PI firms are growing faster by eliminating pre litigation bottlenecks. Focus on winning cases while we handle everything from intake to demand.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="text-white text-lg px-8 py-4 font-semibold shadow-xl" style={{ backgroundColor: '#C9A961', boxShadow: '0 20px 50px rgba(201, 169, 97, 0.25)' }} onMouseEnter={(e) => e.target.style.backgroundColor = '#B8941F'} onMouseLeave={(e) => e.target.style.backgroundColor = '#C9A961'} onClick={onNavigateContact}>
              Schedule a Call
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
          
          <p className="mt-8 text-sm" style={{ color: '#C9A961' }}>Free consultation • No commitment • See results in 30 days</p>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-20" style={{ backgroundColor: '#0A1628' }}></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-20" style={{ backgroundColor: '#C9A961' }}></div>
      </section>

      {/* Footer - Matching Finch's structure */}
      <footer className="py-16" style={{ backgroundColor: '#0A1628' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'Space Grotesk, -apple-system, sans-serif', letterSpacing: '-0.01em' }}>LawBOX</div>
              <p className="text-sm mb-6" style={{ color: '#FAFAF8' }}>
                Scale your firm. Not your overhead.
              </p>
              <div className="flex gap-4">
                <a href="#team" className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors" style={{ backgroundColor: '#2B3544' }} onMouseEnter={(e) => e.target.style.backgroundColor = '#C9A961'} onMouseLeave={(e) => e.target.style.backgroundColor = '#2B3544'}>
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                </a>
                <a href="#team" className="w-10 h-10 bg-slate-800 hover:bg-burnt-600 rounded-lg flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-white">Services</h4>
              <ul className="space-y-3 text-sm" style={{ color: '#64748B' }}>
                <li><a href="#services" className="transition-colors" onMouseEnter={(e) => e.target.style.color = '#C9A961'} onMouseLeave={(e) => e.target.style.color = '#64748B'}>Pre Litigation</a></li>
                <li><a href="#services" className="transition-colors" onMouseEnter={(e) => e.target.style.color = '#C9A961'} onMouseLeave={(e) => e.target.style.color = '#64748B'}>Case Management</a></li>
                <li><a href="#services" className="transition-colors" onMouseEnter={(e) => e.target.style.color = '#C9A961'} onMouseLeave={(e) => e.target.style.color = '#64748B'}>Medical Chronologies</a></li>
                <li><a href="#services" className="transition-colors" onMouseEnter={(e) => e.target.style.color = '#C9A961'} onMouseLeave={(e) => e.target.style.color = '#64748B'}>Litigation Support</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-white">Company</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li><a href="#team" className="hover:text-burnt-500 transition-colors">About</a></li>
                <li><a href="#team" className="hover:text-burnt-500 transition-colors">Careers</a></li>
                <li><a href="#how-it-works" className="hover:text-burnt-500 transition-colors">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-white">Legal</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li><a href="#services" className="hover:text-burnt-500 transition-colors">Privacy Policy</a></li>
                <li><a href="#services" className="hover:text-burnt-500 transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4" style={{ borderColor: '#2B3544' }}>
            <div className="text-sm" style={{ color: '#64748B' }}>
              © 2026 LawBOX. All rights reserved.
            </div>
            <div className="flex items-center gap-6 text-sm" style={{ color: '#64748B' }}>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#C9A961' }}></span>
                All systems operational
              </span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
