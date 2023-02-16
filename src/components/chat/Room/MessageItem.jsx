import { ListItem } from "@mui/material";
import { MessagesList } from './MessageList';


// Here make message items ( <Message />...)

export function MessageItem({ item }) {
    return (
        <ListItem>
            <div>
                {item.text}
                <div style={{fontSize: '12px', position: 'relative', top: '10px', left: '5px'}}>{item.time}</div>
            </div>
        </ListItem>
    )
};