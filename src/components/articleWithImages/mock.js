import { Image } from '@chakra-ui/react'
const imageData = {
  dimensions: {
    width: 414,
    height: 274,
  },
  alt: null,
  copyright: null,
  url: '/images/houses1.jpg',
  '540x357': {
    dimensions: {
      width: 540,
      height: 357,
    },
    alt: null,
    copyright: null,
    url:
      'https://images.prismic.io/cresentlenders/347ed5e4-dd11-44ee-a2c6-34633e9e4d81_surfers-in-ocean.jpg?auto=compress,format&rect=0,9,4928,3258&w=540&h=357',
  },
  '1080x713': {
    dimensions: {
      width: 1080,
      height: 713,
    },
    alt: 'Surfers in the ocean',
    copyright: null,
    url:
      'https://images.prismic.io/cresentlenders/347ed5e4-dd11-44ee-a2c6-34633e9e4d81_surfers-in-ocean.jpg?auto=compress,format&rect=0,14,4928,3253&w=1080&h=713',
  },
}

const Text = () => (
  <div>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mattis
      euismod ultricies. Etiam at molestie massa, sed laoreet orci. Vestibulum
      auctor ante mi, eu blandit mi accumsan vel. Nam justo arcu, mollis quis
      neque ac, faucibus aliquam justo.
    </p>
    <p>
      Nam bibendum hendrerit congue. Etiam velit ex, dignissim vel iaculis in,
      luctus vitae orci. Curabitur sapien ligula, cursus non egestas vel, rutrum
      id mauris. Phasellus nisl mi, convallis ut felis eget, vehicula aliquet
      metus. Maecenas porttitor nibh nulla, in ullamcorper lectus ornare ut.
    </p>
    <p>
      In egestas, lectus vel tincidunt luctus, ante ligula commodo urna, sed
      posuere orci eros vel turpis. Morbi bibendum molestie quam commodo
      placerat. In hac habitasse platea dictumst. Proin vel dui vel nisl gravida
      laoreet quis vitae ligula. Class aptent taciti sociosqu ad litora torquent
      per conubia nostra, per inceptos himenaeos.
    </p>
    <p>
      Phasellus non tincidunt justo, in accumsan mi. Nullam et mauris fringilla,
      sagittis ligula vel, volutpat diam. Sed ultrices eros risus, at sagittis
      lorem finibus eu. Proin augue mauris, ullamcorper at auctor non, placerat
      ut risus. Sed tempus sit amet velit at interdum. Phasellus efficitur
      finibus mauris vitae lacinia. Duis fermentum sollicitudin volutpat. Nam id
      venenatis est, et venenatis mauris.
    </p>
  </div>
)

export const content = [<Text />, <Image src={imageData.url} />]
