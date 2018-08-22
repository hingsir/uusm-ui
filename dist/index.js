(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("jQuery"));
	else if(typeof define === 'function' && define.amd)
		define(["jQuery"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("jQuery")) : factory(root["jQuery"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE_jquery__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/Condition/index.js":
/*!*******************************************!*\
  !*** ./src/components/Condition/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function($) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Condition = undefined;\n\nvar _utils = __webpack_require__(/*! ../../utils */ \"./src/utils/index.js\");\n\nvar defaultOptions = {\n  dom: null,\n  items: {},\n  onSelect: function onSelect(value, el) {}\n};\n\nvar tmpl = '\\n<div class=\"multiple-operate\">\\n  <a href=\"javascript:;\" class=\"uusm-ui-button btn-cancel\">\\u53D6\\u6D88</a>\\n  <a href=\"javascript:;\" class=\"uusm-ui-button btn-gray btn-confirm\">\\u63D0\\u4EA4</a>\\n</div>';\n\nvar Condition = function Condition() {\n  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n\n  var self = this;\n  var opt = self.options = $.extend({}, defaultOptions, options);\n\n  this.render();\n\n  this.bindEvent();\n};\n\nCondition.prototype.render = function () {\n  var _options = this.options,\n      dom = _options.dom,\n      defaultValue = _options.defaultValue,\n      items = _options.items;\n\n  var $dom = $(dom);\n};\n\nCondition.prototype.bindEvent = function () {\n  var _options2 = this.options,\n      dom = _options2.dom,\n      eventName = _options2.eventName,\n      onSelect = _options2.onSelect,\n      activeClass = _options2.activeClass;\n\n  var $dom = $(dom);\n\n  $dom.on('click', '.btn-multiple', function (e) {\n    var $self = $(e.currentTarget);\n    var $parent = $self.parents('.condition-item');\n    var $multipleOp = $parent.find('.multiple-operate');\n\n    if (!$multipleOp.length) {\n      $multipleOp = $parent.append(tmpl);\n    }\n    $parent.find('.selected-texts').remove();\n    $parent.find('ul').show();\n    $parent.find('li').each(function (index, item) {\n      var $item = $(item);\n      var $check = $item.find('i');\n      if (!$check.length) {\n        $check = $('<i/>').prependTo($item);\n      }\n      if ($item.hasClass('active')) {\n        $item.attr('data-actived', 1);\n      }\n    });\n    $parent.addClass('expanded');\n  });\n\n  $dom.on('click', '.btn-cancel', function (e) {\n    var $self = $(e.currentTarget);\n    var $parent = $self.parents('.condition-item');\n    $parent.find('li').removeClass('active');\n    $parent.removeClass('expanded');\n    $parent.find('li[data-actived]').addClass('active');\n  });\n\n  $dom.on('click', '.btn-confirm', function (e) {\n    var $self = $(e.currentTarget);\n    if ($self.hasClass('disabled')) {\n      return;\n    }\n    var $parent = $self.parents('.condition-item');\n    $parent.removeClass('expanded');\n    var values = [],\n        texts = [],\n        $selectedList = $parent.find('li.active');\n    $selectedList.each(function (index, item) {\n      var $item = $(item);\n      values.push($item.data('value'));\n      texts.push($item.find('a').text());\n    });\n    var $selectedText = $parent.find('.selected-texts');\n    if ($selectedText.length === 0) {\n      $selectedText = $('<div class=\"selected-texts\"></div>').appendTo($parent.find('dd'));\n    }\n    $selectedText.html(texts.join('、') + '<a href=\"javascript:;\" class=\"btn-clear\">&times;</a>').show();\n    $parent.find('ul').hide();\n    onSelect.call(null, values);\n  });\n\n  $dom.on('click', '.btn-clear', function (e) {\n    var $self = $(e.currentTarget);\n    var $parent = $self.parents('.condition-item');\n    $self.parent().hide();\n    $parent.find('ul').show();\n    $parent.find('li').removeClass('active');\n    // $parent.find('li[data-actived]').addClass('active')\n    onSelect.call(null, []);\n  });\n\n  $dom.on('click', 'li', function (e) {\n    var $self = $(e.currentTarget);\n    var $parent = $self.parents('.condition-item');\n\n    if ($parent.hasClass('expanded')) {\n      $self.toggleClass('active');\n      if ($parent.find('li.active').length === 0) {\n        $parent.find('.btn-confirm').addClass('disabled');\n      } else {\n        $parent.find('.btn-confirm').removeClass('disabled');\n      }\n    } else {\n      if ($self.hasClass('active')) {\n        return;\n      }\n      $self.siblings().removeClass('active').removeAttr('data-actived');\n      $self.addClass('active');\n      onSelect.call(null, [$self.data('value')]);\n    }\n  });\n};\n\n(0, _utils.registerJQueryPlugin)('condition', function (options) {\n  options.dom = this;\n  new Condition(options);\n});\n\nexports.Condition = Condition;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"jquery\")))\n\n//# sourceURL=webpack:///./src/components/Condition/index.js?");

/***/ }),

/***/ "./src/components/Select/index.js":
/*!****************************************!*\
  !*** ./src/components/Select/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function($) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Select = undefined;\n\nvar _utils = __webpack_require__(/*! ../../utils */ \"./src/utils/index.js\");\n\nvar defaultOptions = {\n  dom: null,\n  items: {},\n  activeClass: 'active',\n  defaultValue: null,\n  eventName: 'click', // click | mouseover\n  onSelect: function onSelect(index, el) {}\n};\n\nvar tmpl = '\\n<div class=\"uusm-ui-select\">\\n  <div class=\"uusm-ui-select-text\">{{text}}</div>\\n  <i class=\"uusm-ui-select-icon\"></i>\\n  <ul class=\"uusm-ui-select-list\">\\n    {{itemsHtml}}\\n  </ul>\\n</div>';\n\nvar Select = function Select() {\n  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n\n  var self = this;\n  var opt = self.options = $.extend({}, defaultOptions, options);\n\n  this.render();\n\n  this.bindEvent();\n};\n\nSelect.prototype.render = function () {\n  var _options = this.options,\n      dom = _options.dom,\n      defaultValue = _options.defaultValue,\n      items = _options.items;\n\n  var $dom = $(dom);\n  var text = defaultValue;\n  if (!defaultValue) {\n    for (var key in items) {\n      this.options.defaultValue = key;\n      text = items[key];\n      break;\n    }\n  }\n  var itemsHtml = this.getItemsHtml();\n  $dom.html(tmpl.replace(/\\{\\{(\\w+)?\\}\\}/g, function (_, _1) {\n    return eval(_1);\n  }));\n};\n\nSelect.prototype.bindEvent = function () {\n  var _options2 = this.options,\n      dom = _options2.dom,\n      eventName = _options2.eventName,\n      onSelect = _options2.onSelect,\n      activeClass = _options2.activeClass;\n\n  var $dom = $(dom),\n      $text = $dom.find('.uusm-ui-select-text'),\n      $list = $dom.find('.uusm-ui-select-list'),\n      $icon = $dom.find('.uusm-ui-select-icon');\n  $dom.on(eventName, function (e) {\n    $list.show();\n    $icon.addClass('expanded');\n  }).on('mouseleave', function () {\n    $list.hide();\n    $icon.removeClass('expanded');\n  });\n  $list.on('click', 'li', function (e) {\n    var $self = $(e.currentTarget);\n    var value = $self.data('value');\n    $list.find('li').removeClass(activeClass);\n    $self.addClass(activeClass);\n    $text.html($self.html());\n    $dom.attr('data-value', value);\n    $list.hide();\n    $icon.removeClass('expanded');\n    onSelect.call(null, value, $self);\n  });\n};\n\nSelect.prototype.getItemsHtml = function () {\n  var _options3 = this.options,\n      items = _options3.items,\n      defaultValue = _options3.defaultValue,\n      activeClass = _options3.activeClass;\n\n  var itemsHtml = [];\n  for (var key in items) {\n    var clazz = key == defaultValue ? activeClass : '';\n    itemsHtml.push('<li data-value=\"' + key + '\" class=\"' + clazz + '\">' + items[key] + '</li>');\n  }\n  return itemsHtml.join('');\n};\n\n(0, _utils.registerJQueryPlugin)('select', function (options) {\n  options.dom = this;\n  new Select(options);\n});\n\nexports.Select = Select;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"jquery\")))\n\n//# sourceURL=webpack:///./src/components/Select/index.js?");

/***/ }),

/***/ "./src/components/pagination/index.js":
/*!********************************************!*\
  !*** ./src/components/pagination/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function($) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Pagination = undefined;\n\nvar _utils = __webpack_require__(/*! ../../utils */ \"./src/utils/index.js\");\n\nvar defaultOptions = {\n  dom: null,\n  totalCount: 0,\n  pageSize: 10,\n  pageNum: 1,\n  onSwitch: function onSwitch(pageNum, pageSize, totalCount) {}\n};\nvar tmpl = '<div class=\"uusm-ui-pagination\">\\n  <span class=\"pagination-btns\">\\n    {{pageBtns}}\\n  </span>\\n  <span class=\"pagination-jump\">\\n    <span>\\u8DF3\\u8F6C\\u81F3&nbsp;&nbsp;\\u7B2C</span>\\n    <input type=\"text\" />\\n    <span>\\u9875</span>\\n    <a href=\"javascript:;\">\\u786E\\u5B9A</a>\\n  </span>\\n</div>';\nvar Pagination = function Pagination() {\n  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n\n  var self = this;\n  var opt = self.options = $.extend({}, defaultOptions, options);\n  var $dom = $(this.options.dom);\n\n  this.render(true);\n\n  $dom.off('click', '.pagination-btns a').on('click', '.pagination-btns a', function (e) {\n    var $self = $(e.currentTarget);\n    self.switchTo($self.data('action'));\n  });\n\n  $dom.off('click', '.pagination-jump a').on('click', '.pagination-jump a', function (e) {\n    var pageIndex = parseInt($dom.find('.pagination-jump input').val());\n    self.switchTo(pageIndex);\n  });\n\n  $dom.off('keypress', '.pagination-jump input').on('keypress', '.pagination-jump input', function (e) {\n    if (e.keyCode == 13) {\n      self.switchTo(parseInt($(this).val()));\n    }\n  });\n};\n\nPagination.prototype.render = function (isFirst) {\n  var _options = this.options,\n      dom = _options.dom,\n      totalCount = _options.totalCount,\n      pageSize = _options.pageSize,\n      pageNum = _options.pageNum,\n      onSwitch = _options.onSwitch;\n\n  var totalPage = this.options.totalPage = Math.ceil(totalCount / pageSize);\n  var $dom = $(dom);\n  var pageBtns = this.getPageBtns();\n  $dom.html(tmpl.replace(/\\{\\{(\\w+)?\\}\\}/g, function (_, _1) {\n    return eval(_1);\n  }));\n  !isFirst && onSwitch.call(null, pageNum, pageSize, totalCount);\n};\n\nPagination.prototype.getPageBtns = function () {\n  var _options2 = this.options,\n      totalCount = _options2.totalCount,\n      pageSize = _options2.pageSize,\n      pageNum = _options2.pageNum;\n\n  var totalPage = this.options.totalPage = Math.ceil(totalCount / pageSize);\n  var groupCount = 5,\n      half = Math.floor(groupCount / 2),\n      start = 1,\n      end = 1,\n      startEllipsis = false,\n      endEllipsis = false;\n  var arr = [];\n  if (totalPage <= groupCount + 1) {\n    start = 1;\n    end = totalPage;\n    for (var i = start; i <= end; i++) {\n      arr.push(i);\n    }\n  } else {\n    start = pageNum - half;\n    end = pageNum + half;\n    if (start <= 0) {\n      start = 1;\n    }\n    if (end >= totalPage) {\n      end = totalPage;\n    }\n    if (end < groupCount) {\n      end = groupCount;\n    }\n    if (totalPage - pageNum <= half + 1) {\n      start = totalPage - groupCount + 1;\n    }\n    if (start >= 2) {\n      startEllipsis = true;\n    }\n    if (end < totalPage - 1) {\n      endEllipsis = true;\n    }\n    for (var _i = start; _i <= end; _i++) {\n      arr.push(_i);\n    }\n    if (startEllipsis) {\n      arr.unshift(1, '...');\n    }\n    if (endEllipsis) {\n      arr.push('...', totalPage);\n    }\n    if (end == totalPage - 1) {\n      arr.push(totalPage);\n    }\n  }\n\n  var htmlArr = ['<a href=\"javascript:;\" class=\"' + (pageNum == 1 ? 'disabled' : '') + '\" data-action=\"prev\">\\u4E0A\\u4E00\\u9875</a>'];\n  for (var _i2 = 0; _i2 < arr.length; _i2++) {\n    if (isNaN(arr[_i2])) {\n      htmlArr.push('<span>...</span>');\n    } else {\n      var className = pageNum === arr[_i2] ? 'active' : '';\n      htmlArr.push('<a href=\"javascript:;\" class=\"' + className + '\" data-action=\"' + arr[_i2] + '\">' + arr[_i2] + '</a>');\n    }\n  }\n  htmlArr.push('<a href=\"javascript:;\" class=\"' + (pageNum == totalPage ? 'disabled' : '') + '\" data-action=\"next\">\\u4E0B\\u4E00\\u9875</a>');\n  return htmlArr.join('');\n};\n\nPagination.prototype.switchTo = function (pageIndex) {\n  var _options3 = this.options,\n      totalCount = _options3.totalCount,\n      totalPage = _options3.totalPage,\n      pageNum = _options3.pageNum;\n\n  if (pageIndex == pageNum) return;\n  if (isNaN(pageIndex)) {\n    switch (pageIndex) {\n      case 'prev':\n        pageIndex = pageNum - 1;\n        break;\n      case 'next':\n        pageIndex = pageNum + 1;\n        break;\n      default:\n        pageIndex = 1;\n    }\n    this.switchTo(pageIndex);\n  } else {\n    if (pageIndex < 1 || pageIndex > totalPage) {\n      return;\n    }\n    this.options.pageNum = pageIndex;\n    this.render(false);\n  }\n};\n\n(0, _utils.registerJQueryPlugin)('pagination', function (options) {\n  options.dom = this;\n  new Pagination(options);\n});\n\nexports.Pagination = Pagination;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"jquery\")))\n\n//# sourceURL=webpack:///./src/components/pagination/index.js?");

/***/ }),

/***/ "./src/components/tabs/index.js":
/*!**************************************!*\
  !*** ./src/components/tabs/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function($) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Tabs = undefined;\n\nvar _utils = __webpack_require__(/*! ../../utils */ \"./src/utils/index.js\");\n\nvar defaultOptions = {\n  dom: null,\n  selector: '> *',\n  activeClass: 'active',\n  activeIndex: 0,\n  eventName: 'click', // click | mouseover\n  target: function target() {\n    return $($(this).data('target'));\n  },\n  onSwitch: function onSwitch(index, el) {}\n};\n\nvar Tabs = function Tabs() {\n  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n\n  var self = this;\n  var opt = self.options = $.extend({}, defaultOptions, options);\n  var dom = opt.dom,\n      selector = opt.selector,\n      activeIndex = opt.activeIndex,\n      eventName = opt.eventName;\n\n\n  self.switchTo(activeIndex);\n\n  $(dom).on(eventName, selector, function (e) {\n    var $self = $(e.currentTarget);\n    self.switchTo($self.index());\n  });\n};\n\nTabs.prototype.switchTo = function (index) {\n  var _options = this.options,\n      dom = _options.dom,\n      selector = _options.selector,\n      activeClass = _options.activeClass,\n      activeIndex = _options.activeIndex,\n      target = _options.target,\n      onSwitch = _options.onSwitch;\n\n  var $dom = $(dom),\n      $tabItems = $dom.find(selector);\n  var $self = $tabItems.eq(index);\n\n  $tabItems.removeClass(activeClass);\n  $self.addClass(activeClass);\n\n  $tabItems.each(function (index, item) {\n    target.call(item).hide();\n  });\n  target.call($self).show();\n\n  onSwitch.call(null, index, $self);\n};\n\n(0, _utils.registerJQueryPlugin)('tabs', function (options) {\n  options.dom = this;\n  new Tabs(options);\n});\n\nexports.Tabs = Tabs;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"jquery\")))\n\n//# sourceURL=webpack:///./src/components/tabs/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Pagination = exports.Condition = exports.Select = exports.Tabs = undefined;\n\nvar _tabs = __webpack_require__(/*! ./components/tabs */ \"./src/components/tabs/index.js\");\n\nvar _Select = __webpack_require__(/*! ./components/Select */ \"./src/components/Select/index.js\");\n\nvar _Condition = __webpack_require__(/*! ./components/Condition */ \"./src/components/Condition/index.js\");\n\nvar _pagination = __webpack_require__(/*! ./components/pagination */ \"./src/components/pagination/index.js\");\n\nexports.Tabs = _tabs.Tabs;\nexports.Select = _Select.Select;\nexports.Condition = _Condition.Condition;\nexports.Pagination = _pagination.Pagination;\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function($) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.registerJQueryPlugin = registerJQueryPlugin;\nfunction registerJQueryPlugin(name, func) {\n  $.fn[name] = function () {\n    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n\n    return this.each(function () {\n      func.call(this, options);\n    });\n  };\n}\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"jquery\")))\n\n//# sourceURL=webpack:///./src/utils/index.js?");

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_jquery__;\n\n//# sourceURL=webpack:///external_%22jQuery%22?");

/***/ })

/******/ });
});