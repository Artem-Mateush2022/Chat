import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import { Avatar, Typography, Link} from '@mui/material';
import styled from "styled-components";
import { Box } from '@mui/system';
import { NavLink, useParams } from 'react-router-dom';

const LastMessageText = styled(Typography)(({ theme }) => ({
    overflow: 'hidden', 
    whiteSpace: 'nowrap', 
    textOverflow: 'ellipsis',
    // ...theme.typography.body2,
}));

export function ChatItem({ chatInfo }) {
    return(
        <NavLink to={'/roomId'} style={{textDecoration: 'none', color: 'inherit'}}>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper',}}>
                <ListItem alignItems="flex-start" sx={{cursor: 'pointer'}}>
                    <ListItemAvatar>
                        <Avatar alt={chatInfo.userName} src={chatInfo.avatar} />
                    </ListItemAvatar>
                    <ListItemText
                        sx={{fontSize: '50px'}}
                        primary={
                            <React.Fragment>
                                <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center',}}>
                                    <Typography sx={{overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', fontSize: 18, textDecoration: 'none'}}>{chatInfo.userName}</Typography>
                                    <Typography sx={{fontSize: 13, color: 'text.primary',}}>{chatInfo.sendTime}</Typography>
                                </Box>
                            </React.Fragment>
                        }
                        
                        secondary={<React.Fragment>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                            </Typography>
                            <LastMessageText>
                                {chatInfo.lastMessage}
                            </LastMessageText>
                        </React.Fragment>}
                    />
                </ListItem>
                <Divider variant="inset" component="li" />
            </List>
        </NavLink>
    )
};