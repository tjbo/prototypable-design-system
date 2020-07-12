import Grid from '../grid'
import Title from '../title'
import Section from '../section'
import Icon from '../icon'
import Card from '../card'
import Cards from '../cards'
import Line from '../line'

import Text from '../text'

export default {
  title: 'Prototype',
}

export function Default() {
  return (
    <Section inner_width="small">
      <Cards>
        <Card alignItems="center" justifyContent="center" width="18%">
          <Card.Content alignItems="center" justifyContent="center">
            {/* <Icon src="/icons/234171-market-and-economics/svg/money.svg" /> */}
            <Title as="h5" spaceAfter="none" spaceBefore="small">
              Buy
            </Title>
          </Card.Content>
        </Card>
        <Card alignItems="center" justifyContent="center" width="18%">
          {/* <Icon src="/icons/234171-market-and-economics/svg/money.svg" /> */}
          <Title as="h5" spaceAfter="none" spaceBefore="small">
            Rehab
          </Title>
        </Card>
        <Card alignItems="center" justifyContent="center" width="18%">
          {/* <Icon src="/icons/234171-market-and-economics/svg/money.svg" /> */}
          <Title as="h5" spaceAfter="none" spaceBefore="small">
            Rent
          </Title>
        </Card>
        <Card alignItems="center" justifyContent="center" width="18%">
          {/* <Icon src="/icons/234171-market-and-economics/svg/money.svg" /> */}
          <Title as="h5" spaceAfter="none" spaceBefore="small">
            Refinance
          </Title>
        </Card>
        <Card alignItems="center" justifyContent="center" width="18%">
          {/* <Icon src="/icons/234171-market-and-economics/svg/money.svg" /> */}
          <Title as="h5" spaceAfter="none" spaceBefore="small">
            Repeat
          </Title>
        </Card>
      </Cards>
    </Section>
  )
}

export function ContactForm() {
  return (
    <Section background="light">
      <Grid direction="row" alignItems="center" collapse="tablet">
        <Grid.Col width="50%" horizontalPadding=".5">
          <Grid direction="row" collapse="never">
            <Grid.Col width="25%">
              <Icon name="money" />
            </Grid.Col>
            <Grid.Col width="75%" alignSelf="center">
              <Text color="dark4" as="h5">
                Get funded in 5 to 7 days
              </Text>
            </Grid.Col>
          </Grid>

          <Grid direction="row" collapse="never">
            <Grid.Col width="25%">
              <Icon name="percentage" />
            </Grid.Col>
            <Grid.Col width="75%" alignSelf="center">
              <Text as="h5" color="dark4">
                LTV up to 75%
              </Text>
            </Grid.Col>
          </Grid>

          <Grid direction="row" collapse="never">
            <Grid.Col width="25%">
              <Icon name="mortgage" />
            </Grid.Col>
            <Grid.Col width="75%" alignSelf="center">
              <Text as="h5" color="dark4">
                200k to $5 million
              </Text>
            </Grid.Col>
          </Grid>

          <Grid direction="row" collapse="never">
            <Grid.Col width="25%">
              <Icon name="handshake" />
            </Grid.Col>
            <Grid.Col width="75%" alignSelf="center">
              <Text as="h5" color="dark4">
                Nationwide private lender
                <br /> (not a broker, avoid the extra fees)
              </Text>
            </Grid.Col>
          </Grid>

          <Grid direction="row" collapse="never">
            <Grid.Col width="25%">
              <Icon name="mortgage2" />
            </Grid.Col>
            <Grid.Col width="75%" alignSelf="center">
              <Text as="h5" color="dark4">
                Funding loans such as purchase, refinance, rehab, probate, 1031
                exchanges, cash-out
              </Text>
            </Grid.Col>
          </Grid>

          <Grid direction="row" collapse="never">
            <Grid.Col width="25%">
              <Icon name="handshake" />
            </Grid.Col>
            <Grid.Col width="75%" alignSelf="center">
              <Text as="h5" color="dark4">
                All types of investment properties considered, residential,
                commercial and industrial
              </Text>
            </Grid.Col>
          </Grid>
        </Grid.Col>
        <Grid.Col width="50%" horizontalPadding=".5">
          <img src="https://www.crescentlenders.com/images/logo-white-953x349-transparent.png" />
          <p></p>
          <Title color="dark4" as="h3" spaceAfter="small">
            Crescent Lenders
          </Title>
          <Text as="h5" color="dark4" spaceAfter="none">
            999 Overland Ave, Suite 116
          </Text>
          <Text as="h5" color="dark4" spaceAfter="none">
            Los Angeles, California
          </Text>
          <p></p>
          <Line />
          <p></p>
          <b>Email</b>
          <Text as="h5" color="dark4">
            <a href="mailto:info@crescentlenders.com">
              info@crescentlenders.com
            </a>
          </Text>
          <p></p>
          <b>Phone</b>
          <Text as="h5" color="dark4">
            <a href="href=tel:2134743131">213-474-3131</a>
          </Text>
        </Grid.Col>
      </Grid>
    </Section>
  )
}
