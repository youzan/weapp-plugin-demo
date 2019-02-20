import config from './config';
import args from './utils/args';
import entryData from './mock';

Page({
  data: {
    curConfig: {}
  },

  onLoad: function (options) {
    Object.keys(config).forEach((type) => {
      const contentList = config[type].content || [];
      contentList.forEach((urlData) => {
        const path = urlData.path;
        urlData.path = args.add(path, entryData);
      });
    });

    const type = options.type || 'dashboard';
    this.setData({
      config,
      curConfig: config[type]
    });
  },

  onShareAppMessage() {
    return {
      title: '有赞微商城插件示例',
      path: 'pages/dashboard/index'
    }
  }
});
