import { ButtonUI, ButtonContainerUI, IconContainerUI } from './button.css'
import PropTypes from 'prop-types'
import Icon from '../icon'
import short from 'short-uuid'

function getIconComponent(icon) {
  return (
    (icon && (
      <IconContainerUI key={short.generate()}>
        <Icon name={icon} />
      </IconContainerUI>
    )) ||
    null
  )
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

function Button({
  children,
  href = '',
  icon = '',
  routerLinkComponent = null,
  onClick,
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
            to,
            routerLinkComponent,
            type,
          })
        : getButton({
            children,
            icon,
            onClick,
            type,
          })}
    </ButtonContainerUI>
  )
}

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  href: PropTypes.string,
  icon: PropTypes.oneOf(['email', 'sms']),
  onClick: PropTypes.func,
  to: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit']),
}

export default Button
