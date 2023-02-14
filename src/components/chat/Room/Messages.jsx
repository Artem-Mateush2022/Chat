import { connect } from "react-redux";
import "../styles/index";
import { MessagesList } from './MessageList'


function MessagesComp({ items, remove, removeAll }) {
    return (
        <div className="message_wraper">
            <MessagesList list={items} onDelete={ remove } onDeleteAll={removeAll} />
        </div>  
    )
};

const mapState = state => ({
    items: state.list,
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