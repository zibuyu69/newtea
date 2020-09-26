import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "./style.less";
import * as actionCreators from "./store/actionCreators";
import { Carousel, Icon, Divider } from "antd";
import { ImagePicker, WingBlank, SegmentedControl, Button } from "antd-mobile";
import * as CONST from "./CONST";
import QueryFooter from "../../components/basic/queryFooter";

import logo from "../../assets/queryhome/logo.png";
import 荣誉 from "../../assets/queryhome/荣誉.jpg";
import 荣誉1 from "../../assets/queryhome/荣誉1.jpg";
import 白茶1 from "../../assets/queryhome/白茶1.jpg";
import 白茶2 from "../../assets/queryhome/白茶2.jpg";
import 白茶3 from "../../assets/queryhome/白茶3.jpg";
import 白茶4 from "../../assets/queryhome/白茶4.jpg";
import 白茶5 from "../../assets/queryhome/白茶5.jpg";

function QueryHome(props) {
  const { history } = props;

  return (
    <div className="QueryHome">
      <div className="top">
        <img src={logo} style={{ height: "16vw" }} />
      </div>

      <div className="top_list">
        {CONST.nameList.map((item) => {
          return (
            <div
              className="top_cell"
              key={item.name}
              onClick={() => {
                history.push(`/b/${item.to}`);
              }}
            >
              <div className="top_icon">
                <Icon
                  type={item.icon}
                  style={{ fontSize: "8vw", color: item.color }}
                />
              </div>

              {item.name}
            </div>
          );
        })}
      </div>

      <Divider>关于我们</Divider>
      <div className="carousel">
        <Carousel autoplay>
          <div>
            <img className="img" src={荣誉} style={{ height: "26vw" }} />
          </div>
          <div>
            <img className="img" src={荣誉1} style={{ height: "26vw" }} />
          </div>
          <div>
            <img className="img" src={白茶1} style={{ height: "26vw" }} />
          </div>
          <div>
            <img className="img" src={白茶2} style={{ height: "26vw" }} />
          </div>
          <div>
            <img className="img" src={白茶3} style={{ height: "26vw" }} />
          </div>
          <div>
            <img className="img" src={白茶4} style={{ height: "26vw" }} />
          </div>
          <div>
            <img className="img" src={白茶5} style={{ height: "26vwx" }} />
          </div>
        </Carousel>
      </div>
      <QueryFooter />
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
)(withRouter(QueryHome));
