import React from "react";
import BasicLayout from "../../../Layout/BasicLayout";
import BlankLayout from "../../../Layout/BlankLayout";
import Login from "../../../pages/login";
import Home from "../../../pages/home";
import NewsList from "../../../pages/newsList";

import QueryHome from "../../../pages/queryhome";
import UseCompany from "../../../pages/usecompany";
import UseCompany2 from "../../../pages/usecompany2";
import UseCompany3 from "../../../pages/usecompany3";
import UseCompany4 from "../../../pages/usecompany4";
import UseCompany5 from "../../../pages/usecompany5";
import UseCompany6 from "../../../pages/usecompany6";
import UseCompany7 from "../../../pages/usecompany7";
import UseCompany8 from "../../../pages/usecompany8";
import UseCompany9 from "../../../pages/usecompany9";

import BigHome from "../../../pages/bighome";
import GoodTea from "../../../pages/goodtea";
import Query from "../../../pages/query";
import UseCompany1 from "../../../pages/usecompany1";
import Company from "../../../pages/company";
import UseCompany10 from "../../../pages/usecompany10";

export default {
  blankLayout: {
    path: "/b",
    layout: BlankLayout,
    route: [
      /*   {
        path: "/login",
        component: Login,
        name: "登录页",
      },
      {
        path: "/bighome",
        component: BigHome,
        name: "第二版登录页",
      }, */
      {
        path: "/login",
        component: BigHome,
        name: "第二版登录页",
      },
      {
        path: "/goodtea",
        component: GoodTea,
        name: "好茶推荐",
      },
      {
        path: "/query",
        component: Query,
        name: "查询平台",
      },
      {
        path: "/newsList/:id",
        component: NewsList,
        name: "新闻列表",
      },
      {
        path: "/company/:id",
        component: Company,
        name: "公司信息",
      },
      {
        path: "/newsList/:id",
        component: NewsList,
        name: "新闻列表",
      },
      {
        path: "/usecompany1/:id",
        component: UseCompany1,
        name: "企业名单",
      },
      {
        path: "/usecompany10/:id",
        component: UseCompany10,
        name: "曝光详情",
      },
      /* `````````````````````````````````````````````````````````````` */
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
