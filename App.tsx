
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, Facebook, ExternalLink } from 'lucide-react';

import Home from './pages/Home';
import About from './pages/About';
import Units from './pages/Units';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

const Logo = () => (
  <svg className="w-10 h-10 mr-3" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="48" fill="#D9D9D9"/>
    <text x="50" y="72" textAnchor="middle" fontFamily="Georgia, serif" fontWeight="bold" fontSize="75" fill="#84cc16">T</text>
  </svg>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Storage Units', path: '/units' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <nav className="sticky top-0 z-50 bg-slate-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center group">
              <Logo />
              <div className="flex flex-col">
                <span className="text-2xl font-bold tracking-tight text-white group-hover:text-emerald-400 transition-colors">TRIPLE T</span>
                <span className="text-xs uppercase tracking-[0.2em] font-semibold text-slate-400">Storage Orofino</span>
              </div>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-semibold hover:text-emerald-400 transition-colors ${
                  location.pathname === link.path || (location.pathname === '/' && link.path === '/') ? 'text-emerald-400 border-b-2 border-emerald-400' : 'text-slate-200'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2 rounded-md text-sm font-bold transition-colors">
              Rent Now
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-200 hover:text-white"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-slate-800 border-t border-slate-700">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block px-3 py-4 text-base font-medium text-slate-200 hover:bg-slate-700 hover:text-emerald-400"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
      <div>
        <div className="flex items-center mb-6">
          <Logo />
          <h3 className="text-white text-xl font-bold">Triple T Storage</h3>
        </div>
        <p className="text-sm leading-relaxed mb-6">
          Locally owned and operated in Orofino, Idaho. Providing secure, affordable, and clean storage solutions for our neighbors since 2005.
        </p>
        <div className="flex space-x-4">
          <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-emerald-600 transition-colors" aria-label="Facebook">
            <Facebook size={20} />
          </a>
          <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-emerald-600 transition-colors" aria-label="Google My Business">
            <ExternalLink size={20} />
          </a>
        </div>
      </div>

      <div>
        <h4 className="text-white font-semibold mb-6">Contact Info</h4>
        <ul className="space-y-4 text-sm">
          <li className="flex items-start">
            <MapPin size={18} className="mr-3 text-emerald-400 shrink-0" />
            <span>14414 Highway 12<br />Orofino, ID 83544</span>
          </li>
          <li className="flex items-center">
            <Phone size={18} className="mr-3 text-emerald-400 shrink-0" />
            <a href="tel:208-476-3869" className="hover:text-white transition-colors">208-476-3869</a>
          </li>
          <li className="flex items-center">
            <Mail size={18} className="mr-3 text-emerald-400 shrink-0" />
            <a href="mailto:info@tripletstorage.com" className="hover:text-white transition-colors">info@tripletstorage.com</a>
          </li>
        </ul>
      </div>

      <div>
        <h4 className="text-white font-semibold mb-6">Business Hours</h4>
        <ul className="space-y-2 text-sm">
          <li className="flex justify-between"><span>Mon - Fri</span> <span>9 AM - 5 PM</span></li>
          <li className="flex justify-between"><span>Saturday</span> <span>10 AM - 2 PM</span></li>
          <li className="flex justify-between"><span>Sunday</span> <span>Closed</span></li>
          <li className="mt-4 pt-4 border-t border-slate-800">
            <p className="text-xs italic text-slate-500">24/7 Gated Access for Current Tenants</p>
          </li>
        </ul>
      </div>

      <div>
        <h4 className="text-white font-semibold mb-6">Quick Links</h4>
        <ul className="space-y-2 text-sm">
          <li><Link to="/units" className="hover:text-emerald-400 transition-colors">Unit Availability</Link></li>
          <li><Link to="/about" className="hover:text-emerald-400 transition-colors">Our History</Link></li>
          <li><Link to="/gallery" className="hover:text-emerald-400 transition-colors">Photo Gallery</Link></li>
          <li><Link to="/contact" className="hover:text-emerald-400 transition-colors">Request a Quote</Link></li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
      &copy; {new Date().getFullYear()} Triple T Storage. All rights reserved. Designed for the Orofino community.
    </div>
  </footer>
);

const App = () => {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/units" element={<Units />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
