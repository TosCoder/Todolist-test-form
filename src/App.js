import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { List, Form } from './containers'
import { Mainlayout } from './layout'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path={'/list'} component={Mainlayout(List)} />
          <Route path={'/form'} component={Mainlayout(Form)} />
          <Redirect to='/list' />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
