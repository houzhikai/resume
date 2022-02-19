import React from 'react';
import {
    HashRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import Index from './pages/Index'
import { NoMatch } from './pages/Index/NoMatch'
import styled from 'styled-components'

// const AppWrapper = styled.div`
//   color: white;
// `
function App() {
  return (
    //   <AppWrapper>
          <Router>
              <Switch>
              <Route component={Index} />
              <Route exact path="/" render={() => <Redirect to="/index" />} />
              <Route exact path="*" component={NoMatch} />
          </Switch>
          </Router>
    //   </AppWrapper>

  );
}

export default App;
