import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Countries from './components/Countries';

function App() {
  return (
    <React.Fragment>
    <Navbar />
    <Hero />
    <Countries />
    </React.Fragment>
  );
}

export default App;
