import MainComponent from './components/MainComponent.js';
import CustomCursor from './components/Common/CustomCursor/CustomCursor';

import './App.css';
import { useAppContext } from './components/Common/AppContext/AppContext.js';
import Themer from './components/Common/Themer/Themer.js';
import { setCursorBall } from './components/Common/CustomCursor/helper.js';
import Galaxy from './components/Common/Galaxy/Galaxy.js';
import Footer from './components/Footer/Footer.js';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import NavBar from './components/Navbar/NavBar.js';
import ScrollToTop from './components/Common/ScrollToTop/ScrollToTop.js';
import LoadingBar from './components/Common/LoadingBar/LoadingBar.js';

function App() {
  const appContext = useAppContext();
  function changePageConfig(pageConfig) {
    appContext.setPageConfig(pageConfig);
  }

  return (
    <div className="App">
      <CustomCursor />
      <Galaxy />
      <HashRouter>
      <Themer changePageStateFunction={changePageConfig} />
        {/* <LoadingBar /> */}
        <ScrollToTop />
        <NavBar />
        <MainComponent />
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
