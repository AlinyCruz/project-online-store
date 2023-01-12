import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Search from './components/Search';
import ShoppingCard from './pages/ShoppingCard';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            component={ Search }
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
