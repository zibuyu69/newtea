import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import RouterManger from "./components/common/MyRouter";

function LayOut(props) {
  const layoutList = [];
  for (const item in RouterManger) {
    layoutList.push(RouterManger[item]);
  }

  const layout = layoutList.map((item) => (
    <Route
      key={item.path}
      path={item.path || "/"}
      component={() => item.layout({ routerManger: item })}
    />
  ));

  return (
    <Router>
      <Switch>{layout}</Switch>
    </Router>
  );
}

export default LayOut;
