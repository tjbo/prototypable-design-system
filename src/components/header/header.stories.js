import Header from './header'

export default {
  title: 'Header',
  component: Header,
}

export function Default() {
  return (
    <Header
      menuItems={[
        {
          title: 'Home',
          to: '/',
        },
        {
          title: 'About',
          to: '/about',
        },
        {
          title: 'Loans',
          items: [
            {
              title: '1031 Exchange',
              to: '/hard-money-loans/1031-exchange-financing/',
            },
            {
              title: 'Fix and Flip',
              to: '/hard-money-loans/fix-and-flip/',
            },
            {
              title: 'California',
              to: '/hard-money-loans/california/',
            },
          ],
        },
        {
          title: 'Blog',
          to: '/blog',
        },
        {
          title: 'Contact',
          to: '/contact',
        },
      ]}
      path={location.pathname}
    />
  )
}
