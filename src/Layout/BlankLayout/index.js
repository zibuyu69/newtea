import React from "react";
import RouteView from "../../components/common/MyRouter/RouteView";
import "./style.less";

function BlankLayout(props) {
  /*  console.log("local", self.location.href.split("/"));
  if (self.location.href === "http://www.puer.pro/b/login") {
    self.location.href = "http://www.puer.pro/b/login";
  }
  if (self.location.href === "http://localhost:3000/b/login") {
    self.location.href = "http://localhost:3000/b/login";
  } */
  return (
    <div className="BlankLayout">
      <RouteView routerManger={props.routerManger} />
    </div>
  );
}

export default BlankLayout;
