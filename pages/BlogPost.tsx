import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ARTICLES } from '../constants';
import { Article } from '../types';
import Section from '../components/ui/Section';
import { Calendar, Clock, ArrowLeft, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = ARTICLES.find(a => a.slug === slug);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

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

          {post.image && (!post.images || post.images.length <= 1) && (
            <div className="mt-12 rounded-3xl overflow-hidden shadow-xl border border-slate-100">
              <img src={post.image} alt={post.title} className="w-full h-auto max-h-[60vh] object-cover object-top" />
            </div>
          )}

          {/* Gallery for multiple images */}
          {post.images && post.images.length > 1 && (
            <div className="mt-12 pt-8 border-t border-slate-100">
              <h3 className="text-2xl font-bold text-brand-navy mb-6">Gallery</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {post.images.map((img, idx) => (
                  <div 
                    key={idx} 
                    className="rounded-xl overflow-hidden shadow-md aspect-square cursor-pointer group relative"
                    onClick={() => setSelectedImageIndex(idx)}
                  >
                    <img src={img} alt={`${post.title} - Image ${idx + 1}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-brand-navy/0 group-hover:bg-brand-navy/20 transition-colors flex items-center justify-center">
                      <span className="text-white opacity-0 group-hover:opacity-100 font-bold tracking-wide">VIEW</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </Section>

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && post.images && (
        <div className="fixed inset-0 z-[200] bg-brand-navy/95 flex items-center justify-center p-4">
          <button 
            onClick={() => setSelectedImageIndex(null)}
            className="absolute top-6 right-6 text-white hover:text-brand-gold transition-colors p-2"
          >
            <X size={32} />
          </button>
          
          <button 
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImageIndex(prev => prev === null ? 0 : (prev === 0 ? post.images!.length - 1 : prev - 1));
            }}
            className="absolute left-4 md:left-10 text-white hover:text-brand-gold transition-colors p-2"
          >
            <ChevronLeft size={48} />
          </button>

          <img 
            src={post.images[selectedImageIndex]} 
            alt="Gallery item" 
            className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
          />

          <button 
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImageIndex(prev => prev === null ? 0 : (prev === post.images!.length - 1 ? 0 : prev + 1));
            }}
            className="absolute right-4 md:right-10 text-white hover:text-brand-gold transition-colors p-2"
          >
            <ChevronRight size={48} />
          </button>
          
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 font-medium">
            {selectedImageIndex + 1} / {post.images.length}
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogPost;
