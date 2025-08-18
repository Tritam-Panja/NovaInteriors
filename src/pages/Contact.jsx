import React from 'react';
import { motion } from 'framer-motion';
import ContactForm from '../components/ContactForm';
import { Clock, MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+91 76666 50400'],
      description: 'Mon-Fri 9AM-6PM'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['Naveendesign167@gmail.com'],
      description: 'We reply within 24 hours'
    },
    {
      icon: MapPin,
      title: 'Visit Our Studio',
      details: ['Jesal Park', 'Bhayandar East, Thane'],
      description: 'By appointment only'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Friday: 9AM - 6PM', 'Saturday: 10AM - 4PM'],
      description: 'Sunday: Closed'
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
              Contact <span className="text-amber-600 dark:text-amber-400">Us</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Ready to transform your space? Let's discuss your project and bring your vision to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-beige-50 dark:bg-gray-800 rounded-2xl"
              >
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {info.title}
                </h3>
                {info.details.map((detail, i) => (
                  <p key={i} className="text-gray-600 dark:text-gray-300 mb-1">
                    {detail}
                  </p>
                ))}
                <p className="text-sm text-amber-600 dark:text-amber-400 mt-2">
                  {info.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />

      {/* Map Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Find Our Studio
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Located near Bhyander Railway Station, East
            </p>
          </motion.div>
          
          <motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.6 }}
  className="bg-gray-200 dark:bg-gray-700 rounded-2xl overflow-hidden"
>
  {/* Responsive aspect-ratio wrapper (no Tailwind plugin required) */}
  <div className="relative w-full pb-[75%] sm:pb-[65%] md:pb-[56.25%] lg:h-96 lg:pb-0">
    {/* Paste your *embed* URL in src below */}
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d963910.8424457923!2d71.63476897812504!3d19.313794599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7afca3bee1753%3A0xebf2b7d3b51245c8!2sNova%20Design%20Studio%20by%20Naveen%20Basniwal!5e0!3m2!1sen!2sin!4v1755197722268!5m2!1sen!2sin" 
      className="absolute inset-0 w-full h-full"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Location Map"
    />
  </div>
</motion.div>

        </div>
      </section>
    </div>
  );
};

export default Contact;