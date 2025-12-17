import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const testimonials = [
    {
      id: 1,
      name: ' Akansha Baliga',
      role: ' 3 BHK, Pavai',
      content: " Our designer took us through our options in extraordinary detail and wasextremely helpful in setting up our home the way we wanted",
      rating: 5,
      
    },
    {
      id: 2,
      name: 'Rathod Shekhawat',
      role: ' 2 BHK, Kandiwali East',
      content: "Our experience with Nova was nice thanks to the project managers. They worked so much on this project, and finished it on time.",
      rating: 5,
      
    },
     {
      id: 3,
      name: 'Laxmi Prajapt',
      role: ' 2 BHK ',
      content: "I had a fantastic experience with Nova Design Studio From Start To Finish,Mr. Naveen and their Team Demonstrated Exceptional Professionalism and Creativity, They listened carefully to my ideas and transformed them into a beautifully designed space that exceeded my expectations.",
      rating: 5,
      
    },
     {
      id: 4,
      name: 'Pawan Kumar',
      role: ' 2 BHK, borivali',
      content: "We are absolutely thrilled with the stunning renovation of our home! The interior designer exceeded our expectations with their creativity, professionalism, and attention to detail. Five stars isn't enough - they're truly the best! ",
      rating: 5,
      
    },

     {
      id: 2,
      name: 'Amit Gupta',
      role: ' 2 BHK , Malad West',
      content: "Superb team of highly skilled professionals, they turned our dream home into reality. Nova Design Studio did a amazing job of recreating my home from scratch. They are very cooperative and have solutions for all your home designing problems. I will definately recomend Naveen and his team to everyone.👍🏻",
      rating: 5,
      
    },
    {
      id: 3,
      name: 'Vikas Gupta',
      role: ' 3 BHK, Bhayandar West',
      content: "A place where I can find peace. A home That’s exactly what Nova has helped me with. I’m very happy with the outcome.",
      rating: 5,
     
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
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about our work.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-beige-50 dark:bg-gray-800 p-8 rounded-2xl relative"
            >
              <Quote className="absolute top-4 right-4 text-amber-600 dark:text-amber-400" size={24} />
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-amber-400 fill-current" size={20} />
                ))}
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-6 italic">
                "{testimonial.content}"
              </p>

              <div className="flex items-center">
               
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;