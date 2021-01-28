import React from 'react'
import {
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  Breadcrumb,
} from '@chakra-ui/react'
import Section from '../section'
import Icon from '../icon'
import { Link } from '@reach/router'

function Crumb(props) {
  const { items } = props
  return (
    <Section background="dark" inner_width="medium" pt={2} pb={2}>
      <Breadcrumb
        justifyContent="center"
        spacing="8px"
        seperator={<Icon name="chevron-right" boxSize={6} color="gray.500" />}
      >
        {items.map((item, index) => {
          return (
            <BreadcrumbItem>
              <BreadcrumbLink
                as={Link}
                to={item.path}
                isCurrentPage={index === items.length - 1}
              >
                {item.title}
              </BreadcrumbLink>
            </BreadcrumbItem>
          )
        })}
      </Breadcrumb>
    </Section>
  )
}

export default Crumb
