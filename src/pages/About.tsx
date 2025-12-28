import React from 'react';
import { Shield, Users, MapPin, CheckCircle } from 'lucide-react';

// Import images (adjust path if you moved to src/images)
import ScenicBg from '../images/adam-winger-FJtz_ASf_BI-unsplash.jpg';
import BlueDoor from '../images/Gemini_Generated_Image_3h2th13h2th13h2t.png';
import RedDoor from '../images/joshua-coleman-ZVkDLrXGMdw-unsplash.jpg';
import ScenicOrofino from '../images/adam-winger-FJtz_ASf_BI-unsplash.jpg';

const About = () => {
  return (
    <div className="bg-white">
      <section className="relative py-32 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img src={ScenicBg} alt="Background Scenic" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Local Roots, <span className="text-emerald-500">Global Standards.</span></h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">Providing Orofino with the highest quality self-storage since 2005.</p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-emerald-600 font-bold tracking-widest uppercase text-sm">Family Owned & Operated</span>
            <h2 className="text-4xl font-bold text-slate-900 mt-4 mb-8">Serving the Heart of Clearwater County</h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Triple T Storage isn't just a business; it's a part of the Orofino community. For nearly two decades, we've helped our neighbors through moves, downsizing, and life transitions.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              We specialize in providing clean, secure, and accessible storage units. Our location on Highway 12 was chosen specifically for its convenience to residents in Orofino, Peck, Kamiah, and the surrounding areas.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: "24/7 Security", desc: "Constant monitoring & gated access." },
                { title: "Various Sizes", desc: "From small lockers to garage-sized." },
                { title: "Month-to-Month", desc: "Flexible leases with no commitments." },
                { title: "Local Pride", desc: "Owned by your Orofino neighbors." }
              ].map((item, i) => (
                <div key={i} className="flex items-start">
                  <CheckCircle className="text-emerald-500 mt-1 mr-3 shrink-0" size={20} />
                  <div>
                    <h4 className="font-bold text-slate-900">{item.title}</h4>
                    <p className="text-sm text-slate-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-6">
              <img src={BlueDoor} alt="Blue Door Hallway" className="rounded-2xl shadow-lg w-full h-80 object-cover" />
              <div className="bg-emerald-600 p-8 rounded-2xl text-white text-center shadow-xl">
                <p className="text-5xl font-black mb-2">15+</p>
                <p className="text-sm font-bold uppercase tracking-widest">Years in Service</p>
              </div>
            </div>
            <div className="space-y-6 pt-12">
              <div className="bg-slate-900 p-8 rounded-2xl text-white text-center shadow-xl">
                <p className="text-5xl font-black mb-2">100%</p>
                <p className="text-sm font-bold uppercase tracking-widest">Gated Security</p>
              </div>
              <img src={RedDoor} alt="Red Door Hallway" className="rounded-2xl shadow-lg w-full h-80 object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">The Triple T Promise</h2>
            <p className="text-slate-600">Why our customers choose us year after year.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
              <Shield className="text-emerald-600 mb-6" size={48} />
              <h3 className="text-xl font-bold mb-4">Unmatched Security</h3>
              <p className="text-slate-600 leading-relaxed">Our facility is fully fenced with gated entry. Every movement is recorded by our high-definition surveillance system.</p>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
              <Users className="text-emerald-600 mb-6" size={48} />
              <h3 className="text-xl font-bold mb-4">Personal Service</h3>
              <p className="text-slate-600 leading-relaxed">We are real people who live here. When you call us, you get local help immediately—not a corporate call center.</p>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
              <MapPin className="text-emerald-600 mb-6" size={48} />
              <h3 className="text-xl font-bold mb-4">Prime Location</h3>
              <p className="text-slate-600 leading-relaxed">Located right on Highway 12, making it the perfect stop for recreational travelers and local businesses.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-10">Dedicated to Clearwater County</h2>
          <img
            src={ScenicOrofino}
            alt="Scenic Orofino"
            className="w-full h-[500px] object-cover rounded-3xl shadow-2xl mb-12"
          />
          <p className="text-xl text-slate-700 leading-relaxed italic font-light">
            "We take pride in keeping our facility clean and our units ready for your most valued possessions. Thank you for letting us serve you."
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;