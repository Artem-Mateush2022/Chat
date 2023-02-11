import { faker } from '@faker-js/faker';
import moment from 'moment';

export function createMockMessage(override) {
    return {
      id: faker.datatype.uuid(),
      text: faker.lorem.text(),
      time: moment(Date.now()).format('h:mm a'),
      ...override,
    };
  };