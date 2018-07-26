# 有赞微商城商品卡片插件

## 术语约定
`第三方小程序`：使用本插件的小程序   
`有赞店铺`：开发者/商家 在有赞开通的微商城店铺
`有赞小程序`：开发者/商家 在有赞开通的微商城店铺的小程序   
`返回按钮`：当第三方小程序跳转到有赞小程序，有赞小程序的页面左下角会默认展示一个按钮，点击按钮跳回第三方小程序

## 简介

**有赞微商城商品卡片插件** 提供一个商品卡片展示组件，动态展示有赞店铺中的商品。开发者可以将商品列表嵌入到第三方小程序的页面里。根据不同的配置，用户点击卡片打开对应的有赞小程序完成购买，也可以不跳转，直接在第三方小程序里走完购买流程。

## 使用

### 引入插件代码包

```json
{
  "plugins": {
    "youzanPlugin": {
      "version": "0.1.0",
      "provider": "wxbcdf0f04295ab25e"
    }
  }
}
```

### 使用插件

要使用商品组件，必须传入一个`alias`参数。

```html
<goods 
  goods-group-alias="s4ftrie81" 
  layout="1" 
  size-type="0" 
/>
```

```json
// index.json
{
  "usingComponents": {
    "groupon": "plugin://youzanPlugin/goods"
  }
}
```

### Demo 源码
https://github.com/youzan/weapp-plugin-demo

## API

| 参数       | 说明      | 类型       | 默认值       | 必须      |
|-----------|-----------|-----------|-------------|-------------|
| appId | 第三方小程序的appId |  String |  | 是 |
| openId | 用户在第三方小程序里的 openId，需要保持唯一，便于插件区分不同用户。理论上这个值只要确保每个用户都对应一个唯一 id 即可，强烈推荐使用第三方小程序的 openId。开发者可以凭 appId 和 openId 通过有赞开发平台的 API 查询相应的订单信息   |  String |  | 是 |
| kdtId | 有赞微商城店铺 id |  Number |  | 是 |
| goodsGroupAlias | 要展示的商品分组的 alias，目前只支持这种方式来配置需要显示的商品 |  String |  | 是 |
| layout | 商品列表样式( 0：大图 1：小图 2：一大两小 3：详情列表 5：一行三个) |  Number | `0` | 否 |
| sizeType | 商品显示样式(0：卡片模式 1：瀑布流 2：极简样式 3：促销 5：一行三个 6：左右滑动) |  Number | `0` | 否 |
| showTitle |  是否展示商品标题 |  Boolean | `true` | 否 |
| showSubTitle |  是否展示商品副标题 |  Boolean | `true` | 否 |
| showPrice |  是否展示商品价格 |  Boolean | `true` | 否 |
| showBuyButton |  是否展示购买按钮 |  Boolean | `true` | 否 |
| buyButtonType | 购买按钮的样式(1,2,3,4 四种可选) |  Number | `1` | 否 |
| showCornerMark |  是否显示左上角角标 |  Boolean | `false` | 否 |
| cornerMarkType | 角标样式(0,1,2,3 四种可选) |  Number | `0` | 否 |
| cornerMarkImage | 自定义角标图片（36x36） |  String | `` | 否 |
| imageRatio | 图片显示比例(0：`3:2`， 1：`1:1`)。默认为无，显示整个图片 |  Number | - | 否 |
| imageFillStyle | 图片填充方式，1：填充 2：留白 |  Number | `2` | 否 |
| buttonText | 自定义按钮文字 |  String | - | 否 |
| extraData | 可以自定义跳转到有赞小程序后返回按钮的显示方式，比如：默认不显示返回按钮，以提高转化率，用户付款成功后才显示返回按钮，以引导用户回到第三方小程序 |  Object | `{}` | 否 |

。

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
