import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import "./style.less";
import * as actionCreators from "./store/actionCreators";
import { Spin } from "antd";
import { ImagePicker, WingBlank, SegmentedControl, Button } from "antd-mobile";

function Login(props) {
  const { loading, history } = props;

  const [data, setData] = useState([
    {
      url: "https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg",
      id: "2121",
    },
    {
      url: "https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg",
      id: "2122",
    },
  ]);

  const testClick = () => {
    props.mergeData({
      type: "registerReducer/MERGE_DATA",
      payload: { test: props.state.test + 1 },
    });
  };
  const login = () => {
    history.push("/");
  };
  const onChange = (files, type, index) => {
    console.log(files, type, index);
    setData(files);
  };
  return (
    <div className="test">
      <div className="title">
        LoginLoginLoginLogin
        <Button onClick={login}>登录</Button>
        <WingBlank>
          <ImagePicker
            files={data}
            onChange={onChange}
            onImageClick={(index, fs) => console.log(index, fs)}
          />
        </WingBlank>
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
