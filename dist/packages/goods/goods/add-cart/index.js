var webpackRequire=require("././../../../../webpack-require");webpackRequire("./src/packages/goods/goods/add-cart/index.js",{"./src/packages/goods/goods/add-cart/index.js":
/*!****************************************************!*\
  !*** ./src/packages/goods/goods/add-cart/index.js ***!
  \****************************************************/
/*! no exports provided */function(a,o,e){"use strict";e.r(o);var s=e(/*! src/utils/mock */"./src/utils/mock.js");Page({data:{alias:"102276278",nodes:'&lt;goods<br><span style="margin-left: 10px;"></span>app-id="wxf11c5910cb729a82"<br><span style="margin-left: 10px;"></span>shop-id="{{ 45694034 }}"<br><span style="margin-left: 10px;"></span>layout="{{ 0 }}"<br>/&gt;',extraData:{config:{scene:{default:{showReturn:!0},afterPay:{showReturn:!0,replaceOrderDetailBtnWithReturnBtn:!0}}}},goodsFrom:0,goodsGroupId:104842601,goodsIds:"432079102,424875465,351247703",mockData:s.default},onLoad:function(){},handleBuy:function(a){console.log(a,"buy")},handleItemClick:function(){console.log("click")},handleTap:function(){this.setData({goodsIds:"432079102,424875465,448091342"})}})},"./src/utils/mock.js":
/*!***************************!*\
  !*** ./src/utils/mock.js ***!
  \***************************/
/*! exports provided: default */function(a,o,e){"use strict";e.r(o);var s=wx.getAccountInfoSync&&wx.getAccountInfoSync(),n=s&&s.miniProgram.appId?s.miniProgram.appId:"wxf11c5910cb729a82";o.default={openId:"oDpvq0N1rr0NjE9FmeFXFDWEH9zs",shopId:45694034,appId:n}}});