import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Search from './components/Search';

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
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
