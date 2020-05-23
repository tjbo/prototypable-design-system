import Faq from './faq'
import Section from '../section'

export default {
  title: 'Faq',
}

export const Default = () => (
  <Section>
    <Faq>
      <Faq.Details>
        <Faq.Summary>
          <h4>What is a hard money loan?</h4>
        </Faq.Summary>
        <div>
          <p>
            A hard money loan, also known as a bridge loan, private money load
            or gap loan, is a loan secured by a "hard asset" like commercial,
            industrial or residential real estate.
          </p>
          <p>
            It is generally a short term loan (6 to 60 months) issued by private
            or commercial investors.
          </p>
        </div>
      </Faq.Details>
    </Faq>
    <Faq>
      <Faq.Details>
        <Faq.Summary>
          <h4>What types of clients utlise this product?</h4>
        </Faq.Summary>
        <p>Real Estate Professionals, such as:</p>
        <ul>
          <li>Fix and Flippers</li> <li>Refinancers</li>
          <li>Real Estate Developers</li> <li>Construction Contractors</li>
        </ul>
      </Faq.Details>
    </Faq>
  </Section>
)
