import React from 'react';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from './pages/LoginPage/LoginPage';
import Home from './components/Home';
import ContactForm from './components/ContactForm';




const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/Home" component={Home} />
        <Route exact path="/ContactForm" component={ContactForm} />
      </Switch>
    </div>
  </Router>
);

export default App;
