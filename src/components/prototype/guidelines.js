import Grid from '../grid'
import HighlightedBox from '../highlightedBox'
import { Table, Tbody, Tr, Td, ListItem, UnorderedList } from '@chakra-ui/react'
import Section from '../section'

export default function () {
  return (
    <Section>
      <Grid spacingX={12} columns={[1, 1, 1, 2, 2]}>
        <Grid.Col minWidth={{ base: '100%', md: '600px' }}>
          <h3>Lending Guidelines</h3>
          <Table>
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
        <Grid.Col marginTop={{ base: 3, md: 0 }}>
          <HighlightedBox mb={0}>
            <h3>Property Types</h3>
            <UnorderedList>
              <ListItem>
                Single-family & Multi-family Investment Properties
              </ListItem>
              <ListItem>Condominiums</ListItem>
              <ListItem>Retail Centers</ListItem>
              <ListItem>Office Buildings</ListItem>
              <ListItem>Industrial &amp; Warehouse</ListItem>
              <ListItem>Hotels &amp; Motels</ListItem>
              <ListItem>Healthcare &amp; Assisted Living Facilities</ListItem>
              <ListItem>Special Purpose &amp; Mixed Use</ListItem>
              <ListItem>Parking Garages &amp; Lots</ListItem>
            </UnorderedList>
          </HighlightedBox>
        </Grid.Col>
      </Grid>
    </Section>
  )
}
