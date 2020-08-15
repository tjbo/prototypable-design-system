import { LinkUI, MenuUI } from './mobile.css'
import Icon from '../../icon'

function SubMenu({
  children,
  closeParentMenu,
  isParentMenuOpen,
  text,
  subMenu,
  toggleSubMenu,
}) {
  const content = React.Children.map(children, (child) => {
    return React.cloneElement(child, {
      ...child.props,
      closeParentMenu,
      isParentMenuOpen,
      subMenu,
      toggleSubMenu,
    })
  })
  return (
    <div style={{ overflow: 'hidden' }}>
      <MenuUI
        isAnimated={true}
        isParentMenuOpen={subMenu === text}
        isSubMenu={true}
      >
        <LinkUI onClick={toggleSubMenu.bind(null, '')}>
          <Icon name="chevron-left" />
          Back
        </LinkUI>
        {content}
      </MenuUI>
      <LinkUI onClick={toggleSubMenu.bind(null, text)}>
        {text}
        <Icon name="chevron-right" />
      </LinkUI>
    </div>
  )
}

export default SubMenu
