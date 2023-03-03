import React from "react";
import { 
    Paper, 
    Box, 
    Grid, 
    ListItem, 
    Avatar, 
    Typography,
    styled, 
} from "@mui/material";
import { faker } from '@faker-js/faker';
import { useParams } from "react-router-dom";

import { IconBack } from '../../../UI/IconBack';

const OwnPaper = styled(Paper)(() => ({
    width: '67.6%',
    position: 'fixed',
    backgroundColor: '#fff',
    opacity: '1',
    zIndex: '999',
    marginTop: '-8px',
}))

export function RoomBar() {
    const { roomId } = useParams();
    return (
        <OwnPaper elevation={3}>
            <Box p={3} padding="5">
                <Grid container spacing={5} display="flex" alignItems="center">  
                    <Grid item xs={1}>
                        <ListItem>
                            <IconBack />
                            <Avatar alt="Remy Sharp" src={faker.image.avatar()} sx={{marginLeft: '5px'}} />
                        </ListItem>
                    </Grid>
                    <Grid item xs={8} sx={{marginLeft: '20px'}}>
                        <ListItem>
                            <Typography>{faker.name.fullName()}</Typography>
                        </ListItem>
                        RoomId: {roomId}
                    </Grid>
                </Grid>
            </Box>
        </OwnPaper>
    )
};
