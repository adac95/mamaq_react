import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import "./styles/Generales.css";

import Home from "./pages/Home";
import Reservas from "./pages/Reservas";
import Layout from "./components/Layout";
import Carta from "./pages/Carta";
import NotFound from "./pages/NotFound";
import { CreateProducts } from "./pages/admin/CreateProducts";
import {AdminHome} from "./pages/admin/AdminHome";
import { useDispatch } from "react-redux";
import { setProducts } from "./actions";
import GetProducts from "./api/getProducts";
import Login from "./pages/Login";

function App() {
  const user = useSelector((state) => state.user);


  const dispatch = useDispatch();
  useEffect(() => {
    GetProducts().then((res) => {
      dispatch(setProducts(res.body));
    });
  });
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/reservas' component={Reservas} />
          <Route exact path='/carta' component={Carta} />
          <Route exact path='/create-products' component={CreateProducts}>
            {!user.id && <Redirect to='/login' />}
          </Route>
          <Route exact path='/login' component={Login}>
            {user.id && <Redirect to='/' />}
          </Route>
          {/* <Route exact path='/admin' component={AdminHome}>
          {!user.id && <Redirect to='/' />}
          </Route> */}
          {user.id && user.roles[0].name === "admin" && <Route exact path='/admin' component={AdminHome} />}
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
