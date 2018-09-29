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
/******/ 	return __webpack_require__(__webpack_require__.s = "./node_modules/zanui-weapp/dist/cell-group/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/zanui-weapp/dist/cell-group/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/zanui-weapp/dist/cell-group/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _relations;

var CELL_PATH = '../cell/index';
var FIELD_PATH = '../field/index';

Component({
  properties: {
    titleWidth: {
      type: Number,
      value: null
    }
  },
  relations: (_relations = {}, _relations[CELL_PATH] = {
    type: 'child',
    linked: function linked() {
      this._updateIsLastElement(CELL_PATH);
    },
    linkChanged: function linkChanged() {
      this._updateIsLastElement(CELL_PATH);
    },
    unlinked: function unlinked() {
      this._updateIsLastElement(CELL_PATH);
    }
  }, _relations[FIELD_PATH] = {
    type: 'child',
    linked: function linked() {
      this._updateIsLastElement(FIELD_PATH);
    },
    linkChanged: function linkChanged() {
      this._updateIsLastElement(FIELD_PATH);
    },
    unlinked: function unlinked() {
      this._updateIsLastElement(FIELD_PATH);
    }
  }, _relations),

  data: {
    elementUpdateTimeout: 0
  },

  methods: {
    _updateIsLastElement: function _updateIsLastElement(childPath) {
      var _this = this;

      // 用 setTimeout 减少计算次数
      if (this.data.elementUpdateTimeout > 0) {
        return;
      }

      var elementUpdateTimeout = setTimeout(function () {
        _this.setData({ elementUpdateTimeout: 0 });
        var elements = _this.getRelationNodes(childPath);
        var titleWidth = _this.properties.titleWidth;


        if (elements.length > 0) {
          var lastIndex = elements.length - 1;

          elements.forEach(function (cell, index) {
            titleWidth && cell.setTitleWidth(titleWidth);
            cell.updateIsLastElement(index === lastIndex);
          });
        }
      });

      this.setData({ elementUpdateTimeout: elementUpdateTimeout });
    }
  }
});

/***/ })

/******/ });