import { connect } from "react-redux";
import { ListItem, styled } from '@mui/material';

import { Form } from './components/Form';
import { MessagesList } from './components/MessageList';
import { RoomBar } from './components/RoomBar';
import { Box } from "@mui/system";

const StledBox = styled(Box)(() => ({
    paddingBottom: '120px',
    paddingTop: '60px',
}));

const StyledListItem = styled(ListItem)(() => ({
    height: '10vh',
    overflow: 'auto',
    position: 'fixed',
    maxWidth: '67.6%',
    display: 'flex',
    zIndex: '99',
    top: '90%',
    backgroundColor: '#fff',
}));

function MessagesComp({ remove, removeAll, messages }) {
    return (
        <>
            <RoomBar />
            <StledBox>
                {messages.map((messages, index) => (
                    <MessagesList 
                    onDelete={ remove } 
                    onDeleteAll={removeAll} 
                    key={index}
                    itsMe={messages.fromUserId === '1111'}
                    messages={[messages]} />
                ))}
            </StledBox> 
            <StyledListItem>
                <Form onAdd />
            </StyledListItem>  
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