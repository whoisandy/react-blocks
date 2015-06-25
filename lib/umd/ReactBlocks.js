(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["ReactBlocks"] = factory(require("react"));
	else
		root["ReactBlocks"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _layout = __webpack_require__(2);

	var _layout2 = _interopRequireDefault(_layout);

	var Block = (function (_React$Component) {
	  function Block(props) {
	    _classCallCheck(this, Block);

	    _get(Object.getPrototypeOf(Block.prototype), 'constructor', this).call(this, props);
	    this.rules = props.style || {};
	  }

	  _inherits(Block, _React$Component);

	  _createClass(Block, [{
	    key: '_buildGeneral',
	    value: function _buildGeneral() {
	      if (this.props.block) {
	        this.rules = _layout2['default'].extend(this.rules, _layout2['default'].block);
	      }
	      if (this.props.hidden) {
	        this.rules = _layout2['default'].extend(this.rules, _layout2['default'].hidden);
	      }
	      if (this.props.invisible) {
	        this.rules = _layout2['default'].extend(this.rules, _layout2['default'].invisible);
	      }
	      return this;
	    }
	  }, {
	    key: '_buildPosition',
	    value: function _buildPosition() {
	      if (this.props.relative) {
	        this.rules = _layout2['default'].extend(this.rules, _layout2['default'].relative);
	      }
	      if (this.props.absolute) {
	        this.rules = _layout2['default'].extend(this.rules, _layout2['default'].absolute);
	      }
	      return this;
	    }
	  }, {
	    key: '_buildLayout',
	    value: function _buildLayout() {
	      if (this.props.layout) {
	        this.rules = _layout2['default'].extend(this.rules, _layout2['default'].layout, _layout2['default'].vertical);
	      }
	      if (this.props.inline) {
	        this.rules = _layout2['default'].extend(this.rules, _layout2['default'].inline, _layout2['default'].horizontal);
	      }
	      if (this.props.centered) {
	        this.rules = _layout2['default'].extend(this.rules, _layout2['default'].centered);
	      }
	      return this;
	    }
	  }, {
	    key: '_buildFlex',
	    value: function _buildFlex() {
	      if (this.props.flex) {
	        this.rules = _layout2['default'].extend(this.rules, _layout2['default'].flexAuto);
	      } else {
	        this.rules = _layout2['default'].extend(this.rules, _layout2['default'].flexNone);
	      }
	      return this;
	    }
	  }, {
	    key: '_buildDirection',
	    value: function _buildDirection() {
	      if (this.props.vertical) {
	        this.rules = _layout2['default'].extend(this.rules, _layout2['default'].vertical);
	        if (this.props.reverse) {
	          this.rules = _layout2['default'].extend(this.rules, _layout2['default'].verticalReverse);
	        }
	      }
	      if (this.props.horizontal) {
	        this.rules = _layout2['default'].extend(this.rules, _layout2['default'].horizontal);
	        if (this.props.reverse) {
	          this.rules = _layout2['default'].extend(this.rules, _layout2['default'].horizontalReverse);
	        }
	      }
	      return this;
	    }
	  }, {
	    key: '_buildWrap',
	    value: function _buildWrap() {
	      if (this.props.wrap) {
	        this.rules = _layout2['default'].extend(this.rules, _layout2['default'].wrap);
	        if (this.props.reverse) {
	          this.rules = _layout2['default'].extend(this.rules, _layout2['default'].wrapReverse);
	        }
	      }
	      return this;
	    }
	  }, {
	    key: '_buildAlign',
	    value: function _buildAlign() {
	      switch (this.props.align) {
	        case 'start':
	          this.rules = _layout2['default'].extend(this.rules, _layout2['default'].alignStart);
	          break;
	        case 'center':
	          this.rules = _layout2['default'].extend(this.rules, _layout2['default'].alignCenter);
	          break;
	        case 'end':
	          this.rules = _layout2['default'].extend(this.rules, _layout2['default'].alignEnd);
	          break;
	        case 'stretch':
	          this.rules = _layout2['default'].extend(this.rules, _layout2['default'].alignStretch);
	          break;
	        default:
	          break;
	      }

	      switch (this.props.self) {
	        case 'start':
	          this.rules = _layout2['default'].extend(this.rules, _layout2['default'].selfAlignStart);
	          break;
	        case 'center':
	          this.rules = _layout2['default'].extend(this.rules, _layout2['default'].selfAlignCenter);
	          break;
	        case 'end':
	          this.rules = _layout2['default'].extend(this.rules, _layout2['default'].selfAlignEnd);
	          break;
	        case 'stretch':
	          this.rules = _layout2['default'].extend(this.rules, _layout2['default'].selfAlignStretch);
	          break;
	        default:
	          break;
	      }

	      return this;
	    }
	  }, {
	    key: '_buildJustify',
	    value: function _buildJustify() {
	      switch (this.props.justify) {
	        case 'start':
	          this.rules = _layout2['default'].extend(this.rules, _layout2['default'].justifyStart);
	          break;
	        case 'center':
	          this.rules = _layout2['default'].extend(this.rules, _layout2['default'].justifyCenter);
	          break;
	        case 'end':
	          this.rules = _layout2['default'].extend(this.rules, _layout2['default'].justifyEnd);
	          break;
	        case 'between':
	          this.rules = _layout2['default'].extend(this.rules, _layout2['default'].justifyBetween);
	          break;
	        case 'around':
	          this.rules = _layout2['default'].extend(this.rules, _layout2['default'].justifyAround);
	          break;
	        default:
	          break;
	      }
	      return this;
	    }
	  }, {
	    key: '_buildStyles',
	    value: function _buildStyles() {
	      var style = this._buildGeneral()._buildPosition()._buildLayout()._buildFlex()._buildWrap()._buildDirection()._buildAlign()._buildJustify();
	      return style.rules;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var props = this.props;
	      var node = props.el || 'div';
	      var rules = this._buildStyles();
	      return _react2['default'].createElement(node, _layout2['default'].extend(props, { style: rules }));
	    }
	  }]);

	  return Block;
	})(_react2['default'].Component);

	;

	Block.PropTypes = {
	  el: _react2['default'].PropTypes.string,
	  block: _react2['default'].PropTypes.bool,
	  hidden: _react2['default'].PropTypes.bool,
	  invisible: _react2['default'].PropTypes.bool,
	  relative: _react2['default'].PropTypes.bool,
	  absolute: _react2['default'].PropTypes.bool,
	  layout: _react2['default'].PropTypes.bool,
	  inline: _react2['default'].PropTypes.bool,
	  flex: _react2['default'].PropTypes.bool,
	  vertical: _react2['default'].PropTypes.bool,
	  horizontal: _react2['default'].PropTypes.bool,
	  reverse: _react2['default'].PropTypes.bool,
	  align: _react2['default'].PropTypes.oneOf(['start', 'center', 'end', 'stretch']),
	  self: _react2['default'].PropTypes.oneOf(['start', 'center', 'end', 'stretch']),
	  justify: _react2['default'].PropTypes.oneOf(['start', 'center', 'end', 'between', 'around']),
	  centered: _react2['default'].PropTypes.bool
	};

	exports['default'] = Block;
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var extend = function extend() {
	  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	    args[_key] = arguments[_key];
	  }

	  var newObj = {};
	  for (var i in args) {
	    var obj = args[i];
	    for (var key in obj) {
	      newObj[key] = obj[key];
	    }
	  }
	  return newObj;
	};

	var layout = undefined,
	    inline = undefined,
	    flexAuto = undefined,
	    flexNone = undefined;
	var horizontal = undefined,
	    horizontalReverse = undefined,
	    vertical = undefined,
	    verticalReverse = undefined;
	var alignStart = undefined,
	    alignCenter = undefined,
	    alignEnd = undefined,
	    alignStretch = undefined;
	var selfAlignStart = undefined,
	    selfAlignCenter = undefined,
	    selfAlignEnd = undefined,
	    selfAlignStretch = undefined;
	var justifyStart = undefined,
	    justifyCenter = undefined,
	    justifyEnd = undefined,
	    justifyBetween = undefined,
	    justifyAround = undefined;
	var block = undefined,
	    hidden = undefined,
	    invisible = undefined;
	var relative = undefined,
	    absolute = undefined;
	var wrap = undefined,
	    wrapReverse = undefined;
	var centered = undefined;

	layout = {
	  display: 'flex'
	};

	inline = {
	  display: 'inline-flex'
	};

	flexAuto = {
	  flexGrow: 1,
	  flexShrink: 1,
	  flexBasis: 'auto'
	};

	flexNone = {
	  flexGrow: 0,
	  flexShrink: 0,
	  flexBasis: 'auto'
	};

	block = {
	  display: 'block'
	};

	hidden = {
	  display: 'none'
	};

	invisible = {
	  visibility: 'hidden'
	};

	relative = {
	  position: 'relative'
	};

	absolute = {
	  position: 'absolute',
	  top: 0,
	  right: 0,
	  bottom: 0,
	  left: 0
	};

	horizontal = extend(layout, {
	  flexDirection: 'row'
	});

	horizontalReverse = extend(layout, {
	  flexDirection: 'row-reverse'
	});

	vertical = extend(layout, {
	  flexDirection: 'column'
	});

	verticalReverse = extend(layout, {
	  flexDirection: 'column-reverse'
	});

	alignStart = {
	  alignItems: 'flex-start'
	};

	alignCenter = {
	  alignItems: 'center'
	};

	alignEnd = {
	  alignItems: 'flex-end'
	};

	alignStretch = {
	  alignItems: 'stretch'
	};

	selfAlignStart = {
	  alignSelf: 'flex-start'
	};

	selfAlignCenter = {
	  alignSelf: 'center'
	};

	selfAlignEnd = {
	  alignSelf: 'flex-end'
	};

	selfAlignStretch = {
	  alignSelf: 'stretch'
	};

	justifyStart = {
	  justifyContent: 'flex-start'
	};

	justifyCenter = {
	  justifyContent: 'center'
	};

	justifyEnd = {
	  justifyContent: 'flex-end'
	};

	justifyBetween = {
	  justifyContent: 'space-between'
	};

	justifyAround = {
	  justifyContent: 'space-around'
	};

	wrap = {
	  flexWrap: 'wrap'
	};

	wrapReverse = {
	  flexWrap: 'wrap-reverse'
	};

	centered = extend(layout, alignCenter, justifyCenter);

	exports['default'] = {
	  extend: extend,
	  block: block,
	  hidden: hidden,
	  invisible: invisible,
	  relative: relative,
	  absolute: absolute,
	  layout: layout,
	  inline: inline,
	  flexAuto: flexAuto,
	  flexNone: flexNone,
	  horizontal: horizontal,
	  horizontalReverse: horizontalReverse,
	  vertical: vertical,
	  verticalReverse: verticalReverse,
	  alignStart: alignStart,
	  alignCenter: alignCenter,
	  alignEnd: alignEnd,
	  alignStretch: alignStretch,
	  selfAlignStart: selfAlignStart,
	  selfAlignCenter: selfAlignCenter,
	  selfAlignEnd: selfAlignEnd,
	  selfAlignStretch: selfAlignStretch,
	  justifyStart: justifyStart,
	  justifyCenter: justifyCenter,
	  justifyEnd: justifyEnd,
	  justifyBetween: justifyBetween,
	  justifyAround: justifyAround,
	  wrap: wrap,
	  wrapReverse: wrapReverse,
	  centered: centered
	};
	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }
/******/ ])
});
;