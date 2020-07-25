import React from 'react'
import Header from './header'
import Body from '../body'
import Content from '../content'
import Icon from '../icon'

export default {
  title: 'Header',
  component: Header,
}

function Link({ children }) {
  return <a href="">{children}</a>
}

const style = 'dark'

export const Default = () => (
  <Header.Container headerStyle={style} isTransparent={false}>
    <Header.Brand>
      <Icon name="crescent-lenders" headerStyle={style} />
    </Header.Brand>
    <Header.Menu>
      <Header.Link>
        <Link to="/">Home</Link>
      </Header.Link>
      <Header.SubMenu text="About">
        <Header.Link>
          <Link to="/about/our-team/">Our Team</Link>
        </Header.Link>
        <Header.Link>
          <Link to="/about/recently-funded-deals/">Recent Deals</Link>
        </Header.Link>
        <Header.Link>
          <Link to="/about/broker-referral/">Brokers</Link>
        </Header.Link>
        <Header.Link>
          <Link to="/about/broker-referral/">Brokers</Link>
        </Header.Link>
      </Header.SubMenu>
      <Header.Link>
        <Link to="/blog/">Blog</Link>
      </Header.Link>
      <Header.Link>
        <Link to="/about/contact/">CONTACT</Link>
      </Header.Link>
      <Header.Link asHighlight={true}>213-474-3131</Header.Link>
    </Header.Menu>
  </Header.Container>
)
