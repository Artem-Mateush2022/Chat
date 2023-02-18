import { connect } from "react-redux";
import "../styles/index";
import { MessagesList } from './MessageList'


function MessagesComp({ remove, removeAll, messages }) {
    return (
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


export const Messages = connect(mapState, mapDispatch)(MessagesComp);