import React from 'react'
import Header from './header'
import Section from '../section'

export default {
  title: 'Header',
  component: Header,
}

export const Default = () => (
  <Section>
    <Header.Container style="dark">
      <Header.Brand>
        <img
          src="https://www.crescentlenders.com/images/logo-white-953x349-transparent.png"
          width="250"
        />
      </Header.Brand>
      <Header.Menu>
        <Header.Link>
          <a href="/">Home</a>
        </Header.Link>
        <Header.Dropdown text="About">
          <a to="/about/our-team/">Our Team</a>
          <a to="/about/recently-funded-deals/">Recent Deals</a>
          <a to="/about/our-team/">Thing 2</a>
          <a to="/about/recently-funded-deals/">Thing 3</a>
        </Header.Dropdown>
        <Header.Link>
          <a href="/">Blog</a>
        </Header.Link>
        <Header.Link asHighlight={true}>
          <a href="/">213-474-3131</a>
        </Header.Link>
        <Header.Link>
          <a href="mailto:info@crescentlenders.com">info@crescentlenders.com</a>
        </Header.Link>
      </Header.Menu>
    </Header.Container>
  </Section>
)

export const DarkStyle = () => (
  <Section>
    <Header.Container isTransparent={true} style="dark">
      <Header.Brand>
        <img
          src="https://www.crescentlenders.com/images/logo-white-953x349-transparent.png"
          width="250"
        />
      </Header.Brand>
      <Header.Menu>
        <Header.Link>
          <a href="/">Home</a>
        </Header.Link>
        <Header.Dropdown text="About">
          <a to="/about/our-team/">Our Team</a>
          <a to="/about/recently-funded-deals/">Recent Deals</a>
          <a to="/about/our-team/">Thing 2</a>
          <a to="/about/recently-funded-deals/">Thing 3</a>
        </Header.Dropdown>
        <Header.Link>
          <a href="/">Blog</a>
        </Header.Link>
        <Header.Link asHighlight={true}>
          <a href="/">213-474-3131</a>
        </Header.Link>
        <Header.Link>
          <a href="mailto:info@crescentlenders.com">info@crescentlenders.com</a>
        </Header.Link>
      </Header.Menu>
    </Header.Container>
  </Section>
)
