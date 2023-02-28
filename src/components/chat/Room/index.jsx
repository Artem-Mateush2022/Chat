import { connect } from "react-redux";
import { ListItem } from '@mui/material';

import "../styles/index";
import { Form } from './components/Form';
import { MessagesList } from './components/MessageList';
import { RoomBar } from './components/RoomBar'

function MessagesComp({ remove, removeAll, messages }) {
    return (
        <>
            <RoomBar />
            <div className="message_wraper">
                {messages.map((messages, index) => (
                    <MessagesList 
                    onDelete={ remove } 
                    onDeleteAll={removeAll} 
                    key={index}
                    itsMe={messages.fromUserId === '1111'}
                    messages={[messages]} />
                ))}
            </div> 
            <ListItem id="chat-window-messages">
                <Form onAdd />
            </ListItem>  
        </>  
    )
};

const mapState = state => ({
    messages: state.list,
});

const mapDispatch = (dispatch) => ({
    remove: (item) => dispatch({
        type: 'ITEM_REMOVE', 
        payload: item,
    }),
    removeAll: () => dispatch({
        type: 'REMOVE_ALL',
    })
});

export const MessagesRoom = connect(mapState, mapDispatch)(MessagesComp);