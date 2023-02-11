import { Fragment } from "react";
import * as React from 'react';
import List from '@mui/material/List';

import { ChatItem } from './ChatItem';
import { connect } from "react-redux";

function ChatList({items}) {

    return (
        <List>
            {items.map((item, index) => (
                <Fragment key={index}>
                    <ChatItem chatInfo={item} />
                </Fragment>
            ))}
        </List>
    
    )
};

const mapState = state => ({
    items: state.chatInfo,
});

export const ChatListRender = connect(mapState)(ChatList);