import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaClock } from 'react-icons/fa';
import { 
  FaChevronDown,
  FaCheckCircle 
} from 'react-icons/fa'

const ContactPage = () => {
    const customStyles = `
    .hero-overlay {
      background: linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.8)), 
                  url('https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80&w=2000');
      background-size: cover;
      background-position: center;
    }

    /* Updated Input styling with Shadow */
    .input-field {
      @apply w-full bg-white border border-slate-200 rounded-lg px-4 py-3 outline-none transition-all;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05); /* Soft shadow to give it depth */
    }

    .input-field:focus {
      @apply border-blue-500 ring-4 ring-blue-500/10;
      box-shadow: 0 4px 12px rgba(37, 99, 235, 0.15); /* Stronger shadow on focus */
      transform: translateY(-1px);
    }

    /* Message Area specific height */
    .message-area {
      min-height: 180px;
      resize: vertical; /* Allows user to drag it larger if needed */
    }
  `;

    return (
        <main className="bg-white min-h-screen">
            <style>{customStyles}</style>

            {/* --- HERO BANNER --- */}
            <section className="hero-overlay h-[300px] flex items-center justify-center text-center px-6">
                <div className="max-w-4xl">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 tracking-tight">
                        Get in Touch
                    </h1>
                    <div className="flex items-center justify-center gap-3 text-blue-400 font-medium">
                        <a href="/" className="hover:text-white transition-colors">Home</a>
                        <span className="text-slate-500">/</span>
                        <span className="text-slate-200">Contact Us</span>
                    </div>
                </div>
            </section>

            {/* --- CONTACT BODY SECTION --- */}
            <section className="py-16 lg:py-24 container mx-auto px-6 lg:px-12">
                <div className="flex flex-col lg:flex-row gap-16">

                    {/* Left Side: Contact Form */}
                    <div className="w-full lg:w-3/5">
                        <div className="mb-10">
                            <h2 className="text-3xl font-bold text-slate-900 mb-4">Send a Message</h2>
                            <div className="w-20 h-1.5 bg-blue-600 rounded-full"></div>
                        </div>

                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                                    <input
                                        id="name"
                                        type="text"
                                        required
                                        placeholder="John Doe"
                                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                                    <input
                                        id="email"
                                        type="email"
                                        required
                                        placeholder="john@example.com"
                                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-sm font-bold text-slate-700 ml-1">Phone (Optional)</label>
                                    <input
                                        id="phone"
                                        type="tel"
                                        placeholder="+977-98XXXXXXXX"
                                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all"
                                    />
                                </div>
                                <div className="space-y-2 relative">
                                    <label htmlFor="subject" className="text-sm font-bold text-slate-700 ml-1">Inquiry Subject</label>
                                    <div className="relative">
                                        <select
                                            id="subject"
                                            className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 appearance-none transition-all cursor-pointer"
                                        >
                                            <option>General Inquiry</option>
                                            <option>Project Investment</option>
                                            <option>Career Opportunities</option>
                                            <option>Technical Support</option>
                                        </select>
                                        <FaChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-bold text-slate-700 ml-1">Message Details</label>
                                <textarea
                                    id="message"
                                    required
                                    placeholder="Briefly describe how we can help..."
                                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all min-h-[160px] resize-none"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-auto md:w-max px-10 py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-400 text-white font-medium cursor-pointer rounded-2xl flex items-center justify-center gap-3 transition-all transform active:scale-95 shadow-xl shadow-blue-200 hover:-translate-y-1"
                            >
                                Send Message <FaPaperPlane className="text-sm opacity-80" />
                            </button>
                        </form>
                    </div>

                    {/* Right Side: Contact Details & Map */}
                    <div className="w-full lg:w-2/5 space-y-8">
                        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 space-y-8 shadow-sm">
                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center text-blue-600 shrink-0">
                                    <FaMapMarkerAlt size={22} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900">Head Office</h4>
                                    <p className="text-slate-600 text-sm mt-1">
                                        5th Floor, Trade Tower, Thapathali-11, Kathmandu, Nepal
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center text-blue-600 shrink-0">
                                    <FaPhoneAlt size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900">Phone Support</h4>
                                    <p className="text-slate-600 text-sm mt-1">01-5111015, 01-5111016</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center text-blue-600 shrink-0">
                                    <FaEnvelope size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900">Email Address</h4>
                                    <p className="text-slate-600 text-sm mt-1">info@rawaenergy.com.np</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center text-blue-600 shrink-0">
                                    <FaClock size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900">Business Hours</h4>
                                    <p className="text-slate-600 text-sm mt-1">Sun - Fri: 10:00 AM - 5:00 PM</p>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200 h-[300px]">
                            <iframe
                                title="Rawa Energy Location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.810578500642!2d85.31888497618956!3d27.69221232615469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19a07399f697%3A0x6b453e970b134812!2sTrade%20Tower%20Nepal!5e0!3m2!1sen!2snp!4v1709700000000!5m2!1sen!2snp"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ContactPage;