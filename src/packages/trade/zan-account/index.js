const app = getApp();

Page({
  data: {
    alias: 's4ftrie81',
    nodes: '&lt;zan-account<br><span style="margin-left: 10px;"></span>'
      + 'app-id="wxf11c5910cb729a82"<br><span style="margin-left: 10px;"></span>'
      + 'open-id="wxopenid"<br><span style="margin-left: 10px;"></span>'
      + 'shop-id="{{ 45694034 }}"<br><span style="margin-left: 10px;"></span>'
      + 'show-login="{{ true }}"<br><span style="margin-left: 10px;"></span>'
      + 'bind:success="handleBindSuccess"<br>/&gt;',
    extraData: app.globalData.extraData,
    showLogin: false
  },

  onLoad: function() {
  },

  handleShowZanAccount() {
    this.setData({
      showLogin: true
    });
  },

  handleBindSuccess(e) {
    console.log(e.detail, 'mobile');
  }
});
