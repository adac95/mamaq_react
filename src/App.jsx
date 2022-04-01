import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import './styles/Generales.css'

import Home from "./containers/Home";
import Reservas from "./containers/Reservas";
import Layout from "./components/Layout";
import Carta from "./containers/Carta";
import NotFound from "./containers/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/reservas' component={Reservas} />
          <Route exact path='/carta' component={Carta} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
