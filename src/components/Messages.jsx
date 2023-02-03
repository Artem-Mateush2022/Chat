import { Button, ListItem } from "@mui/material";
import { connect } from "react-redux";
import "./ChatStyles.css";
//import Form from "./Form";
import { SimpleDialogDemo } from './UI/SimpleDialog'

function MessagesList({ list, onDelete }) {
    return (
        <div className="">
            {list.map((item, index) => (
                <div key={index} style={{display: 'flex', alignItems: 'center'}}>
                    <MessageItem item={item} />  
                    <button onClick={() => onDelete(item)}>x</button>
                    <SimpleDialogDemo onClick={() => onDelete(item)} />              
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

function MessagesComp({ items, remove }) {
    return (
        <div className="message_wraper">
            <MessagesList list={items} onDelete={ remove } />
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
    })
});


export const Messages = connect(mapState, mapDispatch)(MessagesComp);