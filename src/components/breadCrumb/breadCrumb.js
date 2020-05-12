import { ContainerUI } from './breadCrumb.css'

export default function BreadCrumb({ parts }) {
  return (
    <ContainerUI>
      <div>
        {parts.map((part) => {
          return part
        })}
      </div>
    </ContainerUI>
  )
}
