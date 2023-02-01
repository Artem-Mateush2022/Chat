import { faker } from '@faker-js/faker';

export function createMockMessage(override = {}) {
    return {
        id: faker.datatype.uuid(),
        fromUserId: faker.datatype.uuid(),
        created: faker.date.past().getTime(),
        text: faker.lorem.text(),
        ...override,
    }
}