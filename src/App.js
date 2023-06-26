import './App.css';
import { Component } from 'react';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import ReactGA from 'react-ga4';
import { hotjar } from 'react-hotjar';

const TRACKING_ID = process.env.REACT_APP_GOOGLE_TRACKING_ID; //Google analytics tracking id
const HIJID = process.env.REACT_APP_HOTJAR_ID; //hotjar id
const HIJV = process.env.REACT_APP_HOTJAR_VERSION; //hotjar version
ReactGA.initialize(TRACKING_ID);
hotjar.initialize(HIJID, HIJV);

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Main />
      </div>
    </BrowserRouter>
    );
  }
}


export default App;
