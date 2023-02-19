import { faker } from '@faker-js/faker';
import { createMockMessage } from './createMockMessage';
import moment from 'moment';

export function createMockChat(override) {
    return {
        id: faker.datatype.uuid(),
        userName: faker.name.fullName(),
        sendTime: moment(Date.now()).format('h:mm a'),
        lastMessage: createMockMessage(),
        avatar: faker.image.avatar(),
        ...override,
    }
};