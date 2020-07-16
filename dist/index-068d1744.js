'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var styled = require('styled-components');
var styled__default = _interopDefault(styled);
var reactIs = _interopDefault(require('react-is'));
var ReactBreakpoints = require('react-breakpoints');
var ReactBreakpoints__default = _interopDefault(ReactBreakpoints);
var Slider = _interopDefault(require('react-input-slider'));
var JsxParser = _interopDefault(require('react-jsx-parser'));
var reactElementToJSXString = _interopDefault(require('react-element-to-jsx-string'));
var Prismic$2 = _interopDefault(require('prismic-javascript'));

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function () {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function makePixelValue(value) {
  return value + 'px';
}

var _unit = 32;
var theme = {
  breakPoints: {
    mobile: 608,
    tablet: 960,
    bigTablet: 1024,
    desktop: 1280
  },
  breakPointsAsPixel: {
    mobile: '608px',
    tablet: '960px',
    desktop: '1280px'
  },
  colors: {
    dark1: '#000000',
    dark2: '#D40000',
    dark3: '#0091ea',
    dark4: '#565656',
    dark5: '#0066a3',
    dark6: '#dddddd',
    light1: '#f9f9f9',
    light2: '#f9f9f9',
    light3: '#ffffff',
    error: '#D40000',
    success: '#009918',
    white: '#ffffff'
  },
  typography: {
    fonts: {
      font1: 'Roboto'
    },
    sizes: {
      desktop: {
        xsm: '1rem',
        // not used yet
        sm: '1.125rem',
        md: '1.5rem',
        lg: '2rem',
        xlg: '2.5rem',
        xxlg: '3.0rem'
      },
      tablet: {
        xsm: '.9rem',
        sm: '1.125rem',
        md: '1.5rem',
        lg: '2rem',
        xlg: '2.5rem',
        xxlg: '3.0rem'
      },
      mobile: {
        xsm: '.9rem',
        sm: '1.125rem',
        md: '1.375rem',
        lg: '1.75rem',
        xlg: '2.0rem',
        xxlg: '2.5rem'
      }
    }
  },
  border: '1px solid #eee',
  border2: '1px soild #454545',
  unit: function unit(multiplier) {
    return makePixelValue(multiplier * _unit);
  },
  layout: {
    desktop: {
      headerHeight: makePixelValue(3.5 * _unit)
    },
    mobile: {
      headerHeight: makePixelValue(1.5 * _unit)
    },
    tablet: {
      headerHeight: makePixelValue(1.5 * _unit)
    }
  }
};

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  ul {\n    list-style: none;\n    margin: 0;\n    padding-left: 0;\n    li {\n      margin-left: 0;\n    }\n  }\n\n  @media (max-width: ", ") {\n    ul {\n      column-count: 3;\n    }\n  }\n\n  @media (max-width: 800px) {\n    ul {\n      column-count: 2;\n    }\n  }\n\n  @media (max-width: ", ") {\n    ul {\n      column-count: 1;\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var ContentUI = styled__default('div')(_templateObject());
var SidebarUI = styled__default('div')(_templateObject2(), theme.breakPointsAsPixel.tablet, theme.breakPointsAsPixel.mobile);

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: ", ";\n  flex-wrap: wrap;\n  width: calc(100% + ", ");\n  align-items: ", ";\n  align-content: flex-start;\n  margin-left: -", ";\n\n  ", "\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$1() {
  var data = _taggedTemplateLiteral(["\n  height: 100%;\n  width: 100%;\n"]);

  _templateObject2$1 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$1() {
  var data = _taggedTemplateLiteral(["\n  align-self: ", ";\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  padding: ", ";\n  width: ", ";\n  max-width: ", ";\n  text-align: ", ";\n\n  ", "\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}

function getCollaspe(_ref) {
  var collapse = _ref.collapse;

  if (collapse === 'never') {
    return '';
  }

  return " @media (min-width: ".concat(theme.breakPointsAsPixel.mobile, ") and (max-width: ").concat(theme.breakPointsAsPixel.tablet, ") {\n    & > ").concat(ColUI, " {\n    width: ").concat(function (_ref2) {
    var collapse = _ref2.collapse;
    return collapse === 'tablet' ? "calc(100% + ".concat(theme.unit(0.25), ")") : "calc(50%)";
  }, ";\n  }\n}\n\n@media (max-width: ").concat(theme.breakPointsAsPixel.mobile, ") {\n  & > ").concat(ColUI, " {\n    display: block;\n    width: 100%;\n  }\n}");
}

var ColUI = styled__default('div')(_templateObject$1(), function (_ref3) {
  var alignSelf = _ref3.alignSelf;
  return alignSelf;
}, function (_ref4) {
  var horizontalPadding = _ref4.horizontalPadding,
      verticalPadding = _ref4.verticalPadding;
  return "".concat(theme.unit(verticalPadding), " ").concat(theme.unit(horizontalPadding));
}, function (_ref5) {
  var width = _ref5.width;
  return width;
}, function (_ref6) {
  var maxWidth = _ref6.maxWidth;
  return maxWidth;
}, function (_ref7) {
  var textAlign = _ref7.textAlign;
  return textAlign;
}, function (_ref8) {
  var isSticky = _ref8.isSticky;
  return isSticky && "\n      position: sticky;\n      top: 0px;\n      align-self: flex-start;\n  ";
});
var ColInnerUI = styled__default('div')(_templateObject2$1());
var GridUI = styled__default('div')(_templateObject3(), function (_ref9) {
  var direction = _ref9.direction;
  return direction;
}, theme.unit(0.5), function (_ref10) {
  var alignItems = _ref10.alignItems;
  return alignItems;
}, theme.unit(0.25), getCollaspe);

function Grid(_ref) {
  var _ref$alignItems = _ref.alignItems,
      alignItems = _ref$alignItems === void 0 ? 'flex-start' : _ref$alignItems,
      children = _ref.children,
      _ref$collapse = _ref.collapse,
      collapse = _ref$collapse === void 0 ? '' : _ref$collapse,
      _ref$direction = _ref.direction,
      direction = _ref$direction === void 0 ? 'row' : _ref$direction;
  return /*#__PURE__*/React__default.createElement(GridUI, {
    alignItems: alignItems,
    collapse: collapse,
    direction: direction
  }, children);
}

Grid.Col = function (_ref2) {
  var _ref2$alignSelf = _ref2.alignSelf,
      alignSelf = _ref2$alignSelf === void 0 ? 'flex-start' : _ref2$alignSelf,
      children = _ref2.children,
      _ref2$isSticky = _ref2.isSticky,
      isSticky = _ref2$isSticky === void 0 ? false : _ref2$isSticky,
      _ref2$horizontalPaddi = _ref2.horizontalPadding,
      horizontalPadding = _ref2$horizontalPaddi === void 0 ? 0.25 : _ref2$horizontalPaddi,
      _ref2$maxWidth = _ref2.maxWidth,
      maxWidth = _ref2$maxWidth === void 0 ? 'initial' : _ref2$maxWidth,
      _ref2$verticalPadding = _ref2.verticalPadding,
      verticalPadding = _ref2$verticalPadding === void 0 ? 0.25 : _ref2$verticalPadding,
      _ref2$textAlign = _ref2.textAlign,
      textAlign = _ref2$textAlign === void 0 ? 'left' : _ref2$textAlign,
      _ref2$width = _ref2.width,
      width = _ref2$width === void 0 ? '32%' : _ref2$width;
  return /*#__PURE__*/React__default.createElement(ColUI, {
    alignSelf: alignSelf,
    horizontalPadding: horizontalPadding,
    isSticky: isSticky,
    maxWidth: maxWidth,
    verticalPadding: verticalPadding,
    textAlign: textAlign,
    width: width
  }, /*#__PURE__*/React__default.createElement(ColInnerUI, null, children));
};

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  padding: ", ";\n  padding-top: ", ";\n  blockquote {\n    border: none;\n    color: ", ";\n    margin: 0;\n    padding: 0;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$1() {
  var data = _taggedTemplateLiteral(["\n  left: ", ";\n  top: -", ";\n"]);

  _templateObject3$1 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$2() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  line-height: ", ";\n  font-size: ", ";\n  opacity: 0.5;\n  position: absolute;\n"]);

  _templateObject2$2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$2() {
  var data = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  width: 100%;\n  display: block;\n  background: ", ";\n  position: relative;\n"]);

  _templateObject$2 = function _templateObject() {
    return data;
  };

  return data;
}
var BoxWrapper = styled__default('div')(_templateObject$2(), theme.colors.light1);
var QuoteUI = styled__default('span')(_templateObject2$2(), theme.colors.dark3, theme.unit(4), theme.unit(4));
var OpenQuoteUI = styled__default(QuoteUI)(_templateObject3$1(), theme.unit(0.375), theme.unit(0.125));
var CloseQuoteUI = styled__default(QuoteUI)(_templateObject4());
var DropQuoteUI = styled__default('div')(_templateObject5(), theme.unit(1), theme.unit(2), theme.colors.dark1);

function Quote (_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React__default.createElement(BoxWrapper, null, /*#__PURE__*/React__default.createElement(OpenQuoteUI, null, "\u201C"), /*#__PURE__*/React__default.createElement(DropQuoteUI, null, /*#__PURE__*/React__default.createElement("blockquote", null, children)));
}

function _templateObject$3() {
  var data = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  border: ", ";\n  padding: ", " ", ";\n  margin-bottom: ", ";\n  width: 100%;\n\n  .title {\n    font-weight: bold;\n    flex-grow: 0;\n  }\n\n  ul {\n    list-style: none;\n    margin: 0;\n    padding-left: 0;\n    li {\n      margin-left: 0;\n    }\n  }\n  @media (max-width: ", ") {\n    ul {\n      column-count: 3;\n    }\n  }\n  @media (max-width: 800px) {\n    ul {\n      column-count: 2;\n    }\n  }\n  @media (max-width: ", ") {\n    ul {\n      column-count: 1;\n    }\n  }\n"]);

  _templateObject$3 = function _templateObject() {
    return data;
  };

  return data;
}
var BoxWrapper$1 = styled__default('div')(_templateObject$3(), theme.border, theme.unit(0.25), theme.unit(0.5), theme.unit(0.5), theme.breakPointsAsPixel.tablet, theme.breakPointsAsPixel.mobile);

var Box = /*#__PURE__*/function (_React$Component) {
  _inherits(Box, _React$Component);

  var _super = _createSuper(Box);

  function Box() {
    _classCallCheck(this, Box);

    return _super.apply(this, arguments);
  }

  _createClass(Box, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React__default.createElement(BoxWrapper$1, null, this.props.children);
    }
  }]);

  return Box;
}(React__default.Component);

function getSpaceBefore(_ref) {
  var spaceBefore = _ref.spaceBefore;

  if (spaceBefore === 'small') {
    return theme.unit(0.25);
  } else if (spaceBefore === 'medium') {
    return theme.unit(0.5);
  } else {
    return 0;
  }
}

function getSpaceAfter(_ref) {
  var spaceAfter = _ref.spaceAfter;

  if (spaceAfter === 'none') {
    return 0;
  } else if (spaceAfter === 'tiny') {
    return theme.unit(0.125);
  } else if (spaceAfter === 'small') {
    return theme.unit(0.25);
  } else if (spaceAfter === 'medium') {
    return theme.unit(0.5);
  } else {
    return theme.unit(0.75);
  }
}

function _templateObject3$2() {
  var data = _taggedTemplateLiteral(["\n  width: ", ";\n  height: ", ";\n  margin-bottom: ", ";\n  margin-right: ", ";\n"]);

  _templateObject3$2 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$3() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n  height: ", ";\n  margin-top: -", ";\n  visibility: hidden;\n"]);

  _templateObject2$3 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$4() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  font-family: ", ";\n  font-size: ", ";\n\n  @media (min-width: ", ") and (max-width: ", ") {\n    font-size: ", ";\n  }\n  @media (max-width: ", ") {\n    font-size: ", ";\n  }\n\n  font-style: ", ";\n  font-weight: 700;\n  line-height: 120%;\n  margin: 0;\n  margin-bottom: ", ";\n  margin-top: ", ";\n  padding: 0;\n  text-shadow: ", ";\n"]);

  _templateObject$4 = function _templateObject() {
    return data;
  };

  return data;
}

function getFontSize(_ref, mediaQuery) {
  var as = _ref.as,
      styling = _ref.styling,
      mobileStyling = _ref.mobileStyling,
      tabletStyling = _ref.tabletStyling;
  var styles = {
    h1: {
      desktop: theme.typography.sizes.desktop.xxlg,
      tablet: theme.typography.sizes.tablet.xxlg,
      mobile: theme.typography.sizes.mobile.xxlg
    },
    h2: {
      desktop: theme.typography.sizes.desktop.xlg,
      tablet: theme.typography.sizes.tablet.xlg,
      mobile: theme.typography.sizes.mobile.xlg
    },
    h3: {
      desktop: theme.typography.sizes.desktop.lg,
      tablet: theme.typography.sizes.tablet.lg,
      mobile: theme.typography.sizes.mobile.lg
    },
    h4: {
      desktop: theme.typography.sizes.desktop.md,
      tablet: theme.typography.sizes.tablet.md,
      mobile: theme.typography.sizes.mobile.md
    },
    h5: {
      desktop: theme.typography.sizes.desktop.sm,
      tablet: theme.typography.sizes.tablet.sm,
      mobile: theme.typography.sizes.mobile.sm
    },
    h6: {
      desktop: theme.typography.sizes.desktop.xsm,
      tablet: theme.typography.sizes.tablet.xsm,
      mobile: theme.typography.sizes.mobile.xsm
    }
  };

  if (!!mobileStyling && mediaQuery === 'mobile') {
    return styles[mobileStyling][mediaQuery];
  } else if (!!tabletStyling && mediaQuery === 'tablet') {
    return styles[tabletStyling][mediaQuery];
  } else if (styling) {
    return styles[styling][mediaQuery];
  } else {
    return styles[as][mediaQuery];
  }
}

function getColor(_ref2) {
  var color = _ref2.color;
  return theme.colors[color];
}

function getTextShadow(_ref3) {
  var shadow = _ref3.shadow;

  if (shadow === 'dark') {
    return "2px 3px ".concat(theme.colors.dark1);
  } else if (shadow === 'light') {
    return "1px 2px ".concat(theme.colors.light3);
  }

  return 'none';
}

var TitleUI = styled__default('span')(_templateObject$4(), getColor, theme.typography.fonts['font-3'], function (props) {
  return getFontSize(props, 'desktop');
}, theme.breakPointsAsPixel.mobile, theme.breakPointsAsPixel.tablet, function (props) {
  return getFontSize(props, 'tablet');
}, theme.breakPointsAsPixel.mobile, function (props) {
  return getFontSize(props, 'mobile');
}, function (props) {
  return props.fontStyle;
}, getSpaceAfter, getSpaceBefore, getTextShadow);
var AnchorUI = styled__default('div')(_templateObject2$3(), theme.layout.desktop.headerHeight, theme.layout.desktop.headerHeight);
var IconUI = styled__default('img')(_templateObject3$2(), theme.unit(1), theme.unit(1), getSpaceAfter, theme.unit(0.125));

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret;

var printWarning = function() {};

if (process.env.NODE_ENV !== 'production') {
  var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (process.env.NODE_ENV !== 'production') {
    loggedTypeFailures = {};
  }
};

var checkPropTypes_1 = checkPropTypes;

var has$1 = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning$1 = function() {};

if (process.env.NODE_ENV !== 'production') {
  printWarning$1 = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret_1) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning$1(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!reactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (process.env.NODE_ENV !== 'production') {
        if (arguments.length > 1) {
          printWarning$1(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning$1('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has$1(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? printWarning$1('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning$1(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = objectAssign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes_1;
  ReactPropTypes.resetWarningCache = checkPropTypes_1.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

var propTypes = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var ReactIs = reactIs;

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = factoryWithThrowingShims();
}
});

function Title(_ref) {
  var _ref$as = _ref.as,
      as = _ref$as === void 0 ? 'h3' : _ref$as,
      children = _ref.children,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'dark1' : _ref$color,
      _ref$id = _ref.id,
      id = _ref$id === void 0 ? '' : _ref$id,
      _ref$fontStyle = _ref.fontStyle,
      fontStyle = _ref$fontStyle === void 0 ? 'normal' : _ref$fontStyle,
      _ref$mobileStyling = _ref.mobileStyling,
      mobileStyling = _ref$mobileStyling === void 0 ? '' : _ref$mobileStyling,
      _ref$shadow = _ref.shadow,
      shadow = _ref$shadow === void 0 ? 'none' : _ref$shadow,
      _ref$spaceBefore = _ref.spaceBefore,
      spaceBefore = _ref$spaceBefore === void 0 ? 'none' : _ref$spaceBefore,
      _ref$spaceAfter = _ref.spaceAfter,
      spaceAfter = _ref$spaceAfter === void 0 ? 'default' : _ref$spaceAfter,
      styling = _ref.styling,
      _ref$tabletStyling = _ref.tabletStyling,
      tabletStyling = _ref$tabletStyling === void 0 ? '' : _ref$tabletStyling;
  var content = /*#__PURE__*/React__default.createElement(TitleUI, {
    as: as,
    id: id,
    color: color,
    fontStyle: fontStyle,
    mobileStyling: mobileStyling,
    shadow: shadow,
    spaceBefore: spaceBefore,
    spaceAfter: spaceAfter,
    tabletStyling: tabletStyling,
    styling: styling
  }, children);

  if (id) {
    return /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement(AnchorUI, {
      id: id
    }), content);
  }

  return content;
}
Title.propTypes = {
  as: propTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  color: propTypes.oneOf(Object.keys(theme.colors)),
  fontStyle: propTypes.oneOf(['normal', 'italic', 'oblique']),
  styling: propTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  shadow: propTypes.oneOf(['none', 'dark']),
  spaceAfter: propTypes.oneOf(['none', 'tiny', 'small', 'medium', 'default'])
};

function Sticky (_ref) {
  var children = _ref.children,
      textAlign = _ref.textAlign;
  return /*#__PURE__*/React__default.createElement(Grid.Col, {
    horizontalPadding: 1,
    isSticky: true,
    width: "34%",
    textAlign: "center"
  }, children);
}

function Article(_ref) {
  var children = _ref.children,
      collapse = _ref.collapse;
  return /*#__PURE__*/React__default.createElement(Grid, {
    collapse: collapse
  }, children);
}

Article.Content = function (_ref2) {
  var children = _ref2.children,
      _ref2$width = _ref2.width,
      width = _ref2$width === void 0 ? '66%' : _ref2$width;
  return /*#__PURE__*/React__default.createElement(Grid.Col, {
    width: width
  }, /*#__PURE__*/React__default.createElement(ContentUI, null, children));
};

Article.Sidebar = function (_ref3) {
  var children = _ref3.children,
      _ref3$width = _ref3.width,
      width = _ref3$width === void 0 ? '34%' : _ref3$width;
  var _children = children;
  return /*#__PURE__*/React__default.createElement(Grid.Col, {
    width: width
  }, _children);
};

Article.Box = function (_ref4) {
  var children = _ref4.children;
  return /*#__PURE__*/React__default.createElement(Box, null, children);
};

Article.StickySidebar = function (_ref5) {
  var children = _ref5.children;
  return /*#__PURE__*/React__default.createElement(Sticky, null, children);
};

Article.Quote = function (_ref6) {
  var children = _ref6.children;
  return /*#__PURE__*/React__default.createElement(Quote, null, /*#__PURE__*/React__default.createElement(Title, {
    as: "h3",
    fontStyle: "italic"
  }, children));
};

function _templateObject$5() {
  var data = _taggedTemplateLiteral(["\n  height: 100%;\n\n  strong {\n    font-weight: bold;\n  }\n\n  em {\n    font-style: italic;\n  }\n"]);

  _templateObject$5 = function _templateObject() {
    return data;
  };

  return data;
}
var BodyUI = styled__default('div')(_templateObject$5());

function body (_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React__default.createElement(BodyUI, null, /*#__PURE__*/React__default.createElement(ReactBreakpoints__default, {
    breakpoints: theme.breakPoints
  }, children));
}

var onShowModal = function onShowModal() {
  if (typeof window !== 'undefined') {
    var scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
    var body = document.body;
    body.style.position = 'fixed';
    body.style.top = "-".concat(scrollY);
  }
};
var onHideModal = function onHideModal() {
  if (typeof window !== 'undefined') {
    var body = document.body;
    var scrollY = body.style.top;
    body.style.position = '';
    body.style.top = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
  }
};

if (typeof window !== 'undefined') {
  window.addEventListener('scroll', function () {
    document.documentElement.style.setProperty('--scroll-y', "".concat(window.scrollY, "px"));
  });
}

function _templateObject$6() {
  var data = _taggedTemplateLiteral(["\n  padding: ", ";\n  background-color: ", ";\n  border: ", ";\n  margin: ", ";\n  padding-bottom: 0;\n  margin-top: ", ";\n"]);

  _templateObject$6 = function _templateObject() {
    return data;
  };

  return data;
}
var ContainerUI = styled__default('blockquote')(_templateObject$6(), theme.unit(0.75), function (_ref) {
  var background = _ref.background;
  return theme.colors[background];
}, theme.border, "".concat(theme.unit(1), " 0"), getSpaceBefore);

function BlockQuote(_ref) {
  var _ref$background = _ref.background,
      background = _ref$background === void 0 ? 'light1' : _ref$background,
      _ref$spaceBefore = _ref.spaceBefore,
      spaceBefore = _ref$spaceBefore === void 0 ? 'default' : _ref$spaceBefore,
      children = _ref.children;
  return /*#__PURE__*/React__default.createElement(ContainerUI, {
    background: background,
    spaceBefore: spaceBefore
  }, children);
}

BlockQuote.propTypes = {
  background: propTypes.oneOf(Object.keys(theme.colors))
};

function _templateObject$7() {
  var data = _taggedTemplateLiteral(["\n  font-size: ", ";\n  display: flex;\n  justify-content: space-around;\n  padding: 1em;\n  text-transform: uppercase;\n  background-color: ", ";\n  color: ", ";\n  font-weight: bold;\n  font-family: ", ";\n"]);

  _templateObject$7 = function _templateObject() {
    return data;
  };

  return data;
}
var ContainerUI$1 = styled__default('div')(_templateObject$7(), theme.unit(0.5), theme.colors.light1, theme.colors.dark3, theme.typography.fonts.font1);

function BreadCrumb(_ref) {
  var parts = _ref.parts;
  return /*#__PURE__*/React__default.createElement(ContainerUI$1, null, /*#__PURE__*/React__default.createElement("div", null, parts.map(function (part) {
    return part;
  })));
}

function _templateObject3$3() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  margin-left: ", ";\n"]);

  _templateObject3$3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$4() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n"]);

  _templateObject2$4 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$8() {
  var data = _taggedTemplateLiteral(["\n  background-color: ", ";\n  border: 0;\n  border-radius: 5px;\n  color: #fff;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: ", ";\n  font-size: ", ";\n  font-weight: 700;\n  padding: ", ";\n  width: 100%;\n  max-width: ", "px;\n  margin: 0 auto;\n\n  background-image: linear-gradient(\n    to bottom,\n    #e52d27 0%,\n    #b31217 41%,\n    #e52d27 100%\n  );\n  ", "\n\n  border:1px solid #d02718;\n  box-shadow: inset 0px 1px 0px 0px #f5978e;\n"]);

  _templateObject$8 = function _templateObject() {
    return data;
  };

  return data;
}
var ButtonUI = styled__default('button')(_templateObject$8(), theme.colors.dark2, theme.typography.fonts.font1, theme.unit(0.6), theme.unit(0.25), function (_ref) {
  var maxWidth = _ref.maxWidth;
  return maxWidth;
}, function (_ref2) {
  var align = _ref2.align;

  if (align === 'center') {
    return "margin-left: 50%;\n      transform: translateX(-50%);\n      ";
  } else if (align === 'right') {
    return "float: right;";
  }
});
var ButtonContainerUI = styled__default('div')(_templateObject2$4());
var IconContainerUI = styled__default('div')(_templateObject3$3(), theme.unit(0.25));

function SMS () {
  return /*#__PURE__*/React__default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 501.551 501.551",
    width: "30"
  }, /*#__PURE__*/React__default.createElement("path", {
    d: "M309.29 0H20.898C9.404 0 0 9.404 0 20.898v459.755c0 11.494 9.404 20.898 20.898 20.898H309.29c11.494 0 20.898-9.404 20.898-20.898V20.898C330.188 9.404 320.784 0 309.29 0z",
    fill: "#40596b"
  }), /*#__PURE__*/React__default.createElement("path", {
    fill: "#84dbff",
    d: "M26.676 59.653h277.943v364.669H26.676z"
  }), /*#__PURE__*/React__default.createElement("g", {
    fill: "#334a5e"
  }, /*#__PURE__*/React__default.createElement("path", {
    d: "M188.082 450.351h-51.2c-6.269 0-11.494 5.224-11.494 11.494s5.224 11.494 11.494 11.494h51.2c6.269 0 11.494-5.224 11.494-11.494s-5.225-11.494-11.494-11.494zM206.89 25.078h-83.592c-3.135 0-5.224 2.09-5.224 5.224 0 3.135 2.09 5.224 5.224 5.224h83.592c3.135 0 5.224-2.09 5.224-5.224 0-3.135-2.09-5.224-5.224-5.224z"
  })), /*#__PURE__*/React__default.createElement("path", {
    d: "M479.608 119.118H224.653c-12.539 0-21.943 10.449-21.943 21.943v146.286c0 12.539 10.449 21.943 21.943 21.943h8.359v54.335l47.02-54.335h199.576c12.539 0 21.943-10.449 21.943-21.943V141.061c0-12.539-10.449-21.943-21.943-21.943z",
    fill: "#f2f2f2"
  }), /*#__PURE__*/React__default.createElement("g", {
    fill: "#54c0eb"
  }, /*#__PURE__*/React__default.createElement("circle", {
    cx: "276.898",
    cy: "214.204",
    r: "24.033"
  }), /*#__PURE__*/React__default.createElement("circle", {
    cx: "352.131",
    cy: "214.204",
    r: "24.033"
  }), /*#__PURE__*/React__default.createElement("circle", {
    cx: "426.318",
    cy: "214.204",
    r: "24.033"
  })));
}

function Email () {
  return /*#__PURE__*/React__default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 502.073 502.073",
    width: "30"
  }, /*#__PURE__*/React__default.createElement("path", {
    d: "M501.812 481.176c0 6.269-2.09 11.494-6.269 15.673-4.18 3.135-8.359 5.224-14.629 5.224H21.159c-5.224 0-10.449-2.09-14.629-5.224-4.18-4.18-6.269-9.404-6.269-15.673V175.02h501.551v306.156z",
    fill: "#ffd15c"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "M495.543 496.849c-4.18 3.135-8.359 5.224-14.629 5.224H21.159c-5.224 0-10.449-2.09-14.629-5.224l244.506-210.024 244.507 210.024z",
    fill: "#f8b64c"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "M501.812 175.02l-71.053 51.2L264.62 345.339a23.511 23.511 0 01-28.212 0L71.314 226.22.261 175.02l71.053-51.2L225.959 13.061l11.494-8.359a23.511 23.511 0 0128.212 0l11.494 8.359 74.188 53.29 36.571 26.122 42.841 31.347 71.053 51.2z",
    fill: "#40596b"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "M430.759 77.845V226.22L264.62 345.339a23.511 23.511 0 01-28.212 0L71.314 226.22V33.959c0-11.494 9.404-20.898 20.898-20.898H364.93l65.829 64.784z",
    fill: "#f2f2f2"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "M365.975 61.127c0 9.404 7.314 16.718 16.718 16.718h48.065l-64.784-64.784.001 48.066z",
    fill: "#cdd6e0"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "M312.686 223.086h16.718c-5.224 11.494-13.584 19.853-25.078 26.122-12.539 7.314-28.212 10.449-47.02 10.449-17.763 0-33.437-3.135-45.976-9.404-12.539-6.269-22.988-14.629-29.257-27.167-6.269-11.494-9.404-25.078-9.404-38.661 0-15.673 3.135-29.257 10.449-42.841s16.718-22.988 29.257-29.257c12.539-6.269 27.167-9.404 42.841-9.404 13.584 0 26.122 3.135 36.571 8.359 10.449 5.224 18.808 12.539 24.033 22.988 5.224 9.404 8.359 20.898 8.359 32.392 0 13.584-4.18 26.122-12.539 37.616-10.449 14.629-24.033 20.898-40.751 20.898-4.18 0-8.359-1.045-10.449-2.09-2.09-2.09-4.18-4.18-4.18-7.314-6.269 6.269-13.584 9.404-21.943 9.404-9.404 0-16.718-3.135-21.943-9.404-6.269-6.269-9.404-14.629-9.404-25.078 0-12.539 3.135-24.033 10.449-35.527 8.359-12.539 19.853-18.808 33.437-18.808 9.404 0 16.718 4.18 21.943 11.494l2.09-9.404h21.943l-12.539 58.514c-1.045 4.18-1.045 6.269-1.045 7.314s0 2.09 1.045 3.135 1.045 1.045 2.09 1.045c2.09 0 6.269-2.09 10.449-5.224 5.224-4.18 10.449-9.404 13.584-16.718s5.224-14.629 5.224-21.943c0-13.584-5.224-25.078-14.629-33.437-9.404-9.404-22.988-13.584-40.751-13.584-14.629 0-27.167 3.135-37.616 9.404-10.449 6.269-17.763 14.629-22.988 25.078s-7.314 21.943-7.314 34.482c0 11.494 3.135 21.943 8.359 31.347 6.269 9.404 13.584 16.718 24.033 20.898 10.449 4.18 21.943 6.269 35.527 6.269 12.539 0 24.033-2.09 33.437-5.224 9.404-4.181 16.718-9.405 22.988-16.719zm-88.817-33.437c0 7.314 1.045 11.494 4.18 15.673 3.135 3.135 6.269 5.224 10.449 5.224 3.135 0 6.269-1.045 8.359-2.09s4.18-3.135 6.269-5.224c3.135-3.135 5.225-8.359 7.314-14.629 2.09-6.269 3.135-12.539 3.135-17.763 0-6.269-1.045-10.449-4.18-14.629-3.135-3.135-6.269-5.224-10.449-5.224s-9.404 2.09-12.539 5.224c-4.18 3.135-7.314 8.359-9.404 15.673-2.089 6.271-3.134 12.54-3.134 17.765z",
    fill: "#ff7058"
  }));
}

function getIconComponent(icon) {
  var icons = {
    email: /*#__PURE__*/React__default.createElement(Email, null),
    sms: /*#__PURE__*/React__default.createElement(SMS, null)
  };
  return icon && /*#__PURE__*/React__default.createElement(IconContainerUI, null, icons[icon]) || null;
}

function getLink(_ref) {
  var children = _ref.children,
      href = _ref.href,
      icon = _ref.icon,
      maxWidth = _ref.maxWidth,
      to = _ref.to,
      type = _ref.type;
  // const IconComponent = getIconComponent(icon)
  // return (
  //   <ButtonUI as="div" maxWidth={maxWidth} type={type} href={href}>
  //     {React.createElement(linkComponent, { to }, [children, IconComponent])}
  //   </ButtonUI>
  // )
  return null;
}

function getButton(_ref2) {
  var children = _ref2.children,
      icon = _ref2.icon,
      onClick = _ref2.onClick,
      maxWidth = _ref2.maxWidth,
      type = _ref2.type;
  var IconComponent = getIconComponent(icon);
  return /*#__PURE__*/React__default.createElement(ButtonUI, {
    maxWidth: maxWidth,
    type: type,
    onClick: onClick
  }, children, IconComponent);
}

function Button (_ref3) {
  var _ref3$as = _ref3.as,
      children = _ref3.children,
      _ref3$href = _ref3.href,
      href = _ref3$href === void 0 ? '' : _ref3$href,
      _ref3$icon = _ref3.icon,
      icon = _ref3$icon === void 0 ? '' : _ref3$icon,
      _ref3$linkComponent = _ref3.linkComponent,
      linkComponent = _ref3$linkComponent === void 0 ? null : _ref3$linkComponent,
      onClick = _ref3.onClick,
      _ref3$maxWidth = _ref3.maxWidth,
      maxWidth = _ref3$maxWidth === void 0 ? 250 : _ref3$maxWidth,
      _ref3$to = _ref3.to,
      to = _ref3$to === void 0 ? '' : _ref3$to,
      _ref3$type = _ref3.type,
      type = _ref3$type === void 0 ? 'button' : _ref3$type;
  return /*#__PURE__*/React__default.createElement(ButtonContainerUI, null, linkComponent && to.length ? getLink({
    children: children,
    href: href,
    linkComponent: linkComponent,
    icon: icon,
    maxWidth: maxWidth,
    to: to,
    type: type
  }) : getButton({
    children: children,
    icon: icon,
    maxWidth: maxWidth,
    onClick: onClick,
    type: type
  }));
}

function _templateObject3$4() {
  var data = _taggedTemplateLiteral(["\n  /* Position child elements relative to this element */\n  position: relative;\n\n  /* Create a pseudo element that uses padding-bottom to take up space */\n  &:after {\n    display: block;\n    content: '';\n    /* 16:9 aspect ratio */\n    padding-bottom: 56.25%;\n  }\n\n  /* Image is positioned absolutely relative to the parent element */\n  img {\n    /* Image should match parent box size */\n    position: absolute;\n    left: 0px;\n    top: 0px;\n    width: 100%;\n    height: 100%;\n  }\n"]);

  _templateObject3$4 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$5() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  padding: ", ";\n  width: 100%;\n"]);

  _templateObject2$5 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$9() {
  var data = _taggedTemplateLiteral(["\n  * {\n    box-sizing: border-box;\n  }\n  display: block;\n  background: #fff;\n  border: ", ";\n  line-height: 1.75;\n  width: 100%;\n  height: 100%;\n  background-color: ", ";\n\n  ", "\n"]);

  _templateObject$9 = function _templateObject() {
    return data;
  };

  return data;
}
var CardUI = styled__default('div')(_templateObject$9(), theme.border, theme.colors.light3, function (_ref) {
  var asLink = _ref.asLink;
  return asLink && "\n  :hover {\n    border: 1px solid ".concat(theme.colors.dark3, ";\n    background-color: ").concat(theme.colors.dark3, ";\n    cursor: pointer;\n  }\n  ");
});
var ContentUI$1 = styled__default('div')(_templateObject2$5(), "".concat(theme.unit(0.5), " ").concat(theme.unit(0.66)));
var AspectRatioUI = styled__default('div')(_templateObject3$4());

function Card(_ref) {
  var children = _ref.children,
      _ref$href = _ref.href,
      href = _ref$href === void 0 ? '' : _ref$href,
      _ref$maxWidth = _ref.maxWidth,
      maxWidth = _ref$maxWidth === void 0 ? null : _ref$maxWidth,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? '33.33%' : _ref$width;
  var asLink = !!href;

  function onClick() {
    if (asLink) {
      var loc = document.location.toString().split('#')[0];
      document.location = loc + href;
      return false;
    } else {
      event.preventDefault();
    }
  }

  return /*#__PURE__*/React__default.createElement(Grid.Col, {
    maxWidth: maxWidth,
    width: width
  }, /*#__PURE__*/React__default.createElement(CardUI, {
    asLink: asLink,
    onClick: onClick
  }, children));
}

Card.Image = function (_ref2) {
  var children = _ref2.children;
  return /*#__PURE__*/React__default.createElement(AspectRatioUI, null, children);
};

Card.Content = function (_ref3) {
  var alignItems = _ref3.alignItems,
      justifyContent = _ref3.justifyContent,
      children = _ref3.children;
  return /*#__PURE__*/React__default.createElement(ContentUI$1, {
    alignItems: alignItems,
    justifyContent: justifyContent
  }, children);
};

function Cards (_ref) {
  var alignItems = _ref.alignItems,
      children = _ref.children;
  return /*#__PURE__*/React__default.createElement(Grid, {
    alignItems: alignItems
  }, children);
}

function getSrcSets(sizes, data) {
  if (!data) {
    return null;
  }

  var srcSets = sizes.map(function (size) {
    if (!!data[size]) {
      return data[size];
    }
  });

  if (data && data.dimensions && data.url) {
    srcSets.push({
      dimensions: data.dimensions,
      url: data.url
    });
  }

  if (!srcSets.length) {
    return;
  } //remove empty values


  return srcSets.filter(function (value) {
    return Object.keys(value).length !== 0;
  }).map(function (_ref) {
    var url = _ref.url,
        width = _ref.dimensions.width;
    return "".concat(url, " ").concat(width, "w");
  }).join(',');
}

function _templateObject3$5() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n"]);

  _templateObject3$5 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$6() {
  var data = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  max-width: ", ";\n  width: ", ";\n  position: relative;\n  margin: 0 auto;\n  padding: ", " ", ";\n  width: 100%;\n  text-align: ", ";\n"]);

  _templateObject2$6 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$a() {
  var data = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  display: flex;\n  width: 100%;\n  background-color: ", ";\n  justify-content: center;\n  align-items: center;\n"]);

  _templateObject$a = function _templateObject() {
    return data;
  };

  return data;
}

var getBgColor = function getBgColor(_ref) {
  var background = _ref.background;

  if (background === 'transparent') {
    return 'transparent';
  } else if (background === 'light') {
    return theme.colors.light1;
  } else if (background === 'dark') {
    return theme.colors.dark6;
  } else {
    return '#fff';
  }
};

var getInnerWidth = function getInnerWidth(_ref2) {
  var innerWidth = _ref2.innerWidth;

  if (innerWidth === 'medium') {
    return '700px';
  } else if (innerWidth === 'small') {
    return theme.unit(18);
  } else {
    return theme.unit(33);
  }
};

var SectionWrapperUI = styled__default('section')(_templateObject$a(), getBgColor);
var SectionUI = styled__default('div')(_templateObject2$6(), getInnerWidth, getInnerWidth, theme.unit(0.75), theme.unit(0.375), function (_ref3) {
  var textAlign = _ref3.textAlign;
  return textAlign;
});
var SectionInnerUI = styled__default('div')(_templateObject3$5());

function Section(_ref) {
  var _ref$children = _ref.children,
      children = _ref$children === void 0 ? [] : _ref$children,
      _ref$textAlign = _ref.textAlign,
      textAlign = _ref$textAlign === void 0 ? 'left' : _ref$textAlign,
      _ref$background = _ref.background,
      background = _ref$background === void 0 ? 'default' : _ref$background,
      _ref$is_full_width = _ref.is_full_width,
      is_full_width = _ref$is_full_width === void 0 ? false : _ref$is_full_width,
      _ref$inner_width = _ref.inner_width,
      inner_width = _ref$inner_width === void 0 ? 'big' : _ref$inner_width;

  if (is_full_width) {
    return /*#__PURE__*/React__default.createElement(SectionWrapperUI, {
      background: background
    }, children);
  } else {
    return /*#__PURE__*/React__default.createElement(SectionWrapperUI, {
      background: background
    }, /*#__PURE__*/React__default.createElement(SectionUI, {
      textAlign: textAlign,
      innerWidth: inner_width
    }, /*#__PURE__*/React__default.createElement(SectionInnerUI, null, children)));
  }
}

function toProperCase (str) {
  return str.split(' ').map(function (w) {
    return w[0].toUpperCase() + w.substr(1).toLowerCase();
  }).join(' ');
}

var _short = require('short-uuid');

function formatTitle(title) {
  return toProperCase(title.replace(/_/g, ' '));
}

function getImage(image) {
  if (!image) {
    return;
  }

  return /*#__PURE__*/React__default.createElement(Card.Image, null, /*#__PURE__*/React__default.createElement("img", {
    loading: "lazy",
    src: image.url,
    srcSet: getSrcSets(['600x338', '960x540'], image)
  }));
}

function getContent(title, content) {
  return /*#__PURE__*/React__default.createElement(Card.Content, null, /*#__PURE__*/React__default.createElement(Title, {
    as: "h4",
    spaceAfter: "small"
  }, title[0].text), Object.entries(content).map(function (_content) {
    var _content2 = _slicedToArray(_content, 2),
        key = _content2[0],
        value = _content2[1];

    return /*#__PURE__*/React__default.createElement("div", {
      key: _short.generate()
    }, formatTitle(key), ": ", value);
  }));
}

function CardsSection (_ref) {
  var _ref$background = _ref.background,
      background = _ref$background === void 0 ? 'light' : _ref$background,
      cards = _ref.cards,
      _ref$showTitle = _ref.showTitle,
      showTitle = _ref$showTitle === void 0 ? true : _ref$showTitle,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? '' : _ref$title;
  return /*#__PURE__*/React__default.createElement(Section, {
    background: background
  }, showTitle ? /*#__PURE__*/React__default.createElement(Title, {
    as: "h3"
  }, title) : null, /*#__PURE__*/React__default.createElement(Cards, null, cards.map(function (card) {
    if (!card.data) {
      return;
    }

    var _card$data = card.data,
        image = _card$data.image,
        title = _card$data.title,
        rest = _objectWithoutProperties(_card$data, ["image", "title"]);

    return /*#__PURE__*/React__default.createElement(Card, {
      key: _short.generate()
    }, getImage(image), getContent(title, rest));
  })));
}

function _templateObject$b() {
  var data = _taggedTemplateLiteral(["\n  flex: 1 0 auto;\n  min-height: 100%;\n"]);

  _templateObject$b = function _templateObject() {
    return data;
  };

  return data;
}

var ContainerUI$2 = styled__default('div')(_templateObject$b());

function content (_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React__default.createElement(ContainerUI$2, null, children);
}

function _templateObject2$7() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  color: ", ";\n  cursor: pointer;\n  position: relative;\n  padding: 0;\n  &:after {\n    content: '';\n    color: ", ";\n    border: solid ", ";\n    border-width: 0 3px 3px 0;\n    display: inline-block;\n    padding: 4px;\n    transform: rotate(-135deg);\n    -webkit-transform: rotate(-135deg);\n    position: absolute;\n    right: 0;\n    top: 10px;\n  }\n  :focus &:after {\n  }\n  &:focus {\n    outline: none;\n  }\n  &::-webkit-details-marker {\n    display: none;\n  }\n"]);

  _templateObject2$7 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$c() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  border: ", ";\n  box-sizing: border-box;\n  margin-bottom: ", ";\n  padding: ", ";\n  padding-bottom: ", ";\n\n  background-color: #fff;\n  min-width: 100%;\n\n  div:last-child {\n    margin-bottom: -", ";\n  }\n\n  h4 {\n    width: calc(100% - 20px);\n  }\n\n  ", "\n"]);

  _templateObject$c = function _templateObject() {
    return data;
  };

  return data;
}
var DetailsUI = styled__default('details')(_templateObject$c(), theme.border, theme.unit(1), theme.unit(1), theme.unit(0.25), theme.unit(0.75), function (_ref) {
  var open = _ref.open;
  return open && "\n    summary:after {\n    transform: rotate(45deg);\n    -webkit-transform: rotate(45deg);\n    }\n    padding-bottom: ".concat(theme.unit(0.75), ";\n\n    ");
});
var SummaryUI = styled__default('summary')(_templateObject2$7(), theme.colors.dark4, theme.colors.dark1, theme.colors.dark4);

function Faq(_ref) {
  var children = _ref.children;
  return children;
}

var Details = /*#__PURE__*/function (_React$Component) {
  _inherits(Details, _React$Component);

  var _super = _createSuper(Details);

  function Details() {
    var _this;

    _classCallCheck(this, Details);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isOpen: false
    });

    _defineProperty(_assertThisInitialized(_this), "toggle", function (event) {
      event.preventDefault();

      _this.setState({
        isOpen: !_this.state.isOpen
      });
    });

    return _this;
  }

  _createClass(Details, [{
    key: "render",
    value: function render() {
      var children = this.props.children;
      return /*#__PURE__*/React__default.createElement(DetailsUI, {
        onClick: this.toggle,
        open: this.state.isOpen
      }, children);
    }
  }]);

  return Details;
}(React__default.Component);

Faq.Details = Details;

Faq.Summary = function (_ref2) {
  var children = _ref2.children;
  return /*#__PURE__*/React__default.createElement(SummaryUI, null, children);
};

function _templateObject$d() {
  var data = _taggedTemplateLiteral(["\n  background-color: ", ";\n  box-sizing: border-box;\n  padding: ", ";\n  width: 100%;\n"]);

  _templateObject$d = function _templateObject() {
    return data;
  };

  return data;
}
var FormUI = styled__default('div')(_templateObject$d(), theme.colors.light3, theme.unit(0.75));

function hexToRgb(hex) {
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? "".concat(parseInt(result[1], 16), ",").concat(parseInt(result[2], 16), ",").concat(parseInt(result[3], 16)) : null;
}

function _templateObject5$1() {
  var data = _taggedTemplateLiteral(["\n  content: ' ';\n  height: ", ";\n  width: 100%;\n  display: block;\n"]);

  _templateObject5$1 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$1() {
  var data = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  display: block;\n  font-size: ", ";\n  color: ", ";\n  height: ", ";\n  padding-top: ", ";\n"]);

  _templateObject4$1 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$6() {
  var data = _taggedTemplateLiteral(["\n  font-family: ", ";\n  font-size: ", ";\n  font-weight: 700;\n  ", "\n"]);

  _templateObject3$6 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$8() {
  var data = _taggedTemplateLiteral(["\n  border: ", ";\n  box-sizing: border-box;\n  display: block;\n  max-width: ", ";\n  width: 100%;\n  font-size: ", ";\n  margin: 0;\n  padding: ", ";\n  resize: none;\n  box-shadow: ", ";\n\n  &:focus {\n    border: 1px solid #fff;\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  ", "\n  text-align: ", ";\n\n\n", "\n\n"]);

  _templateObject2$8 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$e() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  height: auto;\n"]);

  _templateObject$e = function _templateObject() {
    return data;
  };

  return data;
}
var ContainerUI$3 = styled__default('div')(_templateObject$e());
var InputUI = styled__default('input')(_templateObject2$8(), function (_ref) {
  var isValid = _ref.isValid;
  return isValid ? "1px solid ".concat(theme.colors.dark4) : '1px solid #fff';
}, function (_ref2) {
  var maxWidth = _ref2.maxWidth;
  return maxWidth;
}, function (_ref3) {
  var size = _ref3.size;
  return size === 'big' ? theme.unit(0.75) : theme.unit(0.5);
}, theme.unit(0.4), function (_ref4) {
  var isValid = _ref4.isValid;
  return isValid ? "0 0 0 3px rgba(".concat(hexToRgb(theme.colors.error), ", 0.0)") : "0 0 0 3px rgba(".concat(hexToRgb(theme.colors.error), ", 0.4)");
}, function (_ref5) {
  var isValid = _ref5.isValid;
  return isValid ? "0 0 0 3px rgba(".concat(hexToRgb(theme.colors.dark3), ", 0.5)") : "0 0 0 3px rgba(".concat(hexToRgb(theme.colors.error), ", 0.7)");
}, function (_ref6) {
  var isSelectable = _ref6.isSelectable;
  return !isSelectable && "\n    pointer-events: none;\n    user-select: none;\n  ";
}, function (_ref7) {
  var textAlign = _ref7.textAlign;
  return textAlign;
}, function (_ref8) {
  var asHoneyPot = _ref8.asHoneyPot;
  return asHoneyPot && "\n    position: absolute;\n    left: 99999px;\n  ";
});
var LabelUI = styled__default('label')(_templateObject3$6(), theme.typography.fonts.font1, theme.unit(0.5), function (_ref9) {
  var asHoneyPot = _ref9.asHoneyPot;
  return asHoneyPot && "\n    position: absolute;\n    left: 99999px;\n  ";
});
var ValidationUI = styled__default('div')(_templateObject4$1(), theme.unit(0.5), theme.colors.error, theme.unit(1), theme.unit(0.125));
var SpaceUI = styled__default('div')(_templateObject5$1(), theme.unit(1));

function getLabel(label, affixLabel, asHoneyPot) {
  return /*#__PURE__*/React__default.createElement(LabelUI, {
    asHoneyPot: asHoneyPot
  }, label, " ", affixLabel);
}

function getComponent(asHoneyPot, type, onChange, isSelectable, isValid, maxWidth, name, readOnly, size, textAlign, value) {
  var props = {
    asHoneyPot: asHoneyPot,
    autoComplete: 'off',
    isSelectable: isSelectable,
    isValid: isValid,
    onChange: onChange,
    maxWidth: maxWidth,
    name: name,
    readOnly: readOnly,
    size: size,
    textAlign: textAlign,
    type: type,
    value: value
  };

  if (type === 'textarea') {
    return /*#__PURE__*/React__default.createElement(InputUI, _extends({
      as: "textarea",
      rows: "3"
    }, _objectSpread2({}, props)));
  } else {
    return /*#__PURE__*/React__default.createElement(InputUI, _objectSpread2({}, props));
  }
}

function Input(_ref) {
  var _ref$asHoneyPot = _ref.asHoneyPot,
      asHoneyPot = _ref$asHoneyPot === void 0 ? false : _ref$asHoneyPot,
      _ref$affixLabel = _ref.affixLabel,
      affixLabel = _ref$affixLabel === void 0 ? '' : _ref$affixLabel,
      isValidating = _ref.isValidating,
      _ref$isSelectable = _ref.isSelectable,
      isSelectable = _ref$isSelectable === void 0 ? true : _ref$isSelectable,
      label = _ref.label,
      onChange = _ref.onChange,
      name = _ref.name,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'input' : _ref$type,
      _ref$readOnly = _ref.readOnly,
      readOnly = _ref$readOnly === void 0 ? false : _ref$readOnly,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'normal' : _ref$size,
      _ref$textAlign = _ref.textAlign,
      textAlign = _ref$textAlign === void 0 ? 'left' : _ref$textAlign,
      _ref$validationRules = _ref.validationRules,
      validationRules = _ref$validationRules === void 0 ? '' : _ref$validationRules,
      validator = _ref.validator,
      _ref$value = _ref.value,
      value = _ref$value === void 0 ? '' : _ref$value,
      _ref$withContainer = _ref.withContainer,
      withContainer = _ref$withContainer === void 0 ? true : _ref$withContainer,
      _ref$maxWidth = _ref.maxWidth,
      maxWidth = _ref$maxWidth === void 0 ? '100%' : _ref$maxWidth;
  var hasValidation = !!validationRules.length;
  var validationMessage = hasValidation && validator.message(name, value, validationRules);
  var isValid = isValidating ? !!!validationMessage : true;

  var _onChange = function _onChange(event) {
    onChange(event.target.value);
  };

  var children = /*#__PURE__*/React__default.createElement("div", null, getLabel(label, affixLabel, asHoneyPot), getComponent(asHoneyPot, type, _onChange, isSelectable, isValid, maxWidth, name, readOnly, size, textAlign, value || ''), hasValidation ? /*#__PURE__*/React__default.createElement(ValidationUI, null, validator.message(name, value, validationRules)) : /*#__PURE__*/React__default.createElement(SpaceUI, null));
  return withContainer ? /*#__PURE__*/React__default.createElement(ContainerUI$3, null, children) : children;
}

function _templateObject2$9() {
  var data = _taggedTemplateLiteral(["\n  @media (min-width: ", ") and (max-width: ", ") {\n    flex-basis: 100%;\n    height: 4vh;\n  }\n"]);

  _templateObject2$9 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$f() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  flex-wrap: wrap;\n"]);

  _templateObject$f = function _templateObject() {
    return data;
  };

  return data;
}
var ContainerUI$4 = styled__default('div')(_templateObject$f());
var BreakUI = styled__default('div')(_templateObject2$9(), theme.breakPointsAsPixel.mobile, theme.breakPointsAsPixel.tablet);

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  outline: none;\n  position: absolute;\n  left: -99999999;\n  width: 0;\n  border: none;\n  opacity: 0;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  margin-left: -20px;\n  align-items: center;\n  display: flex;\n  label {\n    margin-left: 10px;\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  padding: 20px;\n  font-size: ", ";\n  ul {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n  }\n  li {\n    margin: 0;\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5$2() {
  var data = _taggedTemplateLiteral(["\n  font-size: ", ";\n  margin-bottom: 16px;\n  text-align: center;\n  font-weight: bold;\n  display: block;\n  margin: 0 auto;\n  text-align: center;\n  width: 100%;\n\n  @media (max-width: ", ") {\n    /* position: absolute; */\n    /* top: 0; */\n  }\n"]);

  _templateObject5$2 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: flex-start;\n"]);

  _templateObject4$2 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$7() {
  var data = _taggedTemplateLiteral(["\n  align-items: center;\n  background-color: ", ";\n  border: ", ";\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 0px;\n  height: auto;\n  margin-left: 1%;\n  position: relative;\n  text-align: center;\n  width: 24%;\n  z-index: 2;\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n\n    ", " {\n      filter: none;\n    }\n  }\n\n  &:hover {\n    cursor: pointer;\n    box-shadow: ", ";\n\n    ", " {\n      filter: none;\n    }\n  }\n  ", " {\n    filter: ", ";\n  }\n\n  box-shadow: ", ";\n\n  margin: 0 ", ";\n\n  @media (max-width: ", ") {\n    min-width: 100%;\n    margin: 0;\n    margin-bottom: ", ";\n    flex-direction: row;\n  }\n"]);

  _templateObject3$7 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$a() {
  var data = _taggedTemplateLiteral(["\n  background-image: url(", ");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  display: block;\n  height: 100%;\n  position: relative;\n  width: 100%;\n"]);

  _templateObject2$a = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$g() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n  height: ", ";\n  width: 100%;\n  position: relative;\n  background-repeat: no-repeat;\n  margin: ", ";\n\n  @media (max-width: ", ") {\n    height: 100%;\n    max-width: 20%;\n  }\n"]);

  _templateObject$g = function _templateObject() {
    return data;
  };

  return data;
}
var ImageContainerUI = styled__default('div')(_templateObject$g(), theme.unit(4.125), theme.unit(0.5), theme.breakPointsAsPixel.mobile);
var ImageUI = styled__default('div')(_templateObject2$a(), function (_ref) {
  var src = _ref.src;
  return src;
});
var ContainerUI$5 = styled__default('div')(_templateObject3$7(), function (_ref2) {
  var isSelected = _ref2.isSelected;
  return isSelected ? "rgba(".concat(hexToRgb(theme.colors['success']), ", .2)") : '#fff';
}, theme.border, function (_ref3) {
  var isSelected = _ref3.isSelected;
  return isSelected ? "0 0 0 3px rgba(".concat(hexToRgb(theme.colors['success']), ", 1)") : "0 0 0 3px rgba(".concat(hexToRgb(theme.colors['dark-3']), ", 0.5)");
}, ImageUI, function (_ref4) {
  var isSelected = _ref4.isSelected;
  return isSelected ? "0 0 0 3px rgba(".concat(hexToRgb(theme.colors['success']), ", 1)") : "0 0 0 3px rgba(".concat(hexToRgb(theme.colors['dark-3']), ", 0.5)");
}, ImageUI, ImageUI, function (_ref5) {
  var isSelected = _ref5.isSelected;
  return isSelected ? 'none' : "grayscale(95%)";
}, function (_ref6) {
  var isSelected = _ref6.isSelected;
  return isSelected ? "0 0 0 3px rgba(".concat(hexToRgb(theme.colors['success']), ", 0.5)") : 'none';
}, theme.unit(0.5), theme.breakPointsAsPixel.mobile, theme.unit(1));
var CardContentUI = styled__default('div')(_templateObject4$2());
var TitleUI$1 = styled__default('div')(_templateObject5$2(), theme.unit(0.75), theme.breakPointsAsPixel.mobile);
var ContentUI$2 = styled__default('div')(_templateObject6(), theme.unit(0.5));
var CardRadioInputContainerUI = styled__default('div')(_templateObject7());
var CardRadioInputUI = styled__default('input')(_templateObject8());

function CheckMark(_ref) {
  var _ref$isChecked = _ref.isChecked,
      isChecked = _ref$isChecked === void 0 ? false : _ref$isChecked;

  if (isChecked) {
    return /*#__PURE__*/React__default.createElement("svg", {
      version: "1.1",
      id: "Layer_1",
      viewBox: "0 0 444.237 444.237",
      height: "22",
      width: "22"
    }, /*#__PURE__*/React__default.createElement("path", {
      d: "M376.471,439.859H45.176C20.262,439.859,0,419.597,0,394.682V93.506 c0-24.915,20.262-45.176,45.176-45.176h331.294c24.915,0,45.176,20.262,45.176,45.176v301.176 C421.647,419.597,401.385,439.859,376.471,439.859z M60.235,379.623h301.176V108.565H60.235V379.623z"
    }), /*#__PURE__*/React__default.createElement("path", {
      d: "M218.353,349.506c-10.963,0-21.414-4.781-28.589-13.146L99.411,230.948 c-13.53-15.789-11.701-39.552,4.088-53.082c15.782-13.545,39.544-11.716,53.09,4.081l59.068,68.909L402.342,25.741 c28.898-40.478,59.144-18.063,30.118,22.588l-183.477,285.41c-6.731,9.419-17.416,15.217-28.973,15.729 C219.452,349.491,218.903,349.506,218.353,349.506z",
      fill: theme.colors['success']
    }));
  } else {
    return /*#__PURE__*/React__default.createElement("svg", {
      version: "1.1",
      id: "Layer_1",
      viewBox: "0 0 444.237 444.237",
      height: "22",
      width: "22"
    }, /*#__PURE__*/React__default.createElement("path", {
      d: "M376.471,439.859H45.176C20.262,439.859,0,419.597,0,394.682V93.506 c0-24.915,20.262-45.176,45.176-45.176h331.294c24.915,0,45.176,20.262,45.176,45.176v301.176 C421.647,419.597,401.385,439.859,376.471,439.859z M60.235,379.623h301.176V108.565H60.235V379.623z"
    }));
  }
}

var _short$1 = require('short-uuid');

function RadioCard (_ref) {
  var content = _ref.content,
      image = _ref.image,
      hover = _ref.hover,
      _onChange = _ref.onChange,
      selectedValue = _ref.selectedValue,
      title = _ref.title,
      value = _ref.value,
      types = _ref.types;
  var isChecked = selectedValue === value;
  return /*#__PURE__*/React__default.createElement(ContainerUI$5, {
    onClick: function onClick(e) {
      return _onChange(value);
    },
    isSelected: isChecked,
    tabIndex: 1,
    onKeyDown: function onKeyDown(event) {
      if (event.keyCode === 13) {
        event.preventDefault();

        _onChange(value);
      }
    }
  }, /*#__PURE__*/React__default.createElement(ImageContainerUI, null, /*#__PURE__*/React__default.createElement(ImageUI, {
    src: image,
    selected: isChecked
  })), /*#__PURE__*/React__default.createElement(CardContentUI, null, /*#__PURE__*/React__default.createElement(CardRadioInputContainerUI, null, /*#__PURE__*/React__default.createElement(CardRadioInputUI, {
    checked: isChecked,
    type: "radio",
    name: "property_type",
    onChange: function onChange(e) {
      return _onChange(value);
    },
    tabIndex: "-1"
  })), /*#__PURE__*/React__default.createElement(ContentUI$2, null, /*#__PURE__*/React__default.createElement(TitleUI$1, null, title, " ", /*#__PURE__*/React__default.createElement(CheckMark, {
    isChecked: isChecked
  })), content)));
}

var _short$2 = require('short-uuid');

var RadioCards = /*#__PURE__*/function (_React$Component) {
  _inherits(RadioCards, _React$Component);

  var _super = _createSuper(RadioCards);

  function RadioCards() {
    _classCallCheck(this, RadioCards);

    return _super.apply(this, arguments);
  }

  _createClass(RadioCards, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          cards = _this$props.cards,
          onChange = _this$props.onChange,
          value = _this$props.value;
      var children = cards.map(function (card, index) {
        return /*#__PURE__*/React__default.createElement(RadioCard, _extends({}, _objectSpread2({}, card), {
          key: _short$2.generate(),
          onChange: onChange,
          selectedValue: value
        }));
      });
      children.splice(2, 0, /*#__PURE__*/React__default.createElement(BreakUI, null));
      return /*#__PURE__*/React__default.createElement(ContainerUI$4, null, children);
    }
  }]);

  return RadioCards;
}(React__default.Component);

var simpleReactValidator_min = createCommonjsModule(function (module, exports) {
// Simple React Validator v1.4.6 | Created By Dockwa | MIT License | 2017 - Present
!function(e,t){module.exports=t(React__default);}(commonjsGlobal,function(s){function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,s=!1,a=void 0;try{for(var i,u=e[Symbol.iterator]();!(n=(i=u.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){s=!0,a=e;}finally{try{n||null==u.return||u.return();}finally{if(s)throw a}}return r}(e,t)||u(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=u(e))){var t=0,r=function(){};return {s:r,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,s,a=!0,i=!1;return {s:function(){n=e[Symbol.iterator]();},n:function(){var e=n.next();return a=e.done,e},e:function(e){i=!0,s=e;},f:function(){try{a||null==n.return||n.return();}finally{if(i)throw s}}}}function u(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return "Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function a(e){return (a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n);}return r}function d(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach(function(e){l(t,e,r[e]);}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e));});}return t}function o(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n);}}function e(e,t,r){return t&&o(e.prototype,t),r&&o(e,r),e}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var t=function(){function n(){var r=this,e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),l(this,"showMessageFor",function(e){r.visibleFields.includes(e)||r.visibleFields.push(e),r.helpers.forceUpdateIfNeeded();}),l(this,"hideMessageFor",function(e){var t=r.visibleFields.indexOf(e);-1<t&&r.visibleFields.splice(t,1),r.helpers.forceUpdateIfNeeded();}),l(this,"helpers",{parent:this,passes:function(e,t,r,n){return n.hasOwnProperty(e)?!(this.isRequired(e,n)||!this.isBlank(t))||!1!==n[e].rule(t,r,this.parent):(console.error("Rule Not Found: There is no rule with the name ".concat(e,".")),!0)},isRequired:function(e,t){return t[e].hasOwnProperty("required")&&t[e].required},isBlank:function(e){return null==e||this.testRegex(e,/^[\s]*$/)},normalizeValues:function(e,t){return [this.valueOrEmptyString(e),this.getValidation(t),this.getOptions(t)]},getValidation:function(e){return e===Object(e)&&Object.keys(e).length?Object.keys(e)[0]:e.split(":")[0]},getOptions:function(e){if(e===Object(e)&&Object.values(e).length){var t=Object.values(e)[0];return Array.isArray(t)?t:[t]}return 1<(t=e.split(":")).length?t[1].split(","):[]},valueOrEmptyString:function(e){return null==e?"":e},toSentence:function(e){return e.slice(0,-2).join(", ")+(e.slice(0,-2).length?", ":"")+e.slice(-2).join(2<e.length?", or ":" or ")},testRegex:function(e,t){return null!==e.toString().match(t)},forceUpdateIfNeeded:function(){this.parent.autoForceUpdate&&this.parent.autoForceUpdate.forceUpdate();},message:function(e,t,r,n){r.messages=r.messages||{};var s=r.messages[e]||r.messages.default||this.parent.messages[e]||this.parent.messages.default||n[e].message;return s.replace(":attribute",this.humanizeFieldName(t))},humanizeFieldName:function(e){return e.replace(/([A-Z])/g," $1").replace(/_/g," ").toLowerCase()},element:function(e,t){var r=t.element||this.parent.element;return r(e,t.className)},momentInstalled:function(){return !(!window||!window.moment)||(console.warn("Date validators require using momentjs https://momentjs.com and moment objects."),!1)},size:function(e,t){return "string"===t||void 0===t||"array"===t?e.length:"num"===t?parseFloat(e):void 0},sizeText:function(e){return "string"===e||void 0===e?" characters":"array"===e?" elements":""}}),this.fields={},this.visibleFields=[],this.errorMessages={},this.messagesShown=!1,this.rules=d({accepted:{message:"The :attribute must be accepted.",rule:function(e){return !0===e},required:!0},after:{message:"The :attribute must be after :date.",rule:function(e,t){return r.helpers.momentInstalled()&&moment.isMoment(e)&&e.isAfter(t[0],"day")},messageReplace:function(e,t){return e.replace(":date",t[0].format("MM/DD/YYYY"))}},after_or_equal:{message:"The :attribute must be after or on :date.",rule:function(e,t){return r.helpers.momentInstalled()&&moment.isMoment(e)&&e.isSameOrAfter(t[0],"day")},messageReplace:function(e,t){return e.replace(":date",t[0].format("MM/DD/YYYY"))}},alpha:{message:"The :attribute may only contain letters.",rule:function(e){return r.helpers.testRegex(e,/^[A-Z]*$/i)}},alpha_space:{message:"The :attribute may only contain letters and spaces.",rule:function(e){return r.helpers.testRegex(e,/^[A-Z\s]*$/i)}},alpha_num:{message:"The :attribute may only contain letters and numbers.",rule:function(e){return r.helpers.testRegex(e,/^[A-Z0-9]*$/i)}},alpha_num_space:{message:"The :attribute may only contain letters, numbers, and spaces.",rule:function(e){return r.helpers.testRegex(e,/^[A-Z0-9\s]*$/i)}},alpha_num_dash:{message:"The :attribute may only contain letters, numbers, and dashes.",rule:function(e){return r.helpers.testRegex(e,/^[A-Z0-9_-]*$/i)}},alpha_num_dash_space:{message:"The :attribute may only contain letters, numbers, dashes, and spaces.",rule:function(e){return r.helpers.testRegex(e,/^[A-Z0-9_-\s]*$/i)}},array:{message:"The :attribute must be an array.",rule:function(e){return Array.isArray(e)}},before:{message:"The :attribute must be before :date.",rule:function(e,t){return r.helpers.momentInstalled()&&moment.isMoment(e)&&e.isBefore(t[0],"day")},messageReplace:function(e,t){return e.replace(":date",t[0].format("MM/DD/YYYY"))}},before_or_equal:{message:"The :attribute must be before or on :date.",rule:function(e,t){return r.helpers.momentInstalled()&&moment.isMoment(e)&&e.isSameOrBefore(t[0],"day")},messageReplace:function(e,t){return e.replace(":date",t[0].format("MM/DD/YYYY"))}},between:{message:"The :attribute must be between :min and :max:type.",rule:function(e,t){return r.helpers.size(e,t[2])>=parseFloat(t[0])&&r.helpers.size(e,t[2])<=parseFloat(t[1])},messageReplace:function(e,t){return e.replace(":min",t[0]).replace(":max",t[1]).replace(":type",r.helpers.sizeText(t[2]))}},boolean:{message:"The :attribute must be a boolean.",rule:function(e){return !1===e||!0===e}},card_exp:{message:"The :attribute must be a valid expiration date.",rule:function(e){return r.helpers.testRegex(e,/^(([0]?[1-9]{1})|([1]{1}[0-2]{1}))\s?\/\s?(\d{2}|\d{4})$/)}},card_num:{message:"The :attribute must be a valid credit card number.",rule:function(e){return r.helpers.testRegex(e,/^\d{4}\s?\d{4,6}\s?\d{4,5}\s?\d{0,8}$/)}},currency:{message:"The :attribute must be a valid currency.",rule:function(e){return r.helpers.testRegex(e,/^\$?(\d{1,3})(\,?\d{3})*\.?\d{0,2}$/)}},date:{message:"The :attribute must be a date.",rule:function(e){return r.helpers.momentInstalled()&&moment.isMoment(e)}},date_equals:{message:"The :attribute must be on :date.",rule:function(e,t){return r.helpers.momentInstalled()&&moment.isMoment(e)&&e.isSame(t[0],"day")},messageReplace:function(e,t){return e.replace(":date",t[0].format("MM/DD/YYYY"))}},email:{message:"The :attribute must be a valid email address.",rule:function(e){return r.helpers.testRegex(e,/^[A-Z0-9.!#$%&'*+-/=?^_`{|}~]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i)}},in:{message:"The selected :attribute must be :values.",rule:function(e,t){return t.includes(e)},messageReplace:function(e,t){return e.replace(":values",r.helpers.toSentence(t))}},integer:{message:"The :attribute must be an integer.",rule:function(e){return r.helpers.testRegex(e,/^\d*$/)}},max:{message:"The :attribute may not be greater than :max:type.",rule:function(e,t){return r.helpers.size(e,t[1])<=parseFloat(t[0])},messageReplace:function(e,t){return e.replace(":max",t[0]).replace(":type",r.helpers.sizeText(t[1]))}},min:{message:"The :attribute must be at least :min:type.",rule:function(e,t){return r.helpers.size(e,t[1])>=parseFloat(t[0])},messageReplace:function(e,t){return e.replace(":min",t[0]).replace(":type",r.helpers.sizeText(t[1]))}},not_in:{message:"The selected :attribute must not be :values.",rule:function(e,t){return !t.includes(e)},messageReplace:function(e,t){return e.replace(":values",r.helpers.toSentence(t))}},not_regex:{message:"The :attribute must not match the required pattern.",rule:function(e,t){return !r.helpers.testRegex(e,"string"==typeof t[0]||t[0]instanceof String?new RegExp(t[0]):t[0])}},numeric:{message:"The :attribute must be a number.",rule:function(e){return r.helpers.testRegex(e,/^\-?\d*\.?\d+$/)}},phone:{message:"The :attribute must be a valid phone number.",rule:function(e){return r.helpers.testRegex(e,/^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)$/)&&!r.helpers.testRegex(e,/^\b(\d)\1{8,}\b$/)}},regex:{message:"The :attribute must match the required pattern.",rule:function(e,t){return r.helpers.testRegex(e,"string"==typeof t[0]||t[0]instanceof String?new RegExp(t[0]):t[0])}},required:{message:"The :attribute field is required.",rule:function(e){return !r.helpers.isBlank(e)},required:!0},size:{message:"The :attribute must be :size:type.",rule:function(e,t){return r.helpers.size(e,t[1])==parseFloat(t[0])},messageReplace:function(e,t){return e.replace(":size",t[0]).replace(":type",r.helpers.sizeText(t[1]))}},string:{message:"The :attribute must be a string.",rule:function(e){return a(e)===a("string")}},typeof:{message:"The :attribute is not the correct type of :type.",rule:function(e,t){return a(e)===a(t[0])},messageReplace:function(e,t){return e.replace(":type",a(t[0]))}},url:{message:"The :attribute must be a url.",rule:function(e){return r.helpers.testRegex(e,/^https?:\/\/[-a-z0-9@:%._\+~#=]{1,256}\.[a-z0-9()]{2,6}\b([-a-z0-9()@:%_\+.~#?&//=]*)$/i)}}},e.validators||{}),e.locale&&!n.locales.hasOwnProperty(e.locale)&&console.warn("Locale not found! Make sure it is spelled correctly and the locale file is loaded.");var t=n.locales[e.locale]||{};Object.keys(this.rules).forEach(function(e){r.rules[e].message=t[e]||r.rules[e].message;}),this.messages=e.messages||{},this.className=e.className,this.autoForceUpdate=e.autoForceUpdate||!1,!1===e.element?this.element=function(e){return e}:e.hasOwnProperty("element")?this.element=e.element:"object"===("undefined"==typeof navigator?"undefined":a(navigator))&&"ReactNative"===navigator.product?this.element=function(e){return e}:this.element=function(e,t){return s.createElement("div",{className:t||r.className||"srv-validation-message"},e)};}return e(n,null,[{key:"addLocale",value:function(e,t){this.locales[e]=t;}}]),e(n,[{key:"getErrorMessages",value:function(){return this.errorMessages}},{key:"showMessages",value:function(){this.messagesShown=!0,this.helpers.forceUpdateIfNeeded();}},{key:"hideMessages",value:function(){this.messagesShown=!1,this.helpers.forceUpdateIfNeeded();}},{key:"allValid",value:function(){for(var e in this.fields)if(!1===this.fieldValid(e))return !1;return !0}},{key:"fieldValid",value:function(e){return this.fields.hasOwnProperty(e)&&!0===this.fields[e]}},{key:"purgeFields",value:function(){this.fields={},this.errorMessages={};}},{key:"messageWhenPresent",value:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};if(!this.helpers.isBlank(e)&&this.messagesShown)return this.helpers.element(e,t)}},{key:"messageAlways",value:function(e,t){var r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};if(console.warn("The messageAlways() method is deprecated in SimpleReactValidator. Please see the documentation and switch to the messageWhenPresent() method."),t&&this.messagesShown)return this.helpers.element(t,r)}},{key:"check",value:function(e,t){var r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};Array.isArray(t)||(t=t.split("|"));var n,s=r.validators?d({},this.rules,{},r.validators):this.rules,a=p(t);try{for(a.s();!(n=a.n()).done;){var i=n.value,u=f(this.helpers.normalizeValues(e,i),3),o=u[0],l=u[1],c=u[2];if(!this.helpers.passes(l,o,c,s))return !1}}catch(e){a.e(e);}finally{a.f();}return !0}},{key:"message",value:function(e,t,r){var n=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{};this.errorMessages[e]=null,this.fields[e]=!0,Array.isArray(r)||(r=r.split("|"));var s,a=n.validators?d({},this.rules,{},n.validators):this.rules,i=p(r);try{for(i.s();!(s=i.n()).done;){var u=s.value,o=f(this.helpers.normalizeValues(t,u),3),l=o[0],c=o[1],m=o[2];if(!this.helpers.passes(c,l,m,a)){this.fields[e]=!1;var h=this.helpers.message(c,e,n,a);if(0<m.length&&a[c].hasOwnProperty("messageReplace")&&(h=a[c].messageReplace(h,m)),this.errorMessages[e]=h,this.messagesShown||this.visibleFields.includes(e))return this.helpers.element(h,n)}}}catch(e){i.e(e);}finally{i.f();}}}]),n}();return l(t,"version","1.4.6"),l(t,"locales",{en:{}}),t});
});

function _templateObject2$b() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  margin-bottom: ", ";\n\n  div {\n    margin-left: ", ";\n  }\n"]);

  _templateObject2$b = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$h() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: flex-start;\n  margin: 0;\n"]);

  _templateObject$h = function _templateObject() {
    return data;
  };

  return data;
}
var TitleUI$2 = styled__default('h3')(_templateObject$h());
var TitleContainerUI = styled__default('div')(_templateObject2$b(), theme.unit(1), theme.unit(0.75));

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

var InputSlider = /*#__PURE__*/function (_React$Component) {
  _inherits(InputSlider, _React$Component);

  var _super = _createSuper(InputSlider);

  function InputSlider() {
    _classCallCheck(this, InputSlider);

    return _super.apply(this, arguments);
  }

  _createClass(InputSlider, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          defaultValue = _this$props.defaultValue,
          onChange = _this$props.onChange,
          value = _this$props.value;
      !value && onChange(defaultValue);
    }
  }, {
    key: "formatString",
    value: function formatString() {
      var _this$props2 = this.props,
          formatString = _this$props2.formatString,
          value = _this$props2.value;

      if (formatString === 'currency') {
        return "$".concat(numberWithCommas(value));
      } else if (formatString === 'percent') {
        return value + '%';
      } else {
        return value;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          axis = _this$props3.axis,
          label = _this$props3.label,
          maxWidth = _this$props3.maxWidth,
          max = _this$props3.max,
          min = _this$props3.min,
          name = _this$props3.name,
          _onChange = _this$props3.onChange,
          step = _this$props3.step,
          value = _this$props3.value;
      return /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement(TitleContainerUI, null, /*#__PURE__*/React__default.createElement(TitleUI$2, null, label), /*#__PURE__*/React__default.createElement(Input, {
        isSelectable: false,
        value: value && this.formatString(value),
        readOnly: true,
        maxWidth: maxWidth,
        size: "big",
        textAlign: "center",
        withContainer: false
      })), /*#__PURE__*/React__default.createElement(Slider, {
        axis: axis,
        onChange: function onChange(value) {
          return _onChange(value.x);
        },
        name: name,
        xmin: min,
        xmax: max,
        xstep: step,
        x: value,
        styles: {
          track: {
            backgroundColor: theme.colors['dark-4'],
            width: '100%',
            height: 15
          },
          active: {
            backgroundColor: theme.colors['success']
          },
          thumb: {
            width: 32,
            height: 32
          }
        }
      }));
    }
  }]);

  return InputSlider;
}(React__default.Component);

_defineProperty(InputSlider, "defaultProps", {
  axis: 'x',
  formatString: '',
  label: '',
  maxWidth: '4ch',
  max: 100,
  min: 0,
  step: 5,
  value: 0
});

function Header(_ref) {
  var step = _ref.step,
      steps = _ref.steps;
  return /*#__PURE__*/React__default.createElement("div", null, step + 1, " of ", steps);
}

function _templateObject3$8() {
  var data = _taggedTemplateLiteral(["\n  align-self: flex-start;\n  justify-self: flex-start;s\n"]);

  _templateObject3$8 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$c() {
  var data = _taggedTemplateLiteral(["\n  float: right;\n"]);

  _templateObject2$c = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$i() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n  border: 1px solid red;\n"]);

  _templateObject$i = function _templateObject() {
    return data;
  };

  return data;
}
var ContainerUI$6 = styled__default('div')(_templateObject$i());
var ButtonUI$1 = styled__default(Button)(_templateObject2$c());
var GoBackUI = styled__default('a')(_templateObject3$8());

function Footer(_ref) {
  var onNextStep = _ref.onNextStep,
      onPrevStep = _ref.onPrevStep,
      step = _ref.step;
  return /*#__PURE__*/React__default.createElement(ContainerUI$6, null, step > 0 ? /*#__PURE__*/React__default.createElement(GoBackUI, {
    href: "#",
    onClick: onPrevStep
  }, "Go Back") : null, /*#__PURE__*/React__default.createElement(ButtonUI$1, {
    onClick: onNextStep
  }, "Next"));
}

function Step(props) {
  var children = props.children;
  return React__default.Children.map(children, function (child, index) {
    return React__default.cloneElement(child, _objectSpread2(_objectSpread2({}, child.props), {}, {
      onChange: props.onChange.bind(null, child.props.name),
      value: props.values[child.props.name]
    }));
  });
}

Step.Footer = Footer;
Step.Header = Header;

var Form = /*#__PURE__*/function (_React$Component) {
  _inherits(Form, _React$Component);

  var _super = _createSuper(Form);

  function Form(props) {
    var _this;

    _classCallCheck(this, Form);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "onFieldChange", function (name, value) {
      _this.setState(_defineProperty({}, name, value));
    });

    _defineProperty(_assertThisInitialized(_this), "onNextStep", function () {
      _this.setState({
        step: _this.state.step + 1
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onPrevStep", function (event) {
      event.preventDefault();

      _this.setState({
        step: _this.state.step - 1
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onSubmit", function (event) {
      event.preventDefault();

      if (_this.validator.allValid()) {
        _this.props.onSubmit(_this.state);

        return true;
      } else {
        _this.setState({
          isValidating: true
        });

        _this.validator.showMessages();

        return false;
      }
    });

    _this.validator = new simpleReactValidator_min({
      autoForceUpdate: _assertThisInitialized(_this)
    });
    _this.state = {
      isValidating: false,
      step: 0
    };
    return _this;
  }

  _createClass(Form, [{
    key: "renderForm",
    value: function renderForm() {
      var _this2 = this;

      var children = this.props.children;
      return /*#__PURE__*/React__default.createElement(FormUI, null, /*#__PURE__*/React__default.createElement("form", {
        onSubmit: this.onSubmit
      }, React__default.Children.map(children, function (child) {
        return React__default.cloneElement(child, _objectSpread2(_objectSpread2({}, child.props), {}, {
          isValidating: _this2.state.isValidating,
          onChange: _this2.onFieldChange.bind(_this2, child.props.name),
          validator: _this2.validator,
          value: _this2.state[child.props.name]
        }));
      })));
    }
  }, {
    key: "renderMultiStepForm",
    value: function renderMultiStepForm() {
      var _this3 = this;

      var children = this.props.children;

      var _children = React__default.Children.map(children, function (child, index) {
        if (_this3.state.step === index) {
          return React__default.cloneElement(child, _objectSpread2(_objectSpread2({}, child.props), {}, {
            isValidating: _this3.state.isValidating,
            onChange: _this3.onFieldChange,
            step: index + 1,
            validator: _this3.validator,
            values: _this3.state
          }));
        }
      });

      return /*#__PURE__*/React__default.createElement(FormUI, null, /*#__PURE__*/React__default.createElement(Step.Header, {
        step: this.state.step,
        steps: React__default.Children.count(children)
      }), /*#__PURE__*/React__default.createElement("form", {
        onSubmit: this.onSubmit
      }, _children), /*#__PURE__*/React__default.createElement(Step.Footer, {
        onNextStep: this.onNextStep,
        onPrevStep: this.onPrevStep,
        step: this.state.step
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var isMultiStep = this.props.isMultiStep;

      if (isMultiStep) {
        return this.renderMultiStepForm();
      } else {
        return this.renderForm();
      }
    }
  }]);

  return Form;
}(React__default.Component);

_defineProperty(Form, "defaultProps", {
  isMultiStep: false
});

Form.Input = Input;
Form.Button = Button;
Form.RadioCards = RadioCards;
Form.Slider = InputSlider;
Form.Step = Step;

function _templateObject7$1() {
  var data = _taggedTemplateLiteral(["\n  :active,\n  :link,\n  :hover,\n  :visited {\n    color: #fff;\n  }\n"]);

  _templateObject7$1 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6$1() {
  var data = _taggedTemplateLiteral(["\n  margin: 0;\n  padding: 0;\n  display: block;\n\n  @media (max-width: ", ") {\n    display: inline-block;\n    margin: 0 ", ";\n  }\n"]);

  _templateObject6$1 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5$3() {
  var data = _taggedTemplateLiteral(["\n  margin: 0;\n  padding: 0;\n  list-style: none;\n\n  li {\n    a:active,\n    a:link,\n    a:hover,\n    a:visited {\n      color: #fff;\n    }\n  }\n"]);

  _templateObject5$3 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$3() {
  var data = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  display: flex;\n  justify-content: space-between;\n  background-color: ", ";\n  padding: ", ";\n  padding-right: ", ";\n  font-family: ", ";\n\n  @media (max-width: ", ") {\n    flex-direction: column;\n    text-align: center;\n  }\n\n  ", " {\n    color: #fff;\n    white-space: nowrap;\n    font-style: normal;\n    a:active,\n    a:visited,\n    a:hover,\n    a:link {\n      color: #fff;\n      text-decoration: none;\n      font-family: ", ";\n    }\n    a:first-child {\n      text-transform: uppercase;\n      font-size: ", ";\n    }\n    font-family: ", ";\n  }\n\n  ", " {\n    font-size: ", ";\n    color: #fff;\n    margin-right: ", ";\n  }\n"]);

  _templateObject4$3 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$9() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject3$9 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$d() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject2$d = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$j() {
  var data = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  display: block;\n  background-color: ", ";\n  max-width: 100%;\n  flex-shrink: 0;\n"]);

  _templateObject$j = function _templateObject() {
    return data;
  };

  return data;
}
var ContainerUI$7 = styled__default('footer')(_templateObject$j(), theme.colors.dark1);
var AddressUI = styled__default('address')(_templateObject2$d());
var FinePrintUI = styled__default('div')(_templateObject3$9());
var InnerUI = styled__default('div')(_templateObject4$3(), theme.colors.dark1, "".concat(theme.unit(0.5), " ").concat(theme.unit(0.75)), theme.unit(1), theme.typography.fonts.font1, theme.breakPointsAsPixel.mobile, AddressUI, theme.typography.fonts.font1, theme.unit(0.65), theme.typography.fonts.font1, FinePrintUI, theme.unit(0.4), theme.unit(1));
var LinksUI = styled__default('ul')(_templateObject5$3());
var LinkItemUI = styled__default('li')(_templateObject6$1(), theme.breakPointsAsPixel.mobile, theme.unit(0.25));
var LinkUI = styled__default('a')(_templateObject7$1());

function Footer$1(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React__default.createElement(ContainerUI$7, null, /*#__PURE__*/React__default.createElement(InnerUI, null, children));
}

Footer$1.Address = AddressUI;
Footer$1.FinePrint = FinePrintUI;
Footer$1.Links = LinksUI;

Footer$1.Link = function (_ref2) {
  var children = _ref2.children,
      href = _ref2.href;
  return /*#__PURE__*/React__default.createElement(LinkItemUI, null, children);
};

var FontLoader = /*#__PURE__*/function (_React$Component) {
  _inherits(FontLoader, _React$Component);

  var _super = _createSuper(FontLoader);

  function FontLoader() {
    var _this;

    _classCallCheck(this, FontLoader);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isReady: false
    });

    return _this;
  }

  _createClass(FontLoader, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      // react static blows up when rollup trys to hoist this, need to work on a better way to
      // build things between react static and proto lib
      if (typeof window !== 'undefined' && typeof document !== 'undefined') {
        var FontFaceObserver = function () {
          function l(a, b) {
            document.addEventListener ? a.addEventListener('scroll', b, !1) : a.attachEvent('scroll', b);
          }

          function m(a) {
            document.body ? a() : document.addEventListener ? document.addEventListener('DOMContentLoaded', function c() {
              document.removeEventListener('DOMContentLoaded', c);
              a();
            }) : document.attachEvent('onreadystatechange', function k() {
              if ('interactive' == document.readyState || 'complete' == document.readyState) document.detachEvent('onreadystatechange', k), a();
            });
          }

          function t(a) {
            this.a = document.createElement('div');
            this.a.setAttribute('aria-hidden', 'true');
            this.a.appendChild(document.createTextNode(a));
            this.b = document.createElement('span');
            this.c = document.createElement('span');
            this.h = document.createElement('span');
            this.f = document.createElement('span');
            this.g = -1;
            this.b.style.cssText = 'max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;';
            this.c.style.cssText = 'max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;';
            this.f.style.cssText = 'max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;';
            this.h.style.cssText = 'display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;';
            this.b.appendChild(this.h);
            this.c.appendChild(this.f);
            this.a.appendChild(this.b);
            this.a.appendChild(this.c);
          }

          function u(a, b) {
            a.a.style.cssText = 'max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:' + b + ';';
          }

          function z(a) {
            var b = a.a.offsetWidth,
                c = b + 100;
            a.f.style.width = c + 'px';
            a.c.scrollLeft = c;
            a.b.scrollLeft = a.b.scrollWidth + 100;
            return a.g !== b ? (a.g = b, !0) : !1;
          }

          function A(a, b) {
            function c() {
              var a = k;
              z(a) && a.a.parentNode && b(a.g);
            }

            var k = a;
            l(a.b, c);
            l(a.c, c);
            z(a);
          }

          function B(a, b) {
            var c = b || {};
            this.family = a;
            this.style = c.style || 'normal';
            this.weight = c.weight || 'normal';
            this.stretch = c.stretch || 'normal';
          }

          var C = null,
              D = null,
              E = null,
              F = null;

          function G() {
            if (null === D) if (J() && /Apple/.test(window.navigator.vendor)) {
              var a = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent);
              D = !!a && 603 > parseInt(a[1], 10);
            } else D = !1;
            return D;
          }

          function J() {
            null === F && (F = !!document.fonts);
            return F;
          }

          function K() {
            if (null === E) {
              var a = document.createElement('div');

              try {
                a.style.font = 'condensed 100px sans-serif';
              } catch (b) {}

              E = '' !== a.style.font;
            }

            return E;
          }

          function L(a, b) {
            return [a.style, a.weight, K() ? a.stretch : '', '100px', b].join(' ');
          }

          B.prototype.load = function (a, b) {
            var c = this,
                k = a || 'BESbswy',
                r = 0,
                n = b || 3e3,
                H = new Date().getTime();
            return new Promise(function (a, b) {
              if (J() && !G()) {
                var M = new Promise(function (a, b) {
                  function e() {
                    new Date().getTime() - H >= n ? b(Error('' + n + 'ms timeout exceeded')) : document.fonts.load(L(c, '"' + c.family + '"'), k).then(function (c) {
                      1 <= c.length ? a() : setTimeout(e, 25);
                    }, b);
                  }

                  e();
                }),
                    N = new Promise(function (a, c) {
                  r = setTimeout(function () {
                    c(Error('' + n + 'ms timeout exceeded'));
                  }, n);
                });
                Promise.race([N, M]).then(function () {
                  clearTimeout(r);
                  a(c);
                }, b);
              } else m(function () {
                function v() {
                  var b;
                  if (b = -1 != f && -1 != g || -1 != f && -1 != h || -1 != g && -1 != h) (b = f != g && f != h && g != h) || (null === C && (b = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent), C = !!b && (536 > parseInt(b[1], 10) || 536 === parseInt(b[1], 10) && 11 >= parseInt(b[2], 10))), b = C && (f == w && g == w && h == w || f == x && g == x && h == x || f == y && g == y && h == y)), b = !b;
                  b && (d.parentNode && d.parentNode.removeChild(d), clearTimeout(r), a(c));
                }

                function I() {
                  if (new Date().getTime() - H >= n) d.parentNode && d.parentNode.removeChild(d), b(Error('' + n + 'ms timeout exceeded'));else {
                    var a = document.hidden;
                    if (!0 === a || void 0 === a) f = e.a.offsetWidth, g = p.a.offsetWidth, h = q.a.offsetWidth, v();
                    r = setTimeout(I, 50);
                  }
                }

                var e = new t(k),
                    p = new t(k),
                    q = new t(k),
                    f = -1,
                    g = -1,
                    h = -1,
                    w = -1,
                    x = -1,
                    y = -1,
                    d = document.createElement('div');
                d.dir = 'ltr';
                u(e, L(c, 'sans-serif'));
                u(p, L(c, 'serif'));
                u(q, L(c, 'monospace'));
                d.appendChild(e.a);
                d.appendChild(p.a);
                d.appendChild(q.a);
                document.body.appendChild(d);
                w = e.a.offsetWidth;
                x = p.a.offsetWidth;
                y = q.a.offsetWidth;
                I();
                A(e, function (a) {
                  f = a;
                  v();
                });
                u(e, L(c, '"' + c.family + '",sans-serif'));
                A(p, function (a) {
                  g = a;
                  v();
                });
                u(p, L(c, '"' + c.family + '",serif'));
                A(q, function (a) {
                  h = a;
                  v();
                });
                u(q, L(c, '"' + c.family + '",monospace'));
              });
            });
          };

          return B;
        }();

        var font = new FontFaceObserver('Roboto');
        font.load().then(function () {
          _this2.setState({
            isReady: true
          });
        });
      } else {
        this.setState({
          isReady: true
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      var isReady = this.state.isReady;
      return !isReady ? null : children;
    }
  }]);

  return FontLoader;
}(React__default.Component);

function _templateObject$k() {
  var data = _taggedTemplateLiteral(["\n  border-top: 1px solid ", ";\n"]);

  _templateObject$k = function _templateObject() {
    return data;
  };

  return data;
}
var HRUI = styled__default('hr')(_templateObject$k(), theme.colors.dark4);

function Line () {
  return /*#__PURE__*/React__default.createElement(HRUI, null);
}

function _templateObject7$2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  position: relative;\n\n  ", ", ", " a {\n    animation: ", ";\n    color: ", ";\n  }\n  ", " ", " a {\n    animation: 'none';\n    color: #fff;\n  }\n"]);

  _templateObject7$2 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6$2() {
  var data = _taggedTemplateLiteral(["\n  padding: ", " ", ";\n  background-color: ", ";\n"]);

  _templateObject6$2 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5$4() {
  var data = _taggedTemplateLiteral(["\n  align-items: center;\n  box-sizing: border-box;\n  display: flex;\n  font-family: ", ";\n  font-weight: 500;\n  justify-content: center;\n  height: ", ";\n  a:visited,\n  a:link {\n    text-decoration: none;\n  }\n  padding: 0 ", ";\n  a:active,\n  a:hover {\n    cursor: pointer;\n    text-decoration: underline;\n  }\n  text-transform: uppercase;\n"]);

  _templateObject5$4 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$4() {
  var data = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: ", ";\n  padding: ", ";\n  padding-left: 0;\n\n  img {\n    max-height: 100%;\n  }\n"]);

  _templateObject4$4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$a() {
  var data = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  cursor: pointer;\n  display: block;\n  height: ", ";\n  position: relative;\n  float: left;\n\n  ul {\n    background-color: #efefef;\n    box-sizing: border-box;\n    display: none;\n    list-style: none;\n    margin: 0;\n    width: 250px;\n    padding-left: 0;\n    position: relative;\n    z-index: 1;\n    border: ", ";\n    cursor: pointer;\n    position: absolute;\n    margin: 0;\n    left: 50%;\n    transform: translatex(-50%);\n    top: 85px;\n\n    li {\n      box-sizing: border-box;\n      cursor: pointer;\n      margin-bottom: 0;\n      margin-left: 0;\n      a {\n        :hover {\n          background-color: ", ";\n          text-decoration: none;\n        }\n        box-sizing: border-box;\n        display: block;\n        font-family: ", ";\n        margin-left: 0;\n        min-width: 100%;\n        padding: ", ";\n      }\n    }\n\n    :before {\n      content: '';\n      position: absolute;\n      left: 50%;\n      transform: translatex(-50%);\n      top: -13px;\n      width: 0;\n      height: 0;\n      border-style: solid;\n      border-width: 0 13px 13px 13px;\n      border-color: transparent transparent #efefef transparent;\n      z-index: 9999;\n    }\n  }\n\n  :hover {\n    ul {\n      display: block;\n    }\n  }\n"]);

  _templateObject3$a = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$e() {
  var data = _taggedTemplateLiteral(["\n  align-items: center;\n  background-color: transparent;\n  box-sizing: border-box;\n  display: flex;\n  height: ", ";\n  flex-direction: row;\n  justify-content: space-between;\n  width: 100%;\n  z-index: 1;\n  padding-right: ", ";\n  padding-left: ", ";\n"]);

  _templateObject2$e = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$l() {
  var data = _taggedTemplateLiteral(["\n  background-color: transparent;\n  box-sizing: border-box;\n  display: block;\n  height: ", ";\n  width: 100%;\n  position: relative;\n  top: 0;\n  z-index: 1;\n  background-color: ", ";\n\n  border-bottom: ", ";\n"]);

  _templateObject$l = function _templateObject() {
    return data;
  };

  return data;
}

var pulseColor = function pulseColor(_style) {
  console.log('flip color', _style);
  return styled.keyframes(["to{color:", ";}from{color:", ";}"], _style === 'light' ? '#fff ' : '#000', _style === 'light' ? '#000' : '#fff');
};

var ContainerUI$8 = styled__default('header')(_templateObject$l(), theme.layout.desktop.headerHeight, function (_ref) {
  var isTransparent = _ref.isTransparent;
  return isTransparent ? 'transparent' : '#f7f7f7';
}, function (_ref2) {
  var isTransparent = _ref2.isTransparent;
  return isTransparent ? '1px solid transparent' : '1px solid #d3d3d3';
});
var ContainerInnerUI = styled__default('div')(_templateObject2$e(), theme.layout.desktop.headerHeight, theme.unit(1.5), theme.unit(1.5));
var DropdownUI = styled__default('div')(_templateObject3$a(), theme.layout.desktop.headerHeight, theme.border, theme.colors.dark5, theme.typography.fonts.font1, theme.unit(0.25));
var BrandUI = styled__default('div')(_templateObject4$4(), theme.layout.desktop.headerHeight, theme.unit(0.5));
var LinkUI$1 = styled__default('div')(_templateObject5$4(), theme.typography.fonts.font1, theme.layout.desktop.headerHeight, theme.unit(0.25));
var HighlightUI = styled__default('div')(_templateObject6$2(), theme.unit(0.075), theme.unit(0.5), theme.colors.dark2);
var MenuUI = styled__default('div')(_templateObject7$2(), LinkUI$1, LinkUI$1, function (_ref3) {
  var animate = _ref3.animate,
      style = _ref3.style;
  return animate ? styled.css(["", " 1s linear 1"], pulseColor(style)) : 'none';
}, function (_ref4) {
  var style = _ref4.style;
  return style === 'light' ? '#fff' : '#000';
}, LinkUI$1, HighlightUI);

var Container = /*#__PURE__*/function (_React$Component) {
  _inherits(Container, _React$Component);

  var _super = _createSuper(Container);

  function Container() {
    _classCallCheck(this, Container);

    return _super.apply(this, arguments);
  }

  _createClass(Container, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          isTransparent = _this$props.isTransparent,
          style = _this$props.style;
      return /*#__PURE__*/React__default.createElement(ContainerUI$8, {
        style: style,
        isTransparent: isTransparent
      }, /*#__PURE__*/React__default.createElement(ContainerInnerUI, null, React__default.Children.map(children, function (child) {
        return React__default.cloneElement(child, _objectSpread2(_objectSpread2({}, child.props), {}, {
          style: style
        }));
      })));
    }
  }]);

  return Container;
}(React__default.Component);

var Brand = function Brand(_ref) {
  var children = _ref.children,
      _style = _ref._style;
  return /*#__PURE__*/React__default.createElement(BrandUI, {
    style: _style
  }, children);
};

function Dropdown(_ref2) {
  var children = _ref2.children,
      text = _ref2.text;
  return /*#__PURE__*/React__default.createElement(DropdownUI, null, /*#__PURE__*/React__default.createElement(LinkUI$1, null, text), /*#__PURE__*/React__default.createElement("ul", null, React__default.Children.map(children, function (child) {
    return /*#__PURE__*/React__default.createElement("li", null, React__default.cloneElement(child, {}));
  })));
}

var Link = /*#__PURE__*/function (_React$Component2) {
  _inherits(Link, _React$Component2);

  var _super2 = _createSuper(Link);

  function Link() {
    _classCallCheck(this, Link);

    return _super2.apply(this, arguments);
  }

  _createClass(Link, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          asHighlight = _this$props2.asHighlight;

      if (asHighlight) {
        return /*#__PURE__*/React__default.createElement(LinkUI$1, null, /*#__PURE__*/React__default.createElement(HighlightUI, null, children));
      }

      return /*#__PURE__*/React__default.createElement(LinkUI$1, null, children);
    }
  }]);

  return Link;
}(React__default.Component);

var Menu = /*#__PURE__*/function (_React$Component3) {
  _inherits(Menu, _React$Component3);

  var _super3 = _createSuper(Menu);

  function Menu() {
    _classCallCheck(this, Menu);

    return _super3.apply(this, arguments);
  }

  _createClass(Menu, [{
    key: "UNSAFE_componentWillUpdate",
    value: function UNSAFE_componentWillUpdate(prevProps) {
      this.animate = !(this.props.style === prevProps.style);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          children = _this$props3.children,
          style = _this$props3.style;
      return /*#__PURE__*/React__default.createElement(MenuUI, {
        animate: this.animate,
        style: style
      }, children);
    }
  }]);

  return Menu;
}(React__default.Component);

_defineProperty(Menu, "animate", false);

var DesktopHeader = {
  Brand: Brand,
  Container: Container,
  Dropdown: Dropdown,
  Link: Link,
  Menu: Menu
};

function _templateObject4$5() {
  var data = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  background-color: ", ";\n  display: block;\n  left: 0;\n  min-height: 100vh;\n  padding-top: ", ";\n  position: absolute;\n  top: 0;\n  height: 100%;\n  width: 100%;\n  min-height: 100vh;\n  overflow: auto;\n"]);

  _templateObject4$5 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$b() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  cursor: pointer;\n  box-sizing: border-box;\n  font-family: ", ";\n  font-size: ", ";\n  margin: 0;\n  padding: ", ";\n  position: relative;\n  text-align: center;\n  width: auto;\n  text-transform: uppercase;\n  :hover {\n    background-color: ", ";\n    padding: ", ";\n  }\n  a:active,\n  a:visited,\n  a:hover,\n  a:link {\n    color: #fff;\n    display: inline-block;\n    min-width: 100%;\n    text-decoration: none;\n  }\n  background-color: ", ";\n"]);

  _templateObject3$b = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$f() {
  var data = _taggedTemplateLiteral(["\n  align-items: center;\n  background-color: ", ";\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: row;\n  height: ", ";\n  justify-content: space-between;\n  padding: ", ";\n  width: 100%;\n  z-index: 1;\n"]);

  _templateObject2$f = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$m() {
  var data = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  position: sticky;\n  z-index: 1;\n  top: 0;\n  display: block;\n  background-color: ", ";\n  height: ", ";\n  width: 100%;\n"]);

  _templateObject$m = function _templateObject() {
    return data;
  };

  return data;
}
var ContainerUI$9 = styled__default('div')(_templateObject$m(), theme.colors.dark1, theme.layout.mobile.headerHeight);
var ContainerInnerUI$1 = styled__default('div')(_templateObject2$f(), theme.colors.dark1, theme.layout.mobile.headerHeight, "0 ".concat(theme.unit(0.75), " 0 ").concat(theme.unit(0.25)));
var LinkUI$2 = styled__default('div')(_templateObject3$b(), theme.colors.light1, theme.typography.fonts.font1, theme.unit(0.75), theme.unit(0.25), theme.colors.dark5, theme.unit(0.25), function (_ref) {
  var isOpen = _ref.isOpen;
  return isOpen && "".concat(theme.colors.dark5);
});
var MenuUI$1 = styled__default('nav')(_templateObject4$5(), theme.colors.dark3, theme.layout.mobile.headerHeight);

function _templateObject6$3() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n  height: ", ";\n  margin: (", ") auto ", " auto;\n  margin-top: -", ";\n  position: relative;\n  width: ", ";\n  z-index: 9999;\n  cursor: pointer;\n"]);

  _templateObject6$3 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5$5() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  padding: ", ";\n  right: 0;\n  top: 0;\n  cursor: pointer;\n"]);

  _templateObject5$5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$6() {
  var data = _taggedTemplateLiteral(["\n  top: 100%;\n  transform: ", ";\n"]);

  _templateObject4$6 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$c() {
  var data = _taggedTemplateLiteral(["\n  top: 50%;\n  opacity: ", ";\n"]);

  _templateObject3$c = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$g() {
  var data = _taggedTemplateLiteral(["\n  top: 0;\n  transform: ", ";\n"]);

  _templateObject2$g = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$n() {
  var data = _taggedTemplateLiteral(["\n  background: #fff;\n  border-radius: (", ");\n  display: block;\n  height: ", ";\n  left: 0;\n  position: absolute;\n  transition: transform 500ms ease;\n  width: 100%;\n"]);

  _templateObject$n = function _templateObject() {
    return data;
  };

  return data;
}
var heightLine = 3;
var heightIcon = 16;
var translateY = heightIcon / 2;
var translateY1 = makePixelValue(translateY);
var LineUI = styled__default('span')(_templateObject$n(), makePixelValue(heightLine / 2), makePixelValue(heightLine));
var Line1UI = styled__default(LineUI)(_templateObject2$g(), function (props) {
  return props.isOpen ? "translateY(".concat(translateY1, ") rotate(45deg) translateX(0)") : 'rotate(0deg)';
});
var Line2UI = styled__default(LineUI)(_templateObject3$c(), function (props) {
  return props.isOpen ? "0" : '1';
});
var Line3UI = styled__default(LineUI)(_templateObject4$6(), function (props) {
  return props.isOpen ? "translateY(-".concat(translateY1, ") rotate(-45deg) translateX(0)") : 'rotate(0deg)';
});
var ContainerUI$a = styled__default('div')(_templateObject5$5(), theme.unit(0.5));
var ContainerInnerUI$2 = styled__default('div')(_templateObject6$3(), makePixelValue(heightIcon), makePixelValue(heightIcon * 2), heightIcon, theme.unit(0.125), theme.unit(1));

function TriggerIcon(_ref) {
  var isOpen = _ref.isOpen,
      onClick = _ref.onClick;
  return /*#__PURE__*/React__default.createElement(ContainerUI$a, {
    isOpen: isOpen,
    onClick: onClick
  }, /*#__PURE__*/React__default.createElement(ContainerInnerUI$2, null, /*#__PURE__*/React__default.createElement(Line1UI, {
    isOpen: isOpen
  }), /*#__PURE__*/React__default.createElement(Line2UI, {
    isOpen: isOpen
  }), /*#__PURE__*/React__default.createElement(Line3UI, {
    isOpen: isOpen
  })));
}

function _templateObject2$h() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  &:after {\n    content: '';\n    color: ", ";\n    border: solid ", ";\n    border-width: 0 4px 4px 0;\n    display: inline-block;\n    margin-left: ", ";\n    padding: 4px;\n    transform: ", ";\n    position: absolute;\n    top: -", ";\n  }\n"]);

  _templateObject2$h = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$o() {
  var data = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  cursor: pointer;\n  font-family: ", ";\n  display: block;\n  position: relative;\n\n  ul {\n    position: relative;\n    box-sizing: border-box;\n    display: block;\n    list-style: none;\n    margin: 0;\n    padding-left: 0;\n    z-index: 1;\n    min-width: 100%;\n\n    li {\n      cursor: pointer;\n      display: flex;\n      font-size: ", ";\n      justify-content: center;\n      align-content: center;\n      box-sizing: border-box;\n      min-width: 100%;\n      margin-bottom: 0;\n      margin-left: 0;\n      text-align: center;\n      text-transform: uppercase;\n      a:active,\n      a:hover,\n      a:link,\n      a:visited {\n        color: #fff;\n        display: inline-block;\n        margin-left: 0;\n        min-width: 100%;\n        padding: ", ";\n        text-decoration: none;\n      }\n      a:hover {\n        background-color: ", ";\n      }\n    }\n  }\n  :hover {\n    ul {\n      display: block;\n    }\n  }\n"]);

  _templateObject$o = function _templateObject() {
    return data;
  };

  return data;
}
var DropdownUI$1 = styled__default('span')(_templateObject$o(), theme.typography.fonts.font1, theme.unit(0.75), theme.unit(0.25), theme.colors.dark5);
var LinkArrowUI = styled__default('div')(_templateObject2$h(), theme.colors.light1, theme.colors.light1, theme.unit(2.5), function (_ref) {
  var isOpen = _ref.isOpen;
  return isOpen ? "rotate(45deg)" : "rotate(-135deg)";
}, theme.unit(0.75));

var Dropdown$1 = /*#__PURE__*/function (_React$Component) {
  _inherits(Dropdown, _React$Component);

  var _super = _createSuper(Dropdown);

  function Dropdown() {
    var _this;

    _classCallCheck(this, Dropdown);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isOpen: true
    });

    _defineProperty(_assertThisInitialized(_this), "toggleMenu", function (bool) {
      _this.setState({
        isOpen: bool
      });
    });

    return _this;
  }

  _createClass(Dropdown, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // this allows react static to do a "first render"
      this.setState({
        isOpen: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          children = _this$props.children,
          isParentMenuOpen = _this$props.isParentMenuOpen,
          text = _this$props.text;
      var isOpen = this.state.isOpen;
      return /*#__PURE__*/React__default.createElement(DropdownUI$1, null, /*#__PURE__*/React__default.createElement(LinkUI$2, {
        isOpen: isOpen,
        onClick: function onClick() {
          _this2.toggleMenu(!isOpen);
        }
      }, text, /*#__PURE__*/React__default.createElement(LinkArrowUI, {
        isOpen: isOpen
      })), /*#__PURE__*/React__default.createElement("ul", null, isOpen && React__default.Children.map(children, function (child) {
        return /*#__PURE__*/React__default.createElement("li", null, React__default.cloneElement(child, {
          onClick: function onClick(event) {
            isParentMenuOpen && _this2.props.closeParentMenu();
            event.nativeEvent.stopPropagation();
          }
        }));
      })));
    }
  }]);

  return Dropdown;
}(React__default.Component);

var Container$1 = /*#__PURE__*/function (_React$Component) {
  _inherits(Container, _React$Component);

  var _super = _createSuper(Container);

  function Container() {
    var _this;

    _classCallCheck(this, Container);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isOpen: false
    });

    _defineProperty(_assertThisInitialized(_this), "onResize", function () {
      if (_this.state.isOpen) {
        _this.setState({
          isOpen: false
        });

        onHideModal();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "toggleMenu", function () {
      _this.setState({
        isOpen: !_this.state.isOpen
      }, function () {
        if (_this.state.isOpen) {
          onShowModal();
        } else {
          onHideModal();
        }
      });
    });

    return _this;
  }

  _createClass(Container, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (typeof window !== 'undefined') {
        window.addEventListener('resize', function () {
          return _this2.onResize();
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.toggleMenu(false);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var children = this.props.children;
      var isOpen = this.state.isOpen;
      return /*#__PURE__*/React__default.createElement(ContainerUI$9, null, /*#__PURE__*/React__default.createElement(ContainerInnerUI$1, null, /*#__PURE__*/React__default.createElement(TriggerIcon, {
        isOpen: isOpen,
        onClick: this.toggleMenu
      }), React__default.Children.map(children, function (child) {
        return React__default.cloneElement(child, _objectSpread2(_objectSpread2({}, child.props), {}, {
          closeParentMenu: _this3.toggleMenu,
          isParentMenuOpen: isOpen
        }));
      })));
    }
  }]);

  return Container;
}(React__default.Component);

var Brand$1 = function Brand(_ref) {
  var children = _ref.children;
  return children;
};

function Link$1(props) {
  var children = props.children,
      closeParentMenu = props.closeParentMenu,
      isParentMenuOpen = props.isParentMenuOpen;
  return /*#__PURE__*/React__default.createElement(LinkUI$2, {
    onClick: function onClick(event) {
      isParentMenuOpen && closeParentMenu();
      event.nativeEvent.stopPropagation();
    }
  }, children);
}

function Menu$1(props) {
  var children = props.children,
      closeParentMenu = props.closeParentMenu,
      isParentMenuOpen = props.isParentMenuOpen;

  if (isParentMenuOpen) {
    var content = React__default.Children.map(children, function (child) {
      return React__default.cloneElement(child, _objectSpread2(_objectSpread2({}, child.props), {}, {
        closeParentMenu: closeParentMenu,
        isParentMenuOpen: isParentMenuOpen
      }));
    });
    return /*#__PURE__*/React__default.createElement(MenuUI$1, _objectSpread2({}, props), content);
  }

  return null;
}

var MobileHeader = {
  Brand: Brand$1,
  Container: Container$1,
  Dropdown: Dropdown$1,
  Link: Link$1,
  Menu: Menu$1
};

function _templateObject$p() {
  var data = _taggedTemplateLiteral(["\n  margin: 0;\n  padding: 0;\n  border-top: ", ";\n  min-width: 100%;\n  display: block;\n"]);

  _templateObject$p = function _templateObject() {
    return data;
  };

  return data;
}
var DividerUI = styled__default('div')(_templateObject$p(), theme.border);

var Container$2 = /*#__PURE__*/function (_React$Component) {
  _inherits(Container, _React$Component);

  var _super = _createSuper(Container);

  function Container() {
    _classCallCheck(this, Container);

    return _super.apply(this, arguments);
  }

  _createClass(Container, [{
    key: "render",
    value: function render() {
      var _this = this;

      return /*#__PURE__*/React__default.createElement(ReactBreakpoints.Media, null, function (_ref) {
        var breakpoints = _ref.breakpoints,
            currentBreakpoint = _ref.currentBreakpoint;

        if (breakpoints[currentBreakpoint] > breakpoints['tablet']) {
          return /*#__PURE__*/React__default.createElement(DesktopHeader.Container, _objectSpread2({}, _this.props));
        } else {
          return /*#__PURE__*/React__default.createElement(MobileHeader.Container, _objectSpread2({}, _this.props));
        }
      });
    }
  }]);

  return Container;
}(React__default.Component);

function Brand$2(props) {
  return /*#__PURE__*/React__default.createElement(ReactBreakpoints.Media, null, function (_ref2) {
    var breakpoints = _ref2.breakpoints,
        currentBreakpoint = _ref2.currentBreakpoint;

    if (breakpoints[currentBreakpoint] > breakpoints['tablet']) {
      return /*#__PURE__*/React__default.createElement(DesktopHeader.Brand, _objectSpread2({}, props));
    } else {
      return /*#__PURE__*/React__default.createElement(MobileHeader.Brand, _objectSpread2({}, props));
    }
  });
}

function Menu$2(props) {
  return /*#__PURE__*/React__default.createElement(ReactBreakpoints.Media, null, function (_ref3) {
    var breakpoints = _ref3.breakpoints,
        currentBreakpoint = _ref3.currentBreakpoint;
    var children = props.children,
        closeParentMenu = props.closeParentMenu,
        isParentMenuOpen = props.isParentMenuOpen;
    var content = React__default.Children.map(children, function (child) {
      return React__default.cloneElement(child, _objectSpread2(_objectSpread2({}, child.props), {}, {
        closeParentMenu: closeParentMenu,
        isParentMenuOpen: isParentMenuOpen
      }));
    });

    if (breakpoints[currentBreakpoint] > breakpoints['tablet']) {
      return /*#__PURE__*/React__default.createElement(DesktopHeader.Menu, _objectSpread2({}, props), content);
    } else {
      return /*#__PURE__*/React__default.createElement(MobileHeader.Menu, _objectSpread2({}, props), content);
    }
  });
}

function Link$2(props) {
  return /*#__PURE__*/React__default.createElement(ReactBreakpoints.Media, null, function (_ref4) {
    var breakpoints = _ref4.breakpoints,
        currentBreakpoint = _ref4.currentBreakpoint;

    if (breakpoints[currentBreakpoint] > breakpoints['tablet']) {
      return /*#__PURE__*/React__default.createElement(DesktopHeader.Link, _objectSpread2({}, props));
    } else {
      return /*#__PURE__*/React__default.createElement(MobileHeader.Link, _objectSpread2({}, props));
    }
  });
}

function Dropdown$2(props) {
  return /*#__PURE__*/React__default.createElement(ReactBreakpoints.Media, null, function (_ref5) {
    var breakpoints = _ref5.breakpoints,
        currentBreakpoint = _ref5.currentBreakpoint;

    if (breakpoints[currentBreakpoint] > breakpoints['tablet']) {
      return /*#__PURE__*/React__default.createElement(DesktopHeader.Dropdown, _objectSpread2({}, props));
    } else {
      return /*#__PURE__*/React__default.createElement(MobileHeader.Dropdown, _objectSpread2({}, props));
    }
  });
}

function Divider() {
  return /*#__PURE__*/React__default.createElement(DividerUI, null);
}

function Contact(props) {
  return /*#__PURE__*/React__default.createElement(ReactBreakpoints.Media, null, function (_ref6) {
    var breakpoints = _ref6.breakpoints,
        currentBreakpoint = _ref6.currentBreakpoint;

    if (breakpoints[currentBreakpoint] > breakpoints['tablet']) {
      return /*#__PURE__*/React__default.createElement(DesktopHeader.Contact, _objectSpread2({}, props));
    } else {
      return null;
    }
  });
}

var header = {
  Brand: Brand$2,
  Container: Container$2,
  Divider: Divider,
  Dropdown: Dropdown$2,
  Link: Link$2,
  Menu: Menu$2,
  Contact: Contact
};

var _icons;
var icons = (_icons = {}, _defineProperty(_icons, 'crescent-lenders', React.lazy(function () {
  return new Promise(function (resolve) { resolve(require('./crescentLenders-02a31f7e.js')); });
})), _defineProperty(_icons, "like", React.lazy(function () {
  return new Promise(function (resolve) { resolve(require('./like-242c58fe.js')); });
})), _defineProperty(_icons, "money", React.lazy(function () {
  return new Promise(function (resolve) { resolve(require('./money-dca83b2c.js')); });
})), _defineProperty(_icons, "mortgage", React.lazy(function () {
  return new Promise(function (resolve) { resolve(require('./mortgage-661b3556.js')); });
})), _defineProperty(_icons, "mortgage2", React.lazy(function () {
  return new Promise(function (resolve) { resolve(require('./mortgage2-d97d5b1a.js')); });
})), _defineProperty(_icons, "handshake", React.lazy(function () {
  return new Promise(function (resolve) { resolve(require('./handshake-caafaf12.js')); });
})), _defineProperty(_icons, "percentage", React.lazy(function () {
  return new Promise(function (resolve) { resolve(require('./percentage-7e93b1cd.js')); });
})), _defineProperty(_icons, "rocket", React.lazy(function () {
  return new Promise(function (resolve) { resolve(require('./rocket-37b91967.js')); });
})), _icons);
function Icon(_ref) {
  var name = _ref.name,
      rest = _objectWithoutProperties(_ref, ["name"]);

  var Component = icons[name];
  console.log(rest);

  if (Component) {
    return /*#__PURE__*/React__default.createElement(React.Suspense, {
      fallback: null
    }, /*#__PURE__*/React__default.createElement(Component, _objectSpread2({}, rest)));
  }

  return null;
}

function _templateObject2$i() {
  var data = _taggedTemplateLiteral(["\n  ", "\n"]);

  _templateObject2$i = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$q() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n  position: relative;\n  width: 100%;\n"]);

  _templateObject$q = function _templateObject() {
    return data;
  };

  return data;
}

var ImageContainerUI$1 = styled__default('div')(_templateObject$q());
var ImageUI$1 = styled__default('img')(_templateObject2$i(), function (_ref) {
  var align = _ref.align;

  if (align === 'center') {
    return "\n        margin-left: 50%;\n        transform: translateX(-50%);\n    ";
  }
});

function Image(_ref) {
  var align = _ref.align,
      alt = _ref.alt,
      height = _ref.height,
      width = _ref.width,
      src = _ref.src;
  return /*#__PURE__*/React__default.createElement(ImageContainerUI$1, null, /*#__PURE__*/React__default.createElement(ImageUI$1, {
    align: align,
    alt: alt,
    height: height,
    width: width,
    src: src
  }));
}

function _templateObject2$j() {
  var data = _taggedTemplateLiteral(["\n  max-width: 100%;\n  height: 100%;\n  margin-bottom: ", ";\n  object-fit: cover;\n"]);

  _templateObject2$j = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$r() {
  var data = _taggedTemplateLiteral(["\n  /* Position child elements relative to this element */\n  position: relative;\n\n  /* Create a pseudo element that uses padding-bottom to take up space */\n  &:after {\n    display: block;\n    content: '';\n    /*  aspect ratio */\n    padding-bottom: ", ";\n  }\n\n  /* Image is positioned absolutely relative to the parent element */\n  img {\n    /* Image should match parent box size */\n    position: absolute;\n    left: 0px;\n    top: 0px;\n    width: 100%;\n    height: 100%;\n    min-height: 100%;\n  }\n"]);

  _templateObject$r = function _templateObject() {
    return data;
  };

  return data;
}
var AspectRatioUI$1 = styled__default('div')(_templateObject$r(), function (_ref) {
  var aspectRatio = _ref.aspectRatio;
  return aspectRatio + '%';
});
var ImgUI = styled__default('img')(_templateObject2$j(), getSpaceAfter);

function _templateObject5$6() {
  var data = _taggedTemplateLiteral(["\n  top: 0;\n  width: 100%;\n  height: 100%;\n  display: block;\n  position: absolute;\n"]);

  _templateObject5$6 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$7() {
  var data = _taggedTemplateLiteral(["\n  ", " {\n    color: #fff;\n    margin-bottom: 0;\n  }\n\n  p,\n  ul {\n    color: #fff;\n    font-size: ", ";\n\n    @media (max-width: ", ") {\n      font-size: ", ";\n    }\n  }\n\n  li {\n    margin: 0;\n  }\n"]);

  _templateObject4$7 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$d() {
  var data = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  background: transparent;\n  display: flex;\n  flex-direction: column;\n  max-width: 768px;\n  position: absolute;\n  text-align: inherit;\n  padding: 0;\n  padding-top: ", ";\n  padding-left: ", ";\n  padding-right: ", ";\n"]);

  _templateObject3$d = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$k() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n  height: 100%;\n  width: 100%;\n  display: block;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background: ", ";\n  position: absolute;\n  opacity: 1;\n"]);

  _templateObject2$k = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$s() {
  var data = _taggedTemplateLiteral(["\n  align-items: ", ";\n  display: flex;\n  justify-content: ", ";\n  margin-top: ", "; /* offset the nav bar so image is full height */\n  min-height: ", ";\n  position: relative;\n  padding: 0;\n  text-align: ", ";\n  width: 100%;\n"]);

  _templateObject$s = function _templateObject() {
    return data;
  };

  return data;
}
var ContainerUI$b = styled__default('div')(_templateObject$s(), function (_ref) {
  var alignItems = _ref.alignItems;
  return alignItems;
}, function (_ref2) {
  var justifyContent = _ref2.justifyContent;
  return justifyContent;
}, function (_ref3) {
  var hasNavShift = _ref3.hasNavShift;
  return hasNavShift === true ? "-".concat(theme.layout.desktop.headerHeight) : 0;
}, function (_ref4) {
  var size = _ref4.size;
  return size === 'half' ? "50vh" : "100vh";
}, function (_ref5) {
  var textAlign = _ref5.textAlign;
  return textAlign;
});
var OverlayUI = styled__default('div')(_templateObject2$k(), function (_ref6) {
  var overlay = _ref6.overlay;
  return "rgba(0, 0, 0, ".concat(parseInt(overlay, 10) / 100, ")");
});
var ContentUI$3 = styled__default(GridUI)(_templateObject3$d(), function (_ref7) {
  var hasNavShift = _ref7.hasNavShift;
  return hasNavShift ? theme.layout.desktop.headerHeight : 0;
}, theme.unit(1.5), theme.unit(1.5));
var MainContentUI = styled__default('div')(_templateObject4$7(), TitleUI, theme.unit(0.75), theme.breakPointsAsPixel.mobile, theme.unit(0.65));
var ImageUI$2 = styled__default('div')(_templateObject5$6());

function ResponsiveImage (_ref) {
  var _ref$aspectRatio = _ref.aspectRatio,
      aspectRatio = _ref$aspectRatio === void 0 ? 56.25 : _ref$aspectRatio,
      data = _ref.data,
      sizes = _ref.sizes,
      _ref$spaceAfter = _ref.spaceAfter,
      spaceAfter = _ref$spaceAfter === void 0 ? 'medium' : _ref$spaceAfter,
      src = _ref.src;
  var img = /*#__PURE__*/React__default.createElement(ImgUI, {
    loading: "lazy",
    src: data && data.url || src,
    srcSet: sizes && getSrcSets(sizes, data),
    spaceAfter: spaceAfter
  });

  if (aspectRatio === null) {
    return img;
  }

  return /*#__PURE__*/React__default.createElement(AspectRatioUI$1, {
    aspectRatio: aspectRatio
  }, img);
}

var sizes = {
  half: ['375x375', '414x414', '1280x400', '1366x384', '1440x450', '1920x540'],
  full: ['375×667', '414×816', '360×780', '1366×768', '1440×900', '1920×1080']
};
function Jumbotron (_ref) {
  var children = _ref.children,
      _ref$hasNavShift = _ref.hasNavShift,
      hasNavShift = _ref$hasNavShift === void 0 ? false : _ref$hasNavShift,
      _ref$alignItems = _ref.alignItems,
      alignItems = _ref$alignItems === void 0 ? 'center' : _ref$alignItems,
      _ref$hasCta = _ref.hasCta,
      hasCta = _ref$hasCta === void 0 ? true : _ref$hasCta,
      _ref$justifyContent = _ref.justifyContent,
      justifyContent = _ref$justifyContent === void 0 ? 'center' : _ref$justifyContent,
      _ref$image = _ref.image,
      image = _ref$image === void 0 ? null : _ref$image,
      _ref$overlay = _ref.overlay,
      overlay = _ref$overlay === void 0 ? 0 : _ref$overlay,
      linkComponent = _ref.linkComponent,
      _ref$textAlign = _ref.textAlign,
      textAlign = _ref$textAlign === void 0 ? 'center' : _ref$textAlign,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'full' : _ref$size;
  console.log('hasNavShift', hasNavShift);
  return /*#__PURE__*/React__default.createElement(ContainerUI$b, {
    size: size,
    alignItems: alignItems,
    hasNavShift: hasNavShift,
    justifyContent: justifyContent,
    textAlign: textAlign
  }, /*#__PURE__*/React__default.createElement(ImageUI$2, null, /*#__PURE__*/React__default.createElement(ResponsiveImage, {
    aspectRatio: null,
    data: image,
    sizes: sizes[size]
  })), /*#__PURE__*/React__default.createElement(OverlayUI, {
    overlay: overlay
  }), /*#__PURE__*/React__default.createElement(ContentUI$3, null, /*#__PURE__*/React__default.createElement(MainContentUI, null, children), hasCta && /*#__PURE__*/React__default.createElement(Button, {
    to: "/contact/",
    linkComponent: linkComponent
  }, "Get Funded Today")));
}

function _templateObject$t() {
  var data = _taggedTemplateLiteral(["\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n"]);

  _templateObject$t = function _templateObject() {
    return data;
  };

  return data;
}
var LoadingScreenContainerUI = styled__default('div')(_templateObject$t());

function Loader() {
  return /*#__PURE__*/React__default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg" // width={config.unit(1)}
    // height={config.unit(1)}
    ,
    viewBox: "0 0 512 512"
  }, /*#__PURE__*/React__default.createElement("path", {
    d: "M256.001 0c-8.284 0-15 6.716-15 15v96.4c0 8.284 6.716 15 15 15s15-6.716 15-15V15c0-8.284-6.716-15-15-15zM256.001 385.601c-8.284 0-15 6.716-15 15V497c0 8.284 6.716 15 15 15s15-6.716 15-15v-96.399c0-8.285-6.716-15-15-15zM196.691 123.272l-48.2-83.485c-4.142-7.175-13.316-9.633-20.49-5.49-7.174 4.142-9.632 13.316-5.49 20.49l48.2 83.485c2.778 4.813 7.82 7.502 13.004 7.502 2.545 0 5.124-.648 7.486-2.012 7.174-4.142 9.632-13.316 5.49-20.49zM389.491 457.212l-48.199-83.483c-4.142-7.175-13.316-9.633-20.49-5.49-7.174 4.142-9.632 13.316-5.49 20.49l48.199 83.483c2.778 4.813 7.82 7.502 13.004 7.502 2.545 0 5.124-.648 7.486-2.012 7.174-4.142 9.632-13.316 5.49-20.49zM138.274 170.711L54.788 122.51c-7.176-4.144-16.348-1.685-20.49 5.49-4.142 7.174-1.684 16.348 5.49 20.49l83.486 48.202a14.928 14.928 0 007.486 2.012c5.184 0 10.226-2.69 13.004-7.503 4.142-7.174 1.684-16.348-5.49-20.49zM472.213 363.51l-83.484-48.199c-7.176-4.142-16.349-1.684-20.49 5.491-4.142 7.175-1.684 16.349 5.49 20.49l83.484 48.199a14.93 14.93 0 007.486 2.012c5.184 0 10.227-2.69 13.004-7.502 4.142-7.176 1.684-16.35-5.49-20.491zM111.401 241.002H15c-8.284 0-15 6.716-15 15s6.716 15 15 15h96.401c8.284 0 15-6.716 15-15s-6.716-15-15-15zM497 241.002h-96.398c-8.284 0-15 6.716-15 15s6.716 15 15 15H497c8.284 0 15-6.716 15-15s-6.716-15-15-15zM143.765 320.802c-4.142-7.175-13.314-9.633-20.49-5.49l-83.486 48.2c-7.174 4.142-9.632 13.316-5.49 20.49 2.778 4.813 7.82 7.502 13.004 7.502 2.545 0 5.124-.648 7.486-2.012l83.486-48.2c7.174-4.142 9.632-13.316 5.49-20.49zM477.702 128.003c-4.142-7.175-13.315-9.632-20.49-5.49l-83.484 48.2c-7.174 4.141-9.632 13.315-5.49 20.489 2.778 4.813 7.82 7.503 13.004 7.503a14.93 14.93 0 007.486-2.012l83.484-48.2c7.174-4.142 9.632-13.316 5.49-20.49zM191.201 368.239c-7.174-4.144-16.349-1.685-20.49 5.49l-48.2 83.485c-4.142 7.174-1.684 16.348 5.49 20.49a14.928 14.928 0 007.486 2.012c5.184 0 10.227-2.69 13.004-7.502l48.2-83.485c4.142-7.174 1.684-16.348-5.49-20.49zM384.001 34.3c-7.175-4.144-16.349-1.685-20.49 5.49l-48.199 83.483c-4.143 7.174-1.685 16.348 5.49 20.49a14.928 14.928 0 007.486 2.012c5.184 0 10.226-2.69 13.004-7.502l48.199-83.483c4.142-7.174 1.684-16.348-5.49-20.49z"
  }));
}

function Loading() {
  return /*#__PURE__*/React__default.createElement(LoadingScreenContainerUI, null, /*#__PURE__*/React__default.createElement(Loader, null), 'Loading');
}

function _templateObject3$e() {
  var data = _taggedTemplateLiteral(["\n  padding: ", ";\n  position: absolute;\n  z-index: 99999;\n  width: 500px;\n  background: white;\n  border: 1px solid #ccc;\n  transition: 1.1s ease-out;\n  box-shadow: -2rem 2rem 2rem rgba(black, 0.2);\n  filter: blur(0);\n  transform: scale(1);\n  opacity: 1;\n  visibility: visible;\n"]);

  _templateObject3$e = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$l() {
  var data = _taggedTemplateLiteral(["\n  position: fixed;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(", ", 0.8);\n  z-index: 999;\n  padding: ", ";\n"]);

  _templateObject2$l = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$u() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n  margin: 0 auto;\n  width: 100%;\n  text-align: center;\n"]);

  _templateObject$u = function _templateObject() {
    return data;
  };

  return data;
}
var CloseButtonUI = styled__default('a')(_templateObject$u());
var ContainerUI$c = styled__default('div')(_templateObject2$l(), hexToRgb(theme.colors.dark1), theme.unit(0.5));
var ModalUI = styled__default('div')(_templateObject3$e(), theme.unit(0.5));

function modal (_ref) {
  var children = _ref.children,
      closeModal = _ref.closeModal;
  return /*#__PURE__*/React__default.createElement(ContainerUI$c, null, /*#__PURE__*/React__default.createElement(ModalUI, null, children, /*#__PURE__*/React__default.createElement(CloseButtonUI, {
    href: "",
    onClick: function onClick(e) {
      closeModal();
      e.preventDefault();
    }
  })));
}

function _templateObject4$8() {
  var data = _taggedTemplateLiteral(["\n  blockquote {\n    border: none;\n  }\n"]);

  _templateObject4$8 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$f() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n  height: ", ";\n  color: ", ";\n  opacity: 0.5;\n  font-size: ", ";\n  line-height: 1;\n  position: absolute;\n  bottom: ", ";\n  right: ", ";\n"]);

  _templateObject3$f = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$m() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n  color: ", ";\n  height: ", ";\n  opacity: 0.5;\n  font-size: ", ";\n  line-height: 1;\n  position: absolute;\n  top: ", ";\n  left: ", ";\n"]);

  _templateObject2$m = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$v() {
  var data = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  width: 100%;\n  display: block;\n  padding: ", " ", ";\n  background: ", ";\n  position: relative;\n\n  @media (max-width: ", ") {\n    padding: ", " ", ";\n  }\n"]);

  _templateObject$v = function _templateObject() {
    return data;
  };

  return data;
}
var BoxWrapper$2 = styled__default('div')(_templateObject$v(), theme.unit(2), theme.unit(1), theme.colors.light1, theme.breakPointsAsPixel.tablet, theme.unit(1), theme.unit(2.5));
var OpenQuoteUI$1 = styled__default('div')(_templateObject2$m(), theme.colors.dark3, theme.unit(2.5), theme.unit(5), theme.unit(0.25), theme.unit(0.25));
var CloseQuoteUI$1 = styled__default('div')(_templateObject3$f(), theme.unit(2.5), theme.colors.dark3, theme.unit(5), theme.unit(0.25), theme.unit(0.25));
var DropQuoteUI$1 = styled__default('div')(_templateObject4$8());

function quote (_ref) {
  var sidebar = _ref.sidebar;
  return /*#__PURE__*/React__default.createElement(BoxWrapper$2, null, /*#__PURE__*/React__default.createElement(OpenQuoteUI$1, null, "\u201C"), /*#__PURE__*/React__default.createElement(DropQuoteUI$1, null, /*#__PURE__*/React__default.createElement("blockquote", {
    className: "heading-3 italic font1",
    dangerouslySetInnerHTML: {
      __html: sidebar.text
    }
  })), /*#__PURE__*/React__default.createElement(CloseQuoteUI$1, null, "\u201D"));
}

function ScrollToTop(_ref) {
  var children = _ref.children,
      location = _ref.location;
  console.log('scroll', location);

  if (typeof window !== 'undefined') {
    React__default.useEffect(function () {
      return window.scrollTo(0, 0);
    }, [location.pathname]);
    return children;
  } else {
    return children;
  }
}

function sms () {
  return /*#__PURE__*/React__default.createElement(SMS, null);
}

function Facebook () {
  return /*#__PURE__*/React__default.createElement("svg", {
    height: "30",
    viewBox: "0 0 512 512",
    width: "30",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React__default.createElement("path", {
    d: "m483.738281 0h-455.5c-15.597656.0078125-28.24218725 12.660156-28.238281 28.261719v455.5c.0078125 15.597656 12.660156 28.242187 28.261719 28.238281h455.476562c15.605469.003906 28.257813-12.644531 28.261719-28.25 0-.003906 0-.007812 0-.011719v-455.5c-.007812-15.597656-12.660156-28.24218725-28.261719-28.238281zm0 0",
    fill: "#4267b2"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "m353.5 512v-198h66.75l10-77.5h-76.75v-49.359375c0-22.386719 6.214844-37.640625 38.316406-37.640625h40.683594v-69.128906c-7.078125-.941406-31.363281-3.046875-59.621094-3.046875-59 0-99.378906 36-99.378906 102.140625v57.035156h-66.5v77.5h66.5v198zm0 0",
    fill: "#fff"
  }));
}

function LinkedIn () {
  return /*#__PURE__*/React__default.createElement("svg", {
    height: "30",
    viewBox: "0 -11 512 511",
    width: "30",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React__default.createElement("g", {
    fill: "#069"
  }, /*#__PURE__*/React__default.createElement("path", {
    d: "m6.488281 159.683594h109.753907v330.207031h-109.753907zm0 0"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "m62.089844.5c-37.542969 0-62.089844 24.652344-62.089844 57.054688 0 31.6875 23.816406 57.042968 60.648438 57.042968h.714843c38.277344 0 62.097657-25.355468 62.097657-57.042968-.714844-32.402344-23.820313-57.054688-61.371094-57.054688zm0 0"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "m385.644531 151.933594c-58.234375 0-84.328125 32.003906-98.914062 54.507812v-46.757812h-109.757813v330.207031h109.753906v-184.402344c0-9.871093.714844-19.726562 3.613282-26.785156 7.933594-19.714844 25.992187-40.136719 56.3125-40.136719 39.714844 0 55.601562 30.28125 55.601562 74.671875v176.652344h109.746094v-189.335937c0-101.425782-54.148438-148.621094-126.355469-148.621094zm0 0"
  })));
}

function _templateObject$w() {
  var data = _taggedTemplateLiteral(["\n  margin-right: ", ";\n"]);

  _templateObject$w = function _templateObject() {
    return data;
  };

  return data;
}
var LinkUI$3 = styled__default('a')(_templateObject$w(), theme.unit(0.375));

function Twitter () {
  return /*#__PURE__*/React__default.createElement("svg", {
    height: "30",
    viewBox: "1 -47 511.999 511",
    width: "30",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React__default.createElement("path", {
    d: "m161.019531 416.605469c193.21875 0 298.878907-160.074219 298.878907-298.878907 0-4.546874-.09375-9.074218-.296876-13.578124 20.507813-14.828126 38.335938-33.332032 52.398438-54.394532-18.820312 8.367188-39.078125 13.996094-60.324219 16.539063 21.6875-13.007813 38.339844-33.578125 46.191407-58.101563-20.296876 12.03125-42.773438 20.773438-66.703126 25.496094-19.167968-20.417969-46.460937-33.1875-76.679687-33.1875-58.007813 0-105.050781 47.042969-105.050781 105.03125 0 8.246094.921875 16.261719 2.722656 23.953125-87.304688-4.394531-164.722656-46.191406-216.527344-109.753906-9.019531 15.523437-14.222656 33.558593-14.222656 52.800781 0 36.441406 18.546875 68.617188 46.746094 87.4375-17.234375-.53125-33.421875-5.261719-47.574219-13.136719-.015625.441407-.015625.871094-.015625 1.339844 0 50.875 36.207031 93.351563 84.277344 102.976563-8.828125 2.402343-18.117188 3.695312-27.699219 3.695312-6.757813 0-13.34375-.664062-19.746094-1.894531 13.375 41.738281 52.15625 72.109375 98.132813 72.960937-35.953125 28.179688-81.246094 44.964844-130.46875 44.964844-8.46875 0-16.835938-.484375-25.058594-1.453125 46.488281 29.796875 101.695312 47.1875 161.023438 47.1875",
    fill: "#1da1f2"
  }));
}

function social () {
  var url = "http://www.facebook.com/sharer/sharer.php?u=".concat(window.location.href);
  return /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement(LinkUI$3, {
    href: url
  }, /*#__PURE__*/React__default.createElement(Facebook, null)), /*#__PURE__*/React__default.createElement(LinkUI$3, {
    href: ""
  }, /*#__PURE__*/React__default.createElement(Twitter, null)), /*#__PURE__*/React__default.createElement(LinkUI$3, {
    href: ""
  }, /*#__PURE__*/React__default.createElement(LinkedIn, null)), /*#__PURE__*/React__default.createElement(LinkUI$3, null, /*#__PURE__*/React__default.createElement(Email, null)));
}

function _templateObject$x() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  list-style: none;\n  margin-bottom: -1px;\n  padding: 0.5rem 0.75rem;\n\n  ", "\n"]);

  _templateObject$x = function _templateObject() {
    return data;
  };

  return data;
}

var TabUI = styled__default('li')(_templateObject$x(), function (_ref) {
  var isActive = _ref.isActive;
  return isActive && "\n  background-color: white;\n  border: solid #ccc;\n  border-width: 1px 1px 0 1px;\n  ";
});

var Tab = /*#__PURE__*/function (_Component) {
  _inherits(Tab, _Component);

  var _super = _createSuper(Tab);

  function Tab() {
    var _this;

    _classCallCheck(this, Tab);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "onClick", function () {
      var _this$props = _this.props,
          label = _this$props.label,
          onClick = _this$props.onClick;
      onClick(label);
    });

    return _this;
  }

  _createClass(Tab, [{
    key: "render",
    value: function render() {
      var onClick = this.onClick,
          _this$props2 = this.props,
          activeTab = _this$props2.activeTab,
          label = _this$props2.label;
      return /*#__PURE__*/React__default.createElement(TabUI, {
        isActive: activeTab === label,
        onClick: onClick
      }, label);
    }
  }]);

  return Tab;
}(React.Component);

_defineProperty(Tab, "propTypes", {
  activeTab: propTypes.string.isRequired,
  label: propTypes.string.isRequired,
  onClick: propTypes.func.isRequired
});

function _templateObject3$g() {
  var data = _taggedTemplateLiteral(["\n  padding: 0.5rem 0.75rem;\n"]);

  _templateObject3$g = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$n() {
  var data = _taggedTemplateLiteral(["\n  border-bottom: 1px solid #ccc;\n  padding-left: 0;\n"]);

  _templateObject2$n = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$y() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject$y = function _templateObject() {
    return data;
  };

  return data;
}

var TabsUI = styled__default('div')(_templateObject$y());
var TabsListUI = styled__default('ul')(_templateObject2$n());
var TabsContentUI = styled__default('div')(_templateObject3$g());

var Tabs = /*#__PURE__*/function (_Component) {
  _inherits(Tabs, _Component);

  var _super = _createSuper(Tabs);

  function Tabs(props) {
    var _this;

    _classCallCheck(this, Tabs);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "onClickTabItem", function (tab) {
      _this.setState({
        activeTab: tab
      });
    });

    _this.state = {
      activeTab: _this.props.children[0].props.label
    };
    return _this;
  }

  _createClass(Tabs, [{
    key: "render",
    value: function render() {
      var onClickTabItem = this.onClickTabItem,
          children = this.props.children,
          activeTab = this.state.activeTab;
      return /*#__PURE__*/React__default.createElement(TabsUI, null, /*#__PURE__*/React__default.createElement(TabsListUI, null, children.map(function (child) {
        var label = child.props.label;
        return /*#__PURE__*/React__default.createElement(Tab, {
          activeTab: activeTab,
          key: label,
          label: label,
          onClick: onClickTabItem
        });
      })), /*#__PURE__*/React__default.createElement(TabsContentUI, null, children.map(function (child) {
        if (child.props.label !== activeTab) {
          return undefined;
        }

        return child.props.children;
      })));
    }
  }]);

  return Tabs;
}(React.Component);

_defineProperty(Tabs, "propTypes", {
  children: propTypes.instanceOf(Array).isRequired
});

function _templateObject$z() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  font-style: ", ";\n  font-weight: ", ";\n"]);

  _templateObject$z = function _templateObject() {
    return data;
  };

  return data;
}

function getColor$1(_ref) {
  var color = _ref.color;
  return theme.colors[color];
}

var TextUI = styled__default('span')(_templateObject$z(), getColor$1, function (props) {
  return props.fontStyle;
}, function (_ref2) {
  var isBold = _ref2.isBold;
  return isBold ? '700' : '500';
});

function Text (_ref) {
  var _ref$as = _ref.as,
      as = _ref$as === void 0 ? 'span' : _ref$as,
      children = _ref.children,
      color = _ref.color,
      isBold = _ref.isBold,
      _ref$fontStyle = _ref.fontStyle,
      fontStyle = _ref$fontStyle === void 0 ? 'normal' : _ref$fontStyle;
  return /*#__PURE__*/React__default.createElement(TextUI, {
    as: as,
    color: color,
    fontStyle: fontStyle,
    isBold: isBold
  }, children);
}

function _templateObject$A() {
  var data = _taggedTemplateLiteral(["\nhtml, body {\n  height: 100%;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\n#root {\n  height: 100%;\n}\n\n@font-face {\n  font-family: 'Roboto';\n  font-weight: 500;\n  font-style: normal;\n  src: url('/fonts/roboto-v20-latin-500.woff2') format('woff2'),\n   url('/fonts/roboto-v20-latin-500.woff') format('woff');\n}\n\n@font-face {\n  font-family: 'Roboto';\n  font-weight: 400;\n  font-style: normal;\n  unicode-range: U+000-5FF;\n  src: url('/fonts/roboto-v20-latin-regular.woff2') format('woff2'),\n  url('/fonts/roboto-v20-latin-regular.woff') format('woff');\n }\n\n/* css reset */\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\n\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\nhtml {\n  font-size: 100%;\n}\n\nbody {\n  color: ", ";\n  display: flex;\n  flex-direction: column;\n  font-family: ", ";\n  font-size: 1.15rem;\n  line-height: 1.55;\n  margin: 0;\n  overflow: auto;\n  padding: 0;\n  .is-modal-open {\n    overflow: none;\n  }\n}\n\nimg {\n  max-width: 100%;\n  height: auto;\n}\n\niframe {\n  max-width: 100%;\n}\n\n\n/* link styles */\na:active {\n  color: ", ";\n  text-decoration: none;\n}\n\na:link {\n  text-decoration: none;\n  color: ", ";\n}\n\na:hover {\n  color: ", ";\n  text-decoration: underline;\n}\n\na:visited {\n  color: ", ";\n  text-decoration: none;\n}\n\n/* list and paragraph styles */\np, ul, ol, code {\n  padding: 0;\n  margin-bottom: ", ";\n}\n\nb {\n  font-weight: bold;\n}\n\nul {\n  list-style: disc;\n  margin-left: ", ";\n  margin-right: ", ";\n}\n\nol {\n  margin-left: ", ";\n  margin-right: ", ";\n}\n\nli {\n  margin-bottom: ", ";\n}\n\ncode {\n  box-sizing: border-box;\n  background-color:  ", ";\n  display: block;\n  padding: ", ";\n  color: ", ";\n  width: 100%;\n  font-family: 'Courier New', Courier, monospace;\n  white-space: normal;\n\n  font-size: ", ";\n\n\n  @media (max-width: ", ") {\n   font-size: ", ";\n  }\n\n  @media (max-width: ", ") {\n   font-size: ", ";\n  }\n}\n\n\n/* table styles */\n  table {\n    border-collapse: collapse;\n    border-left: ", ";\n    border-right: ", ";\n    margin: 0;\n    width: 100%;\n  margin-bottom: ", ";\n    tr {\n      border-bottom: ", ";\n      width: 100%;\n    }\n    tr:first-child {\n      border-top: ", ";\n    }\n    td:first-child {\n      font-weight: 700;\n    }\n\n    td, th {\n      background-color: #fff;\n      padding: ", " ", ";\n    }\n\n    th {\n      background-color: ", ";\n    }\n  }\n\n\n  @media (max-width: ", ") {\n    table.responsive-collapse {\n\n    table, thead, tbody, th, td, tr {\n\t\tdisplay: block;\n\t}\n\n  thead tr {\n\t\tposition: absolute;\n\t\ttop: -9999px;\n\t\tleft: -9999px;\n\t}\n    }\n\n  table.n-plus-2 {\n  td:nth-child(n+2) {\n    display: inline-block\n\t}\n  }\n  }\n\n\n.lead {\n  font-size: ", ";\n  line-height: 130%;\n  font-family: ", ";\n\n  @media (max-width: ", ") {\n   font-size: ", ";\n  }\n\n  @media (max-width: ", ") {\n   font-size: ", ";\n  }\n}\n"]);

  _templateObject$A = function _templateObject() {
    return data;
  };

  return data;
}
var GlobalStyles = styled.createGlobalStyle(_templateObject$A(), theme.colors.dark4, theme.typography.fonts.font1, theme.colors.dark3, theme.colors.dark3, theme.colors.dark3, theme.colors.dark3, theme.unit(0.75), theme.unit(1), theme.unit(0.5), theme.unit(1), theme.unit(0.5), theme.unit(0.75), theme.colors.light1, theme.unit(0.5), theme.colors.dark1, theme.typography.sizes.desktop.sm, theme.breakPointsAsPixel.tablet, theme.typography.sizes.tablet.sm, theme.breakPointsAsPixel.mobile, theme.typography.sizes.mobile.xsm, theme.border, theme.border, theme.unit(1), theme.border, theme.border, theme.unit(0.25), theme.unit(0.5), theme.colors.light1, theme.breakPointsAsPixel.mobile, theme.typography.sizes.desktop.md, theme.typography.fonts['font-3'], theme.breakPointsAsPixel.tablet, theme.typography.sizes.tablet.md, theme.breakPointsAsPixel.mobile, theme.typography.sizes.mobile.md);

function head () {
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(GlobalStyles, null));
}

var prismicReactjs = createCommonjsModule(function (module, exports) {
(function webpackUniversalModuleDefinition(root, factory) {
	module.exports = factory(React__default);
})(typeof self !== 'undefined' ? self : commonjsGlobal, function(__WEBPACK_EXTERNAL_MODULE_react__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

/* eslint-disable no-unused-vars */

var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
  if (val === null || val === undefined) {
    throw new TypeError('Object.assign cannot be called with null or undefined');
  }

  return Object(val);
}

function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    } // Detect buggy property enumeration order in older V8 versions.
    // https://bugs.chromium.org/p/v8/issues/detail?id=4118


    var test1 = new String('abc'); // eslint-disable-line no-new-wrappers

    test1[5] = 'de';

    if (Object.getOwnPropertyNames(test1)[0] === '5') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test2 = {};

    for (var i = 0; i < 10; i++) {
      test2['_' + String.fromCharCode(i)] = i;
    }

    var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
      return test2[n];
    });

    if (order2.join('') !== '0123456789') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test3 = {};
    'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
      test3[letter] = letter;
    });

    if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
      return false;
    }

    return true;
  } catch (err) {
    // We don't expect any of the above to throw, but better to be safe.
    return false;
  }
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
  var from;
  var to = toObject(target);
  var symbols;

  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);

    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }

    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);

      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }

  return to;
};

/***/ }),

/***/ "./node_modules/prismic-helpers/dist/prismic-helpers.min.js":
/*!******************************************************************!*\
  !*** ./node_modules/prismic-helpers/dist/prismic-helpers.min.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function (e, t) {
    module.exports = t() ;
}("undefined" != typeof self ? self : this, function () {
  return function (e) {
    var t = {};

    function n(r) {
      if (t[r]) return t[r].exports;
      var o = t[r] = {
        i: r,
        l: !1,
        exports: {}
      };
      return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
    }

    return n.m = e, n.c = t, n.d = function (e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, {
        enumerable: !0,
        get: r
      });
    }, n.r = function (e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(e, "__esModule", {
        value: !0
      });
    }, n.t = function (e, t) {
      if (1 & t && (e = n(e)), 8 & t) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (n.r(r), Object.defineProperty(r, "default", {
        enumerable: !0,
        value: e
      }), 2 & t && "string" != typeof e) for (var o in e) n.d(r, o, function (t) {
        return e[t];
      }.bind(null, o));
      return r;
    }, n.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e.default;
      } : function () {
        return e;
      };
      return n.d(t, "a", t), t;
    }, n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, n.p = "", n(n.s = 0);
  }([function (e, t, n) {
    e.exports = n(1);
  }, function (e, t, n) {
    var r = n(2),
        o = n(3);
    e.exports = {
      Link: r,
      Date: o
    };
  }, function (e, t, n) {
    e.exports = {
      url: function (e, t) {
        if (e && [e.link_type, e._linkType, e.linkType].some(function (e) {
          return e && ["Document", "Link.Document", "Link.document"].includes(e);
        }) && t && "function" == typeof t) {
          var n = t(e);
          if (n) return n;
        }

        return e && e.url ? e.url : "";
      }
    };
  }, function (e, t) {
    e.exports = function (e) {
      if (!e) return null;
      var t = 24 == e.length ? "".concat(e.substring(0, 22), ":").concat(e.substring(22, 24)) : e;
      return new Date(t);
    };
  }]);
});

/***/ }),

/***/ "./node_modules/prismic-richtext/dist/prismic-richtext.min.js":
/*!********************************************************************!*\
  !*** ./node_modules/prismic-richtext/dist/prismic-richtext.min.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function (e, t) {
    module.exports = t() ;
}("undefined" != typeof self ? self : this, function () {
  return function (e) {
    var t = {};

    function n(r) {
      if (t[r]) return t[r].exports;
      var o = t[r] = {
        i: r,
        l: !1,
        exports: {}
      };
      return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
    }

    return n.m = e, n.c = t, n.d = function (e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, {
        enumerable: !0,
        get: r
      });
    }, n.r = function (e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(e, "__esModule", {
        value: !0
      });
    }, n.t = function (e, t) {
      if (1 & t && (e = n(e)), 8 & t) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (n.r(r), Object.defineProperty(r, "default", {
        enumerable: !0,
        value: e
      }), 2 & t && "string" != typeof e) for (var o in e) n.d(r, o, function (t) {
        return e[t];
      }.bind(null, o));
      return r;
    }, n.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e.default;
      } : function () {
        return e;
      };
      return n.d(t, "a", t), t;
    }, n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, n.p = "", n(n.s = 9);
  }([function (e, t, n) {
    var r = n(3);

    e.exports = function (e) {
      return function t(n) {
        return 0 === arguments.length || r(n) ? t : e.apply(this, arguments);
      };
    };
  }, function (e, t, n) {
    var r = n(0),
        o = n(3);

    e.exports = function (e) {
      return function t(n, i) {
        switch (arguments.length) {
          case 0:
            return t;

          case 1:
            return o(n) ? t : r(function (t) {
              return e(n, t);
            });

          default:
            return o(n) && o(i) ? t : o(n) ? r(function (t) {
              return e(t, i);
            }) : o(i) ? r(function (t) {
              return e(n, t);
            }) : e(n, i);
        }
      };
    };
  }, function (e, t, n) {

    var r;

    function o(e, t, n) {
      return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n, e;
    }

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.PRIORITIES = t.NODE_TYPES = void 0;
    var i = {
      heading1: "heading1",
      heading2: "heading2",
      heading3: "heading3",
      heading4: "heading4",
      heading5: "heading5",
      heading6: "heading6",
      paragraph: "paragraph",
      preformatted: "preformatted",
      strong: "strong",
      em: "em",
      listItem: "list-item",
      oListItem: "o-list-item",
      list: "group-list-item",
      oList: "group-o-list-item",
      image: "image",
      embed: "embed",
      hyperlink: "hyperlink",
      label: "label",
      span: "span"
    };
    t.NODE_TYPES = i;
    var u = (o(r = {}, i.heading1, 4), o(r, i.heading2, 4), o(r, i.heading3, 4), o(r, i.heading4, 4), o(r, i.heading5, 4), o(r, i.heading6, 4), o(r, i.paragraph, 3), o(r, i.preformatted, 5), o(r, i.strong, 6), o(r, i.em, 6), o(r, i.oList, 1), o(r, i.list, 1), o(r, i.listItem, 1), o(r, i.oListItem, 1), o(r, i.image, 1), o(r, i.embed, 1), o(r, i.hyperlink, 3), o(r, i.label, 4), o(r, i.span, 7), r);
    t.PRIORITIES = u;
  }, function (e, t) {
    e.exports = function (e) {
      return null != e && "object" == typeof e && !0 === e["@@functional/placeholder"];
    };
  }, function (e, t, n) {

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;
    var r = d(n(12)),
        o = d(n(15)),
        i = d(n(16)),
        u = d(n(17)),
        c = d(n(21)),
        a = d(n(7)),
        l = n(23),
        f = n(2),
        s = n(8);

    function d(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function p(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }

    function h(e) {
      return function (e) {
        if (Array.isArray(e)) return e;
      }(e) || function (e) {
        if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e);
      }(e) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }();
    }

    function y(e, t) {
      var n = t.others.reduce(function (n, r) {
        var o = n.inner,
            i = n.outer,
            u = function (e, t, n) {
          return n.start < t.start ? {
            inner: s.SpanNode.slice(n, t.start, n.end, e),
            outer: s.SpanNode.slice(n, n.start, t.start, e)
          } : n.end > t.end ? {
            inner: s.SpanNode.slice(n, n.start, t.end, e),
            outer: s.SpanNode.slice(n, t.end, n.end, e)
          } : {
            inner: n
          };
        }(e, t.elected, r);

        return {
          inner: o.concat(u.inner),
          outer: u.outer ? i.concat(u.outer) : i
        };
      }, {
        inner: [],
        outer: []
      }),
          r = n.inner,
          o = n.outer;
      return [t.elected.setChildren(x(e, r, t.elected.boundaries()))].concat(b(e, o));
    }

    function v(e) {
      return function (e, t) {
        return t.reduce(function (t, n) {
          var r = (0, c.default)(t);

          if (r) {
            if (r.some(function (e) {
              return e.isParentOf(n);
            })) return (0, u.default)(t).concat([r.concat(n)]);
            var o = (0, c.default)(r);
            return o && e(o, n) ? (0, u.default)(t).concat([r.concat(n)]) : t.concat([[n]]);
          }

          return [[n]];
        }, []);
      }(function (e, t) {
        return e.end >= t.start;
      }, (0, i.default)([function (e, t) {
        return e.start - t.start;
      }, function (e, t) {
        return e.end - t.end;
      }], e));
    }

    function m(e) {
      if (0 === e.length) throw new Error("Unable to elect node on empty list");
      var t = h(e.sort(function (e, t) {
        if (e.isParentOf(t)) return -1;
        if (t.isParentOf(e)) return 1;
        var n = f.PRIORITIES[e.type] - f.PRIORITIES[t.type];
        return 0 === n ? e.text.length - t.text.length : n;
      }));
      return {
        elected: t[0],
        others: t.slice(1)
      };
    }

    function x(e, t, n) {
      if (t.length > 0) return function (e, t, n) {
        return t.reduce(function (r, o, i) {
          var u = [],
              c = 0 === i && o.start > n.lower,
              a = i === t.length - 1 && n.upper > o.end;

          if (c) {
            var l = new s.TextNode(n.lower, o.start, e.slice(n.lower, o.start));
            u = u.concat(l);
          } else {
            var f = t[i - 1];

            if (f && o.start > f.end) {
              var d = e.slice(f.end, o.start),
                  p = new s.TextNode(f.end, o.start, d);
              u = u.concat(p);
            }
          }

          if (u = u.concat(o), a) {
            var h = new s.TextNode(o.end, n.upper, e.slice(o.end, n.upper));
            u = u.concat(h);
          }

          return r.concat(u);
        }, []);
      }(e, b(e, t), n);
      var r = e.slice(n.lower, n.upper);
      return [new s.TextNode(n.lower, n.upper, r)];
    }

    function b(e, t) {
      var n = v((0, o.default)(function (e) {
        return e.start;
      }, t)).map(m),
          i = (0, r.default)(n.map(function (t) {
        return y(e, t);
      }));
      return (0, o.default)(function (e) {
        return e.start;
      }, i);
    }

    var g = function () {
      function e() {
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, e);
      }

      var t, n, r;
      return t = e, r = [{
        key: "fromRichText",
        value: function (e) {
          return {
            key: (0, a.default)(),
            children: e.reduce(function (e, t, n) {
              if (l.RichTextBlock.isEmbedBlock(t.type) || l.RichTextBlock.isImageBlock(t.type)) return e.concat(new s.BlockNode(t.type, t));

              var r = function (e) {
                var t = e.spans.map(function (t) {
                  var n = e.text.slice(t.start, t.end);
                  return new s.SpanNode(t.start, t.end, t.type, n, [], t);
                }),
                    n = {
                  lower: 0,
                  upper: e.text.length
                };
                return x(e.text, t, n);
              }(t),
                  o = e[e.length - 1];

              if (l.RichTextBlock.isListItem(t.type) && o && o instanceof s.ListBlockNode) {
                var i = new s.ListItemBlockNode(t, r),
                    c = o.addChild(i);
                return (0, u.default)(e).concat(c);
              }

              if (l.RichTextBlock.isOrderedListItem(t.type) && o && o instanceof s.OrderedListBlockNode) {
                var a = new s.OrderedListItemBlockNode(t, r),
                    f = o.addChild(a);
                return (0, u.default)(e).concat(f);
              }

              if (l.RichTextBlock.isListItem(t.type)) {
                var d = new s.ListItemBlockNode(t, r),
                    p = new s.ListBlockNode(l.RichTextBlock.emptyList(), [d]);
                return e.concat(p);
              }

              if (l.RichTextBlock.isOrderedListItem(t.type)) {
                var h = new s.OrderedListItemBlockNode(t, r),
                    y = new s.OrderedListBlockNode(l.RichTextBlock.emptyOrderedList(), [h]);
                return e.concat(y);
              }

              return e.concat(new s.BlockNode(t.type, t, r));
            }, [])
          };
        }
      }], (n = null) && p(t.prototype, n), r && p(t, r), e;
    }();

    t.default = g;
  }, function (e, t) {
    e.exports = Array.isArray || function (e) {
      return null != e && e.length >= 0 && "[object Array]" === Object.prototype.toString.call(e);
    };
  }, function (e, t) {
    e.exports = function (e) {
      return "[object String]" === Object.prototype.toString.call(e);
    };
  }, function (e, t, n) {

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = function () {
      var e = new Date().getTime();
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (t) {
        var n = (e + 16 * Math.random()) % 16 | 0;
        return e = Math.floor(e / 16), ("x" == t ? n : 3 & n | 8).toString(16);
      });
    };
  }, function (e, t, n) {

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.ListBlockNode = t.OrderedListBlockNode = t.OrderedListItemBlockNode = t.ListItemBlockNode = t.BlockNode = t.TextNode = t.SpanNode = t.Node = void 0;
    var r,
        o = (r = n(7)) && r.__esModule ? r : {
      default: r
    },
        i = n(2);

    function u(e) {
      return (u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
      })(e);
    }

    function c(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }

    function a(e, t, n) {
      return t && c(e.prototype, t), n && c(e, n), e;
    }

    function l(e, t) {
      return !t || "object" !== u(t) && "function" != typeof t ? function (e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e;
      }(e) : t;
    }

    function f(e) {
      return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }

    function s(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          writable: !0,
          configurable: !0
        }
      }), t && d(e, t);
    }

    function d(e, t) {
      return (d = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }

    function p(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }

    var h = function e(t, n, r) {
      p(this, e), this.key = (0, o.default)(), this.type = t, this.element = n, this.children = r;
    };

    t.Node = h;

    var y = function (e) {
      function t(e, n, r, o, i, u) {
        var c;
        return p(this, t), (c = l(this, f(t).call(this, r, u, i))).start = e, c.end = n, c.text = o, c.children = i, c;
      }

      return s(t, h), a(t, [{
        key: "boundaries",
        value: function () {
          return {
            lower: this.start,
            upper: this.end
          };
        }
      }, {
        key: "isParentOf",
        value: function (e) {
          return this.start <= e.start && this.end >= e.end;
        }
      }, {
        key: "setChildren",
        value: function (e) {
          return new t(this.start, this.end, this.type, this.text, e, this.element);
        }
      }], [{
        key: "slice",
        value: function (e, n, r, o) {
          return new t(n, r, e.type, o.slice(n, r), e.children, e.element);
        }
      }]), t;
    }();

    t.SpanNode = y;

    var v = function (e) {
      function t(e, n, r) {
        p(this, t);
        var o = {
          type: i.NODE_TYPES.span,
          start: e,
          end: n,
          text: r
        };
        return l(this, f(t).call(this, e, n, i.NODE_TYPES.span, r, [], o));
      }

      return s(t, y), t;
    }();

    t.TextNode = v;

    var m = function (e) {
      function t(e, n) {
        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
        return p(this, t), l(this, f(t).call(this, e, n, r));
      }

      return s(t, h), t;
    }();

    t.BlockNode = m;

    var x = function (e) {
      function t(e, n) {
        return p(this, t), l(this, f(t).call(this, i.NODE_TYPES.listItem, e, n));
      }

      return s(t, m), t;
    }();

    t.ListItemBlockNode = x;

    var b = function (e) {
      function t(e, n) {
        return p(this, t), l(this, f(t).call(this, i.NODE_TYPES.oListItem, e, n));
      }

      return s(t, m), t;
    }();

    t.OrderedListItemBlockNode = b;

    var g = function (e) {
      function t(e, n) {
        return p(this, t), l(this, f(t).call(this, i.NODE_TYPES.oList, e, n));
      }

      return s(t, m), a(t, [{
        key: "addChild",
        value: function (e) {
          var n = this.children.concat(e);
          return new t(this.element, n);
        }
      }]), t;
    }();

    t.OrderedListBlockNode = g;

    var O = function (e) {
      function t(e, n) {
        return p(this, t), l(this, f(t).call(this, i.NODE_TYPES.list, e, n));
      }

      return s(t, m), a(t, [{
        key: "addChild",
        value: function (e) {
          var n = this.children.concat(e);
          return new t(this.element, n);
        }
      }]), t;
    }();

    t.ListBlockNode = O;
  }, function (e, t, n) {
    e.exports = n(10);
  }, function (e, t, n) {

    var r = c(n(11)),
        o = c(n(4)),
        i = c(n(24)),
        u = n(2);

    function c(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    e.exports = {
      asText: r.default,
      asTree: o.default.fromRichText,
      serialize: i.default,
      Elements: u.NODE_TYPES
    };
  }, function (e, t, n) {

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;

    var r = function (e, t) {
      var n = "string" == typeof t ? t : " ";
      return e.map(function (e) {
        return e.text;
      }).join(n);
    };

    t.default = r;
  }, function (e, t, n) {
    var r = n(0)(n(13)(!0));
    e.exports = r;
  }, function (e, t, n) {
    var r = n(14);

    e.exports = function (e) {
      return function t(n) {
        for (var o, i, u, c = [], a = 0, l = n.length; a < l;) {
          if (r(n[a])) for (u = 0, i = (o = e ? t(n[a]) : n[a]).length; u < i;) c[c.length] = o[u], u += 1;else c[c.length] = n[a];
          a += 1;
        }

        return c;
      };
    };
  }, function (e, t, n) {
    var r = n(0),
        o = n(5),
        i = n(6),
        u = r(function (e) {
      return !!o(e) || !!e && "object" == typeof e && !i(e) && (1 === e.nodeType ? !!e.length : 0 === e.length || e.length > 0 && e.hasOwnProperty(0) && e.hasOwnProperty(e.length - 1));
    });
    e.exports = u;
  }, function (e, t, n) {
    var r = n(1)(function (e, t) {
      return Array.prototype.slice.call(t, 0).sort(function (t, n) {
        var r = e(t),
            o = e(n);
        return r < o ? -1 : r > o ? 1 : 0;
      });
    });
    e.exports = r;
  }, function (e, t, n) {
    var r = n(1)(function (e, t) {
      return Array.prototype.slice.call(t, 0).sort(function (t, n) {
        for (var r = 0, o = 0; 0 === r && o < e.length;) r = e[o](t, n), o += 1;

        return r;
      });
    });
    e.exports = r;
  }, function (e, t, n) {
    var r = n(18)(0, -1);
    e.exports = r;
  }, function (e, t, n) {
    var r = n(19),
        o = n(20)(r("slice", function (e, t, n) {
      return Array.prototype.slice.call(n, e, t);
    }));
    e.exports = o;
  }, function (e, t, n) {
    var r = n(5);

    e.exports = function (e, t) {
      return function () {
        var n = arguments.length;
        if (0 === n) return t();
        var o = arguments[n - 1];
        return r(o) || "function" != typeof o[e] ? t.apply(this, arguments) : o[e].apply(o, Array.prototype.slice.call(arguments, 0, n - 1));
      };
    };
  }, function (e, t, n) {
    var r = n(0),
        o = n(1),
        i = n(3);

    e.exports = function (e) {
      return function t(n, u, c) {
        switch (arguments.length) {
          case 0:
            return t;

          case 1:
            return i(n) ? t : o(function (t, r) {
              return e(n, t, r);
            });

          case 2:
            return i(n) && i(u) ? t : i(n) ? o(function (t, n) {
              return e(t, u, n);
            }) : i(u) ? o(function (t, r) {
              return e(n, t, r);
            }) : r(function (t) {
              return e(n, u, t);
            });

          default:
            return i(n) && i(u) && i(c) ? t : i(n) && i(u) ? o(function (t, n) {
              return e(t, n, c);
            }) : i(n) && i(c) ? o(function (t, n) {
              return e(t, u, n);
            }) : i(u) && i(c) ? o(function (t, r) {
              return e(n, t, r);
            }) : i(n) ? r(function (t) {
              return e(t, u, c);
            }) : i(u) ? r(function (t) {
              return e(n, t, c);
            }) : i(c) ? r(function (t) {
              return e(n, u, t);
            }) : e(n, u, c);
        }
      };
    };
  }, function (e, t, n) {
    var r = n(22)(-1);
    e.exports = r;
  }, function (e, t, n) {
    var r = n(1),
        o = n(6),
        i = r(function (e, t) {
      var n = e < 0 ? t.length + e : e;
      return o(t) ? t.charAt(n) : t[n];
    });
    e.exports = i;
  }, function (e, t, n) {

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.RichTextBlock = void 0;
    var r = n(2);

    function o(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }

    var i = function () {
      function e(t, n, r) {
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, e), this.type = t, this.text = n, this.spans = r;
      }

      var t, n, i;
      return t = e, i = [{
        key: "isEmbedBlock",
        value: function (e) {
          return e === r.NODE_TYPES.embed;
        }
      }, {
        key: "isImageBlock",
        value: function (e) {
          return e === r.NODE_TYPES.image;
        }
      }, {
        key: "isList",
        value: function (e) {
          return e === r.NODE_TYPES.list;
        }
      }, {
        key: "isOrderedList",
        value: function (e) {
          return e === r.NODE_TYPES.oList;
        }
      }, {
        key: "isListItem",
        value: function (e) {
          return e === r.NODE_TYPES.listItem;
        }
      }, {
        key: "isOrderedListItem",
        value: function (e) {
          return e === r.NODE_TYPES.oListItem;
        }
      }, {
        key: "emptyList",
        value: function () {
          return {
            type: r.NODE_TYPES.list,
            spans: [],
            text: ""
          };
        }
      }, {
        key: "emptyOrderedList",
        value: function () {
          return {
            type: r.NODE_TYPES.oList,
            spans: [],
            text: ""
          };
        }
      }], (n = null) && o(t.prototype, n), i && o(t, i), e;
    }();

    t.RichTextBlock = i;
  }, function (e, t, n) {

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;
    var r,
        o = (r = n(4)) && r.__esModule ? r : {
      default: r
    },
        i = n(8);

    var u = function (e, t, n) {
      return o.default.fromRichText(e).children.map(function (e, r) {
        return function (e, t, n, r) {
          return function e(n, o) {
            var u = n instanceof i.SpanNode ? n.text : null,
                c = n.children.reduce(function (t, n, r) {
              return t.concat([e(n, r)]);
            }, []),
                a = r && r(n.type, n.element, u, c, o);
            return a || t(n.type, n.element, u, c, o);
          }(e, n);
        }(e, t, r, n);
      });
    };

    t.default = u;
  }]);
});

/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var printWarning = function () {};

{
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");

  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function (text) {
    var message = 'Warning: ' + text;

    if (typeof console !== 'undefined') {
      console.error(message);
    }

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}
/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */


function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }

        if (error && !(error instanceof Error)) {
          printWarning((componentName || 'React class') + ': type specification of ' + location + ' `' + typeSpecName + '` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a ' + typeof error + '. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).');
        }

        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;
          var stack = getStack ? getStack() : '';
          printWarning('Failed ' + location + ' type: ' + error.message + (stack != null ? stack : ''));
        }
      }
    }
  }
}
/**
 * Resets warning cache when testing.
 *
 * @private
 */


checkPropTypes.resetWarningCache = function () {
  {
    loggedTypeFailures = {};
  }
};

module.exports = checkPropTypes;

/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");

var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);

var printWarning = function () {};

{
  printWarning = function (text) {
    var message = 'Warning: ' + text;

    if (typeof console !== 'undefined') {
      console.error(message);
    }

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function (isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */

  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);

    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }
  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */


  var ANONYMOUS = '<<anonymous>>'; // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.

  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),
    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker
  };
  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */

  /*eslint-disable no-self-compare*/

  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */


  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  } // Make `instanceof Error` still work for returned errors.


  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }

    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use `PropTypes.checkPropTypes()` to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
          err.name = 'Invariant Violation';
          throw err;
        } else if (  typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;

          if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
          manualPropTypeWarningCount < 3) {
            printWarning('You are manually calling a React.PropTypes validation ' + 'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' + 'and will throw in the standalone `prop-types` package. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.');
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }

      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }

          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }

        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);
    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }

      var propValue = props[propName];

      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }

      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);

        if (error instanceof Error) {
          return error;
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];

      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];

      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      {
        if (arguments.length > 1) {
          printWarning('Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' + 'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).');
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }

      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];

      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);

        if (type === 'symbol') {
          return String(value);
        }

        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }

    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }

      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }

      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);

          if (error instanceof Error) {
            return error;
          }
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
        printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') ;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];

      if (typeof checker !== 'function') {
        printWarning('Invalid argument supplied to oneOfType. Expected an array of check functions, but ' + 'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.');
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];

        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }

    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }

      for (var key in shapeTypes) {
        var checker = shapeTypes[key];

        if (!checker) {
          continue;
        }

        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);

        if (error) {
          return error;
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      } // We need to check all keys in case some are required but missing from
      // props.


      var allKeys = assign({}, props[propName], shapeTypes);

      for (var key in allKeys) {
        var checker = shapeTypes[key];

        if (!checker) {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' + '\nBad object: ' + JSON.stringify(props[propName], null, '  ') + '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  '));
        }

        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);

        if (error) {
          return error;
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;

      case 'boolean':
        return !propValue;

      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }

        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);

        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;

          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;

              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;

      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    } // falsy value can't be a Symbol


    if (!propValue) {
      return false;
    } // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'


    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    } // Fallback for non-spec compliant Symbols which are polyfilled.


    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  } // Equivalent of `typeof` but with special handling for array and regexp.


  function getPropType(propValue) {
    var propType = typeof propValue;

    if (Array.isArray(propValue)) {
      return 'array';
    }

    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }

    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }

    return propType;
  } // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.


  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }

    var propType = getPropType(propValue);

    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }

    return propType;
  } // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"


  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);

    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;

      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;

      default:
        return type;
    }
  } // Returns class name of the object, if any.


  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }

    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;
  return ReactPropTypes;
};

/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
{
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js"); // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod


  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
}

/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
module.exports = ReactPropTypesSecret;

/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {
/** @license React v16.9.0
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


{
  (function () {

    Object.defineProperty(exports, '__esModule', {
      value: true
    }); // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
    // nor polyfill, then a plain number is used for performance.

    var hasSymbol = typeof Symbol === 'function' && Symbol.for;
    var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
    var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
    var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
    var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
    var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
    var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
    var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
    // (unstable) APIs that have been removed. Can we remove the symbols?

    var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
    var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
    var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
    var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
    var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
    var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
    var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
    var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
    var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;

    function isValidElementType(type) {
      return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE);
    }
    /**
     * Forked from fbjs/warning:
     * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
     *
     * Only change is we use console.warn instead of console.error,
     * and do nothing when 'console' is not supported.
     * This really simplifies the code.
     * ---
     * Similar to invariant but only logs a warning if the condition is not met.
     * This can be used to log issues in development environments in critical
     * paths. Removing the logging code for production environments will keep the
     * same logic and follow the same code paths.
     */


    var lowPriorityWarning = function () {};

    {
      var printWarning = function (format) {
        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        var argIndex = 0;
        var message = 'Warning: ' + format.replace(/%s/g, function () {
          return args[argIndex++];
        });

        if (typeof console !== 'undefined') {
          console.warn(message);
        }

        try {
          // --- Welcome to debugging React ---
          // This error was thrown as a convenience so that you can use this stack
          // to find the callsite that caused this warning to fire.
          throw new Error(message);
        } catch (x) {}
      };

      lowPriorityWarning = function (condition, format) {
        if (format === undefined) {
          throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
        }

        if (!condition) {
          for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
            args[_key2 - 2] = arguments[_key2];
          }

          printWarning.apply(undefined, [format].concat(args));
        }
      };
    }
    var lowPriorityWarning$1 = lowPriorityWarning;

    function typeOf(object) {
      if (typeof object === 'object' && object !== null) {
        var $$typeof = object.$$typeof;

        switch ($$typeof) {
          case REACT_ELEMENT_TYPE:
            var type = object.type;

            switch (type) {
              case REACT_ASYNC_MODE_TYPE:
              case REACT_CONCURRENT_MODE_TYPE:
              case REACT_FRAGMENT_TYPE:
              case REACT_PROFILER_TYPE:
              case REACT_STRICT_MODE_TYPE:
              case REACT_SUSPENSE_TYPE:
                return type;

              default:
                var $$typeofType = type && type.$$typeof;

                switch ($$typeofType) {
                  case REACT_CONTEXT_TYPE:
                  case REACT_FORWARD_REF_TYPE:
                  case REACT_PROVIDER_TYPE:
                    return $$typeofType;

                  default:
                    return $$typeof;
                }

            }

          case REACT_LAZY_TYPE:
          case REACT_MEMO_TYPE:
          case REACT_PORTAL_TYPE:
            return $$typeof;
        }
      }

      return undefined;
    } // AsyncMode is deprecated along with isAsyncMode


    var AsyncMode = REACT_ASYNC_MODE_TYPE;
    var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
    var ContextConsumer = REACT_CONTEXT_TYPE;
    var ContextProvider = REACT_PROVIDER_TYPE;
    var Element = REACT_ELEMENT_TYPE;
    var ForwardRef = REACT_FORWARD_REF_TYPE;
    var Fragment = REACT_FRAGMENT_TYPE;
    var Lazy = REACT_LAZY_TYPE;
    var Memo = REACT_MEMO_TYPE;
    var Portal = REACT_PORTAL_TYPE;
    var Profiler = REACT_PROFILER_TYPE;
    var StrictMode = REACT_STRICT_MODE_TYPE;
    var Suspense = REACT_SUSPENSE_TYPE;
    var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

    function isAsyncMode(object) {
      {
        if (!hasWarnedAboutDeprecatedIsAsyncMode) {
          hasWarnedAboutDeprecatedIsAsyncMode = true;
          lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
        }
      }
      return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
    }

    function isConcurrentMode(object) {
      return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
    }

    function isContextConsumer(object) {
      return typeOf(object) === REACT_CONTEXT_TYPE;
    }

    function isContextProvider(object) {
      return typeOf(object) === REACT_PROVIDER_TYPE;
    }

    function isElement(object) {
      return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
    }

    function isForwardRef(object) {
      return typeOf(object) === REACT_FORWARD_REF_TYPE;
    }

    function isFragment(object) {
      return typeOf(object) === REACT_FRAGMENT_TYPE;
    }

    function isLazy(object) {
      return typeOf(object) === REACT_LAZY_TYPE;
    }

    function isMemo(object) {
      return typeOf(object) === REACT_MEMO_TYPE;
    }

    function isPortal(object) {
      return typeOf(object) === REACT_PORTAL_TYPE;
    }

    function isProfiler(object) {
      return typeOf(object) === REACT_PROFILER_TYPE;
    }

    function isStrictMode(object) {
      return typeOf(object) === REACT_STRICT_MODE_TYPE;
    }

    function isSuspense(object) {
      return typeOf(object) === REACT_SUSPENSE_TYPE;
    }

    exports.typeOf = typeOf;
    exports.AsyncMode = AsyncMode;
    exports.ConcurrentMode = ConcurrentMode;
    exports.ContextConsumer = ContextConsumer;
    exports.ContextProvider = ContextProvider;
    exports.Element = Element;
    exports.ForwardRef = ForwardRef;
    exports.Fragment = Fragment;
    exports.Lazy = Lazy;
    exports.Memo = Memo;
    exports.Portal = Portal;
    exports.Profiler = Profiler;
    exports.StrictMode = StrictMode;
    exports.Suspense = Suspense;
    exports.isValidElementType = isValidElementType;
    exports.isAsyncMode = isAsyncMode;
    exports.isConcurrentMode = isConcurrentMode;
    exports.isContextConsumer = isContextConsumer;
    exports.isContextProvider = isContextProvider;
    exports.isElement = isElement;
    exports.isForwardRef = isForwardRef;
    exports.isFragment = isFragment;
    exports.isLazy = isLazy;
    exports.isMemo = isMemo;
    exports.isPortal = isPortal;
    exports.isProfiler = isProfiler;
    exports.isStrictMode = isStrictMode;
    exports.isSuspense = isSuspense;
  })();
}

/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


{
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}

/***/ }),

/***/ "./src/Component.js":
/*!**************************!*\
  !*** ./src/Component.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prismic_richtext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prismic-richtext */ "./node_modules/prismic-richtext/dist/prismic-richtext.min.js");
/* harmony import */ var _richtext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./richtext */ "./src/richtext.js");
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var createHtmlSerializer = function createHtmlSerializer() {
  var serializers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var processors = serializers.reduce(function (acc, _ref) {
    var type = _ref.type,
        fn = _ref.fn;
    return Object.assign({}, acc, _defineProperty({}, type, fn));
  }, {});
  return function (type) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return processors[type] ? processors[type].apply(processors, [type].concat(args)) : null;
  };
};

var RichText = function RichText(_ref2) {
  var Component = _ref2.Component,
      elements = _ref2.elements,
      htmlSerializer = _ref2.htmlSerializer,
      linkResolver = _ref2.linkResolver,
      render = _ref2.render,
      renderAsText = _ref2.renderAsText,
      serializeHyperlink = _ref2.serializeHyperlink,
      rest = _objectWithoutProperties(_ref2, ["Component", "elements", "htmlSerializer", "linkResolver", "render", "renderAsText", "serializeHyperlink"]);

  var maybeSerializer = htmlSerializer || serializeHyperlink && createHtmlSerializer({}, [{
    type: prismic_richtext__WEBPACK_IMPORTED_MODULE_2__["Elements"].hyperlink,
    fn: serializeHyperlink
  }]);
  return render ? Object(_richtext__WEBPACK_IMPORTED_MODULE_3__["renderRichText"])(render, linkResolver, maybeSerializer, Component, elements, rest) : null;
};

RichText.propTypes = {
  Component: prop_types__WEBPACK_IMPORTED_MODULE_1__["elementType"],
  linkResolver: prop_types__WEBPACK_IMPORTED_MODULE_1__["func"],
  htmlSerializer: prop_types__WEBPACK_IMPORTED_MODULE_1__["func"],
  elements: prop_types__WEBPACK_IMPORTED_MODULE_1__["object"],
  serializeHyperlink: function serializeHyperlink(props, _, componentName) {
    if (props.serializeHyperlink && props.htmlSerializer) {
      return new Error("You cannot specify both 'htmlSerializer' and 'serializeHyperlink'. The latter will be ignored by '".concat(componentName, "'."));
    }
  },
  render: function render(props, _, componentName) {
    if (!props.render) {
      return new Error("Prop 'render' was not specified in '".concat(componentName, "'."));
    }
  }
};
RichText.asText = _richtext__WEBPACK_IMPORTED_MODULE_3__["asText"];
RichText.render = _richtext__WEBPACK_IMPORTED_MODULE_3__["renderRichText"];
RichText.displayName = 'RichText';
/* harmony default export */ __webpack_exports__["default"] = (RichText);

/***/ }),

/***/ "./src/embeds.js":
/*!***********************!*\
  !*** ./src/embeds.js ***!
  \***********************/
/*! exports provided: createScript, embeds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createScript", function() { return createScript; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "embeds", function() { return embeds; });
function createScript(_ref) {
  var property = _ref.property,
      src = _ref.src,
      id = _ref.id;

  if (!window) {
    return;
  }

  (function (src, id) {
    var js,
        fjs = document.getElementsByTagName('script')[0],
        t = window[property] || {};

    if (document.getElementById(id)) {
      return t;
    }

    js = document.createElement('script');
    js.id = id;
    js.src = src;
    fjs.parentNode.insertBefore(js, fjs);
    t._e = [];

    t.ready = function (f) {
      t._e.push(f);
    };

    return t;
  })(src, id);
}
var embeds = {
  Twitter: {
    property: 'twttr',
    src: 'https://platform.twitter.com/widgets.js',
    id: 'twitter-wjs',
    load: function load() {
      if (window && window.twttr) {
        window.twttr.widgets.load();
      }
    }
  },
  Facebook: {
    property: 'FB',
    src: 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.3',
    id: 'fb-wjs',
    load: function load(ref) {
      if (window && window.FB) {
        window.FB.XFBML.parse(ref);
      }
    }
  },
  Instagram: {
    property: 'instgrm',
    src: 'https://www.instagram.com/embed.js',
    id: 'insta-wjs',
    load: function load() {
      if (window && window.instgrm) {
        window.instgrm.Embeds.process();
      }
    }
  }
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var PrismicHelpers = __webpack_require__(/*! prismic-helpers */ "./node_modules/prismic-helpers/dist/prismic-helpers.min.js");

var PrismicRichText = __webpack_require__(/*! prismic-richtext */ "./node_modules/prismic-richtext/dist/prismic-richtext.min.js");

var Component = __webpack_require__(/*! ./Component */ "./src/Component.js");

module.exports = {
  Date: PrismicHelpers.Date,
  Elements: PrismicRichText.Elements,
  Link: PrismicHelpers.Link,
  RichText: Component["default"]
};

/***/ }),

/***/ "./src/richtext.js":
/*!*************************!*\
  !*** ./src/richtext.js ***!
  \*************************/
/*! exports provided: asText, renderRichText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asText", function() { return asText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderRichText", function() { return renderRichText; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var prismic_richtext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prismic-richtext */ "./node_modules/prismic-richtext/dist/prismic-richtext.min.js");
/* harmony import */ var prismic_richtext__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prismic_richtext__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prismic_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prismic-helpers */ "./node_modules/prismic-helpers/dist/prismic-helpers.min.js");
/* harmony import */ var _embeds__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./embeds */ "./src/embeds.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var createScript = typeof window !== "undefined" ? __webpack_require__(/*! ./embeds */ "./src/embeds.js").createScript : function () {};

function serialize(linkResolver, elements, type, element, content, children, index) {
  if (elements[type]) {
    return serializeElement(elements[type], type, element, content, children, index);
  }

  switch (type) {
    case prismic_richtext__WEBPACK_IMPORTED_MODULE_1__["Elements"].heading1:
      return serializeStandardTag('h1', element, children, index);

    case prismic_richtext__WEBPACK_IMPORTED_MODULE_1__["Elements"].heading2:
      return serializeStandardTag('h2', element, children, index);

    case prismic_richtext__WEBPACK_IMPORTED_MODULE_1__["Elements"].heading3:
      return serializeStandardTag('h3', element, children, index);

    case prismic_richtext__WEBPACK_IMPORTED_MODULE_1__["Elements"].heading4:
      return serializeStandardTag('h4', element, children, index);

    case prismic_richtext__WEBPACK_IMPORTED_MODULE_1__["Elements"].heading5:
      return serializeStandardTag('h5', element, children, index);

    case prismic_richtext__WEBPACK_IMPORTED_MODULE_1__["Elements"].heading6:
      return serializeStandardTag('h6', element, children, index);

    case prismic_richtext__WEBPACK_IMPORTED_MODULE_1__["Elements"].paragraph:
      return serializeStandardTag('p', element, children, index);

    case prismic_richtext__WEBPACK_IMPORTED_MODULE_1__["Elements"].preformatted:
      return serializeStandardTag('pre', element, children, index);

    case prismic_richtext__WEBPACK_IMPORTED_MODULE_1__["Elements"].strong:
      return serializeStandardTag('strong', element, children, index);

    case prismic_richtext__WEBPACK_IMPORTED_MODULE_1__["Elements"].em:
      return serializeStandardTag('em', element, children, index);

    case prismic_richtext__WEBPACK_IMPORTED_MODULE_1__["Elements"].listItem:
      return serializeStandardTag('li', element, children, index);

    case prismic_richtext__WEBPACK_IMPORTED_MODULE_1__["Elements"].oListItem:
      return serializeStandardTag('li', element, children, index);

    case prismic_richtext__WEBPACK_IMPORTED_MODULE_1__["Elements"].list:
      return serializeStandardTag('ul', element, children, index);

    case prismic_richtext__WEBPACK_IMPORTED_MODULE_1__["Elements"].oList:
      return serializeStandardTag('ol', element, children, index);

    case prismic_richtext__WEBPACK_IMPORTED_MODULE_1__["Elements"].image:
      return serializeImage(linkResolver, element, index);

    case prismic_richtext__WEBPACK_IMPORTED_MODULE_1__["Elements"].embed:
      return serializeEmbed(element, index);

    case prismic_richtext__WEBPACK_IMPORTED_MODULE_1__["Elements"].hyperlink:
      return serializeHyperlink(linkResolver, element, children, index);

    case prismic_richtext__WEBPACK_IMPORTED_MODULE_1__["Elements"].label:
      return serializeLabel(element, children, index);

    case prismic_richtext__WEBPACK_IMPORTED_MODULE_1__["Elements"].span:
      return serializeSpan(content);

    default:
      return null;
  }
}

function propsWithUniqueKey() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var key = arguments.length > 1 ? arguments[1] : undefined;
  return Object.assign(props, {
    key: key
  });
}

function serializeElement(Element, type, props, content, children, index) {
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Element, _objectSpread({
    key: "element-".concat(type, "-").concat(index + 1)
  }, props, {
    children: children && children.length ? children : undefined
  }, type === 'image' ? {
    src: props.url,
    url: undefined
  } : null));
}

function serializeStandardTag(tag, element, children, key) {
  var props = element.label ? Object.assign({}, {
    className: element.label
  }) : {};
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(tag, propsWithUniqueKey(props, key), children);
}

function serializeHyperlink(linkResolver, element, children, key) {
  var targetAttr = element.data.target ? {
    target: element.data.target
  } : {};
  var relAttr = element.data.target ? {
    rel: 'noopener'
  } : {};
  var props = Object.assign({
    href: prismic_helpers__WEBPACK_IMPORTED_MODULE_2__["Link"].url(element.data, linkResolver)
  }, targetAttr, relAttr);
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])('a', propsWithUniqueKey(props, key), children);
}

function serializeLabel(element, children, key) {
  var props = element.data ? Object.assign({}, {
    className: element.data.label
  }) : {};
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])('span', propsWithUniqueKey(props, key), children);
}

function serializeSpan(content) {
  if (content) {
    return content.split("\n").reduce(function (acc, p) {
      if (acc.length === 0) {
        return [p];
      } else {
        var brIndex = (acc.length + 1) / 2 - 1;
        var br = Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])('br', propsWithUniqueKey({}, brIndex));
        return acc.concat([br, p]);
      }
    }, []);
  } else {
    return null;
  }
}

function serializeImage(linkResolver, element, key) {
  var linkUrl = element.linkTo ? prismic_helpers__WEBPACK_IMPORTED_MODULE_2__["Link"].url(element.linkTo, linkResolver) : null;
  var linkTarget = element.linkTo && element.linkTo.target ? {
    target: element.linkTo.target
  } : {};
  var relAttr = linkTarget.target ? {
    rel: 'noopener'
  } : {};
  var img = Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])('img', {
    src: element.url,
    alt: element.alt || ''
  });
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])('p', propsWithUniqueKey({
    className: [element.label || '', 'block-img'].join(' ')
  }, key), linkUrl ? Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])('a', Object.assign({
    href: linkUrl
  }, linkTarget, relAttr), img) : img);
}

function serializeEmbed(element, key) {
  if (_embeds__WEBPACK_IMPORTED_MODULE_3__["embeds"][element.oembed.provider_name]) {
    createScript(_embeds__WEBPACK_IMPORTED_MODULE_3__["embeds"][element.oembed.provider_name]);
  }

  var className = "embed embed-".concat(element.oembed.provider_name.toLowerCase());
  var props = Object.assign({
    "data-oembed": element.oembed.embed_url,
    "data-oembed-type": element.oembed.type,
    "data-oembed-provider": element.oembed.provider_name,
    ref: function ref(_ref) {
      if (_embeds__WEBPACK_IMPORTED_MODULE_3__["embeds"][element.oembed.provider_name]) {
        _embeds__WEBPACK_IMPORTED_MODULE_3__["embeds"][element.oembed.provider_name].load(_ref);
      }
    }
  }, element.label ? {
    className: "".concat(className, " ").concat(element.label)
  } : {
    className: className
  });
  var embedHtml = Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])('div', {
    dangerouslySetInnerHTML: {
      __html: element.oembed.html
    }
  });
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])('div', propsWithUniqueKey(props, key), embedHtml);
}

var asText = function asText(structuredText) {
  return prismic_richtext__WEBPACK_IMPORTED_MODULE_1___default.a.asText(structuredText);
};
var renderRichText = function renderRichText(richText, linkResolver, htmlSerializer) {
  var Component = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : react__WEBPACK_IMPORTED_MODULE_0__["Fragment"];
  var elements = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
  var args = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};

  if (Object.prototype.toString.call(richText) !== '[object Array]') {
    console.warn("Rich text argument should be an Array. Received ".concat(_typeof(richText)));
    return null;
  }

  var serializedChildren = prismic_richtext__WEBPACK_IMPORTED_MODULE_1___default.a.serialize(richText, serialize.bind(null, linkResolver, elements), htmlSerializer);
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Component, args, serializedChildren);
};

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/hvillain/Libs/prismic-reactjs/src/index.js */"./src/index.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ });
});
});

var PrismicReactJs = unwrapExports(prismicReactjs);

var _short$3 = require('short-uuid');

function getLinkedContentById(linkedContent, id) {
  return linkedContent.filter(function (content) {
    return content.id === id;
  });
}

var components = {
  Article: Article,
  Line: Line,
  Grid: Grid,
  Icon: Icon,
  h1: function h1(_ref) {
    var children = _ref.children;
    return /*#__PURE__*/React__default.createElement(Title, {
      as: "h1"
    }, children);
  },
  h2: function h2(_ref2) {
    var children = _ref2.children;
    return /*#__PURE__*/React__default.createElement(Title, {
      as: "h2"
    }, children);
  },
  h3: function h3(_ref3) {
    var children = _ref3.children;
    return /*#__PURE__*/React__default.createElement(Title, {
      as: "h3"
    }, children);
  },
  h4: function h4(_ref4) {
    var children = _ref4.children;
    return /*#__PURE__*/React__default.createElement(Title, {
      as: "h4"
    }, children);
  },
  h5: function h5(_ref5) {
    var children = _ref5.children;
    return /*#__PURE__*/React__default.createElement(Title, {
      as: "h5"
    }, children);
  },
  ResponsiveImage: ResponsiveImage,
  Text: Text,
  Title: Title
};
var wrapperComponent = {
  text: 'div',
  highlighted_box: BlockQuote
}; // takes prismic data, then parses the components to react components and adds a wrapper

function parsePrismicToReactComponents(text) {
  if (text.type === 'preformatted') {
    return /*#__PURE__*/React__default.createElement(JsxParser, {
      components: components,
      jsx: text.text,
      key: _short$3.generate()
    });
  }

  var parsePrismic = PrismicReactJs.RichText.render(text);
  var string = reactElementToJSXString(parsePrismic, {
    useFragmentShortSyntax: false
  });
  return /*#__PURE__*/React__default.createElement(JsxParser, {
    components: components,
    jsx: string,
    key: _short$3.generate()
  });
}

function getComponentsFromSlices(slices, linkedContent, path) {
  console.log('slices', slices);
  return slices.map(function (slice, index) {
    var type = slice.slice_type;

    if (type === 'text' || type === 'highlighted_box') {
      var parsedComponents = parsePrismicToReactComponents(slice.primary.text);
      return React__default.createElement(wrapperComponent[slice.slice_type], {}, [parsedComponents]);
    } else if (type === 'responsive_image') {
      return /*#__PURE__*/React__default.createElement(ResponsiveImage, {
        data: slice.primary.image1,
        sizes: ['768x506', '1024x674', '1366x900', '1600x1056']
      });
    } else if (type === 'jumobotron') {
      var _slice$primary = slice.primary,
          align_items = _slice$primary.align_items,
          body2 = _slice$primary.body2,
          justify_content = _slice$primary.justify_content,
          overlay = _slice$primary.overlay,
          text_align = _slice$primary.text_align;

      var _parsedComponents = parsePrismicToReactComponents(body2);

      return /*#__PURE__*/React__default.createElement(Jumbotron, {
        alignItems: align_items,
        hasNavShift: index === 0 ? true : false,
        justifyContent: justify_content,
        key: _short$3.generate(),
        image: slice.primary.image,
        overlay: overlay,
        textAlign: text_align
      }, _parsedComponents);
    } else if (type === 'linked_component_section') {
      var data = getLinkedContentById(linkedContent, slice.primary.body2.id);
      var _data$0$data = data[0].data,
          background = _data$0$data.background,
          body = _data$0$data.body,
          inner_width = _data$0$data.inner_width;

      var _parsedComponents2 = parsePrismicToReactComponents(body[0]);

      return /*#__PURE__*/React__default.createElement(Section, _extends({
        key: _short$3.generate()
      }, {
        background: background,
        inner_width: inner_width
      }), _parsedComponents2);
    } else if (type === 'cards') {
      var _data = slice.items.map(function (card) {
        return getLinkedContentById(linkedContent, card.cards.id)[0];
      });

      return /*#__PURE__*/React__default.createElement(CardsSection, {
        cards: _data,
        key: _short$3.generate(),
        title: slice.primary.title1
      });
    } else if (type === 'faq') {
      var _slice$primary2 = slice.primary,
          intro = _slice$primary2.intro,
          title1 = _slice$primary2.title1;
      return /*#__PURE__*/React__default.createElement(Section, {
        background: "light",
        key: _short$3.generate()
      }, /*#__PURE__*/React__default.createElement(Title, {
        as: "h3"
      }, title1), intro && /*#__PURE__*/React__default.createElement(Article, null, /*#__PURE__*/React__default.createElement(Article.Content, null, parsePrismicToReactComponents(intro))), slice.items.map(function (item) {
        return /*#__PURE__*/React__default.createElement(Faq, {
          key: _short$3.generate()
        }, /*#__PURE__*/React__default.createElement(Faq.Details, null, /*#__PURE__*/React__default.createElement(Faq.Summary, null, /*#__PURE__*/React__default.createElement(Title, {
          as: "h4"
        }, item.question)), parsePrismicToReactComponents(item.answer)));
      }));
    } else if (type == 'article') {
      var _slice$primary3 = slice.primary,
          _background = _slice$primary3.background,
          _body = _slice$primary3.body2,
          sidebar = _slice$primary3.sidebar,
          sidebar_style = _slice$primary3.sidebar_style;
      return /*#__PURE__*/React__default.createElement(Section, {
        background: _background,
        key: _short$3.generate()
      }, /*#__PURE__*/React__default.createElement(Article, null, /*#__PURE__*/React__default.createElement(Article.Content, null, parsePrismicToReactComponents(_body)), /*#__PURE__*/React__default.createElement(Article.Sidebar, null, sidebar_style === 'quote' && /*#__PURE__*/React__default.createElement(Article.Quote, null, parsePrismicToReactComponents(sidebar)), sidebar_style === 'default' && /*#__PURE__*/React__default.createElement(Article.Box, null, parsePrismicToReactComponents(sidebar)))));
    } else if (type === 'article_w_linked') {
      var _slice$primary4 = slice.primary,
          _body2 = _slice$primary4.body2,
          linked_sidebar_section = _slice$primary4.linked_sidebar_section;

      var _sidebar = getLinkedContentById(linkedContent, linked_sidebar_section.id);

      return /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement(Section, {
        inner_width: "medium"
      }, parsePrismicToReactComponents(_body2)));
    } else if (type === 'half_banner_with_image') {
      var _slice$primary5 = slice.primary,
          _align_items = _slice$primary5.align_items,
          _body3 = _slice$primary5.body2,
          _justify_content = _slice$primary5.justify_content,
          _overlay = _slice$primary5.overlay,
          _text_align = _slice$primary5.text_align;

      var _parsedComponents3 = parsePrismicToReactComponents(_body3);

      return /*#__PURE__*/React__default.createElement(Jumbotron, {
        alignItems: _align_items,
        hasNavShift: false,
        justifyContent: _justify_content,
        overlay: _overlay,
        key: _short$3.generate(),
        image: slice.primary.image,
        size: "half",
        textAlign: _text_align
      }, _parsedComponents3);
    } else if (type === 'dynamic_content') {
      return slice.items.filter(function (item) {
        return item.condition_value === path;
      });
    }
  });
}

function getPosts(apiUrl, apiToken, type) {
  return new Promise(function (resolve) {
    return Prismic$2.getApi(apiUrl, {
      accessToken: apiToken
    }).then(function (api) {
      return api.query(Prismic$2.Predicates.at('document.type', type)).then(function (response) {
        resolve(response.results);
      });
    });
  });
}

var Prismic = require('prismic-javascript');

function getPage(api, id, fetchLinks) {
  return api.query(Prismic.Predicates.at('document.id', id)).then(function (response) {
    var data = response.results[0].data;
    var contentWithLinks = data.body1.filter(function (slice) {
      return slice.slice_type === 'linked_component_section' || slice.slice_type === 'article_w_linked' || slice.slice_type === 'cards';
    });
    var ids = contentWithLinks.reduce(function (accumulator, slice) {
      if (slice.slice_type === 'linked_component_section') {
        return [].concat(_toConsumableArray(accumulator), [slice.primary.body2.id]);
      } else if (slice.slice_type === 'cards') {
        var _ids = slice.items.map(function (item) {
          return item.cards.id;
        });

        return accumulator.concat(_ids);
      } else if (slice.slice_type === 'article_w_linked') {
        console.log('slice of', slice.primary.linked_sidebar_section);
        return [].concat(_toConsumableArray(accumulator), [slice.primary.linked_sidebar_section.id]);
      }

      return accumulator;
    }, new Array());
    return api.getByIDs(ids, {
      fetchLinks: fetchLinks
    }).then(function (response) {
      var sections = response.results;
      return _objectSpread2(_objectSpread2({}, data), {}, {
        linkedContent: sections
      });
    });
  });
}

var Prismic$1 = require('prismic-javascript');
function getPages(apiEndpoint, apiToken, options) {
  return Prismic$1.getApi(apiEndpoint, {
    accessToken: apiToken
  }).then(function (api) {
    return api.query(Prismic$1.Predicates.at('document.type', 'page')).then(function (response) {
      var promises = response.results.map(function (result) {
        return getPage(api, result.id, options.fetchLinks);
      });
      return Promise.all(promises).then(function (pages) {
        return pages.map(function (pageData) {
          pageData.dynamicData = options.insertData.find(function (data) {
            console.log('datasdafadsas', data.path, pageData.path);

            if (data.path === pageData.path) {
              return data.data;
            }
          });

          if (pageData.template && pageData.template !== 'default') {
            pageData.template = "src/pages/".concat(pageData.template);
          } else {
            pageData.template = 'src/pages/page';
          }

          return pageData;
        });
      });
    });
  });
}

function getPosts$1(apiUrl, apiToken) {
  return Prismic$2.getApi(apiUrl, {
    accessToken: apiToken
  }).then(function (api) {
    return api.query(Prismic$2.Predicates.at('document.type', 'post')).then(function (response) {
      return response.results.map(function (post) {
        return post;
      });
    });
  });
}

var _short$4 = require('short-uuid');

function getMetaTags (data, defaultTitle, defaultDescription, defaultImage) {
  var ogDescription = data.og_description || data.meta_description || defaultDescription;
  var ogImage = data.og_image || defaultImage;
  var ogTitle = data.og_title || data.meta_title || defaultTitle;
  var ogType = data.og_type;
  var metaDescription = data.meta_description || data.og_description || defaultDescription;
  var metaTitle = data.meta_title || data.og_title || defaultTitle;
  var metaNoindex = data.meta_noindex;
  return [/*#__PURE__*/React__default.createElement("meta", {
    property: "og:description",
    content: ogDescription,
    key: _short$4.generate()
  }), /*#__PURE__*/React__default.createElement("meta", {
    property: "og:image",
    content: ogImage,
    key: _short$4.generate()
  }), /*#__PURE__*/React__default.createElement("meta", {
    property: "og:title",
    content: ogTitle,
    key: _short$4.generate()
  }), /*#__PURE__*/React__default.createElement("meta", {
    property: "og:type",
    content: ogType,
    key: _short$4.generate()
  }), /*#__PURE__*/React__default.createElement("meta", {
    name: "description",
    content: metaDescription,
    key: _short$4.generate()
  }), /*#__PURE__*/React__default.createElement("title", {
    key: _short$4.generate()
  }, metaTitle), metaNoindex ? /*#__PURE__*/React__default.createElement("meta", {
    name: "robots",
    content: "noindex"
  }) : null];
}

function useScript (url) {
  React.useEffect(function () {
    var script = document.createElement('script');
    script.src = url;
    script.async = true;
    document.body.appendChild(script);
    return function () {
      document.body.removeChild(script);
    };
  }, [url]);
}

var utils = {
  getComponentsFromSlices: getComponentsFromSlices,
  getContentByType: getPosts,
  getMetaTags: getMetaTags,
  getPages: getPages,
  getPosts: getPosts$1,
  getSrcSets: getSrcSets,
  makePixelValue: makePixelValue,
  useScript: useScript
};

exports.Article = Article;
exports.BlockQuote = BlockQuote;
exports.BreadCrumb = BreadCrumb;
exports.Button = Button;
exports.Card = Card;
exports.Cards = Cards;
exports.CardsSection = CardsSection;
exports.Faq = Faq;
exports.FontLoader = FontLoader;
exports.Footer = Footer$1;
exports.Form = Form;
exports.Grid = Grid;
exports.Icon = Icon;
exports.Image = Image;
exports.Jumbotron = Jumbotron;
exports.Line = Line;
exports.Loading = Loading;
exports.ResponsiveImage = ResponsiveImage;
exports.ScrollToTop = ScrollToTop;
exports.Section = Section;
exports.Tabs = Tabs;
exports.Text = Text;
exports.Title = Title;
exports._classCallCheck = _classCallCheck;
exports._createClass = _createClass;
exports._createSuper = _createSuper;
exports._inherits = _inherits;
exports._taggedTemplateLiteral = _taggedTemplateLiteral;
exports.body = body;
exports.content = content;
exports.head = head;
exports.header = header;
exports.modal = modal;
exports.quote = quote;
exports.sms = sms;
exports.social = social;
exports.theme = theme;
exports.utils = utils;
