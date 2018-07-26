//app.js
App({
  globalData: {
    extraData: {
      config: {
        scene: {
          // 用户支付成功后的返回按钮配置
          afterPay: {
            // 是否展示返回按钮
            showReturn: true,
            // 是否替换订单详情按钮为返回按钮
            replaceOrderDetailBtnWithReturnBtn: true
          }
        }
      }
    }
  },

  onLaunch: function () {
  }
});
