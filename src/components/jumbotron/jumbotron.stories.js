import Jumbotron from './jumbotron'
import Title from '../title'

export default {
  title: 'Jumbotron',
  component: Jumbotron,
}

const image = {
  dimensions: {
    width: 2000,
    height: 3000,
  },
  alt: 'California Hard Money Lender Background - Palm trees in the night sky',
  copyright: null,
  url:
    'https://images.prismic.io/cresentlenders/fd8a6b7d-49ee-41f5-8342-5eac0891f223_california-palm-trees.jpg?auto=compress,format',
  '1600×900': {
    dimensions: {
      width: 1600,
      height: 900,
    },
    alt: null,
    copyright: null,
    url:
      'https://images.prismic.io/cresentlenders/fd8a6b7d-49ee-41f5-8342-5eac0891f223_california-palm-trees.jpg?auto=compress,format&rect=0,361,2000,1125&w=1600&h=900',
  },
  '1024x768': {
    dimensions: {
      width: 1024,
      height: 768,
    },
    alt: null,
    copyright: null,
    url:
      'https://images.prismic.io/cresentlenders/fd8a6b7d-49ee-41f5-8342-5eac0891f223_california-palm-trees.jpg?auto=compress,format&rect=0,738,2000,1500&w=1024&h=768',
  },
  '1920x1080': {
    dimensions: {
      width: 1920,
      height: 1080,
    },
    alt: null,
    copyright: null,
    url:
      'https://images.prismic.io/cresentlenders/fd8a6b7d-49ee-41f5-8342-5eac0891f223_california-palm-trees.jpg?auto=compress,format&rect=0,265,2000,1125&w=1920&h=1080',
  },
  '768×1024': {
    dimensions: {
      width: 768,
      height: 1024,
    },
    alt: null,
    copyright: null,
    url:
      'https://images.prismic.io/cresentlenders/fd8a6b7d-49ee-41f5-8342-5eac0891f223_california-palm-trees.jpg?auto=compress,format&rect=0,0,2000,2667&w=768&h=1024',
  },
  '1366×768': {
    dimensions: {
      width: 1366,
      height: 768,
    },
    alt: null,
    copyright: null,
    url:
      'https://images.prismic.io/cresentlenders/fd8a6b7d-49ee-41f5-8342-5eac0891f223_california-palm-trees.jpg?auto=compress,format&rect=0,187,2000,1124&w=1366&h=768',
  },
  '360×640': {
    dimensions: {
      width: 360,
      height: 640,
    },
    alt: null,
    copyright: null,
    url:
      'https://images.prismic.io/cresentlenders/fd8a6b7d-49ee-41f5-8342-5eac0891f223_california-palm-trees.jpg?auto=compress,format&rect=123,0,1688,3000&w=360&h=640',
  },
}

export function Default() {
  return (
    <Jumbotron image={image}>
      <Title as="h1" color="light3" shadow="dark" spaceAfter="none">
        California Hard Money Lenders
      </Title>
      <Title as="h2" color="light3" shadow="dark">
        An Asset Based Real Estate Lender
        <br />
        Call or Text Us Today <br />
        213-474-3131
      </Title>
    </Jumbotron>
  )
}