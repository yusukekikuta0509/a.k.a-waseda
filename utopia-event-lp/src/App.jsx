import { useEffect, useRef } from 'react';
import HeroSection from './components/HeroSection';
import ExecutiveGreeting from './components/ExecutiveGreeting';
import LogoExplanation from './components/LogoExplanation';
import PerformanceSchedule from './components/PerformanceSchedule';
import SpecialThanks from './components/SpecialThanks';
import Footer from './components/Footer';
import SectionNav from './components/SectionNav';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const sectionsRef = useRef([]);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: false,
      mirror: true,
    });
  }, []);

  // Handle section navigation
  const scrollToSection = (index) => {
    sectionsRef.current[index]?.scrollIntoView({ behavior: 'smooth' });
  };

  const addToRefs = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  return (
    <div className="bg-black text-white font-sans snap-y snap-mandatory h-screen overflow-y-scroll">
      <SectionNav onNavigate={scrollToSection} totalSections={6} />
      
      <section ref={addToRefs} className="snap-start h-screen">
        <HeroSection />
      </section>
      
      <section ref={addToRefs} className="snap-start h-screen">
        <ExecutiveGreeting />
      </section>
      
      <section ref={addToRefs} className="snap-start h-screen">
        <LogoExplanation />
      </section>
      
      <section ref={addToRefs} className="snap-start h-screen overflow-y-auto">
        <PerformanceSchedule />
      </section>
      
      <section ref={addToRefs} className="snap-start h-screen">
        <SpecialThanks />
      </section>
      
      <section ref={addToRefs} className="snap-start h-screen">
        <Footer />
      </section>
    </div>
  );
}

export default App;