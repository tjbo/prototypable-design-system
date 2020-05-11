import {
  BrandUI,
  DropdownUI,
  ContainerInnerUI,
  ContainerUI,
  LinkUI,
  MenuUI,
  ContactUI,
} from './desktop.css'

function Container({ children }) {
  return (
    <ContainerUI>
      <ContainerInnerUI>{children}</ContainerInnerUI>
    </ContainerUI>
  )
}

const Brand = function Brand({ children }) {
  return <BrandUI>{children}</BrandUI>
}

function Dropdown({ children, text }) {
  return (
    <DropdownUI>
      <Link>{text}</Link>
      <ul>
        {React.Children.map(children, (child) => (
          <li>{React.cloneElement(child, {})}</li>
        ))}
      </ul>
    </DropdownUI>
  )
}

function Link({ children }) {
  return <LinkUI>{children}</LinkUI>
}

function Menu({ children }) {
  return <MenuUI>{children}</MenuUI>
}

function Contact({ children }) {
  return <ContactUI>{children}</ContactUI>
}

export default {
  Brand,
  Container,
  Dropdown,
  Link,
  Menu,
  Contact,
}
