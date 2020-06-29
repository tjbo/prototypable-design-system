import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TabUI } from './tab.css'

class Tab extends Component {
  static propTypes = {
    activeTab: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  }

  onClick = () => {
    const { label, onClick } = this.props
    onClick(label)
  }

  render() {
    const {
      onClick,
      props: { activeTab, label },
    } = this

    return (
      <TabUI isActive={activeTab === label} onClick={onClick}>
        {label}
      </TabUI>
    )
  }
}

export default Tab
