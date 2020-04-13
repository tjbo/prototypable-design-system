'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var styled = require('styled-components');
var styled__default = _interopDefault(styled);

function Article(_ref) {
  var body = _ref.body;
  return /*#__PURE__*/React.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: body
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

var _unit = 32;
function makePixelValue(value) {
  return value + 'px';
}
var config = {
  breakPoints: {
    mobile: makePixelValue(600),
    tablet: makePixelValue(35 * _unit),
    desktop: _unit * 40
  },
  colors: {
    dark1: '#000',
    dark2: '#2b6242',
    dark3: '#0090e7',
    dark4: '#454545',
    dark5: '#0066a3',
    light1: '#f5faff',
    light2: '36,139,204'
  },
  fonts: {
    font1: 'PT Serif',
    font2: 'Roboto',
    font3: 'PT Serif Caption'
  },
  border: '1px solid #eee',
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
  var data = _taggedTemplateLiteral(["\n  color: #fff;\n  text-align: center;\n  font-size: ", ";\n  font-style: 'italic';\n  font-family: ", ";\n\n  p,\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    font-size: ", ";\n    font-family: ", ";\n    font-style: 'italic';\n    margin: 0;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var BannerUI = styled__default('div')(_templateObject(), config.unit(1.25), config.fonts.font3, config.unit(1.25), config.fonts.font3);

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  max-width: ", ";\n  margin: 0 auto;\n  padding: ", " 0;\n  text-align: ", ";\n\n  @media (max-width: ", ") {\n    margin: 0 ", ";\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$1() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  background-color: ", ";\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}

var getBgColor = function getBgColor(_ref) {
  var background = _ref.background;

  if (background === 'light') {
    return "".concat(config.colors.light1);
  } else if (background === 'dark') {
    return "".concat(config.colors.dark3);
  } else {
    return '#fff';
  }
};

var getInnerWidth = function getInnerWidth(_ref2) {
  var innerWidth = _ref2.innerWidth;

  if (innerWidth === 'medium') {
    return '720px';
  } else if (innerWidth === 'small') {
    return "".concat(config.unit(20));
  } else {
    return "".concat(config.unit(33));
  }
};

var SectionWrapperUI = styled__default('section')(_templateObject$1(), getBgColor);
var SectionUI = styled__default('div')(_templateObject2(), getInnerWidth, config.unit(1), function (_ref3) {
  var textAlign = _ref3.textAlign;
  return textAlign;
}, config.breakPoints.tablet, config.unit(0.5));

function section (_ref) {
  var _ref$children = _ref.children,
      children = _ref$children === void 0 ? [] : _ref$children,
      _ref$textAlign = _ref.textAlign,
      textAlign = _ref$textAlign === void 0 ? 'left' : _ref$textAlign,
      _ref$background = _ref.background,
      background = _ref$background === void 0 ? 'default' : _ref$background,
      _ref$isFullWidth = _ref.isFullWidth,
      isFullWidth = _ref$isFullWidth === void 0 ? false : _ref$isFullWidth,
      _ref$innerWidth = _ref.innerWidth,
      innerWidth = _ref$innerWidth === void 0 ? 'big' : _ref$innerWidth,
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
      innerWidth: innerWidth
    }, title ? /*#__PURE__*/React.createElement("h2", {
      dangerouslySetInnerHTML: {
        __html: title
      }
    }) : title, children));
  }
}

function banner (_ref) {
  var body = _ref.body;
  return /*#__PURE__*/React.createElement(BannerUI, null, /*#__PURE__*/React.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: body
    }
  }));
}

function _templateObject$2() {
  var data = _taggedTemplateLiteral(["\n  background-color: ", ";\n  border: 0;\n  border-radius: 5px;\n  color: #fff;\n  cursor: pointer;\n  display: block;\n  font-family: ", ";\n  font-size: ", ";\n  font-weight: 700;\n  height: ", ";\n  margin-top: ", ";\n  width: 100%;\n  max-width: ", "px;\n  background-image: linear-gradient(\n    to bottom,\n    #e52d27 0%,\n    #b31217 41%,\n    #e52d27 100%\n  );\n  ", "\n\n  border:1px solid #d02718;\n  box-shadow: inset 0px 1px 0px 0px #f5978e;\n"]);

  _templateObject$2 = function _templateObject() {
    return data;
  };

  return data;
}
var ButtonUI = styled__default('button')(_templateObject$2(), config.colors.dark2, config.fonts.font2, config.unit(0.75), config.unit(1.75), config.unit(0.66), function (_ref) {
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

function _templateObject2$1() {
  var data = _taggedTemplateLiteral(["\n  background: #fff;\n  /* padding: ", "; */\n  /* padding-top: ", "; */\n"]);

  _templateObject2$1 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$3() {
  var data = _taggedTemplateLiteral(["\n  h3 {\n    /* padding: 0; */\n  }\n\n  * {\n    box-sizing: border-box;\n  }\n\n  .card {\n    line-height: 1.75;\n    background: #fff;\n    border: ", ";\n\n    /* Position child elements relative to this element */\n    .aspect-ratio-box {\n      position: relative;\n    }\n\n    /* Create a pseudo element that uses padding-bottom to take up space */\n    .aspect-ratio-box::after {\n      display: block;\n      content: '';\n      /* 16:9 aspect ratio */\n      padding-bottom: 56.25%;\n    }\n\n    /* Image is positioned absolutely relative to the parent element */\n    .aspect-ratio-box img {\n      /* Image should match parent box size */\n      position: absolute;\n      left: 0;\n      top: 0;\n      width: 100%;\n      height: 100%;\n    }\n    .content {\n      padding: ", " ", ";\n    }\n  }\n"]);

  _templateObject$3 = function _templateObject() {
    return data;
  };

  return data;
}
var CardsWrapperUI = styled__default('div')(_templateObject$3(), config.border, config.unit(0.5), config.unit(0.66));
/* export const FieldUI = styled('div')`
  padding: 3px 0; */

var ContentUI = styled__default('div')(_templateObject2$1(), config.unit(0.75), config.unit(0.25));
var CardImageUI = styled__default('div')(_templateObject3());
var FieldTitleUI = styled__default('b')(_templateObject4());
var FieldTextUI = styled__default('span')(_templateObject5());

function _templateObject$4() {
  var data = _taggedTemplateLiteral(["\n  * {\n    box-sizing: border-box;\n  }\n\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  flex-wrap: wrap;\n\n  .col {\n    min-width: 32.5%;\n    max-width: 32.5%;\n    margin-bottom: 1.25%;\n    flex: 1;\n\n    @media (max-width: ", ") {\n      margin-bottom: ", ";\n    }\n  }\n\n  @media (min-width: ", ") and (max-width: ", ") {\n    .col {\n      min-width: 49%;\n      max-width: 49%;\n    }\n  }\n\n  @media (max-width: ", ") {\n    .col {\n      display: block;\n      min-width: 100%;\n      max-width: 100%;\n    }\n  }\n"]);

  _templateObject$4 = function _templateObject() {
    return data;
  };

  return data;
}
var GridWrapperUI = styled__default('div')(_templateObject$4(), config.breakPoints.tablet, config.unit(0.5), config.breakPoints.mobile, config.breakPoints.tablet, config.breakPoints.mobile);

function Grid(_ref) {
  var body = _ref.body;
  return /*#__PURE__*/React.createElement(GridWrapperUI, {
    dangerouslySetInnerHTML: {
      __html: body
    }
  });
}

function cards (_ref) {
  var body = _ref.body;
  return /*#__PURE__*/React.createElement(CardsWrapperUI, null, /*#__PURE__*/React.createElement(Grid, {
    body: body
  }));
}

function _templateObject$5() {
  var data = _taggedTemplateLiteral(["\n  details {\n    display: flex;\n    border: ", ";\n    margin-bottom: ", ";\n    padding: ", ";\n    background-color: #fff;\n  }\n\n  summary {\n    width: 100%;\n    color: ", ";\n    cursor: pointer;\n    font-size: ", ";\n    font-weight: 500;\n    position: relative;\n    padding: 0;\n    &:after {\n      content: '';\n      color: ", ";\n      border: solid ", ";\n      border-width: 0 3px 3px 0;\n      display: inline-block;\n      padding: 4px;\n      transform: rotate(-135deg);\n      -webkit-transform: rotate(-135deg);\n      position: absolute;\n      right: 0;\n      top: 3px;\n    }\n    [open] &:after {\n      transform: rotate(45deg);\n      -webkit-transform: rotate(45deg);\n    }\n    &:focus {\n      outline: none;\n    }\n    &::-webkit-details-marker {\n      display: none;\n    }\n  }\n"]);

  _templateObject$5 = function _templateObject() {
    return data;
  };

  return data;
}
var FaqWrapperUI = styled__default('div')(_templateObject$5(), config.border, config.unit(1), config.unit(1), config.colors.dark4, config.unit(0.66), config.colors.dark1, config.colors.dark4);

function faq (_ref) {
  var body = _ref.body;
  return /*#__PURE__*/React.createElement(FaqWrapperUI, {
    dangerouslySetInnerHTML: {
      __html: body
    }
  });
}

function _templateObject4$1() {
  var data = _taggedTemplateLiteral(["\n  font-size: ", ";\n  color: #fff;\n  margin-right: ", ";\n"]);

  _templateObject4$1 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$1() {
  var data = _taggedTemplateLiteral(["\n  color: #fff;\n  white-space: nowrap;\n  font-style: normal;\n  a:active,\n  a:visited,\n  a:hover,\n  a:link {\n    color: #fff;\n    text-decoration: none;\n    font-family: ", ";\n    font-size: ", ";\n    text-transform: uppercase;\n  }\n  font-family: ", ";\n"]);

  _templateObject3$1 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$2() {
  var data = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  display: flex;\n  justify-content: space-between;\n  background-color: ", ";\n  padding: ", " ", ";\n  padding-right: ", ";\n  font-family: ", ";\n"]);

  _templateObject2$2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$6() {
  var data = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  display: block;\n  background-color: ", ";\n  max-width: 100%;\n  flex-shrink: 0;\n"]);

  _templateObject$6 = function _templateObject() {
    return data;
  };

  return data;
}
var FooterUI = styled__default('footer')(_templateObject$6(), config.colors.dark1);
var FooterUIInner = styled__default('div')(_templateObject2$2(), config.colors.dark1, config.unit(0.5), config.unit(0.75), config.unit(1), config.fonts.font1);
var AddressUI = styled__default('address')(_templateObject3$1(), config.fonts.font2, config.unit(0.65), config.fonts.font2);
var FinePrintUI = styled__default('div')(_templateObject4$1(), config.unit(0.4), config.unit(1));

function Footer(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React.createElement(FooterUI, null, /*#__PURE__*/React.createElement(FooterUIInner, null, /*#__PURE__*/React.createElement(AddressUI, null)));
}

Footer.AddressUI = AddressUI;

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  @media (max-width: ", ") {\n    width: ", ";\n    height: ", ";\n    position: relative;\n    display: block;\n    margin: (", ") auto ", " auto;\n    margin-top: -", ";\n\n    .line {\n      display: block;\n      background: #fff;\n      width: 100%;\n      height: ", ";\n      position: absolute;\n      left: 0;\n      border-radius: (", ");\n      transition: all 0.4;\n      -webkit-transition: all 0.4;\n      -moz-transition: all 0.4;\n\n      &.line-1 {\n        top: 0;\n      }\n      &.line-2 {\n        top: 50%;\n      }\n      &.line-3 {\n        top: 100%;\n      }\n    }\n\n    ", "\n  }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  ", " {\n    align-items: center;\n    background-color: ", ";\n    box-sizing: border-box;\n    color: #fff;\n    display: flex;\n    height: ", ";\n    flex-direction: row;\n    justify-content: space-between;\n    padding: 0 ", " 0 ", ";\n    position: fixed;\n    top: 0;\n    width: 100%;\n    z-index: 1;\n  }\n\n  ", " {\n    position: relative;\n    height: ", ";\n    display: block;\n  }\n\n  ", " {\n    font-size: ", ";\n    margin: 0;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    text-align: center;\n    justify-content: space-around;\n    font-family: ", ";\n    font-weight: 500;\n    text-align: left;\n    text-transform: uppercase;\n    a:active,\n    a:visited,\n    a:hover,\n    a:link {\n      color: #fff;\n      text-decoration: none;\n    }\n  }\n\n  ", " {\n    display: none;\n  }\n\n  ", " {\n    display: flex;\n    flex-direction: row;\n    font-size: ", ";\n    font-family: ", ";\n    list-style: none;\n    box-sizing: border-box;\n\n    a {\n      margin-left: ", ";\n      :active,\n      :visited,\n      :hover,\n      :link {\n        color: #fff;\n        text-decoration: none;\n      }\n    }\n  }\n\n  ", " {\n    display: none;\n  }\n\n  @media (max-width: ", ") {\n    .is-open ", " {\n      padding-top: 50px;\n      align-content: stretch;\n      align-items: center;\n      background-color: ", ";\n      display: flex;\n      flex-direction: column;\n      left: 0;\n      min-height: 100vh;\n      position: absolute;\n      top: 0;\n      width: 100%;\n      z-index: 1;\n    }\n\n    .is-closed ", " {\n      display: none;\n    }\n\n    ", " {\n      cursor: pointer;\n      box-sizing: border-box;\n      font-size: ", ";\n      margin: 0;\n      padding: ", ";\n      text-align: center;\n      width: auto;\n      text-transform: uppercase;\n\n      :hover {\n        background-color: ", ";\n\n        padding: ", ";\n      }\n    }\n\n    ", " {\n      cursor: pointer;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      position: absolute;\n      right: 0;\n      top: 0;\n      width: ", ";\n      height: ", ";\n      z-index: 2;\n    }\n\n    .is-closed ", " {\n      margin-right: 15px;\n    }\n  }\n\n  @media (max-width: ", ") {\n    ", " {\n      height: ", ";\n    }\n\n    ", " {\n      height: ", ";\n    }\n\n    ", " {\n      font-size: ", ";\n    }\n\n    ", " {\n      width: ", ";\n      height: ", ";\n    }\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral([""]);

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

function _templateObject2$3() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject2$3 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$7() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject$7 = function _templateObject() {
    return data;
  };

  return data;
}
var BrandUI = styled__default('div')(_templateObject$7());
var HeaderUI = styled__default('header')(_templateObject2$3());
var HeaderPushUI = styled__default('div')(_templateObject3$2());
var NavMenuTriggerUI = styled__default('span')(_templateObject4$2());
var NavMenuUI = styled__default('nav')(_templateObject5$1());
var NavLinkUI = styled__default('span')(_templateObject6());
var HeaderContainer = styled__default('div')(_templateObject7(), HeaderUI, config.colors.dark1, config.layout.desktop.headerHeight, config.unit(0.75), config.unit(0.25), HeaderPushUI, config.layout.desktop.headerHeight, BrandUI, config.unit(1.125), config.fonts.font2, NavMenuTriggerUI, NavMenuUI, config.unit(0.7), config.fonts.font2, config.unit(0.5), NavMenuTriggerUI, config.breakPoints.tablet, NavMenuUI, config.colors.dark3, NavMenuUI, NavLinkUI, config.unit(0.75), config.unit(0.25), config.colors.dark5, config.unit(0.25), NavMenuTriggerUI, config.layout.tablet.headerHeight, config.layout.tablet.headerHeight, NavMenuUI, config.breakPoints.mobile, HeaderUI, config.layout.mobile.headerHeight, HeaderPushUI, config.layout.mobile.headerHeight, BrandUI, config.unit(0.66), NavMenuTriggerUI, config.layout.mobile.headerHeight, config.layout.mobile.headerHeight);
var heightLine = 3;
var heightIcon = 20;
var translateY = heightIcon / 2;
var TriggerIconUI = styled__default('div')(_templateObject8(), config.breakPoints.tablet, config.unit(1), makePixelValue(heightIcon), makePixelValue(heightIcon * 2), heightIcon, config.unit(0.125), makePixelValue(heightLine), makePixelValue(heightLine / 2), function (_ref) {
  var isOpen = _ref.isOpen;
  return isOpen && "\n    .line-1 {\n      transform: translateY(".concat(makePixelValue(translateY), ") translateX(0) rotate(45deg);\n    }\n    .line-2 {\n      opacity: 0;\n    }\n    .line-3 {\n      transform: translateY(").concat(makePixelValue(translateY * -1), ") translateX(0) rotate(-45deg);\n  }");
});

var onShowModal = function onShowModal() {
  var scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
  var body = document.body;
  body.style.position = 'fixed';
  body.style.top = "-".concat(scrollY);
};
var onHideModal = function onHideModal() {
  var body = document.body;
  var scrollY = body.style.top;
  body.style.position = '';
  body.style.top = '';
  window.scrollTo(0, parseInt(scrollY || '0') * -1);
};
window.addEventListener('scroll', function () {
  document.documentElement.style.setProperty('--scroll-y', "".concat(window.scrollY, "px"));
});

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

      window.addEventListener('resize', function () {
        return _this2.onResize();
      });
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      var isOpen = this.state.isOpen;
      return /*#__PURE__*/React.createElement(HeaderContainer, null, /*#__PURE__*/React.createElement(HeaderPushUI, null), /*#__PURE__*/React.createElement(HeaderUI, {
        className: this.state.isOpen ? 'is-open' : 'is-closed'
      }, React.Children.map(children, function (child) {
        return React.cloneElement(child);
      }), /*#__PURE__*/React.createElement(NavMenuTriggerUI, {
        onClick: this.toggleMenu
      }, /*#__PURE__*/React.createElement(TriggerIconUI, {
        isOpen: isOpen
      }, /*#__PURE__*/React.createElement("div", {
        className: "line line-1"
      }), /*#__PURE__*/React.createElement("div", {
        className: "line line-2"
      }), /*#__PURE__*/React.createElement("div", {
        className: "line line-3"
      })))));
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

Header.NavMenu = NavMenuUI;
Header.NavLink = NavLinkUI;

function _templateObject2$4() {
  var data = _taggedTemplateLiteral(["\n  max-width: 100%;\n  img {\n    display: block;\n    width: 100%;\n    height: calc(100vh - ", ");\n    object-fit: cover;\n  }\n\n  @media (max-width: ", ") {\n    /* display: none; */\n  }\n"]);

  _templateObject2$4 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$8() {
  var data = _taggedTemplateLiteral(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  min-height: calc(100vh - ", ");\n  position: absolute;\n  top: ", ";\n  width: 100%;\n\n  h1 {\n    font-family: ", ";\n    font-size: ", ";\n    line-height: 1;\n    margin-bottom: -", ";\n    text-align: center;\n  }\n\n  h2 {\n    font-family: ", ";\n    font-size: ", ";\n    font-weight: 700;\n    line-height: 1.125;\n    margin-bottom: ", ";\n    margin-top: 0.25em;\n    text-align: center;\n  }\n"]);

  _templateObject$8 = function _templateObject() {
    return data;
  };

  return data;
}
var ContentUI$1 = styled__default('div')(_templateObject$8(), config.layout.desktop.headerHeight, config.unit(2.25), config.fonts.font2, config.unit(2), config.unit(1), config.fonts.font2, config.unit(1.5), config.unit(0.25));
var ImageUI = styled__default('div')(_templateObject2$4(), config.layout.desktop.headerHeight, config.breakPoints.mobile); // url('https://images.unsplash.com/photo-1520020324516-dba91274d8ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=2734&q=80');
// background-blend-mode: overlay; */

/* background-image: linear-gradient(rgba(0, 144, 231, 0), rgba(0, 144, 231, 0)),
    url('https://images.unsplash.com/photo-1491964247380-4f630fb757c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'); */

/* background-image: url('https://media.istockphoto.com/photos/beautiful-sunset-of-los-angeles-downtown-skyline-and-palm-trees-in-picture-id884384784?s=2048x2048'); */

/* background-image: url('https://images.unsplash.com/photo-1576694541627-114e57070466?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'); */

/* background-position: center bottom; */

/* background-image: url('https://images.unsplash.com/photo-1528656053220-4e535d66150d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'); */

/* background-image: url('https://images.unsplash.com/photo-1494526585095-c41746248156?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'); */

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
      _ref$image = _ref.image,
      image = _ref$image === void 0 ? null : _ref$image;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ImageUI, null, /*#__PURE__*/React.createElement("img", {
    srcSet: getSrcSets(image)
  })), /*#__PURE__*/React.createElement(ContentUI$1, {
    dangerouslySetInnerHTML: {
      __html: body
    }
  }));
}

function Loader() {
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: config.unit(1),
    height: config.unit(1),
    viewBox: "0 0 512 512"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M256.001 0c-8.284 0-15 6.716-15 15v96.4c0 8.284 6.716 15 15 15s15-6.716 15-15V15c0-8.284-6.716-15-15-15zM256.001 385.601c-8.284 0-15 6.716-15 15V497c0 8.284 6.716 15 15 15s15-6.716 15-15v-96.399c0-8.285-6.716-15-15-15zM196.691 123.272l-48.2-83.485c-4.142-7.175-13.316-9.633-20.49-5.49-7.174 4.142-9.632 13.316-5.49 20.49l48.2 83.485c2.778 4.813 7.82 7.502 13.004 7.502 2.545 0 5.124-.648 7.486-2.012 7.174-4.142 9.632-13.316 5.49-20.49zM389.491 457.212l-48.199-83.483c-4.142-7.175-13.316-9.633-20.49-5.49-7.174 4.142-9.632 13.316-5.49 20.49l48.199 83.483c2.778 4.813 7.82 7.502 13.004 7.502 2.545 0 5.124-.648 7.486-2.012 7.174-4.142 9.632-13.316 5.49-20.49zM138.274 170.711L54.788 122.51c-7.176-4.144-16.348-1.685-20.49 5.49-4.142 7.174-1.684 16.348 5.49 20.49l83.486 48.202a14.928 14.928 0 007.486 2.012c5.184 0 10.226-2.69 13.004-7.503 4.142-7.174 1.684-16.348-5.49-20.49zM472.213 363.51l-83.484-48.199c-7.176-4.142-16.349-1.684-20.49 5.491-4.142 7.175-1.684 16.349 5.49 20.49l83.484 48.199a14.93 14.93 0 007.486 2.012c5.184 0 10.227-2.69 13.004-7.502 4.142-7.176 1.684-16.35-5.49-20.491zM111.401 241.002H15c-8.284 0-15 6.716-15 15s6.716 15 15 15h96.401c8.284 0 15-6.716 15-15s-6.716-15-15-15zM497 241.002h-96.398c-8.284 0-15 6.716-15 15s6.716 15 15 15H497c8.284 0 15-6.716 15-15s-6.716-15-15-15zM143.765 320.802c-4.142-7.175-13.314-9.633-20.49-5.49l-83.486 48.2c-7.174 4.142-9.632 13.316-5.49 20.49 2.778 4.813 7.82 7.502 13.004 7.502 2.545 0 5.124-.648 7.486-2.012l83.486-48.2c7.174-4.142 9.632-13.316 5.49-20.49zM477.702 128.003c-4.142-7.175-13.315-9.632-20.49-5.49l-83.484 48.2c-7.174 4.141-9.632 13.315-5.49 20.489 2.778 4.813 7.82 7.503 13.004 7.503a14.93 14.93 0 007.486-2.012l83.484-48.2c7.174-4.142 9.632-13.316 5.49-20.49zM191.201 368.239c-7.174-4.144-16.349-1.685-20.49 5.49l-48.2 83.485c-4.142 7.174-1.684 16.348 5.49 20.49a14.928 14.928 0 007.486 2.012c5.184 0 10.227-2.69 13.004-7.502l48.2-83.485c4.142-7.174 1.684-16.348-5.49-20.49zM384.001 34.3c-7.175-4.144-16.349-1.685-20.49 5.49l-48.199 83.483c-4.143 7.174-1.685 16.348 5.49 20.49a14.928 14.928 0 007.486 2.012c5.184 0 10.226-2.69 13.004-7.502l48.199-83.483c4.142-7.174 1.684-16.348-5.49-20.49z"
  }));
}

function Loading() {
  return /*#__PURE__*/React.createElement(Jumbotron, null, /*#__PURE__*/React.createElement(Loader, null), 'Loading');
}

function Fonts () {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("link", {
    href: "https://fonts.googleapis.com/css2?family=PT+Serif+Caption:ital@0;1&family=Roboto+Condensed:ital,wght@0,400;0,700;1,400&family=Roboto:wght@500;700;900&display=swap",
    rel: "stylesheet"
  }), /*#__PURE__*/React.createElement("link", {
    href: "https://fonts.googleapis.com/css2?family=Source+Serif+Pro&display=swap",
    rel: "stylesheet"
  }));
}

function _templateObject$9() {
  var data = _taggedTemplateLiteral(["\nbody {\n  font-family: ", ";\n  font-size: ", ";\n  line-height: 1.5;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  color: ", ";\n\n  .is-modal-open {\n    overflow: none;\n  }\n}\n\nh1, h2, h3, h4 {\n  font-family: ", ";\n  padding: 0;\n  margin: 0;\n}\n\nh1 {\n  font-size: ", ";\n  font-weight: 600;\n  margin: 0;\n}\n\nh1.double-size {\n  font-size: ", ";\n}\n\nh2 {\n  font-size: ", ";\n  font-weight: 500;\n  line-height: 1;\n  margin-bottom: ", ";\n}\n\n\nh3 {\n  font-size: ", ";\n  font-weight: 400;\n}\n\nh4 {\n  font-size: ", ";\n  font-weight: 500;\n}\n\nh5 {\n  font-size: ", ";\n}\n\np, ul {\n  padding: 0;\n}\n\np.double-size {\n  font-size: ", ";\n}\n\nul {\n  margin-left: ", ";\n}\n\na:active,\n  a:visited,\n  a:hover,\n  a:link {\n    color: ", ";\n  }\n\n  table {\n    border-collapse: collapse;\n    border-left: ", ";\n    border-right: ", ";\n    margin: 0;\n    max-width: 100%;\n\n    /* @media (max-width: ", ") {\n      border: 0;\n        display: block;\n    } */\n\n\n    tr {\n      border-bottom: ", ";\n      width: 100%;\n\n      /* @media (max-width: ", ") {\n        max-width: 100%;\n        padding: ", ";\n        display: block;\n        border-left: ", ";\n     border-right: ", ";\n    } */\n    }\n    tr:first-child {\n      border-top: ", ";\n    }\n    td:first-child {\n      font-weight: 700;\n      /* min-width: 160px; */\n    }\n\n    td {\n      background-color: #fff;\n      padding: ", " ", ";\n\n\n    }\n\n    @media (max-width: ", ") {\n\n      tr {\n      }\n\n      td {\n        padding: 0 ", ";\n        display: block;\n      }\n\n      td:first-child {\n        padding-top: ", ";\n      }\n\n      td:last-child {\n        padding-bottom: ", ";\n      }\n\n\n     }\n}"]);

  _templateObject$9 = function _templateObject() {
    return data;
  };

  return data;
}
var GlobalStyles = styled.createGlobalStyle(_templateObject$9(), config.fonts.font1, config.unit(0.6), config.colors.dark4, config.fonts.font2, config.unit(1), config.unit(2), config.unit(1.125), config.unit(0.75), config.unit(0.9), config.unit(0.75), config.unit(0.6), config.unit(1), config.unit(2), config.colors.dark3, config.border, config.border, config.breakPoints.mobile, config.border, config.breakPoints.mobile, config.unit(0.5), config.border, config.border, config.border, config.unit(0.25), config.unit(0.5), config.breakPoints.mobile, config.unit(0.5), config.unit(0.5), config.unit(0.5));

function head () {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Fonts, null), /*#__PURE__*/React.createElement(GlobalStyles, null));
}

exports.Article = Article;
exports.Banner = banner;
exports.Button = button;
exports.Cards = cards;
exports.Faq = faq;
exports.Footer = Footer;
exports.Grid = Grid;
exports.Head = head;
exports.Header = Header;
exports.Jumbotron = Jumbotron;
exports.LoadingScreen = Loading;
exports.Section = section;
