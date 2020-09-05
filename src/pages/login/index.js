import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import "./style.less";
import * as actionCreators from "./store/actionCreators";
import { Spin, Button } from "antd";

function Login(props) {
  const { loading, history } = props;

  const testClick = () => {
    props.mergeData({
      type: "registerReducer/MERGE_DATA",
      payload: { test: props.state.test + 1 },
    });
  };
  const login = () => {
    history.push("/");
  };
  return (
    <div className="test">
      <div className="title">
        LoginLoginLoginLogin
        <Button onClick={login}>登录</Button>
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({
  // state: state.registerReducer
});
const mapDispatchToProps = (dispatch, ownProps) => ({
  mergeData: (data) => {
    dispatch({ type: data.type, payload: data.payload });
  },
  /*  getallData: data => {
    dispatch(actionCreators.getallData(data));
  } */
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));
