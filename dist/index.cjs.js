'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var styled = require('styled-components');
var styled__default = _interopDefault(styled);
var ReactBreakpoints = require('react-breakpoints');
var ReactBreakpoints__default = _interopDefault(ReactBreakpoints);
var react = require('@chakra-ui/react');
var router = require('@reach/router');
var reactIs = _interopDefault(require('react-is'));
var crypto = _interopDefault(require('crypto'));
var formik = require('formik');
var PrismicReactJs = _interopDefault(require('prismic-reactjs'));
var JsxParser = _interopDefault(require('react-jsx-parser'));
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
  animation: {
    speed: {
      quick: '300ms',
      "default": '400ms'
    }
  },
  breakPoints: {
    mobile: 608,
    tablet: 960,
    bigTablet: 1024,
    desktop: 1280
  },
  breakPointsAsPixel: {
    mobile: '608px',
    tablet: '960px',
    bigTablet: '1024px',
    desktop: '1280px'
  },
  colors: {
    dark1: '#000000',
    dark2: '#D40000',
    dark3: '#000080',
    dark4: '#565656',
    dark5: '#0042B6',
    dark6: '#dddddd',
    light1: '#f9f9f9',
    light2: '#f7f7f7',
    light3: '#ffffff',
    error: '#D40000',
    success: '#009918',
    white: '#ffffff',
    black: '#000000'
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
        xlg: '2.25rem',
        xxlg: '2.75rem'
      },
      tablet: {
        xsm: '.9rem',
        sm: '1.125rem',
        md: '1.5rem',
        lg: '2rem',
        xlg: '2.25rem',
        xxlg: '2.75rem'
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
  unitAsNumber: function unitAsNumber(multiplier) {
    return multiplier * _unit;
  },
  imageDimensions: {
    jumbotron: {
      ad: ['580x327', '870x490', '1160x652'],
      half: ['375x375', '414x414', '1280x400', '1366x384', '1440x450', '1920x540'],
      full: ['375×667', '414×816', '360×780', '1366×768', '1440×900', '1920×1080']
    }
  },
  layout: {
    desktop: {
      headerHeight: makePixelValue(3.5 * _unit)
    },
    mobile: {
      headerHeight: makePixelValue(2.5 * _unit)
    },
    tablet: {
      headerHeight: makePixelValue(2.5 * _unit)
    }
  },
  layoutAsNumber: {
    desktop: {
      headerHeight: 3.5 * _unit
    },
    mobile: {
      headerHeight: 2.5 * _unit
    },
    tablet: {
      headerHeight: 2.5 * _unit
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
  var data = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: ", ";\n  flex-wrap: wrap;\n  width: calc(100% + ", ");\n  align-items: ", ";\n  align-content: flex-start;\n  margin-left: -", ";\n  ", "\n"]);

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
  var data = _taggedTemplateLiteral(["\n  align-self: ", ";\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  padding: ", ";\n  width: ", ";\n  max-width: ", ";\n  text-align: ", ";\n\n  ", "\n\n@media (max-width: ", ") {\n  ", "\n\n  ", "\n}\n\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}

function getCollaspe(_ref) {
  var _ref$collapse = _ref.collapse,
      collapse = _ref$collapse === void 0 ? 'never' : _ref$collapse;

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
  var _width = _ref5._width;
  return _width;
}, function (_ref6) {
  var maxWidth = _ref6.maxWidth;
  return maxWidth;
}, function (_ref7) {
  var textAlign = _ref7.textAlign;
  return textAlign;
}, function (_ref8) {
  var isSticky = _ref8.isSticky;
  return isSticky && "\n      position: sticky;\n      top: 0px;\n      align-self: flex-start;\n  ";
}, theme.breakPointsAsPixel.mobile, function (_ref9) {
  var collapsePaddingOnMobile = _ref9.collapsePaddingOnMobile;
  return collapsePaddingOnMobile && "padding: 0";
}, function (_ref10) {
  var collapseHorizontalPaddingOnMobile = _ref10.collapseHorizontalPaddingOnMobile,
      verticalPadding = _ref10.verticalPadding;
  return collapseHorizontalPaddingOnMobile && "padding: ".concat(theme.unit(verticalPadding), " 0");
});
var ColInnerUI = styled__default('div')(_templateObject2$1());
var GridUI = styled__default('div')(_templateObject3(), function (_ref11) {
  var _ref11$direction = _ref11.direction,
      direction = _ref11$direction === void 0 ? 'column' : _ref11$direction;
  return direction;
}, theme.unit(0.5), function (_ref12) {
  var _ref12$alignItems = _ref12.alignItems,
      alignItems = _ref12$alignItems === void 0 ? 'flex-start' : _ref12$alignItems;
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
      _ref2$collapseHorizon = _ref2.collapseHorizontalPaddingOnMobile,
      collapseHorizontalPaddingOnMobile = _ref2$collapseHorizon === void 0 ? false : _ref2$collapseHorizon,
      _ref2$collapsePadding = _ref2.collapsePaddingOnMobile,
      collapsePaddingOnMobile = _ref2$collapsePadding === void 0 ? false : _ref2$collapsePadding,
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
    collapseHorizontalPaddingOnMobile: collapseHorizontalPaddingOnMobile,
    collapsePaddingOnMobile: collapsePaddingOnMobile,
    horizontalPadding: horizontalPadding,
    isSticky: isSticky,
    maxWidth: maxWidth,
    verticalPadding: verticalPadding,
    textAlign: textAlign,
    _width: width
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
  var data = _taggedTemplateLiteral(["\n  background-color: ", ";\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  border: ", ";\n  padding: ", " ", ";\n  margin-bottom: ", ";\n  width: 100%;\n\n  .title {\n    font-weight: bold;\n    flex-grow: 0;\n  }\n\n  ul {\n    list-style: none;\n    margin: 0;\n    padding-left: 0;\n    li {\n      margin-left: 0;\n    }\n  }\n  @media (max-width: ", ") {\n    ul {\n      column-count: 3;\n    }\n  }\n  @media (max-width: 800px) {\n    ul {\n      column-count: 2;\n    }\n  }\n  @media (max-width: ", ") {\n    ul {\n      column-count: 1;\n    }\n  }\n"]);

  _templateObject$3 = function _templateObject() {
    return data;
  };

  return data;
}
var BoxWrapper$1 = styled__default('div')(_templateObject$3(), theme.colors.white, theme.border, theme.unit(0.25), theme.unit(0.5), theme.unit(0.5), theme.breakPointsAsPixel.tablet, theme.breakPointsAsPixel.mobile);

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

function _templateObject$4() {
  var data = _taggedTemplateLiteral(["\n  padding: ", ";\n  background-color: ", ";\n"]);

  _templateObject$4 = function _templateObject() {
    return data;
  };

  return data;
}
var ContainerUI = styled__default('div')(_templateObject$4(), theme.unit(0.5), theme.colors.light1);

function Facts (_ref) {
  var children = _ref.children,
      title = _ref.title;
  return /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement("h3", null, title), /*#__PURE__*/React__default.createElement(ContainerUI, null, children));
}

function Sticky (_ref) {
  var children = _ref.children,
      textAlign = _ref.textAlign;
  return /*#__PURE__*/React__default.createElement(Grid.Col, {
    horizontalPadding: 1,
    verticalPadding: 1,
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
    collapsePaddingOnMobile: true,
    width: width,
    horizontalPadding: 1
  }, /*#__PURE__*/React__default.createElement(ContentUI, null, children));
};

Article.Sidebar = function (_ref3) {
  var children = _ref3.children,
      _ref3$width = _ref3.width,
      width = _ref3$width === void 0 ? '34%' : _ref3$width;
  var _children = children;
  return /*#__PURE__*/React__default.createElement(Grid.Col, {
    collapsePaddingOnMobile: true,
    width: width
  }, _children);
};

Article.Box = function (_ref4) {
  var children = _ref4.children;
  return /*#__PURE__*/React__default.createElement(Box, null, children);
};

Article.Facts = function (_ref5) {
  var children = _ref5.children,
      title = _ref5.title;
  return /*#__PURE__*/React__default.createElement(Facts, {
    title: title
  }, children);
};

Article.StickySidebar = function (_ref6) {
  var children = _ref6.children;
  return /*#__PURE__*/React__default.createElement(Sticky, null, children);
};

Article.Quote = function (_ref7) {
  var children = _ref7.children;
  return /*#__PURE__*/React__default.createElement(Quote, null, /*#__PURE__*/React__default.createElement("h3", {
    className: "italic"
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

function Body (_ref) {
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

function Button (props) {
  var _props$justifyContent = props.justifyContent,
      justifyContent = _props$justifyContent === void 0 ? 'flex-start' : _props$justifyContent,
      children = props.children,
      to = props.to,
      rest = _objectWithoutProperties(props, ["justifyContent", "children", "to"]);

  if (to) {
    return /*#__PURE__*/React__default.createElement(react.Box, {
      d: "flex",
      justifyContent: justifyContent,
      w: "100%"
    }, /*#__PURE__*/React__default.createElement(router.Link, {
      to: to
    }, /*#__PURE__*/React__default.createElement(react.Button, _objectSpread2({}, rest), children)));
  } else {
    return /*#__PURE__*/React__default.createElement(react.Box, {
      d: "flex",
      justifyContent: justifyContent,
      w: "100%"
    }, /*#__PURE__*/React__default.createElement(react.Button, _objectSpread2({}, rest), children));
  }
}

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

function _templateObject$6() {
  var data = _taggedTemplateLiteral(["\n  padding: ", ";\n  background-color: ", ";\n  border: ", ";\n  margin: ", ";\n  padding-bottom: 0;\n  margin-top: ", ";\n"]);

  _templateObject$6 = function _templateObject() {
    return data;
  };

  return data;
}
var ContainerUI$1 = styled__default('blockquote')(_templateObject$6(), theme.unit(0.75), function (_ref) {
  var background = _ref.background;
  return theme.colors[background];
}, theme.border, "".concat(theme.unit(1), " 0"), getSpaceBefore);

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

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

function BlockQuote(_ref) {
  var _ref$background = _ref.background,
      background = _ref$background === void 0 ? 'light1' : _ref$background,
      _ref$spaceBefore = _ref.spaceBefore,
      spaceBefore = _ref$spaceBefore === void 0 ? 'default' : _ref$spaceBefore,
      children = _ref.children;
  return /*#__PURE__*/React__default.createElement(ContainerUI$1, {
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
var ContainerUI$2 = styled__default('div')(_templateObject$7(), theme.unit(0.5), theme.colors.light1, theme.colors.dark3, theme.typography.fonts.font1);

function BreadCrumb(_ref) {
  var parts = _ref.parts;
  return /*#__PURE__*/React__default.createElement(ContainerUI$2, null, /*#__PURE__*/React__default.createElement("div", null, parts.map(function (part) {
    return part;
  })));
}

function _templateObject4$1() {
  var data = _taggedTemplateLiteral(["\n  cursor: pointer;\n  position: relative;\n  img {\n    filter: none;\n    transition: 400ms;\n  }\n\n  h3 {\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    width: 100%;\n    display: inline-block;\n    color: ", ";\n    text-align: center;\n  }\n\n  :hover {\n    img {\n      filter: grayscale(100%) brightness(50%) sepia(100%) hue-rotate(-180deg)\n        saturate(500%) contrast(0.9);\n    }\n    h3 {\n      text-decoration: underline;\n    }\n  }\n"]);

  _templateObject4$1 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$2() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject3$2 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  padding: ", ";\n  width: 100%;\n"]);

  _templateObject2$3 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$8() {
  var data = _taggedTemplateLiteral(["\n  * {\n    box-sizing: border-box;\n  }\n  display: block;\n  background: #fff;\n  border: ", ";\n  line-height: 1.75;\n  width: 100%;\n  height: 100%;\n  background-color: ", ";\n\n  ", "\n"]);

  _templateObject$8 = function _templateObject() {
    return data;
  };

  return data;
}
var CardUI = styled__default('div')(_templateObject$8(), function (_ref) {
  var withBorder = _ref.withBorder;
  return withBorder ? theme.border : 'none';
}, theme.colors.light3, function (_ref2) {
  var asLink = _ref2.asLink;
  return asLink && "\n  :hover {\n    border: 1px solid ".concat(theme.colors.dark3, ";\n    background-color: ").concat(theme.colors.dark3, ";\n    cursor: pointer;\n  }\n  ");
});
var ContentUI$1 = styled__default('div')(_templateObject2$3(), "".concat(theme.unit(0.5), " ").concat(theme.unit(0.66)));
var ImageUI = styled__default('div')(_templateObject3$2());
var AhrefUI = styled__default('div')(_templateObject4$1(), theme.colors.white);

/**
 * Converter
 *
 * @param {string|Array} srcAlphabet
 * @param {string|Array} dstAlphabet
 * @constructor
 */
function Converter(srcAlphabet, dstAlphabet) {
    if (!srcAlphabet || !dstAlphabet || !srcAlphabet.length || !dstAlphabet.length) {
        throw new Error('Bad alphabet');
    }
    this.srcAlphabet = srcAlphabet;
    this.dstAlphabet = dstAlphabet;
}

/**
 * Convert number from source alphabet to destination alphabet
 *
 * @param {string|Array} number - number represented as a string or array of points
 *
 * @returns {string|Array}
 */
Converter.prototype.convert = function(number) {
    var i, divide, newlen,
    numberMap = {},
    fromBase = this.srcAlphabet.length,
    toBase = this.dstAlphabet.length,
    length = number.length,
    result = typeof number === 'string' ? '' : [];

    if (!this.isValid(number)) {
        throw new Error('Number "' + number + '" contains of non-alphabetic digits (' + this.srcAlphabet + ')');
    }

    if (this.srcAlphabet === this.dstAlphabet) {
        return number;
    }

    for (i = 0; i < length; i++) {
        numberMap[i] = this.srcAlphabet.indexOf(number[i]);
    }
    do {
        divide = 0;
        newlen = 0;
        for (i = 0; i < length; i++) {
            divide = divide * fromBase + numberMap[i];
            if (divide >= toBase) {
                numberMap[newlen++] = parseInt(divide / toBase, 10);
                divide = divide % toBase;
            } else if (newlen > 0) {
                numberMap[newlen++] = 0;
            }
        }
        length = newlen;
        result = this.dstAlphabet.slice(divide, divide + 1).concat(result);
    } while (newlen !== 0);

    return result;
};

/**
 * Valid number with source alphabet
 *
 * @param {number} number
 *
 * @returns {boolean}
 */
Converter.prototype.isValid = function(number) {
    var i = 0;
    for (; i < number.length; ++i) {
        if (this.srcAlphabet.indexOf(number[i]) === -1) {
            return false;
        }
    }
    return true;
};

var converter = Converter;

/**
 * Function get source and destination alphabet and return convert function
 *
 * @param {string|Array} srcAlphabet
 * @param {string|Array} dstAlphabet
 *
 * @returns {function(number|Array)}
 */
function anyBase(srcAlphabet, dstAlphabet) {
    var converter$1 = new converter(srcAlphabet, dstAlphabet);
    /**
     * Convert function
     *
     * @param {string|Array} number
     *
     * @return {string|Array} number
     */
    return function (number) {
        return converter$1.convert(number);
    }
}
anyBase.BIN = '01';
anyBase.OCT = '01234567';
anyBase.DEC = '0123456789';
anyBase.HEX = '0123456789abcdef';

var anyBase_1 = anyBase;

// Unique ID creation requires a high quality random # generator.  In node.js
// this is pretty straight-forward - we use the crypto API.



var rng = function nodeRNG() {
  return crypto.randomBytes(16);
};

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
  return ([
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]]
  ]).join('');
}

var bytesToUuid_1 = bytesToUuid;

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid_1(rnds);
}

var v4_1 = v4;

/**
 * Created by Samuel on 6/4/2016.
 * Simple wrapper functions to produce shorter UUIDs for cookies, maybe everything?
 */




var flickrBase58 = '123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ';
var cookieBase90 = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%&'()*+-./:<=>?@[]^_`{|}~";

var toFlickr;

/**
 * Takes a UUID, strips the dashes, and translates.
 * @param {string} longId
 * @param {function(string)} translator
 * @returns {string}
 */
function shortenUUID (longId, translator) {
    return translator(longId.toLowerCase().replace(/-/g,''));
}

/**
 * Translate back to hex and turn back into UUID format, with dashes
 * @param {string} shortId
 * @param {function(string)} translator
 * @returns {string}
 */
function enlargeUUID(shortId, translator) {
    var uu1 = translator(shortId);
    var leftPad = "";
    var m;

    // Pad out UUIDs beginning with zeros (any number shorter than 32 characters of hex)
    for (var i = 0, len = 32-uu1.length; i < len; ++i) {
        leftPad += "0";
    }

    // Join the zero padding and the UUID and then slice it up with match
    m = (leftPad + uu1).match(/(\w{8})(\w{4})(\w{4})(\w{4})(\w{12})/);

    // Accumulate the matches and join them.
    return [m[1], m[2], m[3], m[4], m[5]].join('-');
}

var shortUuid = (function(){

    /**
     * @constructor
     * @param {string?} toAlphabet - Defaults to flickrBase58 if not provided
     * @returns {{new: (function()),
     *  uuid: (function()),
     *  fromUUID: (function(string)),
     *  toUUID: (function(string)),
     *  alphabet: (string)}}
     */
    function MakeConvertor(toAlphabet) {

        // Default to Flickr 58
        var useAlphabet = toAlphabet || flickrBase58;

        // UUIDs are in hex, so we translate to and from.
        var fromHex = anyBase_1(anyBase_1.HEX, useAlphabet);
        var toHex = anyBase_1(useAlphabet, anyBase_1.HEX);
        var generate = function() { return shortenUUID(v4_1(), fromHex); };

        return {
            new: generate,
            generate: generate,
            uuid: v4_1,
            fromUUID: function(uuid) { return shortenUUID(uuid, fromHex); },
            toUUID: function(shortUuid) { return enlargeUUID(shortUuid, toHex); },
            alphabet: useAlphabet
        };
    }

    // Expose the constants for other purposes.
    MakeConvertor.constants = {
        flickrBase58: flickrBase58,
        cookieBase90: cookieBase90
    };

    // Expose the generic v4 UUID generator for convenience
    MakeConvertor.uuid = v4_1;

    // Provide a generic generator
    MakeConvertor.generate = function() {
        if (!toFlickr) {
            // Generate on first use;
            toFlickr = anyBase_1(anyBase_1.HEX, flickrBase58);
        }
        return shortenUUID(v4_1(), toFlickr);
    };

    return MakeConvertor;
}());

function Card(_ref) {
  var children = _ref.children,
      _ref$href = _ref.href,
      href = _ref$href === void 0 ? '' : _ref$href,
      _ref$horizontalPaddin = _ref.horizontalPadding,
      horizontalPadding = _ref$horizontalPaddin === void 0 ? 0.5 : _ref$horizontalPaddin,
      _ref$maxWidth = _ref.maxWidth,
      maxWidth = _ref$maxWidth === void 0 ? null : _ref$maxWidth,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? '33.33%' : _ref$width,
      _ref$withBorder = _ref.withBorder,
      withBorder = _ref$withBorder === void 0 ? true : _ref$withBorder,
      _ref$verticalPadding = _ref.verticalPadding,
      verticalPadding = _ref$verticalPadding === void 0 ? 0.5 : _ref$verticalPadding;
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
    collapseHorizontalPaddingOnMobile: true,
    horizontalPadding: horizontalPadding,
    verticalPadding: verticalPadding,
    maxWidth: maxWidth,
    width: width,
    alignSelf: "stretch"
  }, /*#__PURE__*/React__default.createElement(CardUI, {
    asLink: asLink,
    onClick: onClick,
    withBorder: withBorder
  }, children));
}

Card.propTypes = {
  href: propTypes.string,
  maxWidth: propTypes.string,
  width: propTypes.string,
  withBorder: propTypes.bool
};

Card.Image = function (_ref2) {
  var children = _ref2.children,
      to = _ref2.to,
      title = _ref2.title;

  if (!!title && to) {
    return /*#__PURE__*/React__default.createElement(AhrefUI, null, /*#__PURE__*/React__default.createElement(router.Link, {
      to: to
    }, children, /*#__PURE__*/React__default.createElement("h3", {
      key: shortUuid.generate()
    }, title)));
  } else {
    return children;
  }
};

Card.Image.propTypes = {
  to: propTypes.string,
  title: propTypes.string
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

Card.Content.propTypes = {
  alignItems: propTypes.oneOf(['flex-start', 'flex-end', 'center', 'baseline', 'stretch']),
  justifyContent: propTypes.oneOf(['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly'])
};

function Cards (_ref) {
  var alignItems = _ref.alignItems,
      children = _ref.children;
  return /*#__PURE__*/React__default.createElement(Grid, {
    alignItems: alignItems
  }, children);
}

function _templateObject3$3() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n"]);

  _templateObject3$3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$4() {
  var data = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  max-width: ", ";\n  width: ", ";\n  position: relative;\n  margin: 0 auto;\n  padding: ", " ", ";\n  width: 100%;\n  text-align: ", ";\n"]);

  _templateObject2$4 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$9() {
  var data = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  display: flex;\n  width: 100%;\n  background-color: ", ";\n  justify-content: center;\n  align-items: center;\n"]);

  _templateObject$9 = function _templateObject() {
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
    return theme.colors.dark3;
  } else {
    return '#fff';
  }
};

var getInnerWidth = function getInnerWidth(_ref2) {
  var innerWidth = _ref2.innerWidth;

  if (innerWidth === 'medium') {
    return theme.unit(21);
  } else if (innerWidth === 'small') {
    return theme.unit(18);
  } else if (innerWidth === 'medium-plus') {
    return theme.unit(30);
  } else if (innerWidth === 'huge') {
    return theme.unit(37);
  } else {
    return theme.unit(34);
  }
};

var SectionWrapperUI = styled__default('section')(_templateObject$9(), getBgColor);
var SectionUI = styled__default('div')(_templateObject2$4(), getInnerWidth, getInnerWidth, theme.unit(1.5), theme.unit(0.75), function (_ref3) {
  var textAlign = _ref3.textAlign;
  return textAlign;
});
var SectionInnerUI = styled__default('div')(_templateObject3$3());

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

function _templateObject2$5() {
  var data = _taggedTemplateLiteral(["\n  max-width: 100%;\n  min-width: 100%;\n  height: 100%;\n  margin-bottom: ", ";\n  object-fit: cover;\n"]);

  _templateObject2$5 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$a() {
  var data = _taggedTemplateLiteral(["\n  /* Position child elements relative to this element */\n  position: relative;\n\n  /* Create a pseudo element that uses padding-bottom to take up space */\n  &:after {\n    display: block;\n    content: '';\n    /*  aspect ratio */\n    padding-bottom: ", ";\n  }\n\n  /* Image is positioned absolutely relative to the parent element */\n  img {\n    /* Image should match parent box size */\n    position: absolute;\n    left: 0px;\n    top: 0px;\n    width: 100%;\n    height: 100%;\n    min-height: 100%;\n  }\n  margin-bottom: ", ";\n"]);

  _templateObject$a = function _templateObject() {
    return data;
  };

  return data;
}
var AspectRatioUI = styled__default('div')(_templateObject$a(), function (_ref) {
  var aspectRatio = _ref.aspectRatio;
  return aspectRatio + '%';
}, getSpaceAfter);
var ImgUI = styled__default('img')(_templateObject2$5(), getSpaceAfter);

function ResponsiveImage (_ref) {
  var _ref$aspectRatio = _ref.aspectRatio,
      aspectRatio = _ref$aspectRatio === void 0 ? 56.25 : _ref$aspectRatio,
      data = _ref.data,
      _ref$loading = _ref.loading,
      loading = _ref$loading === void 0 ? 'lazy' : _ref$loading,
      _ref$spaceAfter = _ref.spaceAfter,
      spaceAfter = _ref$spaceAfter === void 0 ? 'medium' : _ref$spaceAfter,
      sizes = _ref.sizes,
      alt = _ref.alt,
      src = _ref.src;
  var img = /*#__PURE__*/React__default.createElement(ImgUI, {
    alt: alt || data.alt,
    loading: loading,
    key: shortUuid.generate(),
    src: data && data.url || src,
    srcSet: sizes && getSrcSets(sizes, data),
    spaceAfter: spaceAfter
  });

  if (aspectRatio === null) {
    return img;
  }

  return /*#__PURE__*/React__default.createElement(AspectRatioUI, {
    aspectRatio: aspectRatio,
    key: shortUuid.generate(),
    spaceAfter: aspectRatio === null ? 0 : spaceAfter
  }, img);
}

function formatTitle(title) {
  return toProperCase(title.replace(/_/g, ' '));
}

function getImage(image) {
  if (!image) {
    return;
  }

  return /*#__PURE__*/React__default.createElement(ResponsiveImage, {
    data: image,
    sizes: ['600x338', '960x540'],
    spaceAfter: "none"
  });
}

function getContent(title, content) {
  return /*#__PURE__*/React__default.createElement(Card.Content, null, /*#__PURE__*/React__default.createElement("h4", null, title[0].text), Object.entries(content).map(function (_content) {
    var _content2 = _slicedToArray(_content, 2),
        key = _content2[0],
        value = _content2[1];

    return /*#__PURE__*/React__default.createElement("div", {
      key: shortUuid.generate()
    }, formatTitle(key), ": ", value);
  }));
}

function CardsSection (_ref) {
  var _ref$background = _ref.background,
      background = _ref$background === void 0 ? 'light' : _ref$background,
      children = _ref.children,
      cards = _ref.cards;
  return /*#__PURE__*/React__default.createElement(Section, {
    background: background
  }, children, /*#__PURE__*/React__default.createElement(Cards, null, cards.map(function (card) {
    if (!card || !card.data) {
      return;
    }

    var _card$data = card.data,
        image = _card$data.image,
        title = _card$data.title,
        rest = _objectWithoutProperties(_card$data, ["image", "title"]);

    return /*#__PURE__*/React__default.createElement(Card, {
      key: shortUuid.generate()
    }, getImage(image), getContent(title, rest));
  })));
}

function _templateObject$b() {
  var data = _taggedTemplateLiteral(["\n  flex: 1 0 auto;\n  min-height: 100vh;\n  margin-top: ", ";\n  @media (max-width: ", ") {\n    margin-top: ", ";\n  }\n"]);

  _templateObject$b = function _templateObject() {
    return data;
  };

  return data;
}
var ContainerUI$3 = styled__default('div')(_templateObject$b(), theme.layout.desktop.headerHeight, theme.breakPointsAsPixel.bigTablet, theme.layout.tablet.headerHeight);

function content (_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React__default.createElement(ContainerUI$3, null, children);
}

function _templateObject2$6() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  color: ", ";\n  cursor: pointer;\n  position: relative;\n  padding: 0;\n  &:after {\n    content: '';\n    color: ", ";\n    border: solid ", ";\n    border-width: 0 3px 3px 0;\n    display: inline-block;\n    padding: 4px;\n    transform: rotate(-135deg);\n    -webkit-transform: rotate(-135deg);\n    position: absolute;\n    right: 0;\n    top: 10px;\n  }\n  :focus &:after {\n  }\n  &:focus {\n    outline: none;\n  }\n  &::-webkit-details-marker {\n    display: none;\n  }\n"]);

  _templateObject2$6 = function _templateObject2() {
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
var SummaryUI = styled__default('summary')(_templateObject2$6(), theme.colors.dark4, theme.colors.dark1, theme.colors.dark4);

var Faq = /*#__PURE__*/function (_React$Component) {
  _inherits(Faq, _React$Component);

  var _super = _createSuper(Faq);

  function Faq() {
    var _this;

    _classCallCheck(this, Faq);

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

  _createClass(Faq, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          title = _this$props.title;
      var isOpen = this.state.isOpen;
      return /*#__PURE__*/React__default.createElement(DetailsUI, {
        open: this.state.isOpen
      }, /*#__PURE__*/React__default.createElement(SummaryUI, null, /*#__PURE__*/React__default.createElement("h4", {
        onClick: this.toggle
      }, title)), isOpen && children);
    }
  }]);

  return Faq;
}(React__default.Component);

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  cursor: pointer;\n  display: block;\n  margin: 0;\n  padding: 0;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5$1() {
  var data = _taggedTemplateLiteral(["\n  margin: 0;\n  padding: 0;\n  display: block;\n"]);

  _templateObject5$1 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$2() {
  var data = _taggedTemplateLiteral(["\n  margin: 0;\n  padding: 0;\n  list-style: none;\n\n  li {\n    a:active,\n    a:link,\n    a:hover,\n    a:visited {\n      color: #fff;\n    }\n  }\n"]);

  _templateObject4$2 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$4() {
  var data = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  display: flex;\n  justify-content: space-between;\n  padding: ", ";\n  padding-right: ", ";\n  font-family: ", ";\n"]);

  _templateObject3$4 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$7() {
  var data = _taggedTemplateLiteral(["\n  color: #fff;\n  text-align: left;\n  white-space: nowrap;\n  font-style: normal;\n  a:active,\n  a:visited,\n  a:hover,\n  a:link {\n    color: #fff;\n    text-decoration: none;\n    font-family: ", ";\n  }\n  a:first-child {\n    text-transform: uppercase;\n  }\n  font-family: ", ";\n"]);

  _templateObject2$7 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$d() {
  var data = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  display: block;\n  max-width: 100%;\n  flex-shrink: 0;\n  font-size: ", ";\n"]);

  _templateObject$d = function _templateObject() {
    return data;
  };

  return data;
}
var ContainerUI$4 = styled__default('footer')(_templateObject$d(), theme.unit(0.5));
var AddressUI = styled__default('address')(_templateObject2$7(), theme.typography.fonts.font1, theme.typography.fonts.font1);
var InnerUI = styled__default('div')(_templateObject3$4(), "".concat(theme.unit(0.5), " ").concat(theme.unit(0.75)), theme.unit(1), theme.typography.fonts.font1);
var ColUI$1 = styled__default('ul')(_templateObject4$2());
var LinkItemUI = styled__default('li')(_templateObject5$1());
var LinkUI = styled__default('div')(_templateObject6());

function clickLink(tel, event) {
  event.nativeEvent.stopPropagation();
  window.location.href = 'tel://' + tel;
}

function clickEmail(email, event) {
  event.nativeEvent.stopPropagation();
  window.location = "mailto:".concat(email);
}

function Footer(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React__default.createElement(Section, {
    background: "dark"
  }, /*#__PURE__*/React__default.createElement(ContainerUI$4, null, children));
}

Footer.Grid = Grid;
Footer.Address = AddressUI;

Footer.Col = function (_ref2) {
  var children = _ref2.children,
      width = _ref2.width;
  return /*#__PURE__*/React__default.createElement(Grid.Col, {
    width: width
  }, /*#__PURE__*/React__default.createElement(ColUI$1, null, children));
};

Footer.Link = function (_ref3) {
  var children = _ref3.children,
      tel = _ref3.tel,
      mailto = _ref3.mailto;

  if (tel) {
    return /*#__PURE__*/React__default.createElement(LinkUI, {
      onClick: clickLink.bind(null, tel)
    }, children);
  } else if (mailto) {
    return /*#__PURE__*/React__default.createElement(LinkUI, {
      onClick: clickEmail.bind(null, mailto)
    }, children);
  }

  return /*#__PURE__*/React__default.createElement(LinkItemUI, null, children);
};

function _templateObject6$1() {
  var data = _taggedTemplateLiteral(["\n  padding: ", ";\n  padding-right: ", ";\n  padding-left: ", ";\n  ", " {\n    border-bottom: 1px solid;\n    border-color: rgba(255, 255, 255, 0.25);\n    padding: ", ";\n    position: relative;\n    a {\n      display: block;\n      width: 100%;\n    }\n  }\n"]);

  _templateObject6$1 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5$2() {
  var data = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  color: #fff;\n  cursor: pointer;\n  border-bottom: 1px solid #fff;\n  display: flex;\n  position: relative;\n  padding: ", ";\n  margin: 0;\n  align-items: center;\n"]);

  _templateObject5$2 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$3() {
  var data = _taggedTemplateLiteral(["\n  justify-self: flex-start;\n  color: #fff;\n  text-align: left;\n"]);

  _templateObject4$3 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$5() {
  var data = _taggedTemplateLiteral(["\n  cursor: pointer;\n  display: block;\n  width: 100%;\n"]);

  _templateObject3$5 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$8() {
  var data = _taggedTemplateLiteral(["\n  a {\n    color: #fff;\n  }\n\n  a:active,\n  a:visited,\n  a:hover,\n  a:link {\n    color: #fff;\n    text-decoration: none;\n    font-family: ", ";\n  }\n  font-size: ", ";\n"]);

  _templateObject2$8 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$e() {
  var data = _taggedTemplateLiteral(["\n  transform: ", ";\n"]);

  _templateObject$e = function _templateObject() {
    return data;
  };

  return data;
}
var AnimatedIconUI = styled__default('div')(_templateObject$e(), function (_ref) {
  var isOpen = _ref.isOpen;
  return isOpen ? "rotate deg(90)" : "rotate deg(-90)";
});
var ContainerUI$5 = styled__default('footer')(_templateObject2$8(), theme.typography.fonts.font1, theme.unit(0.5));
var LinkUI$1 = styled__default('div')(_templateObject3$5());
var AddressUI$1 = styled__default('div')(_templateObject4$3());
var LinkTitleUI = styled__default('div')(_templateObject5$2(), theme.unit(0.25));
var SubMenuUI = styled__default('div')(_templateObject6$1(), theme.unit(0.25), theme.unit(1.75), theme.unit(1), LinkUI$1, theme.unit(0.375));

function _templateObject4$4() {
  var data = _taggedTemplateLiteral(["\n  width: ", ";\n  position: absolute;\n  top: ", ";\n  right: ", ";\n  margin: auto;\n"]);

  _templateObject4$4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$6() {
  var data = _taggedTemplateLiteral(["\n  bottom: 0;\n  width: ", ";\n  position: absolute;\n  top: 0;\n  right: ", ";\n  margin: auto;\n  transform: ", ";\n"]);

  _templateObject3$6 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$9() {
  var data = _taggedTemplateLiteral(["\n  bottom: 0;\n  width: ", ";\n  position: absolute;\n  top: 0;\n  left: ", ";\n  margin: auto;\n\n  transform: rotate(90deg);\n"]);

  _templateObject2$9 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$f() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  display: block;\n\n  svg {\n    display: block;\n  }\n"]);

  _templateObject$f = function _templateObject() {
    return data;
  };

  return data;
}
var ContainerUI$6 = styled__default('div')(_templateObject$f());
var ChevronLeftUI = styled__default('div')(_templateObject2$9(), theme.unit(0.5), theme.unit(0));
var ChevronRightUI = styled__default('div')(_templateObject3$6(), theme.unit(0.5), theme.unit(0.5), function (_ref) {
  var isOpen = _ref.isOpen;
  return isOpen ? "rotate(0deg)" : "rotate(-90deg)";
});
var ChevronTopUI = styled__default('div')(_templateObject4$4(), theme.unit(0.5), theme.unit(0.25), theme.unit(0.75));

function _templateObject$g() {
  var data = _taggedTemplateLiteral(["\n  fill: ", ";\n  animation: ", ";\n"]);

  _templateObject$g = function _templateObject() {
    return data;
  };

  return data;
}

var pulseColor = function pulseColor(headerStyle) {
  return styled.keyframes(["to{fill:", ";}from{fill:", ";}"], headerStyle === 'light' ? theme.colors.white : theme.colors.black, headerStyle === 'light' ? theme.colors.black : theme.colors.white);
};

var AnimateFillUI = styled__default('path')(_templateObject$g(), function (_ref) {
  var headerStyle = _ref.headerStyle;
  return headerStyle === 'light' ? theme.colors.white : theme.colors.black;
}, function (_ref2) {
  var isAnimated = _ref2.isAnimated,
      headerStyle = _ref2.headerStyle;
  return isAnimated ? styled.css(["", " ", " ease-in-out 1"], pulseColor(headerStyle), theme.animation.speed["default"]) : 'none';
});

function Logo(_ref) {
  var isAnimated = _ref.isAnimated,
      isWhite = _ref.isWhite,
      headerStyle = _ref.headerStyle;
  return /*#__PURE__*/React__default.createElement("a", {
    href: "/"
  }, /*#__PURE__*/React__default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "100%",
    viewBox: "0 0 1111.745 406.82"
  }, /*#__PURE__*/React__default.createElement("defs", null, /*#__PURE__*/React__default.createElement("path", {
    id: "c",
    d: "M49.862 62.774h195.107v81.25H49.862z"
  }), /*#__PURE__*/React__default.createElement("path", {
    id: "b",
    d: "M63.225 57.429h172.122v82.854H63.225z"
  }), /*#__PURE__*/React__default.createElement("path", {
    id: "a",
    d: "M26.342 19.476h236.266V155.81H26.342z"
  })), /*#__PURE__*/React__default.createElement("g", {
    color: "#000"
  }, /*#__PURE__*/React__default.createElement("path", {
    d: "M57.015 347.559c75.568 76.808 199.093 77.814 275.901 2.246a195.097 195.097 0 0023.297-27.613c-77.89 66.424-193.874 61.35-265.667-11.62-65.84-66.92-74.684-171.24-21.05-248.289a195.097 195.097 0 00-10.235 9.375c-76.808 75.568-77.814 199.093-2.246 275.901z",
    overflow: "visible",
    fill: isWhite ? '#fff' : 'navy'
  })), /*#__PURE__*/React__default.createElement("g", {
    color: "#000"
  }, /*#__PURE__*/React__default.createElement("path", {
    d: "M213.756.925C125.223 4.103 56.029 78.45 59.209 166.983a160.406 160.406 0 003.81 29.459c2.966-84.113 70.439-151.628 154.549-154.648 77.135-2.77 145.305 49.787 162.249 125.089.134-3.803.133-7.609-.003-11.411C376.635 66.939 302.288-2.254 213.755.925z",
    overflow: "visible",
    fill: isWhite ? '#fff' : '#d40000'
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "M213.727.107C124.75 3.3 55.194 78.037 58.389 167.013c.357 9.967 1.64 19.88 3.83 29.61l1.619-.153c2.952-83.69 70.071-150.853 153.76-153.858 76.745-2.755 144.561 49.53 161.42 124.452l1.619-.153c.135-3.822.133-7.647-.004-11.469C377.439 66.477 302.718-3.072 213.756.107h-.03zm.058 1.636c88.09-3.163 162.046 65.668 165.21 153.758.062 1.747-.004 3.496.001 5.244C359.77 88.302 292.988 38.266 217.54 40.975c-82.398 2.96-148.744 67.569-154.812 149.118-1.408-7.647-2.42-15.362-2.7-23.139C56.864 78.874 125.68 4.924 213.756 1.745l.03-.002z",
    fill: isWhite ? '#fff' : '#d40000',
    overflow: "visible"
  })), /*#__PURE__*/React__default.createElement("g", null, /*#__PURE__*/React__default.createElement(AnimateFillUI, {
    d: "M200.418 284.83q-12.066 0-22.315-3.562-10.176-3.562-17.518-10.612-7.34-7.05-11.411-17.59-3.998-10.54-3.998-24.35 0-12.866 3.852-23.333 3.853-10.467 11.194-17.953 7.05-7.196 17.445-11.121 10.467-3.925 22.823-3.925 6.833 0 12.284.8 5.525.726 10.177 1.962 4.87 1.38 8.795 3.125 3.997 1.672 6.978 3.126v26.24h-3.199q-2.035-1.745-5.16-4.144-3.053-2.398-6.978-4.724-3.998-2.326-8.65-3.925-4.652-1.6-9.958-1.6-5.888 0-11.194 1.89-5.306 1.818-9.813 6.106-4.288 4.143-6.977 10.976-2.617 6.832-2.617 16.572 0 10.176 2.835 17.009 2.907 6.832 7.268 10.758 4.434 3.997 9.886 5.742 5.451 1.672 10.757 1.672 5.088 0 10.031-1.527 5.015-1.526 9.231-4.143 3.562-2.108 6.615-4.507 3.053-2.398 5.015-4.143h2.908v25.877q-4.07 1.817-7.778 3.416-3.707 1.6-7.777 2.762-5.307 1.526-9.958 2.326-4.652.8-12.793.8zM336.171 207.636q0-4.07-1.672-6.977-1.671-2.908-5.742-4.58-2.835-1.163-6.614-1.38-3.78-.291-8.795-.291h-10.104v29.147h8.577q6.687 0 11.194-.654 4.506-.655 7.56-2.98 2.907-2.254 4.215-4.943 1.381-2.762 1.381-7.342zm43.54 75.086h-34.09l-29.511-39.687h-12.866v39.687h-27.766v-108.23h46.81q9.595 0 16.5 1.09 6.905 1.09 12.938 4.724 6.106 3.635 9.667 9.45 3.635 5.742 3.635 14.464 0 11.993-5.597 19.553-5.524 7.56-15.846 12.575zM482.434 282.722h-78.283v-108.23h78.283v20.933h-50.517v18.68H478.8v20.934h-46.883v26.749h50.517zM612.694 248.704q0 15.991-13.593 26.022-13.52 9.958-36.78 9.958-13.446 0-23.477-2.326-9.958-2.398-18.68-6.033v-25.949h3.052q8.65 6.905 19.335 10.612 10.758 3.707 20.643 3.707 2.544 0 6.687-.436 4.143-.436 6.76-1.453 3.198-1.309 5.233-3.271 2.108-1.963 2.108-5.815 0-3.562-3.052-6.106-2.98-2.617-8.796-3.998-6.105-1.453-12.938-2.69-6.76-1.307-12.72-3.27-13.665-4.434-19.698-11.993-5.96-7.632-5.96-18.899 0-15.119 13.52-24.64 13.592-9.595 34.889-9.595 10.685 0 21.08 2.108 10.466 2.035 18.098 5.16v24.932h-2.98q-6.542-5.233-16.064-8.722-9.45-3.562-19.334-3.562-3.49 0-6.978.509-3.417.436-6.615 1.744-2.835 1.09-4.87 3.344-2.035 2.18-2.035 5.015 0 4.289 3.27 6.615 3.272 2.253 12.358 4.143 5.96 1.236 11.411 2.398 5.525 1.163 11.848 3.199 12.43 4.07 18.317 11.12 5.96 6.979 5.96 18.172zM696.912 284.83q-12.066 0-22.314-3.562-10.177-3.562-17.518-10.612-7.341-7.05-11.412-17.59-3.997-10.54-3.997-24.35 0-12.866 3.852-23.333 3.852-10.467 11.194-17.953 7.05-7.196 17.444-11.121 10.467-3.925 22.824-3.925 6.832 0 12.284.8 5.524.726 10.176 1.962 4.87 1.38 8.795 3.125 3.998 1.672 6.978 3.126v26.24h-3.198q-2.035-1.745-5.16-4.144-3.054-2.398-6.979-4.724-3.998-2.326-8.65-3.925-4.651-1.6-9.958-1.6-5.887 0-11.193 1.89-5.306 1.818-9.813 6.106-4.288 4.143-6.978 10.976-2.617 6.832-2.617 16.572 0 10.176 2.835 17.009 2.908 6.832 7.269 10.758 4.434 3.997 9.885 5.742 5.452 1.672 10.758 1.672 5.088 0 10.03-1.527 5.016-1.526 9.232-4.143 3.561-2.108 6.614-4.507 3.053-2.398 5.016-4.143h2.907v25.877q-4.07 1.817-7.777 3.416-3.707 1.6-7.778 2.762-5.306 1.526-9.958 2.326t-12.793.8zM846.228 282.722h-78.283v-108.23h78.283v20.933h-50.517v18.68h46.883v20.934H795.71v26.749h50.517zM980.207 282.722h-26.894l-45.938-74.286v74.286H881.79v-108.23h33.363l39.47 62.001v-62.002h25.585zM1108.764 195.425h-33.799v87.297h-27.911v-87.297h-33.8v-20.934h95.51z",
    headerStyle: headerStyle,
    isAnimated: isAnimated
  })), /*#__PURE__*/React__default.createElement("g", null, /*#__PURE__*/React__default.createElement(AnimateFillUI, {
    d: "M441.178 382.525h-50.185v-69.577h17.944v56.12h32.241zM540.606 382.525h-50.325v-69.577h50.325v13.457h-32.475v12.009h30.14v13.457h-30.14v17.196h32.475zM653.296 382.525h-17.29l-29.531-47.756v47.756h-16.448v-69.577h21.448l25.373 39.858v-39.858h16.448zM767.19 347.806q0 9.72-4.439 17.43-4.439 7.663-11.214 11.775-5.094 3.084-11.168 4.299-6.075 1.215-14.392 1.215h-24.532v-69.577h25.233q8.504 0 14.672 1.448 6.168 1.402 10.374 4.019 7.196 4.392 11.308 11.868 4.158 7.43 4.158 17.523zm-18.55-.14q0-6.869-2.524-11.729-2.476-4.906-7.897-7.663-2.756-1.355-5.653-1.822-2.85-.514-8.645-.514h-4.533v43.55h4.533q6.402 0 9.392-.561 2.99-.608 5.841-2.15 4.906-2.803 7.196-7.476 2.29-4.72 2.29-11.635zM861.506 382.525h-50.325v-69.577h50.325v13.457h-32.475v12.009h30.14v13.457h-30.14v17.196h32.475zM958 334.255q0-2.616-1.075-4.486-1.075-1.869-3.691-2.943-1.823-.748-4.252-.888-2.43-.187-5.654-.187h-6.495v18.738h5.513q4.3 0 7.196-.421 2.897-.42 4.86-1.916 1.869-1.448 2.71-3.177.888-1.776.888-4.72zm27.99 48.27h-21.916l-18.97-25.514h-8.271v25.514h-17.85v-69.577h30.092q6.168 0 10.607.7 4.44.701 8.318 3.038 3.925 2.336 6.214 6.074 2.337 3.692 2.337 9.3 0 7.71-3.598 12.569-3.552 4.86-10.187 8.084zM1083.96 360.656q0 10.28-8.738 16.729-8.692 6.401-23.644 6.401-8.645 0-15.093-1.495-6.402-1.542-12.01-3.878V361.73h1.963q5.56 4.439 12.43 6.822 6.915 2.383 13.27 2.383 1.636 0 4.3-.28 2.663-.28 4.345-.935 2.056-.84 3.364-2.102 1.355-1.262 1.355-3.739 0-2.29-1.962-3.925-1.916-1.682-5.654-2.57-3.925-.934-8.318-1.729-4.345-.84-8.177-2.102-8.785-2.85-12.663-7.71-3.832-4.907-3.832-12.15 0-9.719 8.692-15.84 8.738-6.168 22.429-6.168 6.869 0 13.55 1.355 6.73 1.309 11.636 3.318v16.027h-1.916q-4.206-3.364-10.327-5.607-6.074-2.29-12.43-2.29-2.242 0-4.485.327-2.196.28-4.252 1.122-1.823.7-3.131 2.15-1.308 1.401-1.308 3.223 0 2.757 2.102 4.253 2.103 1.448 7.944 2.663 3.832.794 7.336 1.542 3.551.748 7.617 2.056 7.99 2.617 11.775 7.15 3.832 4.485 3.832 11.681z",
    headerStyle: headerStyle,
    isAnimated: isAnimated
  }))));
}

function BusinessInsider () {
  return /*#__PURE__*/React__default.createElement("svg", {
    version: "1.1",
    id: "layer",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 200 652 230"
  }, /*#__PURE__*/React__default.createElement("path", {
    fill: "#185f7d",
    d: "M207.5 227.1c4.7-1.4 9.9-1.4 15.2-.5 5.7.9 10.9 2.4 15.6 5.7v13.3c-2.8-2.4-6.2-4.3-9.5-5.7-4.7-1.9-9.5-2.8-14.2-2.4-2.4 0-4.7.5-6.6 1.9-1.4.9-2.4 1.9-3.3 3.3-.9 1.9-.9 3.8-.9 5.7 0 1.4.9 2.8 2.4 4.3 1.9 1.4 3.8 2.4 6.2 3.3 4.3 1.4 9 3.3 13.3 4.7 3.8 1.4 7.6 3.3 10.4 6.2 2.8 2.4 4.7 6.2 5.7 9.9.9 3.8.9 8.1 0 11.8-.9 3.3-2.8 6.6-5.7 9-2.8 2.4-6.6 4.3-9.9 5.2-5.2 1.4-10.4 1.4-15.6.9-6.6-.9-12.8-2.4-18.5-6.2v-13.3c6.6 5.2 14.7 8.5 22.7 8.5 3.3 0 7.1-.5 10.4-1.9 1.9-.9 3.3-2.4 4.3-4.3s.9-4.3 0-6.6c-.5-1.9-2.4-3.8-4.3-4.7-3.3-1.9-7.1-2.8-10.4-4.3-4.3-1.4-9-2.8-12.8-5.2-2.8-1.9-5.7-3.8-7.6-7.1-2.4-3.8-3.3-9-2.8-13.7.5-4.3 2.4-8.5 5.7-11.4 2.6-3.5 6.4-5.4 10.2-6.4zM503 230.4c5.2-3.3 11.4-4.3 17-4.3 7.6 0 15.2 1.9 21.3 6.2v13.3c-2.8-1.9-5.7-3.8-8.5-5.2-5.2-2.4-11.4-3.3-17-2.4-3.3.5-6.6 1.9-8.1 4.7-1.4 3.3-.9 7.6 1.4 9.9 2.4 1.9 4.7 2.8 7.6 3.8 4.3 1.4 8.5 3.3 12.8 4.7 3.8 1.4 7.6 3.8 10.4 6.6s4.3 6.2 4.7 9.9c.5 4.3.5 8.5-1.4 12.3-1.4 3.3-3.8 6.2-6.6 8.1-3.3 2.4-7.6 3.8-11.8 4.7-5.7.9-11.8.5-17.5-.5-4.7-.9-9.5-2.8-13.3-5.7v-13.3c5.2 4.3 10.9 7.1 17.5 8.1 2.8.5 5.7.5 8.5.5s5.7-.9 8.1-2.4c1.9-1.4 3.3-3.3 3.8-5.2.5-2.4 0-5.7-1.9-7.6-1.4-1.9-3.8-2.8-5.7-3.8-3.3-1.4-7.1-2.8-10.9-3.8-3.3-1.4-7.1-2.4-9.9-4.3-2.8-1.9-5.7-3.8-7.1-7.1-1.9-2.8-2.8-6.2-2.8-9.5 0-2.8 0-6.2 1.4-9 1.8-3.5 4.6-6.3 8-8.7zM583.9 228.1c3.3-1.4 7.1-1.9 10.9-1.9 7.6 0 15.6 1.9 22.3 5.7.5 0 .5.5.5.5v12.8c-2.8-2.4-6.2-4.3-9.9-5.7-4.3-1.9-9-2.4-14.2-2.4-2.4 0-4.7.5-7.1 1.9-1.4.9-2.8 2.4-3.3 3.8-1.4 3.3-.5 7.1 2.4 9.5 2.8 2.4 6.6 3.3 10.4 4.7 4.3 1.4 8.5 2.8 12.3 4.7 3.8 1.9 7.1 4.3 9.5 7.6 2.4 3.8 3.8 8.1 3.8 12.3 0 3.8-.9 8.1-3.3 10.9-2.4 3.3-5.7 5.7-9 7.6-3.8 1.9-8.1 2.4-12.3 2.8-4.7 0-9.5 0-14.2-1.4-4.3-.9-8.5-2.8-11.8-5.2V283c6.6 5.2 14.7 8.5 23.2 8.5 3.8 0 7.6-.5 10.4-1.9 1.9-.9 3.3-2.4 3.8-4.3.9-2.4.9-4.7 0-6.6-.9-1.9-2.4-3.8-4.3-4.7-3.3-1.9-7.1-3.3-10.9-4.3-4.3-1.4-8.5-2.8-12.8-5.2-3.3-1.9-6.2-4.3-8.1-7.6-1.9-3.3-2.8-7.6-2.4-11.4 0-3.8 1.4-7.6 3.3-10.4 3.3-3.2 7.1-5.6 10.8-7zM323 226.2c17 16.1 34.1 32.7 51.1 48.8v-47.8h12.3V303c-11.4-11.4-23.2-22.3-34.6-33.6-5.7-5.2-10.9-10.9-16.6-16.1v48.3h-12.3c.1-24.8.1-49.9.1-75.4zM21.4 227.6h19.4c4.7 0 9 0 13.7.5s9 2.4 12.3 5.2c2.8 2.4 4.7 5.7 5.2 9 .9 3.8.9 8.1-.5 11.8-1.4 4.3-4.3 7.6-8.5 9.5.9.5 1.9.5 2.4.9 3.8 1.9 6.6 5.2 8.1 9 1.4 2.8 1.4 6.2 1.4 9.5-.5 4.3-1.4 8.1-4.3 11.4-2.8 3.8-7.1 5.7-11.8 7.1-3.3.5-7.6.9-11.4.5h-26v-74.4zm12.3 10.9v20.4h15.2c3.3 0 6.6-.9 9-2.8 1.9-1.4 2.8-3.8 2.8-6.2s-.5-5.2-1.9-7.6c-1.9-1.9-3.8-2.8-6.2-3.3-2.8-.5-5.2-.5-8.1-.5H33.7zm0 30.8v21.8h16.1c2.8 0 6.2-.5 8.5-2.4 2.4-1.4 3.8-3.8 4.3-6.2.5-2.8 0-5.7-1.4-8.1-.9-1.9-3.3-3.3-5.2-4.3-1.9-.5-4.3-.9-6.2-.9-5.7.1-10.9.1-16.1.1zM102.3 227.6h12.8V266c0 4.7 0 9 .9 13.7.9 3.8 2.8 7.1 5.7 9.5s6.6 2.8 10.4 2.8c3.8 0 7.6-.9 10.9-3.3 2.4-1.9 4.3-4.7 5.2-7.6.9-3.3.9-7.1.9-10.9v-42.6h12.8v44.5c0 6.2-.9 12.3-3.8 18-2.4 4.7-6.6 8.5-11.8 10.9-5.7 2.4-11.8 3.3-18 2.8-4.3-.5-8.5-1.4-12.3-3.3-2.8-1.4-5.2-3.3-7.1-5.7-2.4-2.8-4.3-6.2-5.2-9.9-1.4-4.3-1.9-8.1-1.4-12.3v-45zM274.7 227.6h12.8v74.8h-12.8v-74.8zM420.1 227.6h45V239h-32.7v18h29.4v10.9h-29.4v23.2h32.7v11.4h-45v-60.6-14.3zM119.9 339.8c17 16.1 34.1 32.2 50.7 48.3v-46.9h12.3V416c-17-16.1-34.1-32.7-50.7-48.8V415h-12.3v-75.2zM225.9 342.2c4.7-2.4 9.9-2.8 15.2-2.8 7.1.5 14.2 2.4 19.9 6.2v12.8c-2.8-2.4-6.2-4.3-9.5-5.7-4.7-1.9-9.5-2.8-14.7-2.4-2.4 0-4.7.9-6.6 1.9-1.4.9-2.8 2.4-3.3 3.8-.9 2.8-.5 6.2 1.9 8.5 1.9 1.9 3.8 2.8 6.2 3.3 4.3 1.4 9 3.3 13.3 4.7 3.3 1.4 7.1 2.8 9.9 5.2 2.8 2.4 4.7 5.7 5.7 9 .9 3.8.9 7.6.5 11.4-.9 3.8-2.8 6.6-5.2 9.5-2.8 2.8-6.2 4.3-9.9 5.7-4.7 1.4-9.5 1.4-14.2 1.4-4.7-.5-9.9-1.4-14.2-3.3-1.9-.9-3.8-1.9-5.7-2.8v-13.3c6.6 5.2 14.7 8.5 22.7 8.5 3.8 0 7.1-.5 10.4-1.9 1.9-.9 3.3-2.8 3.8-4.7.5-1.9.5-4.3 0-6.2-.9-1.9-2.4-3.8-4.3-4.7-3.3-1.9-6.6-2.8-10.4-4.3-3.8-1.4-8.1-2.8-11.8-4.7-3.3-1.9-6.6-4.3-8.5-7.6-1.9-3.3-2.8-7.1-2.8-10.9s.9-7.1 2.8-10.4c2.7-2.4 5.5-4.3 8.8-6.2zM71.5 340.8h12.8v73.4H71.5v-73.4zM297.4 340.8h12.8v73.4h-12.8v-73.4zM346.7 340.8h29.4c7.6 0 15.2 1.9 21.3 6.6 5.2 3.8 9 9 11.4 15.2 1.9 5.2 2.4 10.4 2.4 15.6 0 7.6-1.9 15.2-6.2 21.8-3.3 5.2-8.5 9.5-14.7 11.8-4.7 1.9-9.5 2.8-14.7 2.8h-29.4c.5-24.6.5-49.2.5-73.8zm12.8 11.3v51.1h18.9c4.7-.5 9-2.4 12.8-5.7 2.8-2.8 5.2-6.6 6.2-10.4.9-3.8 1.4-8.1.9-11.8-.5-3.8-.9-7.1-2.4-10.4-1.4-3.3-3.8-6.2-6.6-8.1-3.3-2.4-7.1-3.8-11.4-3.8-2.4-.5-4.7 0-7.1 0-3.8-.9-7.5-.9-11.3-.9zM437.6 340.8h45v10.9h-32.7v17.5h29.4v10.9h-29.4v22.7h32.7v11.4h-45v-73.4zM520 340.8h27.5c4.7 0 9 .9 13.3 2.8 3.3 1.4 6.2 3.8 8.1 7.1 2.4 3.8 3.3 8.1 3.3 12.3 0 4.3-.5 9-2.8 12.8-1.9 2.8-4.3 5.2-7.1 6.6-2.4.9-4.7 1.4-7.1 1.9 9 9.9 17.5 20.4 26.5 30.3h-14.2c-8.5-9.9-17-19.9-25.6-29.8h-9v29.8h-12.3c-.6-24.6-.6-49.2-.6-73.8zm12.3 10.9V374H547c3.3 0 6.6-.9 9-3.3 1.9-1.4 2.8-3.8 2.8-5.7.5-2.8 0-5.7-1.4-8.5-1.4-2.4-3.8-3.8-6.6-4.3-2.8-.9-5.2-.5-8.1-.5h-10.4z"
  }));
}

function BrowserHome () {
  return /*#__PURE__*/React__default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 508 508"
  }, /*#__PURE__*/React__default.createElement("circle", {
    cx: "254",
    cy: "254",
    r: "254",
    fill: "#fd8469"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "M426 122.8H82c-7.2 0-13.2 6-13.2 13.2v236.4c0 7.2 6 13.2 13.2 13.2h344c7.2 0 13.2-6 13.2-13.2V135.6c0-7.2-6-12.8-13.2-12.8z",
    fill: "#e6e9ee"
  }), /*#__PURE__*/React__default.createElement("g", {
    fill: "#fff"
  }, /*#__PURE__*/React__default.createElement("path", {
    d: "M87.6 166H420v204.4H87.6zM188 166h-74.4l9.2-16.4h56z"
  })), /*#__PURE__*/React__default.createElement("path", {
    fill: "#ced5e0",
    d: "M262.4 166H188l9.2-16.4h56.4z"
  }), /*#__PURE__*/React__default.createElement("circle", {
    cx: "411.6",
    cy: "145.2",
    r: "8.8",
    fill: "#ff7058"
  }), /*#__PURE__*/React__default.createElement("circle", {
    cx: "383.6",
    cy: "145.2",
    r: "8.8",
    fill: "#84dbff"
  }), /*#__PURE__*/React__default.createElement("circle", {
    cx: "352.8",
    cy: "145.2",
    r: "8.8",
    fill: "#ffd05b"
  }), /*#__PURE__*/React__default.createElement("path", {
    fill: "#54c0eb",
    d: "M386.8 261.6l-16 71.6h-92l-16-71.6 62-50.8z"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "M401.2 255.6l-72-58.8c-1.2-.8-2.8-1.6-4.4-1.6-1.6 0-3.2.4-4.4 1.6l-72 58.8c-3.2 2.4-3.2 7.2-.4 10 2.4 2.4 6 2.8 8.8.4l67.6-55.2 68 55.2c2.8 2 6.4 2 8.8-.4 3.2-2.8 2.8-7.6 0-10z",
    fill: "#324a5e"
  }), /*#__PURE__*/React__default.createElement("path", {
    fill: "#84dbff",
    d: "M305.2 278.8h39.6v54.4h-39.6z"
  }), /*#__PURE__*/React__default.createElement("g", {
    fill: "#e6e9ee"
  }, /*#__PURE__*/React__default.createElement("path", {
    d: "M113.6 205.6H218v8.8H113.6zM113.6 227.2H218v8.8H113.6zM113.6 249.2H218v8.8H113.6zM113.6 270.8H218v8.8H113.6zM113.6 292.4H218v8.8H113.6zM113.6 314h52.8v8.8h-52.8z"
  })));
}

function Chevron() {
  return /*#__PURE__*/React__default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 256 256"
  }, /*#__PURE__*/React__default.createElement("path", {
    fill: theme.colors.dark2,
    d: "M225.813 48.907L128 146.72 30.187 48.907 0 79.093l128 128 128-128z"
  }));
}

function Email () {
  return /*#__PURE__*/React__default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 502.073 502.073"
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

function Loader() {
  return /*#__PURE__*/React__default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "#000",
    viewBox: "0 0 44 44"
  }, /*#__PURE__*/React__default.createElement("g", {
    fill: "none",
    "fill-rule": "evenodd",
    "stroke-width": "2"
  }, /*#__PURE__*/React__default.createElement("circle", {
    cx: "22",
    cy: "22",
    r: "1"
  }, /*#__PURE__*/React__default.createElement("animate", {
    attributeName: "r",
    begin: "0s",
    dur: "1.8s",
    values: "1; 20",
    calcMode: "spline",
    keyTimes: "0; 1",
    keySplines: "0.165, 0.84, 0.44, 1",
    repeatCount: "indefinite"
  }), /*#__PURE__*/React__default.createElement("animate", {
    attributeName: "stroke-opacity",
    begin: "0s",
    dur: "1.8s",
    values: "1; 0",
    calcMode: "spline",
    keyTimes: "0; 1",
    keySplines: "0.3, 0.61, 0.355, 1",
    repeatCount: "indefinite"
  })), /*#__PURE__*/React__default.createElement("circle", {
    cx: "22",
    cy: "22",
    r: "1"
  }, /*#__PURE__*/React__default.createElement("animate", {
    attributeName: "r",
    begin: "-0.9s",
    dur: "1.8s",
    values: "1; 20",
    calcMode: "spline",
    keyTimes: "0; 1",
    keySplines: "0.165, 0.84, 0.44, 1",
    repeatCount: "indefinite"
  }), /*#__PURE__*/React__default.createElement("animate", {
    attributeName: "stroke-opacity",
    begin: "-0.9s",
    dur: "1.8s",
    values: "1; 0",
    calcMode: "spline",
    keyTimes: "0; 1",
    keySplines: "0.3, 0.61, 0.355, 1",
    repeatCount: "indefinite"
  }))));
}

function MarketWatch () {
  return /*#__PURE__*/React__default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "5 22 110 16"
  }, /*#__PURE__*/React__default.createElement("path", {
    d: "M32.56 28.768l-.172.888h-.03c-.23-.516-.888-1.203-2.292-1.203-2.292 0-4.613 1.776-5.128 4.555-.458 2.435.745 4.584 3.438 4.584 1.003 0 2.15-.4 2.722-1.232h.03l-.172.917h2.52l1.576-8.538H32.56zm-.802 4.24c-.172.83-.945 2.206-2.55 2.206-1.547 0-1.862-1.375-1.72-2.15.172-.974 1.06-2.206 2.52-2.206 1.433 0 1.92 1.146 1.748 2.15zm4.756-4.24h2.378l-.172.888h.03c.315-.4.888-1.203 2.378-1.203l-.458 2.58c-1.203.03-2.1.258-2.292 1.576l-.888 4.7h-2.6zm6.332-3.352h2.58l-1.203 6.446h.057l2.95-3.094h3.008l-3.925 3.753 2.263 4.785h-2.894L44.02 33.18H44l-.774 4.126h-2.55zm11.5 3.037c-2.58 0-4.9 2.235-5.33 4.613-.458 2.52 1.232 4.527 3.696 4.527a4.76 4.76 0 002.58-.774c.802-.487 1.547-1.232 2.15-2.177h-2.607c-.43.458-.917.802-1.72.802-1.003 0-1.72-.602-1.7-1.604h6.4c.086-.2.115-.344.172-.66.487-2.636-1.03-4.727-3.64-4.727zm-2.58 3.64c.2-.516.888-1.46 2.235-1.46 1.318 0 1.662.945 1.662 1.46zm-30.608 5.213h2.55v-11.9H21.53l-4.527 6.76h-.03v-6.76h-2.177l-7.993 11.9h3.094l4.498-6.76h.03v6.76h2.206l4.47-6.76h.057zm43.32-8.538h-1.604l.458-2.52h-2.235l-.172.974c-.2 1.117-.888 1.46-1.834 1.547h-.03l-.4 1.92h1.26l-1.232 6.6h2.55l1.232-6.6h1.633z"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "M104.014 34.07c-.83 1.948-2.836 3.524-5.128 3.524-2.58 0-4.212-2.034-3.725-4.584.458-2.52 2.78-4.555 5.358-4.555 2.263 0 3.8 1.518 3.84 3.6h-2.58c-.172-.602-.544-1.203-1.633-1.203-1.203-.057-2.206.945-2.435 2.15-.23 1.232.4 2.177 1.633 2.177 1.06 0 1.7-.602 2.063-1.146h2.607zm-21.2-11.69l-4.956 3.037h1.404l-4.498 6.76h-.057v-6.76H72.5L68 32.178h-.03v-6.76h-2.58v11.9h2.235l4.498-6.76h.03v6.76h2.206l7.965-11.9h1.26zm4.87 14.927h-2.52l.172-.917h-.03c-.602.83-1.72 1.232-2.722 1.232-2.722 0-3.896-2.15-3.438-4.584.516-2.78 2.865-4.555 5.128-4.555 1.404 0 2.063.688 2.292 1.203h.03l.172-.888h2.52zm-4.298-2.09c1.576 0 2.378-1.375 2.55-2.206.172-1.03-.315-2.15-1.748-2.15-1.46 0-2.35 1.232-2.52 2.206-.172.802.172 2.15 1.72 2.15zm12.29-6.446h-1.604l.458-2.52h-2.235l-.172.974c-.2 1.117-.888 1.46-1.834 1.547h-.03l-.372 1.92h1.26l-1.232 6.6h2.55l1.232-6.6h1.633zm10.744-3.352h2.55l-.774 4.24h.03c.544-.802 1.29-1.203 2.407-1.203.802 0 1.72.315 2.15.945.544.83.487 1.576.2 3.123l-.888 4.756h-2.55l.86-4.64c.086-.4.315-1.805-1.03-1.805-1.433 0-1.662 1.29-1.748 1.72l-.888 4.727h-2.52z",
    fill: "#00b742"
  }));
}

function Money () {
  return /*#__PURE__*/React__default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 508 508"
  }, /*#__PURE__*/React__default.createElement("circle", {
    cx: "254",
    cy: "254",
    r: "254",
    fill: "#324a5e"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "M432.4 352.8V378c0 6-4.8 10.8-10.8 10.8H86.4c-6 0-10.8-4.8-10.8-10.8v-25.2c0 6 4.8 10.8 10.8 10.8h335.2c6-.4 10.8-4.8 10.8-10.8z",
    fill: "#2c9984"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "M432.4 327.6v25.2c0 6-4.8 10.8-10.8 10.8H86.4c-6 0-10.8-4.8-10.8-10.8v-25.2c0 6 4.8 10.8 10.8 10.8h335.2c6-.4 10.8-5.2 10.8-10.8z",
    fill: "#fff"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "M432.4 299.2v28.4c0 6-4.8 10.8-10.8 10.8H86.4c-6 0-10.8-4.8-10.8-10.8v-28.4c0 6 4.8 10.8 10.8 10.8h335.2c6 0 10.8-4.8 10.8-10.8z",
    fill: "#2c9984"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "M421.6 310H86.4c-6 0-10.8-4.8-10.8-10.8V130c0-6 4.8-10.8 10.8-10.8h334.8c6 0 10.8 4.8 10.8 10.8v168.8c.4 6.4-4.4 11.2-10.4 11.2z",
    fill: "#4cdbc4"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "M94.4 263.6v-98c15.2 0 27.2-12.4 27.2-27.2h264c0 15.2 12.4 27.2 27.2 27.2v98c-15.2 0-27.2 12.4-27.2 27.2H122c0-14.8-12.4-27.2-27.6-27.2z",
    fill: "#fff"
  }), /*#__PURE__*/React__default.createElement("g", {
    fill: "#2c9984"
  }, /*#__PURE__*/React__default.createElement("circle", {
    cx: "254",
    cy: "214.8",
    r: "62.4"
  }), /*#__PURE__*/React__default.createElement("circle", {
    cx: "362",
    cy: "214.8",
    r: "21.2"
  }), /*#__PURE__*/React__default.createElement("circle", {
    cx: "146",
    cy: "214.8",
    r: "21.2"
  })), /*#__PURE__*/React__default.createElement("path", {
    d: "M276.8 230.8c0-12.4-10.4-22.8-22.8-22.8-5.2 0-9.6-4.4-9.6-9.6 0-5.2 4-9.2 9.2-9.6h1.6c2.4 0 4.8 1.2 6.4 3.2 2.4 2.8 6.8 2.8 9.2.4 2.8-2.4 2.8-6.8.4-9.2-2.8-2.8-6.4-5.2-10-6.4v-4.4c0-3.6-2.8-6.4-6.4-6.4s-6.4 2.8-6.4 6.4v4.4c-9.6 2.8-16.4 11.6-16.4 22 0 12.4 10.4 22.8 22.8 22.8 5.2 0 9.6 4.4 9.6 9.6 0 5.2-4 9.2-9.2 9.6h-1.6c-2.4 0-4.8-1.2-6.4-3.2-2.4-2.8-6.8-2.8-9.2-.4-2.8 2.4-2.8 6.8-.4 9.2 2.8 2.8 6.4 5.2 10 6.4v4.4c0 3.6 2.8 6.4 6.4 6.4 3.6 0 6.4-2.8 6.4-6.4v-4.4c9.6-2.8 16.4-11.6 16.4-22z",
    fill: "#fff"
  }));
}

function Mortgage () {
  return /*#__PURE__*/React__default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 508 508"
  }, /*#__PURE__*/React__default.createElement("circle", {
    cx: "254",
    cy: "254",
    r: "254",
    fill: "#90dfaa"
  }), /*#__PURE__*/React__default.createElement("path", {
    fill: "#fff",
    d: "M424.8 221.2L254 50.4 83.2 221.2h39.6L151.6 408h204.8l28.8-186.8z"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "M302.4 298.8c0-26.8-21.6-48.8-48.4-48.8-11.6 0-20.8-9.2-20.8-20.8s9.2-20.8 20.8-20.8c5.6 0 11.2 2.4 15.2 6.4 5.2 5.6 14 6 19.6.4 5.6-5.2 6-14 .4-19.6-6-6.4-13.2-10.8-21.6-13.2v-9.6c0-7.6-6.4-14-14-14s-14 6.4-14 14v9.6c-20 6-34.8 24.4-34.8 46.4.8 27.2 22.4 49.2 49.2 49.2 11.6 0 20.8 9.2 20.8 20.8 0 11.6-9.2 20.8-20.8 20.8-5.6 0-11.2-2.4-15.2-6.4-5.2-5.6-14-6-19.6-.4-5.6 5.2-6 14-.4 19.6 6 6.4 13.2 10.8 21.6 13.2v9.6c0 7.6 6.4 14 14 14s14-6.4 14-14v-9.6c19.6-6.4 34-24.8 34-46.8z",
    fill: "#ff7058"
  }));
}

function Mortgage2 () {
  return /*#__PURE__*/React__default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 508 508"
  }, /*#__PURE__*/React__default.createElement("circle", {
    cx: "254",
    cy: "254",
    r: "254",
    fill: "#84dbff"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "M359.6 264.4v108.4c0 19.2 15.6 34.8 34.8 34.8 19.2 0 34.8-15.6 34.8-34.8V264.4h-69.6z",
    fill: "#e6e9ee"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "M359.6 372.8V97.6H98v275.2c0 19.2 15.6 34.8 34.8 34.8h261.6c-19.2 0-34.8-15.6-34.8-34.8z",
    fill: "#fff"
  }), /*#__PURE__*/React__default.createElement("path", {
    fill: "#ff7058",
    d: "M288.4 180.8H276v60h-94.4v-60h-12l59.2-60.4z"
  }), /*#__PURE__*/React__default.createElement("g", {
    fill: "#e6e9ee"
  }, /*#__PURE__*/React__default.createElement("path", {
    d: "M127.6 260H330v9.6H127.6zM127.6 286.8H330v9.6H127.6zM127.6 313.6H330v9.6H127.6zM127.6 340.8H330v9.6H127.6zM127.6 367.6h123.2v9.6H127.6z"
  })), /*#__PURE__*/React__default.createElement("path", {
    fill: "#f1543f",
    d: "M203.6 172.4H254v51.2h-50.4z"
  }), /*#__PURE__*/React__default.createElement("path", {
    fill: "#fff",
    d: "M208.4 177.2h41.2v42h-41.2z"
  }), /*#__PURE__*/React__default.createElement("g", {
    fill: "#f1543f"
  }, /*#__PURE__*/React__default.createElement("path", {
    d: "M206 195.6h45.6v4.8H206z"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "M226.4 175.2h4.8v45.6h-4.8z"
  })));
}

function Handshake () {
  return /*#__PURE__*/React__default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 508 508"
  }, /*#__PURE__*/React__default.createElement("circle", {
    cx: "254",
    cy: "254",
    r: "254",
    fill: "#84dbff"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "M355.2 295.6l-110.4-116-66.4-8.8-64 67.2 5.6 31.2 109.2 109.2c7.2 7.2 18.8 7.2 26 0 6.8-6.8 7.2-18 .8-25.2l6.4 6.4c7.2 7.2 18.8 7.2 26 0 6.8-6.8 7.2-18 .8-25.2l6.4 6.4c7.2 7.2 18.8 7.2 26 0 6.8-6.8 7.2-18 .8-25.2l6.4 6.4c7.2 7.2 18.8 7.2 26 0 7.6-7.2 7.6-19.2.4-26.4z",
    fill: "#ffd05b"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "M206.8 192.4c3.2-2.4 8-2.8 11.2-4.4 7.6-2.4 15.2-4.8 23.2-7.2 8.8-1.2 17.6-6 27.2-6.4 6.8-.4 13.6 1.6 20 3.2 19.6 5.2 38.8 10.4 58.4 15.6 9.6 25.2 19.6 50.4 29.2 75.6.4.8.4 1.2.4 2-.4.8-.8 1.2-1.6 1.6-4.8 3.2-26 17.2-27.2 16-24.4-22.8-44-37.2-63.6-56-5.2-5.2-18.8-16-18.8-16s-18.4 0-31.6-.8c-3.6 6.8-9.2 17.6-14.8 23.2 0 0-10 3.6-18 5.2-3.2.8-6.4-2-6.8-5.2-.8-12.8 1.6-25.6 6.8-37.6 1.2-3.6 3.2-6.8 6-8.8z",
    fill: "#324a5e"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "M444.4 258.4l-37.6-100c-1.6-4.4-6.8-6.8-11.2-5.2L345.2 172c-4.4 1.6-6.8 6.8-5.2 11.2l37.6 100c1.6 4.4 6.8 6.8 11.2 5.2l50.4-18.8c4.8-2 6.8-6.8 5.2-11.2z",
    fill: "#ff7058"
  }), /*#__PURE__*/React__default.createElement("g", {
    fill: "#324a5e"
  }, /*#__PURE__*/React__default.createElement("path", {
    d: "M188.4 162L148 126.4c-3.6-3.2-8.8-2.8-12 .8l-70.8 80c-3.2 3.6-2.8 8.8.8 12l40.4 35.6c3.6 3.2 8.8 2.8 12-.8l70.8-80c3.2-3.2 2.8-8.8-.8-12zM138.4 259.6l-18 13.6c-8 6-10.8 17.6-4.8 26s18 10.4 26 4.4l6.8-4.8c.4-.4 1.2-.8 1.6-1.2l10.8-8c8.8-6.4 10-19.6 2-27.6l-.4-.4c-6.4-6.4-16.8-7.2-24-2zM180 320.8l6.8-4.8c9.2-6.8 10-20 2-27.6-6.4-6.4-16.8-7.2-24-1.6l-16.4 12.4c-7.6 6.8-8 18.8-.8 26.4 6.4 6.8 17.2 7.2 24.8 1.6l6-4.4c.8-1.2 1.2-1.6 1.6-2z"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "M150 297.2c-.4.4-1.2.8-1.6 1.2l1.6-1.2zM210.4 344l2.8-2c9.2-6.8 10-20 2-27.6-6.4-6.4-16.8-7.2-24-1.6l-12.8 9.2c-7.6 6.8-8 18.8-.8 26.4 6.4 6.8 17.2 7.2 24.8 1.6l6-4.4c.8-.4 1.2-1.2 2-1.6z"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "M180 320.8c-.4.4-1.2.8-1.6 1.2l1.6-1.2zM208.8 345.6c-7.6 6.8-8 18.8-.8 26.4 6.4 6.8 17.2 7.2 24.8 1.6l6.8-4.8c9.2-6.8 10-20 2-28-6.4-6.4-16.8-7.2-24-1.6l-8.8 6.4z"
  })), /*#__PURE__*/React__default.createElement("circle", {
    cx: "404.8",
    cy: "255.6",
    r: "9.2",
    fill: "#fff"
  }), /*#__PURE__*/React__default.createElement("circle", {
    cx: "102.8",
    cy: "218",
    r: "9.2",
    fill: "#ff7058"
  }));
}

function Percentage () {
  return /*#__PURE__*/React__default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 504.123 504.123"
  }, /*#__PURE__*/React__default.createElement("circle", {
    cx: "252.062",
    cy: "252.062",
    r: "252.062",
    fill: "#324a5e"
  }), /*#__PURE__*/React__default.createElement("path", {
    fill: "#f1543f",
    d: "M363.52 298.142l46.08-46.08-46.08-46.08v-65.379h-65.378l-46.08-46.08-46.08 46.08h-65.379v65.379l-46.08 46.08 46.08 46.08v65.378h65.379l46.08 46.08 46.08-46.08h65.378z"
  }), /*#__PURE__*/React__default.createElement("path", {
    fill: "#fff",
    d: "M214.646 341.858h-52.381v-52.381l-37.416-37.415 37.416-37.416v-52.381h52.381l37.416-37.416 37.415 37.416h52.381v52.381l37.416 37.416-37.416 37.415v52.381h-52.381l-37.415 37.416z"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "M235.52 193.772c5.12 5.908 7.877 12.603 7.877 20.874 0 8.271-2.757 14.966-7.877 20.874-5.514 5.908-11.815 8.665-20.086 8.665-7.877 0-14.572-2.757-19.692-8.665-5.12-5.908-7.877-12.603-7.877-20.874 0-8.271 2.757-14.966 7.877-20.874 5.514-5.908 11.815-8.665 20.086-8.665 7.483.395 14.178 3.151 19.692 8.665zm74.831-5.12L215.828 317.44h-23.631l94.523-128.788h23.631zm-87.434 35.84c1.969-2.363 3.151-5.514 3.151-9.452 0-3.545-1.182-6.695-3.151-9.452-1.969-2.363-4.726-3.938-7.483-3.938-3.151 0-5.514 1.182-7.483 3.938-1.969 2.363-3.151 5.514-3.151 9.452 0 3.545 1.182 6.695 3.151 9.452 1.969 2.363 4.726 3.938 7.483 3.938 3.151-.393 5.514-1.575 7.483-3.938zm85.465 44.111c5.12 5.908 7.877 12.603 7.877 20.874 0 8.271-2.757 14.966-7.877 20.874-5.514 5.908-11.815 8.665-20.086 8.665-7.877 0-14.572-2.757-19.692-8.665-5.12-5.908-7.877-12.603-7.877-20.874s2.757-14.966 7.877-20.874c5.514-5.908 11.815-8.665 20.086-8.665 7.876 0 14.572 2.757 19.692 8.665zm-11.816 30.72c1.969-2.363 2.757-5.514 2.757-9.452 0-3.545-1.182-6.695-3.151-9.452-1.969-2.363-4.726-3.938-7.483-3.938-3.151 0-5.514 1.182-7.483 3.938-1.969 2.363-3.151 5.514-3.151 9.452 0 3.545 1.182 6.695 3.151 9.452 1.969 2.363 4.726 3.938 7.483 3.938 2.757.001 5.908-1.575 7.877-3.938z",
    fill: "#2b3b4e"
  }));
}

function Rocket () {
  return /*#__PURE__*/React__default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 508 508"
  }, /*#__PURE__*/React__default.createElement("circle", {
    cx: "254",
    cy: "254",
    r: "254",
    fill: "#84dbff"
  }), /*#__PURE__*/React__default.createElement("g", {
    fill: "#324a5e"
  }, /*#__PURE__*/React__default.createElement("path", {
    d: "M152.8 364.4h-18l15.6-67.6 42-17.6 4.8 46.8-29.2 14.8zM355.2 364.4h18l-15.6-67.6-42-17.6-4.8 46.8 29.2 14.8z"
  })), /*#__PURE__*/React__default.createElement("path", {
    d: "M310.8 342.8c10.4-29.2 16.4-66.4 16.4-107.2C327.2 142 254 66 254 66s-73.2 76-73.2 169.6c0 40.8 6 78 16.4 107.2h113.6z",
    fill: "#fff"
  }), /*#__PURE__*/React__default.createElement("g", {
    fill: "#324a5e"
  }, /*#__PURE__*/React__default.createElement("path", {
    d: "M302.8 138C281.6 94.4 254 66 254 66s-27.6 28.4-48.8 72h97.6zM245.2 354.8V348c0-27.6-10-50.4-22.4-50.4S200.4 320 200.4 348v6.8h44.8zM307.2 354.8V348c0-27.6-10-50.4-22.4-50.4S262.4 320 262.4 348v6.8h44.8z"
  })), /*#__PURE__*/React__default.createElement("path", {
    d: "M223.2 442c3.6-18 22-31.6 22-52.8s-10-24-22-24c-12.4 0-22 2.8-22 24s18 34.8 22 52.8z",
    fill: "#ff7058"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "M223.2 424.4c2.8-14 17.2-24.4 17.2-40.4 0-16.4-7.6-18.4-17.2-18.4-9.2 0-17.2 2-17.2 18.4 0 16 14 26.4 17.2 40.4z",
    fill: "#ffd05b"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "M284.8 442c3.6-18 22-31.6 22-52.8s-10-24-22-24-22 2.8-22 24 18.4 34.8 22 52.8z",
    fill: "#ff7058"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "M284.8 424.4c2.8-14 17.2-24.4 17.2-40.4 0-16.4-7.6-18.4-17.2-18.4-9.2 0-17.2 2-17.2 18.4.4 16 14.4 26.4 17.2 40.4z",
    fill: "#ffd05b"
  }), /*#__PURE__*/React__default.createElement("circle", {
    cx: "254",
    cy: "200.8",
    r: "34.8",
    fill: "#4cdbc4"
  }), /*#__PURE__*/React__default.createElement("g", {
    fill: "#2c9984"
  }, /*#__PURE__*/React__default.createElement("path", {
    d: "M274.4 172.4c-2.8-2-5.6-3.6-8.8-4.8l-44.4 44.8c1.2 3.2 2.8 6 4.8 8.8l48.4-48.8zM279.6 177.2l-49.2 49.6c1.2 1.2 2.8 2.4 4 3.2l48.4-48.4c-.8-1.6-2-3.2-3.2-4.4z"
  })));
}

function Sms () {
  return /*#__PURE__*/React__default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 501.551 501.551"
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

function YahooFinance () {
  return /*#__PURE__*/React__default.createElement("svg", {
    version: "1.0",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 150 500 200"
  }, /*#__PURE__*/React__default.createElement("path", {
    fill: "#410093",
    d: "M182 214v53h26v-21.5c0-17.3.3-22.2 1.5-24.5 1.7-3.4 4.3-5 7.9-5 7.9 0 8.6 2.4 8.6 29v22h26.1l-.3-28.8c-.3-31.9-.3-31.8-7.6-39.4-8.3-8.7-24.7-8.9-33.9-.5l-2.3 2V161h-26v53zm278.2-51.3c-.9 1.6-24.1 57.4-26.3 63.1l-.9 2.3 15.6-.3 15.6-.3 13.4-32.4c7.4-17.8 13.4-32.8 13.4-33.2 0-.5-6.7-.9-15-.9-13.2 0-15 .2-15.8 1.7zm-341.7 30.7c-9.9 3.1-16.7 9.3-21.7 19.4-3.1 6.3-3.3 7.2-3.3 17.7.1 13.2 2.2 19.7 9 27.2 6.6 7.4 13.2 10.6 23.1 11.1 9.5.5 14.1-.7 19-5l3.4-3v6.2h25v-73h-25v6.1l-3.5-2.6c-6.6-5.1-17.5-6.8-26-4.1zm24.7 26.5c3.8 3.5 4.2 4.3 4.6 9.7.3 5 0 6.4-2 9.3-2.7 4-8.1 7.1-12.3 7.1-4.8 0-11.6-4-13.7-8-5.5-10.6 1.7-22 14-22 4.7 0 5.7.4 9.4 3.9zm143-26.3c-7.1 1.9-10.6 3.8-15.9 8.7-17.8 16.4-15.9 46.8 3.9 59.9 8.3 5.6 14.2 7.1 25.1 6.6 7.4-.3 10.4-1 15.4-3.2 7.6-3.5 15.3-11.2 19.1-19.3 2.3-5.1 2.7-7 2.6-15.3 0-12.7-2.6-19.4-10.3-27-10.7-10.6-25.1-14.4-39.9-10.4zm18.6 24.4c9.3 5.7 9.6 19.5.5 25.2-6.8 4.1-16.3 2-20.4-4.5-2.6-4.2-2.3-13.5.7-16.8 5.3-6 13.1-7.6 19.2-3.9zm65.8-25c-19.4 4.9-32 24.1-28.7 43.7 2.3 13.4 9.9 23.5 21.9 29.1 5.1 2.4 6.8 2.7 17.2 2.7 10.4 0 12.1-.3 17.2-2.7 12.8-6 20.9-18.1 21.6-32.4 1-18-7.2-31.4-23.5-38.5-5.5-2.4-19.4-3.4-25.7-1.9zm16.9 24.6c11.8 5.5 9.8 24.1-2.8 27.2-5.8 1.5-10.7.1-14.6-4.3-10.9-12.4 2.5-30 17.4-22.9zM9 194.7c0 .5 6.9 17.1 15.4 37.1l15.4 36.3-5.4 12.9c-3 7.1-5.4 13.2-5.4 13.5 0 .3 6.2.4 13.7.3l13.7-.3 20.8-50C88.6 217 98 194.4 98 194.2c0-.1-6.2-.2-13.7-.2H70.5l-7.9 20.3c-4.3 11.1-8.2 20.6-8.6 21-.4.5-4.5-8.6-9-20.2L36.7 194H22.8c-7.6 0-13.8.3-13.8.7zM437.1 235c-7.9 1.9-13.1 8.6-13.1 16.9 0 6.6 2.3 11.1 7.2 14.1 11.7 7.1 26.8-1 26.8-14.4 0-11-10.2-19.2-20.9-16.6zM222 275.3c-8.3 4.2-4.2 16.8 5 15.3 4.3-.7 7-3.8 7-8 0-5.8-6.9-10-12-7.3zm-25.6 1.7c-4.6 2.3-7.9 7.6-8.9 14.2-.5 3.2-1 3.8-3 3.8-2.4 0-2.5.3-2.5 6s.1 6 2.5 6h2.4l.3 14.7.3 14.8 7.3.3 7.2.3V307h11v-12h-5.6c-5.3 0-5.5-.1-4.8-2.3 1.1-3.7 2.5-4.7 6.6-4.7h3.9l-.3-6.3-.3-6.2-6-.3c-4.5-.2-7.1.3-10.1 1.8zm62.4 19.4c-3.6 2.4-3.8 2.4-3.8.6 0-1.8-.7-2-7.5-2H240v42h15v-12.6c0-6.9.5-13.4 1-14.5.8-1.3 2.1-1.9 4.6-1.9 4.7 0 5.4 2.2 5.4 17.1V337h15v-14.8c0-8.1-.5-16.3-1-18.3-2.5-8.9-13.5-12.8-21.2-7.5zm39.2-1.3c-10.2 4.2-15.2 18.3-10.7 30.1 4.3 11.2 17.9 16.1 26.9 9.6l2.8-1.9v2c0 1.9.6 2.1 7.5 2.1h7.5v-42h-7.5c-6.9 0-7.5.2-7.5 2 0 2 0 2-3-.1-3.4-2.5-12-3.5-16-1.8zm14.9 13.4c7.8 4 4.7 15.5-4.1 15.5-9.1 0-11.9-11.6-3.8-15.7 3.2-1.6 4.5-1.6 7.9.2zm44.7-12c-3.4 2.3-3.6 2.3-3.6.5 0-1.8-.7-2-7.5-2H339v42.1l7.3-.3 7.2-.3.5-13.2c.3-7.8 1-13.7 1.6-14.3.6-.7 2.4-1 4-.8 4.4.5 5.4 3.6 5.4 17V337h13.8l.7-10.6c1.3-19.2-.6-27.2-7.5-30.6-4.9-2.5-10-2.3-14.4.7zm40.4-1.2c-7.4 2.4-14 12-14 20.3 0 4.6 2 10.6 4.7 14.2 4.7 6.2 14.9 9.5 23.1 7.3l4.2-1.2v-7c0-6.6-.1-6.9-1.9-5.9-1.1.5-3.7 1-5.9 1-6.5 0-10.6-6.3-7.8-11.9 2-3.8 7.4-5.7 11.8-4.2 1.7.6 3.3 1.1 3.4 1.1.2 0 .4-2.9.4-6.5 0-6.1-.2-6.6-2.6-7.5-3.3-1.3-10.9-1.1-15.4.3zm33.1 1.3c-10.8 5.4-14.8 18.9-9.1 30.4 4.5 8.9 15.8 12.9 27.2 9.6 5.1-1.5 11.8-6.2 11.8-8.3 0-.4-2.7-1.9-6-3.1-5.5-2.2-6.1-2.2-8.2-.8-3.3 2.3-8.1 2-10.6-.7-1.2-1.3-2.2-2.6-2.2-3 0-.4 6.5-.7 14.5-.7H463v-3.8c0-17.2-16.4-27.3-31.9-19.6zm14.7 10c4.3 3 2.8 4.4-4.8 4.4-3.8 0-7-.4-7-.9 0-1.6 5.1-5.1 7.4-5.1 1.2 0 3.2.7 4.4 1.6zm-227.6 9.1l.3 20.8 7.3.3 7.2.3V295h-15l.2 20.7z"
  }));
}

var _icons;
var icons = (_icons = {}, _defineProperty(_icons, 'business-insider', BusinessInsider), _defineProperty(_icons, 'browser-home', BrowserHome), _defineProperty(_icons, 'crescent-lenders', Logo), _defineProperty(_icons, "email", Email), _defineProperty(_icons, "loader", Loader), _defineProperty(_icons, 'market-watch', MarketWatch), _defineProperty(_icons, "money", Money), _defineProperty(_icons, "mortgage", Mortgage), _defineProperty(_icons, "mortgage2", Mortgage2), _defineProperty(_icons, "handshake", Handshake), _defineProperty(_icons, "percentage", Percentage), _defineProperty(_icons, "rocket", Rocket), _defineProperty(_icons, "sms", Sms), _defineProperty(_icons, 'yahoo-finance', YahooFinance), _icons);
function Icon(_ref) {
  var name = _ref.name,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? '100%' : _ref$size,
      _ref$rotate = _ref.rotate,
      rotate = _ref$rotate === void 0 ? 0 : _ref$rotate,
      rest = _objectWithoutProperties(_ref, ["name", "size", "rotate"]);

  if (typeof window === 'undefined') {
    return null;
  }

  var Component = icons[name];

  if (name === 'chevron-right') {
    return /*#__PURE__*/React__default.createElement(ChevronRightUI, _objectSpread2({}, rest), /*#__PURE__*/React__default.createElement(Chevron, null));
  } else if (name === 'chevron-left') {
    return /*#__PURE__*/React__default.createElement(ChevronLeftUI, _objectSpread2({}, rest), /*#__PURE__*/React__default.createElement(Chevron, null));
  } else if (name === 'chevron-top') {
    return /*#__PURE__*/React__default.createElement(ChevronTopUI, _objectSpread2({}, rest), /*#__PURE__*/React__default.createElement(Chevron, null));
  }

  if (Component) {
    return /*#__PURE__*/React__default.createElement(ContainerUI$6, {
      size: size,
      rotate: rotate
    }, /*#__PURE__*/React__default.createElement(Component, _objectSpread2({}, rest)));
  }

  return null;
}

function Mobile(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React__default.createElement(Section, {
    background: "dark"
  }, /*#__PURE__*/React__default.createElement(ContainerUI$5, null, children));
}

Mobile.Link = function (_ref2) {
  var children = _ref2.children,
      mailto = _ref2.mailto,
      tel = _ref2.tel,
      rest = _objectWithoutProperties(_ref2, ["children", "mailto", "tel"]);

  if (tel) {
    return /*#__PURE__*/React__default.createElement(LinkUI$1, _extends({}, _objectSpread2({}, rest), {
      onClick: clickLink.bind(null, tel)
    }), children);
  } else if (mailto) {
    return /*#__PURE__*/React__default.createElement(LinkUI$1, _extends({}, _objectSpread2({}, rest), {
      onClick: clickEmail.bind(null, mailto)
    }), children);
  }

  return /*#__PURE__*/React__default.createElement(LinkUI$1, _objectSpread2({}, rest), children);
};

var Col = /*#__PURE__*/function (_React$Component) {
  _inherits(Col, _React$Component);

  var _super = _createSuper(Col);

  function Col() {
    _classCallCheck(this, Col);

    return _super.apply(this, arguments);
  }

  _createClass(Col, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          mobileWidth = _this$props.mobileWidth,
          width = _this$props.width;
      return /*#__PURE__*/React__default.createElement(Grid.Col, {
        width: mobileWidth || width
      }, children);
    }
  }]);

  return Col;
}(React__default.Component);

Mobile.Address = function (_ref3) {
  var children = _ref3.children;
  return /*#__PURE__*/React__default.createElement(AddressUI$1, null, children);
};

var Menu = /*#__PURE__*/function (_React$Component2) {
  _inherits(Menu, _React$Component2);

  var _super2 = _createSuper(Menu);

  function Menu() {
    var _this;

    _classCallCheck(this, Menu);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super2.call.apply(_super2, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isOpen: false
    });

    _defineProperty(_assertThisInitialized(_this), "toggleOpen", function () {
      _this.setState({
        isOpen: !_this.state.isOpen
      });
    });

    return _this;
  }

  _createClass(Menu, [{
    key: "getSubMenu",
    value: function getSubMenu() {
      var _this2 = this;

      var children = this.props.children;
      var isOpen = this.state.isOpen;

      if (!isOpen) {
        return;
      }

      var content = React__default.Children.map(children, function (child) {
        return React__default.cloneElement(child, _objectSpread2(_objectSpread2({}, child.props), {}, {
          onClick: function onClick(event) {
            event.preventDefault();
            event.stopPropagation();

            _this2.setState({
              isOpen: false
            });
          }
        }));
      });
      return /*#__PURE__*/React__default.createElement(SubMenuUI, null, content);
    }
  }, {
    key: "render",
    value: function render() {
      var title = this.props.title;
      var isOpen = this.state.isOpen;
      return /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement(LinkTitleUI, {
        onClick: this.toggleOpen
      }, title, !isOpen ? /*#__PURE__*/React__default.createElement(Icon, {
        name: "chevron-right"
      }) : /*#__PURE__*/React__default.createElement(Icon, {
        name: "chevron-top"
      })), this.getSubMenu());
    }
  }]);

  return Menu;
}(React__default.Component);

Mobile.Col = Col;
Mobile.Menu = Menu;

function Footer$1(props) {
  return /*#__PURE__*/React__default.createElement(ReactBreakpoints.Media, null, function (_ref) {
    var breakpoints = _ref.breakpoints,
        currentBreakpoint = _ref.currentBreakpoint;

    if (breakpoints[currentBreakpoint] > breakpoints['tablet']) {
      return /*#__PURE__*/React__default.createElement(Footer, _objectSpread2({}, props));
    } else {
      return /*#__PURE__*/React__default.createElement(Mobile, _objectSpread2({}, props));
    }
  });
}

Footer$1.Grid = Footer.Grid;

Footer$1.Address = function (props) {
  return /*#__PURE__*/React__default.createElement(ReactBreakpoints.Media, null, function (_ref2) {
    var breakpoints = _ref2.breakpoints,
        currentBreakpoint = _ref2.currentBreakpoint;

    if (breakpoints[currentBreakpoint] > breakpoints['tablet']) {
      return /*#__PURE__*/React__default.createElement(Footer.Address, _objectSpread2({}, props));
    } else {
      return /*#__PURE__*/React__default.createElement(Mobile.Address, _objectSpread2({}, props));
    }
  });
};

Footer$1.Col = function (props) {
  return /*#__PURE__*/React__default.createElement(ReactBreakpoints.Media, null, function (_ref3) {
    var breakpoints = _ref3.breakpoints,
        currentBreakpoint = _ref3.currentBreakpoint;

    if (breakpoints[currentBreakpoint] > breakpoints['tablet']) {
      return /*#__PURE__*/React__default.createElement(Footer.Col, _objectSpread2({}, props));
    } else {
      return /*#__PURE__*/React__default.createElement(Mobile.Col, _objectSpread2({}, props));
    }
  });
};

Footer$1.Link = function (props) {
  return /*#__PURE__*/React__default.createElement(ReactBreakpoints.Media, null, function (_ref4) {
    var breakpoints = _ref4.breakpoints,
        currentBreakpoint = _ref4.currentBreakpoint;

    if (breakpoints[currentBreakpoint] > breakpoints['tablet']) {
      return /*#__PURE__*/React__default.createElement(Footer.Link, _objectSpread2({}, props));
    } else {
      return /*#__PURE__*/React__default.createElement(Mobile.Link, _objectSpread2({}, props));
    }
  });
};

Footer$1.Menu = function (props) {
  return /*#__PURE__*/React__default.createElement(ReactBreakpoints.Media, null, function (_ref5) {
    var breakpoints = _ref5.breakpoints,
        currentBreakpoint = _ref5.currentBreakpoint;

    if (breakpoints[currentBreakpoint] > breakpoints['tablet']) {
      return props.children;
    } else {
      return /*#__PURE__*/React__default.createElement(Mobile.Menu, _objectSpread2({}, props));
    }
  });
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
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this2 = this;

      if (typeof window !== 'undefined' && 'fonts' in document) {
        var font1 = new FontFace('Roboto', "url(/fonts/roboto-v20-latin-700.woff2) format('woff2'), url(/fonts/roboto-v20-latin-700.woff) format('woff')", {
          fontWeight: 700
        });
        var font2 = new FontFace('Roboto', "url(/fonts/roboto-v20-latin-regular.woff2) format('woff2'), url(/fonts/roboto-v20-latin-regular.woff) format('woff')", {
          fontWeight: 400
        });
        document.fonts.ready.then(function () {
          // Any operation that needs to be done only after all the fonts
          // have finished loading can go here.
          _this2.setState({
            isReady: true
          });
        });
        Promise.all([font1.load(), font2.load()]).then(function (loadedFonts) {
          // Render them at the same time
          loadedFonts.forEach(function (font) {
            document.fonts.add(font);
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

function _templateObject$h() {
  var data = _taggedTemplateLiteral(["\n  border-top: 1px solid ", ";\n"]);

  _templateObject$h = function _templateObject() {
    return data;
  };

  return data;
}
var HRUI = styled__default('hr')(_templateObject$h(), theme.colors.dark4);

function Line () {
  return /*#__PURE__*/React__default.createElement(HRUI, null);
}

function hexToRgb(hex) {
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? "".concat(parseInt(result[1], 16), ",").concat(parseInt(result[2], 16), ",").concat(parseInt(result[3], 16)) : null;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  position: relative;\n\n  ", " > a, ", " ", " {\n    animation: ", ";\n    color: ", ";\n  }\n\n  ul li ", " {\n    font-weight: normal;\n    text-transform: none;\n    height: auto;\n    margin: 0;\n    padding: 0;\n\n    a {\n      animation: 'none';\n      color: #fff;\n      margin: 0;\n    }\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6$2() {
  var data = _taggedTemplateLiteral(["\n  cursor: pointer;\n  color: #fff;\n  padding: ", " ", ";\n  background-color: ", ";\n"]);

  _templateObject6$2 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5$3() {
  var data = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: ", ";\n  max-width: 230px;\n  padding: ", ";\n  padding-left: 0;\n\n  img {\n    max-height: 100%;\n  }\n"]);

  _templateObject5$3 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$5() {
  var data = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  cursor: pointer;\n  display: block;\n  height: ", ";\n  position: relative;\n  float: left;\n\n  ul {\n    background-color: rgba(", ", 1);\n    box-sizing: border-box;\n    display: none;\n    list-style: none;\n    margin: 0;\n    width: 250px;\n    padding-left: 0;\n    position: relative;\n    z-index: 1;\n    cursor: pointer;\n    position: absolute;\n    margin: 0;\n    left: 50%;\n    transform: translatex(-50%);\n    top: 85px;\n\n    li {\n      box-sizing: border-box;\n      cursor: pointer;\n      margin-bottom: 0;\n      margin-left: 0;\n      a {\n        color: #fff;\n        :hover {\n          background-color: ", ";\n          text-decoration: none;\n        }\n        box-sizing: border-box;\n        display: block;\n        font-family: ", ";\n        margin-left: 0;\n        min-width: 100%;\n        padding: ", ";\n      }\n    }\n\n    /* arrow */\n    :before {\n      content: '';\n      position: absolute;\n      left: 50%;\n      transform: translatex(-50%);\n      top: -13px;\n      width: 0;\n      height: 0;\n      border-style: solid;\n      border-width: 0 13px 13px 13px;\n      border-color: transparent transparent\n        rgba(", ", 1) transparent;\n      z-index: 9999;\n    }\n  }\n\n  :hover {\n    ul {\n      display: block;\n    }\n  }\n"]);

  _templateObject4$5 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$7() {
  var data = _taggedTemplateLiteral(["\n  align-items: center;\n  background-color: transparent;\n  box-sizing: border-box;\n  display: flex;\n  height: ", ";\n  flex-direction: row;\n  justify-content: space-between;\n  width: 100%;\n  z-index: 1;\n  padding-right: ", ";\n  padding-left: ", ";\n"]);

  _templateObject3$7 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$a() {
  var data = _taggedTemplateLiteral(["\n  background-color: transparent;\n  box-sizing: border-box;\n  display: block;\n  height: ", ";\n  min-height: ", ";\n  width: 100%;\n  top: 0;\n  position: absolute;\n  z-index: 1;\n  background-color: ", ";\n\n  border-bottom: ", ";\n"]);

  _templateObject2$a = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$i() {
  var data = _taggedTemplateLiteral(["\n  align-items: center;\n  box-sizing: border-box;\n  display: flex;\n  font-family: ", ";\n  font-weight: 400;\n  justify-content: center;\n  height: ", ";\n  a:visited,\n  a:link {\n    text-decoration: none;\n  }\n  padding: 0 ", ";\n  a:active,\n  a:hover {\n    cursor: pointer;\n    text-decoration: underline;\n  }\n  text-transform: uppercase;\n"]);

  _templateObject$i = function _templateObject() {
    return data;
  };

  return data;
}

var pulseColor$1 = function pulseColor(_style) {
  return styled.keyframes(["to{color:", ";}from{color:", ";}"], _style === 'light' ? '#fff ' : '#000', _style === 'light' ? '#000' : '#fff');
};

var LinkUI$2 = styled__default('div')(_templateObject$i(), theme.typography.fonts.font1, theme.layout.desktop.headerHeight, theme.unit(0.25));
var ContainerUI$7 = styled__default('header')(_templateObject2$a(), theme.layout.desktop.headerHeight, theme.layout.desktop.headerHeight, function (_ref) {
  var isTransparent = _ref.isTransparent;
  return isTransparent ? 'transparent' : theme.colors.light3;
}, function (_ref2) {
  var isTransparent = _ref2.isTransparent;
  return isTransparent ? '1px solid transparent' : '1px solid #d3d3d3';
});
var ContainerInnerUI = styled__default('div')(_templateObject3$7(), theme.layout.desktop.headerHeight, theme.unit(1.5), theme.unit(1.5));
var DropdownUI = styled__default('div')(_templateObject4$5(), theme.layout.desktop.headerHeight, hexToRgb(theme.colors.dark3), theme.colors.dark5, theme.typography.fonts.font1, theme.unit(0.25), hexToRgb(theme.colors.dark3));
var BrandUI = styled__default('div')(_templateObject5$3(), theme.layout.desktop.headerHeight, theme.unit(0.5));
var HighlightUI = styled__default('div')(_templateObject6$2(), theme.unit(0.075), theme.unit(0.5), theme.colors.dark2);
var MenuUI = styled__default('div')(_templateObject7(), LinkUI$2, DropdownUI, LinkUI$2, function (_ref3) {
  var isAnimated = _ref3.isAnimated,
      headerStyle = _ref3.headerStyle;
  return isAnimated ? styled.css(["", " ", " ease-in-out 1"], pulseColor$1(headerStyle), theme.animation.speed["default"]) : 'none';
}, function (_ref4) {
  var headerStyle = _ref4.headerStyle;
  return headerStyle === 'light' ? '#fff' : '#000';
}, LinkUI$2);

var Container = /*#__PURE__*/function (_React$Component) {
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
      isAnimated: true
    });

    return _this;
  }

  _createClass(Container, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(nextProps) {
      if (nextProps.headerStyle !== this.props.headerStyle || nextProps.isTransparent !== this.props.isTransparent) {
        this.setState({
          isAnimated: true
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          isTransparent = _this$props.isTransparent,
          headerStyle = _this$props.headerStyle;
      var isAnimated = this.state.isAnimated;
      return /*#__PURE__*/React__default.createElement(ContainerUI$7, {
        headerStyle: headerStyle,
        isTransparent: isTransparent
      }, /*#__PURE__*/React__default.createElement(ContainerInnerUI, null, React__default.Children.map(children, function (child) {
        return React__default.cloneElement(child, _objectSpread2(_objectSpread2({}, child.props), {}, {
          isAnimated: isAnimated,
          headerStyle: headerStyle
        }));
      })));
    }
  }]);

  return Container;
}(React__default.Component);

var Brand = function Brand(_ref) {
  var children = _ref.children,
      isAnimated = _ref.isAnimated,
      headerStyle = _ref.headerStyle;
  return /*#__PURE__*/React__default.createElement(BrandUI, null, React__default.Children.map(children, function (child) {
    return React__default.cloneElement(child, _objectSpread2(_objectSpread2({}, child.props), {}, {
      isAnimated: isAnimated,
      headerStyle: headerStyle
    }));
  }));
};

function SubMenu(_ref2) {
  var children = _ref2.children,
      text = _ref2.text;
  return /*#__PURE__*/React__default.createElement(DropdownUI, null, /*#__PURE__*/React__default.createElement(LinkUI$2, null, text), /*#__PURE__*/React__default.createElement("ul", null, React__default.Children.map(children, function (child) {
    return /*#__PURE__*/React__default.createElement("li", null, React__default.cloneElement(child, {}));
  })));
}

function Link(_ref3) {
  var children = _ref3.children,
      asHighlight = _ref3.asHighlight,
      tel = _ref3.tel;

  if (asHighlight) {
    return /*#__PURE__*/React__default.createElement(LinkUI$2, {
      onClick: clickLink.bind(null, tel)
    }, /*#__PURE__*/React__default.createElement(HighlightUI, null, children));
  }

  return /*#__PURE__*/React__default.createElement(LinkUI$2, null, children);
}

function Menu$1(_ref4) {
  var children = _ref4.children,
      isAnimated = _ref4.isAnimated,
      headerStyle = _ref4.headerStyle;
  return /*#__PURE__*/React__default.createElement(MenuUI, {
    isAnimated: isAnimated,
    headerStyle: headerStyle
  }, children);
}

var DesktopHeader = {
  Brand: Brand,
  Container: Container,
  SubMenu: SubMenu,
  Link: Link,
  Menu: Menu$1
};

function _templateObject6$3() {
  var data = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  background-color: ", ";\n  display: block;\n  left: ", ";\n  min-height: 100vh;\n  overflow: hidden;\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  min-height: 100vh;\n  overflow: auto;\n  animation: ", ";\n\n  top: ", ";\n  z-index: 1;\n  background-color: #fff;\n"]);

  _templateObject6$3 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5$4() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  box-sizing: border-box;\n  font-family: ", ";\n  font-size: ", ";\n  margin: 0;\n  padding: ", ";\n  position: relative;\n  padding-left: ", ";\n  text-align: left;\n  width: auto;\n  vertical-align: middle;\n  :hover {\n    background-color: ", ";\n  }\n  a:active,\n  a:visited,\n  a:hover,\n  a:link {\n    color: ", ";\n    display: inline-block;\n    min-width: 100%;\n    text-decoration: none;\n  }\n  border-bottom: ", ";\n  background-color: ", ";\n"]);

  _templateObject5$4 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$6() {
  var data = _taggedTemplateLiteral(["\n  margin: 0;\n  padding: ", ";\n  margin-top: ", ";\n"]);

  _templateObject4$6 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$8() {
  var data = _taggedTemplateLiteral(["\n  align-items: center;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: row;\n  height: ", ";\n  justify-content: space-between;\n  padding: ", ";\n  width: 100%;\n  z-index: 1;\n"]);

  _templateObject3$8 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$b() {
  var data = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  position: fixed;\n  top: 0;\n  z-index: 1;\n  display: block;\n  height: ", ";\n  min-width: 100vw;\n\n  background-color: ", ";\n\n  border-bottom: ", ";\n\n  animation: ", ";\n"]);

  _templateObject2$b = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$j() {
  var data = _taggedTemplateLiteral(["\n  max-width: 170px;\n"]);

  _templateObject$j = function _templateObject() {
    return data;
  };

  return data;
}

var pulseColor$2 = function pulseColor(isTransparent) {
  return styled.keyframes(["to{background-color:", ";}from{background-color:", ";}"], isTransparent === false ? theme.colors.light3 : 'transparent', isTransparent === false ? 'transparent' : theme.colors.light3);
};

var slideIn = function slideIn(isParentMenuOpen) {
  return styled.keyframes(["to{left:", "}from{left:", "}"], isParentMenuOpen ? '0%' : '-100%', isParentMenuOpen ? '-100%' : '0%');
};

var BrandContainerUI = styled__default('div')(_templateObject$j());
var ContainerUI$8 = styled__default('div')(_templateObject2$b(), theme.layout.mobile.headerHeight, function (_ref) {
  var isTransparent = _ref.isTransparent;
  return isTransparent ? 'transparent' : theme.colors.light3;
}, function (_ref2) {
  var isTransparent = _ref2.isTransparent;
  return isTransparent ? '1px solid transparent' : '1px solid #d3d3d3';
}, function (_ref3) {
  var isAnimated = _ref3.isAnimated,
      isTransparent = _ref3.isTransparent;
  return isAnimated ? styled.css(["", " ", " ease-in-out 1"], pulseColor$2(isTransparent), theme.animation.speed["default"]) : 'none';
});
var ContainerInnerUI$1 = styled__default('div')(_templateObject3$8(), theme.layout.mobile.headerHeight, "0 ".concat(theme.unit(0.75), " 0 ").concat(theme.unit(0.25)));
var HighlightUI$1 = styled__default('div')(_templateObject4$6(), theme.unit(0.25), theme.unit(0.5));
var LinkUI$3 = styled__default('div')(_templateObject5$4(), theme.colors.dark3, theme.typography.fonts.font1, theme.unit(0.75), theme.unit(0.25), theme.unit(1.5), theme.colors.light1, theme.colors.dark3, theme.border, function (_ref4) {
  var isOpen = _ref4.isOpen;
  return isOpen && "".concat(theme.colors.light1);
});
var MenuUI$1 = styled__default('nav')(_templateObject6$3(), theme.colors.light3, function (_ref5) {
  var isParentMenuOpen = _ref5.isParentMenuOpen;
  return isParentMenuOpen ? '0' : '-100%';
}, function (_ref6) {
  var isAnimated = _ref6.isAnimated,
      isParentMenuOpen = _ref6.isParentMenuOpen;
  return isAnimated ? styled.css(["", " ", " ease-in-out 1"], slideIn(isParentMenuOpen), theme.animation.speed.quick) : 'none';
}, function (_ref7) {
  var isSubMenu = _ref7.isSubMenu;
  return isSubMenu ? '0' : theme.layout.mobile.headerHeight;
});

function _templateObject5$5() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n  height: ", ";\n  margin: (", ") auto ", " auto;\n  margin-top: ", ";\n  margin-right: ", ";\n  position: relative;\n  width: ", ";\n  z-index: 9999;\n  cursor: pointer;\n"]);

  _templateObject5$5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$7() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  padding: ", ";\n  right: 0;\n  top: 0;\n  cursor: pointer;\n"]);

  _templateObject4$7 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$9() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n  top: 100%;\n  transform: ", ";\n  animation: ", ";\n"]);

  _templateObject3$9 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$c() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n  top: 50%;\n  opacity: ", ";\n  animation: ", ";\n"]);

  _templateObject2$c = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$k() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n  top: 0;\n  transform: ", ";\n  animation: ", ";\n"]);

  _templateObject$k = function _templateObject() {
    return data;
  };

  return data;
}
var heightLine = 5;
var heightIcon = 22.5;
var translateY = heightIcon / 2;
var translateY1 = makePixelValue(translateY);

var pulseColor$3 = function pulseColor(_ref) {
  var headerStyle = _ref.headerStyle,
      isAnimated = _ref.isAnimated;

  var _keyframes = styled.keyframes(["to{background:", ";}from{background:", ";}"], headerStyle === 'light' ? theme.colors.white : theme.colors.black, headerStyle === 'light' ? theme.colors.black : theme.colors.white);

  return isAnimated ? styled.css(["", " ", " ease-in-out 1"], _keyframes, theme.animation.speed["default"]) : 'none';
};

function getDefaultStyles(_ref2) {
  var isAnimated = _ref2.isAnimated,
      headerStyle = _ref2.headerStyle,
      isOpen = _ref2.isOpen;
  return "\n  background: ".concat(headerStyle === 'light' ? theme.colors.white : theme.colors.black, ";\n\n  border-radius: (").concat(makePixelValue(heightLine / 2), ");\n  display: block;\n  height: ").concat(makePixelValue(heightLine), ";\n  left: 0;\n  position: absolute;\n  transition: transform ").concat(theme.animation.speed["default"], " ease-in-out;\n  width: 100%;\n");
}

var Line1UI = styled__default('span')(_templateObject$k(), getDefaultStyles, function (props) {
  return props.isOpen ? "translateY(".concat(translateY1, ") rotate(45deg) translateX(0)") : 'rotate(0deg)';
}, pulseColor$3);
var Line2UI = styled__default('span')(_templateObject2$c(), getDefaultStyles, function (props) {
  return props.isOpen ? "0" : '1';
}, pulseColor$3);
var Line3UI = styled__default('span')(_templateObject3$9(), getDefaultStyles, function (props) {
  return props.isOpen ? "translateY(-".concat(translateY1, ") rotate(-45deg) translateX(0)") : 'rotate(0deg)';
}, pulseColor$3);
var ContainerUI$9 = styled__default('div')(_templateObject4$7(), theme.unit(0.5));
var ContainerInnerUI$2 = styled__default('div')(_templateObject5$5(), makePixelValue(heightIcon), makePixelValue(heightIcon * 2.5), heightIcon, theme.unit(0.375), theme.unit(0.375), theme.unit(1.25));

function TriggerIcon(_ref) {
  var isAnimated = _ref.isAnimated,
      isOpen = _ref.isOpen,
      onClick = _ref.onClick,
      headerStyle = _ref.headerStyle;
  return /*#__PURE__*/React__default.createElement(ContainerUI$9, {
    isOpen: isOpen,
    onClick: onClick
  }, /*#__PURE__*/React__default.createElement(ContainerInnerUI$2, null, /*#__PURE__*/React__default.createElement(Line1UI, {
    isAnimated: isAnimated,
    isOpen: isOpen,
    headerStyle: headerStyle
  }), /*#__PURE__*/React__default.createElement(Line2UI, {
    isAnimated: isAnimated,
    isOpen: isOpen,
    headerStyle: headerStyle
  }), /*#__PURE__*/React__default.createElement(Line3UI, {
    isAnimated: isAnimated,
    isOpen: isOpen,
    headerStyle: headerStyle
  })));
}

function SubMenu$1(_ref) {
  var children = _ref.children,
      closeParentMenu = _ref.closeParentMenu,
      isParentMenuOpen = _ref.isParentMenuOpen,
      text = _ref.text,
      subMenu = _ref.subMenu,
      toggleSubMenu = _ref.toggleSubMenu;
  var content = React__default.Children.map(children, function (child) {
    return React__default.cloneElement(child, _objectSpread2(_objectSpread2({}, child.props), {}, {
      closeParentMenu: closeParentMenu,
      isParentMenuOpen: isParentMenuOpen,
      subMenu: subMenu,
      toggleSubMenu: toggleSubMenu
    }));
  });
  return /*#__PURE__*/React__default.createElement("div", {
    style: {
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React__default.createElement(MenuUI$1, {
    isAnimated: true,
    isParentMenuOpen: subMenu === text,
    isSubMenu: true
  }, /*#__PURE__*/React__default.createElement(LinkUI$3, {
    onClick: toggleSubMenu.bind(null, '')
  }, /*#__PURE__*/React__default.createElement(Icon, {
    name: "chevron-left"
  }), "Back"), content), /*#__PURE__*/React__default.createElement(LinkUI$3, {
    onClick: toggleSubMenu.bind(null, text)
  }, text, /*#__PURE__*/React__default.createElement(Icon, {
    name: "chevron-right"
  })));
}

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

var lodash_throttle = throttle;

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
      isOpen: false,
      isScrollTopLimit: false,
      subMenu: ''
    });

    _defineProperty(_assertThisInitialized(_this), "onScroll", function () {
      if (typeof window !== 'undefined') {
        var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;

        if (scrollTop >= theme.layoutAsNumber.mobile.headerHeight) {
          _this.setState({
            isScrollTopLimit: true
          });
        } else {
          _this.setState({
            isScrollTopLimit: false
          });
        }
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

    _defineProperty(_assertThisInitialized(_this), "toggleSubMenu", function (name) {
      _this.setState({
        subMenu: name
      });
    });

    return _this;
  }

  _createClass(Container, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(nextProps, nextState) {
      if (nextProps.headerStyle !== this.props.headerStyle) {
        this.setState({
          isContainerAnimated: true
        });
      }

      if (nextState.isOpen !== this.state.isOpen) {
        this.setState({
          isMenuAnimated: true
        });
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (typeof window !== 'undefined') {
        window.addEventListener('scroll', lodash_throttle(function () {
          return _this2.onScroll();
        }, 300));
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this3 = this;

      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', function () {
          return _this3.onResize();
        });
        window.removeEventListener('scroll', function () {
          return _this3.onScroll();
        });
      }
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      if (nextState.isOpen === this.state.isOpen && nextState.subMenu === this.state.subMenu && nextState.isScrollTopLimit === this.state.isScrollTopLimit && nextProps.path === this.props.path) {
        return false;
      }

      return true;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.toggleMenu(false);
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$props = this.props,
          children = _this$props.children,
          isTransparent = _this$props.isTransparent,
          headerStyle = _this$props.headerStyle;
      var _this$state = this.state,
          isOpen = _this$state.isOpen,
          isContainerAnimated = _this$state.isContainerAnimated,
          isMenuAnimated = _this$state.isMenuAnimated,
          isScrollTopLimit = _this$state.isScrollTopLimit,
          subMenu = _this$state.subMenu;

      var _style = isScrollTopLimit || isOpen ? 'dark' : headerStyle;

      var _isTransparent = isScrollTopLimit || isOpen ? false : isTransparent;

      return /*#__PURE__*/React__default.createElement(ContainerUI$8, {
        isAnimated: isContainerAnimated,
        isTransparent: _isTransparent
      }, /*#__PURE__*/React__default.createElement(ContainerInnerUI$1, null, /*#__PURE__*/React__default.createElement(TriggerIcon, {
        isAnimated: isContainerAnimated,
        isOpen: isOpen,
        onClick: this.toggleMenu,
        isTransparent: _isTransparent,
        headerStyle: _style
      }), React__default.Children.map(children, function (child) {
        return React__default.cloneElement(child, _objectSpread2(_objectSpread2({}, child.props), {}, {
          closeParentMenu: _this4.toggleMenu,
          isAnimated: isMenuAnimated,
          isContainerAnimated: isContainerAnimated,
          isParentMenuOpen: isOpen,
          headerStyle: _style,
          toggleSubMenu: _this4.toggleSubMenu,
          subMenu: subMenu
        }));
      })));
    }
  }]);

  return Container;
}(React__default.Component);

var Brand$1 = function Brand(_ref) {
  var children = _ref.children,
      isContainerAnimated = _ref.isContainerAnimated,
      headerStyle = _ref.headerStyle;
  return /*#__PURE__*/React__default.createElement(BrandContainerUI, null, React__default.Children.map(children, function (child) {
    return React__default.cloneElement(child, _objectSpread2(_objectSpread2({}, child.props), {}, {
      isAnimated: isContainerAnimated,
      headerStyle: headerStyle
    }));
  }));
};

function clickLink$1(isParentMenuOpen, closeParentMenu, event) {
  isParentMenuOpen && closeParentMenu();
  event.nativeEvent.stopPropagation();
}

function Link$1(props) {
  var asHighlight = props.asHighlight,
      children = props.children,
      closeParentMenu = props.closeParentMenu,
      isParentMenuOpen = props.isParentMenuOpen,
      tel = props.tel;
  var beforeText = asHighlight ? 'Call Us -' : '';

  if (asHighlight) {
    return /*#__PURE__*/React__default.createElement(HighlightUI$1, null, /*#__PURE__*/React__default.createElement(Button, {
      onClick: clickLink.bind(null, tel)
    }, beforeText, children));
  }

  return /*#__PURE__*/React__default.createElement(LinkUI$3, {
    onClick: clickLink$1.bind(null, isParentMenuOpen, closeParentMenu)
  }, children);
}

function Menu$2(props) {
  var children = props.children,
      closeParentMenu = props.closeParentMenu,
      isAnimated = props.isAnimated,
      isParentMenuOpen = props.isParentMenuOpen,
      subMenu = props.subMenu,
      toggleSubMenu = props.toggleSubMenu;
  var content = React__default.Children.map(children, function (child) {
    return React__default.cloneElement(child, _objectSpread2(_objectSpread2({}, child.props), {}, {
      closeParentMenu: closeParentMenu,
      isParentMenuOpen: isParentMenuOpen,
      subMenu: subMenu,
      toggleSubMenu: toggleSubMenu
    }));
  });
  return /*#__PURE__*/React__default.createElement(MenuUI$1, {
    isAnimated: isAnimated,
    isParentMenuOpen: isParentMenuOpen
  }, content);
}

var MobileHeader = {
  Brand: Brand$1,
  Container: Container$1,
  SubMenu: SubMenu$1,
  Link: Link$1,
  Menu: Menu$2
};

function _templateObject$l() {
  var data = _taggedTemplateLiteral(["\n  margin: 0;\n  padding: 0;\n  border-top: ", ";\n  min-width: 100%;\n  display: block;\n"]);

  _templateObject$l = function _templateObject() {
    return data;
  };

  return data;
}
var DividerUI = styled__default('div')(_templateObject$l(), theme.border);

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

function Menu$3(props) {
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

function SubMenu$2(props) {
  return /*#__PURE__*/React__default.createElement(ReactBreakpoints.Media, null, function (_ref5) {
    var breakpoints = _ref5.breakpoints,
        currentBreakpoint = _ref5.currentBreakpoint;

    if (breakpoints[currentBreakpoint] > breakpoints['tablet']) {
      return /*#__PURE__*/React__default.createElement(DesktopHeader.SubMenu, _objectSpread2({}, props));
    } else {
      return /*#__PURE__*/React__default.createElement(MobileHeader.SubMenu, _objectSpread2({}, props));
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
  SubMenu: SubMenu$2,
  Link: Link$2,
  Menu: Menu$3,
  Contact: Contact
};

function _templateObject5$6() {
  var data = _taggedTemplateLiteral(["\n  top: 0;\n  min-width: 100%;\n  width: 100%;\n  height: 100%;\n  display: block;\n  position: absolute;\n  z-index: -1;\n"]);

  _templateObject5$6 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$8() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n  position: relative;\n\n  h1,\n  h2,\n  h3 {\n    color: #fff;\n    margin-bottom: 0;\n  }\n\n  p,\n  ul {\n    color: #fff;\n    font-size: ", ";\n\n    @media (max-width: ", ") {\n      font-size: ", ";\n    }\n  }\n\n  li {\n    margin: 0;\n  }\n"]);

  _templateObject4$8 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$a() {
  var data = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  background: transparent;\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  text-align: inherit;\n  max-width: 768px;\n  padding: 0;\n  margin-top: ", ";\n\n  margin-left: ", ";\n\n  @media (max-width: ", ") {\n    margin-top: 0;\n    margin-left: ", ";\n    margin-right: ", ";\n  }\n"]);

  _templateObject3$a = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$d() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  left: 0;\n  background: ", ";\n  position: absolute;\n  pointer-events: none;\n  z-index: 1;\n"]);

  _templateObject2$d = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$m() {
  var data = _taggedTemplateLiteral(["\n  align-items: ", ";\n  display: flex;\n  justify-content: ", ";\n  margin-top: ", ";\n\n  @media (max-width: ", ") {\n    margin-top: ", ";\n  }\n\n  min-height: ", ";\n  position: relative;\n  padding: 0;\n  text-align: ", ";\n  width: 100%;\n"]);

  _templateObject$m = function _templateObject() {
    return data;
  };

  return data;
}
var ContainerUI$a = styled__default('div')(_templateObject$m(), function (_ref) {
  var alignItems = _ref.alignItems;
  return alignItems;
}, function (_ref2) {
  var justifyContent = _ref2.justifyContent;
  return justifyContent;
}, function (_ref3) {
  var hasNavShift = _ref3.hasNavShift;
  return hasNavShift === true ? "-".concat(theme.layout.desktop.headerHeight) : 0;
}, theme.breakPointsAsPixel.mobile, function (_ref4) {
  var hasNavShift = _ref4.hasNavShift;
  return hasNavShift === true ? "-".concat(theme.layout.mobile.headerHeight) : 0;
}, function (_ref5) {
  var size = _ref5.size;
  return size === 'half' ? "50vh" : "100vh";
}, function (_ref6) {
  var textAlign = _ref6.textAlign;
  return textAlign;
});
var OverlayUI = styled__default('div')(_templateObject2$d(), function (_ref7) {
  var overlay = _ref7.overlay;
  return "rgba(0, 0, 0, ".concat(parseInt(overlay, 10) / 100, ")");
});
var ContentUI$2 = styled__default('div')(_templateObject3$a(), function (_ref8) {
  var hasVerticalOffset = _ref8.hasVerticalOffset;
  return hasVerticalOffset ? theme.layoutAsNumber.desktop.headerHeight / 3 + 'px' : 0;
}, function (_ref9) {
  var justifyContent = _ref9.justifyContent;
  return justifyContent === 'flex-start' ? "".concat(theme.unit(1.5)) : '0';
}, theme.breakPointsAsPixel.mobile, theme.unit(0.5), theme.unit(0.5));
var MainContentUI = styled__default('div')(_templateObject4$8(), theme.unit(0.75), theme.breakPointsAsPixel.mobile, theme.unit(0.65));
var ImageUI$1 = styled__default('div')(_templateObject5$6());

function Jumbotron (_ref) {
  var callToActionText = _ref.callToActionText,
      callToActionHref = _ref.callToActionHref,
      children = _ref.children,
      _ref$hasContentVertic = _ref.hasContentVerticalOffset,
      hasContentVerticalOffset = _ref$hasContentVertic === void 0 ? false : _ref$hasContentVertic,
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
      _ref$textAlign = _ref.textAlign,
      textAlign = _ref$textAlign === void 0 ? 'center' : _ref$textAlign,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'full' : _ref$size;
  return /*#__PURE__*/React__default.createElement(ContainerUI$a, {
    size: size,
    alignItems: alignItems,
    hasNavShift: hasNavShift,
    justifyContent: justifyContent,
    textAlign: textAlign
  }, /*#__PURE__*/React__default.createElement(ContentUI$2, {
    justifyContent: justifyContent,
    hasVerticalOffset: hasContentVerticalOffset
  }, /*#__PURE__*/React__default.createElement(MainContentUI, {
    maxWidth: "768"
  }, children), hasCta && /*#__PURE__*/React__default.createElement(Button, {
    justifyContent: "center",
    colorScheme: "red",
    to: callToActionHref,
    size: "lg",
    maxW: "250px"
  }, callToActionText)), /*#__PURE__*/React__default.createElement(ImageUI$1, null, /*#__PURE__*/React__default.createElement(OverlayUI, {
    overlay: overlay
  }), /*#__PURE__*/React__default.createElement(ResponsiveImage, {
    aspectRatio: null,
    data: image,
    loading: "eager",
    sizes: theme.imageDimensions.jumbotron[size],
    spaceAfter: "none"
  })));
}

function _templateObject2$e() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  width: 100%;\n"]);

  _templateObject2$e = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$n() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100vw;\n  height: 100vh;\n  text-align: center;\n"]);

  _templateObject$n = function _templateObject() {
    return data;
  };

  return data;
}

var ContainerUI$b = styled__default('div')(_templateObject$n());
var LoaderUI = styled__default('div')(_templateObject2$e());

function loadingScreen () {
  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      show = _useState2[0],
      setShow = _useState2[1];

  React.useEffect(function () {
    var timeout = setTimeout(function () {
      return setShow(true);
    }, 250);
    return function () {
      clearTimeout(timeout);
    };
  }, []);
  return show && /*#__PURE__*/React__default.createElement(ContainerUI$b, null, /*#__PURE__*/React__default.createElement(LoaderUI, null, "Loading...")) || null;
}

function _templateObject3$b() {
  var data = _taggedTemplateLiteral(["\n  padding: ", ";\n  position: absolute;\n  z-index: 99999;\n  width: 500px;\n  background: white;\n  border: 1px solid #ccc;\n  transition: 1.1s ease-out;\n  box-shadow: -2rem 2rem 2rem rgba(black, 0.2);\n  filter: blur(0);\n  transform: scale(1);\n  opacity: 1;\n  visibility: visible;\n"]);

  _templateObject3$b = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$f() {
  var data = _taggedTemplateLiteral(["\n  position: fixed;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(", ", 0.8);\n  z-index: 999;\n  padding: ", ";\n"]);

  _templateObject2$f = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$o() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n  margin: 0 auto;\n  width: 100%;\n  text-align: center;\n"]);

  _templateObject$o = function _templateObject() {
    return data;
  };

  return data;
}
var CloseButtonUI = styled__default('a')(_templateObject$o());
var ContainerUI$c = styled__default('div')(_templateObject2$f(), hexToRgb(theme.colors.dark1), theme.unit(0.5));
var ModalUI = styled__default('div')(_templateObject3$b(), theme.unit(0.5));

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

function ScrollToTop(_ref) {
  var children = _ref.children,
      location = _ref.location;

  if (typeof window !== 'undefined') {
    React__default.useEffect(function () {
      return window.scrollTo(0, 0);
    }, [location.pathname]);
    return children;
  } else {
    return children;
  }
}

function _templateObject$p() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  list-style: none;\n  margin-bottom: -1px;\n  padding: 0.5rem 0.75rem;\n\n  ", "\n"]);

  _templateObject$p = function _templateObject() {
    return data;
  };

  return data;
}

var TabUI = styled__default('li')(_templateObject$p(), function (_ref) {
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

function _templateObject3$c() {
  var data = _taggedTemplateLiteral(["\n  padding: 0.5rem 0.75rem;\n"]);

  _templateObject3$c = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$g() {
  var data = _taggedTemplateLiteral(["\n  border-bottom: 1px solid #ccc;\n  padding-left: 0;\n"]);

  _templateObject2$g = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$q() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject$q = function _templateObject() {
    return data;
  };

  return data;
}

var TabsUI = styled__default('div')(_templateObject$q());
var TabsListUI = styled__default('ul')(_templateObject2$g());
var TabsContentUI = styled__default('div')(_templateObject3$c());

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

function _templateObject$r() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  font-style: ", ";\n  font-weight: ", ";\n  font-size: ", ";\n"]);

  _templateObject$r = function _templateObject() {
    return data;
  };

  return data;
}

function getColor(_ref) {
  var color = _ref.color;
  return theme.colors[color];
}

var TextUI = styled__default('span')(_templateObject$r(), getColor, function (props) {
  return props.fontStyle;
}, function (_ref2) {
  var isBold = _ref2.isBold;
  return isBold ? '700' : '400';
}, function (props) {
  return theme.unit(props.size);
});

function Text (_ref) {
  var _ref$as = _ref.as,
      as = _ref$as === void 0 ? 'span' : _ref$as,
      children = _ref.children,
      color = _ref.color,
      isBold = _ref.isBold,
      _ref$fontStyle = _ref.fontStyle,
      fontStyle = _ref$fontStyle === void 0 ? 'normal' : _ref$fontStyle,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 0.6 : _ref$size;
  return /*#__PURE__*/React__default.createElement(TextUI, {
    as: as,
    color: color,
    fontStyle: fontStyle,
    isBold: isBold,
    size: size
  }, children);
}

function _templateObject$s() {
  var data = _taggedTemplateLiteral(["\nhtml, body {\n  height: 100%;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\n#root {\n  height: 100%;\n}\n\n\n/* css reset */\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\n\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\nhtml {\n  font-size: 100%;\n}\n\nbody {\n  color: ", ";\n  font-weight: 400;\n  display: flex;\n  flex-direction: column;\n  font-family: ", ";\n  font-size: 1.15rem;\n  line-height: 1.55;\n  margin: 0;\n  overflow: auto;\n  padding: 0;\n  .is-modal-open {\n    overflow: none;\n  }\n}\n\nimg {\n  max-width: 100%;\n  height: auto;\n}\n\niframe {\n  max-width: 100%;\n}\n\n\n/* link styles */\na:active {\n  color: ", ";\n  text-decoration: none;\n}\n\na:link {\n  text-decoration: none;\n  color: ", ";\n}\n\na:hover {\n  color: ", ";\n  text-decoration: underline;\n}\n\na:visited {\n  color: ", ";\n  text-decoration: none;\n}\n\n/* list and paragraph styles */\np, ul, ol, code {\n  padding: 0;\n  margin-bottom: ", ";\n}\n\nb {\n  font-weight: 700;\n}\n\nul {\n  list-style: disc;\n  margin-left: ", ";\n  margin-right: ", ";\n}\n\nol {\n  margin-left: ", ";\n  margin-right: ", ";\n}\n\nli {\n  margin-bottom: ", ";\n}\n\ncode {\n  box-sizing: border-box;\n  background-color:  ", ";\n  display: block;\n  padding: ", ";\n  color: ", ";\n  width: 100%;\n  font-family: 'Courier New', Courier, monospace;\n  white-space: normal;\n\n  font-size: ", ";\n\n\n  @media (max-width: ", ") {\n   font-size: ", ";\n  }\n\n  @media (max-width: ", ") {\n   font-size: ", ";\n  }\n}\n\n\n/* table styles */\n  table {\n    border-collapse: collapse;\n    border-left: ", ";\n    border-right: ", ";\n    margin: 0;\n    width: 100%;\n  margin-bottom: ", ";\n    tr {\n      border-bottom: ", ";\n      width: 100%;\n    }\n    tr:first-child {\n      border-top: ", ";\n    }\n    td:first-child {\n      font-weight: 700;\n    }\n\n    td, th {\n      background-color: #fff;\n      padding: ", " ", ";\n    }\n\n    th {\n      background-color: ", ";\n    }\n  }\n\n\n  @media (max-width: ", ") {\n    table.responsive-collapse {\n\n    table, thead, tbody, th, td, tr {\n\t\tdisplay: block;\n\t}\n\n  thead tr {\n\t\tposition: absolute;\n\t\ttop: -9999px;\n\t\tleft: -9999px;\n\t}\n    }\n\n  table.n-plus-2 {\n  td:nth-child(n+2) {\n    display: inline-block\n\t}\n  }\n  }\n\n\n.lead {\n  font-size: ", ";\n  line-height: 130%;\n\n  @media (max-width: ", ") {\n   font-size: ", ";\n  }\n\n  @media (max-width: ", ") {\n   font-size: ", ";\n  }\n}\n\nh1,h2,h3,h4,h5,h6 {\n  font-family: ", ";\n  font-weight: 700;\n  line-height: 120%;\n  padding: 0;\n  margin: 0;\n  margin-bottom: ", ";\n}\n\nh3 + h4, h2 + h4 {\n  margin-top: -", ";\n}\n\n\n\nh1 {\n   font-size: ", ";\n  @media (min-width: ", ") and (max-width: ", ") {\n    font-size: ", ";\n  }\n\n  @media (max-width: ", ") {\n    font-size: ", ";\n  }\n}\n\n  h2 {\n   font-size: ", ";\n\n  @media (min-width: ", ") and (max-width: ", ") {\n    font-size: ", ";\n  }\n\n  @media (max-width: ", ") {\n    font-size: ", ";\n  }\n  }\n\n  h3 {\n   font-size: ", ";\n\n  @media (min-width: ", ") and (max-width: ", ") {\n    font-size: ", ";\n  }\n\n  @media (max-width: ", ") {\n    font-size: ", ";\n  }\n  }\n\n  h4 {\n   font-size: ", ";\n\n  @media (min-width: ", ") and (max-width: ", ") {\n    font-size: ", ";\n  }\n\n  @media (max-width: ", ") {\n    font-size: ", ";\n  }\n  }\n\n  h5 {\n   font-size: ", ";\n\n  @media (min-width: ", ") and (max-width: ", ") {\n    font-size: ", ";\n  }\n\n  @media (max-width: ", ") {\n    font-size: ", ";\n  }\n  }\n\n  h6 {\n   font-size: ", ";\n\n  @media (min-width: ", ") and (max-width: ", ") {\n    font-size: ", ";\n  }\n\n  @media (max-width: ", ") {\n    font-size: ", ";\n  }\n  }\n\n.italic {\n  font-style: italic;\n}\n\n.centered {\n  margin: 0 auto;\n  text-align: center;\n}\n\n.space-after-small {\n  margin-bottom: ", ";\n}\n\na:active,\na:link,\na:hover,\na:visited {\n  text-decoration: none;\n}\n\n\n\n"]);

  _templateObject$s = function _templateObject() {
    return data;
  };

  return data;
}
var GlobalStyles = styled.createGlobalStyle(_templateObject$s(), theme.colors.dark4, theme.typography.fonts.font1, theme.colors.dark3, theme.colors.dark3, theme.colors.dark3, theme.colors.dark3, theme.unit(0.75), theme.unit(1), theme.unit(0.5), theme.unit(1), theme.unit(0.5), theme.unit(0.75), theme.colors.light1, theme.unit(0.5), theme.colors.dark1, theme.typography.sizes.desktop.sm, theme.breakPointsAsPixel.tablet, theme.typography.sizes.tablet.sm, theme.breakPointsAsPixel.mobile, theme.typography.sizes.mobile.xsm, theme.border, theme.border, theme.unit(1), theme.border, theme.border, theme.unit(0.25), theme.unit(0.5), theme.colors.light1, theme.breakPointsAsPixel.mobile, theme.typography.sizes.desktop.md, theme.breakPointsAsPixel.tablet, theme.typography.sizes.tablet.md, theme.breakPointsAsPixel.mobile, theme.typography.sizes.mobile.md, theme.typography.fonts.font1, theme.unit(0.75), theme.unit(0.75), theme.typography.sizes.desktop.xxlg, theme.breakPointsAsPixel.mobile, theme.breakPointsAsPixel.tablet, theme.typography.sizes.tablet.xxlg, theme.breakPointsAsPixel.mobile, theme.typography.sizes.mobile.xxlg, theme.typography.sizes.desktop.xlg, theme.breakPointsAsPixel.mobile, theme.breakPointsAsPixel.tablet, theme.typography.sizes.tablet.xlg, theme.breakPointsAsPixel.mobile, theme.typography.sizes.mobile.xlg, theme.typography.sizes.desktop.lg, theme.breakPointsAsPixel.mobile, theme.breakPointsAsPixel.tablet, theme.typography.sizes.tablet.lg, theme.breakPointsAsPixel.mobile, theme.typography.sizes.mobile.lg, theme.typography.sizes.desktop.md, theme.breakPointsAsPixel.mobile, theme.breakPointsAsPixel.tablet, theme.typography.sizes.tablet.md, theme.breakPointsAsPixel.mobile, theme.typography.sizes.mobile.md, theme.typography.sizes.desktop.sm, theme.breakPointsAsPixel.mobile, theme.breakPointsAsPixel.tablet, theme.typography.sizes.tablet.sm, theme.breakPointsAsPixel.mobile, theme.typography.sizes.mobile.sm, theme.typography.sizes.desktop.xsm, theme.breakPointsAsPixel.mobile, theme.breakPointsAsPixel.tablet, theme.typography.sizes.tablet.xsm, theme.breakPointsAsPixel.mobile, theme.typography.sizes.mobile.xsm, theme.unit(0.25));

function head () {
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(GlobalStyles, null));
}

var config = {
  initialColorMode: 'light',
  useSystemColorMode: false
};
var colors = {
  transparent: 'transparent',
  black: '#000',
  white: '#fff'
};
var shadows = {
  outline: "0 0 0 1px #000"
};
var theme$1 = react.extendTheme({
  config: config,
  colors: colors,
  shadows: shadows
});

var Context = React__default.createContext();
var PrototypableProvider = /*#__PURE__*/function (_React$Component) {
  _inherits(PrototypableProvider, _React$Component);

  var _super = _createSuper(PrototypableProvider);

  function PrototypableProvider() {
    _classCallCheck(this, PrototypableProvider);

    return _super.apply(this, arguments);
  }

  _createClass(PrototypableProvider, [{
    key: "render",
    value: function render() {
      var children = this.props.children;
      return /*#__PURE__*/React__default.createElement(Context.Provider, null, /*#__PURE__*/React__default.createElement(react.ChakraProvider, {
        resetCSS: false,
        theme: theme$1
      }, /*#__PURE__*/React__default.createElement(Body, null, children)));
    }
  }]);

  return PrototypableProvider;
}(React__default.Component);
var PrototypableConsumer = Context.Consumer;

function _templateObject$t() {
  var data = _taggedTemplateLiteral(["\n  a {\n    font-weight: bold;\n  }\n  ul {\n    list-style: none;\n    padding: 0;\n    margin: 0;\n  }\n"]);

  _templateObject$t = function _templateObject() {
    return data;
  };

  return data;
}

var ContainerUI$d = styled__default('div')(_templateObject$t());

function RelatedContent (_ref) {
  var items = _ref.items;
  return /*#__PURE__*/React__default.createElement(BlockQuote, null, /*#__PURE__*/React__default.createElement(ContainerUI$d, null, /*#__PURE__*/React__default.createElement("h3", null, "Related"), /*#__PURE__*/React__default.createElement("ul", null, items.map(function (_ref2, index) {
    var link = _ref2.link,
        text = _ref2.text,
        description = _ref2.description;
    return /*#__PURE__*/React__default.createElement("li", {
      key: "related-content-".concat(index)
    }, /*#__PURE__*/React__default.createElement(router.Link, {
      to: link
    }, text), /*#__PURE__*/React__default.createElement("br", null), description.length && description);
  }))));
}

function getLinkedContentById(linkedContent, id) {
  return linkedContent.filter(function (content) {
    return content.id === id;
  });
}

function getLink(link, paths) {
  return paths[link.id];
}

function linkResolver(paths, doc) {
  return getLink(doc, paths);
}

var components = {
  Article: Article,
  Line: Line,
  Grid: Grid,
  Icon: Icon,
  ResponsiveImage: ResponsiveImage,
  Text: Text
};
var wrapperComponent = {
  text: 'div',
  highlighted_box: BlockQuote
}; // takes prismic data, then parses the components to react components and adds a wrapper

function parsePrismicToReactComponents(text, paths) {
  if (text.type === 'preformatted') {
    return /*#__PURE__*/React__default.createElement(JsxParser, {
      components: components,
      jsx: text.text,
      key: shortUuid.generate()
    });
  } // if type isn't preformatted we just use global styles


  var parsePrismic = PrismicReactJs.RichText.render(text, linkResolver.bind(null, paths));
  return parsePrismic;
}

function renderFaq(slice, options) {
  var _slice$primary = slice.primary,
      intro = _slice$primary.intro,
      title1 = _slice$primary.title1;
  return /*#__PURE__*/React__default.createElement(Section, {
    background: "light",
    key: shortUuid.generate()
  }, /*#__PURE__*/React__default.createElement("h3", null, title1), intro && !!intro.length && !!intro[0].text.length && /*#__PURE__*/React__default.createElement(Article, null, /*#__PURE__*/React__default.createElement(Article.Content, null, parsePrismicToReactComponents(intro, options.paths))), slice.items.map(function (item) {
    return /*#__PURE__*/React__default.createElement(Faq, {
      key: shortUuid.generate(),
      title: item.question
    }, parsePrismicToReactComponents(item.answer, options.paths));
  }));
}

function getComponentsFromSlices(_ref) {
  var slices = _ref.slices,
      id = _ref.id,
      linkedContent = _ref.linkedContent,
      _ref$options = _ref.options,
      options = _ref$options === void 0 ? {} : _ref$options;
  return slices.map(function (slice, index) {
    var type = slice.slice_type;

    if (type === 'highlighted_box') {
      var parsedComponents = parsePrismicToReactComponents(slice.primary.text, options.paths);
      return React__default.createElement(wrapperComponent[slice.slice_type], {}, [parsedComponents]);
    } else if (type === 'text') {
      var _parsedComponents = parsePrismicToReactComponents(slice.primary.text, options.paths);

      return _parsedComponents;
    } else if (type === 'responsive_image') {
      return /*#__PURE__*/React__default.createElement(ResponsiveImage, {
        data: slice.primary.image1,
        sizes: ['768x506', '1024x674', '1366x900', '1600x1056']
      });
    } else if (type === 'jumobotron') {
      var _slice$primary2 = slice.primary,
          align_items = _slice$primary2.align_items,
          body2 = _slice$primary2.body2,
          call_to_action = _slice$primary2.call_to_action,
          justify_content = _slice$primary2.justify_content,
          overlay = _slice$primary2.overlay,
          text_align = _slice$primary2.text_align;

      var _parsedComponents2 = parsePrismicToReactComponents(body2, options.paths);

      return React__default.createElement(Jumbotron, {
        alignItems: align_items,
        callToActionHref: options.callToActionHref,
        callToActionText: call_to_action || options.callToActionText,
        hasNavShift: true,
        hasContentVerticalOffset: true,
        justifyContent: justify_content,
        key: shortUuid.generate(),
        image: slice.primary.image,
        overlay: overlay,
        textAlign: text_align
      }, _parsedComponents2);
    } else if (type === 'linked_component_section' || type === 'linked_section') {
      var data = getLinkedContentById(linkedContent, slice.primary.body2.id);

      if (data[0].data.body[0].slice_type === 'related_content') {
        var items = data[0].data.body[0].items.filter(function (item) {
          return item.link.id !== id;
        }).map(function (item) {
          return {
            link: getLink(item.link, options.paths),
            description: item.description,
            text: item.text
          };
        });
        return /*#__PURE__*/React__default.createElement(RelatedContent, {
          items: items
        });
      }

      var background = slice.primary.background;
      var _data$0$data = data[0].data,
          body = _data$0$data.body,
          inner_width = _data$0$data.inner_width;

      if (body[0].slice_type === 'faq') {
        return renderFaq(body[0], options);
      }

      var _parsedComponents3 = parsePrismicToReactComponents(body[0], options.paths);

      return /*#__PURE__*/React__default.createElement(Section, _extends({
        key: shortUuid.generate()
      }, {
        background: background,
        inner_width: inner_width
      }), _parsedComponents3);
    } else if (type === 'cards') {
      var _background = slice.primary.background;

      var _data = slice.items.map(function (card) {
        return getLinkedContentById(linkedContent, card.cards.id)[0];
      });

      if (_data[0] && _data[0].type === 'link') {
        return /*#__PURE__*/React__default.createElement(Section, {
          background: _background,
          key: shortUuid.generate()
        }, /*#__PURE__*/React__default.createElement("h3", {
          className: "centered space-after-small italic"
        }, slice.primary.title1), /*#__PURE__*/React__default.createElement(Cards, null, Object.entries(_data).map(function (_content) {
          return /*#__PURE__*/React__default.createElement(Card, {
            key: shortUuid.generate(),
            horizontalPadding: 0.5
          }, /*#__PURE__*/React__default.createElement(Card.Image, {
            withTitle: true,
            title: _content[1].data.title[0].text,
            to: getLink(_content[1].data.link, options.paths)
          }, /*#__PURE__*/React__default.createElement(ResponsiveImage, {
            data: _content[1].data.image,
            spaceAfter: "none",
            sizes: ['600x338', '960x540']
          })));
        })));
      } else {
        return /*#__PURE__*/React__default.createElement(CardsSection, {
          background: _background,
          cards: _data,
          key: shortUuid.generate()
        }, /*#__PURE__*/React__default.createElement("h3", null, slice.primary.title1));
      }
    } else if (type === 'faq') {
      return renderFaq(slice, options);
    } else if (type == 'article') {
      var _slice$primary3 = slice.primary,
          _background2 = _slice$primary3.background,
          _body = _slice$primary3.body2,
          sidebar = _slice$primary3.sidebar,
          sidebar_style = _slice$primary3.sidebar_style,
          sidebar_title = _slice$primary3.sidebar_title;
      return /*#__PURE__*/React__default.createElement(Section, {
        background: _background2,
        key: shortUuid.generate()
      }, /*#__PURE__*/React__default.createElement(Article, null, /*#__PURE__*/React__default.createElement(Article.Content, null, parsePrismicToReactComponents(_body, options.paths)), /*#__PURE__*/React__default.createElement(Article.Sidebar, null, sidebar_style === 'quote' && /*#__PURE__*/React__default.createElement(Article.Quote, null, parsePrismicToReactComponents(sidebar, options.paths)), sidebar_style === 'default' && !!sidebar[0] && !!sidebar[0].text.length && !!sidebar.length && /*#__PURE__*/React__default.createElement(Article.Box, null, parsePrismicToReactComponents(sidebar, options.paths)), sidebar_style === 'facts' && /*#__PURE__*/React__default.createElement(Article.Facts, {
        title: sidebar_title
      }, parsePrismicToReactComponents(sidebar, options.paths)))));
    } else if (type === 'article___images') {
      var _items = slice.items,
          _slice$primary4 = slice.primary,
          _background3 = _slice$primary4.background,
          _body2 = _slice$primary4.body,
          reverse_order = _slice$primary4.reverse_order;
      var _components = [/*#__PURE__*/React__default.createElement(Article.Content, {
        width: "50%"
      }, parsePrismicToReactComponents(_body2, options.paths)), /*#__PURE__*/React__default.createElement(Article.Sidebar, {
        width: "50%"
      }, _items.map(function (item) {
        return /*#__PURE__*/React__default.createElement(ResponsiveImage, {
          data: item.image,
          sizes: ['540x357', '1080x713'],
          aspectRatio: 66
        });
      }))];
      return /*#__PURE__*/React__default.createElement(ReactBreakpoints.Media, null, function (_ref2) {
        var breakpoints = _ref2.breakpoints,
            currentBreakpoint = _ref2.currentBreakpoint;

        if (breakpoints[currentBreakpoint] > breakpoints['mobile']) {
          return /*#__PURE__*/React__default.createElement(Section, {
            background: _background3,
            key: shortUuid.generate()
          }, /*#__PURE__*/React__default.createElement(Article, null, reverse_order ? _components.reverse() : _components));
        } else {
          return /*#__PURE__*/React__default.createElement(Section, {
            background: _background3,
            key: shortUuid.generate()
          }, /*#__PURE__*/React__default.createElement(Article, null, _components.reverse()));
        }
      });
    } else if (type === 'article_w_linked') {
      var _slice$primary5 = slice.primary,
          _body3 = _slice$primary5.body2,
          linked_sidebar_section = _slice$primary5.linked_sidebar_section;

      var _sidebar = getLinkedContentById(linkedContent, linked_sidebar_section.id);

      return /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement(Section, {
        inner_width: "medium"
      }, parsePrismicToReactComponents(_body3, options.paths)));
    } else if (type === 'half_banner_with_image') {
      var _slice$primary6 = slice.primary,
          _align_items = _slice$primary6.align_items,
          _body4 = _slice$primary6.body2,
          _call_to_action = _slice$primary6.call_to_action,
          _justify_content = _slice$primary6.justify_content,
          _overlay = _slice$primary6.overlay,
          _text_align = _slice$primary6.text_align;

      var _parsedComponents4 = parsePrismicToReactComponents(_body4, options.paths);

      return /*#__PURE__*/React__default.createElement(Jumbotron, {
        alignItems: _align_items,
        callToActionText: _call_to_action || options.callToActionText,
        callToActionHref: options.callToActionHref,
        hasNavShift: false,
        justifyContent: _justify_content,
        overlay: _overlay,
        key: shortUuid.generate(),
        image: slice.primary.image,
        size: "half",
        textAlign: _text_align
      }, _parsedComponents4);
    } else if (type === 'dynamic_content') {
      return slice;
    }
  });
}

function getImagePathsFromData (_ref) {
  var image = _ref.image,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'half' : _ref$size;

  var _urls = theme.imageDimensions.jumbotron[size].map(function (_size) {
    return image[_size].url;
  });

  return [image.url].concat(_toConsumableArray(_urls));
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
        return [].concat(_toConsumableArray(accumulator), [slice.primary.linked_sidebar_section.id]);
      }

      return accumulator;
    }, new Array());
    return api.getByIDs(ids, {
      fetchLinks: fetchLinks
    }).then(function (response) {
      var sections = response.results;
      return _objectSpread2(_objectSpread2({}, data), {}, {
        id: id,
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

function getPost(api, id, fetchLinks) {
  return api.query(Prismic$2.Predicates.at('document.id', id)).then(function (response) {
    var data = response.results[0].data;
    var contentWithLinks = data.body1.filter(function (slice) {
      return slice.slice_type === 'linked_section';
    });
    var ids = contentWithLinks.reduce(function (accumulator, slice) {
      if (slice.slice_type === 'linked_section') {
        return [].concat(_toConsumableArray(accumulator), [slice.primary.body2.id]);
      }

      return accumulator;
    }, new Array());
    return api.getByIDs(ids, {
      fetchLinks: fetchLinks
    }).then(function (response) {
      var sections = response.results;
      console.log('stuff', sections);
      return {
        data: data,
        id: id,
        linkedContent: sections
      };
    });
  });
}

function getPosts$1(apiUrl, apiToken, _ref) {
  var fetchLinks = _ref.fetchLinks;
  return Prismic$2.getApi(apiUrl, {
    accessToken: apiToken
  }).then(function (api) {
    return api.query(Prismic$2.Predicates.at('document.type', 'post')).then(function (response) {
      var promises = response.results.map(function (result) {
        return getPost(api, result.id, fetchLinks);
      });
      return Promise.all(promises).then(function (posts) {
        return posts;
      });
    });
  });
}

function getMetaTags (data, defaultTitle, defaultDescription, defaultImage) {
  var ogDescription = data.og_description || data.meta_description || defaultDescription;
  var ogImage = data.og_image || defaultImage;
  var ogTitle = data.og_title || data.meta_title || defaultTitle;
  var ogType = data.og_type;
  var metaDescription = data.meta_description || data.og_description || defaultDescription;
  var metaTitle = data.meta_title || data.og_title || defaultTitle;
  var metaNoindex = data.meta_noindex;
  var canonical = data.slug ? data.siteRoot + data.slug : data.siteRoot + data.path;
  return [/*#__PURE__*/React__default.createElement("meta", {
    property: "og:description",
    content: ogDescription,
    key: shortUuid.generate()
  }), /*#__PURE__*/React__default.createElement("meta", {
    property: "og:image",
    content: ogImage,
    key: shortUuid.generate()
  }), /*#__PURE__*/React__default.createElement("meta", {
    property: "og:title",
    content: ogTitle,
    key: shortUuid.generate()
  }), /*#__PURE__*/React__default.createElement("meta", {
    property: "og:type",
    content: ogType,
    key: shortUuid.generate()
  }), /*#__PURE__*/React__default.createElement("meta", {
    name: "description",
    content: metaDescription,
    key: shortUuid.generate()
  }), /*#__PURE__*/React__default.createElement("title", {
    key: shortUuid.generate()
  }, metaTitle), canonical && /*#__PURE__*/React__default.createElement("meta", {
    name: "canonical",
    href: canonical,
    key: shortUuid.generate()
  }), metaNoindex ? /*#__PURE__*/React__default.createElement("meta", {
    name: "robots",
    content: "noindex",
    key: shortUuid.generate()
  }) : /*#__PURE__*/React__default.createElement("meta", {
    name: "robots",
    content: "all",
    key: shortUuid.generate()
  })];
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
  getImagePathsFromData: getImagePathsFromData,
  getMetaTags: getMetaTags,
  getPages: getPages,
  getPosts: getPosts$1,
  getSrcSets: getSrcSets,
  makePixelValue: makePixelValue,
  useScript: useScript
};

Object.defineProperty(exports, 'Box', {
  enumerable: true,
  get: function () {
    return react.Box;
  }
});
Object.defineProperty(exports, 'Checkbox', {
  enumerable: true,
  get: function () {
    return react.Checkbox;
  }
});
Object.defineProperty(exports, 'FormControl', {
  enumerable: true,
  get: function () {
    return react.FormControl;
  }
});
Object.defineProperty(exports, 'FormErrorMessage', {
  enumerable: true,
  get: function () {
    return react.FormErrorMessage;
  }
});
Object.defineProperty(exports, 'FormHelperText', {
  enumerable: true,
  get: function () {
    return react.FormHelperText;
  }
});
Object.defineProperty(exports, 'FormLabel', {
  enumerable: true,
  get: function () {
    return react.FormLabel;
  }
});
Object.defineProperty(exports, 'Input', {
  enumerable: true,
  get: function () {
    return react.Input;
  }
});
Object.defineProperty(exports, 'Stack', {
  enumerable: true,
  get: function () {
    return react.Stack;
  }
});
Object.defineProperty(exports, 'Stat', {
  enumerable: true,
  get: function () {
    return react.Stat;
  }
});
Object.defineProperty(exports, 'StatGroup', {
  enumerable: true,
  get: function () {
    return react.StatGroup;
  }
});
Object.defineProperty(exports, 'StatHelpText', {
  enumerable: true,
  get: function () {
    return react.StatHelpText;
  }
});
Object.defineProperty(exports, 'StatLabel', {
  enumerable: true,
  get: function () {
    return react.StatLabel;
  }
});
Object.defineProperty(exports, 'StatNumber', {
  enumerable: true,
  get: function () {
    return react.StatNumber;
  }
});
Object.defineProperty(exports, 'Textarea', {
  enumerable: true,
  get: function () {
    return react.Textarea;
  }
});
Object.defineProperty(exports, 'Field', {
  enumerable: true,
  get: function () {
    return formik.Field;
  }
});
Object.defineProperty(exports, 'Form', {
  enumerable: true,
  get: function () {
    return formik.Form;
  }
});
Object.defineProperty(exports, 'Formik', {
  enumerable: true,
  get: function () {
    return formik.Formik;
  }
});
exports.Article = Article;
exports.BlockQuote = BlockQuote;
exports.Body = Body;
exports.BreadCrumb = BreadCrumb;
exports.Button = Button;
exports.Card = Card;
exports.Cards = Cards;
exports.CardsSection = CardsSection;
exports.Content = content;
exports.Faq = Faq;
exports.FontLoader = FontLoader;
exports.Footer = Footer$1;
exports.Grid = Grid;
exports.Head = head;
exports.Header = header;
exports.Icon = Icon;
exports.Jumbotron = Jumbotron;
exports.Line = Line;
exports.LoadingScreen = loadingScreen;
exports.Modal = modal;
exports.PrototypableProvider = PrototypableProvider;
exports.ResponsiveImage = ResponsiveImage;
exports.ScrollToTop = ScrollToTop;
exports.Section = Section;
exports.Tabs = Tabs;
exports.Text = Text;
exports.theme = theme;
exports.utils = utils;
