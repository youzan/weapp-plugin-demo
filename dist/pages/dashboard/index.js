/******/ (function(modules) { // webpackBootstrap
/******/ 	// 使用缓存中加载过的模块作为默认加载过的模块，否则公共模块会被调用多次
/******/ 	var installedModules = wx.__installedModules = wx.__installedModules || {}
/******/ 	// 当前模块依赖的模块
/******/
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = wx.__installedModules[moduleId] = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/dashboard/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/pages/dashboard/config.js":
/*!***************************************!*\
  !*** ./src/pages/dashboard/config.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  dashboard: {
    title: '有赞微商城插件示例',
    content: [{
      name: 'Goods 商品',
      path: '/pages/dashboard/index?type=goods'
    }, {
      name: 'Groupon 拼团',
      path: '/pages/dashboard/index?type=groupon'
    }, {
      name: 'Seckill 秒杀',
      path: '/pages/dashboard/index?type=seckill'
    }, {
      name: 'LimitDiscount 限时折扣',
      path: '/pages/dashboard/index?type=limitdiscount'
    }, {
      name: 'Goods 商品页',
      path: 'plugin://yzTradePlugin/goods-detail?goodsId=2fp4pt2vockaq&openId=oDpvq0N1rr0NjE9FmeFXFDWEH9zs&shopId=45694034&appId=wxf11c5910cb729a82'
    }, {
      name: 'OrderList 订单列表页',
      path: 'plugin://yzTradePlugin/order-list?type=all&openId=oDpvq0N1rr0NjE9FmeFXFDWEH9zs&shopId=45694034&appId=wxf11c5910cb729a82'
    }, {
      name: 'ZanAccount 绑定手机号',
      path: '/pages/zan-account/index'
    }, {
      name: 'Coupon 优惠券',
      path: '/pages/coupon/index'
    }, {
      name: 'AddCart 加入购物车',
      path: '/pages/addcart/index'
    }, {
      name: 'Cart 购物车',
      path: '/pages/cart/index?openId=oDpvq0N1rr0NjE9FmeFXFDWEH9zs&shopId=45694034&appId=wxf11c5910cb729a82'
    }]
  },
  groupon: {
    title: '有赞微商城拼团插件',
    content: [{
      name: '大图样式',
      path: '/pages/groupon/big/index'
    }, {
      name: '小图样式',
      path: '/pages/groupon/small/index'
    }, {
      name: '列表样式',
      path: '/pages/groupon/list/index'
    }]
  },
  goods: {
    title: '有赞微商城商品插件',
    content: [{
      name: '大图样式',
      path: '/pages/goods/big/index'
    }, {
      name: '小图样式',
      path: '/pages/goods/small/index'
    }, {
      name: '一大两小样式',
      path: '/pages/goods/big1small2/index'
    }, {
      name: '列表样式',
      path: '/pages/goods/list/index'
    }, {
      name: '一行三个样式',
      path: '/pages/goods/three/index'
    }, {
      name: '横向滑动样式',
      path: '/pages/goods/three-swipe/index'
    }, {
      name: '加入购物车',
      path: '/pages/goods/add-cart/index'
    }]
  },
  seckill: {
    title: '有赞微商城秒杀',
    content: [{
      name: '大图样式',
      path: '/pages/seckill/big/index'
    }, {
      name: '小图样式',
      path: '/pages/seckill/small/index'
    }, {
      name: '一大两小样式',
      path: '/pages/seckill/hybrid/index'
    }, {
      name: '列表样式',
      path: '/pages/seckill/list/index'
    }]
  },
  limitdiscount: {
    title: '有赞微商城限时折扣',
    content: [{
      name: '大图样式',
      path: '/pages/limitdiscount/big/index'
    }, {
      name: '小图样式',
      path: '/pages/limitdiscount/small/index'
    }, {
      name: '一大两小样式',
      path: '/pages/limitdiscount/hybrid/index'
    }, {
      name: '列表样式',
      path: '/pages/limitdiscount/list/index'
    }]
  }
});

/***/ }),

/***/ "./src/pages/dashboard/index.js":
/*!**************************************!*\
  !*** ./src/pages/dashboard/index.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./src/pages/dashboard/config.js");


Page({
  data: {
    config: _config__WEBPACK_IMPORTED_MODULE_0__["default"],
    curConfig: {}
  },

  onLoad: function onLoad(options) {
    var type = options.type || 'dashboard';
    this.setData({
      curConfig: this.data.config[type]
    });
  },

  onShareAppMessage: function onShareAppMessage() {
    return {
      title: '有赞微商城插件示例',
      path: 'pages/dashboard/index'
    };
  }
});

/***/ })

/******/ });