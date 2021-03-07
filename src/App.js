import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import englishText from './static/EnglishText';
import frenchText from './static/FrenchText';

import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Navbar from './components/navbar-components/Navbar';
import Footer from './components/footer-components/Footer';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './helpers/fontawesome';
import './styles/main.scss';

import Context from './Context';

function App() {
  const DEFAULT_TEXT_CONTENT = frenchText;
  const DEFAULT_LANGUAGE_TOGGLE = false;

  const [textContent, setTextContent] = useState(DEFAULT_TEXT_CONTENT);
  const [languageToggle, setLanguageToggle] = useState(DEFAULT_LANGUAGE_TOGGLE);

  function handleSwitch() {
    languageToggle === false
      ? setTextContent(englishText)
      : setTextContent(frenchText);
    setLanguageToggle(!languageToggle);
  }

  return (
    <Router>
      <Context.Provider 
        value={{ textContent, FontAwesomeIcon, handleSwitch }}>
        <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/resume" component={Resume} />
          </Switch>
        <Footer />
      </Context.Provider>
    </Router>
  );
}

export default App;
