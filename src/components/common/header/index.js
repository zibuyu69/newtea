import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Avatar, Icon, Divider, Dropdown, Menu, notification } from "antd";
import * as globalActionCreators from "../../../store/globalStore/globalActionCreators";
import "./style.less";
import { withRouter, Link } from "react-router-dom";

function Header(props) {
  const { menuTree } = props;
  return <div className="header">头部</div>;
}

const mapStateToProps = (state) => ({
  ...state.globalReducer,
});
const mapDispatchToProps = (dispatch) => ({
  getPermission: (data) => {
    dispatch(globalActionCreators.getPermission(data));
  },
  getMenu: (data) => {
    dispatch(globalActionCreators.getMenu(data));
  },
  getButton: (data) => {
    dispatch(globalActionCreators.getButton(data));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));
