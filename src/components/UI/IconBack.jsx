import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Stack from '@mui/material/Stack';
import { NavLink } from 'react-router-dom';

export function IconBack() {
    return (
        <NavLink to={'/'}>
            <Stack direction="row" alignItems="center" spacing={2}>
                <IconButton color="primary" aria-label="upload picture" component="label">
                    <ArrowBackIosIcon />
                </IconButton>
            </Stack>
        </NavLink>
    );
};