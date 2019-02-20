import args from '../../utils/args';
import entryData from '../../utils/mock';

Page({
  onLoad(options) {
    const { pageType } = options;
    let url;

    switch (pageType) {
      case 'goods-detail':
        url = `goods-detail?goodsId=${options.alias}`;
        break;
      case 'order':
        url = `order-list?type=${options.type}`;
        break;
      case 'order-detail':
        url = `detail?orderNo=${options.orderNo}`;
      case 'buy':
        url = `buy?bookKey=${options.bookKey}`;
        break;
    }

    wx.redirectTo({
      url: args.add(`plugin://yzTradePlugin/${url}`, entryData)
    });
  }
});
