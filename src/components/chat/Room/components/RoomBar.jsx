import React from "react";
import { 
    Paper, 
    Box, 
    Grid, 
    ListItem, 
    Avatar, 
    Typography 
} from "@mui/material";
import { faker } from '@faker-js/faker';



export function RoomBar() {
    return (
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
                            <Typography>{faker.name.fullName()}</Typography>
                        </ListItem>
                    </Grid>
                </Grid>
            </Box>
        </Paper>
    )
};
