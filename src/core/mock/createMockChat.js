import { faker } from '@faker-js/faker';
import { createMockMessage } from './createMockMessage'

export function createMockChat(override = {}) {
    return {
        id: faker.datatype.uuid(),
        title: faker.lorem.text(),
        lastMessage: createMockMessage(),
        ...override,
    }
}