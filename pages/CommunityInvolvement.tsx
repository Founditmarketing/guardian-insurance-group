import React from 'react';
import Section from '../components/ui/Section';
import TextReveal from '../components/ui/TextReveal';
import { COMMUNITY_POSTS } from '../constants';
import { Calendar, Clock } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const CommunityInvolvement: React.FC = () => {
  return (
    <div className="pt-20 pb-16 min-h-screen bg-slate-50">
      <Helmet>
        <title>Community Involvement | Guardian Insurance Group</title>
        <meta name="description" content="Learn about Guardian Insurance Group's commitment to serving and supporting our local community in Camdenton and Lake of the Ozarks." />
      </Helmet>

      {/* Hero Section */}
      <Section className="bg-brand-navy relative overflow-hidden text-white min-h-[40vh] flex items-center">
        <div className="absolute inset-0">
          <img src="/GIGteam.jpg" alt="Guardian Insurance Group Team" className="w-full h-full object-cover object-[center_25%] opacity-30" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/60 to-transparent"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 mt-8">

          <TextReveal className="text-4xl md:text-5xl font-heading font-extrabold justify-center leading-tight mb-4">
            Community Involvement
          </TextReveal>
          <TextReveal delay={0.2} className="text-xl text-slate-300 justify-center">
            Dedicated to supporting and giving back to the community we call home.
          </TextReveal>
        </div>
      </Section>

      {/* Community Grid */}
      <Section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {COMMUNITY_POSTS.map((post, index) => (
              <div 
                key={post.id} 
                className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Image Placeholder */}
                <div className="relative h-48 bg-slate-200 overflow-hidden group">
                  <img 
                    src={post.image || '/placeholder.jpg'} 
                    alt={post.title} 
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-brand-gold text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    {post.category}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-xs font-medium text-slate-500 mb-3">
                    {post.date && (
                      <div className="flex items-center gap-1">
                        <Calendar size={14} className="text-brand-gold" />
                        {post.date}
                      </div>
                    )}
                    <div className="flex items-center gap-1">
                      <Clock size={14} className="text-brand-gold" />
                      {post.readTime}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-brand-navy mb-3 line-clamp-2 hover:text-brand-gold transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-slate-600 text-sm mb-6 line-clamp-3 leading-relaxed flex-grow">
                    {post.excerpt}
                  </p>

                  <Link to={`/community-involvement/${post.slug}`} className="text-brand-gold font-bold text-sm uppercase tracking-wide flex items-center gap-2 hover:gap-3 transition-all mt-auto self-start">
                    Read More 
                    <span className="text-lg">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default CommunityInvolvement;
