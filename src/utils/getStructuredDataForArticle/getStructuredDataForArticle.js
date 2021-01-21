import React from 'react'
import getImagePathsFromData from '../getImagePathsFromData'

function getStructuredDataForArticle(data) {
  const {
    first_publication_date,
    last_publication_date,
    image,
    meta_title,
    siteRoot,
    path,
  } = data

  const _json = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteRoot}${path}`,
    },
    headline: meta_title,
    image: getImagePathsFromData({ image, size: 'half' }),
    dateModified: last_publication_date,
    datePublished: first_publication_date,
    author: {
      '@type': 'person',
      name: 'John Russell Barneson',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Crescent Lenders',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.crescentlenders.com/images/logo-white-345x230.png',
      },
    },
  }

  return (
    <script type="application/ld+json" key="structured-data">
      {JSON.stringify(_json)}
    </script>
  )
}

export default getStructuredDataForArticle
