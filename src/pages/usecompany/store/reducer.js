import * as constants from "./constants";

const defaultState = {
  allData: [
    { id: 1, name: "福建省天湖茶业有限公司" },
    { id: 2, name: "福建省广福茶业有限责任公司" },
    { id: 3, name: "六妙白茶股份有限公司" },
    { id: 4, name: "福建誉达茶业有限公司" },
    { id: 5, name: "福建广林福茶业有限责任公司" },
    { id: 6, name: "福鼎市天健茶业有限公司" },
  ],
  newData: [
    {
      name: "国家级农业产业化龙头企业",
      list: [
        { id: 1, name: "福建省天湖茶业有限公司" },
        { id: 2, name: "福建省广福茶业有限责任公司" },
        { id: 3, name: "六妙白茶股份有限公司" },
        { id: 4, name: "福建誉达茶业有限公司" },
        { id: 5, name: "福建广林福茶业有限责任公司" },
        { id: 6, name: "福鼎市天健茶业有限公司" },
      ],
    },
    {
      name: "福建省农业产业化龙头企业",
      list: [
        { id: 1, name: "福建省天湖茶业有限公司" },
        { id: 2, name: "福建省广福茶业有限责任公司" },
        { id: 3, name: "六妙白茶股份有限公司" },
        { id: 4, name: "福建誉达茶业有限公司" },
        { id: 5, name: "福建广林福茶业有限责任公司" },
        { id: 6, name: "福鼎市天健茶业有限公司" },
      ],
    },
  ],
  newData1: [
    {
      name: "国家级第四批非物质文化遗产项目代表性传承人",
      list: [
        {
          id: 1,
          name: "★ 福鼎白茶制作技艺1",
          list: [
            { id: 0, name: "1.梅相靖" },
            { id: 2, name: "2.耿宗钦" },
            { id: 3, name: "3.张礼雄" },
          ],
        },
      ],
    },
    {
      name: "宁德市第四批非物质文化遗产项目代表性传承人",
      list: [
        {
          id: 21,
          name: "★ 福鼎白茶制作技艺",
          list: [{ id: "01", name: "1.梅相靖" }],
        },
        {
          id: 11,
          name: "★ 福鼎白茶制作技艺",
          list: [{ id: "02", name: "1.梅相靖" }],
        },
        {
          id: 13,
          name: "★ 张元记红茶制作技艺",
          list: [{ id: "03", name: "1.梅相靖" }],
        },
      ],
    },
  ],
  newData2: [
    {
      title: "首届福鼎白茶传统工艺制茶大师",
      list: [
        { id: 0, name: "1.吴志坚", company: "福鼎市一叶九鼎茶业有限公司" },
        { id: 1, name: "1.吴志坚", company: "福鼎市一叶九鼎茶业有限公司" },
        { id: 2, name: "1.吴志坚", company: "福鼎市一叶九鼎茶业有限公司" },
      ],
    },
    {
      title: "第二届福鼎白茶传统工艺制茶大师",
      list: [
        { id: 0, name: "1.吴志坚", company: "福鼎市一叶九鼎茶业有限公司" },
        { id: 1, name: "1.吴志坚", company: "福鼎市一叶九鼎茶业有限公司" },
        { id: 2, name: "1.吴志坚", company: "福鼎市一叶九鼎茶业有限公司" },
      ],
    },
  ],
  newData3: [
    { id: 0, name: "1.吴志坚", company: "福鼎市一叶九鼎茶业有限公司" },
    { id: 1, name: "1.吴志坚", company: "福鼎市一叶九鼎茶业有限公司" },
    { id: 2, name: "1.吴志坚", company: "福鼎市一叶九鼎茶业有限公司" },
  ],
};

export default (state = defaultState, action) => {
  if (action.type === constants.MERGE_DATA) {
    return { ...state, ...action.payload };
  }

  return state;
};
