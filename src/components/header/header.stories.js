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
              title: 'Fix and Flip',
              to: 'fix and flip',
            },
            {
              title: 'Fix and Flip',
              to: 'fix and flip',
            },
            {
              title: 'Fix and Flip',
              to: 'fix and flip',
            },
            {
              title: 'Fix and Flip',
              to: 'fix and flip',
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
