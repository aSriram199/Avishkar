import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import CountdownTimer from '../components/CountdownTimer';
import Testimonials from '../components/Testimonials';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const headlines = [
    { title: "Avishkar 2K25", subtitle: "Engineering Inventions" },
    { title: "The Most Awaited Event is Back", subtitle: "Unleash Your Potential" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % headlines.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 overflow-hidden">
          <img src="/background/bg.png" alt="Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center min-h-screen">
          <div className="text-center">
            <motion.h1
              key={headlines[currentIndex].title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-[36px] sm:text-[48px] font-bold text-white mb-4 leading-tight"
            >
              {headlines[currentIndex].title}
            </motion.h1>
            <motion.p
              key={headlines[currentIndex].subtitle}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[18px] sm:text-[22px] text-white/90 mb-6"
            >
              {headlines[currentIndex].subtitle}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-2"
            >
              <a
                href="https://bit.ly/Avishkar2K25"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 sm:px-12 py-3 sm:py-6 bg-white text-black rounded-full text-xl sm:text-3xl font-semibold shadow-lg hover:bg-gray-50 transition-colors"
              >
                Register
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="py-10 sm:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <CountdownTimer />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-6 sm:py-12 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-4 sm:mb-8">
            <div className="flex items-center justify-center gap-4 sm:gap-8 mb-4 sm:mb-6">
              <div className="w-16 sm:w-32 md:w-48 h-[2px] bg-[#15A6F7]"></div>
              <h2 className="text-[36px] sm:text-[48px] font-bold text-[#15A6F7] whitespace-nowrap">About Avishkar</h2>
              <div className="w-16 sm:w-32 md:w-48 h-[2px] bg-[#15A6F7]"></div>
            </div>

            <div className="relative mt-3 sm:mt-8">
              {/* Background Logo - increased size for mobile */}
              <div className="absolute left-1/2 top-[60%] -translate-x-1/2 -translate-y-1/2">
                <img 
                  src="/logo/AVK_LOGO.png"
                  alt="AVK Logo Background" 
                  className="w-[300px] sm:w-[400px] h-[200px] sm:h-[220px] object-contain opacity-20"
                />
              </div>

              {/* Text Content */}
              <p className="text-lg mt-10 sm:mt-20 sm:text-xl text-gray-600 max-w-6xl mx-auto text-justify px-2 sm:px-4 relative z-10">
                Avishkar, the flagship event of IEEE - VBIT SB, is a Technical Paper Presentation competition held exclusively for the freshmen of VBIT. In the year 2011, Avishkar was awarded the esteemed 'Darrel Chong Gold Student Activity Award' in recognition of conducting Avishkar consecutively for five years. Avishkar significantly contributes to the experience of first-year VBIT students by offering a platform where they can present their innovative ideas and improve their communication abilities through technical presentations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-6 sm:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4 sm:mb-8">
            <div className="flex items-center justify-center gap-4 sm:gap-8 mb-4 sm:mb-6">
              <div className="w-16 sm:w-32 md:w-48 h-[2px] bg-[#15A6F7]"></div>
              <h2 className="text-[36px] sm:text-[48px] font-bold text-[#15A6F7] whitespace-nowrap">Gallery</h2>
              <div className="w-16 sm:w-32 md:w-48 h-[2px] bg-[#15A6F7]"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg"
            >
              <img
                src="/footer/f1.jpg"
                alt="Event 1"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg"
            >
              <img
                src="/footer/f2.jpg"
                alt="Event 2"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg"
            >
              <img
                src="/footer/f3.jpg"
                alt="Event 3"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />
    </>
  );
};

export default Home;
