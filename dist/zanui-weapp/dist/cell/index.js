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
/******/ 	return __webpack_require__(__webpack_require__.s = "./node_modules/zanui-weapp/dist/cell/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/zanui-weapp/dist/cell/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/zanui-weapp/dist/cell/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var warn = function warn(msg, getValue) {
  console.warn(msg);
};

Component({
  externalClasses: ['cell-class', 'title-class'],
  options: {
    multipleSlots: true
  },
  relations: {
    '../cell-group/index': {
      type: 'parent'
    }
  },
  properties: {
    title: {
      type: String,
      description: '左侧标题'
    },
    label: {
      type: String,
      description: '标题下方的描述信息'
    },
    value: {
      type: String,
      description: '右侧内容'
    },
    onlyTapFooter: {
      type: Boolean,
      description: '只有点击 footer 区域才触发 tab 事件'
    },
    isLink: {
      type: null,
      value: '',
      description: '是否展示右侧箭头并开启尝试以 url 跳转'
    },
    linkType: {
      type: String,
      value: 'navigateTo',
      description: '链接类型，可选值为 navigateTo，redirectTo，switchTab，reLaunch'
    },
    url: {
      type: String,
      value: ''
    },
    noBorder: Boolean
  },
  data: {
    isLastCell: true,
    titleWidth: 'auto'
  },
  methods: {
    footerTap: function footerTap() {
      // 如果并没有设置只点击 footer 生效，那就不需要额外处理。cell 上有事件会自动处理
      if (!this.data.onlyTapFooter) {
        return;
      }

      this.triggerEvent('tap', {});
      doNavigate.call(this);
    },
    cellTap: function cellTap() {
      // 如果只点击 footer 生效，那就不需要在 cell 根节点上处理
      if (this.data.onlyTapFooter) {
        return;
      }

      this.triggerEvent('tap', {});
      doNavigate.call(this);
    },


    // 用于被 cell-group 更新，标志是否是最后一个 cell
    updateIsLastElement: function updateIsLastElement(isLastCell) {
      this.setData({ isLastCell: isLastCell });
    },


    // 设置统一的title区域宽度
    setTitleWidth: function setTitleWidth(titleWidth) {
      this.setData({
        titleWidth: titleWidth + 'px'
      });
    }
  }
});

// 处理跳转
function doNavigate() {
  var _data$url = this.data.url,
      url = _data$url === undefined ? '' : _data$url;

  var type = typeof this.data.isLink;

  if (!this.data.isLink || !url || url === 'true' || url === 'false') return;

  if (type !== 'boolean' && type !== 'string') {
    warn('isLink 属性值必须是一个字符串或布尔值', this.data.isLink);
    return;
  }

  if (['navigateTo', 'redirectTo', 'switchTab', 'reLaunch'].indexOf(this.data.linkType) === -1) {
    warn('linkType 属性可选值为 navigateTo，redirectTo，switchTab，reLaunch', this.data.linkType);
    return;
  }
  wx[this.data.linkType].call(wx, { url: url });
}

/***/ })

/******/ });