
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Clock, DollarSign, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    quote: "Great service and secure units—perfect for my boat! The drive-up access makes loading and unloading a breeze.",
    author: "James M.",
    location: "Orofino Resident"
  },
  {
    quote: "Family-owned and it shows. They actually care about your belongings. Super clean and very reasonable prices.",
    author: "Sarah L.",
    location: "Kamiah, ID"
  },
  {
    quote: "I've used Triple T for my business inventory for 3 years. Never had an issue. The 24/7 surveillance gives me peace of mind.",
    author: "Robert T.",
    location: "Small Business Owner"
  }
];

const Home = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="flex flex-col">
      <section className="relative h-[85vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src="images/adam-winger-FJtz_ASf_BI-unsplash.jpg"
            alt="Triple T Storage Facility"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/40 to-transparent"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-white">
          <div className="max-w-2xl">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight leading-none">
              TRIPLE T<br/><span className="text-emerald-500">STORAGE</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 font-medium text-slate-200">
              Your Secure Space in Orofino, Idaho.
            </p>
            <p className="text-lg text-slate-300 mb-10 leading-relaxed max-w-lg">
              Reliable, family-owned storage solutions directly on Highway 12. Protecting what matters to you since 2005.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/units" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-md font-bold text-center transition-all shadow-lg transform hover:-translate-y-1">
                Explore Units
              </Link>
              <Link to="/contact" className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white hover:text-slate-900 text-white px-8 py-4 rounded-md font-bold text-center transition-all">
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 uppercase tracking-wider">The Triple T Advantage</h2>
            <div className="w-20 h-1.5 bg-emerald-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="group p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-emerald-200 hover:shadow-xl transition-all text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:rotate-6 transition-transform">
                <Shield className="text-emerald-700" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">Maximum Security</h3>
              <p className="text-slate-600">Equipped with 24/7 HD surveillance and gated keypad access for total peace of mind.</p>
            </div>
            <div className="group p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-emerald-200 hover:shadow-xl transition-all text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:rotate-6 transition-transform">
                <Clock className="text-emerald-700" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">Easy 24/7 Access</h3>
              <p className="text-slate-600">Access your belongings anytime with our wide, truck-friendly drive-up lanes.</p>
            </div>
            <div className="group p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-emerald-200 hover:shadow-xl transition-all text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:rotate-6 transition-transform">
                <DollarSign className="text-emerald-700" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">Fair Local Pricing</h3>
              <p className="text-slate-600">Competitive month-to-month rates with no hidden fees. Discounts for military and seniors.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-16 text-emerald-400">Trusted by Orofino Residents</h2>
          <div className="relative">
            <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}>
              {testimonials.map((t, i) => (
                <div key={i} className="min-w-full px-4">
                  <div className="flex justify-center mb-6">
                    {[1, 2, 3, 4, 5].map((s) => <Star key={s} fill="#10b981" className="text-emerald-500 mx-0.5" size={20} />)}
                  </div>
                  <blockquote className="text-2xl md:text-3xl italic font-light mb-8 leading-relaxed">
                    "{t.quote}"
                  </blockquote>
                  <cite className="not-italic block">
                    <span className="font-bold text-white text-lg">{t.author}</span>
                    <span className="text-emerald-400 block text-sm mt-1">{t.location}</span>
                  </cite>
                </div>
              ))}
            </div>
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -ml-12 p-2 hover:text-emerald-400 transition-colors hidden md:block"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft size={48} />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 -mr-12 p-2 hover:text-emerald-400 transition-colors hidden md:block"
              aria-label="Next Testimonial"
            >
              <ChevronRight size={48} />
            </button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1">
            <h2 className="text-4xl font-bold mb-6 text-slate-900">Need Extra Room?</h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              From household goods to high-value recreational vehicles, we have the right size for you. Our facility is clean, dry, and built for the Idaho climate.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <li className="flex items-center text-slate-700 font-medium"><Shield className="text-emerald-600 mr-3" size={20} /> Gated Entry & Fencing</li>
              <li className="flex items-center text-slate-700 font-medium"><Shield className="text-emerald-600 mr-3" size={20} /> Clean, Dry Interiors</li>
              <li className="flex items-center text-slate-700 font-medium"><Shield className="text-emerald-600 mr-3" size={20} /> Drive-up Convenience</li>
              <li className="flex items-center text-slate-700 font-medium"><Shield className="text-emerald-600 mr-3" size={20} /> On-Site Surveillance</li>
            </ul>
            <Link to="/contact" className="inline-block bg-slate-900 text-white px-10 py-4 rounded-lg font-bold hover:bg-emerald-600 transition-all shadow-lg">
              Contact Us Today
            </Link>
          </div>
          <div className="flex-1 relative">
            <img
              src="images/adam-winger--BQbmDlDE70-unsplash.jpg"
              alt="Triple T Units"
              className="rounded-2xl shadow-2xl relative z-10 w-full"
            />
            <div className="absolute -bottom-6 -right-6 w-3/4 h-3/4 border-4 border-emerald-500/20 rounded-2xl -z-0"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
