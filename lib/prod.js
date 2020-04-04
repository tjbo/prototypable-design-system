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

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  max-width: ", ";\n  margin: 0 auto;\n  padding: ", " 0;\n  text-align: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  background-color: ", ";\n"]);

  _templateObject = function _templateObject() {
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

var SectionWrapperUI = styled('section')(_templateObject(), getBgColor);
var SectionUI = styled('div')(_templateObject2(), getInnerWidth, config.unit(1), function (_ref3) {
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

exports.Section = section;
