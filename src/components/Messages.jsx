import { ListItem } from "@mui/material";
import { connect } from "react-redux";
import "./ChatStyles.css";
//import Form from "./Form";

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

function MessagesComp({ items }) {
    return (
        <div>
            <div className="message_wraper">
                <MessagesList list={items} />
            </div>
        </div>
        
    )
};

const mapState = state => ({
    items: state.list,
});


export const Messages = connect(mapState)(MessagesComp);