import React from 'react';

import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu, Testimonials } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <a className='skip-link' href='#main-content'>
      Skip to main content
    </a>
    <Navbar />
    <main id='main-content'>
      <Header />
      <AboutUs />
      <SpecialMenu />
      <Chef />
      <Intro />
      <Laurels />
      <Testimonials />
      <Gallery />
      <FindUs />
    </main>
    <Footer />
  </div>
);

export default App;
