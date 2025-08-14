import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-2xl font-bold text-amber-400 mb-4"
            >
              Nova Interiors
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray-300 mb-6 max-w-md"
            >
              We transform spaces into stunning, functional environments that reflect your unique style and personality.
            </motion.p>
            <div className="flex space-x-4">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, index) => (
                <motion.a
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors duration-300"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.h4
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-lg font-semibold mb-4"
            >
              Quick Links
            </motion.h4>
            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-2"
            >
              {['Home', 'About Us', 'Projects', 'Services', 'Contact'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-300 hover:text-amber-400 transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Contact Info */}
          <div>
            <motion.h4
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-lg font-semibold mb-4"
            >
              Contact Info
            </motion.h4>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-3"
            >
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-amber-400" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-amber-400" />
                <span className="text-gray-300">hello@luxeinteriors.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-amber-400 mt-1" />
                <span className="text-gray-300">
                  123 Design Street<br />
                  New York, NY 10001
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-gray-800 mt-12 pt-8 text-center"
        >
          <p className="text-gray-400">
            © {currentYear} LuxeInteriors. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;