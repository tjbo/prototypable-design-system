'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var styled = require('styled-components');
var styled__default = _interopDefault(styled);
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

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  color: #fff;\n  text-align: center;\n  padding: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var BannerUI = styled__default('div')(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.unit(0.5);
});

function Banner (_ref) {
  var body = _ref.body;
  return /*#__PURE__*/React.createElement(BannerUI, null, /*#__PURE__*/React.createElement("span", {
    className: "heading-3 light-3 font-3 italic",
    dangerouslySetInnerHTML: {
      __html: body.text
    }
  }));
}

function _templateObject$1() {
  var data = _taggedTemplateLiteral(["\n  margin-top: ", ";\n  min-height: 100vh;\n\n  @media (max-width: ", ") {\n    margin-top: ", ";\n  }\n\n  @media (max-width: ", ") {\n    margin-top: ", ";\n  }\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}

var BodyUI = styled__default('div')(_templateObject$1(), function (_ref) {
  var theme = _ref.theme;
  return theme.layout.desktop.headerHeight;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.breakPoints.desktop;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.layout.tablet.headerHeight;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.breakPoints.mobile;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.layout.mobile.headerHeight;
});

function body (_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React.createElement(BodyUI, null, children);
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

var BoxWrapper = styled__default('div')(_templateObject$2(), function (_ref) {
  var theme = _ref.theme;
  return theme.border;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.unit(0.25);
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.unit(0.5);
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.unit(0.5);
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.breakPoints.tablet;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.breakPoints.mobile;
});

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

var ButtonUI = styled__default('button')(_templateObject$3(), function (_ref) {
  var theme = _ref.theme;
  return theme.colors['dark-2'];
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.typography.fonts['font-2'];
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.unit(0.75);
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.unit(1.75);
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.unit(0.66);
}, function (_ref6) {
  var maxWidth = _ref6.maxWidth;
  return maxWidth;
}, function (_ref7) {
  var align = _ref7.align;

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
var CardsWrapperUI = styled__default('div')(_templateObject$4(), function (_ref) {
  var theme = _ref.theme;
  return theme.border;
}, function (_ref2) {
  var theme = _ref2.theme;
  return "".concat(theme.unit(0.5), " ").concat(theme.unit(0.66));
});
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

var GridWrapperUI = styled__default('div')(_templateObject$5(), function (_ref) {
  var theme = _ref.theme;
  return theme.breakPoints.tablet;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.unit(0.5);
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.breakPoints.mobile;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.breakPoints.tablet;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.breakPoints.mobile;
});

function Grid(_ref) {
  var body = _ref.body;
  return /*#__PURE__*/React.createElement(GridWrapperUI, {
    dangerouslySetInnerHTML: {
      __html: body
    }
  });
}

function Cards (_ref) {
  var body = _ref.body;
  return /*#__PURE__*/React.createElement(CardsWrapperUI, null, /*#__PURE__*/React.createElement(Grid, {
    body: body.text
  }));
}

function _templateObject$6() {
  var data = _taggedTemplateLiteral(["\n  details {\n    display: flex;\n    border: ", ";\n    box-sizing: border-box;\n    margin-bottom: ", ";\n    padding: ", ";\n    background-color: #fff;\n    min-width: 100%;\n    h4 {\n      width: calc(100% - 20px);\n    }\n\n    summary {\n      width: 100%;\n      color: ", ";\n      cursor: pointer;\n      font-size: ", ";\n      font-weight: 500;\n      position: relative;\n      padding: 0;\n      &:after {\n        content: '';\n        color: ", ";\n        border: solid ", ";\n        border-width: 0 3px 3px 0;\n        display: inline-block;\n        padding: 4px;\n        transform: rotate(-135deg);\n        -webkit-transform: rotate(-135deg);\n        position: absolute;\n        right: 0;\n        top: 10px;\n      }\n      :focus &:after {\n      }\n      &:focus {\n        outline: none;\n      }\n      &::-webkit-details-marker {\n        display: none;\n      }\n    }\n  }\n\n  details[open] summary:after {\n    transform: rotate(45deg);\n    -webkit-transform: rotate(45deg);\n  }\n"]);

  _templateObject$6 = function _templateObject() {
    return data;
  };

  return data;
}
var FaqWrapperUI = styled__default('div')(_templateObject$6(), function (_ref) {
  var theme = _ref.theme;
  return theme.border;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.unit(1);
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.unit(1);
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.colors['dark-4'];
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.unit(0.66);
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.colors['dark-1'];
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.colors['dark-4'];
});

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

var FooterUI = styled__default('footer')(_templateObject$7(), function (_ref) {
  var theme = _ref.theme;
  return theme.colors['dark-1'];
});
var AddressUI = styled__default('address')(_templateObject2$1());
var FinePrintUI = styled__default('div')(_templateObject3$1());
var FooterUIInner = styled__default('div')(_templateObject4$1(), function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors['dark-1'];
}, function (_ref3) {
  var theme = _ref3.theme;
  return "".concat(theme.unit(0.5), " ").concat(theme.unit(0.75));
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.unit(1);
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.typography.fonts['font-1'];
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.breakPoints.mobile;
}, AddressUI, function (_ref7) {
  var theme = _ref7.theme;
  return theme.typography.fonts['font-2'];
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.unit(0.65);
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.typography.fonts['font-2'];
}, FinePrintUI, function (_ref10) {
  var theme = _ref10.theme;
  return theme.unit(0.4);
}, function (_ref11) {
  var theme = _ref11.theme;
  return theme.unit(1);
});

function Footer(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React.createElement(FooterUI, null, /*#__PURE__*/React.createElement(FooterUIInner, null, children));
}

Footer.Address = AddressUI;
Footer.FinePrint = FinePrintUI;

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  box-sizing: border-box;\n  position: fixed;\n  z-index: 1;\n  top: 0;\n  display: block;\n  background-color: ", ";\n  height: ", ";\n\n  ", " {\n    align-items: center;\n    background-color: ", ";\n    box-sizing: border-box;\n    display: flex;\n    height: ", ";\n    flex-direction: row;\n    justify-content: space-between;\n    padding: ", ";\n    width: 100%;\n    z-index: 1;\n  }\n\n  ", " {\n    font-size: ", ";\n    margin: 0;\n    background-color: ", ";\n    height: ", ";\n    display: flex;\n    align-items: center;\n    text-align: left;\n    justify-content: space-between;\n    font-family: ", ";\n    font-weight: 500;\n    text-align: left;\n    text-transform: uppercase;\n    a:active,\n    a:visited,\n    a:hover,\n    a:link {\n      color: #fff;\n      text-decoration: none;\n    }\n  }\n\n  ", " {\n    align-items: center;\n    box-sizing: border-box;\n    justify-content: center;\n    display: flex;\n    height: ", ";\n    a:visited,\n    a:link {\n      color: #fff;\n      text-decoration: none;\n    }\n    color: #fff;\n    padding: 0;\n    padding-left: ", ";\n\n    a:active,\n    a:hover {\n      color: ", ";\n    }\n  }\n\n  ", " {\n    display: flex;\n    flex-direction: row;\n    font-size: ", ";\n    font-family: ", ";\n    list-style: none;\n    box-sizing: border-box;\n\n    a {\n      margin-left: ", ";\n      :active,\n      :visited,\n      :hover,\n      :link {\n        text-decoration: none;\n      }\n    }\n  }\n\n  ", " {\n    display: none;\n  }\n\n  @media (max-width: ", ") {\n    height: ", ";\n\n    ", " {\n      height: ", ";\n    }\n\n    ", " {\n      height: ", ";\n    }\n\n    .is-open ", " {\n      box-sizing: border-box;\n      background-color: ", ";\n      display: flex;\n      flex-direction: column;\n      left: 0;\n      min-height: 100vh;\n      position: absolute;\n      top: 0;\n      width: 100%;\n    }\n\n    .is-closed ", " {\n      display: none;\n    }\n\n    ", " {\n      cursor: pointer;\n      box-sizing: border-box;\n      font-size: ", ";\n      margin: 0;\n      padding: ", ";\n      text-align: center;\n      width: auto;\n      text-transform: uppercase;\n\n      :hover {\n        background-color: ", ";\n        padding: ", ";\n      }\n\n      a:active,\n      a:visited,\n      a:hover,\n      a:link {\n        color: #fff;\n        width: 100%;\n      }\n    }\n\n    ", " {\n      cursor: pointer;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      position: absolute;\n      left: calc(100vw - ", ");\n      top: 0;\n      width: ", ";\n      height: ", ";\n      z-index: 2;\n    }\n\n    nav {\n      box-sizing: border-box;\n      padding-top: ", ";\n    }\n  }\n\n  @media (max-width: ", ") {\n    height: ", ";\n\n    ", " {\n      height: ", ";\n    }\n\n    ", " {\n      font-size: ", ";\n      height: ", ";\n    }\n\n    ", " {\n      width: ", ";\n      height: ", ";\n    }\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5$1() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject5$1 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$2() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject4$2 = function _templateObject4() {
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

function _templateObject2$2() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject2$2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$8() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject$8 = function _templateObject() {
    return data;
  };

  return data;
}
var BrandUI = styled__default('div')(_templateObject$8());
var HeaderUI = styled__default('header')(_templateObject2$2());
var NavMenuTriggerUI = styled__default('span')(_templateObject3$2());
var NavMobileMenuUI = styled__default('nav')(_templateObject4$2());
var NavLinkUI = styled__default('span')(_templateObject5$1());
var HeaderContainer = styled__default('div')(_templateObject6(), function (_ref) {
  var theme = _ref.theme;
  return theme.colors['dark-1'];
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.layout.desktop.headerHeight;
}, HeaderUI, function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors['dark-1'];
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.layout.desktop.headerHeight;
}, function (_ref5) {
  var theme = _ref5.theme;
  return "0 ".concat(theme.unit(0.75), " 0 ").concat(theme.unit(0.25));
}, BrandUI, function (_ref6) {
  var theme = _ref6.theme;
  return theme.unit(1.125);
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.colors['dark-1'];
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.layout.desktop.headerHeight;
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.typography.fonts['font-2'];
}, NavLinkUI, function (_ref10) {
  var theme = _ref10.theme;
  return theme.layout.desktop.headerHeight;
}, function (_ref11) {
  var theme = _ref11.theme;
  return theme.unit(1);
}, function (_ref12) {
  var theme = _ref12.theme;
  return theme.colors['dark-3'];
}, NavMobileMenuUI, function (_ref13) {
  var theme = _ref13.theme;
  return theme.unit(0.7);
}, function (_ref14) {
  var theme = _ref14.theme;
  return theme.typography.fonts['font-2'];
}, function (_ref15) {
  var theme = _ref15.theme;
  return theme.unit(0.5);
}, NavMenuTriggerUI, function (_ref16) {
  var theme = _ref16.theme;
  return theme.breakPoints.tablet;
}, function (_ref17) {
  var theme = _ref17.theme;
  return theme.layout.tablet.headerHeight;
}, HeaderUI, function (_ref18) {
  var theme = _ref18.theme;
  return theme.layout.tablet.headerHeight;
}, BrandUI, function (_ref19) {
  var theme = _ref19.theme;
  return theme.layout.tablet.headerHeight;
}, NavMobileMenuUI, function (_ref20) {
  var theme = _ref20.theme;
  return theme.colors['dark-3'];
}, NavMobileMenuUI, NavLinkUI, function (_ref21) {
  var theme = _ref21.theme;
  return theme.unit(0.75);
}, function (_ref22) {
  var theme = _ref22.theme;
  return theme.unit(0.25);
}, function (_ref23) {
  var theme = _ref23.theme;
  return theme.colors['dark-5'];
}, function (_ref24) {
  var theme = _ref24.theme;
  return theme.unit(0.25);
}, NavMenuTriggerUI, function (_ref25) {
  var theme = _ref25.theme;
  return theme.layout.tablet.headerHeight;
}, function (_ref26) {
  var theme = _ref26.theme;
  return theme.layout.tablet.headerHeight;
}, function (_ref27) {
  var theme = _ref27.theme;
  return theme.layout.tablet.headerHeight;
}, function (_ref28) {
  var theme = _ref28.theme;
  return theme.unit(2);
}, function (_ref29) {
  var theme = _ref29.theme;
  return theme.breakPoints.mobile;
}, function (_ref30) {
  var theme = _ref30.theme;
  return theme.layout.mobile.headerHeight;
}, HeaderUI, function (_ref31) {
  var theme = _ref31.theme;
  return theme.layout.mobile.headerHeight;
}, BrandUI, function (_ref32) {
  var theme = _ref32.theme;
  return theme.unit(0.66);
}, function (_ref33) {
  var theme = _ref33.theme;
  return theme.layout.mobile.headerHeight;
}, NavMenuTriggerUI, function (_ref34) {
  var theme = _ref34.theme;
  return theme.layout.mobile.headerHeight;
}, function (_ref35) {
  var theme = _ref35.theme;
  return theme.layout.mobile.headerHeight;
});

function _templateObject3$3() {
  var data = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  cursor: pointer;\n  position: relative;\n  ul {\n    position: relative;\n    box-sizing: border-box;\n    display: block;\n    list-style: none;\n    margin: 0;\n    padding-left: 0;\n    z-index: 1;\n    min-width: 100%;\n\n    li {\n      box-sizing: border-box;\n      min-width: 100%;\n      margin-left: 0;\n      cursor: pointer;\n\n      a {\n        :hover {\n          background-color: ", ";\n        }\n        box-sizing: border-box;\n        margin-left: 0;\n        padding: ", ";\n        display: inline-block;\n        min-width: 100%;\n      }\n    }\n  }\n\n  @media (max-width: ", ") {\n    ul li {\n      text-align: center;\n      margin-left: 0;\n      a:active,\n      a:visited,\n      a:hover,\n      a:link {\n        margin-left: 0;\n        color: ", ";\n        font-size: ", ";\n        text-transform: uppercase;\n      }\n    }\n\n    ", " {\n      background: ", ";\n    }\n\n    ", " {\n      &:after {\n        content: '';\n        color: ", ";\n        border: solid ", ";\n        border-width: 0 4px 4px 0;\n        display: inline-block;\n        margin-left: ", ";\n        padding: 4px;\n        transform: ", ";\n        position: absolute;\n        top: ", ";\n      }\n    }\n  }\n\n  @media (min-width: ", ") {\n    ul {\n      background-color: #fff;\n      border: ", ";\n      display: none;\n      position: absolute;\n      top: 100%;\n      right: 0;\n      width: ", ";\n      li {\n        margin: 0;\n        a {\n          margin-left: 0;\n        }\n      }\n      a:active,\n      a:visited,\n      a:hover,\n      a:link {\n        color: ", ";\n        font-size: ", ";\n        margin-left: 0;\n      }\n\n      li:hover a {\n        color: #fff;\n      }\n    }\n  }\n  :hover,\n  :focus-within {\n    ul {\n      display: block;\n    }\n  }\n"]);

  _templateObject3$3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$3() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject2$3 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$9() {
  var data = _taggedTemplateLiteral(["\n  border-bottom: ", ";\n  height: 1px;\n  min-width: 100%;\n"]);

  _templateObject$9 = function _templateObject() {
    return data;
  };

  return data;
}
var NavDropdownDividerUI = styled__default('div')(_templateObject$9(), function (_ref) {
  var theme = _ref.theme;
  return theme.border;
});
var NavLinkDropdownIconUI = styled__default('div')(_templateObject2$3());
var NavDropdownUI = styled__default('div')(_templateObject3$3(), function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors['dark-5'];
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.unit(0.5);
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.breakPoints.desktop;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.colors['light-1'];
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.typography.sizes.desktop.md;
}, NavLinkUI, function (_ref7) {
  var isOpen = _ref7.isOpen,
      theme = _ref7.theme;
  return isOpen ? theme.colors['dark-5'] : 'none';
}, NavLinkDropdownIconUI, function (_ref8) {
  var theme = _ref8.theme;
  return theme.colors['dark-1'];
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.colors['light-1'];
}, function (_ref10) {
  var theme = _ref10.theme;
  return theme.unit(0.5);
}, function (_ref11) {
  var isOpen = _ref11.isOpen;
  return isOpen ? "rotate(45deg)" : "rotate(-135deg)";
}, function (_ref12) {
  var theme = _ref12.theme;
  return theme.unit(0.75);
}, function (_ref13) {
  var theme = _ref13.theme;
  return theme.breakPoints.desktop;
}, function (_ref14) {
  var theme = _ref14.theme;
  return theme.border;
}, function (_ref15) {
  var theme = _ref15.theme;
  return theme.unit(8);
}, function (_ref16) {
  var theme = _ref16.theme;
  return theme.colors['dark-3'];
}, function (_ref17) {
  var theme = _ref17.theme;
  return theme.typography.sizes.desktop.sm;
});

var callbacks = [];
var currentBreakpoint;

function refreshValue() {
  if (typeof window !== 'undefined') {
    currentBreakpoint = window.getComputedStyle(document.querySelector('body'), ':before').getPropertyValue('content').replace(/\"/g, '');

    for (var callback in callbacks) {
      callbacks[callback](currentBreakpoint);
    }
  }
}

function addListener(callback) {
  if (typeof window !== 'undefined') {
    callbacks.push(callback);
    currentBreakpoint = window.getComputedStyle(document.querySelector('body'), ':before').getPropertyValue('content').replace(/\"/g, '');
    return currentBreakpoint;
  }
}

if (typeof window !== 'undefined') {
  window.addEventListener('resize', refreshValue);
}

var NavDropdown = /*#__PURE__*/function (_React$Component) {
  _inherits(NavDropdown, _React$Component);

  var _super = _createSuper(NavDropdown);

  function NavDropdown() {
    var _this;

    _classCallCheck(this, NavDropdown);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      breakPoint: 'desktop',
      isOpen: true
    });

    _defineProperty(_assertThisInitialized(_this), "toggleMenu", function (bool) {
      _this.setState({
        isOpen: bool
      });
    });

    _defineProperty(_assertThisInitialized(_this), "componentDidMount", function () {
      var breakPoint = addListener(_this.onBreakPointChange);

      _this.setState({
        breakPoint: breakPoint
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onBreakPointChange", function (breakPoint) {
      _this.setState({
        breakPoint: breakPoint
      });
    });

    return _this;
  }

  _createClass(NavDropdown, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // this allows react static to do a "first render"
      this.setState({
        isOpen: false
      });
    }
  }, {
    key: "componentWillUpdate",
    value: function componentWillUpdate(props, state) {
      if (!props.isParentMenuOpen && state.isOpen && state.breakPoint !== 'desktop') {
        this.toggleMenu(false);
      }
    }
  }, {
    key: "isDesktop",
    value: function isDesktop() {
      return this.state.breakPoint === 'desktop';
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          children = _this$props.children,
          text = _this$props.text;
      return /*#__PURE__*/React.createElement(NavDropdownUI, {
        isOpen: this.state.isOpen
      }, /*#__PURE__*/React.createElement(NavLinkUI, {
        onMouseOver: function onMouseOver() {
          _this2.isDesktop() && _this2.toggleMenu(true);
        },
        onClick: function onClick() {
          !_this2.isDesktop() && _this2.toggleMenu(!_this2.state.isOpen);
        }
      }, text, /*#__PURE__*/React.createElement(NavLinkDropdownIconUI, null)), this.state.isOpen && /*#__PURE__*/React.createElement("ul", null, React.Children.map(children, function (child) {
        return /*#__PURE__*/React.createElement("li", null, React.cloneElement(child, {
          onClick: function onClick(event) {
            if (_this2.isDesktop()) {
              event.persist();
              setTimeout(function () {
                event.nativeEvent.stopPropagation();

                _this2.toggleMenu(false);
              }, 1);
            } else {
              _this2.props.closeParentMenu();
            }
          }
        }));
      })));
    }
  }]);

  return NavDropdown;
}(React.Component);

NavDropdown.Divider = NavDropdownDividerUI;

function makePixelValue(value) {
  return value + 'px';
}

function _templateObject5$2() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n  height: ", ";\n  margin: (", ") auto ", " auto;\n  margin-top: -", ";\n  position: relative;\n  width: ", ";\n  z-index: 9999;\n"]);

  _templateObject5$2 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$3() {
  var data = _taggedTemplateLiteral(["\n  top: 100%;\n  transform: ", ";\n"]);

  _templateObject4$3 = function _templateObject4() {
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
var heightIcon = 20;
var translateY = heightIcon / 2;
var translateY1 = makePixelValue(translateY);
var LineUI = styled__default('span')(_templateObject$a(), makePixelValue(heightLine / 2), makePixelValue(heightLine));
var Line1UI = styled__default(LineUI)(_templateObject2$4(), function (props) {
  return props.isOpen ? "translateY(".concat(translateY1, ") rotate(45deg) translateX(0)") : 'rotate(0deg)';
});
var Line2UI = styled__default(LineUI)(_templateObject3$4(), function (props) {
  return props.isOpen ? "0" : '1';
});
var Line3UI = styled__default(LineUI)(_templateObject4$3(), function (props) {
  return props.isOpen ? "translateY(-".concat(translateY1, ") rotate(-45deg) translateX(0)") : 'rotate(0deg)';
});
var TriggerIconUI = styled__default('div')(_templateObject5$2(), makePixelValue(heightIcon), makePixelValue(heightIcon * 2), heightIcon, function (_ref) {
  var theme = _ref.theme;
  return theme.unit(0.125);
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.unit(1);
});

function TriggerIcon(_ref) {
  var isOpen = _ref.isOpen;
  return /*#__PURE__*/React.createElement(TriggerIconUI, {
    isOpen: isOpen
  }, /*#__PURE__*/React.createElement(Line1UI, {
    isOpen: isOpen
  }), /*#__PURE__*/React.createElement(Line2UI, {
    isOpen: isOpen
  }), /*#__PURE__*/React.createElement(Line3UI, {
    isOpen: isOpen
  }));
}

var Header = /*#__PURE__*/function (_React$Component) {
  _inherits(Header, _React$Component);

  var _super = _createSuper(Header);

  function Header() {
    var _this;

    _classCallCheck(this, Header);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isOpen: false
    });

    _defineProperty(_assertThisInitialized(_this), "onLinkClick", function () {
      _this.setState({
        isOpen: false
      });

      onHideModal();
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

  _createClass(Header, [{
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
    key: "isWithNav",
    value: function isWithNav() {
      return this.props.children.length > 1 && this.props.children.some(function (child) {
        return child.props.children.length > 1;
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var children = this.props.children;
      var isOpen = this.state.isOpen;
      var isWithNav = this.isWithNav();
      return /*#__PURE__*/React.createElement(HeaderContainer, null, /*#__PURE__*/React.createElement(HeaderUI, {
        className: isOpen ? 'is-open' : 'is-closed'
      }, React.Children.map(children, function (child) {
        return React.cloneElement(child, {
          closeParentMenu: _this3.toggleMenu,
          isParentMenuOpen: isOpen
        });
      }), isWithNav ? /*#__PURE__*/React.createElement(NavMenuTriggerUI, {
        onClick: this.toggleMenu
      }, /*#__PURE__*/React.createElement(TriggerIcon, {
        isOpen: isOpen
      })) : null));
    }
  }]);

  return Header;
}(React.Component);

Header.Brand = function Brand(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React.createElement(BrandUI, null, /*#__PURE__*/React.createElement("a", {
    href: "/"
  }, children));
};

Header.NavMenu = function (_ref2) {
  var children = _ref2.children,
      isParentMenuOpen = _ref2.isParentMenuOpen,
      closeParentMenu = _ref2.closeParentMenu;
  return /*#__PURE__*/React.createElement(NavMobileMenuUI, null, React.Children.map(children, function (child) {
    return React.cloneElement(child, {
      closeParentMenu: closeParentMenu,
      isParentMenuOpen: isParentMenuOpen
    });
  }));
};

Header.NavLink = function (_ref3) {
  var children = _ref3.children,
      closeParentMenu = _ref3.closeParentMenu,
      isParentMenuOpen = _ref3.isParentMenuOpen;
  return /*#__PURE__*/React.createElement(NavLinkUI, {
    onClick: function onClick(event) {
      isParentMenuOpen && closeParentMenu();
      event.nativeEvent.stopPropagation();
    }
  }, children);
};

Header.NavDropdown = NavDropdown;

function _templateObject2$5() {
  var data = _taggedTemplateLiteral(["\n  max-width: 100%;\n  img {\n    display: block;\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n\n  @media (min-width: ", ") {\n    min-height: calc(\n      100vh - ", "\n    );\n\n    img {\n      height: calc(100vh - ", ");\n    }\n  }\n\n  @media (max-width: ", ") {\n    min-height: calc(\n      100vh - ", "\n    );\n\n    img {\n      height: calc(100vh - ", ");\n    }\n  }\n"]);

  _templateObject2$5 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$b() {
  var data = _taggedTemplateLiteral(["\n  align-items: center;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  min-height: calc(100vh - ", ");\n  position: absolute;\n  top: ", ";\n  width: 100%;\n  text-align: center;\n\n  @media (min-width: ", ") {\n    min-height: calc(\n      100vh - ", "\n    );\n  }\n\n  @media (max-width: ", ") {\n    padding: 0 ", ";\n    min-height: calc(\n      100vh - ", "\n    );\n  }\n"]);

  _templateObject$b = function _templateObject() {
    return data;
  };

  return data;
}
var ContentUI$1 = styled__default('div')(_templateObject$b(), function (_ref) {
  var theme = _ref.theme;
  return theme.layout.desktop.headerHeight;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.unit(2.25);
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.breakPoints.desktop;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.layout.tablet.headerHeight;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.breakPoints.tablet;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.unit(0.5);
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.layout.mobile.headerHeight;
});
var ImageUI = styled__default('div')(_templateObject2$5(), function (_ref8) {
  var theme = _ref8.theme;
  return theme.breakPoints.desktop;
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.layout.tablet.headerHeight;
}, function (_ref10) {
  var theme = _ref10.theme;
  return theme.layout.tablet.headerHeight;
}, function (_ref11) {
  var theme = _ref11.theme;
  return theme.breakPoints.tablet;
}, function (_ref12) {
  var theme = _ref12.theme;
  return theme.layout.mobile.headerHeight;
}, function (_ref13) {
  var theme = _ref13.theme;
  return theme.layout.mobile.headerHeight;
});

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

function _templateObject$c() {
  var data = _taggedTemplateLiteral(["\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  min-height: calc(100vh - ", ");\n\n  @media (min-width: ", ") {\n    min-height: calc(\n      100vh - ", "\n    );\n  }\n\n  @media (max-width: ", ") {\n    min-height: calc(\n      100vh - ", "\n    );\n  }\n"]);

  _templateObject$c = function _templateObject() {
    return data;
  };

  return data;
}

var LoadingScreenContainerUI = styled__default('div')(_templateObject$c(), function (_ref) {
  var theme = _ref.theme;
  return theme.layout.desktop.headerHeight;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.breakPoints.desktop;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.layout.tablet.headerHeight;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.breakPoints.tablet;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.layout.mobile.headerHeight;
});

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

function _templateObject4$4() {
  var data = _taggedTemplateLiteral(["\n  blockquote {\n    border: none;\n  }\n"]);

  _templateObject4$4 = function _templateObject4() {
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

function _templateObject2$6() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n  color: ", ";\n  height: ", ";\n  opacity: 0.5;\n  font-size: ", ";\n  line-height: 1;\n  position: absolute;\n  top: ", ";\n  left: ", ";\n"]);

  _templateObject2$6 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$d() {
  var data = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  width: 100%;\n  display: block;\n  padding: ", " ", ";\n  background: ", ";\n  position: relative;\n\n  @media (max-width: ", ") {\n    padding: ", " ", ";\n  }\n"]);

  _templateObject$d = function _templateObject() {
    return data;
  };

  return data;
}

var BoxWrapper$1 = styled__default('div')(_templateObject$d(), function (_ref) {
  var theme = _ref.theme;
  return theme.unit(2);
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.unit(1);
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors['light-1'];
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.breakPoints.tablet;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.unit(1);
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.unit(2.5);
});
var OpenQuoteUI = styled__default('div')(_templateObject2$6(), function (_ref7) {
  var theme = _ref7.theme;
  return theme.colors['dark-3'];
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.unit(2.5);
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.unit(5);
}, function (_ref10) {
  var theme = _ref10.theme;
  return theme.unit(0.25);
}, function (_ref11) {
  var theme = _ref11.theme;
  return theme.unit(0.25);
});
var CloseQuoteUI = styled__default('div')(_templateObject3$5(), function (_ref12) {
  var theme = _ref12.theme;
  return theme.unit(2.5);
}, function (_ref13) {
  var theme = _ref13.theme;
  return theme.colors['dark-3'];
}, function (_ref14) {
  var theme = _ref14.theme;
  return theme.unit(5);
}, function (_ref15) {
  var theme = _ref15.theme;
  return theme.unit(0.25);
}, function (_ref16) {
  var theme = _ref16.theme;
  return theme.unit(0.25);
});
var DropQuoteUI = styled__default('div')(_templateObject4$4());

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

function _templateObject4$5() {
  var data = _taggedTemplateLiteral(["\n  flex: ", ";\n  margin-left: ", ";\n"]);

  _templateObject4$5 = function _templateObject4() {
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

function _templateObject2$7() {
  var data = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  max-width: ", ";\n  margin: 0 auto;\n  padding: ", ";\n  text-align: ", ";\n\n  @media (max-width: ", ") {\n    padding: ", ";\n  }\n"]);

  _templateObject2$7 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$e() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  background-color: ", ";\n"]);

  _templateObject$e = function _templateObject() {
    return data;
  };

  return data;
}

var getBgColor = function getBgColor(_ref) {
  var background = _ref.background,
      theme = _ref.theme;

  if (background === 'light') {
    return theme.colors['light-1'];
  } else if (background === 'dark') {
    return theme.colors['dark-3'];
  } else {
    return '#fff';
  }
};

var getInnerWidth = function getInnerWidth(_ref2) {
  var innerWidth = _ref2.innerWidth,
      theme = _ref2.theme;

  if (innerWidth === 'medium') {
    return '750px';
  } else if (innerWidth === 'small') {
    return '550px';
  } else {
    return theme.unit(33);
  }
};

var SectionWrapperUI = styled__default('section')(_templateObject$e(), getBgColor);
var SectionUI = styled__default('div')(_templateObject2$7(), getInnerWidth, function (_ref3) {
  var theme = _ref3.theme;
  return "".concat(theme.unit(1), " 0");
}, function (_ref4) {
  var textAlign = _ref4.textAlign;
  return textAlign;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.breakPoints.tablet;
}, function (_ref6) {
  var theme = _ref6.theme;
  return "".concat(theme.unit(0.5));
});
var Col1 = styled__default('div')(_templateObject3$6());
var Col2 = styled__default('div')(_templateObject4$5(), function (_ref7) {
  var sidebar_width = _ref7.sidebar_width;
  return sidebar_width;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.unit(0.5);
});
var ColWrapper = styled__default('div')(_templateObject5$3(), function (_ref9) {
  var theme = _ref9.theme;
  return theme.breakPoints.tablet;
}, Col1, Col2);

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
    }, title && getTitle(title, children[0].props.layout_style, children[0].props.show_title), children.length === 2 && children[0].props.sidebar.text ? /*#__PURE__*/React.createElement(ColWrapper, {
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

function _templateObject$f() {
  var data = _taggedTemplateLiteral(["\n\n/**\n * These values will not show up in content, but can be\n * queried by JavaScript to know which breakpoint is active.\n * Add or remove as many breakpoints as you like.\n */\nbody:before {\n  content: \"mobile\";\n  display: none;\n}\n\n\n@media (min-width: ", ") {\n  body:before {\n    content: \"tablet\";\n  }\n}\n\n@media (min-width: ", ") {\n  body:before {\n    content: \"desktop\";\n  }\n}\n\n\n\n/* pt-serif-regular - latin */\n@font-face {\n  font-family: 'PT Serif';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: local('PT Serif'), local('PTSerif-Regular'),\n       url(", ") format('woff2'), /* Super Modern Browsers */\n       url(", ") format('woff'), /* Modern Browsers */\n\n}\n\n/* roboto-700 - latin */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 500;\n  font-display: swap;\n  src: local('Roboto Medium'), local('Roboto-Medium'),\n       url(", ") format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */\n       url(", ") format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}\n\n/* roboto-700 - latin */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 700;\n  font-display: swap;\n  src: local('Roboto Bold'), local('Roboto-Bold'),\n       url(", ") format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */\n       url(", ") format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}\n\n/* css reset */\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\n\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\nhtml {\n  font-size: 100%;\n}\n\nbody {\n  color: ", ";\n  display: flex;\n  flex-direction: column;\n  font-family: ", ";\n  font-size: 1.125rem;\n  line-height: 1.5;\n  margin: 0;\n  overflow: auto;\n  padding: 0;\n  .is-modal-open {\n    overflow: none;\n  }\n}\n\nimg {\n  max-width: 100%;\n  height: auto;\n}\n\niframe {\n  max-width: 100%;\n}\n\n\n/* link styles */\na:active, a:visited, a:hover, a:link {\n    color: ", ";\n}\n\n/* list and paragraph styles */\np, ul, code {\n  padding: 0;\n  margin-bottom: ", ";\n}\n\nb {\n  font-weight: bold;\n}\n\nul {\n  list-style: disc;\n  padding-left: ", ";\n};\n}\n\nli {\n  margin-bottom: ", ";\n  margin-left: ", ";\n}\n\ncode {\n  box-sizing: border-box;\n  background-color:  ", ";\n  display: block;\n  padding:  ", ";\n  color: ", ";\n  width: 100%;\n  font-family: 'Courier New', Courier, monospace;\n  white-space: normal;\n\n  font-size: ", ";\n\n\n  @media (max-width: ", ") {\n   font-size: ", ";\n  }\n\n  @media (max-width: ", ") {\n   font-size: ", ";\n  }\n}\n\n/* heading styles */\nh1, h2, h3, h4, h5, .heading-1, .heading-2, .heading-3, .heading-4, .heading-5, .heading-6 {\n  font-family: ", ";\n  padding: 0;\n  margin: 0;\n  margin-bottom: ", ";\n  line-height: 125%;\n}\n\nh1, .heading-1 {\n  font-size: ", ";\n  font-weight: 500;\n\n  @media (max-width: ", ") {\n   font-size: ", ";\n  }\n\n  @media (max-width: ", ") {\n   font-size: ", ";\n  }\n}\n\nh2, .heading-2 {\n  font-size: ", ";\n  font-weight: 500;\n\n  @media (max-width: ", ") {\n   font-size: ", ";\n  }\n\n  @media (max-width: ", ") {\n   font-size: ", ";\n  }\n}\n\nh3, .heading-3 {\n  font-size: ", ";\n  font-weight: 500;\n\n  @media (max-width: ", ") {\n   font-size: ", ";\n  }\n\n  @media (max-width: ", ") {\n   font-size: ", ";\n  }\n}\n\nh4, .heading-4 {\n  font-size: ", ";;\n  font-weight: 500;\n  margin-bottom: ", ";\n\n  @media (max-width: ", ") {\n   font-size: ", ";\n  }\n\n  @media (max-width: ", ") {\n   font-size: ", ";\n  }\n}\n\nh5, .heading-5 {\n  font-family: ", ";\n  font-size:  ", ";\n  font-weight: 500;\n\n  @media (max-width: ", ") {\n   font-size: ", ";\n  }\n\n  @media (max-width: ", ") {\n   font-size: ", ";\n  }\n}\n\nh6, .heading-6 {\n  font-family: ", ";\n  font-size:  ", ";\n  font-weight: 500;\n\n  @media (max-width: ", ") {\n   font-size: ", ";\n  }\n\n  @media (max-width: ", ") {\n   font-size: ", ";\n  }\n}\n\nh1 + h2, h1 + h2.heading-2 {\n  margin-top: -", ";\n}\n\nh2 + h4 {\n  margin-top: -", ";\n}\n\n\n/* table styles */\n  table {\n    border-collapse: collapse;\n    border-left: ", ";\n    border-right: ", ";\n    margin: 0;\n    width: 100%;\n  margin-bottom: ", ";\n    tr {\n      border-bottom: ", ";\n      width: 100%;\n    }\n    tr:first-child {\n      border-top: ", ";\n    }\n    td:first-child {\n      font-weight: 700;\n    }\n\n    td, th {\n      background-color: #fff;\n      padding: ", " ", ";\n    }\n\n    th {\n      background-color: ", ";\n    }\n\n\n  }\n\n\n  @media (max-width: ", ") {\n    table.responsive-collapse {\n\n    table, thead, tbody, th, td, tr {\n\t\tdisplay: block;\n\t}\n\n  thead tr {\n\t\tposition: absolute;\n\t\ttop: -9999px;\n\t\tleft: -9999px;\n\t}\n    }\n\n  table.n-plus-2 {\n  td:nth-child(n+2) {\n    display: inline-block\n\t}\n  }\n\n\n\n  }\n\n\n/* makes a class for each color in theme */\n  ", "\n\n/* makes a class for each font in theme */\n", "\n\n/* random text styles */\nblockquote {\n  padding: ", ";\n  background-color:  ", ";\n  border:  ", ";\n  margin:  ", ";\n\n  p:last-child, ul:last-child {\n    margin-bottom: 0;\n  }\n\n}\n\n.italic {\n  font-style: italic;\n}\n\n.text-shadow-dark {\ntext-shadow: 1px 2px #000\n}\n\n.line-height-1 {\n  line-height: 1;\n}\n\n.line-height-1-2-0 {\n  line-height: 1;\n}\n\n.bold {\n  font-weight: 700;\n}\n\n.lead {\n  font-size: ", ";\n  line-height: 130%;\n  font-family: ", ";\n\n  @media (max-width: ", ") {\n   font-size: ", ";\n  }\n\n  @media (max-width: ", ") {\n   font-size: ", ";\n  }\n}\n\n\n"]);

  _templateObject$f = function _templateObject() {
    return data;
  };

  return data;
}
var GlobalStyles = styled.createGlobalStyle(_templateObject$f(), function (_ref) {
  var theme = _ref.theme;
  return theme.breakPoints.tablet;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.breakPoints.desktop;
}, ptSerifWoff2, ptSerifWoff, robotoMediumWoff2, robotoMediumWoff, robotoBoldWoff2, robotoBoldWoff, function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors['dark-4'];
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.typography.fonts['font-1'];
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.colors['dark-3'];
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.unit(1);
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.unit(1);
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.unit(0.25);
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.unit(0.75);
}, function (_ref10) {
  var theme = _ref10.theme;
  return theme.colors['light-1'];
}, function (_ref11) {
  var theme = _ref11.theme;
  return theme.unit(0.5);
}, function (_ref12) {
  var theme = _ref12.theme;
  return theme.colors['dark-1'];
}, function (_ref13) {
  var theme = _ref13.theme;
  return theme.typography.sizes.desktop.sm;
}, function (_ref14) {
  var theme = _ref14.theme;
  return theme.breakPoints.tablet;
}, function (_ref15) {
  var theme = _ref15.theme;
  return theme.typography.sizes.tablet.sm;
}, function (_ref16) {
  var theme = _ref16.theme;
  return theme.breakPoints.mobile;
}, function (_ref17) {
  var theme = _ref17.theme;
  return theme.typography.sizes.mobile.xsm;
}, function (_ref18) {
  var theme = _ref18.theme;
  return theme.typography.fonts['font-2'];
}, function (_ref19) {
  var theme = _ref19.theme;
  return theme.unit(0.5);
}, function (_ref20) {
  var theme = _ref20.theme;
  return theme.typography.sizes.desktop.xxlg;
}, function (_ref21) {
  var theme = _ref21.theme;
  return theme.breakPoints.tablet;
}, function (_ref22) {
  var theme = _ref22.theme;
  return theme.typography.sizes.tablet.xxlg;
}, function (_ref23) {
  var theme = _ref23.theme;
  return theme.breakPoints.mobile;
}, function (_ref24) {
  var theme = _ref24.theme;
  return theme.typography.sizes.mobile.xxlg;
}, function (_ref25) {
  var theme = _ref25.theme;
  return theme.typography.sizes.desktop.xlg;
}, function (_ref26) {
  var theme = _ref26.theme;
  return theme.breakPoints.tablet;
}, function (_ref27) {
  var theme = _ref27.theme;
  return theme.typography.sizes.tablet.xlg;
}, function (_ref28) {
  var theme = _ref28.theme;
  return theme.breakPoints.mobile;
}, function (_ref29) {
  var theme = _ref29.theme;
  return theme.typography.sizes.mobile.xlg;
}, function (_ref30) {
  var theme = _ref30.theme;
  return theme.typography.sizes.desktop.lg;
}, function (_ref31) {
  var theme = _ref31.theme;
  return theme.breakPoints.tablet;
}, function (_ref32) {
  var theme = _ref32.theme;
  return theme.typography.sizes.tablet.lg;
}, function (_ref33) {
  var theme = _ref33.theme;
  return theme.breakPoints.mobile;
}, function (_ref34) {
  var theme = _ref34.theme;
  return theme.typography.sizes.mobile.lg;
}, function (_ref35) {
  var theme = _ref35.theme;
  return theme.typography.sizes.desktop.md;
}, function (_ref36) {
  var theme = _ref36.theme;
  return theme.unit(0.3);
}, function (_ref37) {
  var theme = _ref37.theme;
  return theme.breakPoints.tablet;
}, function (_ref38) {
  var theme = _ref38.theme;
  return theme.typography.sizes.tablet.md;
}, function (_ref39) {
  var theme = _ref39.theme;
  return theme.breakPoints.mobile;
}, function (_ref40) {
  var theme = _ref40.theme;
  return theme.typography.sizes.mobile.md;
}, function (_ref41) {
  var theme = _ref41.theme;
  return theme.typography.fonts['font-1'];
}, function (_ref42) {
  var theme = _ref42.theme;
  return theme.typography.sizes.desktop.sm;
}, function (_ref43) {
  var theme = _ref43.theme;
  return theme.breakPoints.tablet;
}, function (_ref44) {
  var theme = _ref44.theme;
  return theme.typography.sizes.tablet.sm;
}, function (_ref45) {
  var theme = _ref45.theme;
  return theme.breakPoints.mobile;
}, function (_ref46) {
  var theme = _ref46.theme;
  return theme.typography.sizes.mobile.sm;
}, function (_ref47) {
  var theme = _ref47.theme;
  return theme.typography.fonts['font-1'];
}, function (_ref48) {
  var theme = _ref48.theme;
  return theme.typography.sizes.desktop.xsm;
}, function (_ref49) {
  var theme = _ref49.theme;
  return theme.breakPoints.tablet;
}, function (_ref50) {
  var theme = _ref50.theme;
  return theme.typography.sizes.tablet.xsm;
}, function (_ref51) {
  var theme = _ref51.theme;
  return theme.breakPoints.mobile;
}, function (_ref52) {
  var theme = _ref52.theme;
  return theme.typography.sizes.mobile.xsm;
}, function (_ref53) {
  var theme = _ref53.theme;
  return theme.unit(0.5);
}, function (_ref54) {
  var theme = _ref54.theme;
  return theme.unit(0.5);
}, function (_ref55) {
  var theme = _ref55.theme;
  return theme.border;
}, function (_ref56) {
  var theme = _ref56.theme;
  return theme.border;
}, function (_ref57) {
  var theme = _ref57.theme;
  return theme.unit(1);
}, function (_ref58) {
  var theme = _ref58.theme;
  return theme.border;
}, function (_ref59) {
  var theme = _ref59.theme;
  return theme.border;
}, function (_ref60) {
  var theme = _ref60.theme;
  return theme.unit(0.25);
}, function (_ref61) {
  var theme = _ref61.theme;
  return theme.unit(0.5);
}, function (_ref62) {
  var theme = _ref62.theme;
  return theme.colors['light-1'];
}, function (_ref63) {
  var theme = _ref63.theme;
  return theme.breakPoints.mobile;
}, function (_ref64) {
  var theme = _ref64.theme;
  var colors = '';

  for (var color in theme.colors) {
    colors += ".".concat(color, "\n         {\n          color: ").concat(theme.colors[color], ";\n         }\n       ");
  }

  return colors;
}, function (_ref65) {
  var theme = _ref65.theme;
  var fonts = '';

  for (var font in theme.typography.fonts) {
    fonts += ".".concat(font, "\n         {\n          font-family: ").concat(theme.typography.fonts[font], ";\n         }\n       ");
  }

  return fonts;
}, function (_ref66) {
  var theme = _ref66.theme;
  return theme.unit(0.75);
}, function (_ref67) {
  var theme = _ref67.theme;
  return theme.colors['light-1'];
}, function (_ref68) {
  var theme = _ref68.theme;
  return theme.border;
}, function (_ref69) {
  var theme = _ref69.theme;
  return "".concat(theme.unit(1), " 0");
}, function (_ref70) {
  var theme = _ref70.theme;
  return theme.typography.sizes.desktop.md;
}, function (_ref71) {
  var theme = _ref71.theme;
  return theme.typography.fonts['font-3'];
}, function (_ref72) {
  var theme = _ref72.theme;
  return theme.breakPoints.tablet;
}, function (_ref73) {
  var theme = _ref73.theme;
  return theme.typography.sizes.tablet.md;
}, function (_ref74) {
  var theme = _ref74.theme;
  return theme.breakPoints.mobile;
}, function (_ref75) {
  var theme = _ref75.theme;
  return theme.typography.sizes.mobile.md;
});

function head () {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(GlobalStyles, null));
}

function _templateObject$g() {
  var data = _taggedTemplateLiteral(["\n  form {\n    padding: ", ";\n    border: ", ";\n    background-color: ", ";\n  }\n\n  input,\n  textarea {\n    width: 100%;\n    min-width: 300px;\n    border: none;\n    height: ", ";\n    display: block;\n    margin-bottom: ", ";\n  }\n\n  textarea {\n    height: ", ";\n    resize: none;\n  }\n\n  label {\n    display: block;\n  }\n"]);

  _templateObject$g = function _templateObject() {
    return data;
  };

  return data;
}

var FormWrapper = styled__default('div')(_templateObject$g(), function (_ref) {
  var theme = _ref.theme;
  return theme.unit(0.5);
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.border;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.light2;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.unit(1);
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.unit(0.5);
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.unit(3);
});

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
                meta = _ref.meta;
            return {
              path: meta.slug,
              getData: function getData() {
                return {
                  content: content,
                  meta: meta
                };
              },
              template: 'src/containers/page'
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
            template: 'src/containers/post'
          };
        });
        var list = routeData.map(function (post) {
          var title = post.title,
              id = post.id,
              path = post.path;
          return {
            id: id,
            path: path,
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
          template: 'src/pages/blog'
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
exports.Header = Header;
exports.Jumbotron = Jumbotron;
exports.LoadingScreen = Loading;
exports.Quote = Quote;
exports.ScrollToTop = ScrollToTop;
exports.Section = Section;
exports.utils = utils;
