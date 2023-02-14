import { ListItem } from "@mui/material";
import { MessagesList } from './MessageList';


// Here make message items ( <Message />...)

export function MessageItem({ item }) {
    return (
        <ListItem>
            <div className="right_message bg">
                {item.text}
                <div style={{fontSize: '12px',}}>{item.time}</div>
            </div>
            <MessagesList itsMe />
        </ListItem>
    )
};