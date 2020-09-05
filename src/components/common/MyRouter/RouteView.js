import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NoMatch from "../../../pages/404";

export default function (props) {
  const path = props.routerManger.path;
  const loginedFlag = sessionStorage.getItem("token") !== null;
  /*   return (
    <Switch>
      {loginedFlag || props.routerManger.path == "/b" ? ( // 如果没登陆并且配置信息不是登陆信息，重定向至登陆页面
        props.routerManger.route.map(item => (
          <Route
            key={item.path}
            path={path + item.path}
            exact
            component={item.component}
          />
        ))
      ) : (
        <Redirect to="/b/login" />
      )}
      <Route component={NoMatch} />
    </Switch>
  ); */
  return (
    <Switch>
      {props.routerManger.route.map((item) => (
        <Route
          key={item.path}
          path={path + item.path}
          exact
          component={item.component}
        />
      ))}
      <Route component={NoMatch} />
    </Switch>
  );
}
