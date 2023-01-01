import { FormControl, TextField, IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { Fragment } from "react";

export default function Form() {
    return (
        <Fragment>
            <FormControl fullWidth>
            <TextField
                // value={user} 
                label="Type your message"
                variant="outlined" />
            </FormControl><IconButton
                aria-label="send"
                color="primary">
                    <SendIcon />
            </IconButton>
        </Fragment>
        
    )
}
