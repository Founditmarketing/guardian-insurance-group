import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ARTICLES } from '../constants';
import { Article } from '../types';
import Section from '../components/ui/Section';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = ARTICLES.find(a => a.slug === slug);

  if (!post) return <div className="pt-32 pb-16 min-h-screen text-center text-2xl font-bold">Post not found</div>;

  return (
    <div className="pt-20 pb-16 min-h-screen bg-slate-50">
      <Helmet>
        <title>{post.title} | Guardian Insurance Group</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>

      {/* Hero Section */}
      <Section className="bg-brand-navy relative overflow-hidden text-white min-h-[50vh] flex items-center">
        {post.image && (
          <div className="absolute inset-0">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover object-top opacity-30" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/60 to-transparent"></div>
        <div className="relative z-10 text-center max-w-5xl mx-auto px-4 mt-8">
          <div className="inline-block bg-brand-gold text-white text-sm font-bold px-4 py-1.5 rounded-full uppercase tracking-wide shadow-lg mb-6">
            {post.category}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-slate-300">
            {post.date && (
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-brand-gold" />
                {post.date}
              </div>
            )}
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-brand-gold" />
              {post.readTime}
            </div>
          </div>
        </div>
      </Section>

      <Section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <Link to="/blog" className="inline-flex items-center gap-2 text-brand-gold hover:text-brand-goldHover font-bold mb-12 transition-colors">
            <ArrowLeft size={20} />
            Back to Blog
          </Link>

          <div className="text-slate-700 leading-relaxed space-y-6 text-lg md:text-xl px-4 md:px-0">
            {post.content.split('\n\n').map((paragraph, idx) => {
              if (paragraph.startsWith('### ')) {
                return <h3 key={idx} className="text-2xl font-bold text-brand-navy mt-10 mb-4">{paragraph.replace('### ', '')}</h3>;
              }
              if (paragraph.startsWith('- ')) {
                return (
                  <ul key={idx} className="list-disc pl-6 space-y-2">
                    {paragraph.split('\n').map((item, i) => (
                      <li key={i}>{item.replace('- ', '').replace(/\*\*/g, '')}</li>
                    ))}
                  </ul>
                );
              }
              return <p key={idx}>{paragraph}</p>;
            })}
          </div>

          {post.image && (
            <div className="mt-12 rounded-3xl overflow-hidden shadow-xl border border-slate-100">
              <img src={post.image} alt={post.title} className="w-full h-auto max-h-[60vh] object-cover object-top" />
            </div>
          )}
        </div>
      </Section>
    </div>
  );
};

export default BlogPost;
