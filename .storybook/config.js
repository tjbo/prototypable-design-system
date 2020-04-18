import { addDecorator } from '@storybook/react'
import Head from '../src/components/head/head'
import { ThemeProvider } from 'styled-components'
import { makePixelValue } from '../src'

const unit = 32

addDecorator((s) => (
  <>
    <ThemeProvider
      theme={{
        breakPoints: {
          mobile: makePixelValue(600),
          tablet: makePixelValue(35 * unit),
          desktop: makePixelValue(unit * 40),
        },
        colors: {
          dark1: '#000',
          dark2: '#2b6242',
          dark3: '#0090e7',
          dark4: '#454545',
          dark5: '#0066a3',
          light1: '#f5faff',
          light2: '36,139,204',
          light3: '#fff',
        },
        typography: {
          fonts: {
            font1: 'PT Serif',
            font2: 'Roboto',
            font3: 'PT Serif Caption',
          },
          sizes: {
            desktop: {
              xsm: '1rem', // not used yet
              sm: '1.125rem',
              md: '1.5rem',
              lg: '2.5rem',
              xlg: '3.5rem',
              xxlg: '4rem',
            },
            tablet: {
              xsm: '.9rem',
              sm: '1.125rem',
              md: '1.5rem',
              lg: '2rem',
              xlg: '2.75rem',
              xxlg: '3.25rem',
            },
            mobile: {
              xsm: '.9rem',
              sm: '1.125rem',
              md: '1.5rem',
              lg: '2rem',
              xlg: '2.25rem',
              xxlg: '3rem',
            },
          },
        },

        border: '1px solid #eee',
        unit(multiplier) {
          return makePixelValue(multiplier * unit)
        },
        layout: {
          desktop: {
            headerHeight: makePixelValue(2 * unit),
          },
          mobile: {
            headerHeight: makePixelValue(1.5 * unit),
          },
          tablet: {
            headerHeight: makePixelValue(2 * unit),
          },
        },
      }}
    >
      <Head />
      {s()}
    </ThemeProvider>
  </>
))
