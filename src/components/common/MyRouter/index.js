import React from "react";
import BasicLayout from "../../../Layout/BasicLayout";
import BlankLayout from "../../../Layout/BlankLayout";
import Login from "../../../pages/login";
import Home from "../../../pages/home";
import NewsList from "../../../pages/newsList";
import Company from "../../../pages/company";

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
        path: "/home",
        component: Home,
        onHeader: true,
        name: "首页",
      },
      {
        path: "/newsList",
        component: NewsList,
        name: "新闻列表",
      },
      {
        path: "/company",
        component: Company,
        name: "公司信息",
      },
    ],
  },
};
