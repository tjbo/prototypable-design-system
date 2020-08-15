import React from 'react'
import Jumbotron from './jumbotron'

export default {
  title: 'Jumbotron',
  component: Jumbotron,
}

const image = {
  dimensions: {
    width: 1280,
    height: 800,
  },
  alt: 'Aerial view of residential properties in the suburbs',
  copyright: null,
  url:
    'https://images.prismic.io/cresentlenders/3599b3f1-acac-4ad4-bdcc-b245e68d7b14_ivan-ragozin-iewHqnyv9hM-unsplash.jpg?auto=compress,format&rect=0,111,5464,3415&w=1280&h=800',
  '375×667': {
    dimensions: {
      width: 375,
      height: 667,
    },
    alt: null,
    copyright: null,
    url:
      'https://images.prismic.io/cresentlenders/3599b3f1-acac-4ad4-bdcc-b245e68d7b14_ivan-ragozin-iewHqnyv9hM-unsplash.jpg?auto=compress,format&rect=1708,0,2046,3640&w=375&h=667',
  },
  '1440×900': {
    dimensions: {
      width: 1440,
      height: 900,
    },
    alt: null,
    copyright: null,
    url:
      'https://images.prismic.io/cresentlenders/3599b3f1-acac-4ad4-bdcc-b245e68d7b14_ivan-ragozin-iewHqnyv9hM-unsplash.jpg?auto=compress,format&rect=0,114,5464,3415&w=1440&h=900',
  },
  '1920×1080': {
    dimensions: {
      width: 1920,
      height: 1080,
    },
    alt: null,
    copyright: null,
    url:
      'https://images.prismic.io/cresentlenders/3599b3f1-acac-4ad4-bdcc-b245e68d7b14_ivan-ragozin-iewHqnyv9hM-unsplash.jpg?auto=compress,format&rect=0,285,5464,3074&w=1920&h=1080',
  },
  '414×816': {
    dimensions: {
      width: 414,
      height: 816,
    },
    alt: null,
    copyright: null,
    url:
      'https://images.prismic.io/cresentlenders/3599b3f1-acac-4ad4-bdcc-b245e68d7b14_ivan-ragozin-iewHqnyv9hM-unsplash.jpg?auto=compress,format&rect=1807,0,1847,3640&w=414&h=816',
  },
  '1366×768': {
    dimensions: {
      width: 1366,
      height: 768,
    },
    alt: null,
    copyright: null,
    url:
      'https://images.prismic.io/cresentlenders/3599b3f1-acac-4ad4-bdcc-b245e68d7b14_ivan-ragozin-iewHqnyv9hM-unsplash.jpg?auto=compress,format&rect=0,284,5464,3072&w=1366&h=768',
  },
  '360×780': {
    dimensions: {
      width: 360,
      height: 780,
    },
    alt: null,
    copyright: null,
    url:
      'https://images.prismic.io/cresentlenders/3599b3f1-acac-4ad4-bdcc-b245e68d7b14_ivan-ragozin-iewHqnyv9hM-unsplash.jpg?auto=compress,format&rect=1890,0,1680,3640&w=360&h=780',
  },
}

export function Default() {
  return (
    <div>
      <Jumbotron image={image}>
        <h1>California Hard Money Lenders</h1>
        <h2>
          An Asset Based Real Estate Lender
          <br />
          Call or Text Us Today <br />
          213-474-3131
        </h2>
      </Jumbotron>
    </div>
  )
}

export function Left() {
  return (
    <div>
      <Jumbotron
        image={image}
        alignItems="center"
        justifyContent="start"
        textAlign="left"
      >
        <h1>California Hard Money Lenders</h1>
        <h2>
          An Asset Based Real Estate Lender
          <br />
          Call or Text Us Today <br />
          213-474-3131
        </h2>
      </Jumbotron>
    </div>
  )
}

export function Right() {
  return (
    <div>
      <Jumbotron
        image={image}
        alignItems="center"
        justifyContent="flex-end"
        textAlign="center"
      >
        <h1>California Hard Money Lenders</h1>
        <h2>
          An Asset Based Real Estate Lender
          <br />
          Call or Text Us Today <br />
          213-474-3131
        </h2>
      </Jumbotron>
    </div>
  )
}
