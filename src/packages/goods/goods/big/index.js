import mockData from 'src/utils/mock';

const app = getApp();

Page({
  data: {
    alias: 's4ftrie81',
    nodes: '&lt;goods<br><span style="margin-left: 10px;"></span>'
      + 'app-id="wxf11c5910cb729a82"<br><span style="margin-left: 10px;"></span>'
      + 'shop-id="{{ 45694034 }}"<br><span style="margin-left: 10px;"></span>'
      + 'layout="{{ 0 }}"<br>/&gt;',
    extraData: app.globalData.extraData,
    mockData
  },

  onLoad: function() {
  },

  handleGoodsClick(e) {
    const { detail } = e;
    wx.navigateTo({
      url: `/packages/trade/index?alias=${detail.alias}&pageType=goods-detail`
    });
  }
});
