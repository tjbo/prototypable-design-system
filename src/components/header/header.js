import React from 'react'
import { Link as ReachLink } from '@reach/router'
import Icon from '../icon'
import { Box, Flex, Heading, Link, Text, Button } from '@chakra-ui/react'

const MenuItem = ({ item }) => {
  const { items, to, title } = item

  const defaultProps = {
    mt: { base: 8, md: 0 },
    mr: 6,
  }
  const as = ReachLink

  if (to) {
    return <Link {...{ as, ...defaultProps, to }}>{title}</Link>
  }

  if (items) {
    return <Link>{title}</Link>
  }
}

class Header extends React.Component {
  handleToggle = () => {}

  render() {
    const { menuItems } = this.props
    const show = true

    return (
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        padding="1.5rem"
        bg="gray.50"
      >
        <Flex align="center" mr={5}>
          <Icon name="crescent-lenders" display="absolute" boxSize={[16]} />
        </Flex>

        <Box
          display={{ base: 'block', md: 'none' }}
          onClick={this.handleToggle}
        >
          <svg
            fill="white"
            width="12px"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </Box>

        <Box
          display={{ sm: show ? 'block' : 'none', md: 'flex' }}
          width={{ sm: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
        >
          {menuItems.map((item) => {
            return <MenuItem {...{ item }} />
          })}
        </Box>
        <Box
          display={{ sm: show ? 'block' : 'none', md: 'block' }}
          mt={{ base: 4, md: 0 }}
        >
          <Button bg="transparent" border="1px">
            Create account
          </Button>
        </Box>
      </Flex>
    )
  }
}

export default Header
