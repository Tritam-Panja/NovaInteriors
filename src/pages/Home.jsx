import React from 'react';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Services from '../components/Services';
import FeaturedProjects from '../components/FeaturedProjects';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';

const Home = () => {
  return (
    <div className="pt-16">
      <Hero />
      <Stats />
      <Services />
      <FeaturedProjects />
      <Testimonials />
      <ContactForm />
    </div>
  );
};

export default Home;