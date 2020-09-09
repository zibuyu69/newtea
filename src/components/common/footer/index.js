import React from "react";
import { notification, Button } from "antd";
import "./style.less";
import { connect } from "react-redux";
import { linkItemsMock } from "./linkItemsMock";
import { Link } from "react-router-dom";

function Footer(props) {
  const showHelp = (title, help) => {
    /*  notification["success"]({
      message: title + "说明",
      description: help
    }); */
  };
  return <div className="basicLayoutFooter">
    <div className="text">
      <Link to="/home" >
        主页
      </Link>
    </div>
  </div>;
}
const mapStateToProps = (state, ownProps) => {
  return {
    isShow: state.globalReducer.isShow,
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    /* change: () => {
      const action = actionCreators.change();
      dispatch(action);
    } */
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
