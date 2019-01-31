Page({
  onLoad(options) {
    const { pageType } = options;
    let url;

    switch (pageType) {
      case 'goods-detail':
        url = `goods-detail?goodsId=${options.alias}`;
        break;
      case 'order':
        url = `order-list?type=${options.type}`;
        break;
      case 'order-detail':
        url = `detail?orderNo=${options.orderNo}`;
        break;
    }

    wx.redirectTo({
      url: `plugin://yzTradePlugin/${url}&openId=oDpvq0N1rr0NjE9FmeFXFDWEH9zs&shopId=45694034&appId=wxf11c5910cb729a82`
    });
  }
});
