import Slider from 'react-input-slider'
import theme from '../../../theme'
import Input from '../input'
import { TitleUI, TitleContainerUI } from './slider.css'
import numberWithCommas from '../../../utils/numberWithCommas'

export default class InputSlider extends React.Component {
  static defaultProps = {
    axis: 'x',
    formatString: '',
    label: '',
    maxWidth: '4ch',
    max: 100,
    min: 0,
    step: 5,
    value: 0,
  }

  componentDidMount() {
    const { defaultValue, onChange, value } = this.props

    !value && onChange(defaultValue)
  }

  formatString() {
    const { formatString, value } = this.props
    if (formatString === 'currency') {
      return `$${numberWithCommas(value)}`
    } else if (formatString === 'percent') {
      return value + '%'
    } else {
      return value
    }
  }

  render() {
    const {
      axis,
      label,
      maxWidth,
      max,
      min,
      name,
      onChange,
      step,
      value,
    } = this.props
    return (
      <div>
        <TitleContainerUI>
          <TitleUI>{label}</TitleUI>
          <Input
            isSelectable={false}
            value={value && this.formatString(value)}
            readOnly
            maxWidth={maxWidth}
            size="big"
            textAlign="center"
            withContainer={false}
          />
        </TitleContainerUI>

        <Slider
          axis={axis}
          onChange={(value) => onChange(value.x)}
          name={name}
          xmin={min}
          xmax={max}
          xstep={step}
          x={value}
          styles={{
            track: {
              backgroundColor: theme.colors['dark-4'],
              width: '100%',
              height: 15,
            },

            active: {
              backgroundColor: theme.colors['success'],
            },
            thumb: {
              width: 32,
              height: 32,
            },
          }}
        />
      </div>
    )
  }
}
