import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

import Navbar from './components/navbar-components/Navbar';
import Footer from './components/footer-components/Footer';

import './styles/main.scss';

function App() {
  return (
    <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/resume" component={Resume} initialCount={[1]} />
        </Switch>
        <Footer />
    </Router>
  );
}

export default App;
