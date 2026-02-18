import React, { useState } from 'react';
import { Button } from './components/ui/Button';
import { Card } from './components/ui/Card';
import Logo from './components/Logo';

const CheckCircle2 = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const Calendar = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const Phone = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const Mail = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

export default function Contact({ onNavigateHome }) {
  const [formData, setFormData] = useState({
    firmName: '',
    contactName: '',
    email: '',
    phone: '',
    caseVolume: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Use the same domain for API (works on PythonAnywhere)
      const backendUrl = window.location.origin;
      
      const response = await fetch(`${backendUrl}/api/contact/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        const error = await response.json();
        console.error('Form submission failed:', error);
        alert('Failed to submit form. Please try again or contact us at rzade@simpleciti.com');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit form. Please try again or contact us directly at rzade@simpleciti.com');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b" style={{ backgroundColor: 'rgb(10, 22, 40)', borderColor: 'rgba(201, 169, 97, 0.3)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <button 
              onClick={onNavigateHome}
              className="focus:outline-none flex items-center"
            >
              <Logo variant="inverse" size="small" className="h-10 md:h-11 w-auto" />
            </button>
            
            <Button onClick={onNavigateHome} variant="outline" className="font-semibold" style={{ borderColor: '#C9A961', color: '#C9A961' }}>
              Back to Home
            </Button>
          </div>
        </div>
      </nav>

      {/* Contact Form Section  */}
      <section className="pt-32 pb-24 md:pt-40" style={{ background: 'linear-gradient(to bottom, #FFFFFF, #FAFAF8)' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column - Contact Info */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold mb-6" style={{ backgroundColor: 'rgba(201, 169, 97, 0.15)', color: '#0A1628' }}>
                Contact Us
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#0A1628' }}>
                Ready to transform your firm's operations?
              </h2>
              <p className="text-lg mb-8 leading-relaxed" style={{ color: '#64748B' }}>
                Schedule a call with our team to discuss how LawBox can help you scale efficiently and maximize settlements.
              </p>

              <div className="space-y-6">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(201, 169, 97, 0.15)' }}>
                      <Phone className="w-6 h-6" style={{ color: '#C9A961' }} />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1" style={{ color: '#0A1628' }}>Phone</h3>
                      <p style={{ color: '#2B3544' }}>(516) 967-3886</p>
                      <p className="text-sm mt-1" style={{ color: '#64748B' }}>Mon-Fri 9am-6pm EST</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(201, 169, 97, 0.15)' }}>
                      <Mail className="w-6 h-6" style={{ color: '#C9A961' }} />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1" style={{ color: '#0A1628' }}>Email</h3>
                      <p style={{ color: '#2B3544' }}>jake@simpleciti.com</p>
                      <p className="text-sm mt-1" style={{ color: '#64748B' }}>We'll respond within 24 hours</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(201, 169, 97, 0.15)' }}>
                      <Calendar className="w-6 h-6" style={{ color: '#C9A961' }} />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1" style={{ color: '#0A1628' }}>Book a Demo</h3>
                      <p style={{ color: '#2B3544' }}>30-minute consultation</p>
                      <p className="text-sm mt-1" style={{ color: '#64748B' }}>See LawBox in action</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Right Column - Form */}
            <div>
              {submitted ? (
                <Card className="p-8 text-center" style={{ background: 'linear-gradient(to bottom right, #FAFAF8, #FFFFFF)' }}>
                  <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ backgroundColor: 'rgba(34, 197, 94, 0.15)' }}>
                    <CheckCircle2 className="w-10 h-10" style={{ color: '#22c55e' }} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4" style={{ color: '#0A1628' }}>Thank you!</h3>
                  <p className="mb-6" style={{ color: '#64748B' }}>
                    We've received your request and will be in touch within 24 hours to schedule your consultation.
                  </p>
                  <Button onClick={() => setSubmitted(false)} className="text-white" style={{ backgroundColor: '#C9A961' }}>
                    Submit Another Request
                  </Button>
                </Card>
              ) : (
                <Card className="p-8">
                  <h3 className="text-2xl font-bold mb-6" style={{ color: '#0A1628' }}>Schedule Your Call</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2" style={{ color: '#2B3544' }}>
                        Firm Name *
                      </label>
                      <input
                        type="text"
                        name="firmName"
                        required
                        value={formData.firmName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 rounded-lg outline-none transition-all"
                        style={{ borderColor: '#E5E7EB' }}
                        onFocus={(e) => e.target.style.borderColor = '#C9A961'}
                        onBlur={(e) => e.target.style.borderColor = '#E5E7EB'}
                        placeholder="Your Law Firm"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2" style={{ color: '#2B3544' }}>
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="contactName"
                        required
                        value={formData.contactName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 rounded-lg outline-none transition-all"
                        style={{ borderColor: '#E5E7EB' }}
                        onFocus={(e) => e.target.style.borderColor = '#C9A961'}
                        onBlur={(e) => e.target.style.borderColor = '#E5E7EB'}
                        placeholder="John Smith"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2" style={{ color: '#2B3544' }}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 rounded-lg outline-none transition-all"
                        style={{ borderColor: '#E5E7EB' }}
                        onFocus={(e) => e.target.style.borderColor = '#C9A961'}
                        onBlur={(e) => e.target.style.borderColor = '#E5E7EB'}
                        placeholder="john@lawfirm.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2" style={{ color: '#2B3544' }}>
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 rounded-lg outline-none transition-all"
                        style={{ borderColor: '#E5E7EB' }}
                        onFocus={(e) => e.target.style.borderColor = '#C9A961'}
                        onBlur={(e) => e.target.style.borderColor = '#E5E7EB'}
                        placeholder="(516) 967-3886"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2" style={{ color: '#2B3544' }}>
                        Monthly Case Volume
                      </label>
                      <select
                        name="caseVolume"
                        value={formData.caseVolume}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 rounded-lg outline-none transition-all"
                        style={{ borderColor: '#E5E7EB' }}
                        onFocus={(e) => e.target.style.borderColor = '#C9A961'}
                        onBlur={(e) => e.target.style.borderColor = '#E5E7EB'}
                      >
                        <option value="">Select range...</option>
                        <option value="1-10">1-10 cases</option>
                        <option value="11-25">11-25 cases</option>
                        <option value="26-50">26-50 cases</option>
                        <option value="51-100">51-100 cases</option>
                        <option value="100+">100+ cases</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2" style={{ color: '#2B3544' }}>
                        How can we help?
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                        className="w-full px-4 py-3 border-2 rounded-lg outline-none transition-all resize-none"
                        style={{ borderColor: '#E5E7EB' }}
                        onFocus={(e) => e.target.style.borderColor = '#C9A961'}
                        onBlur={(e) => e.target.style.borderColor = '#E5E7EB'}
                        placeholder="Tell us about your firm and what you're looking for..."
                      ></textarea>
                    </div>

                    <Button 
                      type="submit"
                      className="w-full text-white font-semibold py-4 text-lg transition-all"
                      style={{ backgroundColor: '#C9A961' }}
                      onMouseEnter={(e) => e.target.style.backgroundColor = '#b8935a'}
                      onMouseLeave={(e) => e.target.style.backgroundColor = '#C9A961'}
                    >
                      Schedule Your Call
                    </Button>
                  </form>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative py-20 md:pb-32 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0A1628 0%, #2B3544 100%)' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 rounded-full" style={{ background: 'radial-gradient(circle, #C9A961 0%, transparent 70%)' }}></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full" style={{ background: 'radial-gradient(circle, #C9A961 0%, transparent 70%)' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-8" style={{ backgroundColor: 'rgba(201, 169, 97, 0.2)', border: '1px solid rgba(201, 169, 97, 0.3)', color: '#C9A961' }}>
              <Calendar className="w-4 h-4" />
              Schedule Your Consultation
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white">
              Let's Scale Your <span style={{ color: '#C9A961' }}>Practice Together</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 leading-relaxed" style={{ color: '#FAFAF8' }}>
              Talk to our team about how LawBox can transform your firm's operations
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16" style={{ backgroundColor: '#0A1628' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-4" style={{ fontFamily: 'Aref Ruqaa, serif' }}>LawBox</div>
            <p className="mb-6" style={{ color: '#64748B' }}>Scale your practice, eliminate the bottlenecks</p>
            <div className="text-sm" style={{ color: '#64748B' }}>© 2026 LawBox. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </main>
  );
}
