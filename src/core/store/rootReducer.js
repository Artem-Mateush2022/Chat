import { createMockMessage } from '../mock/createMockMessage';
import { createMockChat } from '../mock/createMockChat';

const initialState = {
    list: [
        createMockMessage(),
        createMockMessage(),
        createMockMessage(),
        createMockMessage(),
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
                    {
                        text: action.payload,
                    }
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