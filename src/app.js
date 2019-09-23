import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Redirect, Route, Link } from 'react-router-dom'

import Home from 'page/home/index.js';
import Layout from './components/layout/index'
import Login from './page/login/index';
import Error from './page/error/index';
import UserList from './page/user/index';
import ProductRouter from './page/product/ProductRouter';
import OrderList from './page/order/OrderList';
import OrderDetail from './page/order/OrderDetail';

class App extends Component {
  render() {
    let LayoutRouter = (
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path="/product" component={ProductRouter} />
          <Route path="/product-category" component={ProductRouter} />
          <Route path="/order/index" component={OrderList} />
          <Route path="/order/detail/:orderNumber" component={OrderDetail} />
          <Route path="/user/index" component={UserList} />
          <Redirect exact from="/order" to="/order/index" />
          <Redirect exact from="/user" to="/user/index" />
          <Route component={Error} />
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
