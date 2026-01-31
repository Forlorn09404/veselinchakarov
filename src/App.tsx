import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import { SearchProvider } from './contexts/SearchContext';
import { ScrollToTop } from './components/ScrollToTop';
import { ScrollToTopButton } from './components/ScrollToTopButton';
import { AboutPage } from './pages/AboutPage';
import { PaintingPage } from './pages/PaintingPage';
import { IllustrationsPage } from './pages/IllustrationsPage';
import { ComicsPage } from './pages/ComicsPage';
import { ContactPage } from './pages/ContactPage';
import { BlogPage } from './pages/BlogPage';
import { BlogPostPage } from './pages/BlogPostPage';
export function App() {
  return <LanguageProvider>
      <SearchProvider>
      <BrowserRouter>
          <ScrollToTop />
        <Routes>
          <Route path="/" element={<AboutPage />} />
          <Route path="/painting" element={<PaintingPage />} />
          <Route path="/illustrations" element={<IllustrationsPage />} />
          <Route path="/comics" element={<ComicsPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:id" element={<BlogPostPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
          <ScrollToTopButton />
      </BrowserRouter>
      </SearchProvider>
    </LanguageProvider>;
}