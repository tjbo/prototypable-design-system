import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Box, Button as Button$1, Flex, Icon as Icon$1, Breadcrumb, BreadcrumbItem, BreadcrumbLink, SimpleGrid, AspectRatio, Image, Heading, extendTheme, theme as theme$1, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, List, Text, ListItem, Link as Link$1, useBreakpointValue, ChakraProvider, Divider, Table, Td, Tr, Tbody, UnorderedList, Stack, Grid, GridItem } from '@chakra-ui/react';
export { Alert, AlertIcon, Box, ButtonGroup, Checkbox, Divider, Flex, FormControl, FormErrorMessage, FormHelperText, FormLabel, Heading, IconButton, Image, Input, InputGroup, InputRightElement, Link, List, ListIcon, ListItem, Progress, PseudoBox, Radio, RadioGroup, Select, SimpleGrid, Slider, SliderFilledTrack, SliderThumb, SliderTrack, Spinner, Stack, Stat, StatGroup, StatHelpText, StatLabel, StatNumber, Switch, Textarea } from '@chakra-ui/react';
import { navigate, Link } from '@reach/router';
import crypto from 'crypto';
import { ChevronDownIcon, ChevronUpIcon, ChevronRightIcon } from '@chakra-ui/icons';
export { Field, Form, Formik } from 'formik';
import JsxParser from 'react-jsx-parser';
import { RichText } from 'prismic-reactjs';

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

  return function _createSuperInternal() {
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

var _templateObject;

var BodyUI = styled('div')(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  height: 100%;\n\n  strong {\n    font-weight: bold;\n  }\n\n  em {\n    font-style: italic;\n  }\n"])));

function Body (_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React.createElement(BodyUI, null, children);
}

if (typeof window !== 'undefined') {
  window.addEventListener('scroll', function () {
    document.documentElement.style.setProperty('--scroll-y', "".concat(window.scrollY, "px"));
  });
}

function Button (props) {
  var _props$justifyContent = props.justifyContent,
      justifyContent = _props$justifyContent === void 0 ? 'flex-start' : _props$justifyContent,
      children = props.children,
      isCta = props.isCta,
      to = props.to,
      rest = _objectWithoutProperties(props, ["justifyContent", "children", "isCta", "to"]);

  if (to) {
    return /*#__PURE__*/React.createElement(Box, {
      d: "flex",
      justifyContent: justifyContent,
      w: "100%"
    }, /*#__PURE__*/React.createElement(Button$1, _extends({
      onClick: function onClick() {
        isCta && localStorage.setItem('cta', children);
        navigate(to);
      }
    }, _objectSpread2({}, rest)), children));
  } else {
    return /*#__PURE__*/React.createElement(Box, {
      d: "flex",
      justifyContent: justifyContent,
      w: "100%"
    }, /*#__PURE__*/React.createElement(Button$1, _objectSpread2({}, rest), children));
  }
}

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

var getBgColor = function getBgColor(background) {
  if (background === 'transparent') {
    return 'transparent';
  } else if (background === 'light') {
    return 'gray.50';
  } else if (background === 'dark') {
    return 'gray.100';
  } else {
    return 'white';
  }
};

var getInnerWidth = function getInnerWidth(innerWidth) {
  if (innerWidth === 'small') {
    return '30em';
  } else if (innerWidth === 'medium') {
    return '36em';
  } else if (innerWidth === 'medium-plus') {
    return '40em';
  } else if (innerWidth === 'huge') {
    return '100%';
  } else {
    return '62em';
  }
};

function Section(_ref) {
  var _ref$children = _ref.children,
      children = _ref$children === void 0 ? [] : _ref$children,
      _ref$textAlign = _ref.textAlign,
      textAlign = _ref$textAlign === void 0 ? 'left' : _ref$textAlign,
      _ref$background = _ref.background,
      background = _ref$background === void 0 ? 'default' : _ref$background,
      _ref$inner_width = _ref.inner_width,
      inner_width = _ref$inner_width === void 0 ? 'big' : _ref$inner_width,
      _ref$pt = _ref.pt,
      pt = _ref$pt === void 0 ? 9 : _ref$pt,
      _ref$pb = _ref.pb,
      pb = _ref$pb === void 0 ? 9 : _ref$pb,
      _ref$pl = _ref.pl,
      pl = _ref$pl === void 0 ? 6 : _ref$pl,
      _ref$pr = _ref.pr,
      pr = _ref$pr === void 0 ? 6 : _ref$pr;
  return /*#__PURE__*/React.createElement(Flex, {
    as: 'section',
    bg: getBgColor(background),
    key: shortUuid.generate(),
    justifyContent: 'center',
    width: '100%'
  }, /*#__PURE__*/React.createElement(Box, {
    pt: pt,
    pb: pb,
    pl: pl,
    pr: pr,
    textAlign: textAlign,
    width: '100%',
    maxWidth: getInnerWidth(inner_width)
  }, children));
}

function Logo(_ref) {
  var isWhite = _ref.isWhite,
      rest = _objectWithoutProperties(_ref, ["isWhite"]);

  return /*#__PURE__*/React.createElement(Icon$1, _extends({
    viewBox: "0 0 1111.745 406.82"
  }, rest), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("path", {
    id: "c",
    d: "M49.862 62.774h195.107v81.25H49.862z"
  }), /*#__PURE__*/React.createElement("path", {
    id: "b",
    d: "M63.225 57.429h172.122v82.854H63.225z"
  }), /*#__PURE__*/React.createElement("path", {
    id: "a",
    d: "M26.342 19.476h236.266V155.81H26.342z"
  })), /*#__PURE__*/React.createElement("g", {
    color: "#000"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M57.015 347.559c75.568 76.808 199.093 77.814 275.901 2.246a195.097 195.097 0 0023.297-27.613c-77.89 66.424-193.874 61.35-265.667-11.62-65.84-66.92-74.684-171.24-21.05-248.289a195.097 195.097 0 00-10.235 9.375c-76.808 75.568-77.814 199.093-2.246 275.901z",
    overflow: "visible",
    fill: isWhite ? '#fff' : 'navy'
  })), /*#__PURE__*/React.createElement("g", {
    color: "#000"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M213.756.925C125.223 4.103 56.029 78.45 59.209 166.983a160.406 160.406 0 003.81 29.459c2.966-84.113 70.439-151.628 154.549-154.648 77.135-2.77 145.305 49.787 162.249 125.089.134-3.803.133-7.609-.003-11.411C376.635 66.939 302.288-2.254 213.755.925z",
    overflow: "visible",
    fill: isWhite ? '#fff' : '#d40000'
  }), /*#__PURE__*/React.createElement("path", {
    d: "M213.727.107C124.75 3.3 55.194 78.037 58.389 167.013c.357 9.967 1.64 19.88 3.83 29.61l1.619-.153c2.952-83.69 70.071-150.853 153.76-153.858 76.745-2.755 144.561 49.53 161.42 124.452l1.619-.153c.135-3.822.133-7.647-.004-11.469C377.439 66.477 302.718-3.072 213.756.107h-.03zm.058 1.636c88.09-3.163 162.046 65.668 165.21 153.758.062 1.747-.004 3.496.001 5.244C359.77 88.302 292.988 38.266 217.54 40.975c-82.398 2.96-148.744 67.569-154.812 149.118-1.408-7.647-2.42-15.362-2.7-23.139C56.864 78.874 125.68 4.924 213.756 1.745l.03-.002z",
    fill: isWhite ? '#fff' : '#d40000',
    overflow: "visible"
  })), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M200.418 284.83q-12.066 0-22.315-3.562-10.176-3.562-17.518-10.612-7.34-7.05-11.411-17.59-3.998-10.54-3.998-24.35 0-12.866 3.852-23.333 3.853-10.467 11.194-17.953 7.05-7.196 17.445-11.121 10.467-3.925 22.823-3.925 6.833 0 12.284.8 5.525.726 10.177 1.962 4.87 1.38 8.795 3.125 3.997 1.672 6.978 3.126v26.24h-3.199q-2.035-1.745-5.16-4.144-3.053-2.398-6.978-4.724-3.998-2.326-8.65-3.925-4.652-1.6-9.958-1.6-5.888 0-11.194 1.89-5.306 1.818-9.813 6.106-4.288 4.143-6.977 10.976-2.617 6.832-2.617 16.572 0 10.176 2.835 17.009 2.907 6.832 7.268 10.758 4.434 3.997 9.886 5.742 5.451 1.672 10.757 1.672 5.088 0 10.031-1.527 5.015-1.526 9.231-4.143 3.562-2.108 6.615-4.507 3.053-2.398 5.015-4.143h2.908v25.877q-4.07 1.817-7.778 3.416-3.707 1.6-7.777 2.762-5.307 1.526-9.958 2.326-4.652.8-12.793.8zM336.171 207.636q0-4.07-1.672-6.977-1.671-2.908-5.742-4.58-2.835-1.163-6.614-1.38-3.78-.291-8.795-.291h-10.104v29.147h8.577q6.687 0 11.194-.654 4.506-.655 7.56-2.98 2.907-2.254 4.215-4.943 1.381-2.762 1.381-7.342zm43.54 75.086h-34.09l-29.511-39.687h-12.866v39.687h-27.766v-108.23h46.81q9.595 0 16.5 1.09 6.905 1.09 12.938 4.724 6.106 3.635 9.667 9.45 3.635 5.742 3.635 14.464 0 11.993-5.597 19.553-5.524 7.56-15.846 12.575zM482.434 282.722h-78.283v-108.23h78.283v20.933h-50.517v18.68H478.8v20.934h-46.883v26.749h50.517zM612.694 248.704q0 15.991-13.593 26.022-13.52 9.958-36.78 9.958-13.446 0-23.477-2.326-9.958-2.398-18.68-6.033v-25.949h3.052q8.65 6.905 19.335 10.612 10.758 3.707 20.643 3.707 2.544 0 6.687-.436 4.143-.436 6.76-1.453 3.198-1.309 5.233-3.271 2.108-1.963 2.108-5.815 0-3.562-3.052-6.106-2.98-2.617-8.796-3.998-6.105-1.453-12.938-2.69-6.76-1.307-12.72-3.27-13.665-4.434-19.698-11.993-5.96-7.632-5.96-18.899 0-15.119 13.52-24.64 13.592-9.595 34.889-9.595 10.685 0 21.08 2.108 10.466 2.035 18.098 5.16v24.932h-2.98q-6.542-5.233-16.064-8.722-9.45-3.562-19.334-3.562-3.49 0-6.978.509-3.417.436-6.615 1.744-2.835 1.09-4.87 3.344-2.035 2.18-2.035 5.015 0 4.289 3.27 6.615 3.272 2.253 12.358 4.143 5.96 1.236 11.411 2.398 5.525 1.163 11.848 3.199 12.43 4.07 18.317 11.12 5.96 6.979 5.96 18.172zM696.912 284.83q-12.066 0-22.314-3.562-10.177-3.562-17.518-10.612-7.341-7.05-11.412-17.59-3.997-10.54-3.997-24.35 0-12.866 3.852-23.333 3.852-10.467 11.194-17.953 7.05-7.196 17.444-11.121 10.467-3.925 22.824-3.925 6.832 0 12.284.8 5.524.726 10.176 1.962 4.87 1.38 8.795 3.125 3.998 1.672 6.978 3.126v26.24h-3.198q-2.035-1.745-5.16-4.144-3.054-2.398-6.979-4.724-3.998-2.326-8.65-3.925-4.651-1.6-9.958-1.6-5.887 0-11.193 1.89-5.306 1.818-9.813 6.106-4.288 4.143-6.978 10.976-2.617 6.832-2.617 16.572 0 10.176 2.835 17.009 2.908 6.832 7.269 10.758 4.434 3.997 9.885 5.742 5.452 1.672 10.758 1.672 5.088 0 10.03-1.527 5.016-1.526 9.232-4.143 3.561-2.108 6.614-4.507 3.053-2.398 5.016-4.143h2.907v25.877q-4.07 1.817-7.777 3.416-3.707 1.6-7.778 2.762-5.306 1.526-9.958 2.326t-12.793.8zM846.228 282.722h-78.283v-108.23h78.283v20.933h-50.517v18.68h46.883v20.934H795.71v26.749h50.517zM980.207 282.722h-26.894l-45.938-74.286v74.286H881.79v-108.23h33.363l39.47 62.001v-62.002h25.585zM1108.764 195.425h-33.799v87.297h-27.911v-87.297h-33.8v-20.934h95.51z"
  })), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M441.178 382.525h-50.185v-69.577h17.944v56.12h32.241zM540.606 382.525h-50.325v-69.577h50.325v13.457h-32.475v12.009h30.14v13.457h-30.14v17.196h32.475zM653.296 382.525h-17.29l-29.531-47.756v47.756h-16.448v-69.577h21.448l25.373 39.858v-39.858h16.448zM767.19 347.806q0 9.72-4.439 17.43-4.439 7.663-11.214 11.775-5.094 3.084-11.168 4.299-6.075 1.215-14.392 1.215h-24.532v-69.577h25.233q8.504 0 14.672 1.448 6.168 1.402 10.374 4.019 7.196 4.392 11.308 11.868 4.158 7.43 4.158 17.523zm-18.55-.14q0-6.869-2.524-11.729-2.476-4.906-7.897-7.663-2.756-1.355-5.653-1.822-2.85-.514-8.645-.514h-4.533v43.55h4.533q6.402 0 9.392-.561 2.99-.608 5.841-2.15 4.906-2.803 7.196-7.476 2.29-4.72 2.29-11.635zM861.506 382.525h-50.325v-69.577h50.325v13.457h-32.475v12.009h30.14v13.457h-30.14v17.196h32.475zM958 334.255q0-2.616-1.075-4.486-1.075-1.869-3.691-2.943-1.823-.748-4.252-.888-2.43-.187-5.654-.187h-6.495v18.738h5.513q4.3 0 7.196-.421 2.897-.42 4.86-1.916 1.869-1.448 2.71-3.177.888-1.776.888-4.72zm27.99 48.27h-21.916l-18.97-25.514h-8.271v25.514h-17.85v-69.577h30.092q6.168 0 10.607.7 4.44.701 8.318 3.038 3.925 2.336 6.214 6.074 2.337 3.692 2.337 9.3 0 7.71-3.598 12.569-3.552 4.86-10.187 8.084zM1083.96 360.656q0 10.28-8.738 16.729-8.692 6.401-23.644 6.401-8.645 0-15.093-1.495-6.402-1.542-12.01-3.878V361.73h1.963q5.56 4.439 12.43 6.822 6.915 2.383 13.27 2.383 1.636 0 4.3-.28 2.663-.28 4.345-.935 2.056-.84 3.364-2.102 1.355-1.262 1.355-3.739 0-2.29-1.962-3.925-1.916-1.682-5.654-2.57-3.925-.934-8.318-1.729-4.345-.84-8.177-2.102-8.785-2.85-12.663-7.71-3.832-4.907-3.832-12.15 0-9.719 8.692-15.84 8.738-6.168 22.429-6.168 6.869 0 13.55 1.355 6.73 1.309 11.636 3.318v16.027h-1.916q-4.206-3.364-10.327-5.607-6.074-2.29-12.43-2.29-2.242 0-4.485.327-2.196.28-4.252 1.122-1.823.7-3.131 2.15-1.308 1.401-1.308 3.223 0 2.757 2.102 4.253 2.103 1.448 7.944 2.663 3.832.794 7.336 1.542 3.551.748 7.617 2.056 7.99 2.617 11.775 7.15 3.832 4.485 3.832 11.681z"
  })));
}

function BusinessInsider (props) {
  return /*#__PURE__*/React.createElement(Icon$1, _extends({
    viewBox: "0 200 652 230"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "#185f7d",
    d: "M207.5 227.1c4.7-1.4 9.9-1.4 15.2-.5 5.7.9 10.9 2.4 15.6 5.7v13.3c-2.8-2.4-6.2-4.3-9.5-5.7-4.7-1.9-9.5-2.8-14.2-2.4-2.4 0-4.7.5-6.6 1.9-1.4.9-2.4 1.9-3.3 3.3-.9 1.9-.9 3.8-.9 5.7 0 1.4.9 2.8 2.4 4.3 1.9 1.4 3.8 2.4 6.2 3.3 4.3 1.4 9 3.3 13.3 4.7 3.8 1.4 7.6 3.3 10.4 6.2 2.8 2.4 4.7 6.2 5.7 9.9.9 3.8.9 8.1 0 11.8-.9 3.3-2.8 6.6-5.7 9-2.8 2.4-6.6 4.3-9.9 5.2-5.2 1.4-10.4 1.4-15.6.9-6.6-.9-12.8-2.4-18.5-6.2v-13.3c6.6 5.2 14.7 8.5 22.7 8.5 3.3 0 7.1-.5 10.4-1.9 1.9-.9 3.3-2.4 4.3-4.3s.9-4.3 0-6.6c-.5-1.9-2.4-3.8-4.3-4.7-3.3-1.9-7.1-2.8-10.4-4.3-4.3-1.4-9-2.8-12.8-5.2-2.8-1.9-5.7-3.8-7.6-7.1-2.4-3.8-3.3-9-2.8-13.7.5-4.3 2.4-8.5 5.7-11.4 2.6-3.5 6.4-5.4 10.2-6.4zM503 230.4c5.2-3.3 11.4-4.3 17-4.3 7.6 0 15.2 1.9 21.3 6.2v13.3c-2.8-1.9-5.7-3.8-8.5-5.2-5.2-2.4-11.4-3.3-17-2.4-3.3.5-6.6 1.9-8.1 4.7-1.4 3.3-.9 7.6 1.4 9.9 2.4 1.9 4.7 2.8 7.6 3.8 4.3 1.4 8.5 3.3 12.8 4.7 3.8 1.4 7.6 3.8 10.4 6.6s4.3 6.2 4.7 9.9c.5 4.3.5 8.5-1.4 12.3-1.4 3.3-3.8 6.2-6.6 8.1-3.3 2.4-7.6 3.8-11.8 4.7-5.7.9-11.8.5-17.5-.5-4.7-.9-9.5-2.8-13.3-5.7v-13.3c5.2 4.3 10.9 7.1 17.5 8.1 2.8.5 5.7.5 8.5.5s5.7-.9 8.1-2.4c1.9-1.4 3.3-3.3 3.8-5.2.5-2.4 0-5.7-1.9-7.6-1.4-1.9-3.8-2.8-5.7-3.8-3.3-1.4-7.1-2.8-10.9-3.8-3.3-1.4-7.1-2.4-9.9-4.3-2.8-1.9-5.7-3.8-7.1-7.1-1.9-2.8-2.8-6.2-2.8-9.5 0-2.8 0-6.2 1.4-9 1.8-3.5 4.6-6.3 8-8.7zM583.9 228.1c3.3-1.4 7.1-1.9 10.9-1.9 7.6 0 15.6 1.9 22.3 5.7.5 0 .5.5.5.5v12.8c-2.8-2.4-6.2-4.3-9.9-5.7-4.3-1.9-9-2.4-14.2-2.4-2.4 0-4.7.5-7.1 1.9-1.4.9-2.8 2.4-3.3 3.8-1.4 3.3-.5 7.1 2.4 9.5 2.8 2.4 6.6 3.3 10.4 4.7 4.3 1.4 8.5 2.8 12.3 4.7 3.8 1.9 7.1 4.3 9.5 7.6 2.4 3.8 3.8 8.1 3.8 12.3 0 3.8-.9 8.1-3.3 10.9-2.4 3.3-5.7 5.7-9 7.6-3.8 1.9-8.1 2.4-12.3 2.8-4.7 0-9.5 0-14.2-1.4-4.3-.9-8.5-2.8-11.8-5.2V283c6.6 5.2 14.7 8.5 23.2 8.5 3.8 0 7.6-.5 10.4-1.9 1.9-.9 3.3-2.4 3.8-4.3.9-2.4.9-4.7 0-6.6-.9-1.9-2.4-3.8-4.3-4.7-3.3-1.9-7.1-3.3-10.9-4.3-4.3-1.4-8.5-2.8-12.8-5.2-3.3-1.9-6.2-4.3-8.1-7.6-1.9-3.3-2.8-7.6-2.4-11.4 0-3.8 1.4-7.6 3.3-10.4 3.3-3.2 7.1-5.6 10.8-7zM323 226.2c17 16.1 34.1 32.7 51.1 48.8v-47.8h12.3V303c-11.4-11.4-23.2-22.3-34.6-33.6-5.7-5.2-10.9-10.9-16.6-16.1v48.3h-12.3c.1-24.8.1-49.9.1-75.4zM21.4 227.6h19.4c4.7 0 9 0 13.7.5s9 2.4 12.3 5.2c2.8 2.4 4.7 5.7 5.2 9 .9 3.8.9 8.1-.5 11.8-1.4 4.3-4.3 7.6-8.5 9.5.9.5 1.9.5 2.4.9 3.8 1.9 6.6 5.2 8.1 9 1.4 2.8 1.4 6.2 1.4 9.5-.5 4.3-1.4 8.1-4.3 11.4-2.8 3.8-7.1 5.7-11.8 7.1-3.3.5-7.6.9-11.4.5h-26v-74.4zm12.3 10.9v20.4h15.2c3.3 0 6.6-.9 9-2.8 1.9-1.4 2.8-3.8 2.8-6.2s-.5-5.2-1.9-7.6c-1.9-1.9-3.8-2.8-6.2-3.3-2.8-.5-5.2-.5-8.1-.5H33.7zm0 30.8v21.8h16.1c2.8 0 6.2-.5 8.5-2.4 2.4-1.4 3.8-3.8 4.3-6.2.5-2.8 0-5.7-1.4-8.1-.9-1.9-3.3-3.3-5.2-4.3-1.9-.5-4.3-.9-6.2-.9-5.7.1-10.9.1-16.1.1zM102.3 227.6h12.8V266c0 4.7 0 9 .9 13.7.9 3.8 2.8 7.1 5.7 9.5s6.6 2.8 10.4 2.8c3.8 0 7.6-.9 10.9-3.3 2.4-1.9 4.3-4.7 5.2-7.6.9-3.3.9-7.1.9-10.9v-42.6h12.8v44.5c0 6.2-.9 12.3-3.8 18-2.4 4.7-6.6 8.5-11.8 10.9-5.7 2.4-11.8 3.3-18 2.8-4.3-.5-8.5-1.4-12.3-3.3-2.8-1.4-5.2-3.3-7.1-5.7-2.4-2.8-4.3-6.2-5.2-9.9-1.4-4.3-1.9-8.1-1.4-12.3v-45zM274.7 227.6h12.8v74.8h-12.8v-74.8zM420.1 227.6h45V239h-32.7v18h29.4v10.9h-29.4v23.2h32.7v11.4h-45v-60.6-14.3zM119.9 339.8c17 16.1 34.1 32.2 50.7 48.3v-46.9h12.3V416c-17-16.1-34.1-32.7-50.7-48.8V415h-12.3v-75.2zM225.9 342.2c4.7-2.4 9.9-2.8 15.2-2.8 7.1.5 14.2 2.4 19.9 6.2v12.8c-2.8-2.4-6.2-4.3-9.5-5.7-4.7-1.9-9.5-2.8-14.7-2.4-2.4 0-4.7.9-6.6 1.9-1.4.9-2.8 2.4-3.3 3.8-.9 2.8-.5 6.2 1.9 8.5 1.9 1.9 3.8 2.8 6.2 3.3 4.3 1.4 9 3.3 13.3 4.7 3.3 1.4 7.1 2.8 9.9 5.2 2.8 2.4 4.7 5.7 5.7 9 .9 3.8.9 7.6.5 11.4-.9 3.8-2.8 6.6-5.2 9.5-2.8 2.8-6.2 4.3-9.9 5.7-4.7 1.4-9.5 1.4-14.2 1.4-4.7-.5-9.9-1.4-14.2-3.3-1.9-.9-3.8-1.9-5.7-2.8v-13.3c6.6 5.2 14.7 8.5 22.7 8.5 3.8 0 7.1-.5 10.4-1.9 1.9-.9 3.3-2.8 3.8-4.7.5-1.9.5-4.3 0-6.2-.9-1.9-2.4-3.8-4.3-4.7-3.3-1.9-6.6-2.8-10.4-4.3-3.8-1.4-8.1-2.8-11.8-4.7-3.3-1.9-6.6-4.3-8.5-7.6-1.9-3.3-2.8-7.1-2.8-10.9s.9-7.1 2.8-10.4c2.7-2.4 5.5-4.3 8.8-6.2zM71.5 340.8h12.8v73.4H71.5v-73.4zM297.4 340.8h12.8v73.4h-12.8v-73.4zM346.7 340.8h29.4c7.6 0 15.2 1.9 21.3 6.6 5.2 3.8 9 9 11.4 15.2 1.9 5.2 2.4 10.4 2.4 15.6 0 7.6-1.9 15.2-6.2 21.8-3.3 5.2-8.5 9.5-14.7 11.8-4.7 1.9-9.5 2.8-14.7 2.8h-29.4c.5-24.6.5-49.2.5-73.8zm12.8 11.3v51.1h18.9c4.7-.5 9-2.4 12.8-5.7 2.8-2.8 5.2-6.6 6.2-10.4.9-3.8 1.4-8.1.9-11.8-.5-3.8-.9-7.1-2.4-10.4-1.4-3.3-3.8-6.2-6.6-8.1-3.3-2.4-7.1-3.8-11.4-3.8-2.4-.5-4.7 0-7.1 0-3.8-.9-7.5-.9-11.3-.9zM437.6 340.8h45v10.9h-32.7v17.5h29.4v10.9h-29.4v22.7h32.7v11.4h-45v-73.4zM520 340.8h27.5c4.7 0 9 .9 13.3 2.8 3.3 1.4 6.2 3.8 8.1 7.1 2.4 3.8 3.3 8.1 3.3 12.3 0 4.3-.5 9-2.8 12.8-1.9 2.8-4.3 5.2-7.1 6.6-2.4.9-4.7 1.4-7.1 1.9 9 9.9 17.5 20.4 26.5 30.3h-14.2c-8.5-9.9-17-19.9-25.6-29.8h-9v29.8h-12.3c-.6-24.6-.6-49.2-.6-73.8zm12.3 10.9V374H547c3.3 0 6.6-.9 9-3.3 1.9-1.4 2.8-3.8 2.8-5.7.5-2.8 0-5.7-1.4-8.5-1.4-2.4-3.8-3.8-6.6-4.3-2.8-.9-5.2-.5-8.1-.5h-10.4z"
  }));
}

function BrowserHome (props) {
  return /*#__PURE__*/React.createElement(Icon$1, _extends({
    viewBox: "0 0 508 508"
  }, props), /*#__PURE__*/React.createElement("circle", {
    cx: "254",
    cy: "254",
    r: "254",
    fill: "#fd8469"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M426 122.8H82c-7.2 0-13.2 6-13.2 13.2v236.4c0 7.2 6 13.2 13.2 13.2h344c7.2 0 13.2-6 13.2-13.2V135.6c0-7.2-6-12.8-13.2-12.8z",
    fill: "#e6e9ee"
  }), /*#__PURE__*/React.createElement("g", {
    fill: "#fff"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M87.6 166H420v204.4H87.6zM188 166h-74.4l9.2-16.4h56z"
  })), /*#__PURE__*/React.createElement("path", {
    fill: "#ced5e0",
    d: "M262.4 166H188l9.2-16.4h56.4z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "411.6",
    cy: "145.2",
    r: "8.8",
    fill: "#ff7058"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "383.6",
    cy: "145.2",
    r: "8.8",
    fill: "#84dbff"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "352.8",
    cy: "145.2",
    r: "8.8",
    fill: "#ffd05b"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#54c0eb",
    d: "M386.8 261.6l-16 71.6h-92l-16-71.6 62-50.8z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M401.2 255.6l-72-58.8c-1.2-.8-2.8-1.6-4.4-1.6-1.6 0-3.2.4-4.4 1.6l-72 58.8c-3.2 2.4-3.2 7.2-.4 10 2.4 2.4 6 2.8 8.8.4l67.6-55.2 68 55.2c2.8 2 6.4 2 8.8-.4 3.2-2.8 2.8-7.6 0-10z",
    fill: "#324a5e"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#84dbff",
    d: "M305.2 278.8h39.6v54.4h-39.6z"
  }), /*#__PURE__*/React.createElement("g", {
    fill: "#e6e9ee"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M113.6 205.6H218v8.8H113.6zM113.6 227.2H218v8.8H113.6zM113.6 249.2H218v8.8H113.6zM113.6 270.8H218v8.8H113.6zM113.6 292.4H218v8.8H113.6zM113.6 314h52.8v8.8h-52.8z"
  })));
}

function Email (props) {
  return /*#__PURE__*/React.createElement(Icon$1, _extends({
    viewBox: "0 0 502.073 502.073"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M501.812 481.176c0 6.269-2.09 11.494-6.269 15.673-4.18 3.135-8.359 5.224-14.629 5.224H21.159c-5.224 0-10.449-2.09-14.629-5.224-4.18-4.18-6.269-9.404-6.269-15.673V175.02h501.551v306.156z",
    fill: "#ffd15c"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M495.543 496.849c-4.18 3.135-8.359 5.224-14.629 5.224H21.159c-5.224 0-10.449-2.09-14.629-5.224l244.506-210.024 244.507 210.024z",
    fill: "#f8b64c"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M501.812 175.02l-71.053 51.2L264.62 345.339a23.511 23.511 0 01-28.212 0L71.314 226.22.261 175.02l71.053-51.2L225.959 13.061l11.494-8.359a23.511 23.511 0 0128.212 0l11.494 8.359 74.188 53.29 36.571 26.122 42.841 31.347 71.053 51.2z",
    fill: "#40596b"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M430.759 77.845V226.22L264.62 345.339a23.511 23.511 0 01-28.212 0L71.314 226.22V33.959c0-11.494 9.404-20.898 20.898-20.898H364.93l65.829 64.784z",
    fill: "#f2f2f2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M365.975 61.127c0 9.404 7.314 16.718 16.718 16.718h48.065l-64.784-64.784.001 48.066z",
    fill: "#cdd6e0"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M312.686 223.086h16.718c-5.224 11.494-13.584 19.853-25.078 26.122-12.539 7.314-28.212 10.449-47.02 10.449-17.763 0-33.437-3.135-45.976-9.404-12.539-6.269-22.988-14.629-29.257-27.167-6.269-11.494-9.404-25.078-9.404-38.661 0-15.673 3.135-29.257 10.449-42.841s16.718-22.988 29.257-29.257c12.539-6.269 27.167-9.404 42.841-9.404 13.584 0 26.122 3.135 36.571 8.359 10.449 5.224 18.808 12.539 24.033 22.988 5.224 9.404 8.359 20.898 8.359 32.392 0 13.584-4.18 26.122-12.539 37.616-10.449 14.629-24.033 20.898-40.751 20.898-4.18 0-8.359-1.045-10.449-2.09-2.09-2.09-4.18-4.18-4.18-7.314-6.269 6.269-13.584 9.404-21.943 9.404-9.404 0-16.718-3.135-21.943-9.404-6.269-6.269-9.404-14.629-9.404-25.078 0-12.539 3.135-24.033 10.449-35.527 8.359-12.539 19.853-18.808 33.437-18.808 9.404 0 16.718 4.18 21.943 11.494l2.09-9.404h21.943l-12.539 58.514c-1.045 4.18-1.045 6.269-1.045 7.314s0 2.09 1.045 3.135 1.045 1.045 2.09 1.045c2.09 0 6.269-2.09 10.449-5.224 5.224-4.18 10.449-9.404 13.584-16.718s5.224-14.629 5.224-21.943c0-13.584-5.224-25.078-14.629-33.437-9.404-9.404-22.988-13.584-40.751-13.584-14.629 0-27.167 3.135-37.616 9.404-10.449 6.269-17.763 14.629-22.988 25.078s-7.314 21.943-7.314 34.482c0 11.494 3.135 21.943 8.359 31.347 6.269 9.404 13.584 16.718 24.033 20.898 10.449 4.18 21.943 6.269 35.527 6.269 12.539 0 24.033-2.09 33.437-5.224 9.404-4.181 16.718-9.405 22.988-16.719zm-88.817-33.437c0 7.314 1.045 11.494 4.18 15.673 3.135 3.135 6.269 5.224 10.449 5.224 3.135 0 6.269-1.045 8.359-2.09s4.18-3.135 6.269-5.224c3.135-3.135 5.225-8.359 7.314-14.629 2.09-6.269 3.135-12.539 3.135-17.763 0-6.269-1.045-10.449-4.18-14.629-3.135-3.135-6.269-5.224-10.449-5.224s-9.404 2.09-12.539 5.224c-4.18 3.135-7.314 8.359-9.404 15.673-2.089 6.271-3.134 12.54-3.134 17.765z",
    fill: "#ff7058"
  }));
}

function Loader(props) {
  return /*#__PURE__*/React.createElement(Icon$1, _extends({
    stroke: "#000",
    viewBox: "0 0 44 44"
  }, props), /*#__PURE__*/React.createElement("g", {
    fill: "none",
    fillRule: "evenodd",
    strokeWidth: "2"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "22",
    cy: "22",
    r: "1"
  }, /*#__PURE__*/React.createElement("animate", {
    attributeName: "r",
    begin: "0s",
    dur: "1.8s",
    values: "1; 20",
    calcMode: "spline",
    keyTimes: "0; 1",
    keySplines: "0.165, 0.84, 0.44, 1",
    repeatCount: "indefinite"
  }), /*#__PURE__*/React.createElement("animate", {
    attributeName: "stroke-opacity",
    begin: "0s",
    dur: "1.8s",
    values: "1; 0",
    calcMode: "spline",
    keyTimes: "0; 1",
    keySplines: "0.3, 0.61, 0.355, 1",
    repeatCount: "indefinite"
  })), /*#__PURE__*/React.createElement("circle", {
    cx: "22",
    cy: "22",
    r: "1"
  }, /*#__PURE__*/React.createElement("animate", {
    attributeName: "r",
    begin: "-0.9s",
    dur: "1.8s",
    values: "1; 20",
    calcMode: "spline",
    keyTimes: "0; 1",
    keySplines: "0.165, 0.84, 0.44, 1",
    repeatCount: "indefinite"
  }), /*#__PURE__*/React.createElement("animate", {
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

function MarketWatch (props) {
  return /*#__PURE__*/React.createElement(Icon$1, _extends({
    viewBox: "5 22 110 16"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M32.56 28.768l-.172.888h-.03c-.23-.516-.888-1.203-2.292-1.203-2.292 0-4.613 1.776-5.128 4.555-.458 2.435.745 4.584 3.438 4.584 1.003 0 2.15-.4 2.722-1.232h.03l-.172.917h2.52l1.576-8.538H32.56zm-.802 4.24c-.172.83-.945 2.206-2.55 2.206-1.547 0-1.862-1.375-1.72-2.15.172-.974 1.06-2.206 2.52-2.206 1.433 0 1.92 1.146 1.748 2.15zm4.756-4.24h2.378l-.172.888h.03c.315-.4.888-1.203 2.378-1.203l-.458 2.58c-1.203.03-2.1.258-2.292 1.576l-.888 4.7h-2.6zm6.332-3.352h2.58l-1.203 6.446h.057l2.95-3.094h3.008l-3.925 3.753 2.263 4.785h-2.894L44.02 33.18H44l-.774 4.126h-2.55zm11.5 3.037c-2.58 0-4.9 2.235-5.33 4.613-.458 2.52 1.232 4.527 3.696 4.527a4.76 4.76 0 002.58-.774c.802-.487 1.547-1.232 2.15-2.177h-2.607c-.43.458-.917.802-1.72.802-1.003 0-1.72-.602-1.7-1.604h6.4c.086-.2.115-.344.172-.66.487-2.636-1.03-4.727-3.64-4.727zm-2.58 3.64c.2-.516.888-1.46 2.235-1.46 1.318 0 1.662.945 1.662 1.46zm-30.608 5.213h2.55v-11.9H21.53l-4.527 6.76h-.03v-6.76h-2.177l-7.993 11.9h3.094l4.498-6.76h.03v6.76h2.206l4.47-6.76h.057zm43.32-8.538h-1.604l.458-2.52h-2.235l-.172.974c-.2 1.117-.888 1.46-1.834 1.547h-.03l-.4 1.92h1.26l-1.232 6.6h2.55l1.232-6.6h1.633z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M104.014 34.07c-.83 1.948-2.836 3.524-5.128 3.524-2.58 0-4.212-2.034-3.725-4.584.458-2.52 2.78-4.555 5.358-4.555 2.263 0 3.8 1.518 3.84 3.6h-2.58c-.172-.602-.544-1.203-1.633-1.203-1.203-.057-2.206.945-2.435 2.15-.23 1.232.4 2.177 1.633 2.177 1.06 0 1.7-.602 2.063-1.146h2.607zm-21.2-11.69l-4.956 3.037h1.404l-4.498 6.76h-.057v-6.76H72.5L68 32.178h-.03v-6.76h-2.58v11.9h2.235l4.498-6.76h.03v6.76h2.206l7.965-11.9h1.26zm4.87 14.927h-2.52l.172-.917h-.03c-.602.83-1.72 1.232-2.722 1.232-2.722 0-3.896-2.15-3.438-4.584.516-2.78 2.865-4.555 5.128-4.555 1.404 0 2.063.688 2.292 1.203h.03l.172-.888h2.52zm-4.298-2.09c1.576 0 2.378-1.375 2.55-2.206.172-1.03-.315-2.15-1.748-2.15-1.46 0-2.35 1.232-2.52 2.206-.172.802.172 2.15 1.72 2.15zm12.29-6.446h-1.604l.458-2.52h-2.235l-.172.974c-.2 1.117-.888 1.46-1.834 1.547h-.03l-.372 1.92h1.26l-1.232 6.6h2.55l1.232-6.6h1.633zm10.744-3.352h2.55l-.774 4.24h.03c.544-.802 1.29-1.203 2.407-1.203.802 0 1.72.315 2.15.945.544.83.487 1.576.2 3.123l-.888 4.756h-2.55l.86-4.64c.086-.4.315-1.805-1.03-1.805-1.433 0-1.662 1.29-1.748 1.72l-.888 4.727h-2.52z",
    fill: "#00b742"
  }));
}

function Money (props) {
  return /*#__PURE__*/React.createElement(Icon$1, _extends({
    viewBox: "0 0 508 508"
  }, props), /*#__PURE__*/React.createElement("circle", {
    cx: "254",
    cy: "254",
    r: "254",
    fill: "#324a5e"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M432.4 352.8V378c0 6-4.8 10.8-10.8 10.8H86.4c-6 0-10.8-4.8-10.8-10.8v-25.2c0 6 4.8 10.8 10.8 10.8h335.2c6-.4 10.8-4.8 10.8-10.8z",
    fill: "#2c9984"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M432.4 327.6v25.2c0 6-4.8 10.8-10.8 10.8H86.4c-6 0-10.8-4.8-10.8-10.8v-25.2c0 6 4.8 10.8 10.8 10.8h335.2c6-.4 10.8-5.2 10.8-10.8z",
    fill: "#fff"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M432.4 299.2v28.4c0 6-4.8 10.8-10.8 10.8H86.4c-6 0-10.8-4.8-10.8-10.8v-28.4c0 6 4.8 10.8 10.8 10.8h335.2c6 0 10.8-4.8 10.8-10.8z",
    fill: "#2c9984"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M421.6 310H86.4c-6 0-10.8-4.8-10.8-10.8V130c0-6 4.8-10.8 10.8-10.8h334.8c6 0 10.8 4.8 10.8 10.8v168.8c.4 6.4-4.4 11.2-10.4 11.2z",
    fill: "#4cdbc4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M94.4 263.6v-98c15.2 0 27.2-12.4 27.2-27.2h264c0 15.2 12.4 27.2 27.2 27.2v98c-15.2 0-27.2 12.4-27.2 27.2H122c0-14.8-12.4-27.2-27.6-27.2z",
    fill: "#fff"
  }), /*#__PURE__*/React.createElement("g", {
    fill: "#2c9984"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "254",
    cy: "214.8",
    r: "62.4"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "362",
    cy: "214.8",
    r: "21.2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "146",
    cy: "214.8",
    r: "21.2"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M276.8 230.8c0-12.4-10.4-22.8-22.8-22.8-5.2 0-9.6-4.4-9.6-9.6 0-5.2 4-9.2 9.2-9.6h1.6c2.4 0 4.8 1.2 6.4 3.2 2.4 2.8 6.8 2.8 9.2.4 2.8-2.4 2.8-6.8.4-9.2-2.8-2.8-6.4-5.2-10-6.4v-4.4c0-3.6-2.8-6.4-6.4-6.4s-6.4 2.8-6.4 6.4v4.4c-9.6 2.8-16.4 11.6-16.4 22 0 12.4 10.4 22.8 22.8 22.8 5.2 0 9.6 4.4 9.6 9.6 0 5.2-4 9.2-9.2 9.6h-1.6c-2.4 0-4.8-1.2-6.4-3.2-2.4-2.8-6.8-2.8-9.2-.4-2.8 2.4-2.8 6.8-.4 9.2 2.8 2.8 6.4 5.2 10 6.4v4.4c0 3.6 2.8 6.4 6.4 6.4 3.6 0 6.4-2.8 6.4-6.4v-4.4c9.6-2.8 16.4-11.6 16.4-22z",
    fill: "#fff"
  }));
}

function Mortgage (props) {
  return /*#__PURE__*/React.createElement(Icon$1, _extends({
    viewBox: "0 0 508 508"
  }, props), /*#__PURE__*/React.createElement("circle", {
    cx: "254",
    cy: "254",
    r: "254",
    fill: "#90dfaa"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M424.8 221.2L254 50.4 83.2 221.2h39.6L151.6 408h204.8l28.8-186.8z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M302.4 298.8c0-26.8-21.6-48.8-48.4-48.8-11.6 0-20.8-9.2-20.8-20.8s9.2-20.8 20.8-20.8c5.6 0 11.2 2.4 15.2 6.4 5.2 5.6 14 6 19.6.4 5.6-5.2 6-14 .4-19.6-6-6.4-13.2-10.8-21.6-13.2v-9.6c0-7.6-6.4-14-14-14s-14 6.4-14 14v9.6c-20 6-34.8 24.4-34.8 46.4.8 27.2 22.4 49.2 49.2 49.2 11.6 0 20.8 9.2 20.8 20.8 0 11.6-9.2 20.8-20.8 20.8-5.6 0-11.2-2.4-15.2-6.4-5.2-5.6-14-6-19.6-.4-5.6 5.2-6 14-.4 19.6 6 6.4 13.2 10.8 21.6 13.2v9.6c0 7.6 6.4 14 14 14s14-6.4 14-14v-9.6c19.6-6.4 34-24.8 34-46.8z",
    fill: "#ff7058"
  }));
}

function Mortgage2 (props) {
  return /*#__PURE__*/React.createElement(Icon$1, _extends({
    viewBox: "0 0 508 508"
  }, props), /*#__PURE__*/React.createElement("circle", {
    cx: "254",
    cy: "254",
    r: "254",
    fill: "#84dbff"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M359.6 264.4v108.4c0 19.2 15.6 34.8 34.8 34.8 19.2 0 34.8-15.6 34.8-34.8V264.4h-69.6z",
    fill: "#e6e9ee"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M359.6 372.8V97.6H98v275.2c0 19.2 15.6 34.8 34.8 34.8h261.6c-19.2 0-34.8-15.6-34.8-34.8z",
    fill: "#fff"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ff7058",
    d: "M288.4 180.8H276v60h-94.4v-60h-12l59.2-60.4z"
  }), /*#__PURE__*/React.createElement("g", {
    fill: "#e6e9ee"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M127.6 260H330v9.6H127.6zM127.6 286.8H330v9.6H127.6zM127.6 313.6H330v9.6H127.6zM127.6 340.8H330v9.6H127.6zM127.6 367.6h123.2v9.6H127.6z"
  })), /*#__PURE__*/React.createElement("path", {
    fill: "#f1543f",
    d: "M203.6 172.4H254v51.2h-50.4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M208.4 177.2h41.2v42h-41.2z"
  }), /*#__PURE__*/React.createElement("g", {
    fill: "#f1543f"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M206 195.6h45.6v4.8H206z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M226.4 175.2h4.8v45.6h-4.8z"
  })));
}

function Handshake (props) {
  return /*#__PURE__*/React.createElement(Icon$1, _extends({
    viewBox: "0 0 508 508"
  }, props), /*#__PURE__*/React.createElement("circle", {
    cx: "254",
    cy: "254",
    r: "254",
    fill: "#84dbff"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M355.2 295.6l-110.4-116-66.4-8.8-64 67.2 5.6 31.2 109.2 109.2c7.2 7.2 18.8 7.2 26 0 6.8-6.8 7.2-18 .8-25.2l6.4 6.4c7.2 7.2 18.8 7.2 26 0 6.8-6.8 7.2-18 .8-25.2l6.4 6.4c7.2 7.2 18.8 7.2 26 0 6.8-6.8 7.2-18 .8-25.2l6.4 6.4c7.2 7.2 18.8 7.2 26 0 7.6-7.2 7.6-19.2.4-26.4z",
    fill: "#ffd05b"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M206.8 192.4c3.2-2.4 8-2.8 11.2-4.4 7.6-2.4 15.2-4.8 23.2-7.2 8.8-1.2 17.6-6 27.2-6.4 6.8-.4 13.6 1.6 20 3.2 19.6 5.2 38.8 10.4 58.4 15.6 9.6 25.2 19.6 50.4 29.2 75.6.4.8.4 1.2.4 2-.4.8-.8 1.2-1.6 1.6-4.8 3.2-26 17.2-27.2 16-24.4-22.8-44-37.2-63.6-56-5.2-5.2-18.8-16-18.8-16s-18.4 0-31.6-.8c-3.6 6.8-9.2 17.6-14.8 23.2 0 0-10 3.6-18 5.2-3.2.8-6.4-2-6.8-5.2-.8-12.8 1.6-25.6 6.8-37.6 1.2-3.6 3.2-6.8 6-8.8z",
    fill: "#324a5e"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M444.4 258.4l-37.6-100c-1.6-4.4-6.8-6.8-11.2-5.2L345.2 172c-4.4 1.6-6.8 6.8-5.2 11.2l37.6 100c1.6 4.4 6.8 6.8 11.2 5.2l50.4-18.8c4.8-2 6.8-6.8 5.2-11.2z",
    fill: "#ff7058"
  }), /*#__PURE__*/React.createElement("g", {
    fill: "#324a5e"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M188.4 162L148 126.4c-3.6-3.2-8.8-2.8-12 .8l-70.8 80c-3.2 3.6-2.8 8.8.8 12l40.4 35.6c3.6 3.2 8.8 2.8 12-.8l70.8-80c3.2-3.2 2.8-8.8-.8-12zM138.4 259.6l-18 13.6c-8 6-10.8 17.6-4.8 26s18 10.4 26 4.4l6.8-4.8c.4-.4 1.2-.8 1.6-1.2l10.8-8c8.8-6.4 10-19.6 2-27.6l-.4-.4c-6.4-6.4-16.8-7.2-24-2zM180 320.8l6.8-4.8c9.2-6.8 10-20 2-27.6-6.4-6.4-16.8-7.2-24-1.6l-16.4 12.4c-7.6 6.8-8 18.8-.8 26.4 6.4 6.8 17.2 7.2 24.8 1.6l6-4.4c.8-1.2 1.2-1.6 1.6-2z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M150 297.2c-.4.4-1.2.8-1.6 1.2l1.6-1.2zM210.4 344l2.8-2c9.2-6.8 10-20 2-27.6-6.4-6.4-16.8-7.2-24-1.6l-12.8 9.2c-7.6 6.8-8 18.8-.8 26.4 6.4 6.8 17.2 7.2 24.8 1.6l6-4.4c.8-.4 1.2-1.2 2-1.6z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M180 320.8c-.4.4-1.2.8-1.6 1.2l1.6-1.2zM208.8 345.6c-7.6 6.8-8 18.8-.8 26.4 6.4 6.8 17.2 7.2 24.8 1.6l6.8-4.8c9.2-6.8 10-20 2-28-6.4-6.4-16.8-7.2-24-1.6l-8.8 6.4z"
  })), /*#__PURE__*/React.createElement("circle", {
    cx: "404.8",
    cy: "255.6",
    r: "9.2",
    fill: "#fff"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "102.8",
    cy: "218",
    r: "9.2",
    fill: "#ff7058"
  }));
}

function Percentage (props) {
  return /*#__PURE__*/React.createElement(Icon$1, _extends({
    viewBox: "0 0 504.123 504.123"
  }, props), /*#__PURE__*/React.createElement("circle", {
    cx: "252.062",
    cy: "252.062",
    r: "252.062",
    fill: "#324a5e"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#f1543f",
    d: "M363.52 298.142l46.08-46.08-46.08-46.08v-65.379h-65.378l-46.08-46.08-46.08 46.08h-65.379v65.379l-46.08 46.08 46.08 46.08v65.378h65.379l46.08 46.08 46.08-46.08h65.378z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M214.646 341.858h-52.381v-52.381l-37.416-37.415 37.416-37.416v-52.381h52.381l37.416-37.416 37.415 37.416h52.381v52.381l37.416 37.416-37.416 37.415v52.381h-52.381l-37.415 37.416z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M235.52 193.772c5.12 5.908 7.877 12.603 7.877 20.874 0 8.271-2.757 14.966-7.877 20.874-5.514 5.908-11.815 8.665-20.086 8.665-7.877 0-14.572-2.757-19.692-8.665-5.12-5.908-7.877-12.603-7.877-20.874 0-8.271 2.757-14.966 7.877-20.874 5.514-5.908 11.815-8.665 20.086-8.665 7.483.395 14.178 3.151 19.692 8.665zm74.831-5.12L215.828 317.44h-23.631l94.523-128.788h23.631zm-87.434 35.84c1.969-2.363 3.151-5.514 3.151-9.452 0-3.545-1.182-6.695-3.151-9.452-1.969-2.363-4.726-3.938-7.483-3.938-3.151 0-5.514 1.182-7.483 3.938-1.969 2.363-3.151 5.514-3.151 9.452 0 3.545 1.182 6.695 3.151 9.452 1.969 2.363 4.726 3.938 7.483 3.938 3.151-.393 5.514-1.575 7.483-3.938zm85.465 44.111c5.12 5.908 7.877 12.603 7.877 20.874 0 8.271-2.757 14.966-7.877 20.874-5.514 5.908-11.815 8.665-20.086 8.665-7.877 0-14.572-2.757-19.692-8.665-5.12-5.908-7.877-12.603-7.877-20.874s2.757-14.966 7.877-20.874c5.514-5.908 11.815-8.665 20.086-8.665 7.876 0 14.572 2.757 19.692 8.665zm-11.816 30.72c1.969-2.363 2.757-5.514 2.757-9.452 0-3.545-1.182-6.695-3.151-9.452-1.969-2.363-4.726-3.938-7.483-3.938-3.151 0-5.514 1.182-7.483 3.938-1.969 2.363-3.151 5.514-3.151 9.452 0 3.545 1.182 6.695 3.151 9.452 1.969 2.363 4.726 3.938 7.483 3.938 2.757.001 5.908-1.575 7.877-3.938z",
    fill: "#2b3b4e"
  }));
}

function Rocket (props) {
  return /*#__PURE__*/React.createElement(Icon$1, _extends({
    viewBox: "0 0 508 508"
  }, props), /*#__PURE__*/React.createElement("circle", {
    cx: "254",
    cy: "254",
    r: "254",
    fill: "#84dbff"
  }), /*#__PURE__*/React.createElement("g", {
    fill: "#324a5e"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M152.8 364.4h-18l15.6-67.6 42-17.6 4.8 46.8-29.2 14.8zM355.2 364.4h18l-15.6-67.6-42-17.6-4.8 46.8 29.2 14.8z"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M310.8 342.8c10.4-29.2 16.4-66.4 16.4-107.2C327.2 142 254 66 254 66s-73.2 76-73.2 169.6c0 40.8 6 78 16.4 107.2h113.6z",
    fill: "#fff"
  }), /*#__PURE__*/React.createElement("g", {
    fill: "#324a5e"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M302.8 138C281.6 94.4 254 66 254 66s-27.6 28.4-48.8 72h97.6zM245.2 354.8V348c0-27.6-10-50.4-22.4-50.4S200.4 320 200.4 348v6.8h44.8zM307.2 354.8V348c0-27.6-10-50.4-22.4-50.4S262.4 320 262.4 348v6.8h44.8z"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M223.2 442c3.6-18 22-31.6 22-52.8s-10-24-22-24c-12.4 0-22 2.8-22 24s18 34.8 22 52.8z",
    fill: "#ff7058"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M223.2 424.4c2.8-14 17.2-24.4 17.2-40.4 0-16.4-7.6-18.4-17.2-18.4-9.2 0-17.2 2-17.2 18.4 0 16 14 26.4 17.2 40.4z",
    fill: "#ffd05b"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M284.8 442c3.6-18 22-31.6 22-52.8s-10-24-22-24-22 2.8-22 24 18.4 34.8 22 52.8z",
    fill: "#ff7058"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M284.8 424.4c2.8-14 17.2-24.4 17.2-40.4 0-16.4-7.6-18.4-17.2-18.4-9.2 0-17.2 2-17.2 18.4.4 16 14.4 26.4 17.2 40.4z",
    fill: "#ffd05b"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "254",
    cy: "200.8",
    r: "34.8",
    fill: "#4cdbc4"
  }), /*#__PURE__*/React.createElement("g", {
    fill: "#2c9984"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M274.4 172.4c-2.8-2-5.6-3.6-8.8-4.8l-44.4 44.8c1.2 3.2 2.8 6 4.8 8.8l48.4-48.8zM279.6 177.2l-49.2 49.6c1.2 1.2 2.8 2.4 4 3.2l48.4-48.4c-.8-1.6-2-3.2-3.2-4.4z"
  })));
}

function Sms (props) {
  return /*#__PURE__*/React.createElement(Icon$1, _extends({
    viewBox: "0 0 501.551 501.551"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M309.29 0H20.898C9.404 0 0 9.404 0 20.898v459.755c0 11.494 9.404 20.898 20.898 20.898H309.29c11.494 0 20.898-9.404 20.898-20.898V20.898C330.188 9.404 320.784 0 309.29 0z",
    fill: "#40596b"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#84dbff",
    d: "M26.676 59.653h277.943v364.669H26.676z"
  }), /*#__PURE__*/React.createElement("g", {
    fill: "#334a5e"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M188.082 450.351h-51.2c-6.269 0-11.494 5.224-11.494 11.494s5.224 11.494 11.494 11.494h51.2c6.269 0 11.494-5.224 11.494-11.494s-5.225-11.494-11.494-11.494zM206.89 25.078h-83.592c-3.135 0-5.224 2.09-5.224 5.224 0 3.135 2.09 5.224 5.224 5.224h83.592c3.135 0 5.224-2.09 5.224-5.224 0-3.135-2.09-5.224-5.224-5.224z"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M479.608 119.118H224.653c-12.539 0-21.943 10.449-21.943 21.943v146.286c0 12.539 10.449 21.943 21.943 21.943h8.359v54.335l47.02-54.335h199.576c12.539 0 21.943-10.449 21.943-21.943V141.061c0-12.539-10.449-21.943-21.943-21.943z",
    fill: "#f2f2f2"
  }), /*#__PURE__*/React.createElement("g", {
    fill: "#54c0eb"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "276.898",
    cy: "214.204",
    r: "24.033"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "352.131",
    cy: "214.204",
    r: "24.033"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "426.318",
    cy: "214.204",
    r: "24.033"
  })));
}

function YahooFinance (props) {
  return /*#__PURE__*/React.createElement(Icon$1, _extends({
    viewBox: "0 150 500 200"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "#410093",
    d: "M182 214v53h26v-21.5c0-17.3.3-22.2 1.5-24.5 1.7-3.4 4.3-5 7.9-5 7.9 0 8.6 2.4 8.6 29v22h26.1l-.3-28.8c-.3-31.9-.3-31.8-7.6-39.4-8.3-8.7-24.7-8.9-33.9-.5l-2.3 2V161h-26v53zm278.2-51.3c-.9 1.6-24.1 57.4-26.3 63.1l-.9 2.3 15.6-.3 15.6-.3 13.4-32.4c7.4-17.8 13.4-32.8 13.4-33.2 0-.5-6.7-.9-15-.9-13.2 0-15 .2-15.8 1.7zm-341.7 30.7c-9.9 3.1-16.7 9.3-21.7 19.4-3.1 6.3-3.3 7.2-3.3 17.7.1 13.2 2.2 19.7 9 27.2 6.6 7.4 13.2 10.6 23.1 11.1 9.5.5 14.1-.7 19-5l3.4-3v6.2h25v-73h-25v6.1l-3.5-2.6c-6.6-5.1-17.5-6.8-26-4.1zm24.7 26.5c3.8 3.5 4.2 4.3 4.6 9.7.3 5 0 6.4-2 9.3-2.7 4-8.1 7.1-12.3 7.1-4.8 0-11.6-4-13.7-8-5.5-10.6 1.7-22 14-22 4.7 0 5.7.4 9.4 3.9zm143-26.3c-7.1 1.9-10.6 3.8-15.9 8.7-17.8 16.4-15.9 46.8 3.9 59.9 8.3 5.6 14.2 7.1 25.1 6.6 7.4-.3 10.4-1 15.4-3.2 7.6-3.5 15.3-11.2 19.1-19.3 2.3-5.1 2.7-7 2.6-15.3 0-12.7-2.6-19.4-10.3-27-10.7-10.6-25.1-14.4-39.9-10.4zm18.6 24.4c9.3 5.7 9.6 19.5.5 25.2-6.8 4.1-16.3 2-20.4-4.5-2.6-4.2-2.3-13.5.7-16.8 5.3-6 13.1-7.6 19.2-3.9zm65.8-25c-19.4 4.9-32 24.1-28.7 43.7 2.3 13.4 9.9 23.5 21.9 29.1 5.1 2.4 6.8 2.7 17.2 2.7 10.4 0 12.1-.3 17.2-2.7 12.8-6 20.9-18.1 21.6-32.4 1-18-7.2-31.4-23.5-38.5-5.5-2.4-19.4-3.4-25.7-1.9zm16.9 24.6c11.8 5.5 9.8 24.1-2.8 27.2-5.8 1.5-10.7.1-14.6-4.3-10.9-12.4 2.5-30 17.4-22.9zM9 194.7c0 .5 6.9 17.1 15.4 37.1l15.4 36.3-5.4 12.9c-3 7.1-5.4 13.2-5.4 13.5 0 .3 6.2.4 13.7.3l13.7-.3 20.8-50C88.6 217 98 194.4 98 194.2c0-.1-6.2-.2-13.7-.2H70.5l-7.9 20.3c-4.3 11.1-8.2 20.6-8.6 21-.4.5-4.5-8.6-9-20.2L36.7 194H22.8c-7.6 0-13.8.3-13.8.7zM437.1 235c-7.9 1.9-13.1 8.6-13.1 16.9 0 6.6 2.3 11.1 7.2 14.1 11.7 7.1 26.8-1 26.8-14.4 0-11-10.2-19.2-20.9-16.6zM222 275.3c-8.3 4.2-4.2 16.8 5 15.3 4.3-.7 7-3.8 7-8 0-5.8-6.9-10-12-7.3zm-25.6 1.7c-4.6 2.3-7.9 7.6-8.9 14.2-.5 3.2-1 3.8-3 3.8-2.4 0-2.5.3-2.5 6s.1 6 2.5 6h2.4l.3 14.7.3 14.8 7.3.3 7.2.3V307h11v-12h-5.6c-5.3 0-5.5-.1-4.8-2.3 1.1-3.7 2.5-4.7 6.6-4.7h3.9l-.3-6.3-.3-6.2-6-.3c-4.5-.2-7.1.3-10.1 1.8zm62.4 19.4c-3.6 2.4-3.8 2.4-3.8.6 0-1.8-.7-2-7.5-2H240v42h15v-12.6c0-6.9.5-13.4 1-14.5.8-1.3 2.1-1.9 4.6-1.9 4.7 0 5.4 2.2 5.4 17.1V337h15v-14.8c0-8.1-.5-16.3-1-18.3-2.5-8.9-13.5-12.8-21.2-7.5zm39.2-1.3c-10.2 4.2-15.2 18.3-10.7 30.1 4.3 11.2 17.9 16.1 26.9 9.6l2.8-1.9v2c0 1.9.6 2.1 7.5 2.1h7.5v-42h-7.5c-6.9 0-7.5.2-7.5 2 0 2 0 2-3-.1-3.4-2.5-12-3.5-16-1.8zm14.9 13.4c7.8 4 4.7 15.5-4.1 15.5-9.1 0-11.9-11.6-3.8-15.7 3.2-1.6 4.5-1.6 7.9.2zm44.7-12c-3.4 2.3-3.6 2.3-3.6.5 0-1.8-.7-2-7.5-2H339v42.1l7.3-.3 7.2-.3.5-13.2c.3-7.8 1-13.7 1.6-14.3.6-.7 2.4-1 4-.8 4.4.5 5.4 3.6 5.4 17V337h13.8l.7-10.6c1.3-19.2-.6-27.2-7.5-30.6-4.9-2.5-10-2.3-14.4.7zm40.4-1.2c-7.4 2.4-14 12-14 20.3 0 4.6 2 10.6 4.7 14.2 4.7 6.2 14.9 9.5 23.1 7.3l4.2-1.2v-7c0-6.6-.1-6.9-1.9-5.9-1.1.5-3.7 1-5.9 1-6.5 0-10.6-6.3-7.8-11.9 2-3.8 7.4-5.7 11.8-4.2 1.7.6 3.3 1.1 3.4 1.1.2 0 .4-2.9.4-6.5 0-6.1-.2-6.6-2.6-7.5-3.3-1.3-10.9-1.1-15.4.3zm33.1 1.3c-10.8 5.4-14.8 18.9-9.1 30.4 4.5 8.9 15.8 12.9 27.2 9.6 5.1-1.5 11.8-6.2 11.8-8.3 0-.4-2.7-1.9-6-3.1-5.5-2.2-6.1-2.2-8.2-.8-3.3 2.3-8.1 2-10.6-.7-1.2-1.3-2.2-2.6-2.2-3 0-.4 6.5-.7 14.5-.7H463v-3.8c0-17.2-16.4-27.3-31.9-19.6zm14.7 10c4.3 3 2.8 4.4-4.8 4.4-3.8 0-7-.4-7-.9 0-1.6 5.1-5.1 7.4-5.1 1.2 0 3.2.7 4.4 1.6zm-227.6 9.1l.3 20.8 7.3.3 7.2.3V295h-15l.2 20.7z"
  }));
}

var _icons;
var icons = (_icons = {}, _defineProperty(_icons, 'business-insider', BusinessInsider), _defineProperty(_icons, 'browser-home', BrowserHome), _defineProperty(_icons, 'chevron-down-icon', ChevronDownIcon), _defineProperty(_icons, 'chevron-up-icon', ChevronUpIcon), _defineProperty(_icons, 'chevron-right', ChevronRightIcon), _defineProperty(_icons, 'crescent-lenders', Logo), _defineProperty(_icons, "email", Email), _defineProperty(_icons, "loader", Loader), _defineProperty(_icons, 'market-watch', MarketWatch), _defineProperty(_icons, "money", Money), _defineProperty(_icons, "mortgage", Mortgage), _defineProperty(_icons, "mortgage2", Mortgage2), _defineProperty(_icons, "handshake", Handshake), _defineProperty(_icons, "percentage", Percentage), _defineProperty(_icons, "rocket", Rocket), _defineProperty(_icons, "sms", Sms), _defineProperty(_icons, 'yahoo-finance', YahooFinance), _icons);
function Icon (_ref) {
  var name = _ref.name,
      _ref$boxSize = _ref.boxSize,
      boxSize = _ref$boxSize === void 0 ? [24] : _ref$boxSize,
      rest = _objectWithoutProperties(_ref, ["name", "boxSize"]);

  if (typeof window === 'undefined') {
    return null;
  }

  var Component = icons[name];

  if (Component) {
    return /*#__PURE__*/React.createElement(Component, _objectSpread2({
      boxSize: boxSize
    }, rest));
  }

  return null;
}

function Crumb(props) {
  var items = props.items;
  return /*#__PURE__*/React.createElement(Section, {
    background: "dark",
    inner_width: "medium",
    pt: 2,
    pb: 2
  }, /*#__PURE__*/React.createElement(Breadcrumb, {
    justifyContent: "center",
    spacing: "8px",
    seperator: /*#__PURE__*/React.createElement(Icon, {
      name: "chevron-right",
      boxSize: 6,
      color: "gray.500"
    })
  }, items.map(function (item, index) {
    return /*#__PURE__*/React.createElement(BreadcrumbItem, null, /*#__PURE__*/React.createElement(BreadcrumbLink, {
      as: Link,
      to: item.path,
      isCurrentPage: index === items.length - 1
    }, item.title));
  })));
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

function formatTitle(title) {
  return toProperCase(title.replace(/_/g, ' '));
}

function getContent(title, content) {
  return /*#__PURE__*/React.createElement(Box, {
    p: 6
  }, /*#__PURE__*/React.createElement(Heading, {
    as: "h5",
    fontSize: {
      base: '1xl',
      md: '2xl'
    },
    mb: 1
  }, title[0].text), Object.entries(content).map(function (_content) {
    var _content2 = _slicedToArray(_content, 2),
        key = _content2[0],
        value = _content2[1];

    if (!key || !value || key === '__typename') {
      return;
    }

    return /*#__PURE__*/React.createElement("div", {
      key: shortUuid.generate()
    }, formatTitle(key), " : ", value);
  }));
}

function Cards (props) {
  var background = props.background,
      items = props.items,
      title = props.title;
  return /*#__PURE__*/React.createElement(Section, {
    background: background
  }, /*#__PURE__*/React.createElement("h3", null, title), /*#__PURE__*/React.createElement(SimpleGrid, {
    minChildWidth: "250px",
    spacingX: 6,
    spacingY: 6
  }, items.map(function (item) {
    var image = item.image,
        title = item.title,
        rest = _objectWithoutProperties(item, ["image", "title"]);

    return /*#__PURE__*/React.createElement(Box, {
      bg: "white",
      border: "1px solid",
      borderRadius: "lg",
      overflow: "hidden",
      borderColor: "gray.300",
      key: shortUuid.generate()
    }, /*#__PURE__*/React.createElement(AspectRatio, {
      ratio: 16 / 9
    }, /*#__PURE__*/React.createElement(Image, {
      src: image.url,
      srcSet: getSrcSets(['600x338', '960x540'], image)
    })), getContent(title, rest));
  })));
}

var config = {
  initialColorMode: 'light',
  useSystemColorMode: false
};
var colors = {
  transparent: 'transparent',
  black: '#000',
  white: '#fff',
  blue: {
    800: '#000080'
  },
  red: {
    600: '#D40000'
  }
};
var custom = {
  images: {
    sizes: {
      jumbotron: ['375x375', '414x414', '1280x400', '1366x384', '1440x450', '1920x540']
    }
  }
};
var shadows = {
  outline: "0 0 0 1px #000"
};
var fs = theme$1.fontSizes;
var global = {
  body: {
    fontSize: [fs.lg]
  },
  a: {
    color: 'blue.800',
    hover: {
      textDecoration: 'underline'
    }
  },
  p: {
    marginTop: theme$1.space[6],
    marginBottom: theme$1.space[6]
  },
  li: {
    marginTop: theme$1.space[4],
    marginBottom: theme$1.space[4]
  },
  ul: {
    marginLeft: theme$1.space[12],
    marginBottom: theme$1.space[6]
  },
  ol: {
    marginLeft: theme$1.space[12],
    marginBottom: theme$1.space[6]
  },
  h1: {
    // you can also use responsive styles
    fontSize: [fs['2xl'], fs['3xl'], fs['4xl']],
    fontWeight: 'bold',
    lineHeight: '110%',
    letterSpacing: '-2%',
    marginBottom: theme$1.space[6]
  },
  h2: {
    fontSize: [fs['xl'], fs['3xl']],
    fontWeight: 'semibold',
    lineHeight: '110%',
    letterSpacing: '-1%',
    marginBottom: theme$1.space[6]
  },
  h3: {
    fontSize: [fs['xl'], fs['2xl']],
    fontWeight: 'semibold',
    lineHeight: '120%',
    letterSpacing: '-1%',
    marginBottom: theme$1.space[6]
  },
  h4: {
    fontSize: [fs['xl'], fs['xl2']],
    lineHeight: '110%'
  },
  h5: {
    fontSize: [fs['xl'], fs['xl1']]
  },
  '.highlighted-text-green': {
    color: theme$1.colors.green['800'],
    fontStyle: 'italic',
    fontWeight: 600
  },
  '.highlighted-text-blue': {
    color: theme$1.colors.blue['800'],
    fontStyle: 'italic',
    fontWeight: 600
  },
  '.highlighted-text-red': {
    color: theme$1.colors.red['800'],
    fontStyle: 'italic',
    fontWeight: 600
  }
}; // Version 1: Using objects

var theme = extendTheme({
  config: config,
  colors: colors,
  custom: custom,
  shadows: shadows,
  styles: {
    global: global
  }
});

var _templateObject$1;
var ContainerUI = styled('div')(_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteral(["\n  flex: 1 0 auto;\n  min-height: 100vh;\n"])));

function content (_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React.createElement(ContainerUI, null, children);
}

var Faq = /*#__PURE__*/function (_React$Component) {
  _inherits(Faq, _React$Component);

  var _super = _createSuper(Faq);

  function Faq() {
    _classCallCheck(this, Faq);

    return _super.apply(this, arguments);
  }

  _createClass(Faq, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          background = _this$props.background,
          items = _this$props.items,
          title = _this$props.title;
      return /*#__PURE__*/React.createElement(Section, {
        background: background
      }, /*#__PURE__*/React.createElement("h3", null, title), /*#__PURE__*/React.createElement(Accordion, {
        allowMultiple: true
      }, items.map(function (item) {
        return /*#__PURE__*/React.createElement(AccordionItem, {
          key: shortUuid.generate()
        }, /*#__PURE__*/React.createElement(AccordionButton, null, /*#__PURE__*/React.createElement(Box, {
          flex: "1",
          textAlign: "left",
          p: 3
        }, /*#__PURE__*/React.createElement("h4", null, item.question)), /*#__PURE__*/React.createElement(AccordionIcon, null)), /*#__PURE__*/React.createElement(AccordionPanel, {
          p: 6
        }, item.answer));
      })));
    }
  }]);

  return Faq;
}(React.Component);

function MenuItem(props) {
  var to = props.to,
      title = props.title,
      isTitle = props.isTitle;
  return /*#__PURE__*/React.createElement(ListItem, {
    key: shortUuid.generate(),
    mt: 0,
    mb: 0
  }, /*#__PURE__*/React.createElement(Link$1, {
    as: Link,
    to: to,
    fontWeight: isTitle ? 600 : null
  }, title));
}

function Footer(props) {
  var finePrint = props.finePrint,
      location = props.location,
      info = props.info,
      menus = props.menus;
  return /*#__PURE__*/React.createElement(Box, null, /*#__PURE__*/React.createElement(Section, {
    background: "dark"
  }, /*#__PURE__*/React.createElement(Box, {
    borderTop: "1px solid",
    paddingTop: 6
  }), /*#__PURE__*/React.createElement(SimpleGrid, {
    columns: [2, 2, 4, 4]
  }, /*#__PURE__*/React.createElement(Box, null, /*#__PURE__*/React.createElement(Box, {
    position: "relative"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "crescent-lenders",
    boxSize: {
      base: 36,
      sm: 48,
      lg: 52
    },
    position: "absolute",
    top: {
      base: -3,
      sm: -12,
      md: -12,
      lg: -14
    },
    left: {
      base: 9,
      md: 0
    }
  }))), menus.map(function (_ref) {
    var items = _ref.items,
        title = _ref.title,
        to = _ref.to;
    return /*#__PURE__*/React.createElement(Box, {
      key: shortUuid.generate()
    }, /*#__PURE__*/React.createElement(List, null, /*#__PURE__*/React.createElement(MenuItem, {
      key: shortUuid.generate(),
      isTitle: true,
      title: title,
      to: to
    }), items.map(function (_ref2) {
      var title = _ref2.title,
          to = _ref2.to;
      return /*#__PURE__*/React.createElement(MenuItem, {
        key: shortUuid.generate(),
        title: title,
        to: to
      });
    })));
  })), /*#__PURE__*/React.createElement(Box, {
    borderTop: "1px solid",
    paddingTop: 3
  }, /*#__PURE__*/React.createElement(Text, {
    fontSize: 14
  }, finePrint))));
}

var _templateObject$2, _templateObject2, _templateObject3, _templateObject4, _templateObject5;

function makePixelValue(num) {
  return "".concat(num, "px");
}

var heightLine = 5;
var heightIcon = 22.5;
var translateY = heightIcon / 2;
var translateY1 = makePixelValue(translateY);

function getDefaultStyles() {
  return "\n  background: ".concat(theme.colors.black, ";\n  border-radius: (").concat(makePixelValue(heightLine / 2), ");\n  display: block;\n  height: ").concat(makePixelValue(heightLine), ";\n  left: 0;\n  position: absolute;\n  width: 100%;\n  transition: 250ms ease-in-out;\n");
}

var Line1UI = styled('span')(_templateObject$2 || (_templateObject$2 = _taggedTemplateLiteral(["\n  ", ";\n  top: 0;\n  transform: ", ";\n"])), getDefaultStyles, function (props) {
  return props.isOpen ? "translateY(".concat(translateY1, ") rotate(45deg) translateX(0)") : 'rotate(0deg)';
});
var Line2UI = styled('span')(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  ", ";\n  top: 50%;\n  opacity: ", ";\n"])), getDefaultStyles, function (props) {
  return props.isOpen ? "0" : '1';
});
var Line3UI = styled('span')(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  ", ";\n  top: 100%;\n  transform: ", ";\n"])), getDefaultStyles, function (props) {
  return props.isOpen ? "translateY(-".concat(translateY1, ") rotate(-45deg) translateX(0)") : 'rotate(0deg)';
});
var ContainerUI$1 = styled('div')(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  position: absolute;\n  right: 10px;\n  top: 20px;\n  cursor: pointer;\n"])));
var ContainerInnerUI = styled('div')(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: block;\n  height: ", ";\n  margin: (", ") auto ", " auto;\n  margin-top: 10px;\n  margin-right: 10px;\n  position: relative;\n  width: 40px;\n  z-index: 9999;\n  cursor: pointer;\n"])), makePixelValue(heightIcon), makePixelValue(heightIcon * 2.5), heightIcon);

function TriggerIcon(_ref) {
  var isOpen = _ref.isOpen;
  return /*#__PURE__*/React.createElement(ContainerUI$1, {
    isOpen: isOpen
  }, /*#__PURE__*/React.createElement(ContainerInnerUI, null, /*#__PURE__*/React.createElement(Line1UI, {
    isOpen: isOpen
  }), /*#__PURE__*/React.createElement(Line2UI, {
    isOpen: isOpen
  }), /*#__PURE__*/React.createElement(Line3UI, {
    isOpen: isOpen
  })));
}

function SubMenu(props) {
  var items = props.items,
      isSubMenuShowing = props.isSubMenuShowing,
      toggleMobileMenu = props.toggleMobileMenu;
  return /*#__PURE__*/React.createElement(Box, {
    position: {
      base: 'relative',
      md: 'absolute'
    },
    bg: {
      base: 'none',
      md: 'blue.50'
    },
    p: {
      base: 0,
      md: 6
    },
    display: isSubMenuShowing ? 'block' : 'none',
    marginTop: {
      base: 0,
      md: -3
    },
    whiteSpace: "nowrap",
    width: "auto"
  }, items.map(function (item) {
    return /*#__PURE__*/React.createElement(MenuItem$1, {
      key: shortUuid.generate(),
      item: item,
      margin: {
        base: 0,
        md: 6
      },
      p: {
        base: 4,
        md: 2
      },
      pl: {
        base: 9,
        md: 2
      },
      toggleMobileMenu: toggleMobileMenu
    });
  }));
}

function MenuItem$1(props) {
  var _props$item = props.item,
      items = _props$item.items,
      to = _props$item.to,
      title = _props$item.title,
      isDesktop = props.isDesktop,
      margin = props.margin,
      toggleSubMenu = props.toggleSubMenu,
      subMenuShowing = props.subMenuShowing,
      toggleMobileMenu = props.toggleMobileMenu,
      rest = _objectWithoutProperties(props, ["item", "isDesktop", "margin", "toggleSubMenu", "subMenuShowing", "toggleMobileMenu"]);

  var defaultProps = {
    clear: 'both',
    display: 'block',
    p: {
      base: 4,
      md: 3
    },
    borderBottom: {
      base: '1px solid ',
      md: 'none'
    },
    background: {
      base: 'blue.50',
      md: 'transparent'
    }
  };
  var as = Link;

  if (to) {
    return /*#__PURE__*/React.createElement(Link$1, _objectSpread2(_objectSpread2(_objectSpread2({
      as: as
    }, defaultProps), rest), {}, {
      to: to
    }), title);
  } // for title of a submenu


  if (items) {
    var isSubMenuShowing = subMenuShowing === title;
    return /*#__PURE__*/React.createElement(Box, {
      onMouseEnter: function onMouseEnter() {
        return isDesktop && toggleSubMenu(title);
      },
      onMouseLeave: function onMouseLeave() {
        return isDesktop && toggleSubMenu(null);
      },
      display: "block",
      margin: margin,
      position: "relative",
      zIndex: 9999
    }, /*#__PURE__*/React.createElement(Link$1, _extends({}, defaultProps, {
      onMouseDown: function onMouseDown() {
        if (!isDesktop) {
          isSubMenuShowing ? toggleSubMenu(null) : toggleSubMenu(title);
        }
      }
    }), title, " ", /*#__PURE__*/React.createElement(Icon, {
      name: "chevron-down-icon",
      boxSize: 4
    })), /*#__PURE__*/React.createElement(SubMenu, {
      key: shortUuid.generate(),
      items: items,
      isSubMenuShowing: subMenuShowing === title,
      toggleMobileMenu: toggleMobileMenu
    }));
  }
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
      subMenuShowing: '',
      isMobileMenuShowing: false
    });

    _defineProperty(_assertThisInitialized(_this), "handleToggle", function () {});

    _defineProperty(_assertThisInitialized(_this), "toggleMobileMenu", function () {
      _this.setState({
        isMobileMenuShowing: !_this.state.isMobileMenuShowing
      });
    });

    _defineProperty(_assertThisInitialized(_this), "toggleSubMenu", function (name) {
      _this.setState({
        subMenuShowing: name
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onResize", function () {
      _this.toggleSubMenu(null);
    });

    return _this;
  }

  _createClass(Header, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.isMobileMenuShowing && this.props.path !== prevProps.path) {
        !this.props.isDesktop && this.toggleMobileMenu();
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('resize', this.onResize);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.onResize);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          Content1 = _this$props.Content1,
          Content2 = _this$props.Content2,
          menuItems = _this$props.menuItems,
          isDesktop = _this$props.isDesktop;
      var _this$state = this.state,
          isMobileMenuShowing = _this$state.isMobileMenuShowing,
          subMenuShowing = _this$state.subMenuShowing;
      return /*#__PURE__*/React.createElement(Flex, {
        as: "nav",
        align: "center",
        justify: "space-between",
        wrap: "wrap",
        padding: {
          base: 6
        },
        bg: "gray.50",
        position: "relative",
        zIndex: 2,
        minHeight: {
          base: '90px'
        }
      }, /*#__PURE__*/React.createElement(Content1, null), /*#__PURE__*/React.createElement(Box, {
        background: {
          base: theme.colors.white,
          md: 'none'
        },
        display: {
          base: isMobileMenuShowing ? 'block' : 'none',
          md: 'flex'
        },
        width: {
          sm: 'full',
          md: 'auto'
        },
        alignItems: "center",
        flexGrow: 1,
        position: {
          base: 'fixed',
          md: 'relative'
        },
        top: {
          base: '90px',
          md: 0
        },
        marginLeft: {
          base: -6,
          md: 3
        },
        minHeight: {
          base: '100vh',
          md: 'auto'
        }
      }, menuItems.map(function (item) {
        return /*#__PURE__*/React.createElement(MenuItem$1, {
          item: item,
          toggleSubMenu: _this2.toggleSubMenu,
          subMenuShowing: subMenuShowing,
          toggleMobileMenu: _this2.toggleMobileMenu,
          isDesktop: isDesktop,
          key: shortUuid.generate()
        });
      })), /*#__PURE__*/React.createElement(Box, {
        display: {
          base: 'none',
          md: 'none',
          lg: 'block'
        },
        mt: {
          base: 0,
          md: 0
        }
      }, /*#__PURE__*/React.createElement(Content2, null)), /*#__PURE__*/React.createElement(Box, {
        display: {
          base: 'block',
          md: 'none'
        },
        onMouseDown: this.toggleMobileMenu
      }, /*#__PURE__*/React.createElement(TriggerIcon, {
        isOpen: isMobileMenuShowing
      })));
    }
  }]);

  return Header;
}(React.Component);

function WithBreakPoint(props) {
  var isDesktop = useBreakpointValue({
    base: false,
    md: true
  });
  return /*#__PURE__*/React.createElement(Header, _objectSpread2({
    isDesktop: isDesktop
  }, props));
}

var _templateObject$3;
var TextContainerUI = styled(Box)(_templateObject$3 || (_templateObject$3 = _taggedTemplateLiteral(["\n  h1 {\n    margin: 0;\n  }\n  p {\n    margin: 0;\n    font-weight: bold;\n    font-size: ", ";\n    margin-top: 0.25em;\n  }\n"])), theme.fontSizes['xl']);

function Jumbotron (_ref) {
  var callToActionText = _ref.callToActionText,
      callToActionHref = _ref.callToActionHref,
      children = _ref.children,
      _ref$hasCta = _ref.hasCta,
      hasCta = _ref$hasCta === void 0 ? true : _ref$hasCta,
      _ref$image = _ref.image,
      image = _ref$image === void 0 ? null : _ref$image,
      overlay = _ref.overlay,
      textColor = _ref.textColor;
  return /*#__PURE__*/React.createElement(Box, {
    position: "relative"
  }, /*#__PURE__*/React.createElement(Flex, {
    minHeight: "50vh",
    height: "200px",
    backgroundSize: "cover",
    display: {
      base: 'none',
      md: 'flex'
    },
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    alignSelf: "center",
    justifySelf: "center",
    position: "relative",
    zIndex: 1
  }, /*#__PURE__*/React.createElement(TextContainerUI, {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    color: textColor === 'dark' ? 'black' : 'white',
    maxW: "768px",
    textAlign: "center"
  }, children), hasCta && /*#__PURE__*/React.createElement(Button, {
    justifyContent: "center",
    colorScheme: "red",
    isCta: true,
    to: callToActionHref,
    size: "lg",
    maxW: "250px",
    marginTop: 6
  }, callToActionText)), /*#__PURE__*/React.createElement(Flex, {
    bg: "blue.50",
    display: {
      base: 'flex',
      md: 'none'
    },
    flexDirection: "column",
    padding: 9,
    paddingTop: 12,
    paddingBottom: 12
  }, /*#__PURE__*/React.createElement(TextContainerUI, null, children), hasCta && /*#__PURE__*/React.createElement(Button, {
    colorScheme: "red",
    to: callToActionHref,
    size: "lg",
    maxW: "250px",
    mt: ".75em"
  }, callToActionText)), /*#__PURE__*/React.createElement(Box, {
    display: {
      base: 'none',
      md: 'block'
    },
    minHeight: "50vh",
    maxHeight: "50vh",
    width: "100vw",
    overflow: "hidden",
    position: "absolute",
    top: "0"
  }, /*#__PURE__*/React.createElement(Image, {
    srcSet: getSrcSets(theme.custom.images.sizes.jumbotron, image),
    filter: "brightness(".concat(overlay, "%)"),
    fit: "cover",
    minHeight: "50vh",
    loading: "eager",
    width: "100vw"
  })));
}

var _templateObject$4, _templateObject2$1;

var ContainerUI$2 = styled('div')(_templateObject$4 || (_templateObject$4 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100vw;\n  height: 100vh;\n  text-align: center;\n"])));
var LoaderUI = styled('div')(_templateObject2$1 || (_templateObject2$1 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  width: 100%;\n"])));

function loadingScreen () {
  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      show = _useState2[0],
      setShow = _useState2[1];

  useEffect(function () {
    var timeout = setTimeout(function () {
      return setShow(true);
    }, 250);
    return function () {
      clearTimeout(timeout);
    };
  }, []);
  return show && /*#__PURE__*/React.createElement(ContainerUI$2, null, /*#__PURE__*/React.createElement(LoaderUI, null, "Loading...")) || null;
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

var _templateObject$5, _templateObject2$2, _templateObject3$1;
var CloseButtonUI = styled('a')(_templateObject$5 || (_templateObject$5 = _taggedTemplateLiteral(["\n  display: block;\n  margin: 0 auto;\n  width: 100%;\n  text-align: center;\n"])));
var ContainerUI$3 = styled('div')(_templateObject2$2 || (_templateObject2$2 = _taggedTemplateLiteral(["\n  position: fixed;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(", ", 0.8);\n  z-index: 999;\n  padding: ", ";\n"])), hexToRgb(theme.colors.black), theme.space[3]);
var ModalUI = styled('div')(_templateObject3$1 || (_templateObject3$1 = _taggedTemplateLiteral(["\n  padding: ", ";\n  position: absolute;\n  z-index: 99999;\n  width: 500px;\n  background: white;\n  border: 1px solid #ccc;\n  transition: 1.1s ease-out;\n  box-shadow: -2rem 2rem 2rem rgba(black, 0.2);\n  filter: blur(0);\n  transform: scale(1);\n  opacity: 1;\n  visibility: visible;\n"])), theme.space[3]);

function modal (_ref) {
  var children = _ref.children,
      closeModal = _ref.closeModal;
  return /*#__PURE__*/React.createElement(ContainerUI$3, null, /*#__PURE__*/React.createElement(ModalUI, null, children, /*#__PURE__*/React.createElement(CloseButtonUI, {
    href: "",
    onClick: function onClick(e) {
      closeModal();
      e.preventDefault();
    }
  })));
}

function linkResolver(props) {
  var path = props.path,
      __typename = props.__typename;

  if (__typename === 'PageBodyRelatedPost' || __typename === 'PostBodyRelatedPost') {
    return "/blog/".concat(path);
  }

  return props.path;
}

function Post(props) {
  var title = props.title,
      image = props.image;
  return /*#__PURE__*/React.createElement(SimpleGrid, {
    border: "1px solid",
    borderRadius: "md",
    overflow: "hidden",
    borderColor: "gray.300",
    alignItems: "start",
    columns: 1
  }, /*#__PURE__*/React.createElement(AspectRatio, {
    ratio: 16 / 9,
    display: {
      base: 'none',
      md: 'block'
    }
  }, /*#__PURE__*/React.createElement(Image, {
    cursor: "pointer",
    minHeight: "150px",
    onClick: function onClick() {
      return navigate(linkResolver(props));
    },
    src: image.url,
    srcSet: getSrcSets(['414x414', '1280x400', '1200x630', '375x375'], image)
  })), /*#__PURE__*/React.createElement(Box, {
    padding: 6,
    height: "100%"
  }, /*#__PURE__*/React.createElement(Heading, {
    as: "h4",
    fontStyle: "bold",
    fontSize: {
      base: 'lg',
      md: 'xl'
    }
  }, /*#__PURE__*/React.createElement(Link, {
    to: linkResolver(props)
  }, " ", title[0].text || title))));
}

function Posts(props) {
  var _props$background = props.background,
      background = _props$background === void 0 ? 'light' : _props$background,
      items = props.items,
      _props$title = props.title,
      title = _props$title === void 0 ? 'Recent Posts' : _props$title;
  return /*#__PURE__*/React.createElement(Section, {
    background: background
  }, /*#__PURE__*/React.createElement("h3", null, title), /*#__PURE__*/React.createElement(SimpleGrid, {
    columns: {
      base: 1,
      md: 2,
      lg: 3
    },
    minChildWidth: "250px",
    spacingX: 6,
    spacingY: 6
  }, items.map(function (item) {
    return /*#__PURE__*/React.createElement(Post, _extends({}, item, {
      key: shortUuid.generate()
    }));
  })));
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

var Context = /*#__PURE__*/React.createContext();
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
      return /*#__PURE__*/React.createElement(Context.Provider, null, /*#__PURE__*/React.createElement(ChakraProvider, {
        resetCSS: true,
        theme: theme
      }, /*#__PURE__*/React.createElement(Body, null, children)));
    }
  }]);

  return PrototypableProvider;
}(React.Component);
var PrototypableConsumer = Context.Consumer;

var _templateObject$6;
var BoxUI = styled(Box)(_templateObject$6 || (_templateObject$6 = _taggedTemplateLiteral(["\n  p:last-child {\n    margin-bottom: 0;\n  }\n  p: first-child {\n    margin-top: 0;\n  }\n\n  ul {\n    margin-bottom: 0;\n  }\n"])));

function HighlightedBox(_ref) {
  var children = _ref.children,
      _ref$mb = _ref.mb,
      mb = _ref$mb === void 0 ? 6 : _ref$mb;
  return /*#__PURE__*/React.createElement(Box, {
    as: "blockquote",
    borderRadius: "md",
    bg: "blue.50",
    p: 6,
    mb: mb
  }, /*#__PURE__*/React.createElement(BoxUI, null, children));
}

function QuickPoint(props) {
  var icon = props.icon,
      children = props.children;
  return /*#__PURE__*/React.createElement(SimpleGrid, {
    display: {
      base: 'flex',
      md: 'grid'
    },
    flexDirection: "column",
    alignItems: "center",
    templateColumns: "2fr 8fr",
    spacingX: [1, 3]
  }, /*#__PURE__*/React.createElement(Box, null, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    boxSize: 24
  })), /*#__PURE__*/React.createElement(Box, {
    maxWidth: {
      base: '400px',
      md: '100%'
    },
    textAlign: {
      base: 'center',
      md: 'left'
    },
    marginTop: {
      base: 6,
      md: 0
    }
  }, /*#__PURE__*/React.createElement(Text, {
    fontSize: {
      base: 'xl'
    },
    fontWeight: "400"
  }, children)));
}

var components = {
  a: function a(props) {
    var href = props.href,
        children = props.children;

    if (href[0] === '/') {
      return /*#__PURE__*/React.createElement(Link, {
        to: href
      }, children);
    }

    return /*#__PURE__*/React.createElement("a", props);
  },
  Box: Box,
  Button: Button,
  Divider: Divider,
  Flex: Flex,
  HighlightedBox: HighlightedBox,
  Icon: Icon,
  Table: Table,
  Td: Td,
  Tr: Tr,
  Tbody: Tbody,
  List: List,
  ListItem: ListItem,
  UnorderedList: UnorderedList,
  SimpleGrid: SimpleGrid,
  Stack: Stack,
  Text: Text,
  QuickPoint: QuickPoint
};

function customLink(type, element, content, paths) {
  var _element$data = element.data,
      link_type = _element$data.link_type,
      target = _element$data.target,
      id = _element$data.id,
      url = _element$data.url;

  if (link_type === 'Web') {
    return /*#__PURE__*/React.createElement("a", {
      href: url,
      target: target
    }, content);
  } else {
    var to = element.data.url || paths[element.data.id];
    return /*#__PURE__*/React.createElement(Link, {
      to: to
    }, content);
  }
} // takes prismic data, then parses the components to react components and adds a wrapper


function parsePrismicToReactComponents(text, paths) {
  if (!text) {
    return null;
  }

  if (text.type === 'preformatted') {
    return /*#__PURE__*/React.createElement(JsxParser, {
      components: components,
      jsx: text.text,
      key: shortUuid.generate()
    });
  } // if text isn't preformatted


  return /*#__PURE__*/React.createElement(RichText, {
    render: text,
    serializeHyperlink: function serializeHyperlink(type, element, content) {
      return customLink(type, element, content, paths);
    }
  });
}

function Article(props) {
  var background = props.background,
      subTitle = props.subTitle,
      title1 = props.title1,
      body = props.body;
  return /*#__PURE__*/React.createElement(Section, {
    background: background,
    inner_width: "medium-plus"
  }, /*#__PURE__*/React.createElement(Text, {
    as: "h2",
    mb: 1
  }, title1), subTitle && /*#__PURE__*/React.createElement(Text, {
    as: "h3"
  }, subTitle), /*#__PURE__*/React.createElement(Box, null, body));
}

function ArticleWithImages(props) {
  var background = props.background,
      column1 = props.column1,
      column2 = props.column2,
      reverse = props.reverse;
  var col1Start = reverse ? 2 : 1;
  var col2Start = reverse ? 1 : 2;
  return /*#__PURE__*/React.createElement(Section, {
    background: background
  }, /*#__PURE__*/React.createElement(Grid, {
    display: {
      base: 'flex',
      md: 'grid'
    },
    flexDirection: "column-reverse",
    templateColumns: "1fr 1fr",
    columnGap: 9
  }, /*#__PURE__*/React.createElement(GridItem, {
    rowStart: "1",
    colStart: col1Start,
    key: shortUuid.generate()
  }, column1), /*#__PURE__*/React.createElement(GridItem, {
    rowStart: "1",
    colStart: col2Start,
    key: shortUuid.generate(),
    marginBottom: 9
  }, column2)));
}

function ArticleWithImages$1(props) {
  var background = props.background,
      column1 = props.column1,
      column2 = props.column2,
      title1 = props.title1,
      title2 = props.title2;
  console.log('props', props);
  return /*#__PURE__*/React.createElement(Section, {
    background: background
  }, /*#__PURE__*/React.createElement(Grid, {
    display: {
      base: 'flex',
      md: 'grid'
    },
    flexDirection: "column-reverse",
    templateColumns: "1fr 1fr",
    columnGap: 9
  }, /*#__PURE__*/React.createElement(GridItem, {
    rowStart: "1",
    key: shortUuid.generate()
  }, /*#__PURE__*/React.createElement("h3", null, title1), column1), /*#__PURE__*/React.createElement(GridItem, {
    key: shortUuid.generate(),
    marginBottom: 9
  }, column2 && /*#__PURE__*/React.createElement(HighlightedBox, null, column2))));
}

function getComponentsFromSlices(_ref) {
  var slices = _ref.slices,
      _ref$options = _ref.options,
      options = _ref$options === void 0 ? {} : _ref$options,
      paths = _ref.paths;
  return slices.map(function (slice, index) {
    var type = slice.__typename;

    if (type === 'PageBody1Article') {
      var _slice$primary = slice.primary,
          background = _slice$primary.background,
          body3 = _slice$primary.body3,
          sidebar = _slice$primary.sidebar,
          title1 = _slice$primary.title1,
          title2 = _slice$primary.sidebar_title;
      var column1 = parsePrismicToReactComponents(body3, paths);
      var column2 = parsePrismicToReactComponents(sidebar, paths);
      return /*#__PURE__*/React.createElement(ArticleWithImages$1, {
        background: background,
        column1: column1,
        column2: column2,
        key: shortUuid.generate(),
        title1: title1,
        title2: title2
      });
    } else if (type === 'PostBody1Highlighted_box') {
      var parsedComponents = parsePrismicToReactComponents(slice.primary.text, paths);
      return /*#__PURE__*/React.createElement(HighlightedBox, {
        key: shortUuid.generate()
      }, parsedComponents);
    } else if (type === 'PageBody1Faq') {
      var items = slice.fields.map(function (item) {
        return _objectSpread2(_objectSpread2({}, item), {}, {
          answer: parsePrismicToReactComponents(item.answer, paths)
        });
      });
      return /*#__PURE__*/React.createElement(Faq, {
        key: shortUuid.generate(),
        items: items,
        title: slice.primary.title1,
        background: slice.primary.background
      });
    } else if (type === 'PostBody1Text') {
      var _parsedComponents = parsePrismicToReactComponents(slice.primary.text, paths);

      return _parsedComponents;
    } else if (type === 'PageBody1Article1') {
      var _slice$primary2 = slice.primary,
          _background = _slice$primary2.background,
          _body = _slice$primary2.body3,
          subTitle = _slice$primary2.sub_title,
          _title = _slice$primary2.title1;
      var body = parsePrismicToReactComponents(_body, paths);
      return /*#__PURE__*/React.createElement(Article, {
        background: _background,
        body: body,
        key: shortUuid.generate(),
        subTitle: subTitle,
        title1: _title
      });
    } else if (type === 'PageBody1Linked_component_section') {
      var __typename = slice.primary.body2.body[0].__typename;
      var _background2 = slice.primary.background;

      if (__typename === 'Component_sliceBodyReact_section') {
        var body1 = slice.primary.body2.body[0].primary.body1;

        var _parsedComponents2 = parsePrismicToReactComponents(body1[0], paths);

        return /*#__PURE__*/React.createElement(Section, {
          background: _background2
        }, _parsedComponents2);
      } else if (__typename === 'Component_sliceBodyFaq') {
        var _items = slice.primary.body2.body[0].fields.map(function (item) {
          return _objectSpread2(_objectSpread2({}, item), {}, {
            answer: parsePrismicToReactComponents(item.answer, paths)
          });
        });

        return /*#__PURE__*/React.createElement(Faq, {
          background: _background2,
          items: _items,
          title: slice.primary.body2.body[0].primary.title1
        });
      }
    } else if (type === 'PostBody1Responsive_image') {
      return /*#__PURE__*/React.createElement(AspectRatio, {
        ratio: 16 / 9
      }, /*#__PURE__*/React.createElement(Image, {
        borderRadius: "md",
        alt: slice.primary.image1.alt,
        src: slice.primary.image1.url,
        srcSet: getSrcSets(['768x506', '1024x674', '1366x900', '1600x1056'], slice.primary.image1)
      }));
    } else if (type === 'PageBody1Jumobotron') {
      var _slice$primary3 = slice.primary,
          _body2 = _slice$primary3.body,
          call_to_action = _slice$primary3.call_to_action,
          overlay = _slice$primary3.overlay,
          text_color = _slice$primary3.text_color;

      var _parsedComponents3 = parsePrismicToReactComponents(_body2, paths);

      return React.createElement(Jumbotron, {
        callToActionHref: options.callToActionHref,
        callToActionText: call_to_action || options.callToActionText,
        key: shortUuid.generate(),
        image: slice.primary.image,
        overlay: overlay,
        textColor: text_color
      }, _parsedComponents3);
    } else if (type === 'PageBody1Related_blog_posts') {
      var _items2 = slice.fields.map(function (item) {
        var related_blog_post = item.related_blog_post;
        return _objectSpread2(_objectSpread2({}, related_blog_post), {}, {
          __typename: 'PageBodyRelatedPost'
        });
      });

      return /*#__PURE__*/React.createElement(Posts, {
        items: _items2
      });
    } else if (type === 'PageBody1Cards') {
      var _slice$primary4 = slice.primary,
          _background3 = _slice$primary4.background,
          _title2 = _slice$primary4.title1;

      var _items3 = slice.fields.map(function (card) {
        return card.cards;
      });

      return /*#__PURE__*/React.createElement(Cards, {
        background: _background3,
        items: _items3,
        title: _title2
      });
    } else if (type === 'PageBody1Article___images') {
      var fields = slice.fields,
          _slice$primary5 = slice.primary,
          _background4 = _slice$primary5.background,
          _body3 = _slice$primary5.body,
          reverse = _slice$primary5.reverse_order;
      return /*#__PURE__*/React.createElement(ArticleWithImages, {
        background: _background4,
        reverse: reverse,
        column1: parsePrismicToReactComponents(_body3, paths),
        column2: fields.map(function (item) {
          return /*#__PURE__*/React.createElement(Image, {
            borderRadius: "md",
            src: item.image.url,
            srcSet: getSrcSets(['540x357', '1080x713'], item.image),
            aspectRatio: 66
          });
        })
      });
    }
  });
}

function getImagePathsFromData (_ref) {
  var image = _ref.image;

  var _urls = theme.custom.images.sizes.jumbotron.map(function (_size) {
    return image[_size].url;
  });

  return [image.url].concat(_toConsumableArray(_urls));
}

function getMetaTags (data, defaultTitle, defaultDescription, defaultImage) {
  var ogDescription = data.og_description || data.meta_description || defaultDescription;
  var ogImage = data.og_image || defaultImage;
  var ogTitle = data.og_title || data.meta_title || defaultTitle;
  var ogType = data.og_type;
  var metaDescription = data.meta_description || data.og_description || defaultDescription;
  var metaTitle = data.meta_title || data.og_title || defaultTitle;
  var metaNoindex = data.meta_noindex;
  var canonical = data.siteRoot + data.path;
  return [/*#__PURE__*/React.createElement("meta", {
    property: "og:description",
    content: ogDescription,
    key: shortUuid.generate()
  }), /*#__PURE__*/React.createElement("meta", {
    property: "og:image",
    content: ogImage,
    key: shortUuid.generate()
  }), /*#__PURE__*/React.createElement("meta", {
    property: "og:title",
    content: ogTitle,
    key: shortUuid.generate()
  }), /*#__PURE__*/React.createElement("meta", {
    property: "og:type",
    content: ogType,
    key: shortUuid.generate()
  }), /*#__PURE__*/React.createElement("meta", {
    name: "description",
    content: metaDescription,
    key: shortUuid.generate()
  }), /*#__PURE__*/React.createElement("title", {
    key: shortUuid.generate()
  }, metaTitle), canonical && /*#__PURE__*/React.createElement("meta", {
    name: "canonical",
    href: canonical,
    key: shortUuid.generate()
  }), metaNoindex ? /*#__PURE__*/React.createElement("meta", {
    name: "robots",
    content: "noindex",
    key: shortUuid.generate()
  }) : /*#__PURE__*/React.createElement("meta", {
    name: "robots",
    content: "all",
    key: shortUuid.generate()
  })];
}

function getStructuredDataForArticle(data) {
  var first_publication_date = data.first_publication_date,
      last_publication_date = data.last_publication_date,
      image = data.image,
      meta_title = data.meta_title,
      siteRoot = data.siteRoot,
      path = data.path;
  var _json = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': "".concat(siteRoot).concat(path)
    },
    headline: meta_title,
    image: getImagePathsFromData({
      image: image,
      size: 'half'
    }),
    dateModified: last_publication_date,
    datePublished: first_publication_date,
    author: {
      '@type': 'person',
      name: 'John Russell Barneson'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Crescent Lenders',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.crescentlenders.com/images/logo-white-345x230.png'
      }
    }
  };
  return /*#__PURE__*/React.createElement("script", {
    type: "application/ld+json",
    key: "structured-data"
  }, JSON.stringify(_json));
}

var index = {
  getComponentsFromSlices: getComponentsFromSlices,
  getImagePathsFromData: getImagePathsFromData,
  getMetaTags: getMetaTags,
  getSrcSets: getSrcSets,
  getStructuredDataForArticle: getStructuredDataForArticle,
  parsePrismicToReactComponents: parsePrismicToReactComponents
};

function useScript (url) {
  useEffect(function () {
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
  useScript: useScript
};

export { Body, Crumb as BreadCrumb, Button, Cards, content as Content, Faq, Footer, WithBreakPoint as Header, Icon, Jumbotron, loadingScreen as LoadingScreen, modal as Modal, Posts, PrototypableProvider, ScrollToTop, Section, index as prismicUtils, utils };
