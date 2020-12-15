import React from "react";
import {
  notification,
  Icon,
  Card,
  Popover,
  Spin,
  Alert,
  Typography,
  Avatar,
} from "antd";
import CryptoJS from "crypto-js";
import apiUtil from "apiUtil/axios";
import { myBaseURL } from "../api/config";
import Axios from "axios";

const { Title } = Typography;
const { Meta } = Card;
/**
 * @description: 打印日志
 * service:模块
 * fun: 操作
 * param:操作详情
 *
 */
export async function sendLog(service, fun, param) {
  const res = await apiUtil.postAxios("logApi/log/save", {
    service: service || "",
    function: fun || "",
    param: param || "",
  });
  if (res.data.code === 10000) {
    /* console.log("成功"); */
  } else {
    console.log("日志打印失败：", res.data);
  }
}

/**
 * @description: 加密
 * @param {type} str 要加密的字符串
 * @return: 加密后的字符串
 */
// const CryptoJS = require("require-js")
export function encrypt(str) {
  var key = "31323334353637383930414243444566";
  key = CryptoJS.enc.Hex.parse(key);

  var enc = CryptoJS.AES.encrypt(str, key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
  });
  return enc.ciphertext.toString();
}
/**
 * @description: 比较日期
 * @param :a,b 两个日期
 * @return: 1/-1
 */
export function compare(a, b) {
  let start = new Date(a);
  let end = new Date(b);
  return start.getTime() > end.getTime() ? 1 : -1;
}
/**
 * @description: 判断字符串
 * @param :
 * @return: true/false
 */
export function isString(obj) {
  return obj === `${obj}`;
}
/**
 * @description: 判断数字
 * @param :
 * @return: true/false
 */
export function isNumber(obj) {
  return obj === +obj;
}
/**
 * @description: 校验是否为空
 * @param {string} str 要校验的字段
 * @return: true：空，false 不为空
 */
export function isEmpty(str) {
  if (str === "" || str === null || str === undefined) {
    return true;
  }
  return false;
}

/**
 * @description: 只返回必须的字段
 * @param {arr} requireArr 必须的字段
 * @param {obj} allData 筛选前所有的字段
 * @return:  {obj}   筛选后只有必需字段的obj
 */
export function getOnlyRequired(requireArr, allData) {
  for (let key in allData) {
    if (requireArr.indexOf(key) == -1) {
      delete allData[key];
    }
  }
  return allData;
}

/**
 * @description: 检验必填字段是否为空
 * @param {arr} mustArr 必须的字段
 * @param {obj} allData 需要检验的所有字段
 * @return:  {arr}   检验后空的字段
 */
export function getEmptyArr(mustArr, allData) {
  let emptyList = [];
  mustArr.map((item, index) => {
    if (isEmpty(allData[item])) {
      emptyList = [item, ...emptyList];
    }
  });
  return emptyList;
}

/**
 * @description: 报错样式
 * @param {obj} res 后端返回的规定格式的res
 * @param {String} way 接口的地址
 * @return:
 */
export function showErr(res, way) {
  let message = way + "操作失败。";
  let description = "未获得报错信息";
  if (res.data && res.data.msg) {
    description = res.data.msg;
  } else {
    description = JSON.stringify(res.data);
  }

  notification.open({
    message: message,
    description: description,
    icon: React.createElement(Icon, {
      type: "frown",
      style: { color: "#108ee9" },
    }),
    duration: 5,
    placement: "topLeft",
    style: {
      width: 600,
      marginTop: 60,
    },
  });
}
/**
 * @description: loading样式
 * @param {String} successMessage 成功后显示的信息
 * @return:
 */
export const showLoading = (
  <Spin tip="Loading..." style={{ width: "100%", height: "100%" }}>
    <Alert
      message="正在加载数据"
      description="若长时间未能成功加载数据请联系管理员"
      type="info"
    />
  </Spin>
);
/**
 * @description: 成功样式
 * @param {String} successMessage 成功后显示的信息
 * @return:
 */
export function showSuccess(successMessage) {
  notification.open({
    message: "操作成功!",
    description: successMessage,
    icon: React.createElement(Icon, {
      type: "smile",
      style: { color: "#108ee9" },
    }),
    duration: 3,
    style: {
      width: 600,
      marginLeft: 335 - 600,
      marginTop: 60,
    },
  });
}

/**
 * @description: 字符串是否为空
 * @param {arr} 字符串
 * @return {number} true or false
 */
export function strIsEmpty(str) {
  if (
    str == undefined ||
    str == null ||
    (str != undefined && ("" + str).trim() == "")
  ) {
    return true;
  } else {
    return false;
  }
}

/**
 * @description: 字符串是否为空
 * @param {arr} 字符串
 * @return {number} true or false
 */
export function numberIsEmptyOrZero(num) {
  if (num == undefined || num == null || num === "") {
    return true;
  } else {
    return false;
  }
}

/**
 * @description: 判断是否有效数组,且长度>0
 * @param {string} value 所有的数据
 * @return {布尔} 返回 true或者false
 */
export function isArr(value) {
  return value && Array.isArray(value);
}

export function isArrChild(value) {
  return (
    value &&
    value.children &&
    Array.isArray(value.children) &&
    value.children.length > 0
  );
}

/**
 * @description: 获取当前url
 * @param {String} number 想要获取第几个 “/” 之间的字符串
 * @return:
 */

export function getLocalUrl(number) {
  let url = window.location.href.split("/")[number + 2];
  if (url) {
    return `/${url}`;
  } else {
    return `/`;
  }
}

/**
 * @description:
 * @param {type}
 * @return:
 */
export const mockDataStructure_1 = {
  code: "",
  msg: "",
  data: [],
};
export const showHelp = (type, title, help) => {
  notification[type]({
    message: title,
    description: help,
    placement: "topLeft",
  });
};
/**
 * @description:
 * @param {type}
 * @return:
 */
export const mockDataStructure = {
  data: {
    data: {
      list: [],
      entity: {},
    },
  },
};
/**
 * @description: antd table组件中，如果某列内容非常多，就会把行高撑开影响美观
 *               overflowEllipsis解决内容溢出使用...代替溢出内容
 * @param {string} content 要处理的内容
 * @param {int} pixel 列宽像素
 * @param {string} size 表格尺寸大小
 * @return: 如果溢出返回xxxxx...，并且以左上角气泡框方式弹出 如果没有溢出返回xxxxx
 */
export function overflowEllipsis(content, pixel, size) {
  // 计算出pixel像素下可以装下多少个字，33.33是antd table组件列中两边留白的总宽度，17.335是默认字体大小一个汉字的像素
  let offset = 33.33;
  let wordSize = 17.335;
  if (size == "small") {
    // 如果是table尺寸是small，留白间距为17，字体像素为16
    offset = 17;
    wordSize = 16;
  }
  let wordNum = parseInt((pixel - offset) / wordSize) + 1;
  if (content && content.length > wordNum) {
    return (
      <Popover
        placement="top"
        content={
          content.length > 306 ? (
            <div
              style={{
                width: pixel > 448 ? pixel : content.length > 32 ? 448 : "100%", // 最宽只能448px，448px能容下32个汉字，448 = 32 * 14（一个汉字34px）
                height: "189px", // 第一屏幕显示9行，每行21px高
                overflowY: "auto",
                overflowX: "auto",
                wordBreak: "break-all", // 自动换行
              }}
            >
              {content}
            </div>
          ) : (
            <div
              style={{
                width: pixel > 448 ? pixel : content.length > 32 ? 448 : "100%",
                wordBreak: "break-all",
              }}
            >
              {content}
            </div>
          )
        }
      >
        {/* {content.substr(0,wordNum-1)}... // 用CSS来截取吧 */}
        <div
          style={{
            width: pixel,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            textAlign: "left",
          }}
        >
          {content}
        </div>
      </Popover>
    );
  } else {
    return (
      <div style={{ textAlign: "left" }} title={content}>
        {content}
      </div>
    );
  }
}

/**
 * @description: 为文字附带说明图标按钮，样式为气泡，一般用在table表头
 * @param {string} helpTitle 鼠标悬浮气泡的帮助标题
 * @param {type} helpContent 鼠标悬浮气泡的帮助内容
 * @param {type} originTitle 需要包装的原文字
 * @return: 包装后帮助组件
 */
export function attachHelp(helpTitle, helpContent, originTitle) {
  return (
    <Popover
      placement="top"
      title={helpTitle}
      content={
        <div>
          <p>{helpContent}</p>
        </div>
      }
    >
      {originTitle}
      {/* icon style: 如果原有文本为空，那么Icon就是居中的 */}
      <Icon
        type="question-circle"
        style={{
          cursor: "pointer",
          color: "#f39518",
          marginLeft: originTitle ? 8 : 0,
        }}
      />
    </Popover>
  );
}

import moment from "moment";

const WEEK_LIST = ["周一", "周二", "周三", "周四", "周五", "周六", "周日"];
let retList = [];
for (
  let i = "2020-01-01";
  i <= moment().format("YYYY-MM-DD");
  i = moment(i).add(1, "d").format("YYYY-MM-DD")
) {
  retList.push({ date: i, week: WEEK_LIST[moment(i).weekday()] });
}

export const dateListOfWorkLog = retList;

/**
 * @description: 强制获取两位小数
 * @param {num} x 需要强制截取的数字
 * @return:精确到小数点后两位的数字
 */

export function toDecimal2(x) {
  if (isNumber(x) || isString(x)) {
    // 不能转换的 返回0
    let number = parseFloat(x);
    if (isNaN(number)) {
      let myNumber = 0;
      return myNumber.toFixed(2);
    }
    let f = Math.round(x * 10000) / 10000;
    let s = f.toString();
    let rs = s.indexOf(".");
    if (rs < 0) {
      rs = s.length;
      s += ".";
    }
    while (s.length <= rs + 2) {
      s += "0";
    }
    let result = s.substring(0, rs + 3);
    return Number(result);
  }
}
/* *********************************************************************************************** */

/**
 * @description: window.open 下载
 * @param {String} url 下载地址
 * @param
 * @return:
 */

export function openUrl(url) {
  // 如果是IE
  if (window.navigator && window.navigator.msSaveOrOpenBlob) {
    window.open(url);
  } else {
    setTimeout(() => {
      const frame = document.createElement("iframe");
      frame.setAttribute("style", "display:none");
      frame.setAttribute("src", url);
      frame.setAttribute("id", url);
      document.body.appendChild(frame);
      setTimeout(() => {
        let node = document.getElementById(url);
        node.parentNode.removeChild(node);
      }, 1000);
    }, 100);
  }
}
/**
 * /**
 * @description: 打包下载文件
 * @param {arr}    selectList   文件列表
 * @param {string} zipName      压缩包名字
 * @param {obj}    stopLoading  停止loading
 * @return:
 */
import FileSaver from "file-saver";
import JSZip from "jszip";

export function downloadFile(selectList, zipName, stopLoading) {
  if (isArr(selectList)) {
    handleBatchDownload(selectList, zipName, stopLoading); // 存储待打包的URI数组和包的名称
  }
}
async function handleBatchDownload(selectList, zipName, stopLoading) {
  const data = selectList;
  const zip = new JSZip();
  const cache = {};
  const promises = [];
  await data.forEach((item) => {
    const promiseItem = getFile(item.url).then((dta) => {
      // dta为getFile处理过的arraybuffer格式的单个文件
      zip.file(item.fileName, dta, { binary: true }); // 逐个添加文件
      cache[item.fileName] = dta;
    });
    promises.push(promiseItem);
  });
  Promise.all(promises).then(() => {
    zip
      .generateAsync({ type: "blob" })
      .then((content) => {
        // 生成二进制流
        FileSaver.saveAs(content, zipName + ".zip"); // 利用file-saver保存文件
        stopLoading();
      })
      .catch((err) => {
        stopLoading();
        message.error("网络出现了一点小问题，请稍后重试");
      });
  });
}
// 请求头属性
const options = {
  method: "get",
  withCredentials: false,
  responseType: "arraybuffer",
};
// 获取文件的arraybuffer格式并传入进行打包准备
function getFile(url) {
  return new Promise((resolve, reject) => {
    Axios(url, options)
      .then((res) => {
        resolve(res.data);
      })
      .catch((error) => {
        reject(error.toString());
      });
  });
}
/**
 * @description: 前端下载文件流
 * @param {String} url 请求地址
 * @param {obj} pageInfo 搜索条件
 * @param {obj} stopLoading 最后执行的方法
 * @return:
 */
export function exportFile(url, pageInfo, stopLoading) {
  let newPageInfo = { ...pageInfo };
  // 删除无用数据
  delete newPageInfo.pageNo;
  delete newPageInfo.pageSize;
  delete newPageInfo.totalCount;

  // 请求头属性
  const options = {
    method: "get",
    headers: {
      token: `${window.sessionStorage.getItem("token")}`,
    },
    withCredentials: true,
    responseType: "blob",
    /* mode: "cors" */
  };
  // 请求地址
  let myUrl = `${myBaseURL}${url}`;
  let dataStr = "";
  Object.keys(newPageInfo).forEach((key) => {
    dataStr += key + "=" + newPageInfo[key] + "&";
  });
  if (dataStr !== "") {
    dataStr = dataStr.substr(0, dataStr.lastIndexOf("&"));
    myUrl = myUrl + "?" + dataStr;
  }
  // 开始请求
  Axios(myUrl, options)
    .then((res) => {
      if (
        res.headers["content-type"] === "application/vnd.ms-excel;charset=utf-8"
      ) {
        // 获得文件名
        console.log("res", res);

        let fileName =
          res.headers["content-disposition"] ||
          "attachment;filename=priceBudget.xls";
        console.log("fileName", res.headers["content-disposition"]);
        let length = fileName.length;
        let name = fileName.slice(20, length);
        // 如果是IE
        if (window.navigator && window.navigator.msSaveOrOpenBlob) {
          navigator.msSaveOrOpenBlob(
            new Blob([res.data]),
            decodeURIComponent(name)
          );
        }
        // 如果不是IE
        else {
          let blob = new Blob([res.data]);
          let aElement = document.createElement("a"); // 创建a标签
          let blobUrl = window.URL.createObjectURL(blob);
          aElement.href = blobUrl; // 下载地址
          aElement.setAttribute("download", decodeURIComponent(name)); // 必须加，否则会跳转网页
          document.body.appendChild(aElement);
          aElement.click();
        }

        stopLoading();
      } else {
        // 报错处理
        let reader = new FileReader();
        reader.onload = (e) => {
          let result = "";
          result = JSON.parse(e.target.result).msg;
          message.error(result);
        };
        reader.readAsText(new Blob([res.data]));
        stopLoading();
      }
    })
    .catch((err) => {
      console.log("数据列导出报错:", err);
    });
}
/**********************************************************************************************************/
/**
 * @description: 根据 现有菜单 和 权限菜单 得出最终菜单
 * @param {arr} 现有菜单
 * @param {arr} 权限菜单
 * @return {number} 返回  最终菜单
 */
export function getResultMenu(myMenu, promiseMenu) {
  let resultMenu = [];
  if (Array.isArray(myMenu) && Array.isArray(promiseMenu)) {
    myMenu.map((item, index) => {
      promiseMenu.map((item0, index0) => {
        if (item.name === item0.name) {
          item.canShow = true;
        }
      });
    });
  }
  resultMenu = myMenu.filter((item) => item.canShow);

  return resultMenu;
}

/**
 * @description: 获取某个菜单的权限id
 * @param {String} name 菜单名字
 * @param {obj} menuTree menuTree 总的菜单树
 * @return: 二级菜单
 */

export function getMenuId(name, menuTree) {
  let result = "";
  function showId(arr) {
    if (isArr(arr)) {
      arr.forEach((item) => {
        if (item.name === name) {
          result = item.id;
        } else if (isArrChild(item)) {
          showId(item.children);
        }
      });
    }
  }
  showId(menuTree);
  return result;
}

/**
 * @description: 获取某 根菜单 下的 二级菜单
 * @param {String} path      根菜单path
 * @param {obj} menuTree     总的菜单树
 * @param {fun} handleClick  点击事件
 * @return: 二级菜单的card样式
 */
export function getSecondMenu(path, menuTree, handleClick) {
  let result = [];
  if (isArr(menuTree)) {
    menuTree.forEach((item, index) => {
      if (item.path === `${path}` && isArrChild(item)) {
        result = item.children;
      }
    });
  }
  return result;
}
