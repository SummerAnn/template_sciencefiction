import React from 'react';
import { motion } from 'framer-motion';
import './App.css';
import starIcon from './assets/star.svg';

function App() {
  return (
    <div className="container">
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <h1>Space Odyssey</h1>
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </motion.header>
      <motion.section
        className="banner"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
      >
        <h2>"Science is not only a disciple of reason but, also, one of romance and passion."</h2>
        <p>- Stephen Hawking</p>
        <img src={starIcon} alt="star" />
      </motion.section>
    </div>
  );
}

export default App;
