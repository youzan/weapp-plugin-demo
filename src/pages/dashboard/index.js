import config from './config';

Page({
  data: {
    config,
    curConfig: {}
  },

  onLoad: function (options) {
    const type = options.type || 'dashboard';
    this.setData({
      curConfig: this.data.config[type]
    });
  },

  onShareAppMessage() {
    return {
      title: '有赞微商城插件示例',
      path: 'pages/dashboard/index'
    }
  }
});
