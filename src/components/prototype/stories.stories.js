// import Icon from '../icon'
import theme from '../../theme'
import Grid from '../grid'
import Icon from '../icon'
import Article from '../article'
import Button from '../button'
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
  Stack,
  Text,
} from '@chakra-ui/react'
import Section from '../section'

export { default as Guidelines } from './guidelines'

export default {
  title: 'Thing',
  component: Grid,
}

export function Default() {}

export const ContactCard = () => {
  return (
    <Section inner_width="tiny">
      <Grid width="100%" columns={[1, 1, 2, 2, 2]} spacingX={9}>
        <Grid.Col>
          <Flex height="100%">
            <Grid columns={[1]} spacingY={[9, 12]}>
              <Grid.Col>
                <Text
                  fontSize="3xl"
                  color="blue.800"
                  fontWeight="700"
                  marginBottom={-3}
                >
                  We Can Deliver Rapid Financing
                </Text>
              </Grid.Col>
              <Grid.Col>
                <Grid templateColumns="2fr 8fr" spacingX={[1, 3]}>
                  <Grid.Col width="25%">
                    <Icon name="mortgage" boxSize={[14, 16, 24]} />
                  </Grid.Col>
                  <Grid.Col alignSelf="center" width="75%">
                    <Text as="h5" color="dark4">
                      Between $200k and $5 million dollars
                    </Text>
                  </Grid.Col>
                </Grid>
              </Grid.Col>
              <Grid.Col>
                <Grid templateColumns="2fr 8fr" spacingX={[1, 3]}>
                  <Grid.Col width="23%">
                    <Icon name="handshake" boxSize={[14, 16, 24]} />
                  </Grid.Col>
                  <Grid.Col width="77%" alignSelf="center">
                    <Text as="h5" color="dark4">
                      Nationwide private lender (not a broker, avoid the extra
                      fees)
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
                      All types of investment properties considered,
                      residential, commercial and industrial
                    </Text>
                  </Grid.Col>
                </Grid>
              </Grid.Col>
            </Grid>
          </Flex>
        </Grid.Col>
        <Grid.Col>
          <Grid columns={[1]} spacingY={6}>
            <Grid.Col>
              <hr />
              <Icon
                name="crescent-lenders"
                boxSize={[36, 64]}
                marginBottom={-6}
                marginTop={-6}
              />
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
            <Grid.Col>
              <Flex marginTop={9}>
                <Button
                  colorScheme="red"
                  size="lg"
                  to="/contact/"
                  width="300px"
                >
                  Send Us A Message
                </Button>
              </Flex>
            </Grid.Col>
          </Grid>
        </Grid.Col>
      </Grid>
    </Section>
  )
}
