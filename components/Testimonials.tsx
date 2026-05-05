import React, { useState } from 'react';
import { TESTIMONIALS } from '../constants';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const Testimonials: React.FC = () => {
  // Mobile Pagination
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  // Desktop Pagination
  const [desktopPage, setDesktopPage] = useState(0);
  const [desktopDirection, setDesktopDirection] = useState(0);
  const itemsPerPage = 4; // Show 4 reviews at a time on desktop
  const maxDesktopPage = Math.ceil(TESTIMONIALS.length / itemsPerPage) - 1;

  const nextDesktop = () => {
    setDesktopDirection(1);
    setDesktopPage((prev) => (prev + 1 > maxDesktopPage ? 0 : prev + 1));
  };

  const prevDesktop = () => {
    setDesktopDirection(-1);
    setDesktopPage((prev) => (prev - 1 < 0 ? maxDesktopPage : prev - 1));
  };

  const currentDesktopItems = TESTIMONIALS.slice(desktopPage * itemsPerPage, (desktopPage + 1) * itemsPerPage);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 50 : -50,
      opacity: 0
    })
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <div id="testimonials" className="bg-brand-navy py-16 md:py-24 relative overflow-hidden">
        {/* Background Texture Overlay */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/cubes.png')" }}></div>
        
        {/* Decorative Circle */}
        <div className="absolute -left-20 top-20 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl"></div>

        <div className="max-w-[1600px] w-full mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-heading font-bold text-white mb-6">What the Lake of the Ozarks is Saying</h2>
                <a 
                    href="https://www.google.com/search?q=guardian+insurance+group+Camdenton%2C+MO&rlz=1C5CHFA_enUS1003US1005&oq=gua&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGDsyBggCEEUYOTINCAMQABiDARixAxiABDIGCAQQRRg8MgYIBRBFGDwyBggGEEUYPDIGCAcQRRg90gEIMTU2MWowajeoAgCwAgA&sourceid=chrome&ie=UTF-8#lrd=0x87c4df30074a53ef:0x21dbe3d4499ebbc0,3,,,,"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-brand-gold hover:bg-brand-goldHover text-white px-8 py-3 rounded-full font-bold transition-all shadow-lg hover:shadow-brand-gold/50 hover:-translate-y-1"
                >
                    <Star size={18} fill="currentColor" />
                    Leave a Google Review
                </a>
            </div>

            {/* MOBILE VIEW */}
            <div className="md:hidden max-w-lg mx-auto">
                <div className="bg-white rounded-2xl p-6 shadow-2xl relative min-h-[300px]">
                    <div className="absolute -top-6 left-8 bg-brand-gold rounded-full p-3 shadow-lg z-20">
                        <Quote className="text-white" size={24} />
                    </div>

                    <div className="overflow-hidden relative h-full pb-16">
                      <AnimatePresence mode='wait' custom={direction}>
                        <motion.div
                          key={currentIndex}
                          custom={direction}
                          variants={slideVariants}
                          initial="enter"
                          animate="center"
                          exit="exit"
                          transition={{
                            x: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: { duration: 0.2 }
                          }}
                          className="flex flex-col items-center gap-6 h-full mt-4"
                        >
                            <div className="flex-grow text-center">
                                <div className="flex justify-center text-brand-gold mb-4 gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={20} fill="currentColor" />
                                    ))}
                                </div>
                                <p className="text-base font-medium italic mb-6 leading-relaxed text-brand-navy">
                                    "{current.text}"
                                </p>
                                <div className="w-full flex justify-between items-end px-2">
                                    <div className="text-left">
                                        <h4 className="font-bold text-brand-navy text-lg">{current.author}</h4>
                                        <span className="text-slate-400 text-sm flex items-center gap-1 mt-1">
                                          <span className="w-1.5 h-1.5 rounded-full bg-brand-gold inline-block"></span>
                                          {current.location}
                                        </span>
                                    </div>
                                    <Link to="/reviews" className="text-brand-gold hover:text-brand-navy font-bold text-xs uppercase tracking-wide transition-colors whitespace-nowrap pb-1">
                                      Read More
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                      </AnimatePresence>
                    </div>

                    {/* Mobile Controls inside card */}
                    <div className="flex justify-center gap-3 absolute bottom-6 left-0 right-0 z-20">
                        <button 
                            onClick={prev}
                            className="p-3 rounded-full border border-slate-200 text-slate-400 hover:text-brand-navy hover:bg-slate-50 transition-all active:scale-95 bg-white shadow-sm"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button 
                             onClick={next}
                            className="p-3 rounded-full border border-slate-200 text-slate-400 hover:text-brand-navy hover:bg-slate-50 transition-all active:scale-95 bg-white shadow-sm"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>
                
                 <div className="mt-8 flex justify-center gap-2">
                    {TESTIMONIALS.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => {
                              setDirection(idx > currentIndex ? 1 : -1);
                              setCurrentIndex(idx);
                            }}
                            className={`h-2 rounded-full transition-all duration-300 ${
                                idx === currentIndex ? 'bg-brand-gold w-8' : 'bg-brand-navyLight/30 w-2 hover:bg-brand-navyLight'
                            }`}
                        />
                    ))}
                </div>
            </div>

            {/* DESKTOP VIEW */}
            <div className="hidden md:block relative">
                <div className="overflow-hidden">
                  <AnimatePresence mode='wait' custom={desktopDirection}>
                    <motion.div
                      key={desktopPage}
                      custom={desktopDirection}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 }
                      }}
                      className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-6"
                    >
                        {currentDesktopItems.map((testimonial) => (
                            <div key={testimonial.id} className="bg-white rounded-2xl p-6 lg:p-8 shadow-xl relative h-full flex flex-col hover:shadow-2xl transition-shadow border border-slate-100">
                                <div className="absolute -top-4 left-6 bg-brand-gold rounded-full p-2 shadow-lg z-20">
                                    <Quote className="text-white" size={16} />
                                </div>
                                <div className="flex text-brand-gold mb-4 gap-1 mt-2">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={16} fill="currentColor" />
                                    ))}
                                </div>
                                <p className="text-sm text-brand-navy font-medium italic mb-6 flex-grow leading-relaxed line-clamp-5">
                                    "{testimonial.text}"
                                </p>
                                <div className="flex justify-between items-end w-full">
                                    <div>
                                        <h4 className="font-bold text-brand-navy text-sm lg:text-base">{testimonial.author}</h4>
                                        <span className="text-slate-500 text-xs flex items-center gap-1 mt-1">
                                          <span className="w-1.5 h-1.5 rounded-full bg-brand-gold inline-block"></span>
                                          {testimonial.location}
                                        </span>
                                    </div>
                                    <Link to="/reviews" className="text-brand-gold hover:text-brand-navy font-bold text-xs uppercase tracking-wide transition-colors whitespace-nowrap pb-0.5">
                                      Read More
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                  </AnimatePresence>
                </div>
                
                {/* Desktop Controls */}
                <div className="flex justify-center gap-4 mt-8">
                    <button 
                        onClick={prevDesktop}
                        className="p-4 rounded-full bg-white/10 text-white hover:bg-brand-gold hover:text-white transition-all backdrop-blur-md border border-white/20 shadow-lg hover:shadow-brand-gold/50"
                        title="Previous Reviews"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button 
                         onClick={nextDesktop}
                        className="p-4 rounded-full bg-white/10 text-white hover:bg-brand-gold hover:text-white transition-all backdrop-blur-md border border-white/20 shadow-lg hover:shadow-brand-gold/50"
                        title="Next Reviews"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>
            </div>

        </div>
    </div>
  );
};

export default Testimonials;