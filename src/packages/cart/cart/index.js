Page({
  data: {
    openId: '',
    appId: '',
    shopId: '',
    refreshFlag: 0
  },

  onLoad(options) {
    this.setData({
      openId: options.openId,
      appId: options.appId,
      shopId: options.shopId
    });
  },

  onPullDownRefresh() {
    const { refreshFlag } = this.data;
    this.setData({
      refreshFlag: (refreshFlag + 1) % 2
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
  },

  onRefreshEnd({ detail: { success } }) {
    wx.stopPullDownRefresh();
  }
});
