var faker = require('faker')

const data = {
  imageUrl: faker.random.image(),
  fields: [
    {
      key: 'Location: ',
      value: 'Los Angelese',
    },
    {
      key: 'Price: ',
      value: '$100,000',
    },
  ],
  title: 'Card 1',
}

export default data
