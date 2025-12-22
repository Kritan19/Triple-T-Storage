
import React, { useState } from 'react';
import { X, Maximize2 } from 'lucide-react';

const galleryImages = [
  { url: './images/adam-winger-FJtz_ASf_BI-unsplash.jpg', caption: 'Stunning mountain backdrop of our facility.' },
  { url: './images/adam-winger--BQbmDlDE70-unsplash.jpg', caption: 'Exterior units with security camera protection.' },
  { url: './images/aga-adamek-9OfBsfty2x4-unsplash.jpg', caption: 'Clean and bright yellow interior unit rows.' },
  { url: './images/Gemini_Generated_Image_3h2th13h2th13h2t.png', caption: 'Modern blue-door indoor hallway.' },
  { url: './images/joshua-coleman-ZVkDLrXGMdw-unsplash.jpg', caption: 'Pristine red-door indoor storage hallway.' },
  { url: './images/yujie-han-5e88u6DZCBo-unsplash.jpg', caption: 'Heavy-duty night security gate.' },
  { url: './images/moj-box-Kd-YlHSvS-o-unsplash.jpg', caption: 'Specialized container storage interior.' },
  { url: './images/declan-sun-6N6EXN0x_E4-unsplash.jpg', caption: 'Organized inventory and business storage.' },
  { url: './images/dominik-klos-Xut2TlI4KO4-unsplash.jpg', caption: 'Night-time facility surveillance view.' },
  { url: './images/kenny--ZleE9ovqXI-unsplash.jpg', caption: 'Classic indoor unit accessibility.' },
];

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState<number | null>(null);

  return (
    <div className="bg-slate-50 min-h-screen">
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Facility <span className="text-emerald-500">Gallery</span></h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">Take a visual tour of our Orofino location. See why Triple T is the top choice for security and cleanliness.</p>
        </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((img, idx) => (
            <div
              key={idx}
              className="group relative cursor-pointer overflow-hidden rounded-2xl shadow-lg bg-white p-2 border border-slate-200 transition-all hover:shadow-2xl"
              onClick={() => setSelectedImg(idx)}
            >
              <div className="aspect-[4/3] overflow-hidden rounded-xl">
                <img
                  src={img.url}
                  alt={img.caption}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-4 bg-white">
                <p className="text-slate-900 font-semibold text-sm line-clamp-1">{img.caption}</p>
                <div className="mt-2 flex items-center text-emerald-600 text-xs font-bold uppercase tracking-widest">
                  View Detail <Maximize2 size={12} className="ml-2" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {selectedImg !== null && (
        <div className="fixed inset-0 z-[100] bg-slate-950/98 flex items-center justify-center p-4 backdrop-blur-sm animate-in fade-in duration-300">
          <button
            className="absolute top-8 right-8 text-white hover:text-emerald-400 transition-colors p-2 z-[110]"
            onClick={() => setSelectedImg(null)}
          >
            <X size={48} />
          </button>
          
          <div className="max-w-6xl w-full flex flex-col items-center">
            <div className="relative group">
               <img
                src={galleryImages[selectedImg].url}
                alt={galleryImages[selectedImg].caption}
                className="max-h-[75vh] w-auto object-contain rounded-xl shadow-2xl border-4 border-white/10"
              />
            </div>
            <div className="mt-8 text-center bg-slate-900/50 backdrop-blur px-8 py-4 rounded-2xl border border-white/10">
              <p className="text-white text-2xl font-bold mb-2">{galleryImages[selectedImg].caption}</p>
              <p className="text-emerald-500 font-mono text-sm tracking-widest">TRIPLE T STORAGE — OROFINO, ID</p>
              <p className="text-slate-500 text-xs mt-4 uppercase">Image {selectedImg + 1} of {galleryImages.length}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
