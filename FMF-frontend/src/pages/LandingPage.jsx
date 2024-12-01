import Header from '../components/landing/Header';
import HeroSection from '../components/landing/Hero';
import Features from '../components/landing/Features';
import Testimonials from '../components/landing/Testimonials';
import HowItWorks from '../components/landing/HowItWorks';
import Partners from '../components/landing/Partners';
import Footer from '../components/landing/Footer';
import TargetAudience from '../components/landing/TargetAudience';
import CallToAction from '../components/landing/CTA';
import AboutUs from '../components/landing/AboutUs';

const LandingPage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutUs />
      <HowItWorks />
      <Features />
      <Testimonials />
      <TargetAudience />
      <CallToAction />
      <Partners />
      <Footer />
    </>
  );
};

export default LandingPage;