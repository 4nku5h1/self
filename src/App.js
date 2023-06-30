import './App.css';
import React, { useEffect, useState } from 'react';
import MainComponent from './components/MainComponent.js';
import { motion } from 'framer-motion'
import './App.css';
import ContextProvider, { useAppContext } from './components/Common/AppContext/AppContext';
import CustomCursor from './components/Common/CustomCursor/CustomCursor';

function App() {
  

  return (
    <div className="App">
      <CustomCursor />
      <MainComponent />

    </div>
  );
}

export default App;
