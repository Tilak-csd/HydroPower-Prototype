import React from 'react';
import { 
  FaFacebookF, 
  FaTwitter, 
  FaLinkedinIn, 
  FaYoutube, 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaEnvelope,
  FaBolt 
} from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const customStyles = `
    .footer-bg { background-color: #0f172a; }
    .footer-link { transition: all 0.3s ease; color: #94a3b8; display: flex; align-items: center; gap: 8px; }
    .footer-link:hover { color: #4372c4; transform: translateX(5px); }
    .social-icon {
      width: 38px;
      height: 38px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.05);
      color: white;
      transition: all 0.3s ease;
    }
    .social-icon:hover { background: #4372c4; transform: translateY(-3px); color: white; }
  `;

  return (
    <footer className="footer-bg text-white pt-16 pb-8 font-sans">
      <style>{customStyles}</style>
      <div className="container mx-auto px-6 lg:px-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Brand & Bio */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img src="./hydropower-logo.png" alt="Hydropower Energy" className="h-20 w-auto" />
            </div>
            <p className="text-slate-400 leading-relaxed text-sm">
              Rawa Energy Development Ltd. is committed to sustainable energy development, 
              utilizing Nepal's water resources to provide affordable and eco-friendly power.
            </p>
            <div className="flex gap-3">
              <a href="#" className="social-icon"><FaFacebookF size={16} /></a>
              <a href="#" className="social-icon"><FaTwitter size={16} /></a>
              <a href="#" className="social-icon"><FaLinkedinIn size={16} /></a>
              <a href="#" className="social-icon"><FaYoutube size={16} /></a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-slate-200 mb-6 ">
              Useful Links
            </h4>
            <ul className="space-y-4">
              <li><a href="/" className="footer-link text-sm">Home</a></li>
              <li><a href="/about" className="footer-link text-sm">About Us</a></li>
              <li><a href="/team" className="footer-link text-sm">Our Team</a></li>
              <li><a href="/team" className="footer-link text-sm">Reports</a></li>
              <li><a href="/contact" className="footer-link text-sm">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 3: Quick Projects */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-slate-200 mb-6 ">
              Quick Projects
            </h4>
            <ul className="space-y-4">
              <li><a href="#" className="footer-link text-sm">Rairang Khola Project</a></li>
              <li><a href="#" className="footer-link text-sm">Ridi Khola Project</a></li>
              <li><a href="#" className="footer-link text-sm">Upper Tamakoshi</a></li>
              <li><a href="#" className="footer-link text-sm">Future Pipelines</a></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-slate-200 mb-6">
              Get In Touch
            </h4>
            <div className="space-y-5">
              <div className="flex items-start gap-3 text-slate-400 text-sm">
                <FaMapMarkerAlt className="text-blue-500 mt-1" />
                <span>Kathmandu, Nepal</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400 text-sm">
                <FaPhoneAlt className="text-blue-500" />
                <span>+977-01-0863792</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400 text-sm">
                <FaEnvelope className="text-blue-500" />
                <span>info@rawaenergy.com.np</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/60 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-[11px] uppercase tracking-wider">
          <p>© {currentYear} Rawa Energy Development Ltd. All Rights Reserved. Powered by <a href="https://www.unifiedsolutions.com.np" target="_blank">Unified Solutions</a></p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;