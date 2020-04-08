import React from 'react'
import Faq from './faq'

export default {
  title: 'Faq',
  component: Faq,
}

export const Default = () => (
  <Faq
    data={{
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at urna ac sapien accumsan elementum ac in ex. Praesent sit amet laoreet justo, in consequat libero. Nunc finibus condimentum lacus et aliquam. Suspendisse potenti. Sed finibus nisl a nisi gravida tempor ut elementum est. Aliquam dictum euismod nibh ac mollis.',
    }}
  />
)
