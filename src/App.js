import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import { initPerformanceMonitoring } from './utils/performance';
import { registerServiceWorker } from './utils/serviceWorker';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServiceHighlights from './components/ServiceHighlights';
import FeaturedProjects from './components/FeaturedProjects';
import ClientLogos from './components/ClientLogos';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Clients from './components/Clients';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';

function App() {
  useEffect(() => {
    // Initialize performance monitoring
    initPerformanceMonitoring();

    // Register service worker for PWA capabilities
    registerServiceWorker();
  }, []);

  return (
    <ErrorBoundary>
      <Router>
        <div className='App bg-dark-900 text-white min-h-screen w-full overflow-x-hidden layout-stable stable-container'>
          <Navbar />
          <Hero />
          <ServiceHighlights />
          <FeaturedProjects />
          <ClientLogos />
          <About />
          <Services />
          <Portfolio />
          <Clients />
          <Blog />
          <Contact />
          <Newsletter />
          <Footer />
        </div>
        <CookieConsent />
      </Router>
    </ErrorBoundary>
  );
}

export default App;
