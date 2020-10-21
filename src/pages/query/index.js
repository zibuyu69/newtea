import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import "./style.less";
import * as actionCreators from "./store/actionCreators";
import { Spin, Icon } from "antd";
import { ImagePicker, WingBlank, SegmentedControl, Button } from "antd-mobile";

import icon1 from "../../assets/query/icon1.png";
import icon2 from "../../assets/query/icon2.png";
import icon3 from "../../assets/query/icon3.png";
import icon4 from "../../assets/query/icon4.png";
import icon5 from "../../assets/query/icon5.png";
import icon6 from "../../assets/query/icon6.png";
import icon7 from "../../assets/query/icon7.png";
import icon8 from "../../assets/query/icon8.png";
import icon9 from "../../assets/query/icon9.png";

import bg from "../../assets/query/bg.png";

function Query(props) {
  const { loading, history } = props;

  return (
    <div className="Query">
      <div className="cell">
        <div className="cell_title">查询平台</div>
        <div className="cell_des">
          <div className="des1">
            <img
              src={icon1}
              style={{ marginRight: "1vw", width: "4vw", height: "4vw" }}
            />
            双江茶全链保障
          </div>
          <div className="des4">
            <div className="des2">
              <img
                src={icon2}
                style={{ marginBottom: "2vw", width: "8vw", height: "8vw" }}
              />
              <span> 国家地理</span>
              <span> 标志产品</span>
            </div>
            <div
              className="des3"
              onClick={() => {
                history.push(`/b/usecompany1/1`);
              }}
            >
              <img src={icon3} style={{ marginBottom: "2vw" }} />
              <span> SC认证</span>
              <span> 企业名录</span>
            </div>
          </div>
        </div>
      </div>
      {/* `````````````````````````````````````` */}
      <div className="cell">
        <div className="cell_title">诚信榜单</div>
        <div
          className="des5"
          onClick={() => {
            history.push(`/b/usecompany1/2`);
          }}
        >
          <div>
            <img
              src={icon8}
              style={{ marginRight: "2vw", width: "8vw", height: "8vw" }}
            />
            优质企业白名单
          </div>
          <Icon type="arrow-right" />
        </div>
      </div>
      {/* ````````````````````````````````````````` */}
      <div className="cell">
        <div className="cell_title">双江在行动</div>
        <div className="des8">
          <div className="des9">
            <img
              src={icon6}
              style={{ marginBottom: "2vw", width: "8vw", height: "8vw" }}
            />
            服务热线
          </div>
          <div className="des9">
            <img
              src={icon4}
              style={{ marginBottom: "2vw", width: "8vw", height: "8vw" }}
            />
            曝光台
          </div>
          <div className="des9">
            <img
              src={icon5}
              style={{ marginBottom: "2vw", width: "8vw", height: "8vw" }}
            />
            我要举报
          </div>
        </div>
      </div>
      {/* ··············································· */}
      <div className="cell">
        <div className="cell_title">邀您评价</div>
        <div className="des5">
          <div className="des7">
            <img
              src={icon9}
              style={{ marginRight: "2vw", width: "8vw", height: "8vw" }}
            />
            <div>
              诚挚邀请您评价
              <div className="des6">您最喜爱的勐库大叶种茶品牌</div>
            </div>
          </div>
          <Icon type="arrow-right" />
        </div>
      </div>
      {/* ········································ */}
      <div className="cell">
        <div className="cell_title">精选资讯</div>
        <div className="des10">
          <div className="des11">
            六安有个县,是药材之乡和茶叶之乡,地区生产总值161.25亿元
            <div className="des12">2020-03-19</div>
          </div>
          <img src={bg} style={{ width: "45vw", height: "30vw" }} />
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Query));
