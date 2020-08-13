import Article from '../article'
import Card from '../card'
import Cards from '../cards'
import Footer from '../footer'
import Grid from '../grid'
import Section from '../section'
import Icon from '../icon'
import Line from '../line'
import mockedImages from '../responsiveImage/mockedData'
import ResponsiveImage from '../responsiveImage'
import theme from '../../theme'

import Text from '../text'

export default {
  title: 'Prototype',
}

export function FooterExample() {
  return (
    <div>
      <Section inner_width="medium-plus">
        <Grid direction="row" alignItems="center" collapse="tablet">
          <Grid.Col width="50%" horizontalPadding=".5">
            <Grid direction="row" collapse="never">
              <Grid.Col width="23%">
                <Icon name="money" />
              </Grid.Col>
              <Grid.Col width="77%" alignSelf="center">
                <Text color="dark4" as="h5">
                  Get funded in 5 to 7 days
                </Text>
              </Grid.Col>
            </Grid>

            <Grid direction="row" collapse="never">
              <Grid.Col width="23%">
                <Icon name="percentage" />
              </Grid.Col>
              <Grid.Col width="77%" alignSelf="center">
                <Text as="h5" color="dark4">
                  LTV up to 75%
                </Text>
              </Grid.Col>
            </Grid>

            <Grid direction="row" collapse="never">
              <Grid.Col width="23%">
                <Icon name="mortgage" />
              </Grid.Col>
              <Grid.Col width="77%" alignSelf="center">
                <Text as="h5" color="dark4">
                  200k to $5 million
                </Text>
              </Grid.Col>
            </Grid>

            <Grid direction="row" collapse="never">
              <Grid.Col width="23%">
                <Icon name="handshake" />
              </Grid.Col>
              <Grid.Col width="77%" alignSelf="center">
                <Text as="h5" color="dark4">
                  Nationwide private lender
                  <br /> (not a broker, avoid the extra fees)
                </Text>
              </Grid.Col>
            </Grid>

            <Grid direction="row" collapse="never">
              <Grid.Col width="23%">
                <Icon name="mortgage2" />
              </Grid.Col>
              <Grid.Col width="77%" alignSelf="center">
                <Text as="h5" color="dark4">
                  Funding loans such as purchase, refinance, rehab, probate,
                  1031 exchanges, cash-out
                </Text>
              </Grid.Col>
            </Grid>

            <Grid direction="row" collapse="never">
              <Grid.Col width="23%">
                <Icon name="browser-home" />
              </Grid.Col>
              <Grid.Col width="77%" alignSelf="center">
                <Text as="h5" color="dark4">
                  All types of investment properties considered, residential,
                  commercial and industrial
                </Text>
              </Grid.Col>
            </Grid>
          </Grid.Col>
          <Grid.Col width="50%" horizontalPadding=".5">
            <Line isMobileOnly={true} />
            <p style={{ width: '70%' }}>
              <Icon name="crescent-lenders" />
            </p>
            <Line />
            <p>
              <b>Email</b>
              <br />
              <a href="mailto:info@crescentlenders.com">
                info@crescentlenders.com
              </a>
            </p>
            <p>
              <b>Phone</b>
              <br />
              <a href="tel:2134743131">213-474-3131</a>
            </p>
            <b>Address</b>
            <p>
              999 Overland Ave, Suite 116
              <br />
              Los Angeles, California
              <br />
              <a href="https://goo.gl/maps/PmMGoQSWfWvFgF8y5" target="_blank">
                Google Maps
              </a>
            </p>
          </Grid.Col>
        </Grid>
      </Section>
      <Section background="light">
        <h3>We Serve the Entire California Region, Including:</h3>
        <Cards>
          {mockedImages.map((image) => {
            return (
              <Card withBorder={false}>
                <Card.Image
                  title={image.alt}
                  to="/home"
                  routerLinkComponent={({ children }) => children}
                >
                  <ResponsiveImage data={image} spaceAfter="none" />
                </Card.Image>
              </Card>
            )
          })}
        </Cards>
      </Section>
      <Footer>
        <Footer.Grid alignItems="stretch">
          <Footer.Col width="50%" mobileWidth="100%">
            <Footer.Grid collapse="never" alignItems="stretch">
              <Footer.Col width="50%">
                <div
                  style={{
                    boxSizing: 'border-box',
                    padding: theme.unit(0.5),
                    width: '100%',
                    background: '#fff',
                  }}
                >
                  <Icon
                    name="crescent-lenders"
                    isAnimated={false}
                    // isWhite={true}
                    headerStyle="dark"
                  />
                </div>
              </Footer.Col>
              <Footer.Col width="50%">
                <Footer.Address>
                  213-474-3131
                  <br />
                  <Footer.Link asTitle={true}>
                    info@crescentlenders.com
                  </Footer.Link>
                  2999 Overland Ave, Suite 116
                  <br />
                  Los Angeles, CA 90064
                  <br />
                </Footer.Address>
              </Footer.Col>
            </Footer.Grid>
          </Footer.Col>
          <Footer.Col width="50%" mobileWidth="100%">
            <Footer.Grid collapse="never">
              <Footer.Col mobileWidth="100%">
                <Footer.Menu title="Locations">
                  <Footer.Link>
                    <a href="/hard-money-loans/california/">California</a>
                  </Footer.Link>
                  <Footer.Link>
                    <a href="/hard-money-loans/los-angeles/">Los Angeles</a>
                  </Footer.Link>
                  <Footer.Link>
                    <a href="/hard-money-loans/san-diego/">San Diego</a>
                  </Footer.Link>
                  <Footer.Link>
                    <a href="/hard-money-loans/san-fransico/">San Fransico</a>
                  </Footer.Link>
                </Footer.Menu>
              </Footer.Col>
              <Footer.Col mobileWidth="100%">
                <Footer.Menu title="Loans">
                  <Footer.Link>
                    <a href="/">Bridge Loans</a>
                  </Footer.Link>
                  <Footer.Link>
                    <a href="/hard-money-loans/california">Fix and Flip</a>
                  </Footer.Link>
                  <Footer.Link>
                    <a href="/hard-money-loans/california">Probate</a>
                  </Footer.Link>
                  <Footer.Link>
                    <a href="/hard-money-loans/california">San Fransico</a>
                  </Footer.Link>
                </Footer.Menu>
              </Footer.Col>
              <Footer.Col mobileWidth="100%">
                <Footer.Menu title="More">
                  <Footer.Link asTitle={true}>
                    <a href="/">Home</a>
                  </Footer.Link>
                  <Footer.Link>
                    <a href="/about/recently-funded-deals/">Recent Loans</a>
                  </Footer.Link>
                  <Footer.Link>
                    <a href="/about/our-team/">Our Team</a>
                  </Footer.Link>
                  <Footer.Link href="/blog/">
                    <a href="/blog/">Blog</a>
                  </Footer.Link>
                  <Footer.Link href="/about/privacy-policy">
                    <a href="/about/privacy-policy">Privacy Policy</a>
                  </Footer.Link>
                </Footer.Menu>
              </Footer.Col>
            </Footer.Grid>
          </Footer.Col>
        </Footer.Grid>
      </Footer>
    </div>
  )
}

export function Default() {
  return (
    <Section inner_width="small">
      <Grid
        alignItems="center"
        justifyContent="center"
        direction="column"
        verticalPadding="0"
      >
        <Grid.Col
          width="100%"
          textAlign="center"
          alignItems="center"
          justifyContent="center"
          verticalPadding="0"
        >
          <Text size={0.5} isBold>
            AS SEEN ON
          </Text>
        </Grid.Col>
        <Grid.Col width="100%" verticalPadding="0">
          <Grid alignItems="center" justifyContent="center">
            <Grid.Col
              alignSelf="center"
              justifyContent="center"
              verticalPadding={0.25}
            >
              <div style={{ width: '100%', margin: '0 auto', maxWidth: 200 }}>
                <Icon name="market-watch" />
              </div>
            </Grid.Col>
            <Grid.Col
              alignSelf="center"
              justifyContent="center"
              verticalPadding={0.25}
            >
              <div style={{ width: '80%', margin: '0 auto', maxWidth: 160 }}>
                <Icon name="yahoo-finance" />
              </div>
            </Grid.Col>
            <Grid.Col
              alignSelf="center"
              justifyContent="center"
              verticalPadding={0.25}
            >
              <div style={{ width: '80%', margin: '0 auto', maxWidth: 165 }}>
                <Icon name="business-insider" />
              </div>
            </Grid.Col>
          </Grid>
        </Grid.Col>
      </Grid>
    </Section>
  )
}

export function ArticlePromo() {
  return (
    <Section background="light">
      <Article>
        <Article.Content width="66%">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mattis
            nibh id velit sagittis aliquam.
          </p>
          <p>
            Nulla libero est, iaculis et dolor placerat, cursus tempor urna.
            Pellentesque vitae magna odio. Donec diam mi, rutrum a sollicitudin
            nec, egestas ac justo.
          </p>
          <p>
            Donec et dolor sagittis, venenatis metus vitae, dictum dui. Vivamus
            vehicula nec sapien sed venenatis. Praesent eu turpis sit amet velit
            viverra volutpat quis id quam.
          </p>
          <p>
            Nulla libero est, iaculis et dolor placerat, cursus tempor urna.
            Pellentesque vitae magna odio. Donec diam mi, rutrum a sollicitudin
            nec, egestas ac justo.
          </p>
          <p>
            Donec et dolor sagittis, venenatis metus vitae, dictum dui. Vivamus
            vehicula nec sapien sed venenatis. Praesent eu turpis sit amet velit
            viverra volutpat quis id quam.
          </p>

          <Grid direction="row" alignItems="center" justifyContent="center">
            <Grid.Col
              width="33%"
              alignSelf="center"
              justifyContent="center"
              textAlign="center"
              verticalPadding=".5"
            >
              <div style={{ maxWidth: '33%', margin: '0 auto' }}>
                <Icon name="rocket" />
              </div>
              <Text color="dark4" as="h5">
                Fast Approval
              </Text>
            </Grid.Col>

            <Grid.Col
              width="33%"
              alignSelf="center"
              justifyContent="center"
              textAlign="center"
              verticalPadding=".5"
            >
              <div style={{ maxWidth: '33%', margin: '0 auto' }}>
                <Icon name="like" />
              </div>
              <Text color="dark4" as="h5">
                Simple Process
              </Text>
            </Grid.Col>

            <Grid.Col
              width="33%"
              alignSelf="center"
              justifyContent="center"
              textAlign="center"
              verticalPadding=".5"
            >
              <div style={{ maxWidth: '33%', margin: '0 auto' }}>
                <Icon name="percentage" />
              </div>
              <Text color="dark4" as="h5">
                Competitive Rates
              </Text>
            </Grid.Col>
          </Grid>
        </Article.Content>
        <Article.Sidebar width="33%"></Article.Sidebar>
      </Article>
    </Section>
  )
}
