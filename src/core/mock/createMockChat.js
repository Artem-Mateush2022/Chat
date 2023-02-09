import { faker } from '@faker-js/faker';
import { createMockMessage } from './createMockMessage'

export function createMockChat(override) {
    const date = new Date();
    const showTime = date.getHours() 
        + ':' + date.getMinutes() 
        + ":" + date.getSeconds();
    return {
        id: faker.datatype.uuid(),
        userName: faker.name.fullName(),
        sendTime: showTime,
        lastMessage: createMockMessage(),
        avatar: faker.image.avatar(),
        ...override,
    }
};