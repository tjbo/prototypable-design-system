// import Icon from '../icon'
import theme from '../../theme'
import Grid from '../grid'
import Icon from '../icon'
import Article from '../article'
import HighlightedBox from '../highlightedBox'
import {
  Table,
  Tbody,
  Tr,
  Td,
  List,
  ListItem,
  UnorderedList,
} from '@chakra-ui/react'

export default {
  title: 'Thing',
  component: Grid,
}
export const Default = () => {
  return (
    <Grid columns={[1, 2]} spacingX={12} templateColumns="3fr 2fr">
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
                Purchase, Refinance, Cash-Out,{' '}
                <a href="/hard-money-loans/fix-and-flip/">Fix and Flip</a>,{' '}
                <a href="/hard-money-loans/probate/">Probate</a>,{' '}
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
