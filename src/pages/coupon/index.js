Page({
  data: {
    openId: '',
    appId: '',
    shopId: '',
    autoNodes: '&lt;coupon<br><span style="margin-left: 10px;"></span>'
      + 'app-id="wxf11c5910cb729a82"<br><span style="margin-left: 10px;"></span>'
      + 'shop-id="{{ 45694034 }}"<br><span style="margin-left: 10px;"></span>'
      + 'open-id="oDpvq0N1rr0NjE9FmeFXFDWEH9zs"<br>'
      + '/&gt;',
    customNodes: '&lt;coupon<br><span style="margin-left: 10px;"></span>'
      + 'app-id="wxf11c5910cb729a82"<br><span style="margin-left: 10px;"></span>'
      + 'shop-id="{{ 45694034 }}"<br><span style="margin-left: 10px;"></span>'
      + 'open-id="oDpvq0N1rr0NjE9FmeFXFDWEH9zs"<br><span style="margin-left: 10px;"></span>'
      + 'coupon-source="{{ 1 }}"<br><span style="margin-left: 10px;"></span>'
      + 'coupon-ids="5003331,5003325"<br>'
      + '/&gt;',
  },

  onLoad(options) {
    this.setData({
      openId: options.openId,
      appId: options.appId,
      shopId: options.shopId
    });
  }
});
