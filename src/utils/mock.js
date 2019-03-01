/**
 * mock 的用户信息
 */

const accountInfo = wx.getAccountInfoSync && wx.getAccountInfoSync();
const appId = accountInfo && accountInfo.miniProgram.appId ? accountInfo.miniProgram.appId : 'wxf11c5910cb729a82';

export default {
  openId: 'oDpvq0N1rr0NjE9FmeFXFDWEH9zs',
  shopId: 45694034,
  appId
};
