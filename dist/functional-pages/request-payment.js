exports.beforeRequestPayment = function(paymentArgs, callback) {
  console.log(paymentArgs);

  callback(null, {
    // 这里的参数与 wx.requestPayment 相同，除了 success/fail/complete 不被支持
    timeStamp: paymentArgs.timeStamp,
    nonceStr: paymentArgs.nonceStr,
    package: paymentArgs.package,
    signType: paymentArgs.signType,
    paySign: paymentArgs.paySign
  });
};
