import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Trash2, X } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { FantasyHeader } from '../components/FantasyHeader';
import { FantasyFooter } from '../components/FantasyFooter';
import { HeroSection } from '../components/HeroSection';
import { useLanguage } from '../contexts/LanguageContext';
import { blogPosts } from '../data/blogPosts';
import theUnfinishedDream from '../assets/paintings/the_unfinished_dream.jpg';
import theDoor from '../assets/paintings/the_door.jpg';
import theWorld from '../assets/paintings/the_world.jpg';
import theGoodNews from '../assets/paintings/the_good_news.jpg';
import littleGirlAndSea from '../assets/paintings/little_girl_and_sea.jpg';
import onTheStreet from '../assets/paintings/on_the_street.jpg';
import unicorn from '../assets/paintings/unicorn.jpg';

interface Comment {
  id: string;
  comment: string;
  name: string;
  email: string;
  date: string;
}

export function BlogPostPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { t, language } = useLanguage();
  const [commentSubmitted, setCommentSubmitted] = useState(false);
  const [comments, setComments] = useState<Comment[]>([]);
  const [selectedImage, setSelectedImage] = useState<{ image: string; title: string } | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Mapping of images to their titles
  const imageTitles: Record<string, string> = {
    [theUnfinishedDream]: 'The Unfinished Dream',
    [theDoor]: 'The Door',
    [theWorld]: 'The World',
    [theGoodNews]: 'The Good News',
    [littleGirlAndSea]: 'Little Girl and the Sea',
    [onTheStreet]: 'On the Street',
    [unicorn]: 'Unicorn'
  };

  const getTitle = (enTitle: string) => {
    if (language === 'bg') {
      return t.artwork.paintings[enTitle as keyof typeof t.artwork.paintings] || enTitle;
    }
    return enTitle;
  };
  
  const postId = id ? parseInt(id, 10) : null;
  const post = postId ? blogPosts.find(p => p.id === postId) : null;

  // Load comments from localStorage on mount
  useEffect(() => {
    if (postId) {
      const storedComments = localStorage.getItem(`blog-comments-${postId}`);
      if (storedComments) {
        try {
          setComments(JSON.parse(storedComments));
        } catch (error) {
          console.error('Error loading comments:', error);
        }
      }
    }
  }, [postId]);

  // Handle escape key and body scroll for image modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedImage(null);
      }
    };
    if (selectedImage) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage, t, language]);

  // Auto-scroll functionality for image slider
  useEffect(() => {
    if (!sliderRef.current) return;

    let animationId: number | null = null;
    let scrollPosition = 0;
    const scrollSpeed = 0.1; // pixels per frame

    // Wait a bit for images to load and layout to settle
    const timeoutId = setTimeout(() => {
      if (!sliderRef.current) return;

      const autoScroll = () => {
        if (sliderRef.current) {
          const container = sliderRef.current;
          const contentWidth = container.scrollWidth;
          const containerWidth = container.clientWidth;
          
          // Only scroll if content is wider than container
          if (contentWidth > containerWidth) {
            scrollPosition += scrollSpeed;
            const maxScroll = contentWidth / 2; // Half because we duplicate the images
            
            if (scrollPosition >= maxScroll) {
              scrollPosition = 0;
            }
            
            // Use scrollTo for smoother scrolling
            container.scrollTo({
              left: scrollPosition,
              behavior: 'auto'
            });
          }
          animationId = requestAnimationFrame(autoScroll);
        }
      };

      animationId = requestAnimationFrame(autoScroll);
    }, 200);

    return () => {
      clearTimeout(timeoutId);
      if (animationId !== null) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  if (!post) {
    return (
      <div className="min-h-screen bg-fantasy-bg text-white">
        <FantasyHeader />
        <main className="py-20 px-4 text-center">
          <p className="font-body text-gray-300">{language === 'bg' ? 'Публикацията не е намерена' : 'Post not found'}</p>
          <button 
            onClick={() => navigate('/blog')} 
            className="mt-4 text-fantasy-accent hover:text-fantasy-accentLight transition-colors font-fantasy tracking-wider"
          >
            {language === 'bg' ? 'Към блога' : 'Back to Blog'}
          </button>
        </main>
        <FantasyFooter />
      </div>
    );
  }

  const getPostTitle = () => {
    return language === 'bg' ? post.bgTitle : post.enTitle;
  };

  const getPostContent = () => {
    return language === 'bg' ? post.bgContent : post.enContent;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    const commentText = formData.get('comment') as string;
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    
    // Create new comment
    const newComment: Comment = {
      id: Date.now().toString(),
      comment: commentText,
      name: name,
      email: email,
      date: new Date().toLocaleDateString(language === 'bg' ? 'bg-BG' : 'en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    };
    
    // Add comment to state
    const updatedComments = [newComment, ...comments];
    setComments(updatedComments);
    
    // Save to localStorage
    if (postId) {
      localStorage.setItem(`blog-comments-${postId}`, JSON.stringify(updatedComments));
    }
    
    // Show success message
    setCommentSubmitted(true);
    
    // Reset form
    e.currentTarget.reset();
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      setCommentSubmitted(false);
    }, 5000);
  };

  const handleDeleteComment = (commentId: string) => {
    if (window.confirm(language === 'bg' 
      ? 'Сигурни ли сте, че искате да изтриете този коментар?' 
      : 'Are you sure you want to delete this comment?')) {
      const updatedComments = comments.filter(comment => comment.id !== commentId);
      setComments(updatedComments);
      
      // Update localStorage
      if (postId) {
        localStorage.setItem(`blog-comments-${postId}`, JSON.stringify(updatedComments));
      }
    }
  };

  return (
    <div className="min-h-screen bg-fantasy-bg text-white selection:bg-fantasy-accent selection:text-fantasy-bg">
      <FantasyHeader />
      <main>
        <HeroSection 
          title={getPostTitle()} 
          subtitle={t.pages.blog.subtitle} 
          backgroundImage="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=2000&auto=format&fit=crop" 
          fullHeight={false} 
        />
        <section className="py-20 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={() => navigate('/blog')}
              className="flex items-center gap-2 text-fantasy-accent hover:text-fantasy-accentLight transition-colors mb-8 font-fantasy tracking-wider"
            >
              <ArrowLeft size={20} />
              <span>{language === 'bg' ? 'Към блога' : 'Back to Blog'}</span>
            </motion.button>

            {/* Post Content */}
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-fantasy-parchment/10 backdrop-blur-sm border border-fantasy-accent/20 rounded-sm p-8 md:p-12 hover:border-fantasy-accent/40 transition-colors relative group min-h-[200px]"
            >
              {/* Ornamental Top Border */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-fantasy-accent/50 to-transparent" />
              
              {/* Post Meta */}
              <div className="mb-6">
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                  <span className="font-fantasy tracking-wider">{post.date}</span>
                  <span>•</span>
                  <span>{post.category}</span>
                </div>
                {/* Post Title */}
                <h2 className="font-fantasy text-2xl md:text-3xl text-white mb-6">
                  {getPostTitle()}
                </h2>
              </div>

              {/* Post Content */}
              <div className="font-body text-lg leading-relaxed text-gray-200 whitespace-pre-line mt-4 pt-4 border-t border-fantasy-accent/10">
                {getPostContent() || <span className="text-gray-400 italic">No content available</span>}
              </div>
              {/* Ornamental Bottom Border */}
              <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-fantasy-accent/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.article>

            {/* Image Slider Section */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-12"
            >
              <div 
                ref={sliderRef}
                className="relative overflow-x-auto overflow-y-hidden bg-fantasy-parchment/5 border border-fantasy-accent/20 rounded-sm p-4 scrollbar-hide"
              >
                <div className="flex gap-4" style={{ width: 'max-content' }}>
                  {/* First set of images */}
                  {[
                    theUnfinishedDream,
                    theDoor,
                    theWorld,
                    theGoodNews,
                    littleGirlAndSea,
                    onTheStreet,
                    unicorn
                  ].map((image, index) => (
                    <div
                      key={`first-${index}`}
                      onClick={() => setSelectedImage({ 
                        image, 
                        title: imageTitles[image] || `Painting ${index + 1}` 
                      })}
                      className="flex-shrink-0 w-64 h-48 rounded-sm overflow-hidden border border-fantasy-accent/20 hover:border-fantasy-accent/50 transition-colors cursor-pointer"
                    >
                      <img
                        src={image}
                        alt={`Painting ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                  {/* Duplicate set for seamless loop */}
                  {[
                    theUnfinishedDream,
                    theDoor,
                    theWorld,
                    theGoodNews,
                    littleGirlAndSea,
                    onTheStreet,
                    unicorn
                  ].map((image, index) => (
                    <div
                      key={`second-${index}`}
                      onClick={() => setSelectedImage({ 
                        image, 
                        title: imageTitles[image] || `Painting ${index + 1}` 
                      })}
                      className="flex-shrink-0 w-64 h-48 rounded-sm overflow-hidden border border-fantasy-accent/20 hover:border-fantasy-accent/50 transition-colors cursor-pointer"
                    >
                      <img
                        src={image}
                        alt={`Painting ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
              <style>{`
                .scrollbar-hide {
                  -ms-overflow-style: none;
                  scrollbar-width: none;
                }
                .scrollbar-hide::-webkit-scrollbar {
                  display: none;
                }
              `}</style>
            </motion.section>

            {/* Comments Display Section */}
            {comments.length > 0 && (
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-12"
              >
                <div className="bg-fantasy-parchment/10 backdrop-blur-sm border border-fantasy-accent/20 rounded-sm p-8 md:p-12">
                  <h3 className="font-fantasy text-xl md:text-2xl text-fantasy-accent mb-6">
                    {language === 'bg' ? 'Коментари' : 'Comments'} ({comments.length})
                  </h3>
                  
                  <div className="space-y-6">
                    {comments.map((comment) => (
                      <motion.div
                        key={comment.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="border-b border-fantasy-accent/10 pb-6 last:border-b-0 last:pb-0"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h4 className="font-fantasy text-lg text-fantasy-accent mb-1">
                              {comment.name}
                            </h4>
                            <p className="text-sm text-gray-400">
                              {comment.date}
                            </p>
                          </div>
                          <button
                            onClick={() => handleDeleteComment(comment.id)}
                            className="text-gray-400 hover:text-red-400 transition-colors p-1 rounded-sm hover:bg-red-900/20"
                            aria-label={language === 'bg' ? 'Изтрий коментар' : 'Delete comment'}
                            title={language === 'bg' ? 'Изтрий коментар' : 'Delete comment'}
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                        <p className="font-body text-gray-200 leading-relaxed whitespace-pre-line">
                          {comment.comment}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.section>
            )}

            {/* Comment Form Section */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-12"
            >
              <div className="bg-fantasy-parchment/10 backdrop-blur-sm border border-fantasy-accent/20 rounded-sm p-8 md:p-12">
                <h3 className="font-fantasy text-xl md:text-2xl text-fantasy-accent mb-6">
                  {t.pages.blog.comments.title}
                </h3>
                
                <p className="text-sm text-gray-400 mb-6">
                  {t.pages.blog.comments.emailNotice} <span className="text-red-500">*</span>
                </p>

                {commentSubmitted && (
                  <div className="mb-6 p-4 bg-green-900/30 border border-green-500/50 rounded-sm text-green-300">
                    {language === 'bg' 
                      ? 'Вашият коментар е изпратен успешно! Благодарим ви.' 
                      : 'Your comment has been submitted successfully! Thank you.'}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Comment Field */}
                  <div>
                    <label htmlFor="comment" className="block text-white mb-2">
                      {t.pages.blog.comments.comment}: <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="comment"
                      name="comment"
                      rows={6}
                      required
                      className="w-full bg-gray-800 border border-gray-700 rounded-sm px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-fantasy-accent/50 focus:ring-1 focus:ring-fantasy-accent/50 resize-y"
                      placeholder=""
                    />
                  </div>

                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-white mb-2">
                      {t.pages.blog.comments.name} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full bg-gray-800 border border-gray-700 rounded-sm px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-fantasy-accent/50 focus:ring-1 focus:ring-fantasy-accent/50"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-white mb-2">
                      {t.pages.blog.comments.email} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full bg-gray-800 border border-gray-700 rounded-sm px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-fantasy-accent/50 focus:ring-1 focus:ring-fantasy-accent/50"
                    />
                  </div>


                  {/* Submit Button */}
                  <div className="flex gap-4">
                    <button
                      type="submit"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-sm font-fantasy tracking-wider transition-colors"
                    >
                      {t.pages.blog.comments.submit}
                    </button>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        const form = e.currentTarget.closest('form');
                        if (form) form.reset();
                      }}
                      className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-sm font-fantasy tracking-wider transition-colors"
                    >
                      {t.pages.blog.comments.cancel}
                    </button>
                  </div>
                </form>
              </div>
            </motion.section>

           
          </div>
        </section>
      </main>
      <FantasyFooter />

      {/* Image Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-4 cursor-pointer"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl max-h-[90vh] bg-fantasy-bg p-6 rounded-sm shadow-lg border border-fantasy-accent/30 overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-3 right-3 text-gray-400 hover:text-white transition-colors z-10"
                aria-label="Close image modal"
              >
                <X size={24} />
              </button>
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="max-w-full max-h-[70vh] object-contain mx-auto mb-4 rounded-sm border border-fantasy-accent/10"
              />
              <div className="text-center">
                <h3 className="font-fantasy text-2xl text-fantasy-accent">
                  {getTitle(selectedImage.title)}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
