import React from 'react'
import { Link as ReachLink, navigate } from '@reach/router'
import Icon from '../icon'
import { Box, Flex, Link, Button, useBreakpointValue } from '@chakra-ui/react'
import short from 'short-uuid'
import theme from '../theme'

function SubMenu(props) {
  const { items, isSubMenuShowing, toggleMobileMenu } = props

  return (
    <Box
      position={{ base: 'relative', md: 'absolute' }}
      bg={{ base: 'none', md: 'blue.50' }}
      p={6}
      display={isSubMenuShowing ? 'block' : 'none'}
      whiteSpace="nowrap"
      width="auto"
    >
      {items.map((item) => {
        return (
          <MenuItem
            key={short.generate()}
            item={item}
            margin={6}
            toggleMobileMenu={toggleMobileMenu}
          />
        )
      })}
    </Box>
  )
}

function MenuItem(props) {
  const {
    item: { items, to, title },
    isDesktop,
    margin,
    toggleSubMenu,
    subMenuShowing,
    toggleMobileMenu,
    ...rest
  } = props

  const defaultProps = {
    clear: 'both',
    display: 'block',
    mr: 6,
    p: { base: 4, md: 0 },
  }
  const as = ReachLink

  if (to) {
    return (
      <Link
        {...{
          as,
          ...defaultProps,
          to,
        }}
      >
        {title}
      </Link>
    )
  }

  // for title of a submenu
  if (items) {
    const isSubMenuShowing = subMenuShowing === title

    return (
      <Box
        onMouseEnter={() => isDesktop && toggleSubMenu(title)}
        onMouseLeave={() => isDesktop && toggleSubMenu(null)}
        display="block"
        margin={margin}
        position="relative"
        zIndex={9999}
      >
        <Link
          {...defaultProps}
          onMouseDown={() => {
            if (!isDesktop) {
              isSubMenuShowing ? toggleSubMenu(null) : toggleSubMenu(title)
            }
          }}
        >
          {title} <Icon name="chevron-down-icon" boxSize={4} />
        </Link>
        <SubMenu
          key={short.generate()}
          items={items}
          isSubMenuShowing={subMenuShowing === title}
          toggleMobileMenu={toggleMobileMenu}
        />
      </Box>
    )
  }
}

class Header extends React.Component {
  state = {
    subMenuShowing: '',
    isMobileMenuShowing: false,
  }

  handleToggle = () => {}

  toggleMobileMenu = () => {
    this.setState({ isMobileMenuShowing: !this.state.isMobileMenuShowing })
  }

  toggleSubMenu = (name) => {
    this.setState({ subMenuShowing: name })
  }

  onResize = () => {
    this.toggleSubMenu(null)
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.isMobileMenuShowing && this.props.path !== prevProps.path) {
      !this.props.isDesktop && this.toggleMobileMenu()
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.onResize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize)
  }

  render() {
    const { menuItems, isDesktop } = this.props
    const { isMobileMenuShowing, subMenuShowing } = this.state

    return (
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        padding={{ base: 6 }}
        bg="gray.50"
        position="relative"
        zIndex={2}
      >
        <Flex align="center" mr={5} position="relative" minWidth={36}>
          <Icon name="crescent-lenders" position="absolute" boxSize={[36]} />
        </Flex>
        <Box
          background={{ base: theme.colors.white, md: 'none' }}
          display={{ base: isMobileMenuShowing ? 'block' : 'none', md: 'flex' }}
          width={{ sm: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          position={{ base: 'fixed', md: 'relative' }}
          top={{ base: '100px', md: 0 }}
          marginLeft={{ base: -6, md: 0 }}
          minHeight={{ base: '100vh', md: 'auto' }}
        >
          {menuItems.map((item) => {
            return (
              <MenuItem
                {...{
                  item,
                  toggleSubMenu: this.toggleSubMenu,
                  subMenuShowing,
                  toggleMobileMenu: this.toggleMobileMenu,
                  isDesktop,
                }}
                key={short.generate()}
              />
            )
          })}
        </Box>
        <Box display={{ base: 'none', md: 'block' }} mt={{ base: 4, md: 0 }}>
          <Button colorScheme="green" border="1px">
            CALL US 213-474-3131
          </Button>
        </Box>
        <Box
          display={{ base: 'block', md: 'none' }}
          onMouseDown={this.toggleMobileMenu}
        >
          CLICK
        </Box>
      </Flex>
    )
  }
}

function WithBreakPoint(props) {
  const isDesktop = useBreakpointValue({ base: false, md: true })
  return <Header {...{ isDesktop, ...props }} />
}

export default WithBreakPoint
