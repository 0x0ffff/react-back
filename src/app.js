import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Redirect, Route, Link } from 'react-router-dom'

import Home from 'page/home/index.js';
import Layout from './components/layout/index'
import Login from './page/login/index';

class App extends Component {
  render() {
    let LayoutRouter = (
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </Layout>
    );
    return (
      <Router>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/" render={ props => LayoutRouter} />
          </Switch>
      </Router>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
