import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './App.css';
import Header from './components/Header/Header'
import Content from './components/Content/Content';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <BrowserRouter>
      <div className='outer-wrapper'>
        <Header/>
        <Switch>
          <Route exact path="/" component={Content}/>
          <Route path="/cart" component={Cart}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
