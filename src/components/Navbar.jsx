import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaChevronDown } from 'react-icons/fa';

const navLinks = [
  { name: 'Home', path: '/' },
  { 
    name: 'About Us', 
    path: '/about-us', 
    dropdown: [
      { name: 'History', path: '/about-us/history' },
      { name: 'Mission & Vision', path: '/about-us/mission-vision' },
      { name: 'Team', path: '/about-us/team' },
    ]
  },
  { name: 'Projects & Activities', path: '/projects-activities' },
  { name: 'Releases', path: '/releases', dropdown: [{ name: 'Press Releases', path: '/releases/press-releases' }] },
  { name: 'Downloads', path: '/downloads', dropdown: [{ name: 'Reports', path: '/downloads/reports' }] },
  { name: 'Reports', path: '/reports' },
  { name: 'Contact Us', path: '/contact-us' },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-[100]">
      <div className="container mx-auto px-4 flex justify-between items-center h-20">
        
        {/* Logo */}
        <div className="flex-shrink-0">
          <NavLink to="/">
            <img src="./hydropower-logo.png" alt="Logo" className="h-14 lg:h-16 w-auto" />
          </NavLink>
        </div>

        {/* Mobile Right Side: Flag + Hamburger */}
        <div className="flex items-center min-[1150px]:hidden gap-4">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/9/9b/Flag_of_Nepal.svg" 
            alt="Nepal Flag" 
            className="h-7 w-auto" 
          />
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 outline-none">
            <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>

        {/* Navigation Wrapper */}
        <div className={`
          absolute min-[1150px]:relative top-20 min-[1150px]:top-0 left-0 w-full min-[1150px]:w-auto 
          bg-white min-[1150px]:bg-transparent transition-all duration-300 ease-in-out
          ${isOpen ? 'translate-x-0 opacity-100 shadow-xl' : '-translate-x-full min-[1150px]:translate-x-0 min-[1150px]:opacity-100 hidden min-[1150px]:flex'} 
          items-center z-50 max-h-[85vh] overflow-y-auto min-[1150px]:overflow-visible
        `}>
          
          <ul className="flex flex-col min-[1150px]:flex-row min-[1150px]:items-center list-none p-6 min-[1150px]:p-0">
            {navLinks.map((link) => (
              <li key={link.name} className="relative group px-0 min-[1150px]:px-3 py-2 border-b min-[1150px]:border-b-0 border-gray-50">
                <div className="flex justify-between items-center w-full">
                  <NavLink
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center text-[15px] font-medium py-2 text-gray-700 hover:text-blue-700 transition-all ${isActive ? 'text-blue-700 font-bold' : ''}`
                    }
                  >
                    {link.name}
                    {/* Chevron for Desktop */}
                    {link.dropdown && (
                      <FaChevronDown className="hidden min-[1150px]:block ml-1.5 text-[10px] group-hover:rotate-180 transition-transform duration-200" />
                    )}
                  </NavLink>
                  
                  {/* Chevron Button for Mobile */}
                  {link.dropdown && (
                    <button 
                      onClick={() => toggleDropdown(link.name)}
                      className="min-[1150px]:hidden p-2 text-gray-400"
                    >
                      <FaChevronDown className={`transition-transform text-[12px] ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                    </button>
                  )}
                </div>

                {/* Submenu */}
                {link.dropdown && (
                  <div className={`
                    min-[1150px]:absolute static min-[1150px]:left-0 min-[1150px]:top-full min-[1150px]:w-52 bg-white 
                    min-[1150px]:shadow-xl rounded-md min-[1150px]:border-t-2 border-blue-600 
                    min-[1150px]:opacity-0 min-[1150px]:invisible min-[1150px]:group-hover:opacity-100 min-[1150px]:group-hover:visible
                    transition-all duration-200 z-50
                    ${activeDropdown === link.name ? 'block' : 'hidden min-[1150px]:block'}
                  `}>
                    <div className="py-2 bg-gray-50 min-[1150px]:bg-white ml-4 min-[1150px]:ml-0 mt-2 min-[1150px]:mt-0">
                      {link.dropdown.map((sub) => (
                        <NavLink
                          key={sub.name}
                          to={sub.path}
                          onClick={() => setIsOpen(false)}
                          className="block px-4 py-2 text-sm text-gray-600 hover:text-blue-700 hover:bg-blue-50"
                        >
                          {sub.name}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* Social Icons */}
          <div className="flex items-center space-x-5 p-6 min-[1150px]:p-0 min-[1150px]:ml-6 border-t min-[1150px]:border-t-0">
            <a href="#" className="text-blue-600 hover:scale-110 transition-transform"><FaFacebookF size={18} /></a>
            <a href="#" className="text-blue-800 hover:scale-110 transition-transform"><FaLinkedinIn size={18} /></a>
            <a href="#" className="text-sky-400 hover:scale-110 transition-transform"><FaTwitter size={18} /></a>
            <div className="hidden min-[1150px]:block border-l pl-4 border-gray-200">
               <img src="https://upload.wikimedia.org/wikipedia/commons/9/9b/Flag_of_Nepal.svg" alt="Flag" className="h-7 w-auto" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;