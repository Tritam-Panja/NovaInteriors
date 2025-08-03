import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Home, Palette, Lightbulb, Sofa } from 'lucide-react';

const Services = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const services = [
    {
      icon: Home,
      title: 'Residential Design',
      description: 'Complete home makeover with personalized design solutions for every room.',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg'
    },
    {
      icon: Palette,
      title: 'Color Consultation',
      description: 'Expert color schemes that create harmony and reflect your personality.',
      image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg'
    },
    {
      icon: Lightbulb,
      title: 'Lighting Design',
      description: 'Strategic lighting solutions to enhance ambiance and functionality.',
      image: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg'
    },
    {
      icon: Sofa,
      title: 'Furniture Selection',
      description: 'Curated furniture pieces that complement your space and lifestyle.',
      image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg'
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We offer comprehensive interior design services to transform your space into something extraordinary.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-beige-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${service.image})` }}></div>
              <div className="p-6">
                <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center mb-4">
                  <service.icon className="text-white" size={20} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;