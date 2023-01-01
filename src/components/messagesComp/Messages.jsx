import { Avatar, Badge, Box, FormControl, Grid, IconButton, List, ListItem, TextField, Typography, } from "@mui/material";
import { flexbox } from "@mui/system";
import { Container } from "@mui/system";
import { Fragment } from "react";
import SendIcon from "@mui/icons-material/Send";
import "./MessagesChat.css"

export default function Messages() {
    return (
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
            {/*  ---------------------------- SPLIT --------------------------- */}
            {/*  ---------------------------- SPLIT --------------------------- */}

            <Grid item xs={7.5} id="chat-window" overflow="auto">
                <div className="message_wraper">
                    <ListItem>
                        <div className="left_message bg"> Hi </div>
                    </ListItem>
                    <ListItem>

                    <div className="right_message bg"> Hi </div>
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
                
                <ListItem id="chat-window-messages">

                    <FormControl fullWidth>
                        <TextField
                            // value={user} 
                            label="Type your message"
                            variant="outlined" />
                    </FormControl>
                    <IconButton
                        aria-label="send"
                        color="primary">
                        <SendIcon />
                    </IconButton>
                </ListItem>
                
            </Grid>
            
        </Grid>

    )
}