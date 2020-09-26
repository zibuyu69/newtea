import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "./style.less";
import { Carousel, Icon, Divider } from "antd";
import { TabBar, WingBlank, SegmentedControl, Button } from "antd-mobile";

function ComponentFooter(props) {
  const { history } = props;

  const onClick = (path) => {
    history.push("/newsList");
  };

  return (
    <div className="ComponentFooter">
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="white"
        // hidden={this.state.hidden}
        tabBarPosition="bottom"
      >
        <TabBar.Item
          icon={<Icon type="home" style={{ fontSize: "24px" }} />}
          selectedIcon={<Icon type="home" />}
          title="企业官网"
          key="my"
          // selected={this.state.selectedTab === "yellowTab"}
        ></TabBar.Item>
        <TabBar.Item
          icon={<Icon type="message" style={{ fontSize: "24px" }} />}
          selectedIcon={<Icon type="home" />}
          title="企业热线"
          key="my"
          // selected={this.state.selectedTab === "yellowTab"}
        ></TabBar.Item>
        <TabBar.Item
          icon={<Icon type="home" style={{ fontSize: "24px" }} />}
          selectedIcon={<Icon type="user" />}
          title="白茶直播"
          key="my"
          // selected={this.state.selectedTab === "yellowTab"}
        ></TabBar.Item>
        <TabBar.Item
          icon={<Icon type="appstore" style={{ fontSize: "24px" }} />}
          selectedIcon={<Icon type="home" />}
          title="白茶驿站"
          key="my"
          // selected={this.state.selectedTab === "yellowTab"}
        ></TabBar.Item>
      </TabBar>
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
)(withRouter(ComponentFooter));
