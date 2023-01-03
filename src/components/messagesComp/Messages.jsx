import { ListItem, Typography } from "@mui/material";
import "../ChatStyles.css"

function Message({ message }) {
    return (
        <Typography>{message.text}<Typography fontSize={10}>15:44</Typography></Typography>
    )
}
const messages = [{ text: 'hello, test' }];

function Template() {
    return (
        <>
            {messages.map((m, i) => <Message key={i} message={m} />)}
        </>
    );
}

export default function Messages() {
    return (
        <div className="message_wraper">
            <ListItem>
                <div className="left_message bg"> <Template /> </div>
            </ListItem>
            <ListItem>
                <div className="right_message bg"> <Template /> </div>
            </ListItem>
            <ListItem>
                <div className="left_message bg"> How are you </div>
            </ListItem>
            <ListItem>
                <div className="right_message bg"> I'm good, senks </div>
            </ListItem>
            <ListItem>
                <div className="left_message bg"> How are you </div>
            </ListItem>
            <ListItem>
                <div className="right_message bg"> I'm good, senks </div>
            </ListItem>
            <ListItem>
                <div className="left_message bg"> How are you </div>
            </ListItem>
            <ListItem>
                <div className="right_message bg"> I'm good, senks </div>
            </ListItem>
            <ListItem>
                <div className="left_message bg"> How are you </div>
            </ListItem>
            <ListItem>
                <div className="right_message bg"> I'm good, senks </div>
            </ListItem>
            <ListItem>
                <div className="left_message bg"> How are you </div>
            </ListItem>
            <ListItem>
                <div className="right_message bg"> I'm good, senks </div>
            </ListItem>
            <ListItem>
                <div className="left_message bg"> How are you </div>
            </ListItem>
            <ListItem>
                <div className="right_message bg"> I'm good, senks </div>
            </ListItem>
            <ListItem>
                <div className="left_message bg"> How are you </div>
            </ListItem>
            <ListItem>
                <div className="right_message bg"> I'm good, senks </div>
            </ListItem>
            <ListItem>
                <div className="left_message bg"> How are you </div>
            </ListItem>
            <ListItem>
                <div className="right_message bg"> I'm good, senks </div>
            </ListItem>
            <ListItem>
                <div className="left_message bg"> How are you </div>
            </ListItem>
            <ListItem>
                <div className="right_message bg"> I'm good, senks </div>
            </ListItem>
            <ListItem>
                <div className="left_message bg"> How are you </div>
            </ListItem>
            <ListItem>
                <div className="right_message bg"> I'm good, senks </div>
            </ListItem>
            <ListItem>
                <div className="left_message bg"> How are you </div>
            </ListItem>
            <ListItem>
                <div className="right_message bg"> I'm good, senks </div>
            </ListItem>
        </div>
    )
}