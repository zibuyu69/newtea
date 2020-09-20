import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "./style.less";
import * as actionCreators from "./store/actionCreators";
import { Select, Icon, Divider } from "antd";
import { NavBar, WingBlank, SegmentedControl, Button } from "antd-mobile";
import * as CONST from "./CONST";
import QueryFooter from "../../components/basic/queryFooter";

const { Option } = Select;

function UseCompany(props) {
  const { history, allData } = props;
  const [value, setValue] = useState("");
  const [options, setOptions] = useState([]);

  useEffect(() => {
    props.getAll();
  }, []);

  // 跳转
  const toJump = (item) => {
    history.push("/company");
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
    history.push("/company");
  };

  return (
    <div className="UseCompany">
      <div className="top_fa">
        <div className="top">
          <NavBar
            mode="dark"
            icon={<Icon type="left" />}
            onLeftClick={() => {
              history.go(-1);
            }}
          >
            福鼎白茶证明商标使用授权企业
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
              return <Option key={item.id}>{item.name}</Option>;
            })}
          </Select>
          <div className="title">
            “福鼎白茶”证明商标使用授权名单
            <span style={{ fontSize: "14px", color: "#898989" }}>
              （排名不分先后）
            </span>
          </div>
        </WingBlank>
      </div>

      <WingBlank>
        <div className="content">
          {allData.map((item) => {
            return (
              <div className="line" key={item.id} onClick={() => toJump(item)}>
                {item.name}
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
  ...state.UseCompanyReducer,
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
)(withRouter(UseCompany));
