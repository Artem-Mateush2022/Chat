
import ChatIcon from "@mui/icons-material/Chat";
import { Box, Grid, ListItem, Typography, AppBar, Toolbar, Avatar, Paper } from "@mui/material";
import { Fragment } from "react";
import '../styles/index';
import { Form } from '../Room/Form'
import { Messages }from "../Room/Messages.jsx";
import { ChatListRender } from './componets/ChatList';

import { faker } from '@faker-js/faker';


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
                <Grid item xs={3.3} boxShadow={6} ml={4} borderRadius={2} sx={{overflow: 'auto',height: '90vh'}}>
                    <ChatListRender />
                </Grid>

                {/*  ---------------------------- SPLIT --------------------------- */}
                {/*  ---------------------------- SPLIT --------------------------- */}
               
                <Grid item xs={8.3} id="chat-window" overflow="auto">

                    {/* ---------- Top bar ---------- */}

                    <Paper elevation={3} className="top_bar">
                        <Box p={3} padding="5">
                            <Grid container spacing={2} display="flex" alignItems="center">
                                <Grid item xs={1}>
                                    <ListItem>
                                        <Avatar alt="Remy Sharp" src={faker.image.avatar()} />
                                    </ListItem>
                                </Grid>
                                <Grid item xs={8}>
                                    <ListItem>
                                        <Typography>Remy Sharp</Typography>
                                    </ListItem>
                                </Grid>
                            </Grid>
                        </Box>
                    </Paper>
                    
                    {/* ---------- Page of messages ---------- */}

                    <Messages />


                    {/* ---------- Form and button ---------- */}

                    <ListItem id="chat-window-messages">
                        <Form onAdd />
                    </ListItem>                    
                </Grid>

            </Grid>
            {/* ----- Next page(Mesages) /------*/}

        </Fragment>
        

    )
}; 