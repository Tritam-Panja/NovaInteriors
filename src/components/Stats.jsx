import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, Home, Award, Clock } from 'lucide-react';
import CountUp from 'react-countup';


const Stats = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const stats = [
    { icon: Users, label: 'Happy Clients', value: 500, suffix: '+' },
    { icon: Home, label: 'Projects Completed', value: 300, suffix: '+' },
    { icon: Award, label: 'Awards Won', value: 15, suffix: '+' },
    { icon: Clock, label: 'Years Experience', value: 10, suffix: '+' },
  ];

  return (
    <section ref={ref} className="py-20 bg-amber-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-amber-600 dark:bg-amber-500 rounded-full flex items-center justify-center">
                  <stat.icon className="text-white" size={24} />
                </div>
              </div>
                <motion.div
  initial={{ opacity: 0 }}
  animate={inView ? { opacity: 1 } : {}}
  transition={{ duration: 1, delay: index * 0.2 }}
  className="text-4xl font-bold text-gray-900 dark:text-white mb-2"
>
 {inView && (
    <CountUp 
      start={0}
      end={stat.value}
      duration={2}
      delay={0.5}         // ⏱️ delay before starting count
      suffix={stat.suffix}
    />
  )}
</motion.div>

              <p className="text-gray-600 dark:text-gray-300">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;