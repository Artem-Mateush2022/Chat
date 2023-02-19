import { faker } from '@faker-js/faker';

export const messageReceive = store => next => action => {
    if (action.type === 'ADD_ITEM') {
        setTimeout(() => {
            store.dispatch({
                type: 'MESSAGES_RECEIVE',
                payload: faker.lorem.text(),
            })
        }, 2000)
        setTimeout(() => {
            store.dispatch({
                type: 'MESSAGES_RECEIVE',
                payload: faker.lorem.text(),
            })
        }, 3000)
    }
    next(action);
};