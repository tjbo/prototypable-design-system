import React from 'react'
import Header from './header'

export default {
  title: 'Header',
  component: Header,
}

export const Default = () => (
  <Header.Container>
    <Header.Brand>SOMELONGBRANDNAMEGOES</Header.Brand>
    <Header.Menu>
      <Header.Link>
        <a href="/">Home</a>
      </Header.Link>
      <Header.Link>
        <a href="/">About</a>
      </Header.Link>
      <Header.Link>
        <a href="/">Blog</a>
      </Header.Link>
      <Header.Link>
        <a href="/">Contact</a>
      </Header.Link>
    </Header.Menu>
  </Header.Container>
)
