import { useEffect } from 'react';
import MainComponent from './components/MainComponent.js';
import CustomCursor from './components/Common/CustomCursor/CustomCursor';

import './App.css';
import registerBackgroundColorEffect from './components/Common/backgroundcolorEffects.js';
import { useAppContext } from './components/Common/AppContext/AppContext.js';

function App() {
  const appContext = useAppContext();
  function changePageConfig(pageConfig){
    appContext.setPageConfig(pageConfig);
  }

  useEffect(() => {
    setTimeout(() => {
      registerBackgroundColorEffect(changePageConfig)
    }, 500);
  }, [])

  return (
    <div className="App">
      <CustomCursor />
      <MainComponent />
    </div>
  );
}

export default App;
