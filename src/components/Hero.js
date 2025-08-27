import React from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

const Hero = () => {
  const scrollToNext = () => {
    const nextSection = document.getElementById('about');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1513151233558-d860c5398176?w=1920&h=1080&fit=crop"
        >
          <source src="/bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-dark-900/60 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight"
        >
          We Create
          <span className="block gradient-text">Experiences</span>
          That Matter
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-2"
        >
          Transform your brand with immersive experiential marketing that captivates, 
          engages, and leaves lasting impressions on your audience.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-2"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
          >
            Start Your Project
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-secondary w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
          >
            View Our Work
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          onClick={scrollToNext}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-white hover:text-primary-400 transition-colors duration-300"
        >
          <FaChevronDown className="text-xl sm:text-2xl" />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
