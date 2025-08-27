import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
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
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App bg-dark-900 text-white min-h-screen">
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
        <Footer />
      </div>
    </Router>
  );
}

export default App;
