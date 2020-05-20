'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var styled = require('styled-components');
var styled__default = _interopDefault(styled);
var ReactBreakpoints = require('react-breakpoints');
var ReactBreakpoints__default = _interopDefault(ReactBreakpoints);
var JsxParser = _interopDefault(require('react-jsx-parser'));
var Prismic$1 = _interopDefault(require('prismic-javascript'));

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

function makePixelValue(value) {
  return value + 'px';
}

var _colors, _fonts;
var _unit = 32;
var theme = {
  breakPoints: {
    mobile: 608,
    tablet: 960,
    desktop: 1280
  },
  breakPointsAsPixel: {
    mobile: '608px',
    tablet: '960px',
    desktop: '1280px'
  },
  colors: (_colors = {}, _defineProperty(_colors, 'dark-1', '#000000'), _defineProperty(_colors, 'dark-2', '#D40000'), _defineProperty(_colors, 'dark-3', '#0091ea'), _defineProperty(_colors, 'dark-4', '#454545'), _defineProperty(_colors, 'dark-5', '#0066a3'), _defineProperty(_colors, 'light-1', '#f5faff'), _defineProperty(_colors, 'light-2', '36,139,204'), _defineProperty(_colors, 'light-3', '#ffffff'), _defineProperty(_colors, 'error', '#D40000'), _colors),
  typography: {
    fonts: (_fonts = {}, _defineProperty(_fonts, 'font-1', 'PT Serif'), _defineProperty(_fonts, 'font-2', 'Roboto'), _defineProperty(_fonts, 'font-3', 'Roboto'), _fonts),
    sizes: {
      desktop: {
        xsm: '1rem',
        // not used yet
        sm: '1.125rem',
        md: '1.5rem',
        lg: '2.5rem',
        xlg: '3.5rem',
        xxlg: '4rem'
      },
      tablet: {
        xsm: '.9rem',
        sm: '1.125rem',
        md: '1.5rem',
        lg: '2rem',
        xlg: '2.75rem',
        xxlg: '3.25rem'
      },
      mobile: {
        xsm: '.9rem',
        sm: '1.125rem',
        md: '1.5rem',
        lg: '2rem',
        xlg: '2.25rem',
        xxlg: '3rem'
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
      headerHeight: makePixelValue(2 * _unit)
    },
    mobile: {
      headerHeight: makePixelValue(1.5 * _unit)
    },
    tablet: {
      headerHeight: makePixelValue(2 * _unit)
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

function _templateObject2$1() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n  align-items: flex-start;\n  align-content: flex-start;\n\n  @media (min-width: ", ") and (max-width: ", ") {\n    ", " {\n      width: ", ";\n    }\n  }\n  @media (max-width: ", ") {\n    ", " {\n      display: block;\n      width: 100%;\n    }\n  }\n"]);

  _templateObject2$1 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$1() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  margin: 5px;\n  width: ", ";\n  align-self: ", ";\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
var ColUI = styled__default('div')(_templateObject$1(), function (_ref) {
  var width = _ref.width;
  return "calc(".concat(width, " - 10px)");
}, function (_ref2) {
  var stretch = _ref2.stretch;
  return stretch ? 'stretch' : 'flex-start';
});
var GridUI = styled__default('div')(_templateObject2$1(), theme.breakPointsAsPixel.mobile, theme.breakPointsAsPixel.tablet, ColUI, function (_ref3) {
  var collapse = _ref3.collapse;
  return collapse === 'tablet' ? '100%' : "calc(50% - 10px)";
}, theme.breakPointsAsPixel.mobile, ColUI);

function Grid(_ref) {
  var children = _ref.children,
      _ref$collapse = _ref.collapse,
      collapse = _ref$collapse === void 0 ? '' : _ref$collapse;
  return /*#__PURE__*/React.createElement(GridUI, {
    collapse: collapse
  }, children);
}

Grid.Col = function (_ref2) {
  var children = _ref2.children,
      _ref2$width = _ref2.width,
      width = _ref2$width === void 0 ? '32%' : _ref2$width,
      _ref2$stretch = _ref2.stretch,
      stretch = _ref2$stretch === void 0 ? false : _ref2$stretch;
  return /*#__PURE__*/React.createElement(ColUI, {
    stretch: stretch,
    width: width
  }, children);
};

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  top: ", ";\n  left: ", ";\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  padding: ", " ", ";\n  margin: 0;\n  blockquote {\n    font-family: ", ";\n    border: none;\n    color: ", ";\n    margin: 0;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  bottom: ", ";\n  right: ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$2() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n  color: ", ";\n  height: ", ";\n  font-size: ", ";\n  line-height: 1;\n  opacity: 0.5;\n  position: absolute;\n"]);

  _templateObject2$2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$2() {
  var data = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  width: 100%;\n  display: block;\n  background: ", ";\n  position: relative;\n  @media (max-width: ", ") {\n    padding: ", " ", ";\n  }\n"]);

  _templateObject$2 = function _templateObject() {
    return data;
  };

  return data;
}
var BoxWrapper = styled__default('div')(_templateObject$2(), theme.colors['light-1'], theme.breakPointsAsPixel.tablet, theme.unit(1), theme.unit(2.5));
var QuoteUI = styled__default('div')(_templateObject2$2(), theme.colors['dark-3'], theme.unit(2.5), theme.unit(5));
var CloseQuoteUI = styled__default(QuoteUI)(_templateObject3(), theme.unit(0), theme.unit(0.25));
var DropQuoteUI = styled__default('div')(_templateObject4(), theme.unit(2), theme.unit(1), theme.typography.fonts['font-3'], theme.colors['dark-1']);
var OpenQuoteUI = styled__default(QuoteUI)(_templateObject5(), theme.unit(0.25), theme.unit(0.25));

function Quote (_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React.createElement(BoxWrapper, null, /*#__PURE__*/React.createElement(OpenQuoteUI, null, "\u201C"), /*#__PURE__*/React.createElement(DropQuoteUI, null, /*#__PURE__*/React.createElement("blockquote", {
    className: "heading-3 italic font-2"
  }, children)), /*#__PURE__*/React.createElement(CloseQuoteUI, null, "\u201D"));
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
      return /*#__PURE__*/React.createElement(BoxWrapper$1, null, this.props.children);
    }
  }]);

  return Box;
}(React.Component);

function Article(_ref) {
  var children = _ref.children,
      collapse = _ref.collapse;
  return /*#__PURE__*/React.createElement(Grid, {
    collapse: collapse
  }, children);
}

Article.Content = function (_ref2) {
  var children = _ref2.children,
      _ref2$width = _ref2.width,
      width = _ref2$width === void 0 ? '64%' : _ref2$width;
  return /*#__PURE__*/React.createElement(Grid.Col, {
    width: width
  }, /*#__PURE__*/React.createElement(ContentUI, null, children));
};

Article.Sidebar = function (_ref3) {
  var children = _ref3.children,
      _ref3$width = _ref3.width,
      width = _ref3$width === void 0 ? '32%' : _ref3$width,
      _ref3$styling = _ref3.styling,
      styling = _ref3$styling === void 0 ? '' : _ref3$styling;
  var _children = children;

  if (styling === 'quote') {
    _children = /*#__PURE__*/React.createElement(Quote, null, children);
  } else if (styling === 'box') {
    _children = /*#__PURE__*/React.createElement(Box, null, children);
  }

  return /*#__PURE__*/React.createElement(Grid.Col, {
    width: width
  }, _children);
};

function _templateObject$4() {
  var data = _taggedTemplateLiteral(["\n  color: #fff;\n  text-align: center;\n  padding: ", ";\n"]);

  _templateObject$4 = function _templateObject() {
    return data;
  };

  return data;
}
var BannerUI = styled__default('div')(_templateObject$4(), theme.unit(0.5));

function Banner (_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React.createElement(BannerUI, null, children);
}

function _templateObject$5() {
  var data = _taggedTemplateLiteral(["\n  margin-top: ", ";\n  min-height: 100vh;\n\n  @media (max-width: ", ") {\n    margin-top: ", ";\n  }\n\n  @media (max-width: ", ") {\n    margin-top: ", ";\n  }\n"]);

  _templateObject$5 = function _templateObject() {
    return data;
  };

  return data;
}
var BodyUI = styled__default('div')(_templateObject$5(), theme.layout.desktop.headerHeight, theme.breakPointsAsPixel.desktop, theme.layout.mobile.headerHeight, theme.breakPointsAsPixel.mobile, theme.layout.mobile.headerHeight);

function body (_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React.createElement(BodyUI, null, /*#__PURE__*/React.createElement(ReactBreakpoints__default, {
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
  var data = _taggedTemplateLiteral(["\n  font-size: ", ";\n  display: flex;\n  justify-content: space-around;\n  padding: 1em;\n  text-transform: uppercase;\n  background-color: ", ";\n  color: ", ";\n  font-weight: bold;\n  font-family: ", ";\n"]);

  _templateObject$6 = function _templateObject() {
    return data;
  };

  return data;
}
var ContainerUI = styled__default('div')(_templateObject$6(), theme.unit(0.5), theme.colors['light-1'], theme.colors['dark-3'], theme.typography.fonts['font-2']);

function BreadCrumb(_ref) {
  var parts = _ref.parts;
  return /*#__PURE__*/React.createElement(ContainerUI, null, /*#__PURE__*/React.createElement("div", null, parts.map(function (part) {
    return part;
  })));
}

function _templateObject$7() {
  var data = _taggedTemplateLiteral(["\n  background-color: ", ";\n  border: 0;\n  border-radius: 5px;\n  color: #fff;\n  cursor: pointer;\n  display: block;\n  font-family: ", ";\n  font-size: ", ";\n  font-weight: 700;\n  height: ", ";\n  margin-top: ", ";\n  width: 100%;\n  max-width: ", "px;\n  background-image: linear-gradient(\n    to bottom,\n    #e52d27 0%,\n    #b31217 41%,\n    #e52d27 100%\n  );\n  ", "\n\n  border:1px solid #d02718;\n  box-shadow: inset 0px 1px 0px 0px #f5978e;\n"]);

  _templateObject$7 = function _templateObject() {
    return data;
  };

  return data;
}
var ButtonUI = styled__default('button')(_templateObject$7(), theme.colors['dark-2'], theme.typography.fonts['font-2'], theme.unit(0.75), theme.unit(1.75), theme.unit(0.66), function (_ref) {
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

function Button (_ref) {
  var children = _ref.children,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'button' : _ref$type;
  return /*#__PURE__*/React.createElement(ButtonUI, {
    type: type
  }, children);
}

function _templateObject3$1() {
  var data = _taggedTemplateLiteral(["\n  /* Position child elements relative to this element */\n  position: relative;\n\n  /* Create a pseudo element that uses padding-bottom to take up space */\n  &:after {\n    display: block;\n    content: '';\n    /* 16:9 aspect ratio */\n    padding-bottom: 56.25%;\n  }\n\n  /* Image is positioned absolutely relative to the parent element */\n  img {\n    /* Image should match parent box size */\n    position: absolute;\n    left: 0px;\n    top: 0px;\n    width: 100%;\n    height: 100%;\n  }\n"]);

  _templateObject3$1 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$3() {
  var data = _taggedTemplateLiteral(["\n  background: #fff;\n  padding: ", ";\n  width: 100%;\n"]);

  _templateObject2$3 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$8() {
  var data = _taggedTemplateLiteral(["\n  * {\n    box-sizing: border-box;\n  }\n  display: block;\n  background: #fff;\n  border: ", ";\n  line-height: 1.75;\n  width: 100%;\n"]);

  _templateObject$8 = function _templateObject() {
    return data;
  };

  return data;
}
var CardUI = styled__default('div')(_templateObject$8(), theme.border);
var ContentUI$1 = styled__default('div')(_templateObject2$3(), "".concat(theme.unit(0.5), " ").concat(theme.unit(0.66)));
var AspectRatioUI = styled__default('div')(_templateObject3$1());

function Card(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React.createElement(Grid.Col, {
    width: "32%",
    stretch: true
  }, /*#__PURE__*/React.createElement(CardUI, null, children));
}

Card.Image = function (_ref2) {
  var children = _ref2.children;
  return /*#__PURE__*/React.createElement(AspectRatioUI, null, children);
};

Card.Content = function (_ref3) {
  var children = _ref3.children;
  return /*#__PURE__*/React.createElement(ContentUI$1, null, children);
};

function Cards (_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React.createElement(Grid, null, children);
}

function _templateObject2$4() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  color: ", ";\n  cursor: pointer;\n  font-size: ", ";\n  font-weight: 500;\n  position: relative;\n  padding: 0;\n  &:after {\n    content: '';\n    color: ", ";\n    border: solid ", ";\n    border-width: 0 3px 3px 0;\n    display: inline-block;\n    padding: 4px;\n    transform: rotate(-135deg);\n    -webkit-transform: rotate(-135deg);\n    position: absolute;\n    right: 0;\n    top: 10px;\n  }\n  :focus &:after {\n  }\n  &:focus {\n    outline: none;\n  }\n  &::-webkit-details-marker {\n    display: none;\n  }\n"]);

  _templateObject2$4 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$9() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  border: ", ";\n  box-sizing: border-box;\n  margin-bottom: ", ";\n  padding: ", ";\n  padding-bottom: ", ";\n  background-color: #fff;\n  min-width: 100%;\n\n  div:last-child {\n    margin-bottom: -", ";\n  }\n\n  h4 {\n    width: calc(100% - 20px);\n  }\n\n  details[open] summary:after {\n    transform: rotate(45deg);\n    -webkit-transform: rotate(45deg);\n  }\n"]);

  _templateObject$9 = function _templateObject() {
    return data;
  };

  return data;
}
var DetailsUI = styled__default('details')(_templateObject$9(), theme.border, theme.unit(1), theme.unit(1), theme.unit(0.75), theme.unit(0.75));
var SummaryUI = styled__default('summary')(_templateObject2$4(), theme.colors['dark-4'], theme.unit(0.66), theme.colors['dark-1'], theme.colors['dark-4']);

function Faq(_ref) {
  var children = _ref.children;
  return children;
}

Faq.Details = function (_ref2) {
  var children = _ref2.children;
  return /*#__PURE__*/React.createElement(DetailsUI, null, children);
};

Faq.Summary = function (_ref3) {
  var children = _ref3.children;
  return /*#__PURE__*/React.createElement(SummaryUI, null, children);
};

function _templateObject$a() {
  var data = _taggedTemplateLiteral(["\n  background-color: ", ";\n  box-sizing: border-box;\n  padding: ", ";\n  width: 100%;\n"]);

  _templateObject$a = function _templateObject() {
    return data;
  };

  return data;
}
var FormUI = styled__default('div')(_templateObject$a(), theme.colors['light-1'], theme.unit(0.75));

function hexToRgb(hex) {
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? "".concat(parseInt(result[1], 16), ",").concat(parseInt(result[2], 16), ",").concat(parseInt(result[3], 16)) : null;
}

function _templateObject4$1() {
  var data = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  display: block;\n  font-size: ", ";\n  color: ", ";\n  height: ", ";\n  padding-top: ", ";\n"]);

  _templateObject4$1 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$2() {
  var data = _taggedTemplateLiteral(["\n  font-family: ", ";\n  font-size: ", ";\n"]);

  _templateObject3$2 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$5() {
  var data = _taggedTemplateLiteral(["\n  border: none;\n  box-sizing: border-box;\n  display: block;\n  font-size: ", ";\n  margin: 0;\n  padding: ", ";\n  resize: none;\n  width: 100%;\n\n  box-shadow: ", ";\n\n  &:focus {\n    border: none;\n    outline: none;\n    box-shadow: ", ";\n  }\n"]);

  _templateObject2$5 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$b() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: ", ";\n"]);

  _templateObject$b = function _templateObject() {
    return data;
  };

  return data;
}
var ContainerUI$1 = styled__default('div')(_templateObject$b(), theme.unit(0.25));
var InputUI = styled__default('input')(_templateObject2$5(), theme.unit(0.5), theme.unit(0.4), function (_ref) {
  var isValid = _ref.isValid;
  return isValid ? "" : "0 0 0 3px rgba(".concat(hexToRgb(theme.colors['error']), ", 0.4)");
}, function (_ref2) {
  var isValid = _ref2.isValid;
  return isValid ? "0 0 0 3px rgba(".concat(hexToRgb(theme.colors['dark-3']), ", 0.5)") : "0 0 0 3px rgba(".concat(hexToRgb(theme.colors['error']), ", 0.7)");
});
var LabelUI = styled__default('label')(_templateObject3$2(), theme.typography.fonts['font-2'], theme.unit(0.5));
var ValidationUI = styled__default('div')(_templateObject4$1(), theme.unit(0.5), theme.colors['error'], theme.unit(1), theme.unit(0.125));

function getLabel(label) {
  return /*#__PURE__*/React.createElement(LabelUI, null, label);
}

function getComponent(type, onChange, isValid, name) {
  var props = {
    isValid: isValid,
    onChange: onChange.bind(null, name)
  };

  if (type === 'textarea') {
    return /*#__PURE__*/React.createElement(InputUI, _extends({
      as: "textarea",
      rows: "5"
    }, _objectSpread2({}, props)));
  } else {
    return /*#__PURE__*/React.createElement(InputUI, _objectSpread2({}, props));
  }
}

function Input(_ref) {
  var isValidating = _ref.isValidating,
      label = _ref.label,
      onChange = _ref.onChange,
      name = _ref.name,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'input' : _ref$type,
      _ref$validationRules = _ref.validationRules,
      validationRules = _ref$validationRules === void 0 ? '' : _ref$validationRules,
      validator = _ref.validator,
      value = _ref.value;
  var validationMessage = validator.message(name, value, validationRules);
  var isValid = isValidating ? !!!validationMessage : true;
  return /*#__PURE__*/React.createElement(ContainerUI$1, null, getLabel(label), getComponent(type, onChange, isValid, name), /*#__PURE__*/React.createElement(ValidationUI, null, validator.message(name, value, validationRules)));
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var simpleReactValidator_min = createCommonjsModule(function (module, exports) {
// Simple React Validator v1.4.6 | Created By Dockwa | MIT License | 2017 - Present
!function(e,t){module.exports=t(React);}(commonjsGlobal,function(s){function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,s=!1,a=void 0;try{for(var i,u=e[Symbol.iterator]();!(n=(i=u.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){s=!0,a=e;}finally{try{n||null==u.return||u.return();}finally{if(s)throw a}}return r}(e,t)||u(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=u(e))){var t=0,r=function(){};return {s:r,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,s,a=!0,i=!1;return {s:function(){n=e[Symbol.iterator]();},n:function(){var e=n.next();return a=e.done,e},e:function(e){i=!0,s=e;},f:function(){try{a||null==n.return||n.return();}finally{if(i)throw s}}}}function u(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return "Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function a(e){return (a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n);}return r}function d(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach(function(e){l(t,e,r[e]);}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e));});}return t}function o(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n);}}function e(e,t,r){return t&&o(e.prototype,t),r&&o(e,r),e}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var t=function(){function n(){var r=this,e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),l(this,"showMessageFor",function(e){r.visibleFields.includes(e)||r.visibleFields.push(e),r.helpers.forceUpdateIfNeeded();}),l(this,"hideMessageFor",function(e){var t=r.visibleFields.indexOf(e);-1<t&&r.visibleFields.splice(t,1),r.helpers.forceUpdateIfNeeded();}),l(this,"helpers",{parent:this,passes:function(e,t,r,n){return n.hasOwnProperty(e)?!(this.isRequired(e,n)||!this.isBlank(t))||!1!==n[e].rule(t,r,this.parent):(console.error("Rule Not Found: There is no rule with the name ".concat(e,".")),!0)},isRequired:function(e,t){return t[e].hasOwnProperty("required")&&t[e].required},isBlank:function(e){return null==e||this.testRegex(e,/^[\s]*$/)},normalizeValues:function(e,t){return [this.valueOrEmptyString(e),this.getValidation(t),this.getOptions(t)]},getValidation:function(e){return e===Object(e)&&Object.keys(e).length?Object.keys(e)[0]:e.split(":")[0]},getOptions:function(e){if(e===Object(e)&&Object.values(e).length){var t=Object.values(e)[0];return Array.isArray(t)?t:[t]}return 1<(t=e.split(":")).length?t[1].split(","):[]},valueOrEmptyString:function(e){return null==e?"":e},toSentence:function(e){return e.slice(0,-2).join(", ")+(e.slice(0,-2).length?", ":"")+e.slice(-2).join(2<e.length?", or ":" or ")},testRegex:function(e,t){return null!==e.toString().match(t)},forceUpdateIfNeeded:function(){this.parent.autoForceUpdate&&this.parent.autoForceUpdate.forceUpdate();},message:function(e,t,r,n){r.messages=r.messages||{};var s=r.messages[e]||r.messages.default||this.parent.messages[e]||this.parent.messages.default||n[e].message;return s.replace(":attribute",this.humanizeFieldName(t))},humanizeFieldName:function(e){return e.replace(/([A-Z])/g," $1").replace(/_/g," ").toLowerCase()},element:function(e,t){var r=t.element||this.parent.element;return r(e,t.className)},momentInstalled:function(){return !(!window||!window.moment)||(console.warn("Date validators require using momentjs https://momentjs.com and moment objects."),!1)},size:function(e,t){return "string"===t||void 0===t||"array"===t?e.length:"num"===t?parseFloat(e):void 0},sizeText:function(e){return "string"===e||void 0===e?" characters":"array"===e?" elements":""}}),this.fields={},this.visibleFields=[],this.errorMessages={},this.messagesShown=!1,this.rules=d({accepted:{message:"The :attribute must be accepted.",rule:function(e){return !0===e},required:!0},after:{message:"The :attribute must be after :date.",rule:function(e,t){return r.helpers.momentInstalled()&&moment.isMoment(e)&&e.isAfter(t[0],"day")},messageReplace:function(e,t){return e.replace(":date",t[0].format("MM/DD/YYYY"))}},after_or_equal:{message:"The :attribute must be after or on :date.",rule:function(e,t){return r.helpers.momentInstalled()&&moment.isMoment(e)&&e.isSameOrAfter(t[0],"day")},messageReplace:function(e,t){return e.replace(":date",t[0].format("MM/DD/YYYY"))}},alpha:{message:"The :attribute may only contain letters.",rule:function(e){return r.helpers.testRegex(e,/^[A-Z]*$/i)}},alpha_space:{message:"The :attribute may only contain letters and spaces.",rule:function(e){return r.helpers.testRegex(e,/^[A-Z\s]*$/i)}},alpha_num:{message:"The :attribute may only contain letters and numbers.",rule:function(e){return r.helpers.testRegex(e,/^[A-Z0-9]*$/i)}},alpha_num_space:{message:"The :attribute may only contain letters, numbers, and spaces.",rule:function(e){return r.helpers.testRegex(e,/^[A-Z0-9\s]*$/i)}},alpha_num_dash:{message:"The :attribute may only contain letters, numbers, and dashes.",rule:function(e){return r.helpers.testRegex(e,/^[A-Z0-9_-]*$/i)}},alpha_num_dash_space:{message:"The :attribute may only contain letters, numbers, dashes, and spaces.",rule:function(e){return r.helpers.testRegex(e,/^[A-Z0-9_-\s]*$/i)}},array:{message:"The :attribute must be an array.",rule:function(e){return Array.isArray(e)}},before:{message:"The :attribute must be before :date.",rule:function(e,t){return r.helpers.momentInstalled()&&moment.isMoment(e)&&e.isBefore(t[0],"day")},messageReplace:function(e,t){return e.replace(":date",t[0].format("MM/DD/YYYY"))}},before_or_equal:{message:"The :attribute must be before or on :date.",rule:function(e,t){return r.helpers.momentInstalled()&&moment.isMoment(e)&&e.isSameOrBefore(t[0],"day")},messageReplace:function(e,t){return e.replace(":date",t[0].format("MM/DD/YYYY"))}},between:{message:"The :attribute must be between :min and :max:type.",rule:function(e,t){return r.helpers.size(e,t[2])>=parseFloat(t[0])&&r.helpers.size(e,t[2])<=parseFloat(t[1])},messageReplace:function(e,t){return e.replace(":min",t[0]).replace(":max",t[1]).replace(":type",r.helpers.sizeText(t[2]))}},boolean:{message:"The :attribute must be a boolean.",rule:function(e){return !1===e||!0===e}},card_exp:{message:"The :attribute must be a valid expiration date.",rule:function(e){return r.helpers.testRegex(e,/^(([0]?[1-9]{1})|([1]{1}[0-2]{1}))\s?\/\s?(\d{2}|\d{4})$/)}},card_num:{message:"The :attribute must be a valid credit card number.",rule:function(e){return r.helpers.testRegex(e,/^\d{4}\s?\d{4,6}\s?\d{4,5}\s?\d{0,8}$/)}},currency:{message:"The :attribute must be a valid currency.",rule:function(e){return r.helpers.testRegex(e,/^\$?(\d{1,3})(\,?\d{3})*\.?\d{0,2}$/)}},date:{message:"The :attribute must be a date.",rule:function(e){return r.helpers.momentInstalled()&&moment.isMoment(e)}},date_equals:{message:"The :attribute must be on :date.",rule:function(e,t){return r.helpers.momentInstalled()&&moment.isMoment(e)&&e.isSame(t[0],"day")},messageReplace:function(e,t){return e.replace(":date",t[0].format("MM/DD/YYYY"))}},email:{message:"The :attribute must be a valid email address.",rule:function(e){return r.helpers.testRegex(e,/^[A-Z0-9.!#$%&'*+-/=?^_`{|}~]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i)}},in:{message:"The selected :attribute must be :values.",rule:function(e,t){return t.includes(e)},messageReplace:function(e,t){return e.replace(":values",r.helpers.toSentence(t))}},integer:{message:"The :attribute must be an integer.",rule:function(e){return r.helpers.testRegex(e,/^\d*$/)}},max:{message:"The :attribute may not be greater than :max:type.",rule:function(e,t){return r.helpers.size(e,t[1])<=parseFloat(t[0])},messageReplace:function(e,t){return e.replace(":max",t[0]).replace(":type",r.helpers.sizeText(t[1]))}},min:{message:"The :attribute must be at least :min:type.",rule:function(e,t){return r.helpers.size(e,t[1])>=parseFloat(t[0])},messageReplace:function(e,t){return e.replace(":min",t[0]).replace(":type",r.helpers.sizeText(t[1]))}},not_in:{message:"The selected :attribute must not be :values.",rule:function(e,t){return !t.includes(e)},messageReplace:function(e,t){return e.replace(":values",r.helpers.toSentence(t))}},not_regex:{message:"The :attribute must not match the required pattern.",rule:function(e,t){return !r.helpers.testRegex(e,"string"==typeof t[0]||t[0]instanceof String?new RegExp(t[0]):t[0])}},numeric:{message:"The :attribute must be a number.",rule:function(e){return r.helpers.testRegex(e,/^\-?\d*\.?\d+$/)}},phone:{message:"The :attribute must be a valid phone number.",rule:function(e){return r.helpers.testRegex(e,/^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)$/)&&!r.helpers.testRegex(e,/^\b(\d)\1{8,}\b$/)}},regex:{message:"The :attribute must match the required pattern.",rule:function(e,t){return r.helpers.testRegex(e,"string"==typeof t[0]||t[0]instanceof String?new RegExp(t[0]):t[0])}},required:{message:"The :attribute field is required.",rule:function(e){return !r.helpers.isBlank(e)},required:!0},size:{message:"The :attribute must be :size:type.",rule:function(e,t){return r.helpers.size(e,t[1])==parseFloat(t[0])},messageReplace:function(e,t){return e.replace(":size",t[0]).replace(":type",r.helpers.sizeText(t[1]))}},string:{message:"The :attribute must be a string.",rule:function(e){return a(e)===a("string")}},typeof:{message:"The :attribute is not the correct type of :type.",rule:function(e,t){return a(e)===a(t[0])},messageReplace:function(e,t){return e.replace(":type",a(t[0]))}},url:{message:"The :attribute must be a url.",rule:function(e){return r.helpers.testRegex(e,/^https?:\/\/[-a-z0-9@:%._\+~#=]{1,256}\.[a-z0-9()]{2,6}\b([-a-z0-9()@:%_\+.~#?&//=]*)$/i)}}},e.validators||{}),e.locale&&!n.locales.hasOwnProperty(e.locale)&&console.warn("Locale not found! Make sure it is spelled correctly and the locale file is loaded.");var t=n.locales[e.locale]||{};Object.keys(this.rules).forEach(function(e){r.rules[e].message=t[e]||r.rules[e].message;}),this.messages=e.messages||{},this.className=e.className,this.autoForceUpdate=e.autoForceUpdate||!1,!1===e.element?this.element=function(e){return e}:e.hasOwnProperty("element")?this.element=e.element:"object"===("undefined"==typeof navigator?"undefined":a(navigator))&&"ReactNative"===navigator.product?this.element=function(e){return e}:this.element=function(e,t){return s.createElement("div",{className:t||r.className||"srv-validation-message"},e)};}return e(n,null,[{key:"addLocale",value:function(e,t){this.locales[e]=t;}}]),e(n,[{key:"getErrorMessages",value:function(){return this.errorMessages}},{key:"showMessages",value:function(){this.messagesShown=!0,this.helpers.forceUpdateIfNeeded();}},{key:"hideMessages",value:function(){this.messagesShown=!1,this.helpers.forceUpdateIfNeeded();}},{key:"allValid",value:function(){for(var e in this.fields)if(!1===this.fieldValid(e))return !1;return !0}},{key:"fieldValid",value:function(e){return this.fields.hasOwnProperty(e)&&!0===this.fields[e]}},{key:"purgeFields",value:function(){this.fields={},this.errorMessages={};}},{key:"messageWhenPresent",value:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};if(!this.helpers.isBlank(e)&&this.messagesShown)return this.helpers.element(e,t)}},{key:"messageAlways",value:function(e,t){var r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};if(console.warn("The messageAlways() method is deprecated in SimpleReactValidator. Please see the documentation and switch to the messageWhenPresent() method."),t&&this.messagesShown)return this.helpers.element(t,r)}},{key:"check",value:function(e,t){var r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};Array.isArray(t)||(t=t.split("|"));var n,s=r.validators?d({},this.rules,{},r.validators):this.rules,a=p(t);try{for(a.s();!(n=a.n()).done;){var i=n.value,u=f(this.helpers.normalizeValues(e,i),3),o=u[0],l=u[1],c=u[2];if(!this.helpers.passes(l,o,c,s))return !1}}catch(e){a.e(e);}finally{a.f();}return !0}},{key:"message",value:function(e,t,r){var n=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{};this.errorMessages[e]=null,this.fields[e]=!0,Array.isArray(r)||(r=r.split("|"));var s,a=n.validators?d({},this.rules,{},n.validators):this.rules,i=p(r);try{for(i.s();!(s=i.n()).done;){var u=s.value,o=f(this.helpers.normalizeValues(t,u),3),l=o[0],c=o[1],m=o[2];if(!this.helpers.passes(c,l,m,a)){this.fields[e]=!1;var h=this.helpers.message(c,e,n,a);if(0<m.length&&a[c].hasOwnProperty("messageReplace")&&(h=a[c].messageReplace(h,m)),this.errorMessages[e]=h,this.messagesShown||this.visibleFields.includes(e))return this.helpers.element(h,n)}}}catch(e){i.e(e);}finally{i.f();}}}]),n}();return l(t,"version","1.4.6"),l(t,"locales",{en:{}}),t});
});

var Form = /*#__PURE__*/function (_React$Component) {
  _inherits(Form, _React$Component);

  var _super = _createSuper(Form);

  function Form(props) {
    var _this;

    _classCallCheck(this, Form);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "onFieldChange", function (name, element) {
      _this.setState(_defineProperty({}, name, element.target.value));
    });

    _defineProperty(_assertThisInitialized(_this), "onSubmit", function (event) {
      event.preventDefault();

      if (_this.validator.allValid()) {
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
      isValidating: false
    };
    return _this;
  }

  _createClass(Form, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;
      return /*#__PURE__*/React.createElement(FormUI, null, /*#__PURE__*/React.createElement("form", {
        onSubmit: this.onSubmit
      }, React.Children.map(children, function (child) {
        return React.cloneElement(child, _objectSpread2(_objectSpread2({}, child.props), {}, {
          isValidating: _this2.state.isValidating,
          onChange: _this2.onFieldChange,
          validator: _this2.validator,
          value: _this2.state[child.props.name]
        }));
      })));
    }
  }]);

  return Form;
}(React.Component);

Form.Input = Input;
Form.Button = Button;

function _templateObject4$2() {
  var data = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  display: flex;\n  justify-content: space-between;\n  background-color: ", ";\n  padding: ", ";\n  padding-right: ", ";\n  font-family: ", ";\n\n  @media (max-width: ", ") {\n    flex-direction: column;\n    text-align: center;\n  }\n\n  ", " {\n    color: #fff;\n    white-space: nowrap;\n    font-style: normal;\n    a:active,\n    a:visited,\n    a:hover,\n    a:link {\n      color: #fff;\n      text-decoration: none;\n      font-family: ", ";\n    }\n    a:first-child {\n      text-transform: uppercase;\n      font-size: ", ";\n    }\n    font-family: ", ";\n  }\n\n  ", " {\n    font-size: ", ";\n    color: #fff;\n    margin-right: ", ";\n  }\n"]);

  _templateObject4$2 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$3() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject3$3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$6() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject2$6 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$c() {
  var data = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  display: block;\n  background-color: ", ";\n  max-width: 100%;\n  flex-shrink: 0;\n"]);

  _templateObject$c = function _templateObject() {
    return data;
  };

  return data;
}
var FooterUI = styled__default('footer')(_templateObject$c(), theme.colors['dark-1']);
var AddressUI = styled__default('address')(_templateObject2$6());
var FinePrintUI = styled__default('div')(_templateObject3$3());
var FooterUIInner = styled__default('div')(_templateObject4$2(), theme.colors['dark-1'], "".concat(theme.unit(0.5), " ").concat(theme.unit(0.75)), theme.unit(1), theme.typography.fonts['font-1'], theme.breakPointsAsPixel.mobile, AddressUI, theme.typography.fonts['font-2'], theme.unit(0.65), theme.typography.fonts['font-2'], FinePrintUI, theme.unit(0.4), theme.unit(1));

function Footer(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React.createElement(FooterUI, null, /*#__PURE__*/React.createElement(FooterUIInner, null, children));
}

Footer.Address = AddressUI;
Footer.FinePrint = FinePrintUI;

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  margin-left: ", ";\n  font-family: ", ";\n  border-left: ", ";\n  color: #fff;\n  font-size: ", ";\n  display: flex;\n  background-color: ", ";\n  padding: 0 ", ";\n  align-items: center;\n  justify-content: center;\n\n  flex-direction: column;\n\n  a:active,\n  a:link,\n  a:hover,\n  a:visited {\n    color: #fff;\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  position: relative;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5$1() {
  var data = _taggedTemplateLiteral(["\n  align-items: center;\n  box-sizing: border-box;\n  display: flex;\n  font-family: ", ";\n  justify-content: center;\n  height: ", ";\n  a:visited,\n  a:link {\n    color: #fff;\n    text-decoration: none;\n  }\n  color: #fff;\n  padding: 0;\n  padding-left: ", ";\n  a:active,\n  a:hover {\n    cursor: pointer;\n    text-decoration: underline;\n  }\n  text-transform: uppercase;\n"]);

  _templateObject5$1 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  height: ", ";\n  min-width: 140px;\n  margin-left: ", ";\n  /* margin-right: 100px; */\n"]);

  _templateObject4$3 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$4() {
  var data = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  cursor: pointer;\n  display: block;\n  height: ", ";\n  position: relative;\n  float: left;\n\n  ul {\n    background-color: #fff;\n    box-sizing: border-box;\n    display: none;\n    list-style: none;\n    margin: 0;\n    width: 250px;\n    padding-left: 0;\n    position: relative;\n    z-index: 1;\n    border: ", ";\n    display: none;\n    color: ", ";\n    cursor: pointer;\n    position: absolute;\n    margin-right: -125px;\n    right: 50%;\n    top: 100%;\n\n    li {\n      box-sizing: border-box;\n      cursor: pointer;\n      margin-left: 0;\n      a {\n        :hover {\n          background-color: ", ";\n          color: #fff;\n          text-decoration: none;\n        }\n        box-sizing: border-box;\n        display: block;\n        font-family: ", ";\n        margin-left: 0;\n        min-width: 100%;\n        padding: ", ";\n      }\n    }\n  }\n\n  :hover {\n    ul {\n      display: block;\n    }\n  }\n"]);

  _templateObject3$4 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$7() {
  var data = _taggedTemplateLiteral(["\n  align-items: center;\n  background-color: ", ";\n  box-sizing: border-box;\n  display: flex;\n  height: ", ";\n  flex-direction: row;\n  justify-content: space-between;\n  width: 100%;\n  z-index: 1;\n"]);

  _templateObject2$7 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$d() {
  var data = _taggedTemplateLiteral(["\n  background-color: ", ";\n  box-sizing: border-box;\n  display: block;\n  height: ", ";\n  width: 100%;\n  position: fixed;\n  top: 0;\n  z-index: 1;\n"]);

  _templateObject$d = function _templateObject() {
    return data;
  };

  return data;
}
var ContainerUI$2 = styled__default('header')(_templateObject$d(), theme.colors['dark-1'], theme.layout.desktop.headerHeight);
var ContainerInnerUI = styled__default('div')(_templateObject2$7(), theme.colors['dark-1'], theme.layout.desktop.headerHeight);
var DropdownUI = styled__default('div')(_templateObject3$4(), theme.layout.desktop.headerHeight, theme.border, theme.colors['dark-3'], theme.colors['dark-5'], theme.typography.fonts['font-2'], theme.unit(0.25));
var BrandUI = styled__default('div')(_templateObject4$3(), theme.layout.desktop.headerHeight, theme.unit(0.25));
var LinkUI = styled__default('div')(_templateObject5$1(), theme.typography.fonts['font-2'], theme.layout.desktop.headerHeight, theme.unit(1));
var MenuUI = styled__default('div')(_templateObject6());
var ContactUI = styled__default('div')(_templateObject7(), theme.unit(1), theme.typography.fonts['font-2'], theme.unit(1), theme.unit(0.45), theme.colors['dark-2'], theme.unit(0.75));

function Container(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React.createElement(ContainerUI$2, null, /*#__PURE__*/React.createElement(ContainerInnerUI, null, children));
}

var Brand = function Brand(_ref2) {
  var children = _ref2.children;
  return /*#__PURE__*/React.createElement(BrandUI, null, children);
};

function Dropdown(_ref3) {
  var children = _ref3.children,
      text = _ref3.text;
  return /*#__PURE__*/React.createElement(DropdownUI, null, /*#__PURE__*/React.createElement(Link, null, text), /*#__PURE__*/React.createElement("ul", null, React.Children.map(children, function (child) {
    return /*#__PURE__*/React.createElement("li", null, React.cloneElement(child, {}));
  })));
}

function Link(_ref4) {
  var children = _ref4.children;
  return /*#__PURE__*/React.createElement(LinkUI, null, children);
}

function Menu(_ref5) {
  var children = _ref5.children;
  return /*#__PURE__*/React.createElement(MenuUI, null, children);
}

function Contact(_ref6) {
  var children = _ref6.children;
  return /*#__PURE__*/React.createElement(ContactUI, null, children);
}

var DesktopHeader = {
  Brand: Brand,
  Container: Container,
  Dropdown: Dropdown,
  Link: Link,
  Menu: Menu,
  Contact: Contact
};

function _templateObject4$4() {
  var data = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  background-color: ", ";\n  display: block;\n  left: 0;\n  min-height: 100vh;\n  padding-top: ", ";\n  position: absolute;\n  top: 0;\n  height: 100%;\n  width: 100%;\n  min-height: 100vh;\n  overflow: auto;\n"]);

  _templateObject4$4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$5() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  cursor: pointer;\n  box-sizing: border-box;\n  font-family: ", ";\n  font-size: ", ";\n  margin: 0;\n  padding: ", ";\n  position: relative;\n  text-align: center;\n  width: auto;\n  text-transform: uppercase;\n  :hover {\n    background-color: ", ";\n    padding: ", ";\n  }\n  a:active,\n  a:visited,\n  a:hover,\n  a:link {\n    color: #fff;\n    display: inline-block;\n    min-width: 100%;\n    text-decoration: none;\n  }\n  background-color: ", ";\n"]);

  _templateObject3$5 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$8() {
  var data = _taggedTemplateLiteral(["\n  align-items: center;\n  background-color: ", ";\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: row;\n  height: ", ";\n  justify-content: space-between;\n  padding: ", ";\n  width: 100%;\n  z-index: 1;\n"]);

  _templateObject2$8 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$e() {
  var data = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  position: fixed;\n  z-index: 1;\n  top: 0;\n  display: block;\n  background-color: ", ";\n  height: ", ";\n  width: 100%;\n"]);

  _templateObject$e = function _templateObject() {
    return data;
  };

  return data;
}
var ContainerUI$3 = styled__default('div')(_templateObject$e(), theme.colors['dark-1'], theme.layout.mobile.headerHeight);
var ContainerInnerUI$1 = styled__default('div')(_templateObject2$8(), theme.colors['dark-1'], theme.layout.mobile.headerHeight, "0 ".concat(theme.unit(0.75), " 0 ").concat(theme.unit(0.25)));
var LinkUI$1 = styled__default('div')(_templateObject3$5(), theme.colors['light-1'], theme.typography.fonts['font-2'], theme.unit(0.75), theme.unit(0.25), theme.colors['dark-5'], theme.unit(0.25), function (_ref) {
  var isOpen = _ref.isOpen;
  return isOpen && "".concat(theme.colors['dark-5']);
});
var MenuUI$1 = styled__default('nav')(_templateObject4$4(), theme.colors['dark-3'], theme.layout.mobile.headerHeight);

function _templateObject6$1() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n  height: ", ";\n  margin: (", ") auto ", " auto;\n  margin-top: -", ";\n  position: relative;\n  width: ", ";\n  z-index: 9999;\n  cursor: pointer;\n"]);

  _templateObject6$1 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5$2() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  padding: ", ";\n  right: 0;\n  top: 0;\n"]);

  _templateObject5$2 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$5() {
  var data = _taggedTemplateLiteral(["\n  top: 100%;\n  transform: ", ";\n"]);

  _templateObject4$5 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$6() {
  var data = _taggedTemplateLiteral(["\n  top: 50%;\n  opacity: ", ";\n"]);

  _templateObject3$6 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$9() {
  var data = _taggedTemplateLiteral(["\n  top: 0;\n  transform: ", ";\n"]);

  _templateObject2$9 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$f() {
  var data = _taggedTemplateLiteral(["\n  background: #fff;\n  border-radius: (", ");\n  display: block;\n  height: ", ";\n  left: 0;\n  position: absolute;\n  transition: transform 500ms ease;\n  width: 100%;\n"]);

  _templateObject$f = function _templateObject() {
    return data;
  };

  return data;
}
var heightLine = 3;
var heightIcon = 16;
var translateY = heightIcon / 2;
var translateY1 = makePixelValue(translateY);
var LineUI = styled__default('span')(_templateObject$f(), makePixelValue(heightLine / 2), makePixelValue(heightLine));
var Line1UI = styled__default(LineUI)(_templateObject2$9(), function (props) {
  return props.isOpen ? "translateY(".concat(translateY1, ") rotate(45deg) translateX(0)") : 'rotate(0deg)';
});
var Line2UI = styled__default(LineUI)(_templateObject3$6(), function (props) {
  return props.isOpen ? "0" : '1';
});
var Line3UI = styled__default(LineUI)(_templateObject4$5(), function (props) {
  return props.isOpen ? "translateY(-".concat(translateY1, ") rotate(-45deg) translateX(0)") : 'rotate(0deg)';
});
var ContainerUI$4 = styled__default('div')(_templateObject5$2(), theme.unit(0.5));
var ContainerInnerUI$2 = styled__default('div')(_templateObject6$1(), makePixelValue(heightIcon), makePixelValue(heightIcon * 2), heightIcon, theme.unit(0.125), theme.unit(1));

function TriggerIcon(_ref) {
  var isOpen = _ref.isOpen,
      onClick = _ref.onClick;
  return /*#__PURE__*/React.createElement(ContainerUI$4, {
    isOpen: isOpen,
    onClick: onClick
  }, /*#__PURE__*/React.createElement(ContainerInnerUI$2, null, /*#__PURE__*/React.createElement(Line1UI, {
    isOpen: isOpen
  }), /*#__PURE__*/React.createElement(Line2UI, {
    isOpen: isOpen
  }), /*#__PURE__*/React.createElement(Line3UI, {
    isOpen: isOpen
  })));
}

function _templateObject2$a() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  &:after {\n    content: '';\n    color: ", ";\n    border: solid ", ";\n    border-width: 0 4px 4px 0;\n    display: inline-block;\n    margin-left: ", ";\n    padding: 4px;\n    transform: ", ";\n    position: absolute;\n    top: -", ";\n  }\n"]);

  _templateObject2$a = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$g() {
  var data = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  cursor: pointer;\n  font-family: ", ";\n  display: block;\n  position: relative;\n\n  ul {\n    position: relative;\n    box-sizing: border-box;\n    display: block;\n    list-style: none;\n    margin: 0;\n    padding-left: 0;\n    z-index: 1;\n    min-width: 100%;\n\n    li {\n      cursor: pointer;\n      display: flex;\n      font-size: ", ";\n      justify-content: center;\n      align-content: center;\n      box-sizing: border-box;\n      min-width: 100%;\n      margin-left: 0;\n      text-align: center;\n      text-transform: uppercase;\n      a:active,\n      a:hover,\n      a:link,\n      a:visited {\n        color: #fff;\n        display: inline-block;\n        margin-left: 0;\n        min-width: 100%;\n        padding: ", ";\n        text-decoration: none;\n      }\n      a:hover {\n        background-color: ", ";\n      }\n    }\n  }\n  :hover {\n    ul {\n      display: block;\n    }\n  }\n"]);

  _templateObject$g = function _templateObject() {
    return data;
  };

  return data;
}
var DropdownUI$1 = styled__default('span')(_templateObject$g(), theme.typography.fonts['font-2'], theme.unit(0.75), theme.unit(0.25), theme.colors['dark-5']);
var LinkArrowUI = styled__default('div')(_templateObject2$a(), theme.colors['light-1'], theme.colors['light-1'], theme.unit(2.5), function (_ref) {
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
      return /*#__PURE__*/React.createElement(DropdownUI$1, null, /*#__PURE__*/React.createElement(LinkUI$1, {
        isOpen: isOpen,
        onClick: function onClick() {
          _this2.toggleMenu(!isOpen);
        }
      }, text, /*#__PURE__*/React.createElement(LinkArrowUI, {
        isOpen: isOpen
      })), /*#__PURE__*/React.createElement("ul", null, isOpen && React.Children.map(children, function (child) {
        return /*#__PURE__*/React.createElement("li", null, React.cloneElement(child, {
          onClick: function onClick(event) {
            isParentMenuOpen && _this2.props.closeParentMenu();
            event.nativeEvent.stopPropagation();
          }
        }));
      })));
    }
  }]);

  return Dropdown;
}(React.Component);

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
      return /*#__PURE__*/React.createElement(ContainerUI$3, null, /*#__PURE__*/React.createElement(ContainerInnerUI$1, null, /*#__PURE__*/React.createElement(TriggerIcon, {
        isOpen: isOpen,
        onClick: this.toggleMenu
      }), React.Children.map(children, function (child) {
        return React.cloneElement(child, _objectSpread2(_objectSpread2({}, child.props), {}, {
          closeParentMenu: _this3.toggleMenu,
          isParentMenuOpen: isOpen
        }));
      })));
    }
  }]);

  return Container;
}(React.Component);

var Brand$1 = function Brand(_ref) {
  var children = _ref.children;
  return children;
};

function Link$1(props) {
  var children = props.children,
      closeParentMenu = props.closeParentMenu,
      isParentMenuOpen = props.isParentMenuOpen;
  return /*#__PURE__*/React.createElement(LinkUI$1, {
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
    var content = React.Children.map(children, function (child) {
      return React.cloneElement(child, _objectSpread2(_objectSpread2({}, child.props), {}, {
        closeParentMenu: closeParentMenu,
        isParentMenuOpen: isParentMenuOpen
      }));
    });
    return /*#__PURE__*/React.createElement(MenuUI$1, _objectSpread2({}, props), content);
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

function _templateObject$h() {
  var data = _taggedTemplateLiteral(["\n  margin: 0;\n  padding: 0;\n  border-top: ", ";\n  min-width: 100%;\n  display: block;\n"]);

  _templateObject$h = function _templateObject() {
    return data;
  };

  return data;
}
var DividerUI = styled__default('div')(_templateObject$h(), theme.border);

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

      return /*#__PURE__*/React.createElement(ReactBreakpoints.Media, null, function (_ref) {
        var breakpoints = _ref.breakpoints,
            currentBreakpoint = _ref.currentBreakpoint;

        if (breakpoints[currentBreakpoint] > breakpoints['tablet']) {
          return /*#__PURE__*/React.createElement(DesktopHeader.Container, _objectSpread2({}, _this.props));
        } else {
          return /*#__PURE__*/React.createElement(MobileHeader.Container, _objectSpread2({}, _this.props));
        }
      });
    }
  }]);

  return Container;
}(React.Component);

function Brand$2(props) {
  return /*#__PURE__*/React.createElement(ReactBreakpoints.Media, null, function (_ref2) {
    var breakpoints = _ref2.breakpoints,
        currentBreakpoint = _ref2.currentBreakpoint;

    if (breakpoints[currentBreakpoint] > breakpoints['tablet']) {
      return /*#__PURE__*/React.createElement(DesktopHeader.Brand, _objectSpread2({}, props));
    } else {
      return /*#__PURE__*/React.createElement(MobileHeader.Brand, _objectSpread2({}, props));
    }
  });
}

function Menu$2(props) {
  return /*#__PURE__*/React.createElement(ReactBreakpoints.Media, null, function (_ref3) {
    var breakpoints = _ref3.breakpoints,
        currentBreakpoint = _ref3.currentBreakpoint;
    var children = props.children,
        closeParentMenu = props.closeParentMenu,
        isParentMenuOpen = props.isParentMenuOpen;
    var content = React.Children.map(children, function (child) {
      return React.cloneElement(child, _objectSpread2(_objectSpread2({}, child.props), {}, {
        closeParentMenu: closeParentMenu,
        isParentMenuOpen: isParentMenuOpen
      }));
    });

    if (breakpoints[currentBreakpoint] > breakpoints['tablet']) {
      return /*#__PURE__*/React.createElement(DesktopHeader.Menu, _objectSpread2({}, props), content);
    } else {
      return /*#__PURE__*/React.createElement(MobileHeader.Menu, _objectSpread2({}, props), content);
    }
  });
}

function Link$2(props) {
  return /*#__PURE__*/React.createElement(ReactBreakpoints.Media, null, function (_ref4) {
    var breakpoints = _ref4.breakpoints,
        currentBreakpoint = _ref4.currentBreakpoint;

    if (breakpoints[currentBreakpoint] > breakpoints['tablet']) {
      return /*#__PURE__*/React.createElement(DesktopHeader.Link, _objectSpread2({}, props));
    } else {
      return /*#__PURE__*/React.createElement(MobileHeader.Link, _objectSpread2({}, props));
    }
  });
}

function Dropdown$2(props) {
  return /*#__PURE__*/React.createElement(ReactBreakpoints.Media, null, function (_ref5) {
    var breakpoints = _ref5.breakpoints,
        currentBreakpoint = _ref5.currentBreakpoint;

    if (breakpoints[currentBreakpoint] > breakpoints['tablet']) {
      return /*#__PURE__*/React.createElement(DesktopHeader.Dropdown, _objectSpread2({}, props));
    } else {
      return /*#__PURE__*/React.createElement(MobileHeader.Dropdown, _objectSpread2({}, props));
    }
  });
}

function Divider() {
  return /*#__PURE__*/React.createElement(DividerUI, null);
}

function Contact$1(props) {
  return /*#__PURE__*/React.createElement(ReactBreakpoints.Media, null, function (_ref6) {
    var breakpoints = _ref6.breakpoints,
        currentBreakpoint = _ref6.currentBreakpoint;

    if (breakpoints[currentBreakpoint] > breakpoints['tablet']) {
      return /*#__PURE__*/React.createElement(DesktopHeader.Contact, _objectSpread2({}, props));
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
  Contact: Contact$1
};

function _templateObject2$b() {
  var data = _taggedTemplateLiteral(["\n  ", "\n"]);

  _templateObject2$b = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$i() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n  position: relative;\n  width: 100%;\n"]);

  _templateObject$i = function _templateObject() {
    return data;
  };

  return data;
}

var ImageContainerUI = styled__default('div')(_templateObject$i());
var ImageUI = styled__default('img')(_templateObject2$b(), function (_ref) {
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
  return /*#__PURE__*/React.createElement(ImageContainerUI, null, /*#__PURE__*/React.createElement(ImageUI, {
    align: align,
    alt: alt,
    height: height,
    width: width,
    src: src
  }));
}

function _templateObject2$c() {
  var data = _taggedTemplateLiteral(["\n  max-width: 100%;\n  img {\n    display: block;\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n\n  @media (min-width: ", ") {\n    min-height: calc(100vh - ", ");\n\n    img {\n      height: calc(100vh - ", ");\n    }\n  }\n\n  @media (max-width: ", ") {\n    min-height: calc(100vh - ", ");\n\n    img {\n      height: calc(100vh - ", ");\n    }\n  }\n"]);

  _templateObject2$c = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$j() {
  var data = _taggedTemplateLiteral(["\n  align-items: center;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  min-height: calc(100vh - ", ");\n  position: absolute;\n  top: ", ";\n  width: 100%;\n  text-align: center;\n\n  @media (min-width: ", ") {\n    min-height: calc(100vh - ", ");\n  }\n\n  @media (max-width: ", ") {\n    padding: 0 ", ";\n    min-height: calc(100vh - ", ");\n  }\n"]);

  _templateObject$j = function _templateObject() {
    return data;
  };

  return data;
}
var ContentUI$2 = styled__default('div')(_templateObject$j(), theme.layout.desktop.headerHeight, theme.unit(2.25), theme.breakPointsAsPixel.desktop, theme.layout.tablet.headerHeight, theme.breakPointsAsPixel.tablet, theme.unit(0.5), theme.layout.mobile.headerHeight);
var ImageUI$1 = styled__default('div')(_templateObject2$c(), theme.breakPointsAsPixel.desktop, theme.layout.tablet.headerHeight, theme.layout.tablet.headerHeight, theme.breakPointsAsPixel.tablet, theme.layout.mobile.headerHeight, theme.layout.mobile.headerHeight);

function getSrcSets(sizes, data) {
  if (!data) {
    return null;
  }

  var srcSets = sizes.map(function (size) {
    return data[size];
  });
  srcSets.push({
    dimensions: data.dimensions,
    url: data.url
  });
  return srcSets.map(function (_ref) {
    var url = _ref.url,
        width = _ref.dimensions.width;
    return "".concat(url, " ").concat(width, "w");
  }).join(',');
}

var sizes = ['360×640', '768×1024', '1024x768', '1366×768', '1600×900', '1920x1080'];
function Jumbotron (_ref) {
  var children = _ref.children,
      body = _ref.body,
      id = _ref.id,
      _ref$image = _ref.image,
      image = _ref$image === void 0 ? null : _ref$image;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ImageUI$1, null, /*#__PURE__*/React.createElement("img", {
    srcSet: getSrcSets(sizes, image)
  })), /*#__PURE__*/React.createElement(ContentUI$2, null, children));
}

function _templateObject$k() {
  var data = _taggedTemplateLiteral(["\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  min-height: calc(100vh - ", ");\n\n  @media (min-width: ", ") {\n    min-height: calc(100vh - ", ");\n  }\n\n  @media (max-width: ", ") {\n    min-height: calc(100vh - ", ");\n  }\n"]);

  _templateObject$k = function _templateObject() {
    return data;
  };

  return data;
}
var LoadingScreenContainerUI = styled__default('div')(_templateObject$k(), theme.layout.desktop.headerHeight, theme.breakPointsAsPixel.desktop, theme.layout.tablet.headerHeight, theme.breakPointsAsPixel.tablet, theme.layout.mobile.headerHeight);

function Loader() {
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg" // width={config.unit(1)}
    // height={config.unit(1)}
    ,
    viewBox: "0 0 512 512"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M256.001 0c-8.284 0-15 6.716-15 15v96.4c0 8.284 6.716 15 15 15s15-6.716 15-15V15c0-8.284-6.716-15-15-15zM256.001 385.601c-8.284 0-15 6.716-15 15V497c0 8.284 6.716 15 15 15s15-6.716 15-15v-96.399c0-8.285-6.716-15-15-15zM196.691 123.272l-48.2-83.485c-4.142-7.175-13.316-9.633-20.49-5.49-7.174 4.142-9.632 13.316-5.49 20.49l48.2 83.485c2.778 4.813 7.82 7.502 13.004 7.502 2.545 0 5.124-.648 7.486-2.012 7.174-4.142 9.632-13.316 5.49-20.49zM389.491 457.212l-48.199-83.483c-4.142-7.175-13.316-9.633-20.49-5.49-7.174 4.142-9.632 13.316-5.49 20.49l48.199 83.483c2.778 4.813 7.82 7.502 13.004 7.502 2.545 0 5.124-.648 7.486-2.012 7.174-4.142 9.632-13.316 5.49-20.49zM138.274 170.711L54.788 122.51c-7.176-4.144-16.348-1.685-20.49 5.49-4.142 7.174-1.684 16.348 5.49 20.49l83.486 48.202a14.928 14.928 0 007.486 2.012c5.184 0 10.226-2.69 13.004-7.503 4.142-7.174 1.684-16.348-5.49-20.49zM472.213 363.51l-83.484-48.199c-7.176-4.142-16.349-1.684-20.49 5.491-4.142 7.175-1.684 16.349 5.49 20.49l83.484 48.199a14.93 14.93 0 007.486 2.012c5.184 0 10.227-2.69 13.004-7.502 4.142-7.176 1.684-16.35-5.49-20.491zM111.401 241.002H15c-8.284 0-15 6.716-15 15s6.716 15 15 15h96.401c8.284 0 15-6.716 15-15s-6.716-15-15-15zM497 241.002h-96.398c-8.284 0-15 6.716-15 15s6.716 15 15 15H497c8.284 0 15-6.716 15-15s-6.716-15-15-15zM143.765 320.802c-4.142-7.175-13.314-9.633-20.49-5.49l-83.486 48.2c-7.174 4.142-9.632 13.316-5.49 20.49 2.778 4.813 7.82 7.502 13.004 7.502 2.545 0 5.124-.648 7.486-2.012l83.486-48.2c7.174-4.142 9.632-13.316 5.49-20.49zM477.702 128.003c-4.142-7.175-13.315-9.632-20.49-5.49l-83.484 48.2c-7.174 4.141-9.632 13.315-5.49 20.489 2.778 4.813 7.82 7.503 13.004 7.503a14.93 14.93 0 007.486-2.012l83.484-48.2c7.174-4.142 9.632-13.316 5.49-20.49zM191.201 368.239c-7.174-4.144-16.349-1.685-20.49 5.49l-48.2 83.485c-4.142 7.174-1.684 16.348 5.49 20.49a14.928 14.928 0 007.486 2.012c5.184 0 10.227-2.69 13.004-7.502l48.2-83.485c4.142-7.174 1.684-16.348-5.49-20.49zM384.001 34.3c-7.175-4.144-16.349-1.685-20.49 5.49l-48.199 83.483c-4.143 7.174-1.685 16.348 5.49 20.49a14.928 14.928 0 007.486 2.012c5.184 0 10.226-2.69 13.004-7.502l48.199-83.483c4.142-7.174 1.684-16.348-5.49-20.49z"
  }));
}

function Loading() {
  return /*#__PURE__*/React.createElement(LoadingScreenContainerUI, null, /*#__PURE__*/React.createElement(Loader, null), 'Loading');
}

function _templateObject4$6() {
  var data = _taggedTemplateLiteral(["\n  blockquote {\n    border: none;\n  }\n"]);

  _templateObject4$6 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$7() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n  height: ", ";\n  color: ", ";\n  opacity: 0.5;\n  font-size: ", ";\n  line-height: 1;\n  position: absolute;\n  bottom: ", ";\n  right: ", ";\n"]);

  _templateObject3$7 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$d() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n  color: ", ";\n  height: ", ";\n  opacity: 0.5;\n  font-size: ", ";\n  line-height: 1;\n  position: absolute;\n  top: ", ";\n  left: ", ";\n"]);

  _templateObject2$d = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$l() {
  var data = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  width: 100%;\n  display: block;\n  padding: ", " ", ";\n  background: ", ";\n  position: relative;\n\n  @media (max-width: ", ") {\n    padding: ", " ", ";\n  }\n"]);

  _templateObject$l = function _templateObject() {
    return data;
  };

  return data;
}
var BoxWrapper$2 = styled__default('div')(_templateObject$l(), theme.unit(2), theme.unit(1), theme.colors['light-1'], theme.breakPointsAsPixel.tablet, theme.unit(1), theme.unit(2.5));
var OpenQuoteUI$1 = styled__default('div')(_templateObject2$d(), theme.colors['dark-3'], theme.unit(2.5), theme.unit(5), theme.unit(0.25), theme.unit(0.25));
var CloseQuoteUI$1 = styled__default('div')(_templateObject3$7(), theme.unit(2.5), theme.colors['dark-3'], theme.unit(5), theme.unit(0.25), theme.unit(0.25));
var DropQuoteUI$1 = styled__default('div')(_templateObject4$6());

function Quote$1 (_ref) {
  var sidebar = _ref.sidebar;
  return /*#__PURE__*/React.createElement(BoxWrapper$2, null, /*#__PURE__*/React.createElement(OpenQuoteUI$1, null, "\u201C"), /*#__PURE__*/React.createElement(DropQuoteUI$1, null, /*#__PURE__*/React.createElement("blockquote", {
    className: "heading-3 italic ['font-2']",
    dangerouslySetInnerHTML: {
      __html: sidebar.text
    }
  })), /*#__PURE__*/React.createElement(CloseQuoteUI$1, null, "\u201D"));
}

function _templateObject2$e() {
  var data = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  max-width: ", ";\n  margin: 0 auto;\n  padding: ", ";\n  text-align: ", ";\n\n  @media (max-width: ", ") {\n    padding: ", ";\n  }\n"]);

  _templateObject2$e = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$m() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  background-color: ", ";\n"]);

  _templateObject$m = function _templateObject() {
    return data;
  };

  return data;
}

var getBgColor = function getBgColor(_ref) {
  var background = _ref.background;

  if (background === 'light') {
    return theme.colors['light-1'];
  } else if (background === 'dark') {
    return theme.colors['dark-3'];
  } else {
    return '#fff';
  }
};

var getInnerWidth = function getInnerWidth(_ref2) {
  var innerWidth = _ref2.innerWidth;

  if (innerWidth === 'medium') {
    return '750px';
  } else if (innerWidth === 'small') {
    return theme.unit(18);
  } else {
    return theme.unit(33);
  }
};

var SectionWrapperUI = styled__default('section')(_templateObject$m(), getBgColor);
var SectionUI = styled__default('div')(_templateObject2$e(), getInnerWidth, "".concat(theme.unit(1), " 0"), function (_ref3) {
  var textAlign = _ref3.textAlign;
  return textAlign;
}, theme.breakPointsAsPixel.tablet, theme.unit(0.5));

function Section (_ref) {
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
    return /*#__PURE__*/React.createElement(SectionWrapperUI, {
      background: background
    }, children);
  } else {
    return /*#__PURE__*/React.createElement(SectionWrapperUI, {
      background: background
    }, /*#__PURE__*/React.createElement(SectionUI, {
      textAlign: textAlign,
      innerWidth: inner_width
    }, children));
  }
}

function ScrollToTop(_ref) {
  var children = _ref.children,
      location = _ref.location;

  if (typeof window !== 'undefined') {
    React.useEffect(function () {
      return window.scrollTo(0, 0);
    }, [location.pathname]);
    return children;
  } else {
    return children;
  }
}

function _templateObject$n() {
  var data = _taggedTemplateLiteral(["\n\n/**\n * These values will not show up in content, but can be\n * queried by JavaScript to know which breakpoint is active.\n * Add or remove as many breakpoints as you like.\n */\nbody:before {\n  content: \"desktop\";\n  display: none;\n}\n\n\n@media (max-width: ", ") {\n  body:before {\n    content: \"tablet\";\n  }\n}\n\n@media (max-width: ", ") {\n  body:before {\n    content: \"mobile\";\n  }\n}\n\n\n/* css reset */\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\n\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\nhtml {\n  font-size: 100%;\n}\n\nbody {\n  color: ", ";\n  display: flex;\n  flex-direction: column;\n  font-family: ", ";\n  font-size: 1.125rem;\n  line-height: 1.5;\n  margin: 0;\n  overflow: auto;\n  padding: 0;\n  .is-modal-open {\n    overflow: none;\n  }\n}\n\nimg {\n  max-width: 100%;\n  height: auto;\n}\n\niframe {\n  max-width: 100%;\n}\n\n\n/* link styles */\na:active {\n  color: ", ";\n  text-decoration: none;\n}\n\na:link {\n  text-decoration: none;\n  color: ", ";\n}\n\na:hover {\n  color: ", ";\n  text-decoration: underline;\n}\n\na:visited {\n  color: ", ";\n  text-decoration: none;\n}\n\n/* list and paragraph styles */\np, ul, code {\n  padding: 0;\n  margin-bottom: ", ";\n}\n\nb {\n  font-weight: bold;\n}\n\nul {\n  list-style: disc;\n  padding-left: ", ";\n};\n}\n\nli {\n  margin-bottom: ", ";\n  margin-left: ", ";\n}\n\ncode {\n  box-sizing: border-box;\n  background-color:  ", ";\n  display: block;\n  padding: ", ";\n  color: ", ";\n  width: 100%;\n  font-family: 'Courier New', Courier, monospace;\n  white-space: normal;\n\n  font-size: ", ";\n\n\n  @media (max-width: ", ") {\n   font-size: ", ";\n  }\n\n  @media (max-width: ", ") {\n   font-size: ", ";\n  }\n}\n\n/* heading styles */\nh1, h2, h3, h4, h5, .heading-1, .heading-2, .heading-3, .heading-4, .heading-5, .heading-6 {\n  font-family: ", ";\n  padding: 0;\n  margin: 0;\n  margin-bottom: ", ";\n  line-height: 100%;\n}\n\nh1, .heading-1 {\n  font-size: ", ";\n  font-weight: 500;\n\n  @media (max-width: ", ") {\n   font-size: ", ";\n  }\n\n  @media (max-width: ", ") {\n   font-size: ", ";\n  }\n}\n\nh2, .heading-2 {\n  font-size: ", ";\n  font-weight: 500;\n\n  @media (max-width: ", ") {\n   font-size: ", ";\n  }\n\n  @media (max-width: ", ") {\n   font-size: ", ";\n  }\n}\n\nh3, .heading-3 {\n  font-size: ", ";\n  font-weight: 500;\n\n  @media (max-width: ", ") {\n   font-size: ", ";\n  }\n\n  @media (max-width: ", ") {\n   font-size: ", ";\n  }\n}\n\nh4, .heading-4 {\n  font-size: ", ";;\n  font-weight: 500;\n  margin-bottom: ", ";\n\n  @media (max-width: ", ") {\n   font-size: ", ";\n  }\n\n  @media (max-width: ", ") {\n   font-size: ", ";\n  }\n}\n\nh5, .heading-5 {\n  font-family: ", ";\n  font-size:  ", ";\n  font-weight: 500;\n\n  @media (max-width: ", ") {\n   font-size: ", ";\n  }\n\n  @media (max-width: ", ") {\n   font-size: ", ";\n  }\n}\n\nh6, .heading-6 {\n  font-family: ", ";\n  font-size:  ", ";\n  font-weight: 500;\n\n  @media (max-width: ", ") {\n   font-size: ", ";\n  }\n\n  @media (max-width: ", ") {\n   font-size: ", ";\n  }\n}\n\nh1 + h2, h1 + h2.heading-2 {\n  margin-top: -", ";\n}\n\nh2 + h4 {\n  margin-top: -", ";\n}\n\n/* table styles */\n  table {\n    border-collapse: collapse;\n    border-left: ", ";\n    border-right: ", ";\n    margin: 0;\n    width: 100%;\n  margin-bottom: ", ";\n    tr {\n      border-bottom: ", ";\n      width: 100%;\n    }\n    tr:first-child {\n      border-top: ", ";\n    }\n    td:first-child {\n      font-weight: 700;\n    }\n\n    td, th {\n      background-color: #fff;\n      padding: ", " ", ";\n    }\n\n    th {\n      background-color: ", ";\n    }\n  }\n\n\n  @media (max-width: ", ") {\n    table.responsive-collapse {\n\n    table, thead, tbody, th, td, tr {\n\t\tdisplay: block;\n\t}\n\n  thead tr {\n\t\tposition: absolute;\n\t\ttop: -9999px;\n\t\tleft: -9999px;\n\t}\n    }\n\n  table.n-plus-2 {\n  td:nth-child(n+2) {\n    display: inline-block\n\t}\n  }\n  }\n\n\n/* makes a class for each color in theme */\n  ", "\n\n/* makes a class for each font in theme */\n", "\n\n/* random text styles */\nblockquote {\n  padding: ", ";\n  background-color: ", ";\n  border:  ", ";\n  margin:  ", ";\n\n  p:last-child, ul:last-child {\n    margin-bottom: 0;\n  }\n\n}\n\n.italic {\n  font-style: italic;\n}\n\n.text-shadow-dark {\ntext-shadow: 1px 2px #000\n}\n\n.line-height-1 {\n  line-height: 1;\n}\n\n.line-height-1-2-0 {\n  line-height: 1;\n}\n\n.bold {\n  font-weight: 700;\n}\n\n.lead {\n  font-size: ", ";\n  line-height: 130%;\n  font-family: ", ";\n\n  @media (max-width: ", ") {\n   font-size: ", ";\n  }\n\n  @media (max-width: ", ") {\n   font-size: ", ";\n  }\n}\n"]);

  _templateObject$n = function _templateObject() {
    return data;
  };

  return data;
}
var GlobalStyles = styled.createGlobalStyle(_templateObject$n(), theme.breakPointsAsPixel.tablet, theme.breakPointsAsPixel.mobile, theme.colors['dark-4'], theme.typography.fonts['font-1'], theme.colors['dark-3'], theme.colors['dark-3'], theme.colors['dark-3'], theme.colors['dark-3'], theme.unit(1), theme.unit(1), theme.unit(0.25), theme.unit(0.75), theme.colors['light-1'], theme.unit(0.5), theme.colors['dark-1'], theme.typography.sizes.desktop.sm, theme.breakPointsAsPixel.tablet, theme.typography.sizes.tablet.sm, theme.breakPointsAsPixel.mobile, theme.typography.sizes.mobile.xsm, theme.typography.fonts['font-2'], theme.unit(0.5), theme.typography.sizes.desktop.xxlg, theme.breakPointsAsPixel.tablet, theme.typography.sizes.tablet.xxlg, theme.breakPointsAsPixel.mobile, theme.typography.sizes.mobile.xxlg, theme.typography.sizes.desktop.xlg, theme.breakPointsAsPixel.tablet, theme.typography.sizes.tablet.xlg, theme.breakPointsAsPixel.mobile, theme.typography.sizes.mobile.xlg, theme.typography.sizes.desktop.lg, theme.breakPointsAsPixel.tablet, theme.typography.sizes.tablet.lg, theme.breakPointsAsPixel.mobile, theme.typography.sizes.mobile.lg, theme.typography.sizes.desktop.md, theme.unit(0.3), theme.breakPointsAsPixel.tablet, theme.typography.sizes.tablet.md, theme.breakPointsAsPixel.mobile, theme.typography.sizes.mobile.md, theme.typography.fonts['font-1'], theme.typography.sizes.desktop.sm, theme.breakPointsAsPixel.tablet, theme.typography.sizes.tablet.sm, theme.breakPointsAsPixel.mobile, theme.typography.sizes.mobile.sm, theme.typography.fonts['font-1'], theme.typography.sizes.desktop.xsm, theme.breakPointsAsPixel.tablet, theme.typography.sizes.tablet.xsm, theme.breakPointsAsPixel.mobile, theme.typography.sizes.mobile.xsm, theme.unit(0.5), theme.unit(0.5), theme.border, theme.border, theme.unit(1), theme.border, theme.border, theme.unit(0.25), theme.unit(0.5), theme.colors['light-1'], theme.breakPointsAsPixel.mobile, function () {
  var colors = '';

  for (var color in theme.colors) {
    colors += ".".concat(color, "\n         {\n          color: ").concat(theme.colors[color], ";\n         }\n       ");
    colors += "a.".concat(color, ":active, a.").concat(color, ":link, a.").concat(color, ":hover, a.").concat(color, ":visited\n         {\n          color: ").concat(theme.colors[color], ";\n         }\n       ");
  }

  return colors;
}, function () {
  var fonts = '';

  for (var font in theme.typography.fonts) {
    fonts += ".".concat(font, "\n         {\n          font-family: ").concat(theme.typography.fonts[font], ";\n         }\n       ");
  }

  return fonts;
}, theme.unit(0.75), theme.colors['light-1'], theme.border, "".concat(theme.unit(1), " 0"), theme.typography.sizes.desktop.md, theme.typography.fonts['font-3'], theme.breakPointsAsPixel.tablet, theme.typography.sizes.tablet.md, theme.breakPointsAsPixel.mobile, theme.typography.sizes.mobile.md);

var config = {
  google: {
    families: ['Roboto:500,700', 'PT Serif:400,700']
  }
};

function withFontLoader(component) {
  if (typeof window !== 'undefined') {
    var WebfontLoader = require('@dr-kobros/react-webfont-loader');

    return /*#__PURE__*/React.createElement(WebfontLoader, {
      config: config
    }, component);
  }

  return component;
}

function head () {
  return /*#__PURE__*/React.createElement(React.Fragment, null, withFontLoader( /*#__PURE__*/React.createElement(GlobalStyles, null)));
}

var _short = require('short-uuid');

function getComponent$1(data, id, type) {
  var wrapperComponent = {
    blog_post: Section,
    component_section: Section,
    component_jumbotron: Jumbotron,
    component_section_rich_text: Section
  };
  var content = data.body.map(function (block) {
    return /*#__PURE__*/React.createElement(JsxParser, {
      components: {
        Article: Article,
        Banner: Banner,
        Card: Card,
        Cards: Cards,
        Form: Form,
        Faq: Faq,
        Grid: Grid,
        Image: Image,
        Quote: Quote$1
      },
      jsx: block.text,
      key: _short.generate(),
      renderInWrapper: false
    });
  });
  return React.createElement(wrapperComponent[type], _objectSpread2(_objectSpread2({}, data), {}, {
    key: "".concat(type, "-").concat(id),
    id: id
  }), content);
}

var Prismic = require('prismic-javascript');

function getPage(api, id) {
  return api.query(Prismic.Predicates.at('document.id', id)).then(function (response) {
    var data = response.results[0].data;
    var ids = data.body.map(function (section) {
      return section.section.id;
    });
    return api.getByIDs(ids).then(function (response) {
      var sections = response.results;
      return _objectSpread2(_objectSpread2({}, data), {}, {
        body: sections
      });
    });
  });
}

function getPages(apiEndpoint, apiToken) {
  return Prismic$1.getApi(apiEndpoint, {
    accessToken: apiToken
  }).then(function (api) {
    return api.query(Prismic$1.Predicates.at('document.type', 'page')).then(function (response) {
      var promises = response.results.map(function (result) {
        return getPage(api, result.id);
      });
      return Promise.all(promises).then(function (pages) {
        return pages.map(function (pageData) {
          return {
            path: pageData.slug,
            getData: function getData() {
              return pageData;
            },
            template: pageData.template && pageData.template !== 'default' ? "src/pages/".concat(pageData.template) : 'src/pages/page'
          };
        });
      });
    });
  });
}

function getPosts(apiUrl, apiToken) {
  return new Promise(function (resolve) {
    return Prismic$1.getApi(apiUrl, {
      accessToken: apiToken
    }).then(function (api) {
      return api.query(Prismic$1.Predicates.at('document.type', 'post')).then(function (response) {
        var routeData = response.results.map(function (result) {
          var data = result.data,
              id = result.id,
              first_publication_date = result.first_publication_date;
          data.type = 'blog_post';
          return {
            getData: function getData() {
              return _objectSpread2(_objectSpread2({}, data), {}, {
                id: id,
                first_publication_date: first_publication_date,
                layout_style: 'post'
              });
            },
            path: data.slug,
            template: 'src/containers/_post'
          };
        });
        var list = response.results.map(function (_ref) {
          var data = _ref.data,
              id = _ref.id;
          var image = data.image,
              title = data.title,
              slug = data.slug;
          return {
            id: id,
            image: image,
            path: slug,
            title: title
          };
        });
        routeData.push({
          getData: function getData() {
            return {
              posts: list
            };
          },
          path: '/blog/',
          template: 'src/containers/blog'
        });
        resolve(routeData);
      });
    });
  });
}

var _short$1 = require('short-uuid');

function getMetaTags (data, defaultTitle, defaultDescription) {
  console.log(data);
  var ogDescription = data.og_description || data.meta_description || defaultDescription;
  var ogImage = data.og_image;
  var ogTitle = data.og_title || data.meta_title || defaultTitle;
  var ogType = data.og_type;
  var metaDescription = data.meta_description || data.og_description || defaultDescription;
  var metaTitle = data.meta_title || data.og_title || defaultTitle;
  var metaNoindex = data.meta_noindex;
  return [/*#__PURE__*/React.createElement("meta", {
    property: "og:description",
    content: ogDescription,
    key: _short$1.generate()
  }), /*#__PURE__*/React.createElement("meta", {
    property: "og:image",
    content: ogImage,
    key: _short$1.generate()
  }), /*#__PURE__*/React.createElement("meta", {
    property: "og:title",
    content: ogTitle,
    key: _short$1.generate()
  }), /*#__PURE__*/React.createElement("meta", {
    property: "og:type",
    content: ogType,
    key: _short$1.generate()
  }), /*#__PURE__*/React.createElement("meta", {
    name: "description",
    content: metaDescription,
    key: _short$1.generate()
  }), /*#__PURE__*/React.createElement("title", {
    key: _short$1.generate()
  }, metaTitle), metaNoindex ? /*#__PURE__*/React.createElement("meta", {
    name: "robots",
    content: "noindex"
  }) : null];
}

var utils = {
  getComponent: getComponent$1,
  getMetaTags: getMetaTags,
  getPages: getPages,
  getPosts: getPosts,
  getSrcSets: getSrcSets,
  makePixelValue: makePixelValue
};

exports.Article = Article;
exports.Banner = Banner;
exports.Body = body;
exports.BreadCrumb = BreadCrumb;
exports.Button = Button;
exports.Card = Card;
exports.Cards = Cards;
exports.Faq = Faq;
exports.Footer = Footer;
exports.Form = Form;
exports.Grid = Grid;
exports.Head = head;
exports.Header = header;
exports.Image = Image;
exports.Jumbotron = Jumbotron;
exports.LoadingScreen = Loading;
exports.Quote = Quote$1;
exports.ScrollToTop = ScrollToTop;
exports.Section = Section;
exports.utils = utils;
