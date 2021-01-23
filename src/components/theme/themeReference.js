const theme = {
    direction: 'ltr',
    breakpoints: ['0em', '30em', '48em', '62em', '80em', '96em'],
    zIndices: {
      hide: -1,
      auto: 'auto',
      base: 0,
      docked: 10,
      dropdown: 1000,
      sticky: 1100,
      banner: 1200,
      overlay: 1300,
      modal: 1400,
      popover: 1500,
      skipLink: 1600,
      toast: 1700,
      tooltip: 1800,
    },
    radii: {
      none: '0',
      sm: '0.125rem',
      base: '0.25rem',
      md: '0.375rem',
      lg: '0.5rem',
      xl: '0.75rem',
      '2xl': '1rem',
      '3xl': '1.5rem',
      full: '9999px',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000',
      white: '#fff',
      whiteAlpha: {
        50: 'rgba(255, 255, 255, 0.04)',
        100: 'rgba(255, 255, 255, 0.06)',
        200: 'rgba(255, 255, 255, 0.08)',
        300: 'rgba(255, 255, 255, 0.16)',
        400: 'rgba(255, 255, 255, 0.24)',
        500: 'rgba(255, 255, 255, 0.36)',
        600: 'rgba(255, 255, 255, 0.48)',
        700: 'rgba(255, 255, 255, 0.64)',
        800: 'rgba(255, 255, 255, 0.80)',
        900: 'rgba(255, 255, 255, 0.92)',
      },
      blackAlpha: {
        50: 'rgba(0, 0, 0, 0.04)',
        100: 'rgba(0, 0, 0, 0.06)',
        200: 'rgba(0, 0, 0, 0.08)',
        300: 'rgba(0, 0, 0, 0.16)',
        400: 'rgba(0, 0, 0, 0.24)',
        500: 'rgba(0, 0, 0, 0.36)',
        600: 'rgba(0, 0, 0, 0.48)',
        700: 'rgba(0, 0, 0, 0.64)',
        800: 'rgba(0, 0, 0, 0.80)',
        900: 'rgba(0, 0, 0, 0.92)',
      },
      gray: {
        50: '#F7FAFC',
        100: '#EDF2F7',
        200: '#E2E8F0',
        300: '#CBD5E0',
        400: '#A0AEC0',
        500: '#718096',
        600: '#4A5568',
        700: '#2D3748',
        800: '#1A202C',
        900: '#171923',
      },
      red: {
        50: '#FFF5F5',
        100: '#FED7D7',
        200: '#FEB2B2',
        300: '#FC8181',
        400: '#F56565',
        500: '#E53E3E',
        600: '#C53030',
        700: '#9B2C2C',
        800: '#822727',
        900: '#63171B',
      },
      orange: {
        50: '#FFFAF0',
        100: '#FEEBC8',
        200: '#FBD38D',
        300: '#F6AD55',
        400: '#ED8936',
        500: '#DD6B20',
        600: '#C05621',
        700: '#9C4221',
        800: '#7B341E',
        900: '#652B19',
      },
      yellow: {
        50: '#FFFFF0',
        100: '#FEFCBF',
        200: '#FAF089',
        300: '#F6E05E',
        400: '#ECC94B',
        500: '#D69E2E',
        600: '#B7791F',
        700: '#975A16',
        800: '#744210',
        900: '#5F370E',
      },
      green: {
        50: '#F0FFF4',
        100: '#C6F6D5',
        200: '#9AE6B4',
        300: '#68D391',
        400: '#48BB78',
        500: '#38A169',
        600: '#2F855A',
        700: '#276749',
        800: '#22543D',
        900: '#1C4532',
      },
      teal: {
        50: '#E6FFFA',
        100: '#B2F5EA',
        200: '#81E6D9',
        300: '#4FD1C5',
        400: '#38B2AC',
        500: '#319795',
        600: '#2C7A7B',
        700: '#285E61',
        800: '#234E52',
        900: '#1D4044',
      },
      blue: {
        50: '#ebf8ff',
        100: '#bee3f8',
        200: '#90cdf4',
        300: '#63b3ed',
        400: '#4299e1',
        500: '#3182ce',
        600: '#2b6cb0',
        700: '#2c5282',
        800: '#2a4365',
        900: '#1A365D',
      },
      cyan: {
        50: '#EDFDFD',
        100: '#C4F1F9',
        200: '#9DECF9',
        300: '#76E4F7',
        400: '#0BC5EA',
        500: '#00B5D8',
        600: '#00A3C4',
        700: '#0987A0',
        800: '#086F83',
        900: '#065666',
      },
      purple: {
        50: '#FAF5FF',
        100: '#E9D8FD',
        200: '#D6BCFA',
        300: '#B794F4',
        400: '#9F7AEA',
        500: '#805AD5',
        600: '#6B46C1',
        700: '#553C9A',
        800: '#44337A',
        900: '#322659',
      },
      pink: {
        50: '#FFF5F7',
        100: '#FED7E2',
        200: '#FBB6CE',
        300: '#F687B3',
        400: '#ED64A6',
        500: '#D53F8C',
        600: '#B83280',
        700: '#97266D',
        800: '#702459',
        900: '#521B41',
      },
      linkedin: {
        50: '#E8F4F9',
        100: '#CFEDFB',
        200: '#9BDAF3',
        300: '#68C7EC',
        400: '#34B3E4',
        500: '#00A0DC',
        600: '#008CC9',
        700: '#0077B5',
        800: '#005E93',
        900: '#004471',
      },
      facebook: {
        50: '#E8F4F9',
        100: '#D9DEE9',
        200: '#B7C2DA',
        300: '#6482C0',
        400: '#4267B2',
        500: '#385898',
        600: '#314E89',
        700: '#29487D',
        800: '#223B67',
        900: '#1E355B',
      },
      messenger: {
        50: '#D0E6FF',
        100: '#B9DAFF',
        200: '#A2CDFF',
        300: '#7AB8FF',
        400: '#2E90FF',
        500: '#0078FF',
        600: '#0063D1',
        700: '#0052AC',
        800: '#003C7E',
        900: '#002C5C',
      },
      whatsapp: {
        50: '#dffeec',
        100: '#b9f5d0',
        200: '#90edb3',
        300: '#65e495',
        400: '#3cdd78',
        500: '#22c35e',
        600: '#179848',
        700: '#0c6c33',
        800: '#01421c',
        900: '#001803',
      },
      twitter: {
        50: '#E5F4FD',
        100: '#C8E9FB',
        200: '#A8DCFA',
        300: '#83CDF7',
        400: '#57BBF5',
        500: '#1DA1F2',
        600: '#1A94DA',
        700: '#1681BF',
        800: '#136B9E',
        900: '#0D4D71',
      },
      telegram: {
        50: '#E3F2F9',
        100: '#C5E4F3',
        200: '#A2D4EC',
        300: '#7AC1E4',
        400: '#47A9DA',
        500: '#0088CC',
        600: '#007AB8',
        700: '#006BA1',
        800: '#005885',
        900: '#003F5E',
      },
    },
    letterSpacings: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em',
    },
    lineHeights: {
      3: '.75rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      9: '2.25rem',
      10: '2.5rem',
      normal: 'normal',
      none: 1,
      shorter: 1.25,
      short: 1.375,
      base: 1.5,
      tall: 1.625,
      taller: '2',
    },
    fontWeights: {
      hairline: 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
    fonts: {
      heading:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      body:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      mono:
        'SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',
    },
    fontSizes: {
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
      '7xl': '4.5rem',
      '8xl': '6rem',
      '9xl': '8rem',
    },
    sizes: {
      0: '0',
      1: '0.25rem',
      2: '0.5rem',
      3: '0.75rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      9: '2.25rem',
      10: '2.5rem',
      12: '3rem',
      14: '3.5rem',
      16: '4rem',
      20: '5rem',
      24: '6rem',
      28: '7rem',
      32: '8rem',
      36: '9rem',
      40: '10rem',
      44: '11rem',
      48: '12rem',
      52: '13rem',
      56: '14rem',
      60: '15rem',
      64: '16rem',
      72: '18rem',
      80: '20rem',
      96: '24rem',
      px: '1px',
      full: '100%',
      '3xs': '14rem',
      '2xs': '16rem',
      xs: '20rem',
      sm: '24rem',
      md: '28rem',
      lg: '32rem',
      xl: '36rem',
      '2xl': '42rem',
      '3xl': '48rem',
      '4xl': '56rem',
      '5xl': '64rem',
      '6xl': '72rem',
      '7xl': '80rem',
      container: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
    },
    shadows: {
      xs: '0 0 0 1px rgba(0, 0, 0, 0.05)',
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg:
        '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl:
        '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      outline: '0 0 0 1px #000',
      inner: 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
      none: 'none',
      'dark-lg':
        'rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.4) 0px 15px 40px',
    },
    space: {
      0: '0',
      1: '0.25rem',
      2: '0.5rem',
      3: '0.75rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      9: '2.25rem',
      10: '2.5rem',
      12: '3rem',
      14: '3.5rem',
      16: '4rem',
      20: '5rem',
      24: '6rem',
      28: '7rem',
      32: '8rem',
      36: '9rem',
      40: '10rem',
      44: '11rem',
      48: '12rem',
      52: '13rem',
      56: '14rem',
      60: '15rem',
      64: '16rem',
      72: '18rem',
      80: '20rem',
      96: '24rem',
      px: '1px',
    },
    borders: {
      none: 0,
      '1px': '1px solid',
      '2px': '2px solid',
      '4px': '4px solid',
      '8px': '8px solid',
    },
    transition: {
      property: {
        common:
          'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform',
        colors: 'background-color, border-color, color, fill, stroke',
        dimensions: 'width, height',
        position: 'left, right, top, bottom',
        background: 'background-color, background-image, background-position',
      },
      easing: {
        'ease-in': 'cubic-bezier(0.4, 0, 1, 1)',
        'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
        'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      duration: {
        'ultra-fast': '50ms',
        faster: '100ms',
        fast: '150ms',
        normal: '200ms',
        slow: '300ms',
        slower: '400ms',
        'ultra-slow': '500ms',
      },
    },
    components: {
      Accordion: {
        parts: ['container', 'button', 'panel'],
        baseStyle: {
          container: {
            borderTopWidth: '1px',
            borderColor: 'inherit',
            _last: {
              borderBottomWidth: '1px',
            },
          },
          button: {
            fontSize: '1rem',
            _focus: {
              boxShadow: 'outline',
            },
            _hover: {
              bg: 'blackAlpha.50',
            },
            _disabled: {
              opacity: 0.4,
              cursor: 'not-allowed',
            },
            px: 4,
            py: 2,
          },
          panel: {
            pt: 2,
            px: 4,
            pb: 5,
          },
        },
      },
      Alert: {
        parts: ['container', 'title', 'description', 'icon'],
        baseStyle: {
          container: {
            px: 4,
            py: 3,
          },
          title: {
            fontWeight: 'bold',
            lineHeight: 6,
            mr: 2,
          },
          description: {
            lineHeight: 6,
          },
          icon: {
            flexShrink: 0,
            mr: 3,
            w: 5,
            h: 6,
          },
        },
        variants: {},
        defaultProps: {
          variant: 'subtle',
        },
      },
      Avatar: {
        parts: ['container', 'excessLabel', 'badge', 'label'],
        sizes: {
          '2xs': {
            container: {
              width: '4',
              height: '4',
              fontSize: 'calc(1rem / 2.5)',
            },
            excessLabel: {
              width: '4',
              height: '4',
            },
            label: {
              fontSize: 'calc(1rem / 2.5)',
              lineHeight: '1rem',
            },
          },
          xs: {
            container: {
              width: '6',
              height: '6',
              fontSize: 'calc(1.5rem / 2.5)',
            },
            excessLabel: {
              width: '6',
              height: '6',
            },
            label: {
              fontSize: 'calc(1.5rem / 2.5)',
              lineHeight: '1.5rem',
            },
          },
          sm: {
            container: {
              width: '8',
              height: '8',
              fontSize: 'calc(2rem / 2.5)',
            },
            excessLabel: {
              width: '8',
              height: '8',
            },
            label: {
              fontSize: 'calc(2rem / 2.5)',
              lineHeight: '2rem',
            },
          },
          md: {
            container: {
              width: '12',
              height: '12',
              fontSize: 'calc(3rem / 2.5)',
            },
            excessLabel: {
              width: '12',
              height: '12',
            },
            label: {
              fontSize: 'calc(3rem / 2.5)',
              lineHeight: '3rem',
            },
          },
          lg: {
            container: {
              width: '16',
              height: '16',
              fontSize: 'calc(4rem / 2.5)',
            },
            excessLabel: {
              width: '16',
              height: '16',
            },
            label: {
              fontSize: 'calc(4rem / 2.5)',
              lineHeight: '4rem',
            },
          },
          xl: {
            container: {
              width: '24',
              height: '24',
              fontSize: 'calc(6rem / 2.5)',
            },
            excessLabel: {
              width: '24',
              height: '24',
            },
            label: {
              fontSize: 'calc(6rem / 2.5)',
              lineHeight: '6rem',
            },
          },
          '2xl': {
            container: {
              width: '32',
              height: '32',
              fontSize: 'calc(8rem / 2.5)',
            },
            excessLabel: {
              width: '32',
              height: '32',
            },
            label: {
              fontSize: 'calc(8rem / 2.5)',
              lineHeight: '8rem',
            },
          },
          full: {
            container: {
              width: '100%',
              height: '100%',
              fontSize: 'calc(100% / 2.5)',
            },
            excessLabel: {
              width: '100%',
              height: '100%',
            },
            label: {
              fontSize: 'calc(100% / 2.5)',
            },
          },
        },
        defaultProps: {
          size: 'md',
        },
      },
      Badge: {
        baseStyle: {
          px: 1,
          textTransform: 'uppercase',
          fontSize: 'xs',
          borderRadius: 'sm',
          fontWeight: 'bold',
        },
        variants: {},
        defaultProps: {
          variant: 'subtle',
          colorScheme: 'gray',
        },
      },
      Breadcrumb: {
        parts: ['link', 'separator'],
        baseStyle: {
          link: {
            transition: 'all 0.15s ease-out',
            cursor: 'pointer',
            textDecoration: 'none',
            outline: 'none',
            color: 'inherit',
            _hover: {
              textDecoration: 'underline',
            },
            _focus: {
              boxShadow: 'outline',
            },
          },
        },
      },
      Button: {
        baseStyle: {
          lineHeight: '1.2',
          borderRadius: 'md',
          fontWeight: 'semibold',
          _focus: {
            boxShadow: 'outline',
          },
          _disabled: {
            opacity: 0.4,
            cursor: 'not-allowed',
            boxShadow: 'none',
          },
          _hover: {
            _disabled: {
              bg: 'initial',
            },
          },
        },
        variants: {
          unstyled: {
            bg: 'none',
            color: 'inherit',
            display: 'inline',
            lineHeight: 'inherit',
            m: 0,
            p: 0,
          },
        },
        sizes: {
          lg: {
            h: 12,
            minW: 12,
            fontSize: 'lg',
            px: 6,
          },
          md: {
            h: 10,
            minW: 10,
            fontSize: 'md',
            px: 4,
          },
          sm: {
            h: 8,
            minW: 8,
            fontSize: 'sm',
            px: 3,
          },
          xs: {
            h: 6,
            minW: 6,
            fontSize: 'xs',
            px: 2,
          },
        },
        defaultProps: {
          variant: 'solid',
          size: 'md',
          colorScheme: 'gray',
        },
      },
      Checkbox: {
        parts: ['container', 'control', 'label', 'icon'],
        sizes: {
          sm: {
            control: {
              h: 3,
              w: 3,
            },
            label: {
              fontSize: 'sm',
            },
            icon: {
              fontSize: '0.45rem',
            },
          },
          md: {
            control: {
              w: 4,
              h: 4,
            },
            label: {
              fontSize: 'md',
            },
            icon: {
              fontSize: '0.625rem',
            },
          },
          lg: {
            control: {
              w: 5,
              h: 5,
            },
            label: {
              fontSize: 'lg',
            },
            icon: {
              fontSize: '0.625rem',
            },
          },
        },
        defaultProps: {
          size: 'md',
          colorScheme: 'blue',
        },
      },
      CloseButton: {
        sizes: {
          lg: {
            w: '40px',
            h: '40px',
            fontSize: '16px',
          },
          md: {
            w: '32px',
            h: '32px',
            fontSize: '12px',
          },
          sm: {
            w: '24px',
            h: '24px',
            fontSize: '10px',
          },
        },
        defaultProps: {
          size: 'md',
        },
      },
      Code: {
        baseStyle: {
          fontFamily: 'mono',
          fontSize: 'sm',
          px: '0.2em',
          borderRadius: 'sm',
        },
        variants: {},
        defaultProps: {
          variant: 'subtle',
          colorScheme: 'gray',
        },
      },
      Container: {
        baseStyle: {
          w: '100%',
          mx: 'auto',
          maxW: '60ch',
          px: '1rem',
        },
      },
      Divider: {
        baseStyle: {
          opacity: 0.6,
          borderColor: 'inherit',
        },
        variants:
          solid: {
            borderStyle: 'solid',
          },
          dashed: {
            borderStyle: 'dashed',
          },
        },
        defaultProps: {
          variant: 'solid',
        },
      },
      Drawer: {
        parts: [
          'overlay',
          'dialogContainer',
          'dialog',
          'header',
          'closeButton',
          'body',
          'footer',
        ],
        sizes: {
          xs: {
            dialog: {
              maxW: 'xs',
            },
          },
          sm: {
            dialog: {
              maxW: 'md',
            },
          },
          md: {
            dialog: {
              maxW: 'lg',
            },
          },
          lg: {
            dialog: {
              maxW: '2xl',
            },
          },
          xl: {
            dialog: {
              maxW: '4xl',
            },
          },
          full: {
            dialog: {
              maxW: '100vw',
              h: '100vh',
            },
          },
        },
        defaultProps: {
          size: 'xs',
        },
      },
      Editable: {
        parts: ['preview', 'input'],
        baseStyle: {
          preview: {
            borderRadius: 'md',
            py: '3px',
            transition: 'all 0.2s',
          },
          input: {
            borderRadius: 'md',
            py: '3px',
            transition: 'all 0.2s',
            width: 'full',
            _focus: {
              boxShadow: 'outline',
            },
            _placeholder: {
              opacity: 0.6,
            },
          },
        },
      },
      Form: {
        parts: ['requiredIndicator', 'helperText'],
      },
      FormLabel: {
        baseStyle: {
          fontSize: 'md',
          marginEnd: 3,
          mb: 2,
          fontWeight: 'medium',
          transition: 'all 0.2s',
          opacity: 1,
          _disabled: {
            opacity: 0.4,
          },
        },
      },
      Heading: {
        baseStyle: {
          fontFamily: 'heading',
          fontWeight: 'bold',
        },
        sizes: {
          '4xl': {
            fontSize: ['6xl', null, '7xl'],
            lineHeight: 1,
          },
          '3xl': {
            fontSize: ['5xl', null, '6xl'],
            lineHeight: 1,
          },
          '2xl': {
            fontSize: ['4xl', null, '5xl'],
            lineHeight: [1.2, null, 1],
          },
          xl: {
            fontSize: ['3xl', null, '4xl'],
            lineHeight: [1.33, null, 1.2],
          },
          lg: {
            fontSize: ['2xl', null, '3xl'],
            lineHeight: [1.33, null, 1.2],
          },
          md: {
            fontSize: 'xl',
            lineHeight: 1.2,
          },
          sm: {
            fontSize: 'md',
            lineHeight: 1.2,
          },
          xs: {
            fontSize: 'sm',
            lineHeight: 1.2,
          },
        },
        defaultProps: {
          size: 'xl',
        },
      },
      Input: {
        parts: ['field', 'addon'],
        baseStyle: {
          field: {
            width: '100%',
            outline: 0,
            position: 'relative',
            appearance: 'none',
            transition: 'all 0.2s',
          },
        },
        sizes: {
          lg: {
            field: {
              fontSize: 'lg',
              px: 4,
              h: 12,
              borderRadius: 'md',
            },
            addon: {
              fontSize: 'lg',
              px: 4,
              h: 12,
              borderRadius: 'md',
            },
          },
          md: {
            field: {
              fontSize: 'md',
              px: 4,
              h: 10,
              borderRadius: 'md',
            },
            addon: {
              fontSize: 'md',
              px: 4,
              h: 10,
              borderRadius: 'md',
            },
          },
          sm: {
            field: {
              fontSize: 'sm',
              px: 3,
              h: 8,
              borderRadius: 'sm',
            },
            addon: {
              fontSize: 'sm',
              px: 3,
              h: 8,
              borderRadius: 'sm',
            },
          },
          xs: {
            field: {
              fontSize: 'xs',
              px: 2,
              h: 6,
              borderRadius: 'sm',
            },
            addon: {
              fontSize: 'xs',
              px: 2,
              h: 6,
              borderRadius: 'sm',
            },
          },
        },
        variants: {
          unstyled: {
            field: {
              bg: 'transparent',
              pl: 0,
              pr: 0,
              height: 'auto',
            },
            addon: {
              bg: 'transparent',
              pl: 0,
              pr: 0,
              height: 'auto',
            },
          },
        },
        defaultProps: {
          size: 'md',
          variant: 'outline',
        },
      },
      Kbd: {},
      Link: {
        baseStyle: {
          transition: 'all 0.15s ease-out',
          cursor: 'pointer',
          textDecoration: 'none',
          outline: 'none',
          color: 'inherit',
          _hover: {
            textDecoration: 'underline',
          },
          _focus: {
            boxShadow: 'outline',
          },
        },
      },
      List: {
        parts: ['container', 'item', 'icon'],
        baseStyle: {
          container: {},
          item: {},
          icon: {
            marginEnd: '0.5rem',
            display: 'inline',
            verticalAlign: 'text-bottom',
          },
        },
      },
      Menu: {
        parts: ['item', 'command', 'list', 'button', 'groupTitle', 'divider'],
      },
      Modal: {
        parts: [
          'overlay',
          'dialogContainer',
          'dialog',
          'header',
          'closeButton',
          'body',
          'footer',
        ],
        sizes: {
          xs: {
            dialog: {
              maxW: 'xs',
            },
          },
          sm: {
            dialog: {
              maxW: 'sm',
            },
          },
          md: {
            dialog: {
              maxW: 'md',
            },
          },
          lg: {
            dialog: {
              maxW: 'lg',
            },
          },
          xl: {
            dialog: {
              maxW: 'xl',
            },
          },
          '2xl': {
            dialog: {
              maxW: '2xl',
            },
          },
          '3xl': {
            dialog: {
              maxW: '3xl',
            },
          },
          '4xl': {
            dialog: {
              maxW: '4xl',
            },
          },
          '5xl': {
            dialog: {
              maxW: '5xl',
            },
          },
          '6xl': {
            dialog: {
              maxW: '6xl',
            },
          },
          full: {
            dialog: {
              maxW: '100vw',
              h: '100vh',
            },
          },
        },
        defaultProps: {
          size: 'md',
        },
      },
      NumberInput: {
        parts: ['field', 'stepper', 'stepperGroup'],
        sizes: {
          xs: {
            field: {
              fontSize: 'xs',
              px: 2,
              h: 6,
              borderRadius: 'sm',
              verticalAlign: 'top',
            },
            stepper: {
              fontSize: 'calc(0.75rem * 0.75)',
              _first: {
                borderTopRightRadius: 'sm',
              },
              _last: {
                borderBottomRightRadius: 'sm',
                mt: '-1px',
                borderTopWidth: 1,
              },
            },
          },
          sm: {
            field: {
              fontSize: 'sm',
              px: 3,
              h: 8,
              borderRadius: 'sm',
              verticalAlign: 'top',
            },
            stepper: {
              fontSize: 'calc(0.875rem * 0.75)',
              _first: {
                borderTopRightRadius: 'sm',
              },
              _last: {
                borderBottomRightRadius: 'sm',
                mt: '-1px',
                borderTopWidth: 1,
              },
            },
          },
          md: {
            field: {
              fontSize: 'md',
              px: 4,
              h: 10,
              borderRadius: 'md',
              verticalAlign: 'top',
            },
            stepper: {
              fontSize: 'calc(1rem * 0.75)',
              _first: {
                borderTopRightRadius: 'md',
              },
              _last: {
                borderBottomRightRadius: 'md',
                mt: '-1px',
                borderTopWidth: 1,
              },
            },
          },
          lg: {
            field: {
              fontSize: 'lg',
              px: 4,
              h: 12,
              borderRadius: 'md',
              verticalAlign: 'top',
            },
            stepper: {
              fontSize: 'calc(1.125rem * 0.75)',
              _first: {
                borderTopRightRadius: 'md',
              },
              _last: {
                borderBottomRightRadius: 'md',
                mt: '-1px',
                borderTopWidth: 1,
              },
            },
          },
        },
        variants: {
          unstyled: {
            field: {
              bg: 'transparent',
              pl: 0,
              pr: 0,
              height: 'auto',
            },
            addon: {
              bg: 'transparent',
              pl: 0,
              pr: 0,
              height: 'auto',
            },
          },
        },
        defaultProps: {
          size: 'md',
          variant: 'outline',
        },
      },
      PinInput: {
        baseStyle: {
          width: '100%',
          outline: 0,
          position: 'relative',
          appearance: 'none',
          transition: 'all 0.2s',
          textAlign: 'center',
        },
        sizes: {
          lg: {
            fontSize: 'lg',
            w: 12,
            h: 12,
            borderRadius: 'md',
          },
          md: {
            fontSize: 'md',
            w: 10,
            h: 10,
            borderRadius: 'md',
          },
          sm: {
            fontSize: 'sm',
            w: 8,
            h: 8,
            borderRadius: 'sm',
          },
          xs: {
            fontSize: 'xs',
            w: 6,
            h: 6,
            borderRadius: 'sm',
          },
        },
        variants: {
          unstyled: {
            bg: 'transparent',
            pl: 0,
            pr: 0,
            height: 'auto',
          },
        },
        defaultProps: {
          size: 'md',
          variant: 'outline',
        },
      },
      Popover: {
        parts: ['popper', 'content', 'header', 'body', 'footer', 'arrow'],
      },
      Progress: {
        parts: ['track', 'filledTrack', 'panel'],
        sizes: {
          xs: {
            track: {
              h: '0.25rem',
            },
          },
          sm: {
            track: {
              h: '0.5rem',
            },
          },
          md: {
            track: {
              h: '0.75rem',
            },
          },
          lg: {
            track: {
              h: '1rem',
            },
          },
        },
        defaultProps: {
          size: 'md',
          colorScheme: 'blue',
        },
      },
      Radio: {
        parts: ['container', 'control', 'label'],
        sizes: {
          md: {
            control: {
              w: 4,
              h: 4,
            },
            label: {
              fontSize: 'md',
            },
          },
          lg: {
            control: {
              w: 5,
              h: 5,
            },
            label: {
              fontSize: 'lg',
            },
          },
          sm: {
            control: {
              width: 3,
              height: 3,
            },
            label: {
              fontSize: 'sm',
            },
          },
        },
        defaultProps: {
          size: 'md',
          colorScheme: 'blue',
        },
      },
      Select: {
        parts: ['field', 'icon'],
        sizes: {
          lg: {
            field: {
              fontSize: 'lg',
              px: 4,
              h: 12,
              borderRadius: 'md',
            },
            addon: {
              fontSize: 'lg',
              px: 4,
              h: 12,
              borderRadius: 'md',
            },
          },
          md: {
            field: {
              fontSize: 'md',
              px: 4,
              h: 10,
              borderRadius: 'md',
            },
            addon: {
              fontSize: 'md',
              px: 4,
              h: 10,
              borderRadius: 'md',
            },
          },
          sm: {
            field: {
              fontSize: 'sm',
              px: 3,
              h: 8,
              borderRadius: 'sm',
            },
            addon: {
              fontSize: 'sm',
              px: 3,
              h: 8,
              borderRadius: 'sm',
            },
          },
          xs: {
            field: {
              fontSize: 'xs',
              px: 2,
              h: 6,
              borderRadius: 'sm',
            },
            addon: {
              fontSize: 'xs',
              px: 2,
              h: 6,
              borderRadius: 'sm',
            },
            icon: {
              right: '0.25rem',
            },
          },
        },
        variants: {
          unstyled: {
            field: {
              bg: 'transparent',
              pl: 0,
              pr: 0,
              height: 'auto',
            },
            addon: {
              bg: 'transparent',
              pl: 0,
              pr: 0,
              height: 'auto',
            },
          },
        },
        defaultProps: {
          size: 'md',
          variant: 'outline',
        },
      },
      Skeleton: {},
      SkipLink: {},
      Slider: {
        parts: ['container', 'thumb', 'track', 'filledTrack'],
        sizes: {},
        defaultProps: {
          size: 'md',
          colorScheme: 'blue',
        },
      },
      Spinner: {
        sizes: {
          xs: {
            w: '0.75rem',
            h: '0.75rem',
          },
          sm: {
            w: '1rem',
            h: '1rem',
          },
          md: {
            w: '1.5rem',
            h: '1.5rem',
          },
          lg: {
            w: '2rem',
            h: '2rem',
          },
          xl: {
            w: '3rem',
            h: '3rem',
          },
        },
        defaultProps: {
          size: 'md',
        },
      },
      Stat: {
        parts: ['label', 'number', 'icon', 'helpText'],
        baseStyle: {
          label: {
            fontWeight: 'medium',
          },
          helpText: {
            opacity: 0.8,
            marginBottom: 2,
          },
          number: {
            verticalAlign: 'baseline',
            fontWeight: 'semibold',
          },
          icon: {
            mr: 1,
            w: '14px',
            h: '14px',
            verticalAlign: 'middle',
          },
        },
        sizes: {
          md: {
            label: {
              fontSize: 'sm',
            },
            helpText: {
              fontSize: 'sm',
            },
            number: {
              fontSize: '2xl',
            },
          },
        },
        defaultProps: {
          size: 'md',
        },
      },
      Switch: {
        parts: ['track', 'thumb'],
        sizes: {
          sm: {
            track: {
              w: '1.375rem',
              h: '0.75rem',
            },
            thumb: {
              w: '0.75rem',
              h: '0.75rem',
              _checked: {
                transform: 'translateX(0.625rem)',
              },
            },
          },
          md: {
            track: {
              w: '1.875rem',
              h: '1rem',
            },
            thumb: {
              w: '1rem',
              h: '1rem',
              _checked: {
                transform: 'translateX(0.875rem)',
              },
            },
          },
          lg: {
            track: {
              w: '2.875rem',
              h: '1.5rem',
            },
            thumb: {
              w: '1.5rem',
              h: '1.5rem',
              _checked: {
                transform: 'translateX(1.375rem)',
              },
            },
          },
        },
        defaultProps: {
          size: 'md',
          colorScheme: 'blue',
        },
      },
      Table: {
        parts: ['table', 'thead', 'tbody', 'tr', 'th', 'td', 'caption'],
        baseStyle: {
          table: {
            fontVariantNumeric: 'lining-nums tabular-nums',
            borderCollapse: 'collapse',
            width: 'full',
          },
          th: {
            fontFamily: 'heading',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            letterSpacing: 'wider',
            textAlign: 'left',
          },
          td: {
            textAlign: 'left',
          },
          caption: {
            mt: 4,
            fontFamily: 'heading',
            textAlign: 'center',
            fontWeight: 'medium',
          },
        },
        variants: {
          unstyled: {},
        },
        sizes: {
          sm: {
            th: {
              px: '4',
              py: '1',
              lineHeight: '4',
              fontSize: 'xs',
            },
            td: {
              px: '4',
              py: '2',
              fontSize: 'sm',
              lineHeight: '4',
            },
            caption: {
              px: '4',
              py: '2',
              fontSize: 'xs',
            },
          },
          md: {
            th: {
              px: '6',
              py: '3',
              lineHeight: '4',
              fontSize: 'xs',
            },
            td: {
              px: '6',
              py: '4',
              lineHeight: '5',
            },
            caption: {
              px: '6',
              py: '2',
              fontSize: 'sm',
            },
          },
          lg: {
            th: {
              px: '8',
              py: '4',
              lineHeight: '5',
              fontSize: 'sm',
            },
            td: {
              px: '8',
              py: '5',
              lineHeight: '6',
            },
            caption: {
              px: '6',
              py: '2',
              fontSize: 'md',
            },
          },
        },
        defaultProps: {
          variant: 'simple',
          size: 'md',
          colorScheme: 'gray',
        },
      },
      Tabs: {
        parts: ['root', 'tablist', 'tab', 'tabpanel', 'indicator'],
        sizes: {
          sm: {
            tab: {
              py: '0.25rem',
              px: '1rem',
              fontSize: '0.85rem',
            },
          },
          md: {
            tab: {
              fontSize: '1rem',
              py: '0.5rem',
              px: '1rem',
            },
          },
          lg: {
            tab: {
              fontSize: '1.15rem',
              py: '0.75rem',
              px: '1rem',
            },
          },
        },
        variants: {
          unstyled: {},
        },
        defaultProps: {
          size: 'md',
          variant: 'line',
          colorScheme: 'blue',
        },
      },
      Tag: {
        parts: ['container', 'label', 'closeButton'],
        variants: {},
        baseStyle: {
          container: {
            fontWeight: 'medium',
            lineHeight: 1.2,
            outline: 0,
            _focus: {
              boxShadow: 'outline',
            },
          },
          label: {
            lineHeight: 1.2,
          },
          closeButton: {
            fontSize: '18px',
            w: '1.25rem',
            h: '1.25rem',
            borderRadius: 'full',
            ms: '0.375rem',
            me: '-1',
            opacity: 0.5,
            _disabled: {
              opacity: 0.4,
            },
            _focus: {
              boxShadow: 'outline',
              bg: 'rgba(0, 0, 0, 0.14)',
            },
            _hover: {
              opacity: 0.8,
            },
            _active: {
              opacity: 1,
            },
          },
        },
        sizes: {
          sm: {
            container: {
              minH: '1.25rem',
              minW: '1.25rem',
              fontSize: 'xs',
              px: 2,
              borderRadius: 'md',
            },
            closeButton: {
              me: '-2px',
              ms: '0.35rem',
            },
          },
          md: {
            container: {
              minH: '1.5rem',
              minW: '1.5rem',
              fontSize: 'sm',
              borderRadius: 'md',
              px: 2,
            },
          },
          lg: {
            container: {
              minH: 8,
              minW: 8,
              fontSize: 'md',
              borderRadius: 'md',
              px: 3,
            },
          },
        },
        defaultProps: {
          size: 'md',
          variant: 'subtle',
          colorScheme: 'gray',
        },
      },
      Textarea: {
        baseStyle: {
          width: '100%',
          outline: 0,
          position: 'relative',
          appearance: 'none',
          transition: 'all 0.2s',
          paddingY: '8px',
          minHeight: '80px',
          lineHeight: 'short',
        },
        sizes: {
          xs: {
            fontSize: 'xs',
            px: 2,
            h: 6,
            borderRadius: 'sm',
          },
          sm: {
            fontSize: 'sm',
            px: 3,
            h: 8,
            borderRadius: 'sm',
          },
          md: {
            fontSize: 'md',
            px: 4,
            h: 10,
            borderRadius: 'md',
          },
          lg: {
            fontSize: 'lg',
            px: 4,
            h: 12,
            borderRadius: 'md',
          },
        },
        variants: {
          unstyled: {
            bg: 'transparent',
            pl: 0,
            pr: 0,
            height: 'auto',
          },
        },
        defaultProps: {
          size: 'md',
          variant: 'outline',
        },
      },
      Tooltip: {},
      FormError: {
        parts: ['text', 'icon'],
      },
    },
    styles: {},
    config: {
      useSystemColorMode: false,
      initialColorMode: 'light',
    },
  }
