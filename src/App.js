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
  const [cursorVarient, setCursorVarient] = useState("default");

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "white",
      mixBlendMode: "difference"
    }
  }

  useEffect(() => {
    function mouseMove(e) {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
  
    }
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    }
  }, [])
  return (
    <div className="App">
    <h1 onMouseEnter={() => setCursorVarient("text")} onMouseLeave={() => setCursorVarient("default")}>sdghd</h1>
      <MainComponent />
      <motion.div
        className='cursor'
        variants={variants}
        animate={cursorVarient}
      >

      </motion.div>
    </div>
  );
}

export default App;
