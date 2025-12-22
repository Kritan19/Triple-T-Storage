
import React from 'react';
// Fixed: Replaced non-existent 'Boat' icon with 'Ship' from lucide-react
import { Package, Truck, Ship, Check, HelpCircle } from 'lucide-react';

const unitCategories = [
  {
    title: "Small Units",
    description: "Ideal for personal items, small furniture, and boxes.",
    icon: <Package className="text-emerald-600" size={32} />,
    units: [
      { size: "5x10", fit: "Walk-in closet size. Boxes, bikes, small furniture.", price: "$50" },
      { size: "5x15", fit: "Hallway size. Studio apartment furniture, seasonal gear.", price: "$65" },
    ]
  },
  {
    title: "Medium Units",
    description: "Great for 1-2 bedroom apartments or small business storage.",
    icon: <Truck className="text-emerald-600" size={32} />,
    units: [
      { size: "10x10", fit: "Standard bedroom. 1-bedroom apartment contents.", price: "$85" },
      { size: "10x15", fit: "Large bedroom. 2-bedroom home or small car.", price: "$110" },
    ]
  },
  {
    title: "Large Units",
    description: "Perfect for full households, boats, or commercial use.",
    icon: <Package className="text-emerald-600" size={40} />,
    units: [
      { size: "10x20", fit: "Garage size. 3-bedroom house or large vehicle.", price: "$140" },
      { size: "10x30", fit: "Long garage. Full household contents + boat.", price: "$180" },
    ]
  },
  {
    title: "Vehicle Storage",
    description: "Dedicated space for your outdoor recreational needs.",
    // Fixed: Replaced non-existent 'Boat' icon with 'Ship'
    icon: <Ship className="text-emerald-600" size={32} />,
    units: [
      { size: "Outdoor Parking", fit: "Gravel lot for RVs, boats, or trailers.", price: "$45" },
      { size: "Covered Parking", fit: "Structure protection from snow and sun.", price: "$70" },
    ]
  }
];

const Units = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      <section className="py-20 bg-emerald-900 text-white text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Storage Options</h1>
          <p className="text-xl text-emerald-100 mb-2">Clean, dry, and secure units for any size project.</p>
          <p className="text-sm opacity-80 italic">All prices per month. Taxes not included. Call for current availability.</p>
        </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {unitCategories.map((cat, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="p-8 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">{cat.title}</h2>
                  <p className="text-slate-500 text-sm mt-1">{cat.description}</p>
                </div>
                {cat.icon}
              </div>
              <div className="divide-y divide-slate-100">
                {cat.units.map((unit, uIdx) => (
                  <div key={uIdx} className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-50 transition-colors">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-xl font-bold text-slate-900">{unit.size}</span>
                        <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold uppercase px-2 py-0.5 rounded-full">Unit</span>
                      </div>
                      <p className="text-slate-600 text-sm">{unit.fit}</p>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="text-right">
                        <span className="text-2xl font-black text-emerald-700">{unit.price}</span>
                        <span className="text-slate-400 text-xs block">per month</span>
                      </div>
                      <button className="bg-slate-900 text-white px-5 py-2 rounded font-bold text-sm hover:bg-emerald-600 transition-colors">
                        Reserve
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-slate-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center">
              <HelpCircle className="text-emerald-600 mr-3" /> Important Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="text-emerald-500 mr-3 shrink-0" size={20} />
                  <span className="text-slate-700"><strong>No Long-Term Contracts:</strong> All units are rented on a flexible month-to-month basis.</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-emerald-500 mr-3 shrink-0" size={20} />
                  <span className="text-slate-700"><strong>Discounts:</strong> 10% off for military, seniors, and 6+ month prepaid rentals.</span>
                </li>
              </ul>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="text-emerald-500 mr-3 shrink-0" size={20} />
                  <span className="text-slate-700"><strong>Protection:</strong> Pest control and insurance options are available on-site.</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-emerald-500 mr-3 shrink-0" size={20} />
                  <span className="text-slate-700"><strong>Custom Sizes:</strong> Need something bigger? Ask us about combined units.</span>
                </li>
              </ul>
            </div>
            <div className="mt-12 text-center">
              <p className="text-slate-500 mb-6">Not sure what size you need? Use our space estimator or give us a call.</p>
              <a href="tel:208-476-3869" className="text-emerald-700 font-bold hover:underline">Speak with a storage expert: 208-476-3869</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Units;
