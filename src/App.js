import MainComponent from './components/MainComponent.js';
import CustomCursor from './components/Common/CustomCursor/CustomCursor';

import './App.css';
import { useAppContext } from './components/Common/AppContext/AppContext.js';
import Themer from './components/Common/Themer/Themer.js';
import { setCursorBall } from './components/Common/CustomCursor/helper.js';

function App() {
  const appContext = useAppContext();
  function changePageConfig(pageConfig){
    appContext.setPageConfig(pageConfig);
  }

  return (
    <div className="App">
      <Themer changePageStateFunction={changePageConfig}/>
      <CustomCursor />
      <MainComponent />
    </div>
  );
}

export default App;
