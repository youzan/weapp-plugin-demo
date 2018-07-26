# 有赞微商城拼团

## 术语约定
`第三方小程序`：使用本插件的小程序   
`有赞店铺`：开发者/商家 在有赞开通的微商城店铺   
`有赞小程序`：开发者/商家 在有赞开通的小程序店铺   
`返回按钮`：当第三方小程序跳转到有赞小程序，有赞小程序的页面左下角会默认展示一个按钮，点击按钮跳回第三方小程序

## 简介

**有赞微商城拼团插件** 提供一个拼团商品卡片展示组件，动态展示有赞店铺中的拼团商品。开发者可以将单个拼团商品卡片或拼团商品列表嵌入到第三方小程序的页面里。用户点击卡片打开对应的有赞小程序完成拼团购买。

## 使用

### 引入插件代码包

```json
{
  "plugins": {
    "youzanPlugin": {
      "version": "0.1.0",
      "provider": "wx7264e79652f66bc9"
    }
  }
}
```
### 使用插件

```html
<groupon
  app-id="wxasdasda123123"
  kdt-id="1"
  size="1"
  goods-source="{{ 0 }}"
/>
```

```json
// index.json
{
  "usingComponents": {
    "groupon": "plugin://youzanPlugin/groupon"
  }
}
```
### Demo 源码
https://github.com/youzan/weapp-plugin-demo

## API


| 参数       | 说明      | 类型       | 默认值       | 必须      |
|-----------|-----------|-----------|-------------|-------------|
| appId | 第三方小程序的appId |  String |  | 是  |
| openId | 用户在第三方小程序里的 openId，需要保持唯一，便于插件区分不同用户。理论上这个值只要确保每个用户都对应一个唯一 id 即可，强烈推荐使用第三方小程序的 openId。开发者可以凭 appId 和 openId 通过有赞开发平台的 API 查询相应的订单信息 |  String |  | 是 |
| kdtId | 有赞微商城店铺 id |  Number |  | 是 |
| goodsSource | 拼团数据来源，0：自动，1：手动 |  Number | `0` | 否 |
| orderRule | 拼团商品排序方式，0：销量越高越靠前，1：浏览次数越多越靠前（热度），2：开始时间越晚越靠前，3：结束时间越早越靠前 |  Number | `0` | 否 |
| activityIds | 拼团活动 id，id 之间逗号分隔，仅当 `goodsSource` 为1（手动获取）时才有效 |  String | `''` | 否 |
| goodsNum | 展示的商品数量（最多30） |  Number | `20` | 否 |
| imageFillStyle | 图片填充方式，1：填充 2：留白 |  Number | `2` | 否 |
| size | 拼团商品卡片样式，0：大图，1：小图，2：列表 |  Number | `0` | 否 |
| extraData | 可以自定义跳转到有赞小程序后返回按钮的显示方式，比如：默认不显示返回按钮，以提高转化率，用户付款成功后才显示返回按钮，以引导用户回到第三方小程序 |  Object | `{}` | 否 |

## 数据格式

### extraData

```js
{
  config: {
    // 以下配置项，如果使用默认值，推荐不传
    scene: {
      // 当第三方小程序跳转到有赞小程序，是否默认显示返回按钮，默认值：true
      default: {
        showReturn: false
      }
      // 用户支付成功后的返回按钮配置
      afterPay: {
        // 是否展示返回按钮，默认值：true
        showReturn: false,
        // 是否替换订单详情按钮为返回按钮，默认值：false
        replaceOrderDetailBtnWithReturnBtn: false
      }
    }
  }
}
```

## 注意事项
1. 请确保使用和其他三方小程序不同的openId，否则将无法区分订单。
2. 未开始的拼团活动不会显示出来

