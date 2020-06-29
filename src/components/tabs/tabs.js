import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Tab from './tab'

import { TabsUI, TabsContentUI, TabsListUI } from './tabs.css'

class Tabs extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Array).isRequired,
  }

  constructor(props) {
    super(props)

    this.state = {
      activeTab: this.props.children[0].props.label,
    }
  }

  onClickTabItem = (tab) => {
    this.setState({ activeTab: tab })
  }

  render() {
    const {
      onClickTabItem,
      props: { children },
      state: { activeTab },
    } = this

    return (
      <TabsUI>
        <TabsListUI>
          {children.map((child) => {
            const { label } = child.props

            return (
              <Tab
                activeTab={activeTab}
                key={label}
                label={label}
                onClick={onClickTabItem}
              />
            )
          })}
        </TabsListUI>
        <TabsContentUI>
          {children.map((child) => {
            if (child.props.label !== activeTab) {
              return undefined
            }
            return child.props.children
          })}
        </TabsContentUI>
      </TabsUI>
    )
  }
}

export default Tabs
