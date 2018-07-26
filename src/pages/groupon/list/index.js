const app = getApp();

Page({
  data: {
    nodes: '&lt;groupon<br><span style="margin-left: 10px;"></span>'
      + 'app-id="wxf11c5910cb729a82"<br><span style="margin-left: 10px;"></span>'
      + 'open-id="wxopenid"<br><span style="margin-left: 10px;"></span>'
      + 'kdt-id="{{ 16719442 }}"<br><span style="margin-left: 10px;"></span>'
      + 'size="2"<br><span style="margin-left: 10px;"></span>'
      + 'goods-source="1"<br><span style="margin-left: 10px;"></span>'
      + 'activity-ids="634766,634762"<br> /&gt;',
    extraData: app.globalData.extraData
  },

  onLoad: function() {
  }
});
