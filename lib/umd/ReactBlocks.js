(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["ReactBlocks"] = factory(require("react"));
	else
		root["ReactBlocks"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
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

	__webpack_require__(2);
	module.exports = __webpack_require__(2);


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _block = __webpack_require__(4);

	var _block2 = _interopRequireDefault(_block);

	var _decorate = __webpack_require__(6);

	var _decorate2 = _interopRequireDefault(_decorate);

	exports['default'] = (0, _decorate2['default'])(_block2['default']);
	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var _kind = /^\[object (.*)\]$/;
	var _toString = Object.prototype.toString;

	function _kindOf(val) {
	  if (val === null) {
	    return 'Null';
	  } else if (val === undefined) {
	    return 'Undefined';
	  } else {
	    return _kind.exec(_toString.call(val))[1];
	  }
	}

	function _isKind(val, kind) {
	  return _kindOf(val) === kind;
	}

	function _isObject(val) {
	  return _isKind(val, 'Object');
	}

	function _isArray(val) {
	  return _isKind(val, 'Array');
	}

	function _fillin() {
	  var newObj = {};

	  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	    args[_key] = arguments[_key];
	  }

	  for (var i = 0; i < args.length; i++) {
	    var obj = args[i];
	    for (var key in obj) {
	      newObj[key] = obj[key];
	    }
	  }

	  return newObj;
	};

	function _mixin() {
	  var newObj = {};
	  arguments[0].forEach(function (arg) {
	    if (!arg || !_isObject(arg) || _isArray(arg)) {
	      return;
	    }
	    for (var key in arg) {
	      if (newObj[key] && _isObject(newObj[key])) {
	        newObj[key] = _mixin([newObj[key], arg[key]]);
	      } else {
	        newObj[key] = arg[key];
	      }
	    }
	  });

	  return newObj;
	}

	function _query(key) {
	  return key[0] === '@' || key === 'xs' || key === 'md' || key === 'lg';
	};

	exports['default'] = {
	  fillin: _fillin,
	  mixin: _mixin,
	  query: _query
	};
	module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var Block = (function (_React$Component) {
	  _inherits(Block, _React$Component);

	  function Block(props) {
	    _classCallCheck(this, Block);

	    _get(Object.getPrototypeOf(Block.prototype), 'constructor', this).call(this, props);
	  }

	  _createClass(Block, [{
	    key: 'render',
	    value: function render() {
	      var props = this.props;
	      var node = props.el || 'div';
	      return _react2['default'].createElement(node, props);
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
	  start: _react2['default'].PropTypes.bool,
	  center: _react2['default'].PropTypes.bool,
	  end: _react2['default'].PropTypes.bool,
	  stretch: _react2['default'].PropTypes.bool,
	  centered: _react2['default'].PropTypes.bool,
	  selfStart: _react2['default'].PropTypes.bool,
	  selfCenter: _react2['default'].PropTypes.bool,
	  selfEnd: _react2['default'].PropTypes.bool,
	  selfStretch: _react2['default'].PropTypes.bool,
	  justifyStart: _react2['default'].PropTypes.bool,
	  justifyCenter: _react2['default'].PropTypes.bool,
	  justifyEnd: _react2['default'].PropTypes.bool,
	  justifyBetween: _react2['default'].PropTypes.bool,
	  justifyAround: _react2['default'].PropTypes.bool
	};

	exports['default'] = Block;
	module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = Compose;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _layout = __webpack_require__(7);

	var _layout2 = _interopRequireDefault(_layout);

	var _utils = __webpack_require__(3);

	var _utils2 = _interopRequireDefault(_utils);

	var _mediaQueryListByQueryString = {};
	var _predefinedMediaQueryString = {
	  xs: 'screen and (min-width: 375px)',
	  md: 'screen and (min-width: 768px)',
	  lg: 'screen and (min-width: 1024px)'
	};

	function _onMediaQueryChange(component, query, mediaQueryList) {
	  var media = {};
	  media[query] = mediaQueryList.matches;
	  _setStyleState(component, query, media);
	}

	function _setStyleState(component, key, newState) {
	  var existing = component.state && component.state._media || {};
	  var state = { _media: _utils2['default'].fillin({}, existing) };
	  state._media[key] = state._media[key] || {};
	  _utils2['default'].fillin(state._media[key], newState);
	  component.setState({
	    _media: state._media
	  });
	}

	var _resolveLayoutGeneral = function _resolveLayoutGeneral(props, style) {
	  if (props.block) {
	    style = _utils2['default'].fillin(style, _layout2['default'].block);
	  }
	  if (props.hidden) {
	    style = _utils2['default'].fillin(style, _layout2['default'].hidden);
	  }
	  if (props.invisible) {
	    style = _utils2['default'].fillin(style, _layout2['default'].invisible);
	  }

	  return style;
	};

	var _resolveLayoutPosition = function _resolveLayoutPosition(props, style) {
	  if (props.relative) {
	    style = _utils2['default'].fillin(style, _layout2['default'].relative);
	  }
	  if (props.absolute) {
	    style = _utils2['default'].fillin(style, _layout2['default'].absolute);
	  }

	  return style;
	};

	var _resolveLayoutFlex = function _resolveLayoutFlex(props, style) {
	  if (props.layout) {
	    style = _utils2['default'].fillin(style, _layout2['default'].layout, _layout2['default'].vertical);
	    if (props.vertical) {
	      props.reverse ? style = _utils2['default'].fillin(style, _layout2['default'].verticalReverse) : style = _utils2['default'].fillin(style, _layout2['default'].vertical);
	    } else {
	      props.reverse ? style = _utils2['default'].fillin(style, _layout2['default'].horizontalReverse) : style = _utils2['default'].fillin(style, _layout2['default'].horizontal);
	    }
	  }
	  if (props.inline) {
	    style = _utils2['default'].fillin(style, _layout2['default'].inline, _layout2['default'].horizontal);
	  }

	  props.flex ? style = _utils2['default'].fillin({}, _layout2['default'].flexAuto, style) : style = _utils2['default'].fillin({}, _layout2['default'].flexNone, style);

	  return style;
	};

	var _resolveLayoutAlign = function _resolveLayoutAlign(props, style) {
	  style = _utils2['default'].fillin(style, _layout2['default'].alignStretch);
	  if (props.start) {
	    style = _utils2['default'].fillin(style, _layout2['default'].alignStart);
	  }
	  if (props.center) {
	    style = _utils2['default'].fillin(style, _layout2['default'].alignCenter);
	  }
	  if (props.end) {
	    style = _utils2['default'].fillin(style, _layout2['default'].alignEnd);
	  }
	  if (props.centered) {
	    style = _utils2['default'].fillin(style, _layout2['default'].centered);
	  }

	  return style;
	};

	var _resolveLayoutSelf = function _resolveLayoutSelf(props, style) {
	  if (props.selfStart) {
	    style = _utils2['default'].fillin(style, _layout2['default'].selfAlignStart);
	  }
	  if (props.selfCenter) {
	    style = _utils2['default'].fillin(style, _layout2['default'].selfAlignCenter);
	  }
	  if (props.selfEnd) {
	    style = _utils2['default'].fillin(style, _layout2['default'].selfAlignEnd);
	  }
	  if (props.selfStretch) {
	    style = _utils2['default'].fillin(style, _layout2['default'].selfAlignStretch);
	  }

	  return style;
	};

	var _resolveLayoutJustify = function _resolveLayoutJustify(props, style) {
	  if (props.justifyStart) {
	    style = _utils2['default'].fillin(style, _layout2['default'].justifyStart);
	  }
	  if (props.justifyCenter) {
	    style = _utils2['default'].fillin(style, _layout2['default'].justifyCenter);
	  }
	  if (props.justifyEnd) {
	    style = _utils2['default'].fillin(style, _layout2['default'].justifyEnd);
	  }
	  if (props.justifyStretch) {
	    style = _utils2['default'].fillin(style, _layout2['default'].justifyStretch);
	  }
	  if (props.justifyBetween) {
	    style = _utils2['default'].fillin(style, _layout2['default'].justifyBetween);
	  }
	  if (props.justifyAround) {
	    style = _utils2['default'].fillin(style, _layout2['default'].justifyAround);
	  }

	  return style;
	};

	var _resolveLayoutStyles = function _resolveLayoutStyles(props, style) {
	  style = _resolveLayoutGeneral(props, style);
	  style = _resolveLayoutPosition(props, style);
	  style = _resolveLayoutFlex(props, style);
	  style = _resolveLayoutAlign(props, style);
	  style = _resolveLayoutSelf(props, style);
	  style = _resolveLayoutJustify(props, style);

	  return style;
	};

	var _resolveMediaQueries = function _resolveMediaQueries(component, style) {
	  var styles = style;
	  Object.keys(styles).filter(function (name) {
	    return _utils2['default'].query(name);
	  }).map(function (query) {
	    var mediaQueryStyles = styles[query];
	    query = query[0] === '@' ? query.replace('@media ', '') : _predefinedMediaQueryString[query];
	    var mql = _mediaQueryListByQueryString[query];
	    if (!mql) {
	      _mediaQueryListByQueryString[query] = mql = window.matchMedia(query);
	    }

	    if (!component._mediaQueryListenersByQuery) {
	      component._mediaQueryListenersByQuery = {};
	    }

	    if (!component._mediaQueryListenersByQuery[query]) {
	      (function () {
	        var listener = _onMediaQueryChange.bind(null, component, query);
	        mql.addListener(listener);
	        component._mediaQueryListenersByQuery[query] = {
	          remove: function remove() {
	            mql.removeListener(listener);
	          }
	        };
	      })();
	    }

	    if (mql.matches) {
	      styles = _utils2['default'].fillin(styles, mediaQueryStyles);
	    }
	  });

	  return styles;
	};

	function Compose(component, rendered) {
	  var props = rendered.props;
	  var style = props.style;
	  var children = props.children;

	  var newStyle = {},
	      newProps = {};

	  if (Array.isArray(style)) {
	    style = _utils2['default'].mixin(style);
	  }

	  style = _resolveLayoutStyles(props, style);
	  style = _resolveMediaQueries(component, style);

	  Object.keys(style).forEach(function (key) {
	    if (!_utils2['default'].query(key)) {
	      newStyle[key] = style[key];
	    }
	  });

	  // Prefix vendors here
	  newProps = _utils2['default'].fillin(newProps, { style: newStyle });
	  return _react2['default'].cloneElement(rendered, newProps, children);
	}

	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _compose = __webpack_require__(5);

	var _compose2 = _interopRequireDefault(_compose);

	exports['default'] = function (Component) {
	  var ComposedComponent = (function (_Component) {
	    _inherits(ComposedComponent, _Component);

	    function ComposedComponent(props) {
	      _classCallCheck(this, ComposedComponent);

	      _get(Object.getPrototypeOf(ComposedComponent.prototype), 'constructor', this).call(this, props);
	      this.state = {
	        _media: {}
	      };
	      this.state = this.state || {};
	    }

	    _createClass(ComposedComponent, [{
	      key: 'componentDidMount',
	      value: function componentDidMount() {
	        if (_get(Object.getPrototypeOf(ComposedComponent.prototype), 'componentDidMount', this)) {
	          _get(Object.getPrototypeOf(ComposedComponent.prototype), 'componentDidMount', this).call(this);
	        }
	      }
	    }, {
	      key: 'componentWillUnmount',
	      value: function componentWillUnmount() {
	        var _this = this;

	        if (_get(Object.getPrototypeOf(ComposedComponent.prototype), 'componentWillUnmount', this)) {
	          _get(Object.getPrototypeOf(ComposedComponent.prototype), 'componentWillUnmount', this).call(this);
	        }

	        if (this._mediaQueryListenersByQuery) {
	          Object.keys(this._mediaQueryListenersByQuery).forEach(function (query) {
	            _this._mediaQueryListenersByQuery[query].remove();
	          }, this);
	        }
	      }
	    }, {
	      key: 'shouldComponentUpdate',
	      value: function shouldComponentUpdate(nextProps, nextState) {
	        if (nextState._media !== this.state._media) {
	          return true;
	        }
	        return false;
	      }
	    }, {
	      key: 'render',
	      value: function render() {
	        return (0, _compose2['default'])(this, _get(Object.getPrototypeOf(ComposedComponent.prototype), 'render', this).call(this));
	      }
	    }]);

	    return ComposedComponent;
	  })(Component);

	  ComposedComponent.displayName = 'Block';

	  return ComposedComponent;
	};

	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _utils = __webpack_require__(3);

	var common = undefined,
	    layout = undefined,
	    inline = undefined,
	    flex = undefined,
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
	var centered = undefined;

	// Defaults
	common = {
	  boxSizing: 'border-box',
	  flexWrap: 'wrap'
	};

	layout = (0, _utils.fillin)(common, {
	  display: 'flex'
	});

	inline = (0, _utils.fillin)(common, {
	  display: 'inline-flex'
	});

	flex = {
	  flexGrow: 1,
	  flexShrink: 1,
	  flexBasis: '0%'
	};

	flexAuto = (0, _utils.fillin)(flex, {
	  flexGrow: 1,
	  flexShrink: 1,
	  flexBasis: 'auto'
	});

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

	horizontal = (0, _utils.fillin)(layout, {
	  flexDirection: 'row'
	});

	horizontalReverse = (0, _utils.fillin)(layout, {
	  flexDirection: 'row-reverse'
	});

	vertical = (0, _utils.fillin)(layout, {
	  flexDirection: 'column'
	});

	verticalReverse = (0, _utils.fillin)(layout, {
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

	centered = (0, _utils.fillin)(layout, alignCenter, justifyCenter);

	exports['default'] = {
	  block: block,
	  hidden: hidden,
	  invisible: invisible,
	  centered: centered,
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
	  justifyAround: justifyAround
	};
	module.exports = exports['default'];

/***/ }
/******/ ])
});
;