import React from 'react'
import Section from '../section'
import Grid from '../grid'
import Icon from '../icon'
import { Link as ReachLink } from '@reach/router'
import { Box, Link, List, ListItem, Text } from '@chakra-ui/react'

function MenuItem(props) {
  const { to, title, isTitle } = props
  return (
    <ListItem>
      <Link as={ReachLink} to={to} fontWeight={isTitle ? 600 : null}>
        {title}
      </Link>
    </ListItem>
  )
}

function Footer(props) {
  const { finePrint, info, menus } = props
  return (
    <Section background="light" inner_width="medium">
      <Box borderTop="1px solid" paddingTop={6}></Box>
      <Grid columns={[2, 2, 4, 4]}>
        <Grid.Col>
          <Box position="absolute" left={[12, 14, 3, 3]} top={[3, 3, 3, 4]}>
            <Icon name="crescent-lenders" boxSize={36} />
          </Box>
        </Grid.Col>
        {menus.map(({ items, title, to }) => {
          return (
            <Grid.Col>
              <List>
                <MenuItem {...{ isTitle: true, title, to }} />
                {items.map(({ title, to }) => (
                  <MenuItem {...{ title, to }} />
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
  )
}

export default Footer
