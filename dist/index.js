'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var styled = _interopDefault(require('styled-components'));

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
var config = {
  colors: {
    dark1: '#000',
    dark2: '#2b6242',
    dark3: '#0090e7',
    dark4: '#454545',
    light1: '#f5faff',
    light2: '36,139,204'
  },
  domain: 'SomeBiz.com',
  fonts: {
    font1: 'PT Serif',
    font2: 'Roboto',
    font3: 'PT Serif Caption'
  },
  border: '1px solid #eee',
  unit: function unit(multiplier) {
    return multiplier * _unit + 'px';
  },
  layout: {
    topNavHeight: 2.25 * _unit + 'px'
  },
  contact: {
    email: 'biz@yourbiz.com',
    phone: '999-9999-9999'
  }
};

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background-color: ", ";\n  border: 0;\n  border-radius: 5px;\n  color: #fff;\n  cursor: pointer;\n  display: block;\n  font-family: ", ";\n  font-size: ", ";\n  font-weight: 700;\n  height: ", ";\n  margin-top: ", ";\n  width: 100%;\n  max-width: ", "px;\n  background-image: linear-gradient(\n    to bottom,\n    #e52d27 0%,\n    #b31217 41%,\n    #e52d27 100%\n  );\n  ", "\n\n  border:1px solid #d02718;\n  box-shadow: inset 0px 1px 0px 0px #f5978e;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var ButtonUI = styled('button')(_templateObject(), config.colors.dark2, config.fonts.font2, config.unit(0.75), config.unit(1.75), config.unit(0.66), function (_ref) {
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

function Fonts () {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("link", {
    href: "https://fonts.googleapis.com/css2?family=PT+Serif+Caption:ital@0;1&family=Roboto+Condensed:ital,wght@0,400;0,700;1,400&family=Roboto:wght@500;700;900&display=swap",
    rel: "stylesheet"
  }), /*#__PURE__*/React.createElement("link", {
    href: "https://fonts.googleapis.com/css2?family=Source+Serif+Pro&display=swap",
    rel: "stylesheet"
  }));
}

function head () {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Fonts, null));
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  font-size: ", ";\n  font-family: ", ";\n  margin: 0 ", ";\n  list-style: none;\n  padding: 0;\n  display: flex;\n  a {\n    margin-left: ", ";\n\n    :active,\n    :visited,\n    :hover,\n    :link {\n      color: #fff;\n      text-decoration: none;\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  font-size: ", ";\n  margin: 0;\n  height: 100%;\n  margin-left: ", ";\n  display: flex;\n  align-items: flex-start;\n  text-align: center;\n  justify-content: space-around;\n  font-family: ", ";\n  font-weight: 500;\n  text-transform: uppercase;\n  a:active,\n  a:visited,\n  a:hover,\n  a:link {\n    color: #fff;\n    text-decoration: none;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$1() {
  var data = _taggedTemplateLiteral(["\n  background-color: ", ";\n  display: flex;\n  align-items: center;\n  width: 100%;\n  justify-content: space-between;\n  color: #fff;\n  position: relative;\n  top: 0;\n  line-height: ", ";\n  height: ", ";\n  z-index: 1;\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
var Header = styled('header')(_templateObject$1(), config.colors.dark1, config.layout.topNavHeight, config.layout.topNavHeight);
var Brand = styled('div')(_templateObject2(), config.unit(1.125), config.unit(0.5), config.fonts.font2);
var NavMenu = styled('nav')(_templateObject3(), config.unit(0.7), config.fonts.font2, config.unit(0.5), config.unit(0.5));

function header (_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React.createElement(Header, null, /*#__PURE__*/React.createElement(Brand, null, /*#__PURE__*/React.createElement("a", {
    href: "/"
  }, config.domain)), /*#__PURE__*/React.createElement(NavMenu, null, children));
}

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
  var data = _taggedTemplateLiteral(["\n  display: block;\n  height: calc(100vh - ", ");\n  line-height: 1.5;\n  /* background-image: linear-gradient(\n      rgba(0, 144, 231, 0.75),\n      rgba(0, 144, 231, 0.75)\n    ),\n    url('https://images.unsplash.com/photo-1520020324516-dba91274d8ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=2734&q=80');\n  background-blend-mode: overlay; */\n\n  /* background-image: linear-gradient(rgba(0, 144, 231, 0), rgba(0, 144, 231, 0)),\n    url('https://images.unsplash.com/photo-1491964247380-4f630fb757c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'); */\n  /* background-image: url('https://media.istockphoto.com/photos/beautiful-sunset-of-los-angeles-downtown-skyline-and-palm-trees-in-picture-id884384784?s=2048x2048'); */\n\n  /* background-image: url('https://images.unsplash.com/photo-1576694541627-114e57070466?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'); */\n  /* background-position: center bottom; */\n\n  background-image: url('https://images.unsplash.com/photo-1504730187314-ecf3c84cc060?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80');\n  background-position: center -100px;\n\n  /* background-image: url('https://images.unsplash.com/photo-1528656053220-4e535d66150d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'); */\n  /* background-image: url('https://images.unsplash.com/photo-1494526585095-c41746248156?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'); */\n\n  background-repeat: no-repeat;\n  background-size: cover;\n  /* background-position: center -100px; */\n  position: relative;\n  top: ", ";\n  width: 100%;\n  /* -webkit-filter: blur(2px); */\n  /* filter: blur(2px); */\n"]);

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

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  color: #fff;\n  display: flex;\n  flex-direction: column;\n  font-size: ", ";\n  line-height: 1.5;\n  align-items: center;\n  justify-content: center;\n  width: 100vw;\n  height: 100vh;\n  text-align: left;\n  text-shadow: 2px 2px 3px #000;\n  font-weight: 600;\n  font-family: ", ";\n  font-weight: 700;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  color: #000;\n  display: flex;\n  flex: 2;\n  flex-direction: column;\n  font-size: ", ";\n  line-height: 1.5;\n  justify-content: space-around;\n  text-align: left;\n  text-shadow: 2px 2px #222;\n  font-weight: 600;\n  font-family: ", ";\n  font-weight: 700;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  height: calc(100vh - ", ");\n  position: absolute;\n  top: ", ";\n  width: 100%;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  font-size: ", ";\n"]);

  _templateObject4 = function _templateObject4() {
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
  var data = _taggedTemplateLiteral(["\n  color: #fff;\n  font-family: ", ";\n  font-size: ", ";\n  line-height: 1.125;\n  margin: 0;\n  text-align: center;\n  text-shadow: 2px 2px #333;\n"]);

  _templateObject2$1 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$2() {
  var data = _taggedTemplateLiteral(["\n  align-items: center;\n  display: flex;\n  flex-grow: 1;\n  flex-direction: column;\n  justify-content: center;\n  padding: ", ";\n  width: 100%;\n"]);

  _templateObject$2 = function _templateObject() {
    return data;
  };

  return data;
}
var BottomBannerUI = styled('p')(_templateObject$2(), config.unit(0.25));
var CallToAction = styled('div')(_templateObject2$1(), config.fonts.font2, config.unit(1.5));
var CallToAction1UI = styled(CallToAction)(_templateObject3$1());
var CallToAction2UI = styled(CallToAction)(_templateObject4(), config.unit(1));
var ContentUI = styled('div')(_templateObject5(), config.unit(2.5), config.unit(2.25));
var IntroUI = styled('div')(_templateObject6(), config.unit(0.88), config.fonts.font1);
var Intro2UI = styled('div')(_templateObject7(), config.unit(0.88), config.fonts.font3);
var ButtonsUI = styled('div')(_templateObject8());
var JumbotronBackgroundUI = styled('div')(_templateObject9(), config.unit(2.25), config.unit(2));
var JumbotronContentUI = styled('div')(_templateObject10(), IntroUI, config.unit(1.5));
var TitleUI = styled('h1')(_templateObject11(), config.fonts.font2, config.unit(2), config.unit(1));
var SubTitleUI = styled('div')(_templateObject12(), config.fonts.font2, config.unit(1.5), config.unit(0.25));

function jumbotron () {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(JumbotronBackgroundUI, null), /*#__PURE__*/React.createElement(ContentUI, null, /*#__PURE__*/React.createElement(JumbotronContentUI, null, /*#__PURE__*/React.createElement(Intro2UI, null, /*#__PURE__*/React.createElement(TitleUI, null, "Your Trusted Los Angeles ", /*#__PURE__*/React.createElement("br", null), "Hard Money Lender"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(SubTitleUI, null, "Loans from $200K to $5 Million. ", /*#__PURE__*/React.createElement("br", null), "Fast. Reliable. Transparent.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), "Call Us Today @ ", config.contact.phone)))));
}

function _templateObject2$2() {
  var data = _taggedTemplateLiteral(["\n  max-width: ", ";\n  margin: 0 auto;\n  padding: ", " 0;\n  text-align: ", ";\n"]);

  _templateObject2$2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$3() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  background-color: ", ";\n"]);

  _templateObject$3 = function _templateObject() {
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

var SectionWrapperUI = styled('section')(_templateObject$3(), getBgColor);
var SectionUI = styled('div')(_templateObject2$2(), getInnerWidth, config.unit(1), function (_ref3) {
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
    }, children, "dsafsadf");
  } else {
    return /*#__PURE__*/React.createElement(SectionWrapperUI, {
      hasBgLightColor: hasBgLightColor,
      hasBgDarkColor: hasBgDarkColor
    }, /*#__PURE__*/React.createElement(SectionUI, {
      textAlign: textAlign,
      innerWidth: innerWidth
    }, children, "tesafdsasdfsd"));
  }
}

exports.Button = button;
exports.Head = head;
exports.Header = header;
exports.Jumbotron = jumbotron;
exports.Section = section;
