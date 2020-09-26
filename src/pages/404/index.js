import React from "react";
import "./style.less";
import { Link } from "react-router-dom";
import { Button, Result } from "antd";

export default function NoMatch(props) {
  return (
    <div className="my-404">
      <Result
        status="404"
        title="404"
        subTitle="对不起，您请求的地址未找到"
        extra={
          <Link to="/home">
            <Button type="primary"> 返回主页 </Button>
          </Link>
        }
      />
    </div>
  );
}
