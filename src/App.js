import React from 'react';
import { /*  BrowserRouter */ Route, Switch } from 'react-router-dom';
import './App.css';
import Details from './components/Details';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';

function App() {
  return (
    <div>
      {/* <BrowserRouter> */}
      <Switch>
        <Route
          exact
          path="/"
          component={ Home }
        />
        <Route
          path="/shoppingcart"
          component={ ShoppingCart }
        />
        <Route path="/details" component={ Details } />
      </Switch>
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
