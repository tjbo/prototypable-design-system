import Header from './header'
import { Flex } from '@chakra-ui/react'
import Icon from '../icon/'
import TriggerIcon from './triggerIcon'

export default {
  title: 'Header',
  component: Header,
}

export function Default() {
  return (
    <Header
      Logo={() => {
        return (
          <Flex align="center" mr={5} position="relative" minWidth={36}>
            <Icon name="crescent-lenders" position="absolute" boxSize={[36]} />
          </Flex>
        )
      }}
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

export const TriggerIconStory = () => <TriggerIcon />
