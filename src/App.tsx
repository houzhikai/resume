import React from 'react';
import {
    HashRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import Index from './pages/Index'
import Login from './views/Login/index';
import { NoMatch } from './pages/Index/NoMatch'
import './style/base.scss'
import './style/App.scss'
import styled from 'styled-components';
const Wrapper = styled.div`
    font-family:  'Consolas', 'Courier New', Courier, monospace;
`

function App() {
  return (
    <Wrapper>
    <Router>
      <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/" render={() => <Redirect to="/login" />} />
          <Route component={Index} />
        <Route exact path="*" component={NoMatch} />
      </Switch>
    </Router>
    </Wrapper>
  );
}

export default App;
