import React from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './component/Navbar'
import Cart from './component/Cart'
import Default from './component/Default'
import Details from './component/Details'
import ProductList from './component/ProductList'

function App() {
  return (
    <React.Fragment> 
    <Navbar/>
    
    <Switch>
      <Route path='/' exact component={ProductList}/>
      <Route path='/cart' component={Cart}/>
      <Route path='/details' component={Details}/>
      <Route  component={Default}/>
    </Switch>
 </React.Fragment>
  );
}

export default App;
