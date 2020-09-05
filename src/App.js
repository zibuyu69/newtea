import React, { useEffect } from "react";
import "antd/dist/antd.less";
import LayOut from "./layout.js";

function App(props) {
  return (
    <div className="App" style={{ height: "100%", width: "100%" }}>
      <LayOut />
    </div>
  );
}

export default App;
