var webpackRequire=require("././../../../../webpack-require");webpackRequire("./src/packages/goods/goods/big/index.js",{"./src/packages/goods/goods/big/index.js":
/*!***********************************************!*\
  !*** ./src/packages/goods/goods/big/index.js ***!
  \***********************************************/
/*! no exports provided */function(a,e,s){"use strict";s.r(e);var t=s(/*! src/utils/mock */"./src/utils/mock.js"),o=getApp();Page({data:{alias:"s4ftrie81",nodes:'&lt;goods<br><span style="margin-left: 10px;"></span>app-id="wxf11c5910cb729a82"<br><span style="margin-left: 10px;"></span>shop-id="{{ 45694034 }}"<br><span style="margin-left: 10px;"></span>layout="{{ 0 }}"<br>/&gt;',extraData:o.globalData.extraData,mockData:t.default},onLoad:function(){},handleGoodsClick:function(a){var e=a.detail;wx.navigateTo({url:"/packages/trade/index?alias="+e.alias+"&pageType=goods-detail"})}})},"./src/utils/mock.js":
/*!***************************!*\
  !*** ./src/utils/mock.js ***!
  \***************************/
/*! exports provided: default */function(a,e,s){"use strict";s.r(e);var t=wx.getAccountInfoSync&&wx.getAccountInfoSync(),o=t&&t.miniProgram.appId?t.miniProgram.appId:"wxf11c5910cb729a82";e.default={openId:"oDpvq0N1rr0NjE9FmeFXFDWEH9zs",shopId:45694034,appId:o}}});