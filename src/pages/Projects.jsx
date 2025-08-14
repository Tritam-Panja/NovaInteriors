import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Filter, Calendar, MapPin } from 'lucide-react';

const Projects = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Residential', 'Commercial', 'Hospitality'];

  const projects = [
    { 
      id: 1,
      title: 'Modern Living Room',
      category: 'Residential',
      location: 'Manhattan, NY',
      year: '2024',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
      description: 'Contemporary living space with minimalist design.'
    },
    {
      id: 2,
      title: 'Luxury Bedroom Suite',
      category: 'Residential',
      location: 'Brooklyn, NY',
      year: '2024',
      image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg',
      description: 'Elegant bedroom with custom furniture and lighting.'
    },
    {
      id: 3,
      title: 'Corporate Office',
      category: 'Commercial',
      location: 'Midtown, NY',
      year: '2023',
      image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg',
      description: 'Modern office space promoting creativity and collaboration.'
    },
    {
      id: 4,
      title: 'Boutique Hotel Lobby',
      category: 'Hospitality',
      location: 'SoHo, NY',
      year: '2023',
      image: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg',
      description: 'Luxurious hotel lobby with custom artwork and fixtures.'
    },
    {
      id: 5,
      title: 'Contemporary Kitchen',
      category: 'Residential',
      location: 'Queens, NY',
      year: '2023',
      image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg',
      description: 'Open-concept kitchen with premium appliances.'
    },
    {
      id: 6,
      title: 'Restaurant Interior',
      category: 'Commercial',
      location: 'Chelsea, NY',
      year: '2022',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
      description: 'Warm and inviting restaurant atmosphere.'
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-beige-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Our <span className="text-amber-600 dark:text-amber-400">Projects</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Explore our portfolio of stunning interior design projects that showcase our creativity and expertise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center items-center gap-4 mb-12"
          >
            <Filter className="text-amber-600 dark:text-amber-400" size={20} />
            {filters.map((filter) => (
              <motion.button
                key={filter}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-amber-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-amber-100 dark:hover:bg-amber-900/30'
                }`}
              >
                {filter}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section ref={ref} className="py-12 bg-beige-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <AnimatePresence>
            <motion.div 
              layout
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm">
                      {project.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {project.description}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center space-x-1">
                        
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar size={14} />
                        <span>{project.year}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
};

export default Projects;