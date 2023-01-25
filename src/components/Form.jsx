import { FormControl, TextField, IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { Fragment } from "react";
import { useState } from "react";

export default function Form({ onAdd }) {
    const [value, setValue] = useState("");

    const addClickHandler = () => {
        if (!value) {
            return;
        }

        onAdd(value);
        setValue("");
    };
    return (
        <Fragment>
            <FormControl fullWidth>
                <TextField
                label="Type your message"
                variant="outlined"
                value={value}
                onChange={e => setValue(e.target.value)} 
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        addClickHandler();
                    }
                }}
                />
            </FormControl>
            <IconButton
                aria-label="send"
                color="primary"
                onClick={addClickHandler}>
                <SendIcon />
            </IconButton>
        </Fragment>
    )
}

