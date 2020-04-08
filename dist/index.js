'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var styled = require('styled-components');
var styled__default = _interopDefault(styled);
var reactBreakpoints = require('react-breakpoints');
var Break = _interopDefault(require('react-break'));

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
    mobile: _unit * 12,
    phablet: _unit * 20,
    tablet: _unit * 34,
    desktop: _unit * 40
  },
  colors: {
    dark1: '#000',
    dark2: '#2b6242',
    dark3: '#0090e7',
    dark4: '#454545',
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
      headerHeight: makePixelValue(2.5 * _unit)
    }
  }
};

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  color: #fff;\n  text-align: center;\n  font-size: ", ";\n  font-style: 'italic';\n  font-family: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var BannerUI = styled__default('div')(_templateObject(), config.unit(1.25), config.fonts.font3);

function banner (_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React.createElement(BannerUI, null, children);
}

function _templateObject$1() {
  var data = _taggedTemplateLiteral(["\n  background-color: ", ";\n  border: 0;\n  border-radius: 5px;\n  color: #fff;\n  cursor: pointer;\n  display: block;\n  font-family: ", ";\n  font-size: ", ";\n  font-weight: 700;\n  height: ", ";\n  margin-top: ", ";\n  width: 100%;\n  max-width: ", "px;\n  background-image: linear-gradient(\n    to bottom,\n    #e52d27 0%,\n    #b31217 41%,\n    #e52d27 100%\n  );\n  ", "\n\n  border:1px solid #d02718;\n  box-shadow: inset 0px 1px 0px 0px #f5978e;\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
var ButtonUI = styled__default('button')(_templateObject$1(), config.colors.dark2, config.fonts.font2, config.unit(0.75), config.unit(1.75), config.unit(0.66), function (_ref) {
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

function _templateObject7() {
  var data = _taggedTemplateLiteral([""]);

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

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  padding: 3px 0;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  padding: 0;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  height: 200px;\n  text-align: center;\n  background-size: cover;\n  background-position: center;\n  margin: 0;\n  padding: 0;\n  margin-bottom: ", ";\n\n  img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  background: #fff;\n  padding: ", ";\n  padding-top: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$2() {
  var data = _taggedTemplateLiteral(["\n  img {\n    width: 100%;\n  }\n  display: flex;\n  line-height: 1.75;\n  justify-content: center;\n  flex-direction: column;\n  margin-bottom: ", ";\n  background: #fff;\n  border: ", ";\n"]);

  _templateObject$2 = function _templateObject() {
    return data;
  };

  return data;
}
var CardUI = styled__default('div')(_templateObject$2(), config.unit(1), config.border);
var ContentUI = styled__default('div')(_templateObject2(), config.unit(0.75), config.unit(0.25));
var CardImageUI = styled__default('div')(_templateObject3(), config.unit(0.5));
var TitleUI = styled__default('h3')(_templateObject4());
var FieldUI = styled__default('div')(_templateObject5());
var FieldTitleUI = styled__default('b')(_templateObject6());
var FieldTextUI = styled__default('span')(_templateObject7());

var _short = require('short-uuid');

function makeField(key, value) {
  return /*#__PURE__*/React.createElement(FieldUI, {
    key: _short.generate()
  }, /*#__PURE__*/React.createElement(FieldTitleUI, null, key), /*#__PURE__*/React.createElement(FieldTextUI, null, value));
}

function card (_ref) {
  var _ref$data = _ref.data,
      fields = _ref$data.fields,
      title = _ref$data.title,
      imageUrl = _ref$data.imageUrl;
  return /*#__PURE__*/React.createElement(CardUI, {
    key: _short.generate()
  }, /*#__PURE__*/React.createElement(CardImageUI, null, /*#__PURE__*/React.createElement("img", {
    src: imageUrl
  })), /*#__PURE__*/React.createElement(ContentUI, null, /*#__PURE__*/React.createElement(TitleUI, null, title), fields.map(function (field) {
    return makeField(field.key, field.value);
  })));
}

function _templateObject3$1() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n  clear: both;\n  width: 100%;\n  color: ", ";\n  font-size: ", ";\n  font-weight: 500;\n  height: ", ";\n  position: relative;\n  padding: 0;\n  &:after {\n    content: '';\n    color: ", ";\n    border: solid ", ";\n    border-width: 0 3px 3px 0;\n    display: inline-block;\n    padding: 4px;\n    transform: rotate(-135deg);\n    -webkit-transform: rotate(-135deg);\n    position: absolute;\n    right: 0;\n    top: 3px;\n  }\n  [open] &:after {\n    transform: rotate(45deg);\n    -webkit-transform: rotate(45deg);\n  }\n  &:focus {\n    outline: none;\n  }\n  &::-webkit-details-marker {\n    display: none;\n  }\n"]);

  _templateObject3$1 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$1() {
  var data = _taggedTemplateLiteral(["\n  border: ", ";\n  margin-bottom: ", ";\n  padding: ", ";\n  padding-bottom: ", ";\n  background-color: #fff;\n"]);

  _templateObject2$1 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$3() {
  var data = _taggedTemplateLiteral(["\n  border: solid black;\n  border-width: 0 3px 3px 0;\n  display: inline-block;\n  padding: 3px;\n  transform: ", ";\n  -webkit-transform: ", ";\n"]);

  _templateObject$3 = function _templateObject() {
    return data;
  };

  return data;
}
var ArrowUI = styled__default('i')(_templateObject$3(), function (_ref) {
  var isOpen = _ref.isOpen;
  return isOpen ? "rotate(45deg)" : "rotate(-135deg)";
}, function (_ref2) {
  var isOpen = _ref2.isOpen;
  return isOpen ? "rotate(45deg)" : "rotate(-135deg)";
});
var DetailsUI = styled__default('details')(_templateObject2$1(), config.border, config.unit(1), config.unit(1), config.unit(0.75));
var SummaryUI = styled__default('summary')(_templateObject3$1(), config.colors.dark4, config.unit(0.66), config.unit(1.375), config.colors.dark1, config.colors.dark4);

function faq (_ref) {
  var _ref$data = _ref.data,
      content = _ref$data.content,
      title = _ref$data.title;
  return /*#__PURE__*/React.createElement(DetailsUI, null, /*#__PURE__*/React.createElement(SummaryUI, null, /*#__PURE__*/React.createElement("h4", null, title)), /*#__PURE__*/React.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: content
    }
  }));
}

function _templateObject4$1() {
  var data = _taggedTemplateLiteral(["\n  font-size: ", ";\n  color: #fff;\n  margin-right: ", ";\n"]);

  _templateObject4$1 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$2() {
  var data = _taggedTemplateLiteral(["\n  color: #fff;\n  white-space: nowrap;\n  font-style: normal;\n  a:active,\n  a:visited,\n  a:hover,\n  a:link {\n    color: #fff;\n    text-decoration: none;\n    font-family: ", ";\n    font-size: ", ";\n    text-transform: uppercase;\n  }\n  font-family: ", ";\n"]);

  _templateObject3$2 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  background-color: ", ";\n  padding: ", " ", ";\n  padding-right: ", ";\n  font-family: ", ";\n"]);

  _templateObject2$2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$4() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n  width: 100%;\n  background-color: ", ";\n  width: 100%;\n  flex-shrink: 0;\n"]);

  _templateObject$4 = function _templateObject() {
    return data;
  };

  return data;
}
var FooterUI = styled__default('footer')(_templateObject$4(), config.colors.dark1);
var FooterUIInner = styled__default('div')(_templateObject2$2(), config.colors.dark1, config.unit(0.5), config.unit(0.75), config.unit(1), config.fonts.font1);
var AddressUI = styled__default('address')(_templateObject3$2(), config.fonts.font2, config.unit(0.65), config.fonts.font2);
var FinePrintUI = styled__default('div')(_templateObject4$1(), config.unit(0.4), config.unit(1));

function Footer(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React.createElement(FooterUI, null, /*#__PURE__*/React.createElement(FooterUIInner, null, /*#__PURE__*/React.createElement(AddressUI, null)));
}

Footer.AddressUI = AddressUI;

function _templateObject3$3() {
  var data = _taggedTemplateLiteral(["\n  flex: ", ";\n  margin-left: ", ";\n\n  :first-child {\n    margin-left: 0;\n  }\n"]);

  _templateObject3$3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n\n  @media (max-width: ", ") {\n    flex-direction: column;\n  }\n"]);

  _templateObject2$3 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$5() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject$5 = function _templateObject() {
    return data;
  };

  return data;
}
var GridUI = styled__default('div')(_templateObject$5());
var RowUI = styled__default('div')(_templateObject2$3(), makePixelValue(config.breakPoints.mobile));
var ColUI = styled__default('div')(_templateObject3$3(), function (_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 1 : _ref$size;
  return size;
}, config.unit(0.25));

var _short$1 = require('short-uuid');

function Grid(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React.createElement(GridUI, null, children);
}

Grid.Col = function (_ref2) {
  var children = _ref2.children;
  return /*#__PURE__*/React.createElement(ColUI, {
    key: _short$1.generate()
  }, children);
};

function chunk(arr, len) {
  var chunks = [],
      i = 0,
      n = arr.length;

  while (i < n) {
    chunks.push(arr.slice(i, i += len));
  }

  return chunks;
}

var Rows = function Rows(_ref3) {
  var children = _ref3.children,
      _ref3$itemsPerRow = _ref3.itemsPerRow,
      itemsPerRow = _ref3$itemsPerRow === void 0 ? 3 : _ref3$itemsPerRow;

  function getChunks(modifier) {
    var chunks = chunk(children, itemsPerRow - modifier);
    return chunks.map(function (_chunk) {
      return /*#__PURE__*/React.createElement(RowUI, {
        key: _short$1.generate()
      }, _chunk);
    });
  }

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Break, {
    breakpoints: config.breakPoints,
    query: {
      method: 'isAtMost',
      breakpoint: 'mobile'
    }
  }, getChunks(itemsPerRow - 1)), /*#__PURE__*/React.createElement(Break, {
    breakpoints: config.breakPoints,
    query: {
      method: 'isAtMost',
      breakpoint: 'phablet'
    }
  }, getChunks(1)), /*#__PURE__*/React.createElement(Break, {
    breakpoints: config.breakPoints,
    query: {
      method: 'is',
      breakpoint: 'tablet'
    }
  }, getChunks(0)), /*#__PURE__*/React.createElement(Break, {
    breakpoints: config.breakPoints,
    query: {
      method: 'is',
      breakpoint: 'desktop'
    }
  }, getChunks(0)));
};

Grid.Rows = reactBreakpoints.withBreakpoints(Rows);

function _templateObject7$1() {
  var data = _taggedTemplateLiteral(["\n  @media (max-width: ", ") {\n    width: ", ";\n    top: ", ";\n    right: ", ";\n    height: ", ";\n    position: absolute;\n    display: block;\n    margin: (", ") auto ", " auto;\n\n    .line {\n      display: block;\n      background: #fff;\n      width: 100%;\n      height: ", ";\n      position: absolute;\n      left: 0;\n      border-radius: (", ");\n      transition: all 0.4;\n      -webkit-transition: all 0.4;\n      -moz-transition: all 0.4;\n\n      &.line-1 {\n        top: 0;\n      }\n      &.line-2 {\n        top: 50%;\n      }\n      &.line-3 {\n        top: 100%;\n      }\n    }\n\n    ", "\n  }\n"]);

  _templateObject7$1 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6$1() {
  var data = _taggedTemplateLiteral(["\n  @media (max-width: ", ") {\n    cursor: pointer;\n    font-size: ", ";\n    padding: ", " 0;\n    border-bottom: ", ";\n    margin: 0;\n    width: 100vw;\n    text-align: left;\n\n    :hover,\n    :active {\n      /* background-color: #000; */\n    }\n  }\n"]);

  _templateObject6$1 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5$1() {
  var data = _taggedTemplateLiteral(["\n  font-size: ", ";\n  font-family: ", ";\n  margin: 0 ", ";\n  list-style: none;\n  padding: 0;\n  display: flex;\n  flex-direction: row;\n  a {\n    margin-left: ", ";\n    :active,\n    :visited,\n    :hover,\n    :link {\n      color: #fff;\n      text-decoration: none;\n    }\n  }\n\n  @media (max-width: ", ") {\n    display: ", ";\n    align-items: center;\n    margin: 0;\n    position: absolute;\n    top: ", ";\n    align-content: stretch;\n    flex-direction: column;\n    /* border-top: 1px solid #eee; */\n    min-height: calc(100vh - ", ");\n    background-color: #000;\n    background-color: ", ";\n    /* min-width: 100vw; */\n  }\n"]);

  _templateObject5$1 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$2() {
  var data = _taggedTemplateLiteral(["\n  @media (max-width: ", ") {\n    cursor: pointer;\n    display: block;\n    width: ", ";\n    height: ", ";\n  }\n"]);

  _templateObject4$2 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$4() {
  var data = _taggedTemplateLiteral(["\n  font-size: ", ";\n  margin: 0;\n  height: 100%;\n  margin-left: ", ";\n  display: flex;\n  align-items: center;\n  text-align: center;\n  justify-content: space-around;\n  font-family: ", ";\n  font-weight: 500;\n  text-transform: uppercase;\n  a:active,\n  a:visited,\n  a:hover,\n  a:link {\n    color: #fff;\n    text-decoration: none;\n  }\n\n  @media (max-width: ", ") {\n    font-size: ", ";\n  }\n"]);

  _templateObject3$4 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$4() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  height: ", ";\n  display: block;\n  width: 100%;\n"]);

  _templateObject2$4 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$6() {
  var data = _taggedTemplateLiteral(["\n  background-color: ", ";\n  display: flex;\n  align-items: center;\n  width: 100%;\n  justify-content: space-between;\n  color: #fff;\n  position: fixed;\n  top: 0;\n  height: ", ";\n  z-index: 1;\n\n  @media (max-width: ", ") {\n    height: ", ";\n  }\n"]);

  _templateObject$6 = function _templateObject() {
    return data;
  };

  return data;
}
var HeaderUI = styled__default('header')(_templateObject$6(), config.colors.dark1, config.layout.desktop.headerHeight, makePixelValue(config.breakPoints.tablet), config.unit(2)); // the above header is fixed, this allows content to push down with having to compensate for it every time

var HeaderPushUI = styled__default('div')(_templateObject2$4(), config.layout.desktop.headerHeight);
var BrandUI = styled__default('div')(_templateObject3$4(), config.unit(1.125), config.unit(0.5), config.fonts.font2, makePixelValue(config.breakPoints.tablet), config.unit(0.75));
var NavMenuTriggerUI = styled__default('span')(_templateObject4$2(), makePixelValue(config.breakPoints.tablet), config.unit(1.5), config.unit(1.5));
var NavMenuUI = styled__default('nav')(_templateObject5$1(), config.unit(0.7), config.fonts.font2, config.unit(0.5), config.unit(0.5), makePixelValue(config.breakPoints.tablet), function (_ref) {
  var isOpen = _ref.isOpen;
  return isOpen === true ? 'flex' : 'none';
}, config.unit(2), config.unit(2), config.colors.dark3);
var NavLinkUI = styled__default('span')(_templateObject6$1(), makePixelValue(config.breakPoints.tablet), config.unit(0.6), config.unit(0.4), config.border);
var heightLine = 4;
var heightIcon = 30;
var translateY = heightIcon / 2;
var TriggerIconUI = styled__default('div')(_templateObject7$1(), makePixelValue(config.breakPoints.tablet), config.unit(1), config.unit(0.5), config.unit(0.5), makePixelValue(heightIcon), makePixelValue(heightIcon * 2), heightIcon, makePixelValue(heightLine), makePixelValue(heightLine / 2), function (_ref2) {
  var isOpen = _ref2.isOpen;
  return isOpen && "\n    .line-1 {\n      transform: translateY(".concat(makePixelValue(translateY), ") translateX(0) rotate(45deg);\n    }\n    .line-2 {\n      opacity: 0;\n    }\n    .line-3 {\n      transform: translateY(").concat(makePixelValue(translateY * -1), ") translateX(0) rotate(-45deg);\n  }");
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

    _defineProperty(_assertThisInitialized(_this), "toggleMenu", function () {
      _this.setState({
        isOpen: !_this.state.isOpen
      });
    });

    return _this;
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      var children = this.props.children;
      var isOpen = this.state.isOpen;
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(HeaderPushUI, null), /*#__PURE__*/React.createElement(HeaderUI, null, React.Children.map(children, function (child) {
        return React.cloneElement(child, {
          isOpen: isOpen
        });
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

Header.Brand = BrandUI;
Header.NavMenu = NavMenuUI;
Header.NavLink = NavLinkUI;

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n  font-family: ", ";\n  font-size: ", ";\n  font-weight: 700;\n  line-height: 1.125;\n  margin-bottom: ", ";\n  margin-top: 0.25em;\n  text-align: center;\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n  font-family: ", ";\n  font-size: ", ";\n  line-height: 1;\n  margin-bottom: -", ";\n  text-align: center;\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  flex-wrap: nowrap;\n  padding: 0;\n  position: relative;\n  width: 100%;\n\n  ", " {\n    margin: ", ";\n    margin-bottom: 0;\n  }\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n  height: calc(100vh - ", ");\n  line-height: 1.5;\n\n  /* background-image: linear-gradient(\n      rgba(0, 144, 231, 0.75),\n      rgba(0, 144, 231, 0.75)\n    ),\n    url('https://images.unsplash.com/photo-1520020324516-dba91274d8ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=2734&q=80');\n  background-blend-mode: overlay; */\n\n  /* background-image: linear-gradient(rgba(0, 144, 231, 0), rgba(0, 144, 231, 0)),\n    url('https://images.unsplash.com/photo-1491964247380-4f630fb757c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'); */\n  /* background-image: url('https://media.istockphoto.com/photos/beautiful-sunset-of-los-angeles-downtown-skyline-and-palm-trees-in-picture-id884384784?s=2048x2048'); */\n\n  /* background-image: url('https://images.unsplash.com/photo-1576694541627-114e57070466?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'); */\n  /* background-position: center bottom; */\n\n  background-image: url('https://images.unsplash.com/photo-1504730187314-ecf3c84cc060?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80');\n  background-position: center -100px;\n\n  /* background-image: url('https://images.unsplash.com/photo-1528656053220-4e535d66150d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'); */\n  /* background-image: url('https://images.unsplash.com/photo-1494526585095-c41746248156?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'); */\n\n  background-repeat: no-repeat;\n  background-size: cover;\n  /* background-position: center -100px; */\n  position: relative;\n  width: 100%;\n  /* -webkit-filter: blur(2px); */\n  /* filter: blur(2px); */\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  min-width: 600px;\n  display: flex;\n  margin: 0;\n  padding: 0;\n  justify-content: space-around;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7$2() {
  var data = _taggedTemplateLiteral(["\n  color: #fff;\n  display: flex;\n  flex-direction: column;\n  font-size: ", ";\n  line-height: 1.5;\n  align-items: center;\n  justify-content: center;\n  width: 100vw;\n  height: 100vh;\n  text-align: left;\n  text-shadow: 2px 2px 3px #000;\n  font-weight: 600;\n  font-family: ", ";\n  font-weight: 700;\n"]);

  _templateObject7$2 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6$2() {
  var data = _taggedTemplateLiteral(["\n  color: #000;\n  display: flex;\n  flex: 2;\n  flex-direction: column;\n  font-size: ", ";\n  line-height: 1.5;\n  justify-content: space-around;\n  text-align: left;\n  text-shadow: 2px 2px #222;\n  font-weight: 600;\n  font-family: ", ";\n  font-weight: 700;\n"]);

  _templateObject6$2 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5$2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  height: calc(100vh - ", ");\n  position: absolute;\n  top: ", ";\n  width: 100%;\n"]);

  _templateObject5$2 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$3() {
  var data = _taggedTemplateLiteral(["\n  font-size: ", ";\n"]);

  _templateObject4$3 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$5() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject3$5 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$5() {
  var data = _taggedTemplateLiteral(["\n  color: #fff;\n  font-family: ", ";\n  font-size: ", ";\n  line-height: 1.125;\n  margin: 0;\n  text-align: center;\n  text-shadow: 2px 2px #333;\n"]);

  _templateObject2$5 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$7() {
  var data = _taggedTemplateLiteral(["\n  align-items: center;\n  display: flex;\n  flex-grow: 1;\n  flex-direction: column;\n  justify-content: center;\n  padding: ", ";\n  width: 100%;\n"]);

  _templateObject$7 = function _templateObject() {
    return data;
  };

  return data;
}
var BottomBannerUI = styled__default('p')(_templateObject$7(), config.unit(0.25));
var CallToAction = styled__default('div')(_templateObject2$5(), config.fonts.font2, config.unit(1.5));
var CallToAction1UI = styled__default(CallToAction)(_templateObject3$5());
var CallToAction2UI = styled__default(CallToAction)(_templateObject4$3(), config.unit(1));
var ContentUI$1 = styled__default('div')(_templateObject5$2(), config.layout.desktop.headerHeight, config.unit(2.25));
var IntroUI = styled__default('div')(_templateObject6$2(), config.unit(0.88), config.fonts.font1);
var Intro2UI = styled__default('div')(_templateObject7$2(), config.unit(0.88), config.fonts.font3);
var ButtonsUI = styled__default('div')(_templateObject8());
var JumbotronBackgroundUI = styled__default('div')(_templateObject9(), config.layout.desktop.headerHeight);
var JumbotronContentUI = styled__default('div')(_templateObject10(), IntroUI, config.unit(1.5));
var TitleUI$1 = styled__default('h1')(_templateObject11(), config.fonts.font2, config.unit(2), config.unit(1));
var SubTitleUI = styled__default('div')(_templateObject12(), config.fonts.font2, config.unit(1.5), config.unit(0.25));

function jumbotron () {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(JumbotronBackgroundUI, null), /*#__PURE__*/React.createElement(ContentUI$1, null, /*#__PURE__*/React.createElement(JumbotronContentUI, null, /*#__PURE__*/React.createElement(Intro2UI, null, /*#__PURE__*/React.createElement(TitleUI$1, null, "Your Trusted Los Angeles ", /*#__PURE__*/React.createElement("br", null), "Hard Money Lender"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(SubTitleUI, null, "Loans from $200K to $5 Million. ", /*#__PURE__*/React.createElement("br", null), "Fast. Reliable. Transparent.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), "Call Us Today @")))));
}

function _templateObject2$6() {
  var data = _taggedTemplateLiteral(["\n  max-width: ", ";\n  margin: 0 auto;\n  padding: ", " 0;\n  text-align: ", ";\n"]);

  _templateObject2$6 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$8() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  background-color: ", ";\n  @media (max-width: ", ") {\n    max-width: calc(100% - 50px);\n    padding: 25px;\n  }\n"]);

  _templateObject$8 = function _templateObject() {
    return data;
  };

  return data;
}

var getBgColor = function getBgColor(_ref) {
  var hasBgLightColor = _ref.hasBgLightColor,
      hasBgDarkColor = _ref.hasBgDarkColor;

  if (hasBgLightColor) {
    return "".concat(config.colors.light1);
  } else if (hasBgDarkColor) {
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
    return '460px';
  } else {
    return "".concat(config.unit(33));
  }
};

var SectionWrapperUI = styled__default('section')(_templateObject$8(), getBgColor, makePixelValue(config.breakPoints.tablet));
var SectionUI = styled__default('div')(_templateObject2$6(), getInnerWidth, config.unit(1), function (_ref3) {
  var textAlign = _ref3.textAlign;
  return textAlign;
});

function section (_ref) {
  var children = _ref.children,
      _ref$textAlign = _ref.textAlign,
      textAlign = _ref$textAlign === void 0 ? 'left' : _ref$textAlign,
      _ref$hasBgDarkColor = _ref.hasBgDarkColor,
      hasBgDarkColor = _ref$hasBgDarkColor === void 0 ? false : _ref$hasBgDarkColor,
      _ref$hasBgLightColor = _ref.hasBgLightColor,
      hasBgLightColor = _ref$hasBgLightColor === void 0 ? false : _ref$hasBgLightColor,
      _ref$isFullWidth = _ref.isFullWidth,
      isFullWidth = _ref$isFullWidth === void 0 ? false : _ref$isFullWidth,
      _ref$innerWidth = _ref.innerWidth,
      innerWidth = _ref$innerWidth === void 0 ? 'big' : _ref$innerWidth;

  if (isFullWidth) {
    return /*#__PURE__*/React.createElement(SectionWrapperUI, {
      hasBgLightColor: hasBgLightColor
    }, children);
  } else {
    return /*#__PURE__*/React.createElement(SectionWrapperUI, {
      hasBgLightColor: hasBgLightColor,
      hasBgDarkColor: hasBgDarkColor
    }, /*#__PURE__*/React.createElement(SectionUI, {
      textAlign: textAlign,
      innerWidth: innerWidth
    }, children));
  }
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
  var data = _taggedTemplateLiteral(["\nbody {\n  font-family: ", ";\n  font-size: ", ";\n  line-height: 1.5;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  color: ", ";\n}\n\ntable {\n  margin: 0;\n}\n\nh1, h2, h3, h4 {\n  font-family: ", ";\n  padding: 0;\n  margin: 0;\n}\n\nh1 {\n  font-size: ", ";\n  font-weight: 600;\n  margin: 0;\n}\n\nh1.double-size {\n  font-size: ", ";\n}\n\nh2 {\n  font-size: ", ";\n  font-weight: 500;\n  line-height: 1;\n  margin-bottom: ", ";\n}\n\n\nh3 {\n  font-size: ", ";\n  font-weight: 400;\n}\n\nh4 {\n  font-size: ", ";\n  font-weight: 500;\n}\n\nh5 {\n  font-size: ", ";\n}\n\np, ul {\n  padding: 0;\n}\n\np.double-size {\n  font-size: ", ";\n}\n\nul {\n  margin-left: ", ";\n}\n\na:active,\n  a:visited,\n  a:hover,\n  a:link {\n    color: ", ";\n  }\n"]);

  _templateObject$9 = function _templateObject() {
    return data;
  };

  return data;
}
var GlobalStyles = styled.createGlobalStyle(_templateObject$9(), config.fonts.font1, config.unit(0.6), config.colors.dark4, config.fonts.font2, config.unit(1), config.unit(2), config.unit(1.125), config.unit(0.75), config.unit(0.9), config.unit(0.75), config.unit(0.6), config.unit(1), config.unit(2), config.colors.dark3);

function head () {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Fonts, null), /*#__PURE__*/React.createElement(GlobalStyles, null));
}

exports.Banner = banner;
exports.Button = button;
exports.Card = card;
exports.Faq = faq;
exports.Footer = Footer;
exports.Grid = Grid;
exports.Head = head;
exports.Header = Header;
exports.Jumbotron = jumbotron;
exports.Section = section;
