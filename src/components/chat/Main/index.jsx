
import { Fragment } from "react";
import ChatIcon from "@mui/icons-material/Chat";
import { Box, Grid, ListItem, Typography, AppBar, Toolbar, Avatar, Paper } from "@mui/material";
import { Outlet } from 'react-router-dom';

import '../styles/index';
import { Messages } from "../Room/index.jsx";
import { ChatListRender } from './components/ChatList';


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

                    
                    
                    {/* ---------- Page of messages ---------- */}

                    {/* <Messages /> */}
                    <Outlet />
                </Grid>
            </Grid>
        </Fragment>
    )
}; 