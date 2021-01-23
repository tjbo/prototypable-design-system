import Card from '../card'
import Cards from './cards'
import Section from '../section'

import mockedImages from '../responsiveImage/mockedData'
import { ResponsiveImage } from '../..'

export default {
  title: 'Cards',
  component: Cards,
}

export function Default() {
  return (
    <Section background="dark">
      <Cards alignItems="stretch">
        <Card>
          <Card.Content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            eleifend volutpat arcu, id congue mi ullamcorper at. Proin sit amet
            hendrerit augue, vel fringilla ipsum.
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            eleifend volutpat arcu, id congue mi ullamcorper at. Proin sit amet
            hendrerit augue, vel fringilla ipsum.
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            Proin sit amet hendrerit augue, vel fringilla ipsum.
          </Card.Content>
        </Card>
      </Cards>
    </Section>
  )
}

export function withImages() {
  return (
    <Section background="dark">
      <Cards>
        <Card>
          <Card.Image>
            <img
              alt="Single Family Home in Seaside, CA"
              loading="lazy"
              src="https://images.prismic.io/cresentlenders/c2e06942-466a-4dd5-9101-862ceb2a1129_seaside-340w.jpg?auto=compress,format"
              srcSet="https://images.prismic.io/cresentlenders/c2e06942-466a-4dd5-9101-862ceb2a1129_seaside-340w.jpg?auto=compress,format 340w, https://images.prismic.io/cresentlenders/cb9207cc-db51-4678-8aea-d2a0777d481f_seaside-600w.jpg?auto=compress,format 600w, https://images.prismic.io/cresentlenders/69622e2d-8372-4d3d-8cd5-4fbe2289160c_seaside-960w.jpg?auto=compress,format 960w"
              sizes="(min-width: 900px) 33vw, (min-width: 600px) 50vw, 100vw"
            />
          </Card.Image>
          <Card.Content>
            <h3>Seaside, CA</h3>
            <div>
              <strong>Loan Amount: </strong>$220,000
            </div>
            <div>
              <strong>Type: </strong>Rehab
            </div>
            <div>
              <strong>Loan To Value: </strong>63%
            </div>
            <div>
              <strong>Rate: </strong>8.75%
            </div>
            <div>
              <strong>Property Type: </strong>Single Family
            </div>
            <div>
              <strong>Term: </strong>18 month
            </div>
          </Card.Content>
        </Card>
        <Card>
          <Card.Image>
            <img
              loading="lazy"
              alt="Industrial Building in Fullerton, CA"
              src="https://images.prismic.io/cresentlenders/04de8653-1c1d-41f7-8b78-a808ccd7042e_fullerton-340w.jpg?auto=compress,format"
              srcSet="https://images.prismic.io/cresentlenders/3b5c8832-cb8a-4c26-b732-993fff1472b5_fullerton-960w.jpg?auto=compress,format 960w, https://images.prismic.io/cresentlenders/29501669-d9a3-423a-8c42-9127c0e8374b_fullerton-600w.jpg?auto=compress,format 600w, https://images.prismic.io/cresentlenders/04de8653-1c1d-41f7-8b78-a808ccd7042e_fullerton-340w.jpg?auto=compress,format 340w"
              sizes="(min-width: 900px) 33vw, (min-width: 600px) 50vw, 100vw"
            />
          </Card.Image>
          <Card.Content>
            <h3>Fullerton, CA</h3>
            <div>
              <strong>Loan Amount: </strong>$800,000
            </div>
            <div>
              <strong>Type: </strong>Purchase,
            </div>
            <div>
              <strong>Loan To Value: </strong>65%
            </div>
            <div>
              <strong>Rate: </strong>9.00%
            </div>
            <div>
              <strong>Property Type: </strong>Industrial
            </div>
            <div>
              <strong>Term: </strong>18 months
            </div>
          </Card.Content>
        </Card>
        <Card>
          <Card.Image>
            <img
              alt="Single Family Home in Baldwin Park, CA"
              loading="lazy"
              src="https://images.prismic.io/cresentlenders/db549ed8-6d49-4781-ae18-6d5702e40f1d_baldwin-park-340w.jpg?auto=compress,format"
              srcSet="https://images.prismic.io/cresentlenders/300e5c0f-faa8-4a4b-b5f0-0a2d42f01b32_baldwin-park-665w.jpg?auto=compress,format 665w, https://images.prismic.io/cresentlenders/db549ed8-6d49-4781-ae18-6d5702e40f1d_baldwin-park-340w.jpg?auto=compress,format 340w"
              sizes="(min-width: 900px) 33vw, (min-width: 600px) 50vw, 100vw"
            />
          </Card.Image>
          <Card.Content>
            <h3>Baldwin Park, CA</h3>
            <div>
              <strong>Loan Amount: </strong>$240,000
            </div>
            <div>
              <strong>Type: </strong>Refinance
            </div>
            <div>
              <strong>Loan To Value: </strong>55%
            </div>
            <div>
              <strong>Rate: </strong>8.75%
            </div>
            <div>
              <strong>Property Type: </strong>Single Family
            </div>
            <div>
              <strong>Term: </strong>12 months
            </div>
          </Card.Content>
        </Card>
        <Card>
          <Card.Image>
            <img
              alt="Condominium in Dana Point, CA"
              loading="lazy"
              src="https://images.prismic.io/cresentlenders/d4ca67c3-48b9-42ec-93f2-3a3716566f21_dana-point-340w.jpg?auto=compress,format"
              srcSet="https://images.prismic.io/cresentlenders/b19e5c46-5b29-4718-b603-e4f90b3f73d2_dana-point-960w.jpg?auto=compress,format 960w, https://images.prismic.io/cresentlenders/d4ca67c3-48b9-42ec-93f2-3a3716566f21_dana-point-340w.jpg?auto=compress,format 340w, https://images.prismic.io/cresentlenders/c8e7ef61-f2cc-4d9a-90d8-7d5c9ea9fc7b_dana-point-600w.jpg?auto=compress,format 600w"
              sizes="(min-width: 900px) 33vw, (min-width: 600px) 50vw, 100vw"
            />
          </Card.Image>
          <Card.Content>
            <h3>Dana Point, CA</h3>
            <div>
              <strong>Loan Amount: </strong>$160,000
            </div>
            <div>
              <strong>Type: </strong>Purchase
            </div>
            <div>
              <strong>Loan To Value: </strong>35%
            </div>
            <div>
              <strong>Rate: </strong>9.00%
            </div>
            <div>
              <strong>Property Type: </strong>Condominium
            </div>
            <div>
              <strong>Term: </strong>12 months
            </div>
          </Card.Content>
        </Card>
        <Card>
          <Card.Image>
            <img
              alt="Single Family Home in San Gabriel, CA"
              loading="lazy"
              src="https://images.prismic.io/cresentlenders/a046d5bc-1115-4acf-913e-b2527f10f408_san-gabriel-340w.jpg?auto=compress,format"
              srcSet="https://images.prismic.io/cresentlenders/ae73d7ae-ec40-4c21-90cd-be0cb5a0c50b_san-gabriel-900w.jpg?auto=compress,format 900w, https://images.prismic.io/cresentlenders/9e7b3883-6860-4b9a-8df8-06f9d52e47b2_san-gabriel-600w.jpg?auto=compress,format 600w, https://images.prismic.io/cresentlenders/a046d5bc-1115-4acf-913e-b2527f10f408_san-gabriel-340w.jpg?auto=compress,format 340w"
              sizes="(min-width: 900px) 33vw, (min-width: 600px) 50vw, 100vw"
            />
          </Card.Image>
          <Card.Content>
            <h3>San Gabriel, CA</h3>
            <div>
              <strong>Loan Amount: </strong>$1,540,000
            </div>
            <div>
              <strong>Type: </strong>Purchase
            </div>
            <div>
              <strong>Loan To Value: </strong>65%
            </div>
            <div>
              <strong>Rate: </strong>9.00%
            </div>
            <div>
              <strong>Property Type: </strong>Single Family
            </div>
            <div>
              <strong>Term: </strong>24 months
            </div>
          </Card.Content>
        </Card>
        <Card>
          <Card.Image>
            <img
              alt="Multi-Family Home in Montebello, CA"
              loading="lazy"
              src="https://images.prismic.io/cresentlenders/3a33016c-6c0d-4406-8e41-706cd7468542_montebello-340w.jpg?auto=compress,forma"
              srcSet="https://images.prismic.io/cresentlenders/38e11b51-46a0-4251-9241-8654a8428620_montebello-960w.jpg?auto=compress,format 960w, https://images.prismic.io/cresentlenders/2a0d170c-b603-41ba-9f13-7c5fd139ad4d_montebello-600w.jpg?auto=compress,format, 600w, https://images.prismic.io/cresentlenders/3a33016c-6c0d-4406-8e41-706cd7468542_montebello-340w.jpg?auto=compress,format, 340w"
              sizes="(min-width: 900px) 33vw, (min-width: 600px) 50vw, 100vw"
            />
          </Card.Image>
          <Card.Content>
            <h3>Montebello, CA</h3>
            <div>
              <strong>Loan Amount: </strong>$2,500,000
            </div>
            <div>
              <strong>Type: </strong>Purchase
            </div>
            <div>
              <strong>Loan To Value: </strong>66%
            </div>
            <div>
              <strong>Rate: </strong>8.75%
            </div>
            <div>
              <strong>Property Type: </strong>Multi-Family
            </div>
            <div>
              <strong>Term: </strong>12 months
            </div>
          </Card.Content>
        </Card>
      </Cards>
    </Section>
  )
}

export function withImagesWithTitle() {
  return (
    <Section background="dark">
      <Cards>
        {mockedImages.map((image) => {
          return (
            <Card withBorder={false}>
              <Card.Image title={image.alt} to="/home">
                <ResponsiveImage data={image} />
              </Card.Image>
            </Card>
          )
        })}
      </Cards>
    </Section>
  )
}
