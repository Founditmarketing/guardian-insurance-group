import React, { useState } from 'react';
import Section from '../components/ui/Section';
import TextReveal from '../components/ui/TextReveal';
import SEO from '../components/SEO';
import { CheckCircle, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';

const PolicyQuestions: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success'>('idle');
  const form = React.useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('loading');

    // Simulate network request for now
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

  return (
    <div className="pt-20">
      <SEO
        title="Policy Questions"
        description="Have questions about your policy? Fill out the form below and we'll help you right away."
        canonical="/policy-questions"
      />
      
      <Section className="bg-brand-navy relative overflow-hidden text-white min-h-[30vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/60 to-transparent"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <TextReveal className="text-4xl md:text-5xl font-heading font-extrabold justify-center leading-tight mb-4">
            Policy Questions & Updates
          </TextReveal>
          <p className="text-lg text-slate-300 font-light max-w-2xl mx-auto">
            Need to make a change to your policy or have a quick question? Let us know below.
          </p>
        </div>
      </Section>

      <Section className="bg-brand-offWhite py-16">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl relative overflow-hidden border border-slate-100">
            {formState === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-white text-center p-8"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="text-green-600" size={40} />
                </div>
                <h3 className="text-2xl font-bold text-brand-navy mb-2">Request Received!</h3>
                <p className="text-slate-600">
                  Thank you. We will review your policy question and get back to you shortly.
                </p>
                <button
                  onClick={() => setFormState('idle')}
                  className="mt-8 text-brand-gold font-bold hover:underline"
                >
                  Submit another question
                </button>
              </motion.div>
            ) : null}

            <form ref={form} className="space-y-8" onSubmit={handleSubmit}>
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-brand-navy mb-2">Name <span className="text-red-500">*</span></label>
                <input
                  required
                  type="text"
                  name="user_name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-all bg-brand-offWhite"
                  placeholder="Your answer"
                />
              </div>

              {/* Phone or Email */}
              <div>
                <label className="block text-sm font-semibold text-brand-navy mb-2">Phone Number or Email <span className="text-red-500">*</span></label>
                <input
                  required
                  type="text"
                  name="contact_info"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-all bg-brand-offWhite"
                  placeholder="Your answer"
                />
              </div>

              {/* Policy Number */}
              <div>
                <label className="block text-sm font-semibold text-brand-navy mb-1">
                  Policy Number if Known <span className="text-red-500">*</span>
                </label>
                <p className="text-xs text-slate-500 mb-3">If Policy Number Unknown, Please List Carrier and Type i.e. Travelers Car</p>
                <input
                  required
                  type="text"
                  name="policy_info"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-all bg-brand-offWhite"
                  placeholder="Your answer"
                />
              </div>

              {/* How can we help you */}
              <div>
                <label className="block text-sm font-semibold text-brand-navy mb-2">How can we help you? <span className="text-red-500">*</span></label>
                <textarea
                  required
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-all bg-brand-offWhite resize-y"
                  placeholder="Your answer"
                ></textarea>
              </div>

              {/* ASAP Radio */}
              <div>
                <label className="block text-sm font-semibold text-brand-navy mb-4">Should this change be made ASAP? <span className="text-red-500">*</span></label>
                <div className="space-y-3">
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <div className="relative flex items-center justify-center mt-0.5">
                      <input type="radio" name="asap" value="Yes" required className="peer sr-only" />
                      <div className="w-5 h-5 rounded-full border-2 border-slate-300 peer-checked:border-brand-gold transition-colors"></div>
                      <div className="absolute w-2.5 h-2.5 rounded-full bg-brand-gold scale-0 peer-checked:scale-100 transition-transform"></div>
                    </div>
                    <span className="text-slate-700 group-hover:text-brand-navy transition-colors">Yes</span>
                  </label>
                  
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <div className="relative flex items-center justify-center mt-0.5">
                      <input type="radio" name="asap" value="No" required className="peer sr-only" />
                      <div className="w-5 h-5 rounded-full border-2 border-slate-300 peer-checked:border-brand-gold transition-colors"></div>
                      <div className="absolute w-2.5 h-2.5 rounded-full bg-brand-gold scale-0 peer-checked:scale-100 transition-transform"></div>
                    </div>
                    <span className="text-slate-700 group-hover:text-brand-navy transition-colors">No (If No, we will contact you to confirm when change should be effective.)</span>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                disabled={formState === 'loading'}
                className="w-full bg-brand-navy hover:bg-brand-navyLight text-white font-bold text-lg py-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2 mt-4"
              >
                {formState === 'loading' ? (
                  <>
                    <Loader2 className="animate-spin" size={24} />
                    Submitting...
                  </>
                ) : (
                  'Submit Question'
                )}
              </button>
            </form>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default PolicyQuestions;
