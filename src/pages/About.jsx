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
      description: 'To create beautiful, functional spaces that inspire and enhance the lives of our clients.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for perfection in every project, ensuring the highest quality in design and execution.'
    },
    {
      icon: Users,
      title: 'Client-Focused',
      description: 'Your vision is our priority. We work closely with you to bring your dream space to life.'
    },
    {
      icon: Clock,
      title: 'Timely Delivery',
      description: 'We respect your time and deliver projects on schedule without compromising quality.'
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
              About <span className="text-amber-600 dark:text-amber-400">LuxeInteriors</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              With over a decade of experience in interior design, we've transformed hundreds of spaces 
              into extraordinary environments that reflect our clients' personalities and lifestyles.
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
                Founded in 2014, LuxeInteriors began as a small studio with a big vision: to create 
                interior spaces that not only look beautiful but also enhance the way people live and work.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Over the years, we've grown into a full-service interior design firm, but our core values 
                remain the same - creativity, quality, and client satisfaction above all else.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Today, our team of talented designers continues to push boundaries and create innovative 
                solutions that transform ordinary spaces into extraordinary experiences.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg"
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
              These core principles guide everything we do and shape every project we undertake.
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
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our talented team of designers brings creativity, expertise, and passion to every project.
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