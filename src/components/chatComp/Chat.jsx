
import ChatIcon from "@mui/icons-material/Chat";
import { Avatar, Badge, Box, Grid, ListItem, Typography, AppBar, Toolbar } from "@mui/material";
import { Fragment } from "react";
import "./MessagesChat.css"
import "../foms/Form"
import Form from "../foms/Form";
import ListMessages from "../listMessages/ListMessages";

export default function Messages() {
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
                <Grid item xs={4} boxShadow={6} ml={4} borderRadius={2} overflow="auto">
                    <ListItem flexbox alignItems={"center"}>
                        <Grid container spacing={3}>
                            <Grid item xs>
                                <ListItem>
                                    <Badge overlap="circular" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} variant="dot">
                                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                    </Badge>
                                </ListItem>
                            </Grid>
                            <Grid item xs={6}>
                                <ListItem>
                                    <Typography variant="h6">
                                        Andre Smith
                                    </Typography>
                                </ListItem>
                            </Grid>
                            <Grid item xs>
                                <ListItem>
                                    <Typography fontSize={12}>12:55</Typography>
                                </ListItem>
                            </Grid>
                        </Grid>
                    </ListItem>

                    {/* ----------------------------------------------------------------------------- */}


                    <ListItem flexbox alignItems={"center"}>
                        <Grid container spacing={3}>
                            <Grid item xs>
                                <ListItem>
                                    <Badge overlap="circular" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} variant="dot">
                                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                    </Badge>
                                </ListItem>
                            </Grid>
                            <Grid item xs={6}>
                                <ListItem>
                                    <Typography variant="h6">
                                        Andre Smith
                                    </Typography>
                                </ListItem>
                            </Grid>
                            <Grid item xs>
                                <ListItem>
                                    <Typography fontSize={12}>12:55</Typography>
                                </ListItem>
                            </Grid>
                        </Grid>
                    </ListItem>

                    {/* ----------------------------------------------------------------------------- */}


                    <ListItem flexbox alignItems={"center"}>
                        <Grid container spacing={3}>
                            <Grid item xs>
                                <ListItem>
                                    <Badge overlap="circular" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} variant="dot">
                                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                    </Badge>
                                </ListItem>
                            </Grid>
                            <Grid item xs={6}>
                                <ListItem>
                                    <Typography variant="h6">
                                        Andre Smith
                                    </Typography>
                                </ListItem>
                            </Grid>
                            <Grid item xs>
                                <ListItem>
                                    <Typography fontSize={12}>12:55</Typography>
                                </ListItem>
                            </Grid>
                        </Grid>
                    </ListItem>

                    {/* ----------------------------------------------------------------------------- */}


                    <ListItem flexbox alignItems={"center"}>
                        <Grid container spacing={3}>
                            <Grid item xs>
                                <ListItem>
                                    <Badge overlap="circular" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} variant="dot">
                                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                    </Badge>
                                </ListItem>
                            </Grid>
                            <Grid item xs={6}>
                                <ListItem>
                                    <Typography variant="h6">
                                        Andre Smith
                                    </Typography>
                                </ListItem>
                            </Grid>
                            <Grid item xs>
                                <ListItem>
                                    <Typography fontSize={12}>12:55</Typography>
                                </ListItem>
                            </Grid>
                        </Grid>
                    </ListItem>


                    {/* ----------------------------------------------------------------------------- */}


                    <ListItem flexbox alignItems={"center"}>
                        <Grid container spacing={3}>
                            <Grid item xs>
                                <ListItem>
                                    <Badge overlap="circular" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} variant="dot">
                                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                    </Badge>
                                </ListItem>
                            </Grid>
                            <Grid item xs={6}>
                                <ListItem>
                                    <Typography variant="h6">
                                        Andre Smith
                                    </Typography>
                                </ListItem>
                            </Grid>
                            <Grid item xs>
                                <ListItem>
                                    <Typography fontSize={12}>12:55</Typography>
                                </ListItem>
                            </Grid>
                        </Grid>
                    </ListItem>

                    {/* ----------------------------------------------------------------------------- */}


                    <ListItem flexbox alignItems={"center"}>
                        <Grid container spacing={3}>
                            <Grid item xs>
                                <ListItem>
                                    <Badge overlap="circular" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} variant="dot">
                                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                    </Badge>
                                </ListItem>
                            </Grid>
                            <Grid item xs={6}>
                                <ListItem>
                                    <Typography variant="h6">
                                        Andre Smith
                                    </Typography>
                                </ListItem>
                            </Grid>
                            <Grid item xs>
                                <ListItem>
                                    <Typography fontSize={12}>12:55</Typography>
                                </ListItem>
                            </Grid>
                        </Grid>
                    </ListItem>

                    {/* ----------------------------------------------------------------------------- */}


                    <ListItem flexbox alignItems={"center"}>
                        <Grid container spacing={3}>
                            <Grid item xs>
                                <ListItem>
                                    <Badge overlap="circular" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} variant="dot">
                                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                    </Badge>
                                </ListItem>
                            </Grid>
                            <Grid item xs={6}>
                                <ListItem>
                                    <Typography variant="h6">
                                        Andre Smith
                                    </Typography>
                                </ListItem>
                            </Grid>
                            <Grid item xs>
                                <ListItem>
                                    <Typography fontSize={12}>12:55</Typography>
                                </ListItem>
                            </Grid>
                        </Grid>
                    </ListItem>
                </Grid>

                {/*  ---------------------------- SPLIT --------------------------- */}
                {/*  ---------------------------- SPLIT --------------------------- */}
               

              

                <Grid item xs={7.5} id="chat-window" overflow="auto">
                    {/* ---------- Page of messages ---------- */}

                    <ListMessages></ListMessages>

                    {/* ---------- Page of messages /---------- */}


                    {/* ---------- Form and button ---------- */}
                    <ListItem id="chat-window-messages">
                        <Form></Form>
                    </ListItem>
                    {/* ---------- Form and button /---------- */}

                </Grid>

            </Grid>
            {/* ----- Next page(Mesages) /------*/}

        </Fragment>
        

    )
}