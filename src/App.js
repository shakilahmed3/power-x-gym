import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Workout from './components/Navbar/Workout/Workout';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Navbar></Navbar>
          <Workout></Workout>
        </Route>
        <Route path="/topics">
        </Route>
        <Route path="/">
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
