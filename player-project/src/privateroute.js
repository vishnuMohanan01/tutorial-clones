import React, {useContext} from "react";
import {Route, Redirect} from "react-router-dom";
import {AuthContext} from "./auth";


const PrivateRoute = ({component: RouteComponent, ...rest}) => {
  const {currentuser} = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={routeProps => (
          !!currentuser ? (
            <RouteComponent {...routeProps} />
          ) : (
            <Redirect to={"/login"} />
          )
        )
      }
    />
  );
};


export default PrivateRoute;
