import { LinkUI, MenuUI } from './mobile.css'

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
    <div>
      <MenuUI
        isAnimated={true}
        isParentMenuOpen={subMenu === text}
        isSubMenu={true}
      >
        <LinkUI
          icon="back"
          onClick={() => {
            console.log('toggleSub')
            toggleSubMenu('')
          }}
        >
          Back
        </LinkUI>
        {content}
      </MenuUI>
      <LinkUI
        icon="forward"
        onClick={() => {
          toggleSubMenu(text)
        }}
      >
        {text}
      </LinkUI>
    </div>
  )
}

export default SubMenu
