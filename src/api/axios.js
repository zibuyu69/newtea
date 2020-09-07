// https://blog.csdn.net/qq_30669833/article/details/81701588

import axios from "axios";
// import qs from 'qs';
// 在config.js文件中统一存放一些公共常量，方便之后维护
import { myBaseURL } from "./config.js";

// 添加请求拦截器，在发送请求之前做些什么(**具体查看axios文档**)--------------------------------------------
axios.interceptors.request.use(
  (config) => {
    /*     const user = JSON.parse(window.sessionStorage.getItem('access-user'));
    if (user) {
      const token = user.token;
      config.headers.common.token = token;
    }
 */
    // console.log("axios", window.sessionStorage.getItem("token"));

    config.headers.common.token =
      window.sessionStorage.getItem("token") || "no token";
    // console.dir(config);
    if (!!window.ActiveXObject || "ActiveXObject" in window) {
      config.headers.common["Access-Control-Request-Headers"] = "accept";
    }

    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  }
);

// / 添加响应拦截器(**具体查看axios文档**)----------------------------------------------------------------
axios.interceptors.response.use(
  function (response) {
    if (response.data.status === 500 || response.data.code === 10111) {
      window.sessionStorage.setItem("token", "");
      window.sessionStorage.setItem("loginId", "");
      window.location.href = "/b/login";
    }
    // 对响应数据做点什么，允许在数据返回客户端前，修改响应的数据
    // 如果只需要返回体中数据，则如下，如果需要全部，则 return response 即可
    return response;
  },
  function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

// 封装数据返回失败提示函数---------------------------------------------------------------------------
const mockResponse = {
  data: {
    code: 20000,
    msg: "http请求失败，统一进行拦截并模拟后端数据",
    data: {
      list: [],
      entity: {},
    },
  },
};
function errorState(response, httpInfo) {
  console.log(
    "http error:",
    "(" + httpInfo.method + " method)  " + httpInfo.baseURL + httpInfo.url
  );

  // 隐藏loading
  // 如果http状态码正常，则直接返回数据
  if (
    response &&
    (response.status === 200 ||
      response.status === 304 ||
      response.status === 400)
  ) {
    // 如果不需要除了data之外的数据，可以直接 return response.data
    return response;
  }
  // console.log("rmockResponse", mockResponse);
  return mockResponse;
}

// 封装数据返回成功提示函数---------------------------------------------------------------------------
function successState(res) {
  // 隐藏loading
  // 统一判断后端返回的错误码(错误码与后台协商而定)
  // console.log("axios获取数据成功", res);

  if (res.data.status === 200) {
    return res;
  }
}

// 封装axios--------------------------------------------------------------------------------------
function apiAxios(method, url, params, newType) {
  let baseURL = myBaseURL;

  //  = newType ? myNewUrl : myBaseURL;

  const httpDefault = {
    method,
    baseURL,
    url,
    timeout: 300000,
    // `params` 是即将与请求一起发送的 URL 参数
    // `data` 是作为请求主体被发送的数据
    params: method === "GET" || method === "DELETE" ? params : null,
    data: method === "POST" || method === "PUT" ? params : null,
    validateStatus: function (status) {
      return status < 600; // 状态码在大于或等于600时才会 reject
    },
  };

  // 注意**Promise**使用(Promise首字母大写)
  return new Promise((resolve, reject) => {
    axios(httpDefault)
      // 此处的.then属于axios
      .then((response) => {
        successState(response);
        resolve(response);
      })
      .catch((response) => {
        errorState(response, httpDefault);
        reject(response);
        return "aaa";
      });
  });
}

function apiUtil() {}
apiUtil.getAxios = (url, params) => apiAxios("GET", url, params);
apiUtil.postAxios = (url, params) => apiAxios("POST", url, params);
apiUtil.putAxios = (url, params) => apiAxios("PUT", url, params);
apiUtil.delectAxios = (url, params) => apiAxios("DELECT", url, params);

export default apiUtil;
// 输出函数getAxios、postAxios、putAxios、delectAxios，供其他文件调用-----------------------------
// Vue.js的插件应当有一个公开方法 install。这个方法的第一个参数是 Vue 构造器，第二个参数是一个可选的选项对象。
// export default {
//     function (Param) {
//     Param.prototype.getAxios = (url, params) => apiAxios('GET', url, params)
//     Param.prototype.postAxios = (url, params) => apiAxios('POST', url, params)
//     Param.prototype.putAxios = (url, params) => apiAxios('PUT', url, params)
//     Param.prototype.delectAxios = (url, params) => apiAxios('DELECT', url, params)
//   }
// }
