
import ChatIcon from "@mui/icons-material/Chat";
import { Box, Grid, ListItem, Typography, AppBar, Toolbar } from "@mui/material";
import { Fragment } from "react";
import "../messagesComp/MessagesChat.css"
import "../foms/Form"
import Form from "../foms/Form";
import ListMessages from "../listMessages/ListMessages";
import Messages from "../messagesComp/Messages.jsx";

export default function Chat() {
    return (
        // ----- App bar-- 
        <Fragment>
            <Box mb={4}>
                <AppBar position="fixed">
                    <Toolbar>
                        <Box mr={1} mt={1}>
                            <ChatIcon fontSize={"large"} />
                        </Box>
                        <Typography variant="h6">
                            Messenger
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>

            {/* ----- Next page(Mesages) ------*/}

            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={3.3} boxShadow={6} ml={4} borderRadius={2} overflow="auto">
                    <ListMessages></ListMessages>
                </Grid>

                {/*  ---------------------------- SPLIT --------------------------- */}
                {/*  ---------------------------- SPLIT --------------------------- */}
               

              

                <Grid item xs={8.3} id="chat-window" overflow="auto">
                    {/* ---------- Page of messages ---------- */}

                    <Messages></Messages>


                    {/* ---------- Form and button ---------- */}

                    <ListItem id="chat-window-messages">
                        <Form></Form>
                    </ListItem>

                </Grid>

            </Grid>
            {/* ----- Next page(Mesages) /------*/}

        </Fragment>
        

    )
}