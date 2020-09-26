import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "./style.less";
import * as actionCreators from "./store/actionCreators";
import { Carousel, Icon } from "antd";
import { ImagePicker, WingBlank, SegmentedControl, Button } from "antd-mobile";

import img1 from "../../assets/carousel/轮播图1.jpg";
import img2 from "../../assets/carousel/轮播图2.jpg";
import img3 from "../../assets/carousel/轮播图3.jpg";
import img4 from "../../assets/carousel/轮播图4.jpg";
import img5 from "../../assets/carousel/轮播图5.jpg";

import 普洱知识 from "../../assets/newList/普洱知识.jpg";
import 普洱资讯 from "../../assets/newList/普洱资讯.jpg";
import 普洱诗文 from "../../assets/newList/普洱诗文.jpg";
import 公告栏 from "../../assets/newList/公告栏.jpg";
import 茶企动态 from "../../assets/newList/茶企动态.jpg";
import 茶与健康 from "../../assets/newList/茶与健康.jpg";
import 普洱视频 from "../../assets/newList/普洱视频.jpg";
import 茶旅结合 from "../../assets/newList/茶旅结合.jpg";

const img = [img1, img2, img3, img4, img5];
const colors = [
  "#2db7f5",
  "#87d068",
  "#f50",
  "#108ee9",
  "orange",
  "#364d79",
  "#4bff04",
  "#dd1717",
];
const randomcol = () => colors[parseInt(Math.random() * colors.length)];

const list = [
  {
    title: "普洱知识",
    path: "2",
    img: 普洱知识,
  },
  {
    title: "普洱资讯",
    path: "1",
    img: 普洱资讯,
  },
  {
    title: "普洱展示",
    path: "3",
    img: 普洱诗文,
  },

  {
    title: "普洱文旅",
    path: "4",
    img: 茶旅结合,
  },
  {
    title: "公告栏",
    path: "5",
    img: 公告栏,
  },
];
function Home(props) {
  const { history } = props;

  const onClick = (path) => {
    history.push(`/newsList/${path}`);
  };

  const showCard = (list) => {
    let retlist = [];
    for (let item of list) {
      retlist.push(
        <div className="card" onClick={() => onClick(item.path)}>
          <div className="card_img">
            <img className="card_img_cell" src={item.img} />
          </div>
          <div className="card_text" style={{ backgroundColor: randomcol() }}>
            <div className="title">{item.title}</div>
            {item.text ? <div className="text">{item.text}</div> : null}
            <div className="icon">
              <Icon style={{ fontSize: "3vw" }} type="right-circle" />
            </div>
          </div>
        </div>
      );
    }
    return retlist;
  };

  return (
    <div className="Home">
      <div className="carousel">
        <Carousel autoplay>
          <div>
            <img className="img" src={img1} style={{ height: "26vw" }} />
          </div>
          <div>
            <img className="img" src={img2} style={{ height: "26vw" }} />
          </div>
          <div>
            <img className="img" src={img3} style={{ height: "26vw" }} />
          </div>
          <div>
            <img className="img" src={img4} style={{ height: "26vw" }} />
          </div>
          <div>
            <img className="img" src={img5} style={{ height: "26vw" }} />
          </div>
        </Carousel>
        ,
      </div>
      <WingBlank>{showCard(list)}</WingBlank>
      <div className="home_footer">© 2014-2020 福鼎普洱官方平台</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home));
