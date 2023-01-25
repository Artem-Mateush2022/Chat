import { ListItem } from "@mui/material";
import { connect } from "react-redux";
import "./ChatStyles.css";
import Form from "./Form";

function MessagesList({ list }) {
    return (
        <div className="">
            {list.map((item, index) => (
                <MessageItem key={index} item={item} />
            ))}
        </div>
    )
};

function MessageItem({ item }) {
    return (
        <ListItem>
            <div className="left_message bg">{item.text}</div>
        </ListItem>
    )
};

function MessagesComp({ items, addItem }) {
    return (
        <div className="message_wraper">
            <MessagesList list={items} />
            <Form onAdd={addItem} />
        </div>
    )
};

const mapState = state => ({
    items: state.list,
});

const mapDispatch = (dispatch) => ({
    addItem: (text) => dispatch({
        type: 'ADD_ITEM',
        payload: text
    })
});

export const Messages = connect(mapState, mapDispatch)(MessagesComp);