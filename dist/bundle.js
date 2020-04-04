'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('react');
require('styled-components');

const unit = 32;
const config = {
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

  unit(multiplier) {
    return multiplier * unit + 'px';
  },

  layout: {
    topNavHeight: 2.25 * unit + 'px'
  },
  contact: {
    email: 'biz@yourbiz.com',
    phone: '999-9999-9999'
  }
};

// import styled from 'styled-components'

const getBgColor = ({
  hasBgLightColor,
  hasBgDarkColor
}) => {
  if (hasBgLightColor) {
    return `${config.colors.light1}`;
  } else if (hasBgDarkColor) {
    return `${config.colors.dark3}`;
  } else {
    return '#fff';
  }
};

const getInnerWidth = ({
  innerWidth
}) => {
  if (innerWidth === 'medium') {
    return '720px';
  } else if (innerWidth === 'small') {
    return '460px';
  } else {
    return `${config.unit(33)}`;
  }
};

const SectionWrapperUI = styled('section')`
  width: 100%;
  background-color: ${getBgColor};
`;
const SectionUI = styled('div')`
  max-width: ${getInnerWidth};
  margin: 0 auto;
  padding: ${config.unit(1)} 0;
  text-align: ${({
  textAlign
}) => textAlign};
`;

function section ({
  children,
  textAlign = 'left',
  hasBgDarkColor = false,
  hasBgLightColor = false,
  isFullWidth = false,
  innerWidth = 'big'
}) {
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
