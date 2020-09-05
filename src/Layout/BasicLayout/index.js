import React, { useEffect, useState } from "react";
import { BackTop, Tooltip } from "antd";
import "./style.less";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import Header from "../../components/common/header";
import Footer from "../../components/common/footer";
import RouteView from "../../components/common/MyRouter/RouteView";

function BasicLayout(props) {
  /* useEffect(()=>{

  },[]) */
  // sessionStorage.getItem("token")
  if (sessionStorage.getItem("token")) {
    return (
      <div className="BasicLayout">
        <Tooltip placement="right" title="返回顶部">
          <BackTop />
        </Tooltip>
        <div className="BasicLayout-header">
          <Header routerManger={props.routerManger} />
        </div>
        <div className="BasicLayout-center">
          <RouteView routerManger={props.routerManger} />
        </div>
        <div className="BasicLayout-footer">
          <Footer />
        </div>
      </div>
    );
  } else {
    return <Redirect to="/b/login" />;
  }
}

export default BasicLayout;
