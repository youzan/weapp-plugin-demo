var webpackRequire=require("././../../webpack-require");webpackRequire("./src/packages/trade/index.js",{"./src/packages/trade/index.js":
/*!*************************************!*\
  !*** ./src/packages/trade/index.js ***!
  \*************************************/
/*! no static exports found */function(e,r){Page({onLoad:function(e){var r=void 0;switch(e.pageType){case"goods-detail":r="goods-detail?goodsId="+e.alias;break;case"order":r="order-list?type="+e.type;break;case"order-detail":r="detail?orderNo="+e.orderNo}wx.redirectTo({url:"plugin://yzTradePlugin/"+r+"&openId=oDpvq0N1rr0NjE9FmeFXFDWEH9zs&shopId=45694034&appId=wxf11c5910cb729a82"})}})}});