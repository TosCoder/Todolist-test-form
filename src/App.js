import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { Home } from './containers'
import { Mainlayout } from './layout'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path={'/'} component={Mainlayout(Home)} />
          <Redirect to='/' />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
