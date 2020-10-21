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

function UseCompany10(props) {
  const { history, allData, match } = props;
  const [value, setValue] = useState("");
  const [options, setOptions] = useState([]);

  useEffect(() => {
    props.getAll({
      page: 1,
      pageSize: 9999,
    });
  }, []);

  // 跳转
  const toJump = (item) => {
    history.push(`/b/company/${item.id}`);
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
    <div className="UseCompany10">
      <div className="top_fa">
        <div className="top">
          <NavBar
            mode="dark"
            icon={<Icon type="left" />}
            onLeftClick={() => {
              history.go(-1);
            }}
          >
            {"曝光平台"}
          </NavBar>
        </div>
      </div>

      <WingBlank>
        <div className="content-fa">
          <div className="title">
            曝光平台
            {/*   <span style={{ fontSize: "14px", color: "#898989" }}>
              （排名不分先后）
            </span> */}
          </div>
          <div className="content">
            {allData &&
              allData.map((item, index) => {
                if (item.ID == match.params.id) {
                  return <div className="line">{item.content}</div>;
                }
              })}
          </div>
        </div>
      </WingBlank>

      <QueryFooter />
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({
  ...state.UseCompany10Reducer,
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
)(withRouter(UseCompany10));
