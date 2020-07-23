import { ButtonUI, ButtonContainerUI, IconContainerUI } from './button.css'
import SMS from '../../svgs/sms'
import Email from '../../svgs/email'

function getIconComponent(icon) {
  const icons = {
    email: <Email />,
    sms: <SMS />,
  }

  return (icon && <IconContainerUI>{icons[icon]}</IconContainerUI>) || null
}

function getButtonAsRouterLink({
  children,
  href,
  icon,
  maxWidth,
  routerLinkComponent,
  to,
  type,
}) {
  const IconComponent = getIconComponent(icon)
  return (
    <ButtonUI as="span" maxWidth={maxWidth}>
      {React.createElement(routerLinkComponent, { to }, [
        children,
        IconComponent,
      ])}
    </ButtonUI>
  )
}

function getButton({ children, icon, onClick, maxWidth, type }) {
  const IconComponent = getIconComponent(icon)

  return (
    <ButtonUI maxWidth={maxWidth} type={type} onClick={onClick}>
      {children}
      {IconComponent}
    </ButtonUI>
  )
}

export default function ({
  children,
  href = '',
  icon = '',
  routerLinkComponent = null,
  onClick,
  maxWidth = 250,
  to = '',
  type = 'button',
}) {
  return (
    <ButtonContainerUI>
      {routerLinkComponent && to.length
        ? getButtonAsRouterLink({
            children,
            href,
            icon,
            maxWidth,
            to,
            routerLinkComponent,
            type,
          })
        : getButton({
            children,
            icon,
            maxWidth,
            onClick,
            type,
          })}
    </ButtonContainerUI>
  )
}
