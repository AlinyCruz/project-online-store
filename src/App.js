import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import ShoppingCard from './pages/ShoppingCard';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            component={ Home }
          />
          <Route
            path="/shoppingcard"
            component={ ShoppingCard }
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
