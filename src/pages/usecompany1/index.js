import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "./style.less";
import * as actionCreators from "./store/actionCreators";
import { Select, Icon, Divider } from "antd";
import { NavBar, WingBlank, SegmentedControl, Button } from "antd-mobile";
import * as CONST from "./CONST";
import QueryFooter from "../../components/basic/queryFooter";
import * as NAME_CONST from "../queryhome/CONST";

const { Option } = Select;

function UseCompany1(props) {
  const { history, allData, match } = props;
  const [value, setValue] = useState("");
  const [options, setOptions] = useState([]);

  useEffect(() => {
    if (match.params.id === "1") {
      props.getAll({
        page: 1,
        pageSize: 9999,
        is_scc: 1,
      });
    } else {
      props.getAll({
        page: 1,
        pageSize: 9999,
        is_whitelist: 1,
      });
    }
  }, [match.params.id]);

  let title = "食品（茶叶）生产许可【QS（SC）】企业名单";
  if (match.params.id === "2") {
    title = "优质企业白名单";
  }

  // 跳转
  const toJump = (item) => {
    history.push(`/b/company/${item.ID}`);
  };

  // 文本框变化的值
  const handleSearch = (value) => {
    if (value) {
      setOptions(CONST.getResult(value, [...allData]));
    } else {
      setOptions([]);
    }
  };

  // 选中 option
  const handleChange = (value) => {
    setValue(value);
    history.push(`/b/company/${value}`);
  };

  return (
    <div className="UseCompany1">
      <div className="top_fa">
        <div className="top">
          <NavBar
            mode="dark"
            icon={<Icon type="left" />}
            onLeftClick={() => {
              history.go(-1);
            }}
          >
            {NAME_CONST.nameList.map((item) => {
              if (item.to === match.path.split("/")[2]) {
                return item.name;
              }
            })}
          </NavBar>
        </div>

        <WingBlank>
          <Select
            showSearch
            value={value}
            placeholder="请输入企业全称或者企业机构代码"
            style={{ width: "100%" }}
            defaultActiveFirstOption={false}
            showArrow={false}
            filterOption={false}
            onSearch={handleSearch}
            onChange={handleChange}
            notFoundContent={null}
          >
            {options.map((item) => {
              return (
                <Option key={item.id} onClick={() => toJump(item)}>
                  {item.name}
                </Option>
              );
            })}
          </Select>
          <div className="title">
            {title}
            <span style={{ fontSize: "2vw", color: "#898989" }}>
              （排名不分先后）
            </span>
          </div>
        </WingBlank>
      </div>

      <WingBlank>
        <div className="content">
          {allData &&
            allData.map((item) => {
              return (
                <div
                  className="line"
                  key={item.id}
                  onClick={() => toJump(item)}
                >
                  {item.company_name}
                </div>
              );
            })}
        </div>
      </WingBlank>

      <QueryFooter />
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({
  ...state.UseCompany1Reducer,
});
const mapDispatchToProps = (dispatch, ownProps) => ({
  mergeData: (data) => {
    dispatch({ type: data.type, payload: data.payload });
  },
  getAll: (data) => {
    dispatch(actionCreators.getAll(data));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(UseCompany1));
