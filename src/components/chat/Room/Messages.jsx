import { connect } from "react-redux";
import "../styles/index";
import { MessagesList } from './MessageList'


function MessagesComp({ items, remove, removeAll, messages }) {
    return (
        <div className="message_wraper">
            {/* <MessagesList list={items} onDelete={ remove } onDeleteAll={removeAll} messages={['hello', 'how are you?']} />
            <MessagesList list={items} onDelete={ remove } onDeleteAll={removeAll} itsMe messages={['hi!', 'i"m good.']} /> 
*/}
            <MessagesList onDelete={ remove } onDeleteAll={removeAll} messages={messages} />
            <MessagesList onDelete={ remove } onDeleteAll={removeAll} itsMe messages={messages} />
            {/* <MessagesList onDelete={ remove } onDeleteAll={removeAll} messages={['Whatsup',]} />
            <MessagesList onDelete={ remove } onDeleteAll={removeAll} itsMe messages={['hi!', 'i"m good.', 'how are you?']} />
            <MessagesList onDelete={ remove } onDeleteAll={removeAll} messages={['I\'m good','Senks', 'Today I\'m watched Mazda rx-8 for buying', 'but this car don\'t have good condition']} /> */}
        </div>  
    )
};

const mapState = state => ({
    //items: state.list,
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