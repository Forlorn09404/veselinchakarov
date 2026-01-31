import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FantasyHeader } from '../components/FantasyHeader';
import { FantasyFooter } from '../components/FantasyFooter';
import { HeroSection } from '../components/HeroSection';
import { useLanguage } from '../contexts/LanguageContext';
import { blogPosts } from '../data/blogPosts';
import { ExternalLink } from 'lucide-react';

export function BlogPage() {
  const { t, language } = useLanguage();
  
  const getPostTitle = (post: typeof blogPosts[0]) => {
    return language === 'bg' ? post.bgTitle : post.enTitle;
  };

  const getPostContent = (post: typeof blogPosts[0]) => {
    return language === 'bg' ? post.bgContent : post.enContent;
  };

  const getLinkText = (link: { enText: string; bgText: string; url: string }) => {
    return language === 'bg' ? link.bgText : link.enText;
  };

  const formatDate = (dateString: string) => {
    // Simple date formatting - you can enhance this later
    return dateString;
  };
  
  return (
    <div className="min-h-screen bg-fantasy-bg text-white selection:bg-fantasy-accent selection:text-fantasy-bg">
      <FantasyHeader />
      <main>
        <HeroSection 
          title={t.pages.blog.title} 
          subtitle={t.pages.blog.subtitle} 
          backgroundImage="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=2000&auto=format&fit=crop" 
          fullHeight={false} 
        />
        <section className="py-20 px-4 md:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-fantasy-parchment/10 backdrop-blur-sm border border-fantasy-accent/20 rounded-sm p-8 md:p-12 hover:border-fantasy-accent/40 transition-colors relative group"
              >
                {/* Ornamental Top Border */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-fantasy-accent/50 to-transparent" />
                
                {/* Post Header */}
                <div className="mb-6">
                  {post.id === 1 ? (
                    <Link to={`/blog/${post.id}`} className="block">
                      <h2 className="font-fantasy text-2xl md:text-3xl text-fantasy-accent mb-3 group-hover:text-fantasy-accentLight transition-colors cursor-pointer">
                        {getPostTitle(post)}
                      </h2>
                    </Link>
                  ) : (
                    <h2 className="font-fantasy text-2xl md:text-3xl text-fantasy-accent mb-3 group-hover:text-fantasy-accentLight transition-colors">
                      {getPostTitle(post)}
                    </h2>
                  )}
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <span className="font-fantasy tracking-wider">{formatDate(post.date)}</span>
                    <span>•</span>
                    <span>{post.category}</span>
                  </div>
                </div>

                {/* Post Content */}
                {getPostContent(post) && (
                  <div className="font-body text-lg leading-relaxed text-gray-300 mb-6 whitespace-pre-line">
                    {getPostContent(post)}
                  </div>
                )}

                {/* Links */}
                {post.links && post.links.length > 0 && (
                  <div className="mt-6 pt-6 border-t border-fantasy-accent/20">
                    <h3 className="font-fantasy text-sm text-fantasy-accent mb-4 tracking-wider uppercase">
                      {t.pages.blog.links}
                    </h3>
                    <ul className="space-y-2">
                      {post.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <a
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-fantasy-accent hover:text-fantasy-accentLight transition-colors group/link"
                          >
                            <ExternalLink size={16} className="opacity-60 group-hover/link:opacity-100 transition-opacity" />
                            <span className="font-body">{getLinkText(link)}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Ornamental Bottom Border */}
                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-fantasy-accent/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.article>
            ))}
          </div>
        </section>
      </main>
      <FantasyFooter />
    </div>
  );
}
