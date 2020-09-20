import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "./style.less";
import * as actionCreators from "./store/actionCreators";
import { Spin, Button, Icon, Tooltip, Card, Typography } from "antd";
import {
  NavBar,
  Grid,
  Pagination,
  Modal,
  WhiteSpace,
  WingBlank,
} from "antd-mobile";

import img1 from "../../assets/newList/普洱知识.jpg";
import img2 from "../../assets/newList/普洱资讯.jpg";
import img3 from "../../assets/newList/普洱诗文.jpg";
import img4 from "../../assets/newList/公告栏.jpg";
import img5 from "../../assets/newList/茶企动态.jpg";

const { Paragraph } = Typography;

function NewsList(props) {
  const { loading, history } = props;
  const [toShow, setToShow] = useState(false); // 是否展示更多菜单
  useEffect(() => {
    props.getallData();
  }, []);

  const gridStyle = {
    width: "50%",
    height: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  // 点击更多
  const showMore = () => {
    setToShow(!toShow);
  };
  // 所有的菜单
  const allMenu = () => {
    return (
      <Card>
        <Card.Grid style={gridStyle}>普洱知识</Card.Grid>
        <Card.Grid style={gridStyle}>普洱资讯</Card.Grid>
        <Card.Grid style={gridStyle}>普洱诗文</Card.Grid>
        <Card.Grid style={gridStyle}>公告栏</Card.Grid>
        <Card.Grid style={gridStyle}>茶企动态</Card.Grid>
        <Card.Grid style={gridStyle}>茶与健康</Card.Grid>
        <Card.Grid style={gridStyle}>普洱视频</Card.Grid>
        <Card.Grid style={gridStyle}>茶旅结合</Card.Grid>
      </Card>
    );
  };

  //
  const newList = [
    {
      imgUrl: img1,
      title: "茶文化意为饮茶活动过程中形成的文化特征",
    },
    {
      imgUrl: img2,
      title:
        "包括茶道、茶德、茶精神、茶联、茶书、茶具、茶谱、茶诗、茶画、茶学、茶故事、茶艺等等",
    },
    {
      imgUrl: img3,
      title:
        "茶文化起源地为中国。中国是茶的故乡，中国饮茶，据说始于神农时代，少说也有4700多年了",
    },

    {
      imgUrl: img4,
      title: "直到现在，汉族还有民以茶代礼的风俗",
    },

    {
      imgUrl: img5,
      title:
        "汉族对茶的配制是多种多样的：有太湖的熏豆茶、苏州的香味茶、湖南的姜盐茶、蜀山的侠君茶、台湾的冻顶茶、杭州的龙井茶、福建的乌龙茶等",
    },
  ];

  // 点击跳转
  const toJump = () => {
    history.push("/company");
  };

  return (
    <div className="NewsList">
      <div className="top">
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
            title={allMenu}
            trigger="click"
            overlayClassName="NewsList_tooltip"
          >
            <div onClick={showMore} className="top_name">
              选择分类
              <Icon type="caret-down" style={{ marginLeft: "8px" }} />
            </div>
          </Tooltip>
        </NavBar>
      </div>
      <div className="content">
        {newList.map((item) => {
          return (
            <div className="new" key={item.title} onClick={() => toJump(item)}>
              <img className="img" src={item.imgUrl} />
              <div className="title">
                <Paragraph ellipsis style={{ width: "80%" }}>
                  {item.title}
                </Paragraph>
                <Icon
                  type="right-circle"
                  theme="filled"
                  style={{ marginLeft: "2vw", marginBottom: "2vw" }}
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className="NewsList_bottom">
        <Pagination
          total={5}
          className="custom-pagination-with-icon"
          current={1}
          locale={{
            prevText: (
              <span className="arrow-align-prev">
                <Icon type="left" />
                上一步
              </span>
            ),
            nextText: (
              <span className="arrow-align">
                下一步
                <Icon type="right" />
              </span>
            ),
          }}
        />
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
  getallData: (data) => {
    dispatch(actionCreators.getallData(data));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(NewsList));
