import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import "./style.less";
import * as actionCreators from "./store/actionCreators";
import { Spin } from "antd";
import { ImagePicker, WingBlank, SegmentedControl, Button } from "antd-mobile";

import icon from "../../assets/goodtea/icon.png";

import bg from "../../assets/goodtea/bg.png";
import bg1 from "../../assets/goodtea/bg1.png";
import bg2 from "../../assets/goodtea/bg2.png";
import bg3 from "../../assets/goodtea/bg3.png";

function GoodTea(props) {
  const { loading, history } = props;

  return (
    <div className="GoodTea">
      <div className="top_bg">
        <div className="title">好茶推荐</div>
        <div className="des">说起好茶，你脑海中浮现的是…</div>
      </div>
      <div className="bo">
        <div className="bo1">
          <div className="bo_des">
            <img src={icon} style={{ margin: "2vw" }} />
            生茶
          </div>
        </div>
        <div className="bo2">
          <div className="bo_des">
            <img src={icon} style={{ margin: "2vw" }} />
            熟茶
          </div>
        </div>
        <div className="bo3">
          <div className="bo_des">
            <img src={icon} style={{ margin: "2vw" }} />
            晒红
          </div>
        </div>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(GoodTea));
