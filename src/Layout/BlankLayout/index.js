import React from "react";
import RouteView from "../../components/common/MyRouter/RouteView";
import "./style.less";

function BlankLayout(props) {
  return (
    <div className="BlankLayout">
      <RouteView routerManger={props.routerManger} />
    </div>
  );
}

export default BlankLayout;
