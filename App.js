// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Dashboard from './Dashboard';
import Create from './Create';
import HeroDetails from './HeroDetails';
import NotFound from './NotFound';
import Heroes from './Heroes';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route path="/heroes/:id">
              <HeroDetails />
            </Route>
            <Route path="/heroes">
              <Heroes />
            </Route>
            <Route path="/add">
              <Create />
            </Route>
            <Route exact path="/">
              <Dashboard />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
