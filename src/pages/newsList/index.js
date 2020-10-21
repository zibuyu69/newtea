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
  const { loading, history, match, pageInfo, allData } = props;

  const [toShow, setToShow] = useState(false); // 是否展示更多菜单
  let car;
  useEffect(() => {
    props.getallData({ type: match.params.id, ...pageInfo });
    return () => {
      props.mergeData({
        type: "newListReducer/MERGE_DATA",
        payload: {
          allData: [],
        },
      });
    };
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
    history.push(`/b/newsList/${id}`);
    setToShow(!toShow);
  };

  // 所有的菜单
  const allMenu = () => {
    return (
      <Card>
        <Card.Grid style={gridStyle} onClick={() => jump(1)}>
          生茶
        </Card.Grid>
        <Card.Grid style={gridStyle} onClick={() => jump(2)}>
          熟茶
        </Card.Grid>
        <Card.Grid style={gridStyle} onClick={() => jump(3)}>
          晒红
        </Card.Grid>
        <Card.Grid style={gridStyle} onClick={() => jump(4)}>
          行业动态
        </Card.Grid>
        <Card.Grid style={gridStyle} onClick={() => jump(6)}>
          政府公告
        </Card.Grid>
        <Card.Grid style={gridStyle} onClick={() => jump(7)}>
          春茶报告
        </Card.Grid>
      </Card>
    );
  };

  // 点击跳转
  const toJump = (item) => {
    window.open(item.wechat_url, "_self");
  };

  // 点击翻页
  const changePage = (type) => {
    let newPageInfo = pageInfo;
    if (type === 1) {
      newPageInfo.page = pageInfo.page - 1;
    } else {
      newPageInfo.page = pageInfo.page + 1;
    }
    props.getallData({ type: match.params.id, ...newPageInfo });
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
          rightContent={
            [
              /*             <Icon
              key="sync"
              type="sync"
              onClick={() => {
                props.getallData({ category: match.params.id });
              }}
            />,
 */
            ]
          }
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
        {allData &&
          allData.map((item) => {
            return (
              <div
                className="new"
                key={item.title}
                onClick={() => toJump(item)}
              >
                <img className="img" src={item.coverimg} />
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
          total={pageInfo.total}
          className="custom-pagination-with-icon"
          current={pageInfo.page}
          locale={{
            prevText: (
              <span className="arrow-align-prev" onClick={() => changePage(1)}>
                <Icon type="left" />
                上一页
              </span>
            ),
            nextText: (
              <span className="arrow-align" onClick={() => changePage(2)}>
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
  ...state.newListReducer,
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
