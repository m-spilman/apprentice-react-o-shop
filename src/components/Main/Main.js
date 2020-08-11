import React from 'react';
import './Main.scss';
import { Route, Switch, Redirect } from 'react-router';
import Home from '../../pages/Home';
import AdminOrders from '../../pages/AdminOrders';
import AdminProducts from '../../pages/AdminProducts';
import CheckOut from '../../pages/CheckOut';
import Orders from '../../pages/Orders';
import OrderSuccess from '../../pages/OrderSuccess';
import Products from '../../pages/Products';
import ShoppingCart from '../../pages/ShoppingCart';

function Main() {
  return (
    <main className="main">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/admin-orders" component={AdminOrders} />
        <Route exact path="/admin-products" component={AdminProducts} />
        <Route exact path="/check-out" component={CheckOut} />
        <Route exact path="/orders" component={Orders} />
        <Route exact path="/order-success" component={OrderSuccess} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/shopping-cart" component={ShoppingCart} />
        <Redirect from="*" to="/" />
      </Switch>
    </main>
  );
}
export default Main;
