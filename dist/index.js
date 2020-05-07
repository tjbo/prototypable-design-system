'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var styled = require('styled-components');
var styled__default = _interopDefault(styled);
var ReactBreakpoints = require('react-breakpoints');
var ReactBreakpoints__default = _interopDefault(ReactBreakpoints);
var Prismic$1 = _interopDefault(require('prismic-javascript'));

function Article(_ref) {
  var body = _ref.body;
  return /*#__PURE__*/React.createElement("article", {
    dangerouslySetInnerHTML: {
      __html: body.text
    }
  });
}

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
  return function () {
    var Super = _getPrototypeOf(Derived),
        result;

    if (_isNativeReflectConstruct()) {
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
    mobile: 600,
    tablet: 1025,
    desktop: 1280
  },
  breakPointsAsPixel: {
    mobile: '600px',
    tablet: '1025px',
    desktop: '1280px'
  },
  colors: (_colors = {}, _defineProperty(_colors, 'dark-1', '#000000'), _defineProperty(_colors, 'dark-2', '#777777'), _defineProperty(_colors, 'dark-3', '#0090e7'), _defineProperty(_colors, 'dark-4', '#454545'), _defineProperty(_colors, 'dark-5', '#0066a3'), _defineProperty(_colors, 'light-1', '#f5faff'), _defineProperty(_colors, 'light-2', '36,139,204'), _defineProperty(_colors, 'light-3', '#ffffff'), _colors),
  typography: {
    fonts: (_fonts = {}, _defineProperty(_fonts, 'font-1', 'PT Serif'), _defineProperty(_fonts, 'font-2', 'Roboto'), _defineProperty(_fonts, 'font-3', 'PT Serif Caption'), _fonts),
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

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  color: #fff;\n  text-align: center;\n  padding: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var BannerUI = styled__default('div')(_templateObject(), theme.unit(0.5));

function Banner (_ref) {
  var body = _ref.body,
      children = _ref.children;

  if (body) {
    return /*#__PURE__*/React.createElement(BannerUI, null, /*#__PURE__*/React.createElement("span", {
      className: "heading-3 light-3 font-3 italic",
      dangerouslySetInnerHTML: {
        __html: body.text
      }
    }));
  } else {
    return /*#__PURE__*/React.createElement(BannerUI, null, children);
  }
}

function _templateObject$1() {
  var data = _taggedTemplateLiteral(["\n  margin-top: ", ";\n  min-height: 100vh;\n\n  @media (max-width: ", ") {\n    margin-top: ", ";\n  }\n\n  @media (max-width: ", ") {\n    margin-top: ", ";\n  }\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
var BodyUI = styled__default('div')(_templateObject$1(), theme.layout.desktop.headerHeight, theme.breakPointsAsPixel.desktop, theme.layout.mobile.headerHeight, theme.breakPointsAsPixel.mobile, theme.layout.mobile.headerHeight);

function body (_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React.createElement(ReactBreakpoints__default, {
    breakpoints: theme.breakPoints
  }, /*#__PURE__*/React.createElement(BodyUI, null, children));
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

function _templateObject$2() {
  var data = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  border: ", ";\n  padding: ", " ", ";\n  margin-bottom: ", ";\n\n  .title {\n    font-weight: bold;\n    flex-grow: 0;\n  }\n\n  ul {\n    list-style: none;\n    margin: 0;\n    padding-left: 0;\n    li {\n      margin-left: 0;\n    }\n  }\n\n  @media (max-width: ", ") {\n    ul {\n      column-count: 3;\n    }\n  }\n\n  @media (max-width: 800px) {\n    ul {\n      column-count: 2;\n    }\n  }\n\n  @media (max-width: ", ") {\n    ul {\n      column-count: 1;\n    }\n  }\n"]);

  _templateObject$2 = function _templateObject() {
    return data;
  };

  return data;
}
var BoxWrapper = styled__default('div')(_templateObject$2(), theme.border, theme.unit(0.25), theme.unit(0.5), theme.unit(0.5), theme.breakPointsAsPixel.tablet, theme.breakPointsAsPixel.mobile);

var Box1 = /*#__PURE__*/function (_React$Component) {
  _inherits(Box1, _React$Component);

  var _super = _createSuper(Box1);

  function Box1() {
    _classCallCheck(this, Box1);

    return _super.apply(this, arguments);
  }

  _createClass(Box1, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(BoxWrapper, {
        dangerouslySetInnerHTML: {
          __html: this.props.sidebar.text
        }
      });
    }
  }]);

  return Box1;
}(React.Component);

function _templateObject$3() {
  var data = _taggedTemplateLiteral(["\n  background-color: ", ";\n  border: 0;\n  border-radius: 5px;\n  color: #fff;\n  cursor: pointer;\n  display: block;\n  font-family: ", ";\n  font-size: ", ";\n  font-weight: 700;\n  height: ", ";\n  margin-top: ", ";\n  width: 100%;\n  max-width: ", "px;\n  background-image: linear-gradient(\n    to bottom,\n    #e52d27 0%,\n    #b31217 41%,\n    #e52d27 100%\n  );\n  ", "\n\n  border:1px solid #d02718;\n  box-shadow: inset 0px 1px 0px 0px #f5978e;\n"]);

  _templateObject$3 = function _templateObject() {
    return data;
  };

  return data;
}
var ButtonUI = styled__default('button')(_templateObject$3(), theme.colors['dark-2'], theme.typography.fonts['font-2'], theme.unit(0.75), theme.unit(1.75), theme.unit(0.66), function (_ref) {
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

var DefaultLink = function DefaultLink(href) {
  return /*#__PURE__*/React.createElement("a", {
    href: href
  });
};

function button (props) {
  var align = props.align,
      href = props.href,
      _props$text = props.text,
      text = _props$text === void 0 ? 'Submit' : _props$text,
      onClick = props.onClick,
      _props$maxWidth = props.maxWidth,
      maxWidth = _props$maxWidth === void 0 ? 300 : _props$maxWidth,
      _props$link = props.link,
      link = _props$link === void 0 ? DefaultLink : _props$link;

  if (href && link) {
    return /*#__PURE__*/React.createElement(ButtonUI, {
      align: align,
      onClick: onClick,
      maxWidth: maxWidth
    });
  } else {
    return /*#__PURE__*/React.createElement(ButtonUI, {
      align: align,
      onClick: onClick,
      maxWidth: maxWidth
    }, text);
  }
}

function _templateObject5() {
  var data = _taggedTemplateLiteral([""]);

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

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  height: 200px;\n  text-align: center;\n  background-size: cover;\n  background-position: center;\n\n  img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  background: #fff;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$4() {
  var data = _taggedTemplateLiteral(["\n  * {\n    box-sizing: border-box;\n  }\n\n  .card {\n    line-height: 1.75;\n    background: #fff;\n    border: ", ";\n\n    /* Position child elements relative to this element */\n    .aspect-ratio-box {\n      position: relative;\n    }\n\n    /* Create a pseudo element that uses padding-bottom to take up space */\n    .aspect-ratio-box::after {\n      display: block;\n      content: '';\n      /* 16:9 aspect ratio */\n      padding-bottom: 56.25%;\n    }\n\n    /* Image is positioned absolutely relative to the parent element */\n    .aspect-ratio-box img {\n      /* Image should match parent box size */\n      position: absolute;\n      left: 0;\n      top: 0;\n      width: 100%;\n      height: 100%;\n    }\n    .content {\n      padding: ", ";\n    }\n  }\n"]);

  _templateObject$4 = function _templateObject() {
    return data;
  };

  return data;
}
var CardsWrapperUI = styled__default('div')(_templateObject$4(), theme.border, "".concat(theme.unit(0.5), " ").concat(theme.unit(0.66)));
var ContentUI = styled__default('div')(_templateObject2());
var CardImageUI = styled__default('div')(_templateObject3());
var FieldTitleUI = styled__default('b')(_templateObject4());
var FieldTextUI = styled__default('span')(_templateObject5());

function _templateObject$5() {
  var data = _taggedTemplateLiteral(["\n  * {\n    box-sizing: border-box;\n  }\n\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  flex-wrap: wrap;\n\n  .col {\n    min-width: 32.5%;\n    max-width: 32.5%;\n    margin-bottom: 1.25%;\n    flex: 1;\n\n    @media (max-width: ", ") {\n      margin-bottom: ", ";\n    }\n  }\n\n  @media (min-width: ", ") and (max-width: ", ") {\n    .col {\n      min-width: 49%;\n      max-width: 49%;\n    }\n  }\n\n  @media (max-width: ", ") {\n    .col {\n      display: block;\n      min-width: 100%;\n      max-width: 100%;\n    }\n  }\n"]);

  _templateObject$5 = function _templateObject() {
    return data;
  };

  return data;
}
var GridWrapperUI = styled__default('div')(_templateObject$5(), theme.breakPointsAsPixel.tablet, theme.unit(0.5), function (_ref) {
  var theme = _ref.theme;
  return theme.breakPoints.mobile;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.breakPoints.tablet;
}, theme.breakPointsAsPixel.mobile);

function Grid(_ref) {
  var body = _ref.body,
      children = _ref.children;

  if (body) {
    return /*#__PURE__*/React.createElement(GridWrapperUI, {
      dangerouslySetInnerHTML: {
        __html: body
      }
    });
  } else {
    return /*#__PURE__*/React.createElement(GridWrapperUI, null, children);
  }
}

function Cards (_ref) {
  var body = _ref.body,
      children = _ref.children;

  if (body) {
    return /*#__PURE__*/React.createElement(CardsWrapperUI, null, /*#__PURE__*/React.createElement(Grid, {
      body: body.text
    }));
  } else {
    return /*#__PURE__*/React.createElement(CardsWrapperUI, null, /*#__PURE__*/React.createElement(Grid, null, children));
  }
}

function _templateObject$6() {
  var data = _taggedTemplateLiteral(["\n  details {\n    display: flex;\n    border: ", ";\n    box-sizing: border-box;\n    margin-bottom: ", ";\n    padding: ", ";\n    background-color: #fff;\n    min-width: 100%;\n    h4 {\n      width: calc(100% - 20px);\n    }\n\n    summary {\n      width: 100%;\n      color: ", ";\n      cursor: pointer;\n      font-size: ", ";\n      font-weight: 500;\n      position: relative;\n      padding: 0;\n      &:after {\n        content: '';\n        color: ", ";\n        border: solid ", ";\n        border-width: 0 3px 3px 0;\n        display: inline-block;\n        padding: 4px;\n        transform: rotate(-135deg);\n        -webkit-transform: rotate(-135deg);\n        position: absolute;\n        right: 0;\n        top: 10px;\n      }\n      :focus &:after {\n      }\n      &:focus {\n        outline: none;\n      }\n      &::-webkit-details-marker {\n        display: none;\n      }\n    }\n  }\n\n  details[open] summary:after {\n    transform: rotate(45deg);\n    -webkit-transform: rotate(45deg);\n  }\n"]);

  _templateObject$6 = function _templateObject() {
    return data;
  };

  return data;
}
var FaqWrapperUI = styled__default('div')(_templateObject$6(), theme.border, theme.unit(1), theme.unit(1), theme.colors['dark-4'], theme.unit(0.66), theme.colors['dark-1'], theme.colors['dark-4']);

function Faq (_ref) {
  var body = _ref.body;
  return /*#__PURE__*/React.createElement(FaqWrapperUI, {
    dangerouslySetInnerHTML: {
      __html: body.text
    }
  });
}

function _templateObject4$1() {
  var data = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  display: flex;\n  justify-content: space-between;\n  background-color: ", ";\n  padding: ", ";\n  padding-right: ", ";\n  font-family: ", ";\n\n  @media (max-width: ", ") {\n    flex-direction: column;\n    text-align: center;\n  }\n\n  ", " {\n    color: #fff;\n    white-space: nowrap;\n    font-style: normal;\n    a:active,\n    a:visited,\n    a:hover,\n    a:link {\n      color: #fff;\n      text-decoration: none;\n      font-family: ", ";\n      font-size: ", ";\n      text-transform: uppercase;\n    }\n    font-family: ", ";\n  }\n\n  ", " {\n    font-size: ", ";\n    color: #fff;\n    margin-right: ", ";\n  }\n"]);

  _templateObject4$1 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$1() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject3$1 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$1() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject2$1 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$7() {
  var data = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  display: block;\n  background-color: ", ";\n  max-width: 100%;\n  flex-shrink: 0;\n"]);

  _templateObject$7 = function _templateObject() {
    return data;
  };

  return data;
}
var FooterUI = styled__default('footer')(_templateObject$7(), theme.colors['dark-1']);
var AddressUI = styled__default('address')(_templateObject2$1());
var FinePrintUI = styled__default('div')(_templateObject3$1());
var FooterUIInner = styled__default('div')(_templateObject4$1(), theme.colors['dark-1'], "".concat(theme.unit(0.5), " ").concat(theme.unit(0.75)), theme.unit(1), theme.typography.fonts['font-1'], theme.breakPointsAsPixel.mobile, AddressUI, theme.typography.fonts['font-2'], theme.unit(0.65), theme.typography.fonts['font-2'], FinePrintUI, theme.unit(0.4), theme.unit(1));

function Footer(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React.createElement(FooterUI, null, /*#__PURE__*/React.createElement(FooterUIInner, null, children));
}

Footer.Address = AddressUI;
Footer.FinePrint = FinePrintUI;

function _templateObject5$1() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  position: relative;\n"]);

  _templateObject5$1 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$2() {
  var data = _taggedTemplateLiteral(["\n  align-items: center;\n  box-sizing: border-box;\n  display: flex;\n  font-family: ", ";\n  justify-content: center;\n  height: ", ";\n  a:visited,\n  a:link {\n    color: #fff;\n    text-decoration: none;\n  }\n  color: #fff;\n  padding: 0;\n  padding-left: ", ";\n  a:active,\n  a:hover {\n    color: ", ";\n    cursor: pointer;\n  }\n"]);

  _templateObject4$2 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$2() {
  var data = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  cursor: pointer;\n  display: block;\n  height: ", ";\n  position: relative;\n  float: left;\n\n  ul {\n    background-color: #fff;\n    box-sizing: border-box;\n    display: none;\n    list-style: none;\n    margin: 0;\n    width: 250px;\n    padding-left: 0;\n    position: relative;\n    z-index: 1;\n    border: ", ";\n    display: none;\n    color: ", ";\n    cursor: pointer;\n    position: absolute;\n    margin-right: -125px;\n    right: 50%;\n    top: 100%;\n\n    li {\n      box-sizing: border-box;\n      cursor: pointer;\n      margin-left: 0;\n      a {\n        :hover {\n          background-color: ", ";\n          color: #fff;\n          text-decoration: none;\n        }\n        box-sizing: border-box;\n        display: block;\n        font-family: ", ";\n        margin-left: 0;\n        min-width: 100%;\n        padding: ", ";\n      }\n    }\n  }\n\n  :hover {\n    ul {\n      display: block;\n    }\n  }\n"]);

  _templateObject3$2 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$2() {
  var data = _taggedTemplateLiteral(["\n  align-items: center;\n  background-color: ", ";\n  box-sizing: border-box;\n  display: flex;\n  height: ", ";\n  flex-direction: row;\n  justify-content: space-between;\n  padding: ", ";\n  width: 100%;\n  z-index: 1;\n  padding-right: 75px;\n"]);

  _templateObject2$2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$8() {
  var data = _taggedTemplateLiteral(["\n  background-color: ", ";\n  box-sizing: border-box;\n  display: block;\n  height: ", ";\n  width: 100%;\n  position: fixed;\n  top: 0;\n  z-index: 1;\n"]);

  _templateObject$8 = function _templateObject() {
    return data;
  };

  return data;
}
var ContainerUI = styled__default('header')(_templateObject$8(), theme.colors['dark-1'], theme.layout.desktop.headerHeight);
var ContainerInnerUI = styled__default('div')(_templateObject2$2(), theme.colors['dark-1'], theme.layout.desktop.headerHeight, "0 ".concat(theme.unit(0.75), " 0 ").concat(theme.unit(0.25)));
var DropdownUI = styled__default('div')(_templateObject3$2(), theme.layout.desktop.headerHeight, theme.border, theme.colors['dark-3'], theme.colors['dark-5'], theme.typography.fonts['font-2'], theme.unit(0.25));
var LinkUI = styled__default('div')(_templateObject4$2(), theme.typography.fonts['font-2'], theme.layout.desktop.headerHeight, theme.unit(1), theme.colors['dark-3']);
var MenuUI = styled__default('div')(_templateObject5$1());

function Container(props) {
  return /*#__PURE__*/React.createElement(ContainerUI, null, /*#__PURE__*/React.createElement(ContainerInnerUI, null, props.children));
}

var Brand = function Brand(_ref) {
  var children = _ref.children;
  return children;
};

function Dropdown(_ref2) {
  var children = _ref2.children,
      text = _ref2.text;
  return /*#__PURE__*/React.createElement(DropdownUI, null, /*#__PURE__*/React.createElement(Link, null, text), /*#__PURE__*/React.createElement("ul", null, React.Children.map(children, function (child) {
    return /*#__PURE__*/React.createElement("li", null, React.cloneElement(child, {}));
  })));
}

function Link(_ref3) {
  var children = _ref3.children;
  return /*#__PURE__*/React.createElement(LinkUI, null, children);
}

function Menu(_ref4) {
  var children = _ref4.children;
  return /*#__PURE__*/React.createElement(MenuUI, null, children);
}

var DesktopHeader = {
  Brand: Brand,
  Container: Container,
  Dropdown: Dropdown,
  Link: Link,
  Menu: Menu
};

function _templateObject4$3() {
  var data = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  background-color: ", ";\n  display: block;\n  left: 0;\n  min-height: 100vh;\n  padding-top: ", ";\n  position: absolute;\n  top: 0;\n  height: 100%;\n  width: 100%;\n  min-height: 100vh;\n  overflow: auto;\n"]);

  _templateObject4$3 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$3() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  cursor: pointer;\n  box-sizing: border-box;\n  font-family: ", ";\n  font-size: ", ";\n  margin: 0;\n  padding: ", ";\n  position: relative;\n  text-align: center;\n  width: auto;\n  text-transform: uppercase;\n  :hover {\n    background-color: ", ";\n    padding: ", ";\n  }\n  a:active,\n  a:visited,\n  a:hover,\n  a:link {\n    color: #fff;\n    display: inline-block;\n    min-width: 100%;\n    text-decoration: none;\n  }\n  background-color: ", ";\n"]);

  _templateObject3$3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$3() {
  var data = _taggedTemplateLiteral(["\n  align-items: center;\n  background-color: ", ";\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: row;\n  height: ", ";\n  justify-content: space-between;\n  padding: ", ";\n  width: 100%;\n  z-index: 1;\n"]);

  _templateObject2$3 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$9() {
  var data = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  position: fixed;\n  z-index: 1;\n  top: 0;\n  display: block;\n  background-color: ", ";\n  height: ", ";\n  width: 100%;\n"]);

  _templateObject$9 = function _templateObject() {
    return data;
  };

  return data;
}
var ContainerUI$1 = styled__default('div')(_templateObject$9(), theme.colors['dark-1'], theme.layout.mobile.headerHeight);
var ContainerInnerUI$1 = styled__default('div')(_templateObject2$3(), theme.colors['dark-1'], theme.layout.mobile.headerHeight, "0 ".concat(theme.unit(0.75), " 0 ").concat(theme.unit(0.25)));
var LinkUI$1 = styled__default('div')(_templateObject3$3(), theme.colors['light-1'], theme.typography.fonts['font-2'], theme.unit(0.75), theme.unit(0.25), theme.colors['dark-5'], theme.unit(0.25), function (_ref) {
  var isOpen = _ref.isOpen;
  return isOpen && "".concat(theme.colors['dark-5']);
});
var MenuUI$1 = styled__default('nav')(_templateObject4$3(), theme.colors['dark-3'], theme.layout.mobile.headerHeight);

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n  height: ", ";\n  margin: (", ") auto ", " auto;\n  margin-top: -", ";\n  position: relative;\n  width: ", ";\n  z-index: 9999;\n  cursor: pointer;\n"]);

  _templateObject6 = function _templateObject6() {
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

function _templateObject4$4() {
  var data = _taggedTemplateLiteral(["\n  top: 100%;\n  transform: ", ";\n"]);

  _templateObject4$4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$4() {
  var data = _taggedTemplateLiteral(["\n  top: 50%;\n  opacity: ", ";\n"]);

  _templateObject3$4 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$4() {
  var data = _taggedTemplateLiteral(["\n  top: 0;\n  transform: ", ";\n"]);

  _templateObject2$4 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$a() {
  var data = _taggedTemplateLiteral(["\n  background: #fff;\n  border-radius: (", ");\n  display: block;\n  height: ", ";\n  left: 0;\n  position: absolute;\n  transition: transform 500ms ease;\n  width: 100%;\n"]);

  _templateObject$a = function _templateObject() {
    return data;
  };

  return data;
}
var heightLine = 3;
var heightIcon = 16;
var translateY = heightIcon / 2;
var translateY1 = makePixelValue(translateY);
var LineUI = styled__default('span')(_templateObject$a(), makePixelValue(heightLine / 2), makePixelValue(heightLine));
var Line1UI = styled__default(LineUI)(_templateObject2$4(), function (props) {
  return props.isOpen ? "translateY(".concat(translateY1, ") rotate(45deg) translateX(0)") : 'rotate(0deg)';
});
var Line2UI = styled__default(LineUI)(_templateObject3$4(), function (props) {
  return props.isOpen ? "0" : '1';
});
var Line3UI = styled__default(LineUI)(_templateObject4$4(), function (props) {
  return props.isOpen ? "translateY(-".concat(translateY1, ") rotate(-45deg) translateX(0)") : 'rotate(0deg)';
});
var ContainerUI$2 = styled__default('div')(_templateObject5$2(), theme.unit(0.5));
var ContainerInnerUI$2 = styled__default('div')(_templateObject6(), makePixelValue(heightIcon), makePixelValue(heightIcon * 2), heightIcon, theme.unit(0.125), theme.unit(1));

function TriggerIcon(_ref) {
  var isOpen = _ref.isOpen,
      onClick = _ref.onClick;
  return /*#__PURE__*/React.createElement(ContainerUI$2, {
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

function _templateObject2$5() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  &:after {\n    content: '';\n    color: ", ";\n    border: solid ", ";\n    border-width: 0 4px 4px 0;\n    display: inline-block;\n    margin-left: ", ";\n    padding: 4px;\n    transform: ", ";\n    position: absolute;\n    top: -", ";\n  }\n"]);

  _templateObject2$5 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$b() {
  var data = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  cursor: pointer;\n  font-family: ", ";\n  display: block;\n  position: relative;\n\n  ul {\n    position: relative;\n    box-sizing: border-box;\n    display: block;\n    list-style: none;\n    margin: 0;\n    padding-left: 0;\n    z-index: 1;\n    min-width: 100%;\n\n    li {\n      cursor: pointer;\n      display: flex;\n      font-size: ", ";\n      justify-content: center;\n      align-content: center;\n      box-sizing: border-box;\n      min-width: 100%;\n      margin-left: 0;\n      text-align: center;\n      text-transform: uppercase;\n      a:active,\n      a:hover,\n      a:link,\n      a:visited {\n        color: #fff;\n        display: inline-block;\n        margin-left: 0;\n        min-width: 100%;\n        padding: ", ";\n        text-decoration: none;\n      }\n      a:hover {\n        background-color: ", ";\n      }\n    }\n  }\n  :hover {\n    ul {\n      display: block;\n    }\n  }\n"]);

  _templateObject$b = function _templateObject() {
    return data;
  };

  return data;
}
var DropdownUI$1 = styled__default('span')(_templateObject$b(), theme.typography.fonts['font-2'], theme.unit(0.75), theme.unit(0.25), theme.colors['dark-5']);
var LinkArrowUI = styled__default('div')(_templateObject2$5(), theme.colors['light-1'], theme.colors['light-1'], theme.unit(2.5), function (_ref) {
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
      return /*#__PURE__*/React.createElement(ContainerUI$1, null, /*#__PURE__*/React.createElement(ContainerInnerUI$1, null, /*#__PURE__*/React.createElement(TriggerIcon, {
        isOpen: isOpen,
        onClick: this.toggleMenu
      }), React.Children.map(children, function (child) {
        return React.cloneElement(child, _objectSpread2({}, child.props, {
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
      return React.cloneElement(child, _objectSpread2({}, child.props, {
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

function _templateObject$c() {
  var data = _taggedTemplateLiteral(["\n  margin: 0;\n  padding: 0;\n  border-top: ", ";\n  min-width: 100%;\n  display: block;\n"]);

  _templateObject$c = function _templateObject() {
    return data;
  };

  return data;
}
var DividerUI = styled__default('div')(_templateObject$c(), theme.border);

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

      var children = this.props.children;
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
      return React.cloneElement(child, _objectSpread2({}, child.props, {
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

var header = {
  Brand: Brand$2,
  Container: Container$2,
  Divider: Divider,
  Dropdown: Dropdown$2,
  Link: Link$2,
  Menu: Menu$2
};

function _templateObject2$6() {
  var data = _taggedTemplateLiteral(["\n  max-width: 100%;\n  img {\n    display: block;\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n\n  @media (min-width: ", ") {\n    min-height: calc(100vh - ", ");\n\n    img {\n      height: calc(100vh - ", ");\n    }\n  }\n\n  @media (max-width: ", ") {\n    min-height: calc(100vh - ", ");\n\n    img {\n      height: calc(100vh - ", ");\n    }\n  }\n"]);

  _templateObject2$6 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$d() {
  var data = _taggedTemplateLiteral(["\n  align-items: center;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  min-height: calc(100vh - ", ");\n  position: absolute;\n  top: ", ";\n  width: 100%;\n  text-align: center;\n\n  @media (min-width: ", ") {\n    min-height: calc(100vh - ", ");\n  }\n\n  @media (max-width: ", ") {\n    padding: 0 ", ";\n    min-height: calc(100vh - ", ");\n  }\n"]);

  _templateObject$d = function _templateObject() {
    return data;
  };

  return data;
}
var ContentUI$1 = styled__default('div')(_templateObject$d(), theme.layout.desktop.headerHeight, theme.unit(2.25), theme.breakPointsAsPixel.desktop, theme.layout.tablet.headerHeight, theme.breakPointsAsPixel.tablet, theme.unit(0.5), theme.layout.mobile.headerHeight);
var ImageUI = styled__default('div')(_templateObject2$6(), theme.breakPointsAsPixel.desktop, theme.layout.tablet.headerHeight, theme.layout.tablet.headerHeight, theme.breakPointsAsPixel.tablet, theme.layout.mobile.headerHeight, theme.layout.mobile.headerHeight);

var sizes = ['360×640', '768×1024', '1024x768', '1366×768', '1600×900', '1920x1080'];

function getSrcSets(image) {
  if (!image) {
    return null;
  }

  return sizes.map(function (size) {
    var _image$size = image[size],
        width = _image$size.dimensions.width,
        url = _image$size.url;
    return "".concat(url, " ").concat(width, "w");
  }).join(',');
}

function Jumbotron (_ref) {
  var body = _ref.body,
      id = _ref.id,
      _ref$image = _ref.image,
      image = _ref$image === void 0 ? null : _ref$image;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ImageUI, {
    key: "".concat(id, "-jumbotron-image")
  }, /*#__PURE__*/React.createElement("img", {
    srcSet: getSrcSets(image)
  })), /*#__PURE__*/React.createElement(ContentUI$1, {
    dangerouslySetInnerHTML: {
      __html: body && body.text
    },
    key: "".concat(id, "-jumbotron-content")
  }));
}

function _templateObject$e() {
  var data = _taggedTemplateLiteral(["\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  min-height: calc(100vh - ", ");\n\n  @media (min-width: ", ") {\n    min-height: calc(100vh - ", ");\n  }\n\n  @media (max-width: ", ") {\n    min-height: calc(100vh - ", ");\n  }\n"]);

  _templateObject$e = function _templateObject() {
    return data;
  };

  return data;
}
var LoadingScreenContainerUI = styled__default('div')(_templateObject$e(), theme.layout.desktop.headerHeight, theme.breakPointsAsPixel.desktop, theme.layout.tablet.headerHeight, theme.breakPointsAsPixel.tablet, theme.layout.mobile.headerHeight);

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

function _templateObject4$5() {
  var data = _taggedTemplateLiteral(["\n  blockquote {\n    border: none;\n  }\n"]);

  _templateObject4$5 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$5() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n  height: ", ";\n  color: ", ";\n  opacity: 0.5;\n  font-size: ", ";\n  line-height: 1;\n  position: absolute;\n  bottom: ", ";\n  right: ", ";\n"]);

  _templateObject3$5 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$7() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n  color: ", ";\n  height: ", ";\n  opacity: 0.5;\n  font-size: ", ";\n  line-height: 1;\n  position: absolute;\n  top: ", ";\n  left: ", ";\n"]);

  _templateObject2$7 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$f() {
  var data = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  width: 100%;\n  display: block;\n  padding: ", " ", ";\n  background: ", ";\n  position: relative;\n\n  @media (max-width: ", ") {\n    padding: ", " ", ";\n  }\n"]);

  _templateObject$f = function _templateObject() {
    return data;
  };

  return data;
}
var BoxWrapper$1 = styled__default('div')(_templateObject$f(), theme.unit(2), theme.unit(1), theme.colors['light-1'], theme.breakPointsAsPixel.tablet, theme.unit(1), theme.unit(2.5));
var OpenQuoteUI = styled__default('div')(_templateObject2$7(), theme.colors['dark-3'], theme.unit(2.5), theme.unit(5), theme.unit(0.25), theme.unit(0.25));
var CloseQuoteUI = styled__default('div')(_templateObject3$5(), theme.unit(2.5), theme.colors['dark-3'], theme.unit(5), theme.unit(0.25), theme.unit(0.25));
var DropQuoteUI = styled__default('div')(_templateObject4$5());

function Quote (_ref) {
  var sidebar = _ref.sidebar;
  return /*#__PURE__*/React.createElement(BoxWrapper$1, null, /*#__PURE__*/React.createElement(OpenQuoteUI, null, "\u201C"), /*#__PURE__*/React.createElement(DropQuoteUI, null, /*#__PURE__*/React.createElement("blockquote", {
    className: "heading-3 italic ['font-2']",
    dangerouslySetInnerHTML: {
      __html: sidebar.text
    }
  })), /*#__PURE__*/React.createElement(CloseQuoteUI, null, "\u201D"));
}

function _templateObject5$3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n\n  @media (max-width: ", ") {\n    flex-direction: column;\n\n    ", " {\n      min-width: 100%;\n    }\n\n    ", " {\n      margin-left: 0;\n    }\n  }\n"]);

  _templateObject5$3 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$6() {
  var data = _taggedTemplateLiteral(["\n  flex: ", ";\n  margin-left: ", ";\n"]);

  _templateObject4$6 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$6() {
  var data = _taggedTemplateLiteral(["\n  flex: 2;\n"]);

  _templateObject3$6 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$8() {
  var data = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  max-width: ", ";\n  margin: 0 auto;\n  padding: ", ";\n  text-align: ", ";\n\n  @media (max-width: ", ") {\n    padding: ", ";\n  }\n"]);

  _templateObject2$8 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$g() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  background-color: ", ";\n"]);

  _templateObject$g = function _templateObject() {
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
    return '550px';
  } else {
    return theme.unit(33);
  }
};

var SectionWrapperUI = styled__default('section')(_templateObject$g(), getBgColor);
var SectionUI = styled__default('div')(_templateObject2$8(), getInnerWidth, "".concat(theme.unit(1), " 0"), function (_ref3) {
  var textAlign = _ref3.textAlign;
  return textAlign;
}, theme.breakPointsAsPixel.tablet, theme.unit(0.5));
var Col1 = styled__default('div')(_templateObject3$6());
var Col2 = styled__default('div')(_templateObject4$6(), function (_ref4) {
  var sidebar_width = _ref4.sidebar_width;
  return sidebar_width;
}, theme.unit(0.5));
var ColWrapper = styled__default('div')(_templateObject5$3(), theme.breakPointsAsPixel.tablet, Col1, Col2);

function getTitle(title, layout_style) {
  var show_title = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  if (!title[0] || !title[0].text || layout_style === 'banner' || !!!show_title) {
    return '';
  }

  var headings = {
    heading1: 'h1',
    heading2: 'h2',
    heading3: 'h3',
    heading4: 'h4'
  };
  return React.createElement(headings[title[0].type], {
    dangerouslySetInnerHTML: {
      __html: title[0].text
    }
  });
}

function Section (_ref) {
  var _ref$children = _ref.children,
      children = _ref$children === void 0 ? [] : _ref$children,
      _ref$textAlign = _ref.textAlign,
      textAlign = _ref$textAlign === void 0 ? 'left' : _ref$textAlign,
      _ref$background = _ref.background,
      background = _ref$background === void 0 ? 'default' : _ref$background,
      id = _ref.id,
      _ref$isFullWidth = _ref.isFullWidth,
      isFullWidth = _ref$isFullWidth === void 0 ? false : _ref$isFullWidth,
      _ref$inner_width = _ref.inner_width,
      inner_width = _ref$inner_width === void 0 ? 'big' : _ref$inner_width,
      _ref$sidebar_width = _ref.sidebar_width,
      sidebar_width = _ref$sidebar_width === void 0 ? 1 : _ref$sidebar_width,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? '' : _ref$title;

  if (isFullWidth) {
    return /*#__PURE__*/React.createElement(SectionWrapperUI, {
      background: background
    }, children);
  } else {
    return /*#__PURE__*/React.createElement(SectionWrapperUI, {
      background: background
    }, /*#__PURE__*/React.createElement(SectionUI, {
      textAlign: textAlign,
      innerWidth: inner_width
    }, title && getTitle(title, children[0].props.layout_style, children[0].props.show_title), children.length === 2 && children[0].props && children[0].props.sidebar && children[0].props.sidebar.text ? /*#__PURE__*/React.createElement(ColWrapper, {
      key: "".concat(id, "-col-wrap")
    }, /*#__PURE__*/React.createElement(Col1, {
      key: "".concat(id, "-col-1")
    }, children[0]), /*#__PURE__*/React.createElement(Col2, {
      key: "".concat(id, "-col-2"),
      sidebar_width: sidebar_width
    }, children[1])) : children));
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

var ptSerifWoff2 = "/fonts/pt-serif-v11-latin-regular.woff2";

var ptSerifWoff = "/fonts/pt-serif-v11-latin-regular.woff";

var robotoMediumWoff = "/fonts/roboto-v20-latin-500.woff";

var robotoMediumWoff2 = "/fonts/roboto-v20-latin-500.woff2";

var robotoBoldWoff = "/fonts/roboto-v20-latin-700.woff";

var robotoBoldWoff2 = "/fonts/roboto-v20-latin-700.woff2";

function _templateObject$h() {
  var data = _taggedTemplateLiteral(["\n\n/**\n * These values will not show up in content, but can be\n * queried by JavaScript to know which breakpoint is active.\n * Add or remove as many breakpoints as you like.\n */\nbody:before {\n  content: \"desktop\";\n  display: none;\n}\n\n\n@media (max-width: ", ") {\n  body:before {\n    content: \"tablet\";\n  }\n}\n\n@media (max-width: ", ") {\n  body:before {\n    content: \"mobile\";\n  }\n}\n\n\n\n/* pt-serif-regular - latin */\n@font-face {\n  font-display: block;\n  font-family: 'PT Serif';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: local('PT Serif'), local('PTSerif-Regular'),\n       url(", ") format('woff2'), /* Super Modern Browsers */\n       url(", ") format('woff'), /* Modern Browsers */\n\n}\n\n/* roboto-700 - latin */\n@font-face {\n  font-display: block;\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 500;\n  font-display: swap;\n  src: local('Roboto Medium'), local('Roboto-Medium'),\n       url(", ") format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */\n       url(", ") format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}\n\n/* roboto-700 - latin */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 700;\n  font-display: swap;\n  src: local('Roboto Bold'), local('Roboto-Bold'),\n       url(", ") format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */\n       url(", ") format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}\n\n/* css reset */\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\n\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\nhtml {\n  font-size: 100%;\n}\n\nbody {\n  color: ", ";\n  display: flex;\n  flex-direction: column;\n  font-family: ", ";\n  font-size: 1.125rem;\n  line-height: 1.5;\n  margin: 0;\n  overflow: auto;\n  padding: 0;\n  .is-modal-open {\n    overflow: none;\n  }\n}\n\nimg {\n  max-width: 100%;\n  height: auto;\n}\n\niframe {\n  max-width: 100%;\n}\n\n\n/* link styles */\na:active {\n  color: ", ";\n  text-decoration: none;\n}\n\na:link {\n  text-decoration: none;\n  color: ", ";\n}\n\na:hover {\n  color: ", ";\n  text-decoration: underline;\n}\n\na:visited {\n  color: ", ";\n  text-decoration: none;\n}\n\n/* list and paragraph styles */\np, ul, code {\n  padding: 0;\n  margin-bottom: ", ";\n}\n\nb {\n  font-weight: bold;\n}\n\nul {\n  list-style: disc;\n  padding-left: ", ";\n};\n}\n\nli {\n  margin-bottom: ", ";\n  margin-left: ", ";\n}\n\ncode {\n  box-sizing: border-box;\n  background-color:  ", ";\n  display: block;\n  padding: ", ";\n  color: ", ";\n  width: 100%;\n  font-family: 'Courier New', Courier, monospace;\n  white-space: normal;\n\n  font-size: ", ";\n\n\n  @media (max-width: ", ") {\n   font-size: ", ";\n  }\n\n  @media (max-width: ", ") {\n   font-size: ", ";\n  }\n}\n\n/* heading styles */\nh1, h2, h3, h4, h5, .heading-1, .heading-2, .heading-3, .heading-4, .heading-5, .heading-6 {\n  font-family: ", ";\n  padding: 0;\n  margin: 0;\n  margin-bottom: ", ";\n  line-height: 100%;\n}\n\nh1, .heading-1 {\n  font-size: ", ";\n  font-weight: 500;\n\n  @media (max-width: ", ") {\n   font-size: ", ";\n  }\n\n  @media (max-width: ", ") {\n   font-size: ", ";\n  }\n}\n\nh2, .heading-2 {\n  font-size: ", ";\n  font-weight: 500;\n\n  @media (max-width: ", ") {\n   font-size: ", ";\n  }\n\n  @media (max-width: ", ") {\n   font-size: ", ";\n  }\n}\n\nh3, .heading-3 {\n  font-size: ", ";\n  font-weight: 500;\n\n  @media (max-width: ", ") {\n   font-size: ", ";\n  }\n\n  @media (max-width: ", ") {\n   font-size: ", ";\n  }\n}\n\nh4, .heading-4 {\n  font-size: ", ";;\n  font-weight: 500;\n  margin-bottom: ", ";\n\n  @media (max-width: ", ") {\n   font-size: ", ";\n  }\n\n  @media (max-width: ", ") {\n   font-size: ", ";\n  }\n}\n\nh5, .heading-5 {\n  font-family: ", ";\n  font-size:  ", ";\n  font-weight: 500;\n\n  @media (max-width: ", ") {\n   font-size: ", ";\n  }\n\n  @media (max-width: ", ") {\n   font-size: ", ";\n  }\n}\n\nh6, .heading-6 {\n  font-family: ", ";\n  font-size:  ", ";\n  font-weight: 500;\n\n  @media (max-width: ", ") {\n   font-size: ", ";\n  }\n\n  @media (max-width: ", ") {\n   font-size: ", ";\n  }\n}\n\nh1 + h2, h1 + h2.heading-2 {\n  margin-top: -", ";\n}\n\nh2 + h4 {\n  margin-top: -", ";\n}\n\n\n/* table styles */\n  table {\n    border-collapse: collapse;\n    border-left: ", ";\n    border-right: ", ";\n    margin: 0;\n    width: 100%;\n  margin-bottom: ", ";\n    tr {\n      border-bottom: ", ";\n      width: 100%;\n    }\n    tr:first-child {\n      border-top: ", ";\n    }\n    td:first-child {\n      font-weight: 700;\n    }\n\n    td, th {\n      background-color: #fff;\n      padding: ", " ", ";\n    }\n\n    th {\n      background-color: ", ";\n    }\n\n\n  }\n\n\n  @media (max-width: ", ") {\n    table.responsive-collapse {\n\n    table, thead, tbody, th, td, tr {\n\t\tdisplay: block;\n\t}\n\n  thead tr {\n\t\tposition: absolute;\n\t\ttop: -9999px;\n\t\tleft: -9999px;\n\t}\n    }\n\n  table.n-plus-2 {\n  td:nth-child(n+2) {\n    display: inline-block\n\t}\n  }\n\n\n\n  }\n\n\n/* makes a class for each color in theme */\n  ", "\n\n/* makes a class for each font in theme */\n", "\n\n/* random text styles */\nblockquote {\n  padding: ", ";\n  background-color: ", ";\n  border:  ", ";\n  margin:  ", ";\n\n  p:last-child, ul:last-child {\n    margin-bottom: 0;\n  }\n\n}\n\n.italic {\n  font-style: italic;\n}\n\n.text-shadow-dark {\ntext-shadow: 1px 2px #000\n}\n\n.line-height-1 {\n  line-height: 1;\n}\n\n.line-height-1-2-0 {\n  line-height: 1;\n}\n\n.bold {\n  font-weight: 700;\n}\n\n.lead {\n  font-size: ", ";\n  line-height: 130%;\n  font-family: ", ";\n\n  @media (max-width: ", ") {\n   font-size: ", ";\n  }\n\n  @media (max-width: ", ") {\n   font-size: ", ";\n  }\n}\n\n/* Forms */\ninput, textarea {\n    width: 100%;\n    border: ", ";\n    font-size: ", ";\n    display: block;\n    margin-bottom: ", ";\n    outline: none;\n    padding: ", ";\n     &:focus {\n      outline: none;\n      box-shadow: 0 0 0 3px rgba(21, 156, 228, 0.4);\n  }\n  }\n\n  textarea {\n    height: ", ";\n    resize: none;\n  }\n\nbutton {\n  background-color: ", ";\n  border: 0;\n  border-radius: 5px;\n  color: #fff;\n  cursor: pointer;\n  display: block;\n  font-family: ", ";\n  font-size: ", ";\n  font-weight: 700;\n  height: ", ";\n  margin-top: ", ";\n  width: 100%;\n  /* max-width: ", "px; */\n  background-image: linear-gradient(\n    to bottom,\n    #e52d27 0%,\n    #b31217 41%,\n    #e52d27 100%\n  );\n\n  border:1px solid #d02718;\n  box-shadow: inset 0px 1px 0px 0px #f5978e;\n}\n\n\n"]);

  _templateObject$h = function _templateObject() {
    return data;
  };

  return data;
}
var GlobalStyles = styled.createGlobalStyle(_templateObject$h(), theme.breakPointsAsPixel.tablet, theme.breakPointsAsPixel.mobile, ptSerifWoff2, ptSerifWoff, robotoMediumWoff2, robotoMediumWoff, robotoBoldWoff2, robotoBoldWoff, theme.colors['dark-4'], theme.typography.fonts['font-1'], theme.colors['dark-3'], theme.colors['dark-3'], theme.colors['dark-3'], theme.colors['dark-3'], theme.unit(1), theme.unit(1), theme.unit(0.25), theme.unit(0.75), theme.colors['light-1'], theme.unit(0.5), theme.colors['dark-1'], theme.typography.sizes.desktop.sm, theme.breakPointsAsPixel.tablet, theme.typography.sizes.tablet.sm, theme.breakPointsAsPixel.mobile, theme.typography.sizes.mobile.xsm, theme.typography.fonts['font-2'], theme.unit(0.5), theme.typography.sizes.desktop.xxlg, theme.breakPointsAsPixel.tablet, theme.typography.sizes.tablet.xxlg, theme.breakPointsAsPixel.mobile, theme.typography.sizes.mobile.xxlg, theme.typography.sizes.desktop.xlg, theme.breakPointsAsPixel.tablet, theme.typography.sizes.tablet.xlg, theme.breakPointsAsPixel.mobile, theme.typography.sizes.mobile.xlg, theme.typography.sizes.desktop.lg, theme.breakPointsAsPixel.tablet, theme.typography.sizes.tablet.lg, theme.breakPointsAsPixel.mobile, theme.typography.sizes.mobile.lg, theme.typography.sizes.desktop.md, theme.unit(0.3), theme.breakPointsAsPixel.tablet, theme.typography.sizes.tablet.md, theme.breakPointsAsPixel.mobile, theme.typography.sizes.mobile.md, theme.typography.fonts['font-1'], theme.typography.sizes.desktop.sm, theme.breakPointsAsPixel.tablet, theme.typography.sizes.tablet.sm, theme.breakPointsAsPixel.mobile, theme.typography.sizes.mobile.sm, theme.typography.fonts['font-1'], theme.typography.sizes.desktop.xsm, theme.breakPointsAsPixel.tablet, theme.typography.sizes.tablet.xsm, theme.breakPointsAsPixel.mobile, theme.typography.sizes.mobile.xsm, theme.unit(0.5), theme.unit(0.5), theme.border, theme.border, theme.unit(1), theme.border, theme.border, theme.unit(0.25), theme.unit(0.5), theme.colors['light-1'], theme.breakPointsAsPixel.mobile, function () {
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
}, theme.unit(0.75), theme.colors['light-1'], theme.border, "".concat(theme.unit(1), " 0"), theme.typography.sizes.desktop.md, theme.typography.fonts['font-3'], theme.breakPointsAsPixel.tablet, theme.typography.sizes.tablet.md, theme.breakPointsAsPixel.mobile, theme.typography.sizes.mobile.md, "1px solid ".concat(theme.colors['dark-2']), theme.unit(0.5), theme.unit(0.75), theme.unit(0.4), theme.unit(3), theme.colors['dark-2'], theme.typography.fonts['font-2'], theme.unit(0.66), theme.unit(1.75), theme.unit(0.66), function (_ref) {
  var maxWidth = _ref.maxWidth;
  return maxWidth;
});

function head () {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(GlobalStyles, null));
}

function _templateObject$i() {
  var data = _taggedTemplateLiteral(["\n  form {\n    padding: ", ";\n    /* border: ", "; */\n    background-color: ", ";\n  }\n\n  label {\n    display: block;\n  }\n"]);

  _templateObject$i = function _templateObject() {
    return data;
  };

  return data;
}
var FormWrapper = styled__default('div')(_templateObject$i(), theme.unit(0.5), theme.border, theme.colors.light2);

function Form(_ref) {
  var sidebar = _ref.sidebar;
  return /*#__PURE__*/React.createElement(FormWrapper, {
    dangerouslySetInnerHTML: {
      __html: sidebar.text
    }
  });
}

function getComponent(data) {
  var wrapperComponent = {
    component_section: Section,
    component_jumbotron: Jumbotron,
    component_section_rich_text: Section
  };
  var layoutComponent = {
    article: Article,
    banner: Banner,
    box1: Box1,
    cards: Cards,
    form: Form,
    "default": 'div',
    faq: Faq,
    grid: Grid,
    quote: Quote
  };
  var components = [];
  components.push(React.createElement(layoutComponent[data.layout_style] || 'div', _objectSpread2({}, data, {
    key: "".concat(data.id, "-wrapper")
  })));

  if (data.sidebar) {
    components.push(React.createElement(layoutComponent[data.sidebar_layout_style] || 'div', _objectSpread2({
      key: "".concat(data.id, "-sidebar")
    }, data, {
      id: data.id
    })));
  }

  return React.createElement(wrapperComponent[data.type], _objectSpread2({}, data, {
    key: data.id,
    id: data.id
  }), components);
}

var Prismic = require('prismic-javascript');

function getPage(apiUrl, page) {
  return Prismic.getApi(apiUrl).then(function (api) {
    return api.query(Prismic.Predicates.at('document.id', page.id)).then(function (response) {
      var data = response.results[0].data;

      var meta = _objectSpread2({
        title: data.title[0].text
      }, data.meta[0]);

      var ids = data.body.map(function (section) {
        return section.section.id;
      });
      return api.getByIDs(ids).then(function (_response) {
        var content = _response.results.map(function (result) {
          var data = result.data,
              id = result.id,
              type = result.type;
          data.body = data.body[0];

          if (data.sidebar) {
            data.sidebar = data.sidebar[0];
          }

          return _objectSpread2({}, data, {
            id: id,
            type: type
          });
        });

        return {
          content: content,
          meta: meta,
          page: page
        };
      });
    });
  });
}

function getPages(apiUrl) {
  return new Promise(function (resolve) {
    return Prismic$1.getApi(apiUrl).then(function (api) {
      return api.query(Prismic$1.Predicates.at('document.type', 'page')).then(function (response) {
        var promises = response.results.map(function (result) {
          return getPage(apiUrl, result);
        });
        return Promise.all(promises).then(function (pages) {
          var _pages = pages.map(function (_ref) {
            var content = _ref.content,
                meta = _ref.meta,
                page = _ref.page;
            return {
              path: meta.slug,
              getData: function getData() {
                return {
                  content: content,
                  meta: meta,
                  forms: {
                    has_form: page.data.has_form
                  }
                };
              },
              template: meta.template ? "src/pages/".concat(meta.template) : 'src/pages/page'
            };
          });

          resolve(_pages);
        });
      });
    });
  });
}

function getPosts(apiUrl) {
  return new Promise(function (resolve) {
    return Prismic$1.getApi(apiUrl).then(function (api) {
      return api.query(Prismic$1.Predicates.at('document.type', 'post')).then(function (response) {
        var routeData = response.results.map(function (result) {
          var first_publication_date = result.first_publication_date,
              data = result.data,
              id = result.id;
          return {
            getData: function getData() {
              return _objectSpread2({}, data, {
                id: id,
                first_publication_date: first_publication_date,
                layout_style: 'post'
              });
            },
            path: data.meta[0].slug,
            template: 'src/containers/_post'
          };
        });
        var list = response.results.map(function (post) {
          var _post$data = post.data,
              meta = _post$data.meta,
              title = _post$data.title,
              id = post.id;
          return {
            id: id,
            path: meta[0].slug,
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

var utils = {
  getComponent: getComponent,
  getPages: getPages,
  getPosts: getPosts,
  makePixelValue: makePixelValue
};

exports.Article = Article;
exports.Banner = Banner;
exports.Body = body;
exports.Box1 = Box1;
exports.Button = button;
exports.Cards = Cards;
exports.Faq = Faq;
exports.Footer = Footer;
exports.Grid = Grid;
exports.Head = head;
exports.Header = header;
exports.Jumbotron = Jumbotron;
exports.LoadingScreen = Loading;
exports.Quote = Quote;
exports.ScrollToTop = ScrollToTop;
exports.Section = Section;
exports.utils = utils;
