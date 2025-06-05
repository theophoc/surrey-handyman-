import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Footer />
    </Layout>
  );
}

export default App;