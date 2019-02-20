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
        path: '/packages/trade/index?alias=2fp4pt2vockaq&pageType=goods-detail'
      },
      {
        name: 'OrderList 订单列表页',
        path: '/packages/trade/index?type=all&pageType=order'
      },
      {
        name: 'OrderDetail 订单详情页',
        path: '/packages/trade/index?orderNo=E20180813171933000100008&pageType=order-detail'
      },
      {
        name: 'ZanAccount 绑定手机号',
        path: '/packages/trade/zan-account/index'
      },
      {
        name: 'Coupon 优惠券',
        path: '/packages/trade/coupon/index'
      },
      {
        name: 'AddCart 加入购物车',
        path: '/packages/goods/addcart/index'
      },
      {
        name: 'Cart 购物车',
        path: '/packages/cart/cart/index'
      }
    ]
  },
  groupon: {
    title: '有赞微商城拼团插件',
    content: [
      {
        name: '大图样式',
        path: '/packages/goods/groupon/big/index'
      },
      {
        name: '小图样式',
        path: '/packages/goods/groupon/small/index'
      },
      {
        name: '列表样式',
        path: '/packages/goods/groupon/list/index'
      }
    ]
  },
  goods: {
    title: '有赞微商城商品插件',
    content: [
      {
        name: '大图样式',
        path: '/packages/goods/goods/big/index'
      },
      {
        name: '小图样式',
        path: '/packages/goods/goods/small/index'
      },
      {
        name: '一大两小样式',
        path: '/packages/goods/goods/big1small2/index'
      },
      {
        name: '列表样式',
        path: '/packages/goods/goods/list/index'
      },
      {
        name: '一行三个样式',
        path: '/packages/goods/goods/three/index'
      },
      {
        name: '横向滑动样式',
        path: '/packages/goods/goods/three-swipe/index'
      },
      {
        name: '加入购物车',
        path: '/packages/goods/goods/add-cart/index'
      }
    ]
  },
  seckill: {
    title: '有赞微商城秒杀',
    content: [
      {
        name: '大图样式',
        path: '/packages/goods/seckill/big/index'
      },
      {
        name: '小图样式',
        path: '/packages/goods/seckill/small/index'
      },
      {
        name: '一大两小样式',
        path: '/packages/goods/seckill/hybrid/index'
      },
      {
        name: '列表样式',
        path: '/packages/goods/seckill/list/index'
      }
    ]
  },
  limitdiscount: {
    title: '有赞微商城限时折扣',
    content: [
      {
        name: '大图样式',
        path: '/packages/goods/limitdiscount/big/index'
      },
      {
        name: '小图样式',
        path: '/packages/goods/limitdiscount/small/index'
      },
      {
        name: '一大两小样式',
        path: '/packages/goods/limitdiscount/hybrid/index'
      },
      {
        name: '列表样式',
        path: '/packages/goods/limitdiscount/list/index'
      }
    ]
  }
};
