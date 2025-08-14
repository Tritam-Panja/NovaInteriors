import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Users, Clock, Target } from 'lucide-react';

const About = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To design spaces where beauty meets functionality, creating timeless interiors that bring comfort, joy, and inspiration to everyday living.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We are committed to delivering exceptional interior solutions, blending creativity with precision to achieve flawless design and unmatched quality in every space we transform.'
    },
    {
      icon: Users,
      title: 'Client-Focused',
      description: 'Your style. Your space. Your story. At Nova Interiors, we craft high-end interiors shaped by your preferences and aspirations because your satisfaction is the ultimate measure of our success.'
    },
    {
      icon: Clock,
      title: 'Timely Delivery',
      description: 'Through streamlined workflows and meticulous planning, we ensure projects are completed on time delivering excellence without delays or compromises.'
    }
  ];

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
              About <span className="text-amber-600 dark:text-amber-400">Nova Interiors</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              With over a decade of experience, we have transformed hundreds of spaces into beautiful, functional environments. Each design reflects our clients unique personalities and lifestyles, blending style, comfort, and purpose.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Our Story</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Originally established as a small design studio with a clear vision, the practice has evolved into a full-service interior design firm known for creating spaces that balance aesthetic excellence with everyday functionality.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Over time, the commitment to core values has remained constant creativity, quality, and client satisfaction are at the heart of every project.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
               Today, a talented team of designers continues to push boundaries and deliver innovative solutions that transform ordinary spaces into extraordinary experiences.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="assets/assets/Project 20.jpg"
                alt="Our Team"
                className="rounded-2xl shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section ref={ref} className="py-20 bg-beige-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              These guiding principles shape every decision we make and influence the success of each project we undertake.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              The Team Behind the Vision
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our skilled designers infuse every project with creativity, expertise, and passion.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Emma Rodriguez',
                role: 'Lead Interior Designer',
                image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg'
              },
              {
                name: 'James Wilson',
                role: 'Senior Designer',
                image: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg'
              },
              {
                name: 'Sophia Chen',
                role: 'Color Specialist',
                image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg'
              }
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-48 h-48 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-amber-600 dark:text-amber-400">
                  {member.role}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;