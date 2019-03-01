var webpackRequire=require("././../../../webpack-require");webpackRequire("./src/packages/trade/zan-account/index.js",{"./src/packages/trade/zan-account/index.js":
/*!*************************************************!*\
  !*** ./src/packages/trade/zan-account/index.js ***!
  \*************************************************/
/*! no exports provided */function(a,n,e){"use strict";e.r(n);var s=e(/*! src/utils/mock */"./src/utils/mock.js"),t=getApp();Page({data:{alias:"s4ftrie81",nodes:'&lt;zan-account<br><span style="margin-left: 10px;"></span>app-id="wxf11c5910cb729a82"<br><span style="margin-left: 10px;"></span>open-id="wxopenid"<br><span style="margin-left: 10px;"></span>shop-id="{{ 45694034 }}"<br><span style="margin-left: 10px;"></span>show-login="{{ true }}"<br><span style="margin-left: 10px;"></span>bind:success="handleBindSuccess"<br>/&gt;',extraData:t.globalData.extraData,showLogin:!1,mockData:s.default},onLoad:function(){},handleShowZanAccount:function(){this.setData({showLogin:!0})},handleBindSuccess:function(a){console.log(a.detail,"mobile")}})},"./src/utils/mock.js":
/*!***************************!*\
  !*** ./src/utils/mock.js ***!
  \***************************/
/*! exports provided: default */function(a,n,e){"use strict";e.r(n);var s=wx.getAccountInfoSync&&wx.getAccountInfoSync(),t=s&&s.miniProgram.appId?s.miniProgram.appId:"wxf11c5910cb729a82";n.default={openId:"oDpvq0N1rr0NjE9FmeFXFDWEH9zs",shopId:45694034,appId:t}}});