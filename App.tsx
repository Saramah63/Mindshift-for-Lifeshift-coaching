import { useState, useEffect } from 'react';
import { Hero } from './components/landing/Hero';
import { AboutSara } from './components/landing/AboutSara';
import { WhatIsCoaching } from './components/landing/WhatIsCoaching';
import { LanguageSupport } from './components/landing/LanguageSupport';
import { HowItWorks } from './components/landing/HowItWorks';
import { Testimonials } from './components/landing/Testimonials';
import { BookingSection } from './components/landing/BookingSection';
import { Pricing } from './components/landing/Pricing';
import { CTA } from './components/landing/CTA';
import { Footer } from './components/landing/Footer';
import { CoachingAgreement } from './components/agreement/CoachingAgreement';
import { HeroFa } from './components/landing/fa/HeroFa';
import { AboutSaraFa } from './components/landing/fa/AboutSaraFa';
import { WhatIsCoachingFa } from './components/landing/fa/WhatIsCoachingFa';
import { LanguageSupportFa } from './components/landing/fa/LanguageSupportFa';
import { HowItWorksFa } from './components/landing/fa/HowItWorksFa';
import { TestimonialsFa } from './components/landing/fa/TestimonialsFa';
import { BookingSectionFa } from './components/landing/fa/BookingSectionFa';
import { PricingFa } from './components/landing/fa/PricingFa';
import { CTAFa } from './components/landing/fa/CTAFa';
import { FooterFa } from './components/landing/fa/FooterFa';
import { CoachingAgreementFa } from './components/agreement/CoachingAgreementFa';
import { Languages, FileText } from 'lucide-react';

export default function App() {
  const [language, setLanguage] = useState<'en' | 'fa'>('en');
  const [showAgreement, setShowAgreement] = useState(false);

  // Update meta tags and HTML lang attribute when language changes
  useEffect(() => {
    const htmlElement = document.documentElement;
    htmlElement.setAttribute('lang', language);
    htmlElement.setAttribute('dir', language === 'fa' ? 'rtl' : 'ltr');

    // Update page title based on language
    if (language === 'fa') {
      document.title = 'سارا محمودی - کوچ حرفه‌ای زندگی | مایند‌شیفت برای لایف‌شیفت';
      
      // Update meta description
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', 'ذهنیت خود را تغییر دهید، زندگی خود را متحول کنید. سارا محمودی کوچینگ حرفه‌ای زندگی به زبان فارسی و انگلیسی ارائه می‌دهد. تخصص در کوچینگ متخصصان بین‌المللی، مهاجران و افراد فارسی‌زبان. رزرو مشاوره رایگان 30 دقیقه‌ای.');
      }

      // Update Open Graph title
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) {
        ogTitle.setAttribute('content', 'سارا محمودی - کوچ حرفه‌ای زندگی | ذهنیت خود را تغییر دهید، زندگی خود را متحول کنید');
      }

      // Update Open Graph description
      const ogDescription = document.querySelector('meta[property="og:description"]');
      if (ogDescription) {
        ogDescription.setAttribute('content', 'کوچینگ تخصصی زندگی به زبان فارسی و انگلیسی. پشتیبانی ویژه از متخصصان بین‌المللی، مهاجران و تحول شخصی. همین امروز مشاوره رایگان خود را رزرو کنید.');
      }
    } else {
      document.title = 'Sara Mahmodi - Professional Life Coach | Mindshift for Lifeshift | English & Persian Coaching';
      
      // Restore English meta description
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', 'Transform your mindset, transform your life. Sara Mahmodi offers professional life coaching in English and Persian (Farsi). Specialized coaching for international professionals, expats, ESL speakers, and Persian-speaking clients. Book your free 30-minute consultation. Online sessions worldwide.');
      }

      // Restore English Open Graph title
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) {
        ogTitle.setAttribute('content', 'Sara Mahmodi - Professional Life Coach | Transform Your Mindset, Transform Your Life');
      }

      // Restore English Open Graph description
      const ogDescription = document.querySelector('meta[property="og:description"]');
      if (ogDescription) {
        ogDescription.setAttribute('content', 'Expert life coaching in English and Persian. Specialized support for international professionals, expats, and personal transformation. Book your free consultation today.');
      }
    }
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fa' : 'en');
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (showAgreement) {
    return language === 'en' ? (
      <CoachingAgreement 
        onClose={() => setShowAgreement(false)} 
        language={language}
        onToggleLanguage={toggleLanguage}
      />
    ) : (
      <CoachingAgreementFa 
        onClose={() => setShowAgreement(false)} 
        language={language}
        onToggleLanguage={toggleLanguage}
      />
    );
  }

  return (
    <div className={`min-h-screen bg-white ${language === 'fa' ? 'rtl' : ''}`} dir={language === 'fa' ? 'rtl' : 'ltr'}>
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <a href="#home" className="text-xl text-blue-700 hover:text-blue-800 transition-colors">
              {language === 'en' ? 'Mindshift for Lifeshift' : 'مایند‌شیفت برای لایف‌شیفت'}
            </a>
            <div className="hidden md:flex gap-6">
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-700 transition-colors">
                {language === 'en' ? 'About' : 'درباره'}
              </button>
              <button onClick={() => scrollToSection('sessions')} className="text-gray-700 hover:text-blue-700 transition-colors">
                {language === 'en' ? 'Sessions' : 'جلسات'}
              </button>
              <button onClick={() => scrollToSection('pricing')} className="text-gray-700 hover:text-blue-700 transition-colors">
                {language === 'en' ? 'Pricing' : 'قیمت‌ها'}
              </button>
              <button onClick={() => setShowAgreement(true)} className="text-gray-700 hover:text-blue-700 transition-colors flex items-center gap-1">
                <FileText className="w-4 h-4" />
                {language === 'en' ? 'Agreement' : 'قرارداد'}
              </button>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Languages className="w-4 h-4 text-blue-600" />
              <span className="text-sm text-gray-700">{language === 'en' ? 'فارسی' : 'English'}</span>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              {language === 'en' ? 'Get Started' : 'شروع کنید'}
            </button>
          </div>
        </div>
      </nav>

      {language === 'en' ? (
        <>
          <Hero scrollToSection={scrollToSection} />
          <AboutSara />
          <WhatIsCoaching />
          <LanguageSupport />
          <HowItWorks />
          <Testimonials />
          <BookingSection />
          <Pricing />
          <CTA />
          <Footer />
        </>
      ) : (
        <>
          <HeroFa scrollToSection={scrollToSection} />
          <AboutSaraFa />
          <WhatIsCoachingFa />
          <LanguageSupportFa />
          <HowItWorksFa />
          <TestimonialsFa />
          <BookingSectionFa />
          <PricingFa />
          <CTAFa />
          <FooterFa />
        </>
      )}
    </div>
  );
}