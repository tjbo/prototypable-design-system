import Grid from '../grid'
import Icon from '../icon'
import Button from '../button'
import { Flex, Text } from '@chakra-ui/react'
import Section from '../section'
import QuickPoint from '../quickPoint'

export default function () {
  return (
    <Section inner_width="tiny">
      <Grid width="100%" columns={[1, 1, 2, 2, 2]} spacingX={9}>
        <Grid.Col>
          <Flex height="100%">
            <Grid columns={[1]} spacingY={{ base: 3, md: 12 }}>
              <Grid.Col>
                <Text fontSize="3xl" color="blue.800" fontWeight="700">
                  We Can Deliver Rapid Financing
                </Text>
              </Grid.Col>
              <Grid.Col>
                <QuickPoint icon="mortgage">
                  Between $200k and $5 million dollars
                </QuickPoint>
              </Grid.Col>
              <Grid.Col>
                <QuickPoint icon="handshake">
                  Nationwide private lender (not a broker, avoid the extra fees)
                </QuickPoint>
              </Grid.Col>
              <Grid.Col>
                <QuickPoint icon="mortgage2">
                  Funding loans such as purchase, refinance, rehab, probate,
                  1031 exchanges, cash-out
                </QuickPoint>
              </Grid.Col>
              <Grid.Col>
                <QuickPoint icon="browser-home">
                  All types of investment properties considered, residential,
                  commercial and industrial
                </QuickPoint>
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
