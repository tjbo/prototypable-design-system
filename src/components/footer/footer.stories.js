import Footer from './footer'

export default {
  title: 'Footer',
  component: Footer,
}

export function Default() {
  return (
    <Footer
      finePrint={
        <p>
          {`
                  Disclaimer: Crescent Lenders, DBA CrescentLenders.com ("CL")
                  is a California licensed broker under California Bureau of
                  Real Estate License No. #01792267. Regardless of this license,
                  CL considers itself a “finder” for purposes of applicable laws
                  and regulations (California Business & Professions Code §
                  10130, et. seq.).`}
        </p>
      }
      info={{
        companyName: 'Crescent Lenders',
        email: 'info@crescentlenders.com',
        phone: '213-474-3131',
        address: {
          line1: ' 2999 Overland Ave, Suite 116',
          line2: 'Los Angeles, CA 90064',
        },
      }}
      menus={[
        {
          title: 'California',
          to: '/hard-money-loans/california/',
          items: [
            {
              title: 'Los Angeles',

              to: '/hard-money-loans/california/los-angeles/',
            },
            {
              title: 'San Diego',
              to: '/hard-money-loans/california/san-diego/',
            },
            {
              title: 'San Francisco',
              to: '/hard-money-loans/california/san-francisco/',
            },
          ],
        },
        {
          title: 'Home',
          to: '/',
          items: [
            {
              title: 'Bridge Loans',
              to: '/',
            },
            {
              title: 'Fix and Flip',
              to: '/hard-money-loans/fix-and-flip/',
            },
            {
              title: 'Probate',
              to: '/hard-money-loans/probate/',
            },
          ],
        },
        {
          title: 'About',
          to: '/about/our-team/',
          items: [
            {
              title: 'Recent Loans',
              to: '/about/recently-funded-deals/',
            },
            {
              title: 'Blog',
              to: '/blog/',
            },
            {
              title: 'Privacy Policy',
              to: '/about/privacy-policy/',
            },
          ],
        },
      ]}
    />
  )
}
