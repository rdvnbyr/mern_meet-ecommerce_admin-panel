import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

import AdminLayout from "layouts/Admin.js";
import AuthLayout from "layouts/Auth.js";
import Login from "views/examples/Login.js";
import { useSelector } from "react-redux";

const App = () => {

  const isLogin = useSelector(state => state.session.isLogin);

  if (!isLogin) {
    return(
      <BrowserRouter>
        <Redirect from="/" to="/auth/login" />
        <Route path="/auth/login" render={props => <Login {...props} />} />
      </BrowserRouter>
    )
  }
    return(
        <BrowserRouter>
          <Switch>
            <Route path="/admin" render={props => <AdminLayout {...props} />} />
            <Route path="/auth" render={props => <AuthLayout {...props} />} />
            <Redirect from="/" to="/admin/index" />
          </Switch>
        </BrowserRouter>
    );
};

export default App;