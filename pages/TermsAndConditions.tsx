import React from 'react';
import Section from '../components/ui/Section';
import TextReveal from '../components/ui/TextReveal';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';

const TermsAndConditions: React.FC = () => {
    return (
        <div className="pt-20">
            <SEO
                title="Terms & Conditions"
                description="Terms and Conditions for Guardian Insurance Group. Please read our terms of service carefully."
                canonical="/terms"
            />

            {/* Header Section */}
            <Section className="bg-brand-navy relative overflow-hidden text-white py-20 flex items-center">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                <div className="relative z-10 text-center max-w-4xl mx-auto">
                    <TextReveal className="text-4xl md:text-5xl font-heading font-extrabold justify-center leading-tight mb-4 text-white">
                        Terms & Conditions
                    </TextReveal>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="text-brand-gold font-bold uppercase tracking-wider text-sm"
                    >
                        Effective Date: August 1, 2025
                    </motion.p>
                </div>
            </Section>

            {/* Content Section */}
            <Section className="bg-white">
                <div className="max-w-4xl mx-auto prose prose-slate prose-lg">
                    <div className="mb-12 text-slate-600 leading-relaxed">
                        <p className="mb-6">
                            Welcome to Guardian Insurance Group. By accessing our website or using our services, you agree to be bound by the following Terms and Conditions. Please read them carefully.
                        </p>

                        <h2 className="text-2xl font-heading font-bold text-brand-navy mt-12 mb-6">1. Use of Website</h2>
                        <p className="mb-6">
                            This website is intended for general informational purposes related to the services offered by Guardian Insurance Group. By using this website, you agree not to misuse or alter any content and to use it only for lawful purposes.
                        </p>

                        <h2 className="text-2xl font-heading font-bold text-brand-navy mt-12 mb-6">2. Services</h2>
                        <p className="mb-6">
                            All insurance quotes and coverage options provided by Guardian Insurance Group are subject to underwriting approval and may vary based on individual risk and eligibility. We reserve the right to change or discontinue any service at any time without prior notice.
                        </p>

                        <h2 className="text-2xl font-heading font-bold text-brand-navy mt-12 mb-6">3. Personal Information</h2>
                        <p className="mb-6">
                            By submitting your personal information through forms or communication channels on this website, you agree that we may use this information to contact you via phone, email, or text message. Message and data rates may apply. View our <a href="/#/privacy" className="text-brand-gold hover:underline">Privacy Policy</a> for full details on how your data is collected and used.
                        </p>

                        <h2 className="text-2xl font-heading font-bold text-brand-navy mt-12 mb-6">4. Communication</h2>
                        <p className="mb-6">
                            If you opt in to receive text messages from Guardian Insurance Group, you may receive messages related to your policy, quotes, or marketing promotions. Message frequency may vary. You may opt out at any time by replying STOP or get help by replying HELP.
                        </p>

                        <h2 className="text-2xl font-heading font-bold text-brand-navy mt-12 mb-6">5. Intellectual Property</h2>
                        <p className="mb-6">
                            All content, logos, text, graphics, and other materials on this website are the property of Guardian Insurance Group and may not be copied, reproduced, or used without written permission.
                        </p>

                        <h2 className="text-2xl font-heading font-bold text-brand-navy mt-12 mb-6">6. Limitation of Liability</h2>
                        <p className="mb-6">
                            Guardian Insurance Group is not responsible for any errors, omissions, or inaccuracies in the information presented on this website. All use of our services and website is at your own risk. We are not liable for any damages resulting from your use of this site or reliance on its content.
                        </p>

                        <h2 className="text-2xl font-heading font-bold text-brand-navy mt-12 mb-6">7. External Links</h2>
                        <p className="mb-6">
                            This site may contain links to third-party websites. Guardian Insurance Group is not responsible for the content or practices of any third-party sites and does not endorse or guarantee their accuracy or reliability.
                        </p>

                        <h2 className="text-2xl font-heading font-bold text-brand-navy mt-12 mb-6">8. Changes to These Terms</h2>
                        <p className="mb-6">
                            We reserve the right to update or change these Terms & Conditions at any time. Continued use of our site and services after any changes constitutes your acceptance of the revised terms.
                        </p>

                        <h2 className="text-2xl font-heading font-bold text-brand-navy mt-12 mb-6">9. Governing Law</h2>
                        <p className="mb-6">
                            These Terms & Conditions are governed by the laws of the State of Missouri. Any disputes will be resolved under the jurisdiction of Missouri courts.
                        </p>

                        <h2 className="text-2xl font-heading font-bold text-brand-navy mt-12 mb-6">Contact Us</h2>
                        <p className="mb-4">If you have any questions about these Terms & Conditions, please contact us at:</p>
                        <div className="bg-brand-offWhite p-6 rounded-xl border border-slate-100">
                            <p className="font-bold text-brand-navy mb-2">Guardian Insurance Group</p>
                            <p className="mb-1">257 N Business Route 5, Camdenton, MO 65020</p>
                            <p className="mb-1">Phone: <a href="tel:573-410-1441" className="text-brand-gold hover:underline">(573) 410-1441</a></p>
                            <p>Email: <a href="mailto:paula@guardiangroupmo.com" className="text-brand-gold hover:underline">paula@guardiangroupmo.com</a></p>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default TermsAndConditions;
