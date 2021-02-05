import HighlightedBox from '../highlightedBox'
import {
  Box,
  SimpleGrid,
  Table,
  Tbody,
  Tr,
  Td,
  ListItem,
  UnorderedList,
} from '@chakra-ui/react'
import Section from '../section'

export default function () {
  return (
    <Section>
      <SimpleGrid spacingX={9} columns={[1, 1, 1, 2, 2]}>
        <Box minWidth={{ base: '100%', md: 'auto', lg: '630px' }}>
          <h3>Lending Guidelines</h3>
          <Table>
            <Tbody>
              <Tr>
                <Td minWidth={225}>Interest Rates:</Td>
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
        </Box>
        <Box mt={{ base: 6, lg: 0 }}>
          <h3>Property Types</h3>
          <HighlightedBox mb={0}>
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
        </Box>
      </SimpleGrid>
    </Section>
  )
}
