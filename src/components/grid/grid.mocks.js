var faker = require('faker')

export const cardsData = new Array(9).fill(null).map((index) => {
  return {
    title: faker.name.jobTitle(),
    fields: [
      {
        key: 'Name: ',
        value: faker.name.findName(),
      },
      {
        key: 'Phone: ',
        value: faker.phone.phoneNumber(),
      },
    ],
  }
})
