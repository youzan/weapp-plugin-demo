## weapp-plugin-demo

有赞微商城所有小程序插件的演示demo

![Demo 演示](https://img.yzcdn.cn/upload_files/2018/07/26/FtcFpmMGvjMLQAIdURcyeYMnx6Mt.jpg?imageView2/2/w/300/h/300)

## 如何在本地预览demo

1. 在根目录下运行

```shell
npm install
npm run dev
```

2. 打开`微信开发者工具`，'本地小程序项目 - 添加项目'，把 `dist` 目录添加进去就可以预览示例demo了。

## 目前已经上线的小程序插件：
* 有赞微商城商品卡片插件：https://mp.weixin.qq.com/wxopen/plugindevdoc?appid=wxbcdf0f04295ab25e&token=1138285996&lang=zh_CN
* 有赞微商城拼团插件：https://mp.weixin.qq.com/wxopen/plugindevdoc?appid=wx7264e79652f66bc9&token=1846183980&lang=zh_CN
* 有赞微商城核心交易插件：https://mp.weixin.qq.com/wxopen/plugindevdoc?appid=wxef2db03c377b0016&token=1803181793&lang=zh_CN
* 有赞微商城购物车插件：https://mp.weixin.qq.com/wxopen/plugindevdoc?appid=wx10ed5d6fd4792bfe&token=765725808&lang=zh_CN

## 如何在分包里使用插件

因为插件会占用主包的体积，所以建议将插件放在分包里。不过在分包里使用插件时有以下限制：

- 仅能在这个分包内使用该插件；
- 同一个插件不能被多个分包同时引用；
- 目前，还不能从分包外的页面直接跳入分包内的插件页面，需要先跳入分包内的非插件页面、再跳入同一分包内的插件页面。

我们的示例代码里将四个插件放在了三个分包内：商品插件+拼团插件、购物车插件和核心交易插件。

```json
{
  "subPackages": [
    {
      "root": "packages/trade",
      "name": "核心交易",
      "pages": [
        "index",
        "zan-account/index",
        "coupon/index"
      ],
      "plugins": {
        "yzTradePlugin": {
          "version": "0.7.0",
          "provider": "wxef2db03c377b0016"
        }
      }
    },
    {
      "root": "packages/cart",
      "name": "购物车",
      "pages": [
        "cart/index"
      ],
      "plugins": {
        "yzCartPlugin": {
          "version": "1.0.0",
          "provider": "wx10ed5d6fd4792bfe"
        }
      }
    },
    {
      "root": "packages/goods",
      "name": "商品",
      "pages": [
        "addcart/index",
        "goods/big/index",
        "groupon/big/index",
        "seckill/big/index",
        "limitdiscount/big/index"
      ],
      "plugins": {
        "yzGrouponPlugin": {
          "version": "0.4.5",
          "provider": "wx7264e79652f66bc9"
        },
        "yzGoodsPlugin": {
          "version": "0.6.5",
          "provider": "wxbcdf0f04295ab25e"
        }
      }
    }
  ]
}
```

上面这种情况，因为插件的限制，如果我们想从商品跳转到商品详情时，就必须先跳转到`packages/trade/index`这个中转页面，中转页面再跳转到核心交易插件的商品详情页。

```js
Page({
  onLoad(options) {
    wx.redirectTo({
      url: `plugin://yzTradePlugin/goods-detail?goodsId=${options.alias}&openId=oDpvq0N1rr0NjE9FmeFXFDWEH9zs&shopId=45694034&appId=wxf11c5910cb729a82`
    });
  }
});
```

## 如果你的小程序有流量，希望变现但又不想自己开店

看这里：https://bbs.youzan.com/thread-671720-1-1.html

## 推荐
开发小程序推荐使用有赞前端团队出品的业内star最多的小程序组件库： https://github.com/youzan/zanui-weapp

## 如何获取店铺编号

![如何获取店铺编号](https://img.yzcdn.cn/upload_files/2018/08/07/FpYZz_s0JjrzyI8bQ-CA1QDz4gc5.png)
