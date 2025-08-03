import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';


const FeaturedProjects = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const projects = [
    {
      id: 1,
      title: 'Modern Living Room',
      category: 'Residential',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
      year: '2024'
    },
    {
      id: 2,
      title: 'Luxury Bedroom Suite',
      category: 'Residential',
      image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg',
      year: '2024'
    },
    {
      id: 3,
      title: 'Contemporary Kitchen',
      category: 'Residential',
      image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg',
      year: '2023'
    },
    {
      id: 4,
      title: 'Elegant Dining Room',
      category: 'Residential',
      image: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg',
      year: '2023'
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-beige-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore some of our most recent and exciting interior design projects.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer"
            >
              <div className="aspect-[4/3] bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                   style={{ backgroundImage: `url(${project.image})` }}>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all duration-300"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="flex items-center space-x-2 text-sm mb-2">
                    <Calendar size={16} />
                    <span>{project.year}</span>
                    <span>•</span>
                    <span>{project.category}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>View Project</span>
                    <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Link to="/projects">
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full flex items-center space-x-2 mx-auto transition-all duration-300"
  >
    <span>View All Projects</span>
    <ArrowRight size={20} />
  </motion.button>
</Link>

        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjects;