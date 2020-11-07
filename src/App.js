import React from 'react';
import { Switch, Route } from "react-router-dom";
import { Home } from './components/Home';
import { Ejercicio1 } from './components/Ejercicio1';
import { Ejercicio2 } from './components/Ejercicio2';
import { Ejercicio3 } from './components/Ejercicio3';
import './App.css';

function App() {
  return (
    <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/ejercicio1" component={Ejercicio1} exact/>
      <Route path="/ejercicio2" component={Ejercicio2} exact/>
      <Route path="/ejercicio3" component={Ejercicio3} exact />
    </Switch>
  );
}

export default App;