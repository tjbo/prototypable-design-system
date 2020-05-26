import Card from '../card'
import Cards from '../cards'
import Icon from '../icon'
import Title from '../title'
import Section from '../section'

export default {
  title: 'Table Of Contents',
}

export function withIcon() {
  return (
    <Section inner_width="small">
      <Cards>
        <Card href="#buy" maxWidth="100px">
          <Card.Content alignItems="center" justifyContent="center">
            <Icon
              src="/icons/234171-market-and-economics/svg/money.svg"
              alt="Buy with cash"
            />
            <Title as="h5" spaceAfter="none" spaceBefore="small">
              Buy
            </Title>
          </Card.Content>
        </Card>
        <Card href="#rehab" maxWidth="100px">
          <Card.Content alignItems="center" justifyContent="center">
            <Icon
              src="/icons/504989-real-estate/svg/016-measuring-tape.svg"
              alt="Rehab with construction"
            />
            <Title as="h5" spaceAfter="none" spaceBefore="small">
              Rehab
            </Title>
          </Card.Content>
        </Card>
        <Card href="#rent" maxWidth="100px">
          <Card.Content alignItems="center" justifyContent="center">
            <Icon
              src="/icons/504989-real-estate/svg/003-chat-1.svg"
              alt="Rent with communication"
            />
            <Title as="h5" spaceAfter="none" spaceBefore="small">
              Rent
            </Title>
          </Card.Content>
        </Card>
        <Card href="#refinance" maxWidth="100px">
          <Card.Content alignItems="center" justifyContent="center">
            <Icon
              src="/icons/504989-real-estate/svg/019-mortgage-4.svg"
              alt="Refinance with a new mortgage"
            />
            <Title as="h5" spaceAfter="none" spaceBefore="small">
              Refinance
            </Title>
          </Card.Content>
        </Card>
        <Card href="#repeat" maxWidth="100px">
          <Card.Content alignItems="center" justifyContent="center">
            <Icon
              src="/icons/504989-real-estate/svg/024-house-10.svg"
              alt="Repeat the BRRRR process"
            />
            <Title as="h5" spaceAfter="none" spaceBefore="small">
              Repeat
            </Title>
          </Card.Content>
        </Card>
        <Card href="#repeat" maxWidth="100px">
          <Card.Content alignItems="center" justifyContent="center">
            <Icon
              src="/icons/504989-real-estate/svg/024-house-10.svg"
              alt="Repeat the BRRRR process"
            />
            <Title as="h5" spaceAfter="none" spaceBefore="small">
              Pros
            </Title>
          </Card.Content>
        </Card>
      </Cards>
      <Title selector="h2" styling="h3" id="buy" spaceBefore="medium">
        Buy
      </Title>{' '}
      <p>
        Identify undervalued and distressed properties in a specific area with a
        strong rental market. Ideally these properties will need some fixing up,
        giving you excellent potential to add value to the property.
      </p>
      <p>
        After selecting one property that fits your criteria, you will be ready
        to apply for a bridge loan. Depending on the lender and the strength of
        the real estate market you will need somewhere between 20% and 30% of
        the purchase price as a down payment and can find a hard hard money
        lender to provide the remaining capital. This same hard money lender
        often times will also finance a 50% of the construction costs.
      </p>
      <p>
        Hard money lenders are commonly used with this strategy and you can find
        them online, but be sure to be on the lookout for these hard money
        scams.
      </p>
      <Title selector="h2" styling="h3" id="rehab" spaceBefore="medium">
        Buy
      </Title>{' '}
    </Section>
  )
}
