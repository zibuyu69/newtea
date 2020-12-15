import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "./style.less";
import * as actionCreators from "./store/actionCreators";
import * as ListActionCreators from "../newsList/store/actionCreators";

import { Spin, Button, Icon, Tooltip, Input, Typography } from "antd";

import top1 from "../../assets/bighome/top.png";
import icon1 from "../../assets/bighome/icon1.png";
import icon2 from "../../assets/bighome/icon2.png";
import icon3 from "../../assets/bighome/icon3.png";
import icon4 from "../../assets/bighome/icon4.png";
import icon5 from "../../assets/bighome/icon5.png";

import bg4 from "../../assets/bighome/bg4.png";

import wx from "weixin-js-sdk";

function BigHome(props) {
  const { loading, history, match, config, once } = props;

  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    /*  if (!once) {
      console.log("once", once);
      props.mergeData({
        type: "newListReducer/MERGE_DATA",
        payload: { once: true },
      });
      self.location.href = "http://localhost:3000/";
    } */
    props.getConfig({ url: "http://www.puer.pro/b/login" });
  }, []);

  useEffect(() => {
    if (config.timestamp) {
      wx.config(config);
    }
  }, [config]);

  const startTwo = () => {
    console.log("进入");

    wx.scanQRCode({
      needResult: 0, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
      scanType: ["qrCode", "barCode"], // 可以指定扫二维码还是一维码，默认二者都有
      success: function (res) {
        var result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
        console.log("成功", res);
      },
    });
  };
  //
  const changeValue = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="BigHome">
      <div className="top">
        <img src={top1} style={{ width: "100%", height: "65vw" }} />
        <div className="top_des">
          <div className="title">好茶，在双江</div>
          <div className="des">这里是优质勐库大叶种茶的发源地</div>
          <Input
            className="top_search"
            placeholder="一键溯源"
            value={searchValue}
            onChange={changeValue}
            prefix={
              <div
                onClick={() => {
                  window.open(
                    `http://sy.ynlcdxzqb.cn/preview/index?publicCode=${searchValue}`,
                    "_self"
                  );
                }}
              >
                <Icon
                  type="search"
                  style={{ color: "rgba(0,0,0,.25)", fontSize: "5vw" }}
                />
              </div>
            }
            suffix={
              <Tooltip title="扫描二维码">
                <Icon
                  type="scan"
                  style={{ color: "rgba(0,0,0,.45)", fontSize: "5vw" }}
                  onClick={startTwo}
                />
              </Tooltip>
            }
          />
        </div>
      </div>
      <div className="big_bottom">
        <div className="bo_icons">
          <div
            className="icon"
            onClick={() => {
              history.push("/b/newsList/4");
            }}
          >
            <img src={icon1} style={{ width: "100%", height: "100%" }} />
            <div className="icon_name">行业动态</div>
          </div>
          <div className="icon">
            <img src={icon2} style={{ width: "100%", height: "100%" }} />
            <div className="icon_name">直播</div>
          </div>
          <div
            className="icon"
            onClick={() => {
              window.open("http://sy.ynlcdxzqb.cn/wantTrace", "_self");
            }}
          >
            <img src={icon3} style={{ width: "100%", height: "100%" }} />
            <div className="icon_name"> 一键溯源</div>
          </div>
          <div className="icon">
            <img src={icon4} style={{ width: "100%", height: "100%" }} />
            <div className="icon_name">名山古树</div>
          </div>
          <div
            className="icon"
            onClick={() => {
              history.push("/b/goodtea");
            }}
          >
            <img src={icon5} style={{ width: "100%", height: "100%" }} />
            <div className="icon_name">好茶推荐</div>
          </div>
        </div>
        <div className="bo_bg">
          <div
            className="bg1"
            onClick={() => {
              history.push("/b/query");
            }}
          >
            <div className="bo_title">茶企信息全目录</div>
            <div className="bo_des">查询您想要的</div>
          </div>
          <div className="bg_right">
            <div
              className="bg2"
              onClick={() => {
                history.push("/b/newsList/6");
              }}
            >
              <div className="bo_title">政府公告栏</div>
              <div className="bo_des">政府实时公告信息</div>
            </div>
            <div
              className="bg3"
              onClick={() => {
                history.push("/b/newsList/7");
              }}
            >
              <div className="bo_title">春茶报告</div>
              <div className="bo_des">最新春茶新闻</div>
            </div>
          </div>
        </div>
        <div className="bo_bo">
          <img src={bg4} style={{ width: "100%", height: "100%" }} />
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({
  ...state.newListReducer,
});
const mapDispatchToProps = (dispatch, ownProps) => ({
  mergeData: (data) => {
    dispatch({ type: data.type, payload: data.payload });
  },
  getallData: (data) => {
    dispatch(actionCreators.getallData(data));
  },
  getConfig: (data) => {
    dispatch(ListActionCreators.getConfig(data));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(BigHome));
