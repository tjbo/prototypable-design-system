'use strict'

Object.defineProperty(exports, '__esModule', { value: true })

function _interopDefault(ex) {
  return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex
}

var React = _interopDefault(require('react'))
var styled = _interopDefault(require('styled-components'))

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0)
  }

  return Object.freeze(
    Object.defineProperties(strings, {
      raw: {
        value: Object.freeze(raw),
      },
    }),
  )
}

var _unit = 32
var config = {
  colors: {
    dark1: '#000',
    dark2: '#2b6242',
    dark3: '#0090e7',
    dark4: '#454545',
    light1: '#f5faff',
    light2: '36,139,204',
  },
  domain: 'SomeBiz.com',
  fonts: {
    font1: 'PT Serif',
    font2: 'Roboto',
    font3: 'PT Serif Caption',
  },
  border: '1px solid #eee',
  unit: function unit(multiplier) {
    return multiplier * _unit + 'px'
  },
  layout: {
    topNavHeight: 2.25 * _unit + 'px',
  },
  contact: {
    email: 'biz@yourbiz.com',
    phone: '999-9999-9999',
  },
}

function _templateObject2() {
  var data = _taggedTemplateLiteral([
    '\n  max-width: ',
    ';\n  margin: 0 auto;\n  padding: ',
    ' 0;\n  text-align: ',
    ';\n',
  ])

  _templateObject2 = function _templateObject2() {
    return data
  }

  return data
}

function _templateObject() {
  var data = _taggedTemplateLiteral([
    '\n  width: 100%;\n  background-color: ',
    ';\n',
  ])

  _templateObject = function _templateObject() {
    return data
  }

  return data
}

var getBgColor = function getBgColor(_ref) {
  var hasBgLightColor = _ref.hasBgLightColor,
    hasBgDarkColor = _ref.hasBgDarkColor

  if (hasBgLightColor) {
    return ''.concat(config.colors.light1)
  } else if (hasBgDarkColor) {
    return ''.concat(config.colors.dark3)
  } else {
    return '#fff'
  }
}

var getInnerWidth = function getInnerWidth(_ref2) {
  var innerWidth = _ref2.innerWidth

  if (innerWidth === 'medium') {
    return '720px'
  } else if (innerWidth === 'small') {
    return '460px'
  } else {
    return ''.concat(config.unit(33))
  }
}

var SectionWrapperUI = styled('section')(_templateObject(), getBgColor)
var SectionUI = styled('div')(
  _templateObject2(),
  getInnerWidth,
  config.unit(1),
  function (_ref3) {
    var textAlign = _ref3.textAlign
    return textAlign
  },
)

function section(_ref) {
  var children = _ref.children,
    _ref$textAlign = _ref.textAlign,
    textAlign = _ref$textAlign === void 0 ? 'left' : _ref$textAlign,
    _ref$hasBgDarkColor = _ref.hasBgDarkColor,
    hasBgDarkColor =
      _ref$hasBgDarkColor === void 0 ? false : _ref$hasBgDarkColor,
    _ref$hasBgLightColor = _ref.hasBgLightColor,
    hasBgLightColor =
      _ref$hasBgLightColor === void 0 ? false : _ref$hasBgLightColor,
    _ref$isFullWidth = _ref.isFullWidth,
    isFullWidth = _ref$isFullWidth === void 0 ? false : _ref$isFullWidth,
    _ref$innerWidth = _ref.innerWidth,
    innerWidth = _ref$innerWidth === void 0 ? 'big' : _ref$innerWidth

  if (isFullWidth) {
    return /*#__PURE__*/ React.createElement(
      SectionWrapperUI,
      {
        hasBgLightColor: hasBgLightColor,
      },
      children,
    )
  } else {
    return /*#__PURE__*/ React.createElement(
      SectionWrapperUI,
      {
        hasBgLightColor: hasBgLightColor,
        hasBgDarkColor: hasBgDarkColor,
      },
      /*#__PURE__*/ React.createElement(
        SectionUI,
        {
          textAlign: textAlign,
          innerWidth: innerWidth,
        },
        children,
      ),
    )
  }
}

function _templateObject$1() {
  var data = _taggedTemplateLiteral([
    '\n  background-color: ',
    ';\n  border: 0;\n  border-radius: 5px;\n  color: #fff;\n  cursor: pointer;\n  display: block;\n  font-family: ',
    ';\n  font-size: ',
    ';\n  font-weight: 700;\n  height: ',
    ';\n  margin-top: ',
    ';\n  width: 100%;\n  max-width: ',
    'px;\n  background-image: linear-gradient(\n    to bottom,\n    #e52d27 0%,\n    #b31217 41%,\n    #e52d27 100%\n  );\n  ',
    '\n\n  border:1px solid #d02718;\n  box-shadow: inset 0px 1px 0px 0px #f5978e;\n',
  ])

  _templateObject$1 = function _templateObject() {
    return data
  }

  return data
}
var ButtonUI = styled('button')(
  _templateObject$1(),
  config.colors.dark2,
  config.fonts.font2,
  config.unit(0.75),
  config.unit(1.75),
  config.unit(0.66),
  function (_ref) {
    var maxWidth = _ref.maxWidth
    return maxWidth
  },
  function (_ref2) {
    var align = _ref2.align

    if (align === 'center') {
      return 'margin-left: 50%;\n      transform: translateX(-50%);\n      '
    } else if (align === 'right') {
      return 'float: right;'
    }
  },
)

var DefaultLink = function DefaultLink(href) {
  return /*#__PURE__*/ React.createElement('a', {
    href: href,
  })
}

function button(props) {
  var align = props.align,
    href = props.href,
    _props$text = props.text,
    text = _props$text === void 0 ? 'Submit' : _props$text,
    onClick = props.onClick,
    _props$maxWidth = props.maxWidth,
    maxWidth = _props$maxWidth === void 0 ? 300 : _props$maxWidth,
    _props$link = props.link,
    link = _props$link === void 0 ? DefaultLink : _props$link

  if (href && link) {
    return /*#__PURE__*/ React.createElement(
      ButtonUI,
      {
        align: align,
        onClick: onClick,
        maxWidth: maxWidth,
      },
      /*#__PURE__*/ React.createElement(
        'link',
        {
          href: href,
        },
        text,
      ),
    )
  } else {
    return /*#__PURE__*/ React.createElement(
      ButtonUI,
      {
        align: align,
        onClick: onClick,
        maxWidth: maxWidth,
      },
      text,
    )
  }
}

exports.Button = button
exports.Section = section
