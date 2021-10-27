import React from 'react';
import {
    HashRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import {Home} from './pages/Home'
import {NoMatch} from './pages/NoMatch'
import {User} from './pages/User'
import {About} from './pages/About'
import styled from 'styled-components'
import {Layout} from './components/Layout'


//所有的字的默认颜色是 #333
const AppWrapper = styled.div`
  color: #333;
`
function App() {
  return (
      <AppWrapper>
          <Router>
              <Switch>

                  <Route exact path="/" component={Home} />
                  <Route exact path="*" component={NoMatch} />
                  {/*<Route exact path="/about" component={About} />*/}
                  {/*<Route exact path="/users" component={User} />*/}
              </Switch>
              {/*<Layout />*/}
          </Router>
      </AppWrapper>

  );
}

export default App;
