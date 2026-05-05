import React, { useRef } from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { PHONE_NUMBER } from '../constants';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero: React.FC = () => {
  const ref = useRef(null);

  // Scroll Logic - Only used for text opacity fading now
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const y = useTransform(scrollY, [0, 1000], ["0%", "30%"]);

  return (
    <div
      ref={ref}
      id="home"
      className="relative h-screen min-h-[600px] w-full overflow-hidden flex items-center justify-center bg-brand-navy"
    >
      {/* Background with Overlay - Video */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-brand-navy/60 z-10 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-transparent z-10"></div>
        <motion.img
          initial={{ scale: 1 }}
          animate={{ scale: 1.1 }}
          transition={{ duration: 30, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
          src="/GIGteam.jpg"
          alt="Guardian Insurance Group Team"
          className="w-full h-full object-cover object-[center_25%]"
        />
      </motion.div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col md:flex-row items-center justify-between">

        {/* Text Content */}
        <motion.div style={{ opacity }} className="text-center md:text-left text-white max-w-2xl mt-16 md:mt-0">
          <motion.div
            initial={{ opacity: 1, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 mb-6"
          >
            <div className="flex text-brand-gold">
              {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
            </div>
            <span className="text-xs font-bold tracking-wide uppercase text-brand-gold">
              <span className="hidden sm:inline">5-Star Independent Agency</span>
              <span className="sm:hidden">5-Star Agency</span>
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 1, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-heading font-extrabold leading-tight mb-6 tracking-tight"
          >
            Guarding What <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-yellow-200 to-brand-gold animate-shimmer bg-[length:200%_100%]">
              You Love.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 1, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-base sm:text-lg md:text-xl text-slate-100 mb-8 max-w-lg mx-auto md:mx-0 font-light leading-relaxed"
          >
            Your trusted independent insurance partner. We provide expert guidance and comprehensive coverage to protect your family, your business, and your future.
          </motion.p>

          <motion.div
            initial={{ opacity: 1, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start"
          >
            <a
              href="#services"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-bold rounded-xl hover:bg-white hover:text-brand-navy transition-all duration-300 w-full sm:w-auto text-center hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            >
              Explore Coverage
            </a>
          </motion.div>
        </motion.div>

        {/* Floating Quote Card */}
        <motion.div
          style={{ opacity }}
          className="mt-12 md:mt-0 w-full max-w-md perspective-1000 hidden md:block"
        >
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.8, type: "spring" }}
            className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-white/10 transform transition-transform hover:scale-[1.02] relative overflow-hidden"
          >
            {/* Glossy sheen effect */}
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/10 to-transparent pointer-events-none"></div>

            <h3 className="text-2xl font-heading font-bold text-white mb-2 relative z-10">Get Your Free Quote</h3>
            <p className="text-slate-200 mb-6 text-sm relative z-10">Speak directly with a local agent about your personal or business needs.</p>

            <div className="space-y-4 relative z-10">
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="block w-full bg-white hover:bg-slate-100 text-brand-navy text-center py-4 rounded-xl font-bold text-lg transition-colors flex items-center justify-center gap-2 shadow-lg"
              >
                Call {PHONE_NUMBER}
              </a>
              <div className="relative flex py-2 items-center">
                <div className="flex-grow border-t border-white/20"></div>
                <span className="flex-shrink-0 mx-4 text-slate-300 text-xs uppercase font-bold tracking-wider">Or</span>
                <div className="flex-grow border-t border-white/20"></div>
              </div>
              <button
                className="block w-full bg-brand-gold hover:bg-brand-goldHover text-white text-center py-4 rounded-xl font-bold text-lg shadow-lg shadow-brand-gold/30 transition-all flex items-center justify-center gap-2 group hover:shadow-brand-gold/50"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Start Online Request
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.div
        style={{ opacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block text-white"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;