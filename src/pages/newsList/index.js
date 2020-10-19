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
  const { loading, history, match } = props;

  const [toShow, setToShow] = useState(false); // 是否展示更多菜单
  let car;
  useEffect(() => {
    props.getallData({ category: match.params.id });
  }, [match.params.id]);

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

  // 跳转
  const jump = (id) => {
    history.push(`/newsList/${id}`);
    //  window.location.href = `/newsList/${id}`
    setToShow(!toShow);
  };

  // 所有的菜单
  const allMenu = () => {
    return (
      <Card>
        <Card.Grid style={gridStyle} onClick={() => jump(2)}>
          普洱知识
        </Card.Grid>
        <Card.Grid style={gridStyle} onClick={() => jump(1)}>
          普洱资讯
        </Card.Grid>
        <Card.Grid style={gridStyle} onClick={() => jump(3)}>
          普洱展示
        </Card.Grid>
        <Card.Grid style={gridStyle} onClick={() => jump(4)}>
          普洱文旅
        </Card.Grid>
        <Card.Grid style={gridStyle} onClick={() => jump(5)}>
          公告栏
        </Card.Grid>
      </Card>
    );
  };

  //
  const newList = [
    {
      imgUrl: img1,
      title: "双江特产 “普洱皇后”--冰岛茶",
      url:
        "http://mp.weixin.qq.com/s?__biz=Mzg4ODQ1MTI1MA==&mid=100000041&idx=1&sn=58f5ae5e1f7c46fb5123086663a46758&chksm=4ffbb8f4788c31e27adffbc3a57d97e45e48bdcaa25717e35f3f6a00f182436bf9a90c3a9885#rd",
    },
    {
      imgUrl: img2,
      title: "加快茶产业转型升级 双江举办茶叶智能仓储培训会",
      url:
        "http://mp.weixin.qq.com/s?__biz=Mzg4ODQ1MTI1MA==&mid=100000036&idx=1&sn=5e7f7d0ac5d6bd4e7e3c13d578031d17&chksm=4ffbb8f9788c31efb74a5b00d38860e2fdbea8b3ea0e8e013d7b2af69bf9b239de470459ec65#rd",
    },
    {
      imgUrl: img3,
      title: "双江紧抓“一县一业”发展机遇 实现茶叶综合产值51.6亿元",
      url:
        "http://mp.weixin.qq.com/s?__biz=Mzg4ODQ1MTI1MA==&mid=100000022&idx=1&sn=efc6e37968f313c8f562199a336a78e2&chksm=4ffbb8cb788c31dd5b5cd59cfc661540388dc41f8e4da5cad545a7d2344c0c9b701f43e9bd10#rd",
    },

    {
      imgUrl: img4,
      title: "直到现在，汉族还有民以茶代礼的风俗",
      url:
        "http://mp.weixin.qq.com/s?__biz=Mzg4ODQ1MTI1MA==&mid=100000022&idx=1&sn=efc6e37968f313c8f562199a336a78e2&chksm=4ffbb8cb788c31dd5b5cd59cfc661540388dc41f8e4da5cad545a7d2344c0c9b701f43e9bd10#rd",
    },

    {
      imgUrl: img5,
      title:
        "汉族对茶的配制是多种多样的：有太湖的熏豆茶、苏州的香味茶、湖南的姜盐茶、蜀山的侠君茶、台湾的冻顶茶、杭州的龙井茶、福建的乌龙茶等",
      url:
        "http://mp.weixin.qq.com/s?__biz=Mzg4ODQ1MTI1MA==&mid=100000022&idx=1&sn=efc6e37968f313c8f562199a336a78e2&chksm=4ffbb8cb788c31dd5b5cd59cfc661540388dc41f8e4da5cad545a7d2344c0c9b701f43e9bd10#rd",
    },
  ];

  // 点击跳转
  const toJump = (item) => {
    /*  history.push("/company"); */
    window.open(item.url, "_self");
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
          rightContent={[
            <Icon
              key="sync"
              type="sync"
              onClick={() => {
                props.getallData({ category: match.params.id });
              }}
            />,
          ]}
        >
          <Tooltip
            placement="bottom"
            title={allMenu}
            overlayClassName="NewsList_tooltip"
            visible={toShow}
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
                上一页
              </span>
            ),
            nextText: (
              <span className="arrow-align">
                下一页
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
