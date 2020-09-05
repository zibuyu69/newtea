// 1生产
// 2开发
// 3测试

// 4朱辉
// 5马德超 36.30.67.6

let way = "";

let datUrl = "";
let bizUrl = "";
let bizUrl1 = "";
let cusUrl = "";
let feedbackUrl = "";
let websocketAddr = "";

if (process.env.NODE_ENV === "production") {
  datUrl = "http://zuul.sccba.org";
  bizUrl = "";
  bizUrl1 = "";
  cusUrl = "http://backstage.sccba.org";
  feedbackUrl = "http://zuul.sccba.org";
  websocketAddr = "ws://websocket.sccba.org";
} else if (process.env.NODE_ENV === "test") {
  datUrl = "http://36.8.8.3:8085";
  bizUrl = "";
  bizUrl1 = "";
  cusUrl = "http://backstagetest.sccba.org";
  feedbackUrl = "http://36.8.8.21:8080";
  websocketAddr = "ws://36.8.8.21:7777";
} else if (process.env.NODE_ENV === "development") {
  datUrl = "http://36.8.8.21:8080";
  bizUrl = "";
  bizUrl1 = "";
  cusUrl = "http://backstagetest.sccba.org";
  feedbackUrl = "http://36.8.8.21:8080";
  websocketAddr = "ws://36.8.8.21:7777";
}
if (way === 4) {
  datUrl = "http://36.30.36.33:8080";
  bizUrl = "";
  bizUrl1 = "";
  cusUrl = "http://backstagetest.sccba.org";
} else if (way === 5) {
  datUrl = "http://36.30.67.6:8070";
  bizUrl = "";
  bizUrl1 = "";
  cusUrl = "http://backstagetest.sccba.org";
}

export const myBaseURL = datUrl; // datawh
export const myNewUrl = bizUrl; //  bizcontact
export const myNewUrl1 = bizUrl1; // permission权限
export const myCusUrl = cusUrl; // 后台管理系统
export const myFeedbackUrl = feedbackUrl; // 后台管理系统
export const myWebsocketAddr = websocketAddr; // 后台管理系统
