import Header from '../components/landing/Header';
import HeroSection from '../components/landing/Hero';
import Features from '../components/landing/Features';
import Testimonials from '../components/landing/Testimonials';
import HowItWorks from '../components/landing/HowItWorks';
import Partners from '../components/landing/Partners';
import FaqSection from '../components/landing/FaqSection';
import NewsletterSignup from '../components/landing/NewsletterSignup';
import Footer from '../components/landing/Footer';

const LandingPage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <Features />
      <Testimonials />
      <HowItWorks />
      <Partners />
      <NewsletterSignup />
      <FaqSection />
      <Footer />
    </>
  );
};

export default LandingPage;