import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ChevronDown, Shield, MapPin, Mail } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS, PHONE_NUMBER, SERVICES, ADDRESS } from '../constants';
import { Service } from '../types';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null);
  const [hoveredService, setHoveredService] = useState<Service | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Helper to check active state
  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  const isHomePage = location.pathname === '/';

  return (
    <nav
      className={`fixed w-full z-[60] transition-all duration-500 ${scrolled || isOpen || !isHomePage
        ? 'bg-brand-navy border-b border-white/10 py-2 md:py-3 shadow-lg'
        : 'bg-transparent py-4 md:py-6'
        }`}
    >
      <div className="max-w-full px-6 md:px-10 lg:px-12">
        <div className={`flex justify-between items-center transition-all duration-500 ${scrolled ? 'h-12 md:h-16' : 'h-16'}`}>
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center group">
              <img src="/GIGlogowhite.png" alt="Guardian Insurance Group Logo" className={`w-auto transition-all duration-500 origin-left ${scrolled ? 'h-10 md:h-14 scale-100' : 'h-12 md:h-14 scale-125 md:scale-150'} group-hover:opacity-90`} />
            </Link>
          </div>

          {/* Desktop Nav - Reduced space-x to fit more links */}
          <div className="hidden lg:flex items-center space-x-6">
            {NAV_LINKS.map((link) => (
              <div
                key={link.label}
                className="relative group py-2"
                onMouseEnter={() => link.sublinks && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {link.sublinks ? (
                  <button
                    className={`font-medium transition-colors duration-200 text-xs xl:text-sm uppercase tracking-wider flex items-center gap-1 ${isActive(link.href) || activeDropdown === link.label ? 'text-white' : 'text-gray-300 hover:text-white'
                      }`}
                  >
                    {link.label}
                    <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === link.label ? 'rotate-180' : ''}`} />
                  </button>
                ) : (
                  <Link
                    to={link.href}
                    className={`font-medium transition-colors duration-200 text-xs xl:text-sm uppercase tracking-wider relative group ${isActive(link.href) ? 'text-white' : 'text-gray-300 hover:text-white'
                      }`}
                  >
                    {link.label}
                    <span className={`absolute bottom-0 left-0 h-0.5 bg-brand-gold transition-all duration-300 ${isActive(link.href) ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}></span>
                  </Link>
                )}

                {/* Dropdown Menu */}
                {link.sublinks && (
                  <AnimatePresence>
                    {activeDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className={`absolute top-full mt-1 bg-brand-navy border border-white/10 shadow-2xl overflow-hidden z-50 ${
                          link.label === 'PRODUCTS' 
                            ? "left-1/2 -translate-x-1/2 w-[95vw] max-w-[1400px] rounded-2xl" 
                            : "left-0 w-64 rounded-xl"
                        }`}
                      >
                        {link.label === 'PRODUCTS' ? (
                          <div className="grid grid-cols-12 w-full p-6 min-h-[400px]">
                            {/* Left Side: Image Display (3 cols) */}
                            <div className="col-span-3 relative overflow-hidden rounded-xl h-full">
                              {hoveredService ? (
                                <motion.div 
                                  key={hoveredService.id}
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  className="absolute inset-0"
                                >
                                  <img src={hoveredService.image} alt={hoveredService.title} className="w-full h-full object-cover rounded-xl opacity-70" />
                                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/60 to-transparent"></div>
                                  <div className="absolute bottom-6 left-6 right-6">
                                    <h4 className="text-white font-bold text-xl mb-2">{hoveredService.title}</h4>
                                    <p className="text-slate-300 text-sm line-clamp-3 leading-relaxed">{hoveredService.description}</p>
                                  </div>
                                </motion.div>
                              ) : (
                                <div className="absolute inset-0 bg-white/5 flex flex-col items-center justify-center p-8 text-center rounded-xl">
                                  <div className="w-20 h-20 rounded-full bg-brand-gold/20 flex items-center justify-center mb-6">
                                    <Shield size={40} className="text-brand-gold" />
                                  </div>
                                  <h3 className="text-white font-bold text-xl mb-2">Comprehensive Coverage</h3>
                                  <p className="text-slate-400 text-sm leading-relaxed">Hover over a product to learn more and see details.</p>
                                </div>
                              )}
                            </div>
                            
                            {/* Middle: Grid of Links (6 cols) */}
                            <div className="col-span-7 px-8 border-r border-white/10">
                              <h3 className="text-brand-gold font-bold text-xs uppercase tracking-widest mb-6">Our Insurance Products</h3>
                              <div className="grid grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-4 content-start">
                                {SERVICES.map((service) => {
                                  const Icon = service.icon;
                                  const href = service.id === 'commercial-auto' 
                                    ? '/products/commercial-auto-insurance' 
                                    : service.id === 'business'
                                      ? '/products/business-insurance'
                                      : `/products/${service.id}-insurance`;
                                  
                                  return (
                                    <Link
                                      key={service.id}
                                      to={href}
                                      onMouseEnter={() => setHoveredService(service)}
                                      className="flex items-center gap-3 p-2 rounded-lg text-sm text-gray-300 hover:bg-white/5 hover:text-white transition-all duration-200 group"
                                    >
                                      <div className="p-2 rounded-md bg-white/5 group-hover:bg-brand-gold group-hover:text-white transition-colors text-brand-gold shrink-0">
                                        <Icon size={18} />
                                      </div>
                                      <span className="font-medium leading-tight">{service.title}</span>
                                    </Link>
                                  );
                                })}
                              </div>
                            </div>

                            {/* Right Side: Contact Info (3 cols) */}
                            <div className="col-span-2 pl-8 py-2 flex flex-col">
                              <h3 className="text-brand-gold font-bold text-xs uppercase tracking-widest mb-6">Get in Touch</h3>
                              
                              <div className="space-y-6">
                                <div>
                                  <div className="flex items-center gap-3 text-white font-medium mb-1">
                                    <Phone size={16} className="text-brand-gold" />
                                    <span>{PHONE_NUMBER}</span>
                                  </div>
                                  <p className="text-xs text-slate-400 pl-7">Call us for a quick quote</p>
                                </div>

                                <div>
                                  <div className="flex items-start gap-3 text-white font-medium mb-1">
                                    <MapPin size={16} className="text-brand-gold shrink-0 mt-0.5" />
                                    <span className="text-sm leading-tight">{ADDRESS}</span>
                                  </div>
                                </div>

                                <Link 
                                  to="/contact"
                                  className="inline-block mt-4 text-center bg-brand-gold hover:bg-brand-goldHover text-white px-6 py-3 rounded-full font-bold transition-all text-sm shadow-lg hover:shadow-brand-gold/20"
                                >
                                  Contact an Agent
                                </Link>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className="py-2">
                            {link.sublinks.map((sublink) => (
                              <Link
                                key={sublink.label}
                                to={sublink.href}
                                className="block px-6 py-3 text-sm text-gray-300 hover:bg-white/5 hover:text-white hover:pl-8 transition-all duration-200"
                              >
                                {sublink.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="relative overflow-hidden flex items-center space-x-2 bg-brand-gold hover:bg-brand-goldHover text-white px-5 py-2.5 rounded-full font-bold transition-all duration-300 shadow-lg shadow-brand-gold/20 transform hover:scale-105 group"
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-10" />

              <Phone size={18} className="relative z-20" />
              <span className="relative z-20 hidden xl:inline">{PHONE_NUMBER}</span>
              <span className="relative z-20 inline xl:hidden">Call Now</span>
            </a>
          </div>

          {/* Mobile Menu Button - Visible on MD screens now due to extra links */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-brand-gold focus:outline-none transition-colors p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-brand-navy absolute top-full left-0 w-full shadow-2xl border-t border-white/10 h-[100vh] overflow-y-auto animate-fade-in z-40 pb-32">
          <div className="px-4 pt-4 pb-3 space-y-1">
            {NAV_LINKS.map((link) => (
              <div key={link.label}>
                {link.sublinks ? (
                  <div>
                    <button
                      onClick={() => setMobileDropdownOpen(mobileDropdownOpen === link.label ? null : link.label)}
                      className={`w-full flex justify-center items-center gap-2 px-4 py-3 rounded-xl text-lg font-bold transition-all ${mobileDropdownOpen === link.label ? 'bg-white/10 text-brand-gold' : 'text-white'}`}
                    >
                      {link.label}
                      <ChevronDown size={20} className={`transition-transform duration-300 ${mobileDropdownOpen === link.label ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {mobileDropdownOpen === link.label && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden bg-white/5 mx-2 rounded-xl mt-1"
                        >
                          {link.sublinks.map((sublink) => (
                            <Link
                              key={sublink.label}
                              to={sublink.href}
                              onClick={() => {
                                setIsOpen(false);
                                setMobileDropdownOpen(null);
                              }}
                              className="block px-6 py-3 text-white text-center hover:text-brand-gold border-b border-white/5 last:border-0"
                            >
                              {sublink.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 rounded-xl text-lg font-bold text-center transition-all ${isActive(link.href)
                      ? 'bg-white/10 text-brand-gold'
                      : 'text-white hover:bg-white/5 hover:text-brand-gold'
                      }`}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="block px-3 py-4 mt-4 mx-4 rounded-xl text-xl font-bold bg-brand-gold text-white text-center shadow-lg shadow-brand-gold/30 active:scale-95 transition-transform"
            >
              Call Us Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;