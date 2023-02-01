import { Fragment } from "react";
import * as React from 'react';
import List from '@mui/material/List';

import { ChatItem } from './ChatItem'

export default function ChatList() {
    const chatInfo = [
        {id: 1, userName: 'Remy Sharp', sendTime: '15:22', lastMessage: 'Test last message, and no wrapping last maessage'},
        {id: 2, userName: 'Anny Walker', sendTime: '19:00', lastMessage: 'I\'ll be in your neighborhood doing errands'},
        {id: 3, userName: 'Sami Ban', sendTime: '07:09', lastMessage: 'How are you?'},
    ]

    return (
        <List>
            {chatInfo.map((item, index) => (
                <Fragment key={index}>
                    <ChatItem chatInfo={item} />
                </Fragment>
            ))}
        </List>
    
    )
}