import React from 'react'
import { BrowserRouter as Router, Switch, Redirect, Route, Link } from 'react-router-dom'

import ProductList from './index/ProductList';
import ProductSave from './index/ProductSave';
import ProductDetail from './index/ProductDetail';
import CategoryList from './category/CategoryList';
import CategoryAdd from './category/CategoryAdd';

function ProductRouter() {
  return (
    <Switch>
      <Route path="/product/index" component={ProductList} />
      <Route path="/product/save/:pid?" component={ProductSave} />
      <Route path="/product/detail/:pid" component={ProductDetail} />
      <Route path="/product-category/index/:categoryId?" component={CategoryList} />
      <Route path="/product-category/add" component={CategoryAdd} />
      <Redirect exact from="/product" to="/product/index" />
      <Redirect exact from="/product-category" to="/product-category/index" />
    </Switch>
  );
}

export default ProductRouter;
