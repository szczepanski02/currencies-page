import './App.css';
import Nav from './Nav';
import Topbar from '../Components/Topbar';
import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Page from './Page';


const App = () => {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Topbar />
        <Page />
      </Router>
    </div>
  );
}

export default App;
