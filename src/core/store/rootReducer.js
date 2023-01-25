const initialState = {
    list: [
        {text: 'Hello'},
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
                        text: action.payload
                    }
                ]
            }
        default: 
        return state;
    }
};