import React, { useState } from 'react';
import { Menu, X, Phone, MapPin, CheckCircle, PhoneIcon, MessageSquare, Calendar } from 'lucide-react';

const MoldTestingWebsite = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    service: '',
    message: ''
  });

  const phoneNumber = '(310)-999-8772';
  const email = 'MoldAirTestingCA@gmail.com';

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Conversion tracking placeholder
    console.log('Form submitted:', formData);
    alert('Thank you! We will contact you shortly at ' + formData.phone);
    setFormData({ name: '', phone: '', email: '', address: '', service: '', message: '' });
  };

  const services = [
    { name: 'Mold Inspection', desc: 'Visual inspection with moisture mapping and thermal imaging' },
    { name: 'Mold Air Testing', desc: 'Lab-tested air samples to identify mold spores' },
    { name: 'Indoor Air Quality', desc: 'Complete air quality analysis for your home or business' },
    { name: 'Surface Sampling', desc: 'Swab samples tested in certified labs' },
    { name: 'Post-Remediation', desc: 'Clearance testing after mold remediation work' },
    { name: 'Real Estate Inspections', desc: 'Mold testing for home buyers and sellers' }
  ];

  const areas = [
    'Los Angeles', 'West Hollywood', 'Beverly Hills', 'Santa Monica', 'Venice',
    'Culver City', 'Hollywood', 'Sherman Oaks', 'Studio City', 'Burbank',
    'Glendale', 'Pasadena', 'Woodland Hills', 'Encino', 'Long Beach',
    'Torrance', 'Malibu', 'Marina del Rey'
  ];

  const faqItems = [
    {
      q: 'How long does a mold inspection take?',
      a: 'Most inspections take 1-2 hours depending on property size. We include visual inspection, moisture mapping, and thermal imaging.'
    },
    {
      q: 'When will I get my lab results?',
      a: 'Lab reports are typically available within 24-72 hours depending on lab availability. We will send results directly to your email.'
    },
    {
      q: 'Do you do mold removal?',
      a: 'No. We only test and inspect. We do not perform remediation. This independence means our results are unbiased and conflict-free.'
    },
    {
      q: 'How much does mold testing cost?',
      a: 'Inspections with air and surface samples start at $399. Free virtual visual inspections are available by appointment. Attorney and dispute reports are quoted individually.'
    },
    {
      q: 'What makes you different?',
      a: 'We are independent testing only. We do not sell remediation services, so we have no financial incentive to find mold. Our job is to give you honest results.'
    },
    {
      q: 'Can you test while I\'m renting?',
      a: 'Yes. We provide detailed mold reports for tenants and landlords. Documentation helps resolve disputes and supports lease agreements.'
    }
  ];

  // Header Component
  const Header = () => (
    <>
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div
            onClick={() => { setCurrentPage('home'); setMobileMenuOpen(false); }}
            className="flex items-center gap-3 cursor-pointer hover:opacity-85 transition"
          >
            {/* Professional Logo - Your Actual Logo */}
            <div className="w-14 h-14 flex-shrink-0">
              <img 
                src="https://raw.githubusercontent.com/moldairtestingca/mold-testing-site/main/public/logo.png" 
                alt="Mold & Air Testing California" 
                className="w-full h-full object-contain"
              />
            </div>
            {/* Company Name */}
            <div className="hidden sm:flex flex-col">
              <span className="text-sm font-bold text-blue-900 leading-tight">MOLD & AIR</span>
              <span className="text-xs text-blue-600 font-semibold">TESTING CALIFORNIA</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            <button onClick={() => setCurrentPage('home')} className={currentPage === 'home' ? 'text-blue-900 font-semibold' : 'text-gray-700 hover:text-blue-900'}>Home</button>
            <button onClick={() => setCurrentPage('services')} className={currentPage === 'services' ? 'text-blue-900 font-semibold' : 'text-gray-700 hover:text-blue-900'}>Services</button>
            <button onClick={() => setCurrentPage('areas')} className={currentPage === 'areas' ? 'text-blue-900 font-semibold' : 'text-gray-700 hover:text-blue-900'}>Areas Served</button>
            <button onClick={() => setCurrentPage('about')} className={currentPage === 'about' ? 'text-blue-900 font-semibold' : 'text-gray-700 hover:text-blue-900'}>About</button>
            <button onClick={() => setCurrentPage('contact')} className={currentPage === 'contact' ? 'text-blue-900 font-semibold' : 'text-gray-700 hover:text-blue-900'}>Contact</button>
            <a href={`tel:${phoneNumber}`} className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center gap-2">
              <Phone size={18} /> Call Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-4 py-3 space-y-2">
              <button onClick={() => { setCurrentPage('home'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 px-3 hover:bg-gray-100 rounded">Home</button>
              <button onClick={() => { setCurrentPage('services'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 px-3 hover:bg-gray-100 rounded">Services</button>
              <button onClick={() => { setCurrentPage('areas'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 px-3 hover:bg-gray-100 rounded">Areas Served</button>
              <button onClick={() => { setCurrentPage('about'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 px-3 hover:bg-gray-100 rounded">About</button>
              <button onClick={() => { setCurrentPage('contact'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 px-3 hover:bg-gray-100 rounded">Contact</button>
              <a href={`tel:${phoneNumber}`} className="block w-full bg-blue-600 text-white py-3 rounded font-semibold text-center hover:bg-blue-700">Call Now</a>
            </div>
          </div>
        )}
      </nav>

      {/* Sticky Mobile Call Button */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-blue-600 border-t border-blue-700">
        <a href={`tel:${phoneNumber}`} className="flex items-center justify-center gap-2 text-white font-semibold py-3 w-full">
          <PhoneIcon size={20} /> Call: {phoneNumber}
        </a>
      </div>
    </>
  );

  // Home Page
  const HomePage = () => (
    <div className="pb-20 md:pb-0">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-16 md:py-24 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Independent Mold & Air Testing in Los Angeles
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Fast mold inspections, air quality testing, moisture checks, and certified lab reports with no conflict of interest.
          </p>
          <p className="text-lg mb-8 text-blue-100 font-semibold">
            We test only. We do not sell remediation.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href={`tel:${phoneNumber}`} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition">
              Call Now: {phoneNumber}
            </a>
            <button onClick={() => setCurrentPage('contact')} className="bg-white text-blue-900 hover:bg-blue-50 font-bold py-4 px-8 rounded-lg text-lg transition">
              Book Mold Testing
            </button>
            <button onClick={() => setCurrentPage('contact')} className="border-2 border-white text-white hover:bg-white hover:text-blue-900 font-bold py-4 px-8 rounded-lg text-lg transition">
              Get a Free Quote
            </button>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-gray-50 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
            <div>
              <CheckCircle className="w-8 h-8 mx-auto text-blue-600 mb-2" />
              <p className="text-sm font-semibold text-gray-800">Independent Testing Only</p>
            </div>
            <div>
              <CheckCircle className="w-8 h-8 mx-auto text-blue-600 mb-2" />
              <p className="text-sm font-semibold text-gray-800">No Remediation Sales</p>
            </div>
            <div>
              <CheckCircle className="w-8 h-8 mx-auto text-blue-600 mb-2" />
              <p className="text-sm font-semibold text-gray-800">Certified Lab Reports</p>
            </div>
            <div>
              <CheckCircle className="w-8 h-8 mx-auto text-blue-600 mb-2" />
              <p className="text-sm font-semibold text-gray-800">Fast Turnaround</p>
            </div>
            <div>
              <CheckCircle className="w-8 h-8 mx-auto text-blue-600 mb-2" />
              <p className="text-sm font-semibold text-gray-800">Serving Los Angeles</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-900">
            Why Choose Mold & Air Testing California
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border-l-4 border-blue-600 p-6 rounded shadow-sm">
              <h3 className="text-xl font-bold text-blue-900 mb-3">No Conflict of Interest</h3>
              <p className="text-gray-700">We test only—we don't profit from finding mold or selling remediation. Our job is giving you honest results.</p>
            </div>
            <div className="bg-white border-l-4 border-blue-600 p-6 rounded shadow-sm">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Fast & Local</h3>
              <p className="text-gray-700">Same-day or next-day appointments available. Lab results within 24–72 hours. Local team you can call directly.</p>
            </div>
            <div className="bg-white border-l-4 border-blue-600 p-6 rounded shadow-sm">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Professional & Affordable</h3>
              <p className="text-gray-700">Certified inspections, clear lab reports, and transparent pricing. No hidden fees. Starting at $399.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="bg-blue-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-900">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-sm border-t-4 border-blue-600">
                <h3 className="text-lg font-bold text-blue-900 mb-2">{service.name}</h3>
                <p className="text-gray-700">{service.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button onClick={() => setCurrentPage('services')} className="bg-blue-900 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-800 transition">
              View All Services
            </button>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-900">
            Simple Process. Clear Results.
          </h2>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h3 className="font-bold text-blue-900 mb-2">Call or Book</h3>
              <p className="text-gray-700 text-sm">Schedule your mold inspection appointment.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h3 className="font-bold text-blue-900 mb-2">Inspection</h3>
              <p className="text-gray-700 text-sm">We inspect, test, and document visible conditions.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h3 className="font-bold text-blue-900 mb-2">Lab Testing</h3>
              <p className="text-gray-700 text-sm">Samples go to certified labs for analysis.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
              <h3 className="font-bold text-blue-900 mb-2">Report</h3>
              <p className="text-gray-700 text-sm">Clear, professional lab reports delivered.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-900">Transparent Pricing</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg border-2 border-blue-600">
              <h3 className="text-2xl font-bold text-blue-900 mb-2">Free Virtual Inspection</h3>
              <p className="text-gray-700 mb-4">See if mold testing is needed before you schedule.</p>
              <button onClick={() => setCurrentPage('contact')} className="w-full bg-blue-900 text-white font-bold py-2 rounded hover:bg-blue-800">Schedule Free Call</button>
            </div>
            <div className="bg-white p-8 rounded-lg border-2 border-blue-600">
              <h3 className="text-2xl font-bold text-blue-900 mb-2">Inspection + Lab Testing</h3>
              <p className="text-3xl font-bold text-blue-600 mb-4">Starting at $399</p>
              <p className="text-gray-700 mb-4">Includes inspection, air and/or surface samples, and certified lab reports.</p>
              <button onClick={() => setCurrentPage('contact')} className="w-full bg-blue-600 text-white font-bold py-2 rounded hover:bg-blue-700">Book Now</button>
            </div>
          </div>
          <p className="text-center text-gray-700 mt-8 text-sm">
            Attorney and dispute reports quoted after consultation.
          </p>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-900">Common Questions</h2>
          <div className="space-y-4">
            {faqItems.slice(0, 3).map((item, idx) => (
              <details key={idx} className="bg-white border border-gray-200 rounded-lg p-4 cursor-pointer">
                <summary className="font-bold text-blue-900 hover:text-blue-700">{item.q}</summary>
                <p className="text-gray-700 mt-3">{item.a}</p>
              </details>
            ))}
          </div>
          <div className="text-center mt-8">
            <button onClick={() => setCurrentPage('contact')} className="bg-blue-900 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-800">
              See All FAQs
            </button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-blue-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Test Your Home?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Schedule a mold inspection today. Fast results. Honest answers.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href={`tel:${phoneNumber}`} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg transition">
              Call: {phoneNumber}
            </a>
            <button onClick={() => setCurrentPage('contact')} className="bg-white text-blue-900 hover:bg-blue-50 font-bold py-4 px-8 rounded-lg transition">
              Book Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );

  // Services Page
  const ServicesPage = () => (
    <div className="pb-20 md:pb-0">
      <div className="bg-blue-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold">Our Testing Services</h1>
          <p className="text-blue-100 mt-2">Comprehensive mold and air quality testing for homeowners, renters, real estate professionals, and legal cases.</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white border-l-4 border-blue-600 p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold text-blue-900 mb-3">{service.name}</h3>
              <p className="text-gray-700 mb-4">{service.desc}</p>
              <p className="text-gray-600 text-sm mb-4">
                Our inspection helps document visible conditions and moisture concerns. Testing can help identify potential mold and air quality issues in your property.
              </p>
              <button onClick={() => setCurrentPage('contact')} className="text-blue-600 font-semibold hover:text-blue-700">
                Learn More & Book →
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Service Included in All Inspections</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <CheckCircle className="text-blue-600 mt-1 flex-shrink-0" />
              <span>Visual mold inspection and documentation</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-blue-600 mt-1 flex-shrink-0" />
              <span>Moisture mapping to identify problem areas</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-blue-600 mt-1 flex-shrink-0" />
              <span>Thermal imaging to locate moisture behind walls</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-blue-600 mt-1 flex-shrink-0" />
              <span>Certified lab analysis (24–72 hour turnaround)</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-blue-600 mt-1 flex-shrink-0" />
              <span>Professional written report with recommendations</span>
            </li>
          </ul>
        </div>

        <div className="mt-12 text-center">
          <button onClick={() => setCurrentPage('contact')} className="bg-blue-600 text-white font-bold py-4 px-8 rounded-lg hover:bg-blue-700 text-lg">
            Schedule Your Inspection
          </button>
        </div>
      </div>
    </div>
  );

  // Areas Page
  const AreasPage = () => (
    <div className="pb-20 md:pb-0">
      <div className="bg-blue-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold">Service Areas</h1>
          <p className="text-blue-100 mt-2">Serving mold testing needs throughout Los Angeles County and surrounding areas.</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-4">
          {areas.map((area, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-md transition">
              <MapPin className="w-6 h-6 text-blue-600 mx-auto mb-2" />
              <p className="font-semibold text-blue-900">{area}</p>
              <button onClick={() => setCurrentPage('contact')} className="text-blue-600 text-sm mt-2 hover:text-blue-700 font-semibold">
                Book Service
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Same-Day & Next-Day Appointments</h2>
          <p className="text-gray-700 mb-4">
            We offer fast scheduling for mold inspections throughout Los Angeles County. Call us directly or fill out our booking form to reserve your appointment.
          </p>
          <p className="text-gray-700 mb-6">
            Service available for homeowners, renters, real estate agents, property managers, restoration companies, and legal cases.
          </p>
          <button onClick={() => setCurrentPage('contact')} className="bg-blue-900 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-800">
            Schedule Now
          </button>
        </div>
      </div>
    </div>
  );

  // About Page
  const AboutPage = () => (
    <div className="pb-20 md:pb-0">
      <div className="bg-blue-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold">About Mold & Air Testing California</h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-6">We Test Only. We Do Not Remediate.</h2>
            <p className="text-gray-700 mb-4">
              This is what makes us different. We are an independent mold testing company. We do not profit from finding mold or selling remediation services.
            </p>
            <p className="text-gray-700 mb-4">
              Our job is to give you honest, unbiased testing results. No conflict of interest. No financial incentive to oversell. Just professional, certified mold inspection and air quality testing.
            </p>
            <p className="text-gray-700 mb-4">
              We serve homeowners, renters, real estate professionals, property managers, restoration companies, insurance adjusters, and attorneys throughout Los Angeles County.
            </p>
          </div>
          <div className="bg-blue-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-blue-900 mb-6">Our Core Values</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-blue-900">Independent</p>
                  <p className="text-sm text-gray-600">We test only. No remediation sales.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-blue-900">Honest</p>
                  <p className="text-sm text-gray-600">Your results matter. We give unbiased answers.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-blue-900">Fast</p>
                  <p className="text-sm text-gray-600">Same-day or next-day scheduling available.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-blue-900">Professional</p>
                  <p className="text-sm text-gray-600">Certified testing, clear reports, expert advice.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-blue-900">Affordable</p>
                  <p className="text-sm text-gray-600">Transparent pricing. No hidden fees.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  // Contact Page
  const ContactPage = () => (
    <div className="pb-20 md:pb-0">
      <div className="bg-blue-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="text-blue-100 mt-2">Get in touch to book your mold inspection or ask a question.</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-8">Get in Touch</h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-blue-900 mb-2">Phone</h3>
                <a href={`tel:${phoneNumber}`} className="text-blue-600 text-lg font-semibold hover:text-blue-700">
                  {phoneNumber}
                </a>
                <p className="text-gray-600 text-sm mt-1">Available 7 days a week. Same-day & next-day scheduling.</p>
              </div>

              <div>
                <h3 className="font-bold text-blue-900 mb-2">Email</h3>
                <a href={`mailto:${email}`} className="text-blue-600 font-semibold hover:text-blue-700">
                  {email}
                </a>
                <p className="text-gray-600 text-sm mt-1">We respond within 2 hours on business days.</p>
              </div>

              <div>
                <h3 className="font-bold text-blue-900 mb-2">Service Areas</h3>
                <p className="text-gray-700">Los Angeles County and surrounding areas. Click Book Inspection below to select your service location.</p>
              </div>

              <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
                <p className="font-semibold text-blue-900 mb-2">💡 Faster Response?</p>
                <p className="text-sm text-gray-700">Call us directly at {phoneNumber}. We can often schedule inspections immediately.</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white border border-gray-200 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">Book Your Inspection</h2>
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label className="block font-semibold text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  required
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block font-semibold text-gray-700 mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleFormChange}
                  required
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block font-semibold text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  required
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block font-semibold text-gray-700 mb-2">Property Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleFormChange}
                  required
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block font-semibold text-gray-700 mb-2">Service Needed</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleFormChange}
                  required
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
                >
                  <option value="">Select a service</option>
                  <option value="mold-inspection">Mold Inspection</option>
                  <option value="air-testing">Air Quality Testing</option>
                  <option value="surface-sampling">Surface Sampling</option>
                  <option value="post-remediation">Post-Remediation Clearance</option>
                  <option value="real-estate">Real Estate Inspection</option>
                  <option value="tenant-report">Tenant/Landlord Report</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold text-gray-700 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleFormChange}
                  rows="4"
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
                  placeholder="Tell us about your concerns..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Book Inspection
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-4 text-center">
              We will contact you within 2 hours to confirm your appointment.
            </p>
          </div>
        </div>
      </div>

      {/* Google Maps Placeholder */}
      <div className="bg-gray-100 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">Service Area Map</h2>
          <div className="bg-white rounded-lg border border-gray-300 h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-3" />
              <p className="text-gray-500">Google Maps embed placeholder</p>
              <p className="text-sm text-gray-400 mt-2">Replace with actual map showing Los Angeles service area</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Footer
  const Footer = () => (
    <footer className="bg-blue-900 text-white py-12 px-4 border-t border-blue-800">
      <div className="max-w-6xl mx-auto">
        {/* Footer top with logo */}
        <div className="mb-8 pb-8 border-b border-blue-800 flex items-center gap-4">
          <div className="w-20 h-20 bg-blue-800 rounded-lg flex items-center justify-center flex-shrink-0">
            <img 
              src="https://raw.githubusercontent.com/moldairtestingca/mold-testing-site/main/public/logo.png" 
              alt="Mold & Air Testing California" 
              className="w-full h-full object-contain p-2"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold">MOLD & AIR TESTING</h2>
            <p className="text-blue-200">Independent Testing | Los Angeles</p>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-blue-100">
              <li><button onClick={() => setCurrentPage('services')} className="hover:text-white">Mold Inspection</button></li>
              <li><button onClick={() => setCurrentPage('services')} className="hover:text-white">Air Quality Testing</button></li>
              <li><button onClick={() => setCurrentPage('services')} className="hover:text-white">Real Estate Inspections</button></li>
              <li><button onClick={() => setCurrentPage('services')} className="hover:text-white">Post-Remediation Testing</button></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-blue-100">
              <li><button onClick={() => setCurrentPage('about')} className="hover:text-white">About Us</button></li>
              <li><button onClick={() => setCurrentPage('areas')} className="hover:text-white">Service Areas</button></li>
              <li><button onClick={() => setCurrentPage('contact')} className="hover:text-white">Contact</button></li>
              <li><button onClick={() => setCurrentPage('contact')} className="hover:text-white">Book Inspection</button></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-blue-100">
              <li><button onClick={() => setCurrentPage('home')} className="hover:text-white">Home</button></li>
              <li><a href={`tel:${phoneNumber}`} className="hover:text-white">Call Now</a></li>
              <li><a href={`mailto:${email}`} className="hover:text-white">Email</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <p className="text-sm text-blue-100 mb-2">
              <a href={`tel:${phoneNumber}`} className="hover:text-white font-semibold">{phoneNumber}</a>
            </p>
            <p className="text-sm text-blue-100">
              <a href={`mailto:${email}`} className="hover:text-white">{email}</a>
            </p>
            <p className="text-sm text-blue-100 mt-4">Los Angeles, California</p>
          </div>
        </div>

        <div className="border-t border-blue-800 pt-8">
          <div className="grid md:grid-cols-2 gap-4 text-sm text-blue-100">
            <p>
              © 2024 Mold & Air Testing California. All rights reserved. <br />
              <span className="text-xs">We test only. We do not perform mold remediation.</span>
            </p>
            <div className="text-right">
              <p className="text-xs">Independent mold testing serving Los Angeles County</p>
              <p className="text-xs mt-2">Domain: MoldAirTestingCA.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Schema.org Structured Data (JSON-LD) */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Mold & Air Testing California",
          "image": "https://raw.githubusercontent.com/moldairtestingca/mold-testing-site/main/public/logo.png",
          "description": "Independent mold testing and air quality testing in Los Angeles. We test only—no remediation services.",
          "url": "https://MoldAirTestingCA.com",
          "telephone": "(310)-999-8772",
          "email": "MoldAirTestingCA@gmail.com",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Los Angeles",
            "addressRegion": "CA",
            "postalCode": "90000",
            "addressCountry": "US"
          },
          "areaServed": ["Los Angeles", "West Hollywood", "Beverly Hills", "Santa Monica", "Venice", "Culver City", "Pasadena", "Long Beach"],
          "priceRange": "$$",
          "serviceType": ["Mold Inspection", "Air Quality Testing", "Mold Testing"]
        })
      }} />
    </footer>
  );

  // Main Render
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'services' && <ServicesPage />}
        {currentPage === 'areas' && <AreasPage />}
        {currentPage === 'about' && <AboutPage />}
        {currentPage === 'contact' && <ContactPage />}
      </main>
      <Footer />
    </div>
  );
};

export default MoldTestingWebsite;
