import React from 'react'
import Section from '../section'
import Grid from '../grid'
import Icon from '../icon'
import { Link as ReachLink } from '@reach/router'
import { Box, Link, List, ListItem, Text } from '@chakra-ui/react'
import short from 'short-uuid'

function MenuItem(props) {
  const { to, title, isTitle } = props
  return (
    <ListItem key={short.generate()}>
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
        <Grid columns={[2, 2, 4, 4]}>
          <Grid.Col>
            <Box position="relative">
              <Icon
                name="crescent-lenders"
                boxSize={{ base: 36, sm: 48, lg: 52 }}
                position="absolute"
                top={{ base: -3, sm: -12, md: -12, lg: -14 }}
                left={{ base: 9, md: 0 }}
              />
            </Box>
          </Grid.Col>
          {menus.map(({ items, title, to }) => {
            return (
              <Grid.Col key={short.generate()}>
                <List>
                  <MenuItem
                    {...{ key: short.generate(), isTitle: true, title, to }}
                  />
                  {items.map(({ title, to }) => (
                    <MenuItem {...{ key: short.generate(), title, to }} />
                  ))}
                </List>
              </Grid.Col>
            )
          })}
        </Grid>
        <Box borderTop="1px solid" paddingTop={3}>
          <Text fontSize={14}>{finePrint}</Text>
        </Box>
      </Section>
    </Box>
  )
}

export default Footer
