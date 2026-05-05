import React, { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { TEAM } from '../constants';
import SEO from '../components/SEO';
import Section from '../components/ui/Section';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

const TeamMember: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const member = TEAM.find(m => m.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!member) {
    return <Navigate to="/about#team" replace />;
  }

  return (
    <div className="pt-24 pb-12 bg-brand-offWhite min-h-screen flex flex-col">
      <SEO 
        title={`${member.name} - Guardian Insurance Group`} 
        description={member.description.substring(0, 160)}
      />
      
      <Section className="flex-grow pt-8">
        <div className="max-w-6xl mx-auto">
          <Link 
            to="/about#team" 
            className="inline-flex items-center text-brand-gold hover:text-brand-navy transition-colors mb-8 font-bold"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to Team
          </Link>
          
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="w-full md:w-2/5 lg:w-1/3 relative"
              >
                <div className="aspect-[3/4] w-full">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="w-full md:w-3/5 lg:w-2/3 p-8 md:p-12 lg:p-16 flex flex-col justify-center"
              >
                <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-brand-navy mb-4">
                  {member.name}
                </h1>
                <p className="text-xl text-brand-gold font-bold uppercase tracking-wider mb-8">
                  {member.role.split(',').pop()?.trim()}
                </p>
                
                <div className="prose prose-lg text-slate-600 max-w-none">
                  {member.description.split('\n').map((paragraph, idx) => (
                    <p key={idx} className="mb-6 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default TeamMember;
