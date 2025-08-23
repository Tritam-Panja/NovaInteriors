import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { Link } from  "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-beige-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-80">
        <video
  className="absolute inset-0 w-full h-full object-cover"
  autoPlay
  loop
  muted
  playsInline
>
  <source src="/assets/Background video.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Transform Your
            <span className="block text-amber-600 dark:text-amber-400">
              Living Space
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-black-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            We create stunning interior designs that reflect your personality and lifestyle. 
            From concept to completion, we bring your vision to life.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            
          <Link to="/contact">
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full flex items-center space-x-2 transition-all duration-300"
  >
    <span>Get Free Consultation</span>
    <ArrowRight size={20} />
  </motion.button>
</Link>

<Link to="/projects">
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="border-2 border-amber-600 text-white dark:text-white px-8 py-4 rounded-full flex items-center space-x-2 hover:bg-amber-600 hover:text-white transition-all duration-300"
  >
    <Play size={20} />
    <span>View Our Work</span>
  </motion.button>
</Link>


          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-amber-600 dark:border-amber-400 rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-amber-600 dark:bg-amber-400 rounded-full mt-2"></div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;