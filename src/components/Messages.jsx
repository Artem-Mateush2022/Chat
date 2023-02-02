import { Button, ListItem } from "@mui/material";
import { connect } from "react-redux";
import "./ChatStyles.css";
//import Form from "./Form";
import { SimpleDialogDemo } from './UI/SimpleDialog'

function MessagesList({ list }) {
    return (
        <div className="">
            {list.map((item, index) => (
                <MessageItem key={index} item={item} />                
            ))}
        </div>
    )
};

function MessageItem({ item, }) {
    return (
        <ListItem>
            <div className="right_message bg">
                <SimpleDialogDemo />
                {item.text}
                <div style={{fontSize: '12px',}}>{item.time}</div>
            </div>
        </ListItem>
    )
};

function MessagesComp({ items }) {
    return (
        <div className="message_wraper">
            <MessagesList list={items} />
        </div>  
    )
};

const mapState = state => ({
    items: state.list,
});


export const Messages = connect(mapState)(MessagesComp);