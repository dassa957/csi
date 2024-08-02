import React from 'react';
import Hero from '@sections/Hero';
import Services from '@sections/Services';
import Simple from '@sections/Simple';
import About from '@sections/About';
import Contact from '@sections/Contact';

const page = () => {
  return (
    <div className='container'>
      <Hero />
      <Services />
      <Simple />
      <About />
      <Contact />
    </div>
  )
}

export default page