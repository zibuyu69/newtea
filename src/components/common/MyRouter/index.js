import React from "react";
import BasicLayout from "../../../Layout/BasicLayout";
import BlankLayout from "../../../Layout/BlankLayout";
import Login from "../../../pages/login";
import Home from "../../../pages/home";

export default {
  blankLayout: {
    path: "/b",
    layout: BlankLayout,
    route: [
      {
        path: "/login",
        component: Login,
        name: "登录页",
      },
    ],
  },
  basicLayout: {
    path: "",
    layout: BasicLayout,
    route: [
      {
        path: "/",
        component: Home,
        onHeader: true,
        name: "首页",
      },
    ],
  },
};
