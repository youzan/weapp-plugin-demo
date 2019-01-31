Page({
  data: {
    alias: '102276278',
    nodes: '&lt;goods<br><span style="margin-left: 10px;"></span>'
      + 'app-id="wxf11c5910cb729a82"<br><span style="margin-left: 10px;"></span>'
      + 'shop-id="{{ 45694034 }}"<br><span style="margin-left: 10px;"></span>'
      + 'layout="{{ 0 }}"<br>/&gt;',
    extraData: {
      config: {
        scene: {
          default: {
            showReturn: true
          },
          // 用户支付成功后的返回按钮配置
          afterPay: {
            // 是否展示返回按钮
            showReturn: true,
            // 是否替换订单详情按钮为返回按钮
            replaceOrderDetailBtnWithReturnBtn: true
          }
        }
      }
    },
    goodsFrom: 0,
    goodsGroupId: 104842601,
    goodsIds: '432079102,424875465,351247703'
  },

  onLoad: function() {
  },

  handleBuy(detail) {
    console.log(detail, 'buy')
  },

  handleItemClick() {
    console.log('click');
  },

  handleTap() {
    this.setData({
      goodsIds: '432079102,424875465,448091342'
    });
  }
});
