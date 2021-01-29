import React from 'react'
import Section from '../section'
import Icon from '../icon'
import { Link as ReachLink } from '@reach/router'
import { Box, Link, List, ListItem, SimpleGrid, Text } from '@chakra-ui/react'
import short from 'short-uuid'

function MenuItem(props) {
  const { to, title, isTitle } = props
  return (
    <ListItem key={short.generate()} mt={0} mb={0}>
      <Link as={ReachLink} to={to} fontWeight={isTitle ? 600 : null}>
        {title}
      </Link>
    </ListItem>
  )
}

function Footer(props) {
  const { finePrint, location, info, menus } = props
  return (
    <Box>
      <Section background="light" inner_width="medium">
        <Box borderTop="1px solid" paddingTop={6}></Box>
        <SimpleGrid columns={[2, 2, 4, 4]}>
          <Box>
            <Box position="relative">
              <Icon
                name="crescent-lenders"
                boxSize={{ base: 36, sm: 48, lg: 52 }}
                position="absolute"
                top={{ base: -3, sm: -12, md: -12, lg: -14 }}
                left={{ base: 9, md: 0 }}
              />
            </Box>
          </Box>
          {menus.map(({ items, title, to }) => {
            return (
              <Box key={short.generate()}>
                <List>
                  <MenuItem
                    {...{ key: short.generate(), isTitle: true, title, to }}
                  />
                  {items.map(({ title, to }) => (
                    <MenuItem {...{ key: short.generate(), title, to }} />
                  ))}
                </List>
              </Box>
            )
          })}
        </SimpleGrid>
        <Box borderTop="1px solid" paddingTop={3}>
          <Text fontSize={14}>{finePrint}</Text>
        </Box>
      </Section>
    </Box>
  )
}

export default Footer
