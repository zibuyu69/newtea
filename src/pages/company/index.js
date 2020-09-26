import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "./style.less";
import * as actionCreators from "./store/actionCreators";
import * as CONST from "./CONST";
import { Spin, Divider, Icon, Tooltip, Card, Typography } from "antd";
import {
  NavBar,
  Grid,
  Pagination,
  Modal,
  WhiteSpace,
  WingBlank,
} from "antd-mobile";
import ComponentFooter from "../../components/basic/componentFooter";

import img1 from "../../assets/company/品品香公司总部.png";
import img2 from "../../assets/company/品品香河山庄园.png";
import img3 from "../../assets/company/品品香有机茶园.png";
import img4 from "../../assets/company/品品香普洱文化体验馆.png";
import img5 from "../../assets/company/品品香实验室.png";

import img6 from "../../assets/company/主要产品.png";
import img7 from "../../assets/company/主要产品1.png";

const { Paragraph } = Typography;

function Company(props) {
  const { loading, history, match } = props;

  useEffect(() => {
    props.getallData({ id: match.params.id });
  }, [match.params.id]);

  return (
    <div className="Company">
      <div className="top">
        <NavBar
          mode="dark"
          icon={<Icon type="left" />}
          onLeftClick={() => {
            history.go(-1);
          }}
        >
          福建品品香茶叶有限公司
        </NavBar>
      </div>
      <div className="content">
        <table border="2" className="table">
          <tr>
            <td className="left">证书编号</td>
            <td className="right">DB-001</td>
          </tr>
          <tr>
            <td className="left">企业名称</td>
            <td className="right">福建品品香茶叶有限公司</td>
          </tr>
          <tr>
            <td className="left">企业地址</td>
            <td className="right">福建省福鼎市桐城资国寺村山下品品香</td>
          </tr>
          <tr>
            <td className="left">发证日期</td>
            <td className="right">2016-07-01</td>
          </tr>
          <tr>
            <td className="left">有效期至</td>
            <td className="right">2021-06-30</td>
          </tr>
          <tr>
            <td className="left">发证单位</td>
            <td className="right">福建省宁德市质量技术监督局</td>
          </tr>
        </table>
      </div>
      <WingBlank>
        <div className="info">
          {/* 111 */}
          <div className="title">{CONST.info1.title} </div>
          <Divider />
          <div className="info_text">{CONST.info1.text1} </div>
          <div className="info_text">{CONST.info1.text2} </div>
          <div className="info_text">{CONST.info1.text3} </div>
          {/* 22 */}
          <div className="title">{CONST.info2.title} </div>
          <Divider />
          {CONST.info2.text.map((item) => {
            return (
              <div className="info_line" key={{ item }}>
                {item}
              </div>
            );
          })}
          {/* 33 */}
          <div className="title">{CONST.info3.title} </div>
          <Divider />
          <img src={img1} style={{ width: "100%", height: "200px" }} />
          <div className="info_line">品品香公司总部</div>
          <img src={img2} style={{ width: "100%", height: "200px" }} />
          <div className="info_line">品品香河山庄园</div>
          <img src={img3} style={{ width: "100%", height: "200px" }} />
          <div className="info_line">品品香有机茶园</div>
          <img src={img4} style={{ width: "100%", height: "200px" }} />
          <div className="info_line">品品香普洱文化体验馆</div>
          <img src={img5} style={{ width: "100%", height: "200px" }} />
          <div className="info_line">品品香实验室</div>
          {/* 444 */}
          <div className="title">{CONST.info4.title} </div>
          <Divider />
          {CONST.info4.text.map((item) => {
            return (
              <div className="info_line" key={{ item }}>
                {item}
              </div>
            );
          })}
          <img src={img6} style={{ width: "100%", height: "200px" }} />
          <img src={img7} style={{ width: "100%", height: "200px" }} />
          {/* 5555 */}
          <div className="title">{CONST.info5.title} </div>
          <Divider />
          {CONST.info5.text.map((item) => {
            return (
              <div className="info_line" key={{ item }}>
                {item}
              </div>
            );
          })}
        </div>
      </WingBlank>
      <ComponentFooter />
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({
  ...state.CompanyReducer,
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
)(withRouter(Company));
