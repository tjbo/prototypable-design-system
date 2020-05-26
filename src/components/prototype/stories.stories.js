import Grid from '../grid'
import Title from '../title'
import Section from '../section'
import Icon from '../icon'
import Card from '../card'
import Cards from '../cards'

export default {
  title: 'Prototype',
}

export function Default() {
  return (
    <Section inner_width="small">
      <Cards>
        <Card alignItems="center" justifyContent="center" width="18%">
          <Card.Content alignItems="center" justifyContent="center">
            <Icon src="/icons/234171-market-and-economics/svg/money.svg" />
            <Title as="h5" spaceAfter="none" spaceBefore="small">
              Buy
            </Title>
          </Card.Content>
        </Card>
        <Card alignItems="center" justifyContent="center" width="18%">
          <Icon src="/icons/234171-market-and-economics/svg/money.svg" />
          <Title as="h5" spaceAfter="none" spaceBefore="small">
            Rehab
          </Title>
        </Card>
        <Card alignItems="center" justifyContent="center" width="18%">
          <Icon src="/icons/234171-market-and-economics/svg/money.svg" />
          <Title as="h5" spaceAfter="none" spaceBefore="small">
            Rent
          </Title>
        </Card>
        <Card alignItems="center" justifyContent="center" width="18%">
          <Icon src="/icons/234171-market-and-economics/svg/money.svg" />
          <Title as="h5" spaceAfter="none" spaceBefore="small">
            Refinance
          </Title>
        </Card>
        <Card alignItems="center" justifyContent="center" width="18%">
          <Icon src="/icons/234171-market-and-economics/svg/money.svg" />
          <Title as="h5" spaceAfter="none" spaceBefore="small">
            Repeat
          </Title>
        </Card>
      </Cards>
    </Section>
  )
}
