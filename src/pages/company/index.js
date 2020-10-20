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
  const { loading, history, match, allData } = props;

  useEffect(() => {
    props.getallData({ ID: match.params.id });
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
          {allData.company_name}
        </NavBar>
      </div>
      <div className="content">
        <table border="2" className="table">
          <tr>
            <td className="left">证书编号</td>
            <td className="right"> {allData.certificate_id}</td>
          </tr>
          <tr>
            <td className="left">企业名称</td>
            <td className="right"> {allData.company_name}</td>
          </tr>
          <tr>
            <td className="left">企业地址</td>
            <td className="right">{allData.company_addr}</td>
          </tr>
          <tr>
            <td className="left">发证日期</td>
            <td className="right">{allData.issue_date}</td>
          </tr>
          <tr>
            <td className="left">有效期至</td>
            <td className="right">{allData.validity}</td>
          </tr>
          <tr>
            <td className="left">发证单位</td>
            <td className="right">{allData.certificate_unit}</td>
          </tr>
        </table>
      </div>
      <WingBlank>
        <div className="info">
          {/* 111 */}
          <div className="title">公司简介</div>
          <Divider />
          <div className="info_text">{allData.company_profile}</div>
          {/* 22 */}
          <div className="title">{"荣誉展示"} </div>
          <Divider />
          {allData.honors &&
            allData.honors.map((item, index) => {
              return (
                <div key={index}>
                  <img
                    src={item.url}
                    style={{ width: "100%", height: "200px" }}
                  />
                  <div className="info_line">{item.title}</div>
                </div>
              );
            })}
          {/* 33 */}
          <div className="title">{"企业展示"} </div>
          <Divider />
          {allData.company_show &&
            allData.company_show.map((item, index) => {
              return (
                <div key={index}>
                  <img
                    src={item.url}
                    style={{ width: "100%", height: "200px" }}
                  />
                  <div className="info_line">{item.title}</div>
                </div>
              );
            })}

          {/* 444 */}
          <div className="title">{"主要产品"} </div>
          <Divider />
          {allData.product &&
            allData.product.map((item, index) => {
              return (
                <div key={index}>
                  <img
                    src={item.url}
                    style={{ width: "100%", height: "200px" }}
                  />
                  <div className="info_line">{item.title}</div>
                </div>
              );
            })}
          {/* 5555 */}
          <div className="title">{"公司信息"} </div>
          <Divider />
          <div className="info_line">{`地址： ${allData.company_addr}`}</div>
          <div className="info_line">{`电话： ${allData.telephone}`}</div>
          <div className="info_line">{`QQ： ${allData.company_qq}`}</div>
        </div>
      </WingBlank>
      {/* <ComponentFooter /> */}
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
