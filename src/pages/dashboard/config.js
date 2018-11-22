export default {
  dashboard: {
    title: '有赞微商城插件示例',
    content: [
      {
        name: 'Goods 商品',
        path: '/pages/dashboard/index?type=goods'
      },
      {
        name: 'Groupon 拼团',
        path: '/pages/dashboard/index?type=groupon'
      },
      {
        name: 'Seckill 秒杀',
        path: '/pages/dashboard/index?type=seckill'
      },
      {
        name: 'LimitDiscount 限时折扣',
        path: '/pages/dashboard/index?type=limitdiscount'
      },
      {
        name: 'Goods 商品页',
        path: 'plugin://yzTradePlugin/goods-detail?goodsId=2fp4pt2vockaq&openId=oDpvq0N1rr0NjE9FmeFXFDWEH9zs&shopId=45694034&appId=wxf11c5910cb729a82'
      },
      {
        name: 'OrderList 订单列表页',
        path: 'plugin://yzTradePlugin/order-list?type=all&openId=oDpvq0N1rr0NjE9FmeFXFDWEH9zs&shopId=45694034&appId=wxf11c5910cb729a82'
      }
    ]
  },
  groupon: {
    title: '有赞微商城拼团插件',
    content: [
      {
        name: '大图样式',
        path: '/pages/groupon/big/index'
      },
      {
        name: '小图样式',
        path: '/pages/groupon/small/index'
      },
      {
        name: '列表样式',
        path: '/pages/groupon/list/index'
      }
    ]
  },
  goods: {
    title: '有赞微商城商品插件',
    content: [
      {
        name: '大图样式',
        path: '/pages/goods/big/index'
      },
      {
        name: '小图样式',
        path: '/pages/goods/small/index'
      },
      {
        name: '一大两小样式',
        path: '/pages/goods/big1small2/index'
      },
      {
        name: '列表样式',
        path: '/pages/goods/list/index'
      },
      {
        name: '一行三个样式',
        path: '/pages/goods/three/index'
      },
      {
        name: '横向滑动样式',
        path: '/pages/goods/three-swipe/index'
      }
    ]
  },
  seckill: {
    title: '有赞微商城秒杀',
    content: [
      {
        name: '大图样式',
        path: '/pages/seckill/big/index'
      },
      {
        name: '小图样式',
        path: '/pages/seckill/small/index'
      },
      {
        name: '一大两小样式',
        path: '/pages/seckill/hybrid/index'
      },
      {
        name: '列表样式',
        path: '/pages/seckill/list/index'
      }
    ]
  },
  limitdiscount: {
    title: '有赞微商城限时折扣',
    content: [
      {
        name: '大图样式',
        path: '/pages/limitdiscount/big/index'
      },
      {
        name: '小图样式',
        path: '/pages/limitdiscount/small/index'
      },
      {
        name: '一大两小样式',
        path: '/pages/limitdiscount/hybrid/index'
      },
      {
        name: '列表样式',
        path: '/pages/limitdiscount/list/index'
      }
    ]
  }
};
