import Cookies from "js-cookie";
import React from "react";
import { Route, Navigate } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        !Cookies.get("isAuthenticated") && !Cookies.get("token") ? (
          <Navigate to='/' />
        ) : Component ? (
          <Component {...props} />
        ) : (
          rest.render(props)
        )
      }
    />
  );
};

export default PrivateRoute;
