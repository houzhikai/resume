import React from 'react';
import {
    HashRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import Index from './pages/Index'
import { NoMatch } from './pages/Index/NoMatch'
import './style/base.scss'
import './style/App.scss'

function App() {
  return (
    <Router>
      <Switch>
        <Route component={Index} />
        <Route exact path="/" render={() => <Redirect to="/" />} />
        <Route exact path="*" component={NoMatch} />
      </Switch>
    </Router>
  );
}

export default App;
