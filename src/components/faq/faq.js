import {
  Accordion,
  Box,
  AccordionIcon,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from '@chakra-ui/react'
import short from 'short-uuid'
import theme from '../theme'

class Faq extends React.Component {
  render() {
    const { items, title } = this.props

    return (
      <Accordion allowMultiple>
        {items.map((item) => {
          return (
            <AccordionItem key={short.generate()}>
              <AccordionButton>
                <Box flex="1" textAlign="left" p={3}>
                  <h4>{item.question}</h4>
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel p={6}>{item.answer}</AccordionPanel>
            </AccordionItem>
          )
        })}
      </Accordion>
    )
  }
}

export default Faq
