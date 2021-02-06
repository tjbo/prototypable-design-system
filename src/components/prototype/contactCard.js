import Icon from '../icon'
import Button from '../button'
import { Box, Divider, Flex, SimpleGrid, Text } from '@chakra-ui/react'
import Section from '../section'
import QuickPoint from '../quickPoint'

export default function () {
  return (
    <Section>
      <SimpleGrid width="100%" columns={[1, 1, 2, 2, 2]} spacingX={16}>
        <Box>
          <SimpleGrid columns={[1]} spacingY={{ base: 3, md: 6 }}>
            <Box display="flex" justifyContent={{ base: 'center' }}>
              <Text
                fontSize={{ base: '2xl', lg: '3xl' }}
                color="blue.800"
                fontWeight="700"
              >
                We Can Deliver Rapid Financing
              </Text>
            </Box>
            <Box>
              <QuickPoint icon="mortgage">
                Between $200k and $5 million dollars
              </QuickPoint>
            </Box>
            <Box>
              <QuickPoint icon="handshake">
                Nationwide private lender (not a broker, avoid the extra fees)
              </QuickPoint>
            </Box>
            <Box>
              <QuickPoint icon="mortgage2">
                Funding loans such as purchase, refinance, rehab, probate, 1031
                exchanges, cash-out
              </QuickPoint>
            </Box>
            <Box>
              <QuickPoint icon="browser-home">
                All types of investment properties considered, residential,
                commercial and industrial
              </QuickPoint>
            </Box>
          </SimpleGrid>
        </Box>
        <Box>
          <SimpleGrid columns={[1]} spacingY={6}>
            <Divider
              orientation="horizontal"
              display={{ base: 'block', md: 'none' }}
            />

            <Box
              display="flex"
              justifyContent={{ base: 'center', md: 'flex-start' }}
            >
              <Icon
                name="crescent-lenders"
                boxSize={[44, 52, 56, 64]}
                mb={{ base: -6, md: -14 }}
                mt={{ base: -6, md: -14 }}
                zIndex={1}
              />
            </Box>
            <Divider orientation="horizontal" />

            <Box
              display="flex"
              alignItems={{ base: 'center', md: 'flex-start' }}
              flexDirection="column"
            >
              <h3>Crescent Lenders</h3>
              <Text as="h5" color="dark4">
                999 Overland Ave, Suite 116
                <br />
                Los Angeles, California
              </Text>
            </Box>
            <Box
              display="flex"
              alignItems={{ base: 'center', md: 'flex-start' }}
              flexDirection="column"
            >
              <b>Email</b>
              <Text as="h5" color="dark4">
                <a href="mailto:info@crescentlenders.com">
                  info@crescentlenders.com
                </a>
              </Text>
            </Box>
            <Box
              display="flex"
              alignItems={{ base: 'center', md: 'flex-start' }}
              flexDirection="column"
            >
              <b>Phone</b>
              <Text as="h5" color="dark4">
                <a href="tel:2134743131">213-474-3131</a>
              </Text>
            </Box>
            <Box
              display="flex"
              alignItems={{ base: 'center', md: 'flex-start' }}
              flexDirection="column"
            >
              <Flex marginTop={{ base: 3, md: 9 }}>
                <Button
                  colorScheme="red"
                  size="lg"
                  to="/about/contact/"
                  minWidth="100%"
                >
                  Send Us A Message
                </Button>
              </Flex>
            </Box>
          </SimpleGrid>
        </Box>
      </SimpleGrid>
    </Section>
  )
}
