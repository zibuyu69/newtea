import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "./style.less";
import * as actionCreators from "./store/actionCreators";
import { Select, Icon, Divider, Input, Button } from "antd";
import { NavBar, WingBlank, SegmentedControl, ImagePicker } from "antd-mobile";
import * as CONST from "./CONST";
import QueryFooter from "../../components/basic/queryFooter";
import * as NAME_CONST from "../queryhome/CONST";
import img1 from "../../assets/newList/普洱知识.jpg";
import img2 from "../../assets/newList/普洱资讯.jpg";

const { Option } = Select;
const { TextArea } = Input;

function UseCompany9(props) {
  const { history, allData, match } = props;
  const [data, setData] = useState([
    {
      url: img1,
      id: "2121",
    },
    {
      url: img2,
      id: "2122",
    },
  ]);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    /* props.getAll(); */
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

  const onChange = (files, type, index) => {
    console.log(files, type, index);
    setData(files);
  };
  // 点击提交
  const toSubmit = () => {
    props.toSubmit();
  };
  return (
    <div className="UseCompany9">
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
      </div>

      <WingBlank>
        <div className="content">
          <Input placeholder="举报编号" defaultValue="2020092617021165" />
          <ImagePicker
            files={data}
            onChange={onChange}
            onImageClick={(index, fs) => console.log(index, fs)}
            selectable={data.length < 7}
          />
          <TextArea placeholder="举报说明" rows={4} />
          <div className="bo_button">
            <Button style={{ width: "100%" }} type="primary" onClick={toSubmit}>
              提交
            </Button>
            <span style={{ fontSize: "14px", color: "#898989" }}>
              注:（我们不会泄露您的个人信息，并对您的信息进行加密处理）
            </span>
          </div>
        </div>
      </WingBlank>

      <QueryFooter />
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({
  ...state.UseCompany9Reducer,
});
const mapDispatchToProps = (dispatch, ownProps) => ({
  mergeData: (data) => {
    dispatch({ type: data.type, payload: data.payload });
  },
  getAll: (data) => {
    dispatch(actionCreators.getAll(data));
  },
  toSubmit: (data) => {
    dispatch(actionCreators.toSubmit(data));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(UseCompany9));
