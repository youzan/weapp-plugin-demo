Page({
  data: {
    openId: '',
    appId: '',
    shopId: ''
  },

  onLoad(options) {
    this.setData({
      openId: options.openId,
      appId: options.appId,
      shopId: options.shopId
    });
  },

  goBuy({ detail: { bookKey } }) {
    const { openId, appId, shopId } = this.data;
    wx.navigateTo({
      url: `/packages/trade/index?pageType=buy&bookKey=${bookKey}&openId=${openId}&appId=${appId}&shopId=${shopId}`
    });
  },

  goGoodsDetail({ detail: { goodsId } }) {
    const { openId, appId, shopId } = this.data;
    wx.navigateTo({
      url: `/packages/trade/index?pageType=goods-detail&alias=${goodsId}&openId=${openId}&appId=${appId}&shopId=${shopId}`
    });
  }
});
