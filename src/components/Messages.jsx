import { ListItem } from "@mui/material";
import { connect } from "react-redux";
import "./ChatStyles.css";
//import Form from "./Form";
import { SimpleDialogDemo } from './UI/SimpleDialog'

function MessagesList({ list, onDelete, onDeleteAll }) {
    return (
        <div className="">
            {list.map((item, index) => (
                <div key={index} style={{display: 'flex', alignItems: 'center'}}>
                    <MessageItem item={item} />  
                    <SimpleDialogDemo onDeleteSingle={() => onDelete(item)} onDeleteAll={() => onDeleteAll()} />              
                </div>
            ))}
        </div>
    )
};

function MessageItem({ item, }) {
    return (
        <ListItem>
            <div className="right_message bg">
                {item.text}
                <div style={{fontSize: '12px',}}>{item.time}</div>
            </div>
        </ListItem>
    )
};

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