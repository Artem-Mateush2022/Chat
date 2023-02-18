import { createMockMessage } from '../mock/createMockMessage';
import { createMockChat } from '../mock/createMockChat';

const initialState = {
    list: [
        // createMockMessage(),
    ],
    chatInfo: [
        createMockChat({lastMessage: 'How are you?',}),
        createMockChat({lastMessage: 'How are you?',}),
        createMockChat({lastMessage: 'How are you?',}),
        createMockChat({lastMessage: 'How are you?',}),
        createMockChat({lastMessage: 'How are you?',}),
    ],
};

export function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_ITEM':
            return {
                ...state,
                list: [
                    ...state.list,
                    createMockMessage({
                        fromUserId: '1111',
                        text: action.payload,
                    })
                ]
            };
        case 'MESSAGES_RECEIVE':
            return {
                ...state,
                list: [
                    ...state.list,
                    createMockMessage({
                        text: action.payload,
                    })
                ]
            };
        case 'ITEM_REMOVE':
            return {
                ...state,
                list: state.list.filter(item => item !== action.payload)
            };
        case 'REMOVE_ALL':
            return {
                ...state,
                list: []
            }
        default: 
        return state;
    }
};