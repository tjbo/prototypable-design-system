// import Icon from '../icon'
import theme from '../../theme'
import Grid from '../grid'
import Icon from '../icon'
import Article from '../article'
import HighlightedBox from '../highlightedBox'
import {
  Box,
  Flex,
  Table,
  Tbody,
  Tr,
  Td,
  List,
  ListItem,
  UnorderedList,
  Text,
} from '@chakra-ui/react'
import Section from '../section'

export default {
  title: 'Thing',
  component: Grid,
}

export const AsSeenOn = () => {
  return (
    <Section>
      <Grid spacingX={9}>
        <Grid.Col>
          <p>
            Crescent Lenders is a Los Angeles Hard Money Lender, we can fund
            your real estate investment loan:
          </p>
          <UnorderedList>
            <ListItem>Between $200k and $5 million dollars</ListItem>
            <ListItem>Direct private lender (not a broker)</ListItem>
            <ListItem>Get funded in 5 to 7 days</ListItem>
            <ListItem>
              Purchase, Refinance, Fix and Flip, Cash-Out and 1031 Exchange
            </ListItem>
          </UnorderedList>
        </Grid.Col>
        <Grid.Col>
          <Grid>
            As Seen On:
            <Grid.Col>
              <Icon name="market-watch" boxSize={36} />
            </Grid.Col>
            <Grid.Col>
              <Icon name="yahoo-finance" boxSize={36} />
            </Grid.Col>
          </Grid>
        </Grid.Col>
      </Grid>
    </Section>
  )
}

export const Default = () => {
  return (
    <Grid columns="[1, 2]" spacingX={12} templateColumns="3fr 2fr">
      <Grid.Col>
        <h3>Lending Guidelines</h3>
        <Table variant="simple">
          <Tbody>
            <Tr>
              <Td>Interest Rates:</Td>
              <Td>Starting @ 7.99% (interest only)</Td>
            </Tr>
            <Tr>
              <Td>Closing Time:</Td>
              <Td>5 to 7 Days</Td>
            </Tr>
            <Tr>
              <Td>Location:</Td>
              <Td>Anywhere in California</Td>
            </Tr>
            <Tr>
              <Td>Loan To Value Ratio:</Td>
              <Td>Up to 75% LTV</Td>
            </Tr>
            <Tr>
              <Td>Loan Types:</Td>
              <Td>
                Purchase, Refinance, Cash-Out,
                <a href="/hard-money-loans/fix-and-flip/">Fix and Flip</a>,
                <a href="/hard-money-loans/probate/">Probate</a>,
                <a href="/hard-money-loans/1031-exchange-financing/">
                  1031 Exchange
                </a>
              </Td>
            </Tr>
            <Tr>
              <Td>Amounts:</Td>
              <Td>$200K – $5M</Td>
            </Tr>
            <Tr>
              <Td>Origination Fee:</Td>
              <Td>2 to 3 points, dependant on size and term</Td>
            </Tr>
            <Tr>
              <Td>Lien Positions:</Td>
              <Td>First Trust &amp; Second Trust Deeds</Td>
            </Tr>
            <Tr>
              <Td>Underwriting Fee:</Td>
              <Td>$1500</Td>
            </Tr>
            <Tr>
              <Td>Loan Term:</Td>
              <Td>6 to 60 months (extensions available)</Td>
            </Tr>
          </Tbody>
        </Table>
      </Grid.Col>
      <Grid.Col>
        <HighlightedBox>
          <h3>Property Types</h3>

          <UnorderedList>
            <ListItem>
              Single-family & Multi-family Investment Properties
            </ListItem>
            <ListItem>Condominiums</ListItem>
            <ListItem>Retail Centers</ListItem>
            <ListItem>Office Buildings</ListItem>
            <ListItem>Tndustrial &amp; Warehouse</ListItem>
            <ListItem>Hotels &amp; Motels</ListItem>
            <ListItem>
              Healthcare &amp; Assisted ListItemving ListItemcilities
            </ListItem>
            <ListItem>Special Purpose &amp; Mixed Use</ListItem>
            <ListItem>Parking Garages &amp; Lots</ListItem>
          </UnorderedList>
        </HighlightedBox>
      </Grid.Col>
    </Grid>
  )
}

export const ContactCard = () => {
  return (
    <Section inner_width="tiny">
      <Grid width="100%" columns={[1, 1, 2, 2, 2]}>
        <Grid.Col>
          <Grid columns={[1]} spacingY={[9, 6]}>
            <Grid.Col>
              <Grid templateColumns="2fr 8fr" spacingX={[1, 3]}>
                <Grid.Col width="25%">
                  <Icon name="money" boxSize={[14, 16, 24]} />
                </Grid.Col>
                <Grid.Col alignSelf="center" width="75%">
                  <Text as="h5" color="dark4">
                    Get funded in 5 to 7 days
                  </Text>
                </Grid.Col>
              </Grid>
            </Grid.Col>
            <Grid.Col>
              <Grid templateColumns="2fr 8fr" spacingX={[1, 3]}>
                <Grid.Col width="23%">
                  <Icon name="percentage" boxSize={[14, 16, 24]} />
                </Grid.Col>
                <Grid.Col width="77%" alignSelf="center">
                  <Text as="h5" color="dark4">
                    LTV up to 75%
                  </Text>
                </Grid.Col>
              </Grid>
            </Grid.Col>
            <Grid.Col>
              <Grid templateColumns="2fr 8fr" spacingX={3}>
                <Grid.Col width="23%">
                  <Icon name="mortgage" boxSize={[14, 16, 24]} />
                </Grid.Col>
                <Grid.Col width="77%" alignSelf="center">
                  <Text as="h5" color="dark4">
                    200k to $5 million
                  </Text>
                </Grid.Col>
              </Grid>
            </Grid.Col>
            <Grid.Col>
              <Grid templateColumns="2fr 8fr" spacingX={3}>
                <Grid.Col width="23%">
                  <Icon name="handshake" boxSize={[14, 16, 24]} />
                </Grid.Col>
                <Grid.Col width="77%" alignSelf="center">
                  <Text as="h5" color="dark4">
                    Nationwide private lender <br />
                    (not a broker, avoid the extra fees)
                  </Text>
                </Grid.Col>
              </Grid>
            </Grid.Col>
            <Grid.Col>
              <Grid templateColumns="2fr 8fr" spacingX={3}>
                <Grid.Col width="23%">
                  <Icon name="mortgage2" boxSize={[14, 16, 24]} />
                </Grid.Col>
                <Grid.Col width="77%" alignSelf="center">
                  <Text as="h5" color="dark4">
                    Funding loans such as purchase, refinance, rehab, probate,
                    1031 exchanges, cash-out
                  </Text>
                </Grid.Col>
              </Grid>
            </Grid.Col>
            <Grid.Col>
              <Grid templateColumns="2fr 8fr" spacingX={3}>
                <Grid.Col width="23%">
                  <Icon name="browser-home" boxSize={[14, 16, 24]} />
                </Grid.Col>
                <Grid.Col width="77%" alignSelf="center">
                  <Text as="h5" color="dark4">
                    All types of investment properties considered, residential,
                    commercial and industrial
                  </Text>
                </Grid.Col>
              </Grid>
            </Grid.Col>
          </Grid>
        </Grid.Col>
        <Grid.Col>
          <Grid columns={[1]} spacingY={6}>
            <Grid.Col>
              <hr />
              <Icon name="crescent-lenders" boxSize={[36, 64]} />
              <hr />
            </Grid.Col>
            <Grid.Col>
              <h3>Crescent Lenders</h3>
              <Text as="h5" color="dark4">
                999 Overland Ave, Suite 116
                <br />
                Los Angeles, California
              </Text>
            </Grid.Col>
            <Grid.Col>
              <b>Email</b>
              <Text as="h5" color="dark4">
                <a href="mailto:info@crescentlenders.com">
                  info@crescentlenders.com
                </a>
              </Text>
            </Grid.Col>
            <Grid.Col>
              <b>Phone</b>
              <Text as="h5" color="dark4">
                <a href="tel:2134743131">213-474-3131</a>
              </Text>
            </Grid.Col>
          </Grid>
        </Grid.Col>
      </Grid>
    </Section>
  )
}
