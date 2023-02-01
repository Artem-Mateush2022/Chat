const initialState = {
    list: [
        {text: 'Hello'},
    ],
    chatInfo: [
        {id: 1, userName: 'Remy Sharp', sendTime: '15:22', lastMessage: 'Test last message, and don\'t wrapping last maessage'},
        {id: 2, userName: 'Anny Walker', sendTime: '19:00', lastMessage: 'I\'ll be in your neighborhood doing errands'},
        {id: 3, userName: 'Sami Ban', sendTime: '07:09', lastMessage: 'How are you?'},
    ]
};

export function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_ITEM':
            return {
                ...state,
                list: [
                    ...state.list,
                    {
                        text: action.payload
                    }
                ]
            }
        default: 
        return state;
    }
};