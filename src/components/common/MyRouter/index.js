import React from "react";
import BasicLayout from "../../../Layout/BasicLayout";
import BlankLayout from "../../../Layout/BlankLayout";
import Login from "../../../pages/login";
import Home from "../../../pages/home";
import NewsList from "../../../pages/newsList";

import Company from "../../../pages/company";
import QueryHome from "../../../pages/queryhome";
import UseCompany from "../../../pages/usecompany";
import UseCompany1 from "../../../pages/usecompany1";
import UseCompany2 from "../../../pages/usecompany2";
import UseCompany3 from "../../../pages/usecompany3";
import UseCompany4 from "../../../pages/usecompany4";
import UseCompany5 from "../../../pages/usecompany5";
import UseCompany6 from "../../../pages/usecompany6";
import UseCompany7 from "../../../pages/usecompany7";
import UseCompany8 from "../../../pages/usecompany8";
import UseCompany9 from "../../../pages/usecompany9";

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
      {
        path: "/queryhome",
        component: QueryHome,
        name: "搜索主页",
      },
      {
        path: "/company/:id",
        component: Company,
        name: "公司信息",
      },
      {
        path: "/usecompany",
        component: UseCompany,
        name: "授权企业",
      },
      {
        path: "/usecompany1",
        component: UseCompany1,
        name: "授权企业",
      },
      {
        path: "/usecompany2",
        component: UseCompany2,
        name: "授权企业",
      },
      {
        path: "/usecompany3",
        component: UseCompany3,
        name: "授权企业",
      },
      {
        path: "/usecompany4",
        component: UseCompany4,
        name: "授权企业",
      },
      {
        path: "/usecompany5",
        component: UseCompany5,
        name: "授权企业",
      },
      {
        path: "/usecompany6",
        component: UseCompany6,
        name: "授权企业",
      },
      {
        path: "/usecompany7",
        component: UseCompany7,
        name: "授权企业",
      },
      {
        path: "/usecompany8",
        component: UseCompany8,
        name: "授权企业",
      },
      {
        path: "/usecompany9",
        component: UseCompany9,
        name: "授权企业",
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
        path: "/newsList/:id",
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
