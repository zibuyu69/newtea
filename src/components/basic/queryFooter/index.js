import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "./style.less";
import { Carousel, Icon, Divider } from "antd";
import { ImagePicker, WingBlank, SegmentedControl, Button } from "antd-mobile";

function QueryFooter(props) {
  const { history } = props;

  const onClick = (path) => {
    history.push("/newsList");
  };

  return (
    <div className="QueryFooter">
      <div className="line">茶产业发展领导小组 </div>
      <div className="line">茶产业发展服务中心 </div>
      <div className="line">茶业协会 </div>
      <div className="line">技术支持 </div>
      <Divider dashed />
      <div className="line">Copyright © 2017-2019 闽ICP备15003660号 </div>
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
)(withRouter(QueryFooter));
