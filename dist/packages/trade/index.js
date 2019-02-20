var webpackRequire=require("././../../webpack-require");webpackRequire("./src/packages/trade/index.js",{"./src/packages/trade/index.js":
/*!*************************************!*\
  !*** ./src/packages/trade/index.js ***!
  \*************************************/
/*! no exports provided */function(e,r,t){"use strict";t.r(r);var i=t(/*! ../../utils/args */"./src/utils/args.js"),a=t(/*! ../../utils/mock */"./src/utils/mock.js");Page({onLoad:function(e){var r=void 0;switch(e.pageType){case"goods-detail":r="goods-detail?goodsId="+e.alias;break;case"order":r="order-list?type="+e.type;break;case"order-detail":r="detail?orderNo="+e.orderNo;case"buy":r="buy?bookKey="+e.bookKey}wx.redirectTo({url:i.default.add("plugin://yzTradePlugin/"+r,a.default)})}})},"./src/utils/args.js":
/*!***************************!*\
  !*** ./src/utils/args.js ***!
  \***************************/
/*! exports provided: default */function(e,r,t){"use strict";t.r(r);var i=function(e){var r="";for(var t in e)""!==e[t]&&(r+=t.trim()+"="+e[t]+"&");return r?"?"+r.slice(0,r.length-1):""};function a(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").split("#")[0].split("?"),r={};return e[1]&&e[1].split("&").forEach(function(e){var t=e.split("=");r[t[0]]=t.slice(1).join("=")}),r}r.default={add:function(e,r){var t=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(!e||0===e.length||0===e.trim().indexOf("javascript"))return"";var s=e.split("#"),o=s[0].split("?"),c=a(e);return Object.keys(r).forEach(function(e){c[e.trim()]=t?encodeURIComponent(r[e]):r[e]}),e=o[0]+i(c),s[1]?e+="#"+s[1]:e},getAll:a}},"./src/utils/mock.js":
/*!***************************!*\
  !*** ./src/utils/mock.js ***!
  \***************************/
/*! exports provided: default */function(e,r,t){"use strict";t.r(r),r.default={openId:"oDpvq0N1rr0NjE9FmeFXFDWEH9zs",shopId:45694034,appId:"wxf11c5910cb729a82"}}});