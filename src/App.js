import './App.css';
import React, { useEffect, useState } from 'react';
import MainComponent from './components/MainComponent.js';
import { motion } from 'framer-motion'
import './App.css';

function App() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  })

  const variants = {
    default: {
      x: mousePosition.x,
      y: mousePosition.y
    }
  }

  function mouseMove(e) {
    setMousePosition({
      x: e.clientX,
      y: e.clientY
    })

  }
  useEffect(() => {
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    }
  }, [])
  return (
    <div className="App">
      <MainComponent />
      <motion.div
        className='cursor'
        variants={variants}
        animate="default"
      >

      </motion.div>
    </div>
  );
}

export default App;
