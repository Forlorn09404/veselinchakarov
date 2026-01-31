import { useState } from 'react';
import { motion } from 'framer-motion';
import { FantasyHeader } from '../components/FantasyHeader';
import { FantasyFooter } from '../components/FantasyFooter';
import { HeroSection } from '../components/HeroSection';
import { useLanguage } from '../contexts/LanguageContext';
import { Mail, MapPin, Phone } from 'lucide-react';

export function ContactPage() {
  const { t, language } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formsubmit.co/ajax/your-email@email.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          subject: formData.get('subject'),
          message: formData.get('message'),
          _subject: 'New Contact Form Submission',
          _captcha: 'false'
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        form.reset();
        setTimeout(() => {
          setSubmitStatus('idle');
        }, 5000);
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Email sending error:', error);
      setSubmitStatus('error');
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };
  return <div className="min-h-screen bg-fantasy-bg text-white selection:bg-fantasy-accent selection:text-fantasy-bg">
      <FantasyHeader />
      <main>
        <HeroSection title={t.pages.contact.title} subtitle={t.pages.contact.subtitle} backgroundImage="https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=2000&auto=format&fit=crop" fullHeight={false} />

        <section className="py-20 px-4 md:px-8 relative">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">
            {/* Contact Info */}
            <motion.div initial={{
            opacity: 0,
            x: -30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} className="w-full md:w-1/3 space-y-8">
              <div className="bg-fantasy-parchment/10 backdrop-blur-sm border border-fantasy-accent/20 p-8 rounded-sm relative overflow-hidden group hover:border-fantasy-accent/40 transition-colors">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-fantasy-accent/50 to-transparent" />

                <h3 className="font-fantasy text-2xl text-fantasy-accent mb-6">
                  {t.pages.contact.subtitle}
                </h3>

                <div className="space-y-6 font-body text-lg text-gray-300">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-fantasy-accent/10 rounded-full text-fantasy-accent">
                      <MapPin size={20} />
                    </div>
                    <span>{t.pages.contact.info.location}</span>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-fantasy-accent/10 rounded-full text-fantasy-accent">
                      <Mail size={20} />
                    </div>
                    <span>{t.pages.contact.info.email}</span>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-fantasy-accent/10 rounded-full text-fantasy-accent">
                      <Phone size={20} />
                    </div>
                    <span>{t.pages.contact.info.phone}</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div initial={{
            opacity: 0,
            x: 30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} className="w-full md:w-2/3">
              <div className="bg-fantasy-parchment text-fantasy-text p-8 md:p-12 rounded-sm shadow-2xl relative" style={{
              backgroundImage: `url("https://www.transparenttextures.com/patterns/aged-paper.png"), linear-gradient(to bottom right, #f5e6d3, #e8d5b7)`
            }}>
                {/* Ornamental Corners */}
                <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-fantasy-text/30 rounded-tl-lg" />
                <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-fantasy-text/30 rounded-tr-lg" />
                <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-fantasy-text/30 rounded-bl-lg" />
                <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-fantasy-text/30 rounded-br-lg" />

                <form 
                  onSubmit={handleSubmit}
                  className="space-y-6 relative z-10"
                >
                  {submitStatus === 'success' && (
                    <div className="p-4 bg-green-900/30 border border-green-500/50 rounded-sm text-green-300 text-center mb-4">
                      {language === 'bg' 
                        ? 'Съобщението е изпратено успешно! Благодарим ви.' 
                        : 'Message sent successfully! Thank you.'}
                    </div>
                  )}
                  {submitStatus === 'error' && (
                    <div className="p-4 bg-red-900/30 border border-red-500/50 rounded-sm text-red-300 text-center mb-4">
                      {language === 'bg' 
                        ? 'Възникна грешка. Моля, опитайте отново.' 
                        : 'An error occurred. Please try again.'}
                    </div>
                  )}
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="font-fantasy text-sm tracking-wider text-fantasy-text/80 uppercase">
                        {t.pages.contact.form.name}
                      </label>
                      <input 
                        type="text" 
                        id="name"
                        name="name" 
                        required
                        className="w-full bg-fantasy-bg/5 border-b-2 border-fantasy-text/20 p-3 focus:outline-none focus:border-fantasy-accent transition-colors font-body text-lg placeholder-fantasy-text/30" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="font-fantasy text-sm tracking-wider text-fantasy-text/80 uppercase">
                        {t.pages.contact.form.email}
                      </label>
                      <input 
                        type="email" 
                        id="email"
                        name="email" 
                        required
                        className="w-full bg-fantasy-bg/5 border-b-2 border-fantasy-text/20 p-3 focus:outline-none focus:border-fantasy-accent transition-colors font-body text-lg placeholder-fantasy-text/30" 
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="font-fantasy text-sm tracking-wider text-fantasy-text/80 uppercase">
                      {t.pages.contact.form.subject}
                    </label>
                    <input 
                      type="text" 
                      id="subject"
                      name="subject" 
                      required
                      className="w-full bg-fantasy-bg/5 border-b-2 border-fantasy-text/20 p-3 focus:outline-none focus:border-fantasy-accent transition-colors font-body text-lg placeholder-fantasy-text/30" 
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="font-fantasy text-sm tracking-wider text-fantasy-text/80 uppercase">
                      {t.pages.contact.form.message}
                    </label>
                    <textarea 
                      rows={5} 
                      id="message"
                      name="message" 
                      required
                      className="w-full bg-fantasy-bg/5 border-b-2 border-fantasy-text/20 p-3 focus:outline-none focus:border-fantasy-accent transition-colors font-body text-lg placeholder-fantasy-text/30 resize-none" 
                    />
                  </div>

                  <div className="pt-4 text-center">
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="group relative px-8 py-3 bg-fantasy-text text-fantasy-parchment font-fantasy tracking-widest uppercase text-sm hover:bg-fantasy-accent hover:text-fantasy-text transition-colors duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <span className="relative z-10">
                        {isSubmitting 
                          ? (language === 'bg' ? 'Изпращане...' : 'Sending...') 
                          : t.pages.contact.form.submit}
                      </span>
                      <div className="absolute inset-0 border border-fantasy-text/50 translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300" />
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <FantasyFooter />
    </div>;
}