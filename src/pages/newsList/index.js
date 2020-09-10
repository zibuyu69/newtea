import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "./style.less";
import * as actionCreators from "./store/actionCreators";
import { Spin, Button, Icon, Tooltip, Card } from "antd";
import { NavBar, Grid } from "antd-mobile";

function NewsList(props) {
  const { loading, history } = props;
  const [toShow, setToShow] = useState(false); // 是否展示更多菜单
  const data = Array.from(new Array(9)).map((_val, i) => ({
    icon: "https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png",
    text: `name${i}`,
  }));

  const gridStyle = {
    width: "25%",
    textAlign: "center",
  };

  // 点击更多
  const showMore = () => {
    setToShow(!toShow);
  };
  // 所有的菜单
  const allMenu = () => {
    return (
      <Card title="Card Title">
        <Card.Grid style={gridStyle}>Content</Card.Grid>
        <Card.Grid hoverable={false} style={gridStyle}>
          Content
        </Card.Grid>
        <Card.Grid style={gridStyle}>Content</Card.Grid>
        <Card.Grid style={gridStyle}>Content</Card.Grid>
        <Card.Grid style={gridStyle}>Content</Card.Grid>
        <Card.Grid style={gridStyle}>Content</Card.Grid>
        <Card.Grid style={gridStyle}>Content</Card.Grid>
      </Card>
    );
  };

  return (
    <div className="NewsList">
      <div className="title">
        <NavBar
          mode="light"
          icon={<Icon type="arrow-left" />}
          onLeftClick={() => {
            history.go(-1);
          }}
          rightContent={[<Icon key="sync" type="sync" /* spin */ />]}
        >
          <Tooltip
            placement="bottom"
            title={<Grid data={data} activeStyle={false} />}
            trigger="click"
            overlayClassName="NewsList_tooltip"
          >
            <div onClick={showMore}>
              选择分类
              <Icon type="caret-down" style={{ marginLeft: "8px" }} />
            </div>
          </Tooltip>
        </NavBar>
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
)(withRouter(NewsList));
