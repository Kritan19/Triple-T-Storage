
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    unitSize: '10x10',
    message: '',
    quoteRequest: true
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form data:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    setFormData(prev => ({ ...prev, [name]: val }));
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <section className="py-20 bg-slate-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
          <p className="text-xl text-slate-400">We're here to answer your questions and help you find the right storage solution.</p>
        </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-1 space-y-8">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
            <h3 className="text-xl font-bold text-slate-900 mb-6">Contact Information</h3>
            <ul className="space-y-6">
              <li className="flex items-start">
                <div className="bg-emerald-100 p-3 rounded-lg mr-4 shrink-0">
                  <MapPin className="text-emerald-700" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Our Location</h4>
                  <p className="text-slate-600 text-sm">14414 Highway 12<br />Orofino, ID 83544</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-emerald-100 p-3 rounded-lg mr-4 shrink-0">
                  <Phone className="text-emerald-700" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Phone Number</h4>
                  <a href="tel:208-476-3869" className="text-slate-600 text-sm hover:text-emerald-600 transition-colors">208-476-3869</a>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-emerald-100 p-3 rounded-lg mr-4 shrink-0">
                  <Mail className="text-emerald-700" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Email Address</h4>
                  <a href="mailto:info@tripletstorage.com" className="text-slate-600 text-sm hover:text-emerald-600 transition-colors">info@tripletstorage.com</a>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-emerald-100 p-3 rounded-lg mr-4 shrink-0">
                  <Clock className="text-emerald-700" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Office Hours</h4>
                  <p className="text-slate-600 text-sm">Mon - Fri: 9 AM - 5 PM<br />Sat: 10 AM - 2 PM</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="rounded-xl overflow-hidden h-80 shadow-md border border-slate-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2777.387995831968!2d-116.22238322340576!3d46.47167737111229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x535f606307135e69%3A0x63346d0d9703350b!2s14414%20Hwy%2012%2C%20Orofino%2C%20ID%2083544%2C%20USA!5e0!3m2!1sen!2suk!4v1709142000000!5m2!1sen!2suk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Triple T Storage Location"
            ></iframe>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="bg-white p-8 md:p-12 rounded-xl shadow-sm border border-slate-200 h-full">
            <h3 className="text-2xl font-bold text-slate-900 mb-8">Send Us a Message</h3>
            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-8 rounded-xl text-center space-y-4 animate-in fade-in zoom-in duration-300">
                <CheckCircle2 className="mx-auto text-emerald-600" size={64} />
                <h4 className="text-2xl font-bold">Message Sent!</h4>
                <p>Thank you for reaching out. A member of the Triple T team will contact you shortly.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-sm font-bold text-emerald-700 underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold text-slate-700">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-semibold text-slate-700">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all outline-none"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-semibold text-slate-700">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(208) 555-0123"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="unitSize" className="text-sm font-semibold text-slate-700">Unit Size Interest</label>
                    <select
                      id="unitSize"
                      name="unitSize"
                      value={formData.unitSize}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all outline-none bg-white"
                    >
                      <option value="5x10">5x10 - Small</option>
                      <option value="5x15">5x15 - Small</option>
                      <option value="10x10">10x10 - Medium</option>
                      <option value="10x15">10x15 - Medium</option>
                      <option value="10x20">10x20 - Large</option>
                      <option value="10x30">10x30 - Large</option>
                      <option value="parking">Vehicle Parking</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold text-slate-700">Your Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all outline-none resize-none"
                  ></textarea>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
                  <input
                    type="checkbox"
                    id="quoteRequest"
                    name="quoteRequest"
                    checked={formData.quoteRequest}
                    onChange={handleChange}
                    className="w-5 h-5 accent-emerald-600 rounded"
                  />
                  <label htmlFor="quoteRequest" className="text-sm text-slate-700 font-medium cursor-pointer">
                    Request a free price quote for this unit size
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-lg shadow-lg transition-all flex items-center justify-center gap-2 transform active:scale-95"
                >
                  <Send size={20} />
                  Submit Inquiry
                </button>
                <p className="text-[10px] text-slate-400 text-center uppercase tracking-widest mt-4">
                  Secure transmission protected by reCAPTCHA
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
