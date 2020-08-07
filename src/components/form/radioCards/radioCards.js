import { BreakUI, ContainerUI } from './radioCards.css'
import RadioCard from '../radioCard'
import short from 'short-uuid'

export default class RadioCards extends React.Component {
  render() {
    const { cards, onChange, value } = this.props

    const children = cards.map((card, index) => {
      return (
        <RadioCard
          {...{ ...card }}
          key={short.generate()}
          onChange={onChange}
          selectedValue={value}
        />
      )
    })

    children.splice(2, 0, <BreakUI />)

    return <ContainerUI>{children}</ContainerUI>
  }
}
