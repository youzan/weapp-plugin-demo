const app = getApp();

Page({
  data: {
    nodes: '&lt;goods<br><span style="margin-left: 10px;"></span>'
      + 'app-id="wxf11c5910cb729a82"<br><span style="margin-left: 10px;"></span>'
      + 'open-id="wxopenid"<br><span style="margin-left: 10px;"></span>'
      + 'kdt-id="{{ 16719442 }}"<br><span style="margin-left: 10px;"></span>'
      + 'layout="{{ 3 }}"<br>/&gt;',
    extraData: app.globalData.extraData
  },

  onLoad: function() {
  }
});
