import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
          </Switch>
          <Footer />
      </div>
    </Router>
  );
}

export default App;
