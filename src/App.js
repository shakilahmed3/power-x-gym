import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import About from './components/AboutUs/About';
import Workout from './components/Workout/Workout';
import Training from './components/Training/Training';
import ChooseUs from './components/ChooseUs/ChooseUs';
import Footer from './components/Footer/Footer';
import Classes from './components/Classes/Classes';
import Notfound from './components/Notfound/Notfound';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Pricing from './components/Pricing/Pricing';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/ourClasses">
          <Navbar></Navbar>
          <Classes></Classes>
          <Footer></Footer>
        </Route>
        <Route path="/productDetails/:category">
          <Navbar></Navbar>
          <ProductDetails></ProductDetails>
          <Footer></Footer>
        </Route>
        <Route path="/pricing">
          <Navbar></Navbar>
          <Pricing></Pricing>
          <Footer></Footer>
        </Route>
        <Route path="/">
          <Navbar></Navbar>
          <Workout></Workout>
          <About></About>
          <Training></Training>
          <ChooseUs></ChooseUs>
          <Footer></Footer>
        </Route>


        <Route path="*">
          <Notfound></Notfound>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
