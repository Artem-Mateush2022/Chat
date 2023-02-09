import { faker } from '@faker-js/faker';

export function createMockMessage(override) {
    const date = new Date();
    const showTime = date.getHours() 
        + ':' + date.getMinutes() 
        + ":" + date.getSeconds();
    return {
      id: faker.datatype.uuid(),
      text: faker.lorem.text(),
      time: showTime,
      ...override,
    };
  }