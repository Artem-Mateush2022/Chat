import { FormControl, TextField, IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { Fragment } from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { faker } from '@faker-js/faker'
import { store } from "../../../core/store/store";

function FormComp({ onAdd }) {
    const [value, setValue] = useState("");

    const addClickHandler = () => {
        if (!value) {
            return;
        };

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
};

export const messageReceive = store => next => action => {
    if (action.type === 'MESSAGES_RECEIVE') {
        setTimeout(() => {
            store.dispatch({
                type: 'MESSAGES_RECEIVE',
                payload: faker.lorem.text(),
            })
        }, 2000)
        setTimeout(() => {
            store.dispatch({
                type: 'MESSAGES_RECEIVE',
                payload: faker.lorem.text(),
            })
        }, 3000)
    }
    next(action);
}

const mapDispatch = (d) => ({
    onAdd: (text) => d((dispatch) => {
        dispatch({
            type: 'ADD_ITEM',
            payload: text,
        })

        // messageReceive();
        // setTimeout(() => {
        //     dispatch({
        //         type: 'MESSAGES_RECEIVE',
        //         payload: faker.lorem.text(),
        //     })
        // }, 2000)
        // setTimeout(() => {
        //     dispatch({
        //         type: 'MESSAGES_RECEIVE',
        //         payload: faker.lorem.text(),
        //     })
        // }, 3000)
    })

})

export const Form = connect(null, mapDispatch)(FormComp);




