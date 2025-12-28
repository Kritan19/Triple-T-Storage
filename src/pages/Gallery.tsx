import React, { useState } from 'react';
import { X, Maximize2 } from 'lucide-react';

// Import all images (adjust path if you moved to src/images)
import Image1 from '../images/adam-winger-FJtz_ASf_BI-unsplash.jpg';
import Image2 from '../images/adam-winger--BQbmDlDE70-unsplash.jpg';
import Image3 from '../images/aga-adamek-9OfBsfty2x4-unsplash.jpg';
import Image4 from '../images/Gemini_Generated_Image_3h2th13h2th13h2t.png';
import Image5 from '../images/joshua-coleman-ZVkDLrXGMdw-unsplash.jpg';
import Image6 from '../images/yujie-han-5e88u6DZCBo-unsplash.jpg';
import Image7 from '../images/moj-box-Kd-YlHSvS-o-unsplash.jpg';
import Image8 from '../images/declan-sun-6N6EXN0x_E4-unsplash.jpg';
import Image9 from '../images/dominik-klos-Xut2TlI4KO4-unsplash.jpg';
import Image10 from '../images/kenny--ZleE9ovqXI-unsplash.jpg';
// Add more if you use the extra images like raphael-vpvRILOw2Kg-unsplash.jpg or wonderlane-OFfEOcIFiIc-unsplash.jpg

const galleryImages = [
  { url: Image1, caption: 'Stunning mountain backdrop of our facility.' },
  { url: Image2, caption: 'Exterior units with security camera protection.' },
  { url: Image3, caption: 'Clean and bright yellow interior unit rows.' },
  { url: Image4, caption: 'Modern blue-door indoor hallway.' },
  { url: Image5, caption: 'Pristine red-door indoor storage hallway.' },
  { url: Image6, caption: 'Heavy-duty night security gate.' },
  { url: Image7, caption: 'Specialized container storage interior.' },
  { url: Image8, caption: 'Organized inventory and business storage.' },
  { url: Image9, caption: 'Night-time facility surveillance view.' },
  { url: Image10, caption: 'Classic indoor unit accessibility.' },
];

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState<number | null>(null);

  return (
    <div className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Facility Gallery</h2>
        <p className="text-center text-slate-600 mb-16">Take a visual tour of our Orofino location. See why Triple T is the top choice for security and cleanliness.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((img, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <img 
                src={img.url} 
                alt={img.caption} 
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" 
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity flex items-center justify-center">
                <button 
                  onClick={() => setSelectedImg(idx)}
                  className="opacity-0 group-hover:opacity-100 text-white flex items-center gap-2 bg-emerald-600 px-4 py-2 rounded-full hover:bg-emerald-700 transition-all"
                >
                  <Maximize2 size={18} /> View Detail
                </button>
              </div>
              <p className="p-4 text-center text-slate-700 font-medium">{img.caption}</p>
            </div>
          ))}
        </div>
      </div>

      {selectedImg !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-5xl w-full bg-white rounded-xl overflow-hidden shadow-2xl">
            <button 
              onClick={() => setSelectedImg(null)}
              className="absolute top-4 right-4 text-slate-600 hover:text-slate-900 z-10"
            >
              <X size={32} />
            </button>
            <img 
              src={galleryImages[selectedImg].url} 
              alt={galleryImages[selectedImg].caption} 
              className="w-full max-h-[80vh] object-contain" 
            />
            <div className="p-6 text-center">
              <p className="text-xl font-bold text-slate-900 mb-2">{galleryImages[selectedImg].caption}</p>
              <p className="text-slate-600">TRIPLE T STORAGE — OROFINO, ID</p>
              <p className="text-sm text-slate-400 mt-4">Image {selectedImg + 1} of {galleryImages.length}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;