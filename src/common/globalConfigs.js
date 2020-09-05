/* eslint-disable react/static-property-placement */
/*
 * @Author: zhaoheng
 * @LastEditors: Please set LastEditors
 * @Description: 定义全局变量配置，配置描述一定要清晰
 * @Company: SCCBA
 * @Date: 2019-06-11 10:01:05
 * @LastEditTime: 2020-01-14 16:00:06
 */

/**
 * @description: 定义一些全局请求接口变量
 */
export const GlobalApi = {
  defaultApiUrl: "36.XXX.xxx.xx",
  getUserInfo: "36.xx.xx.xx",
  getAuthorize: "36.aaa...aa"
};

/**
 * @description: 菜单变量
 */
export const MenuItems = [
  { key: "5", name: "我的门户", link: "/" },
  { key: "10", name: "工作区", link: "/workSpace" },
  {
    key: "15",
    name: "生活区",
    link: "/liveModule",
    otherMatchs: []
  }
];

/**
 * @description: 首页业务跟踪组件的显示名字对应表
 */

export const getName = {
  event: "事件",
  serviceRequest: "服务请求",
  problem: "问题",
  businessReq: "业务需求",
  test: "测试",
  unplannedRel: "计划外发布",
  businessLet: "业务联系书",
  project: "项目"
};

/**
 * @description:
 * @param {type}
 * @return:
 */
export const MockDataStructure = {
  data: {
    list: [],
    entity: {}
  }
};
