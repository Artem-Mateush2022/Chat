import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import { Avatar, Typography} from '@mui/material';


import { faker } from '@faker-js/faker'
import styled from "styled-components";
import { Box } from '@mui/system';

const LastMessageText = styled(Typography)(({ theme }) => ({
    overflow: 'hidden', 
    whiteSpace: 'nowrap', 
    textOverflow: 'ellipsis',
    ...theme.typography.body2,
}));


export function ChatItem({ chatInfo }) {
    return(
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper',}}>
            <ListItem alignItems="flex-start" sx={{cursor: 'pointer'}}>
                <ListItemAvatar>
                    <Avatar alt={chatInfo.name} src={faker.image.avatar()} />
                </ListItemAvatar>
                <ListItemText
                    sx={{fontSize: '50px'}}
                    primary={
                        <React.Fragment>
                            <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center',}}>
                                <Typography sx={{overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', fontSize: 18}}>{chatInfo.userName}</Typography>
                                <Typography sx={{fontSize: 13, color: 'text.primary'}}>{chatInfo.sendTime}</Typography>
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
                        <Typography sx={{overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis',}}>
                            {chatInfo.lastMessage}
                        </Typography>
                    </React.Fragment>} />
            </ListItem>
            <Divider variant="inset" component="li" />
        </List> 
    )
}