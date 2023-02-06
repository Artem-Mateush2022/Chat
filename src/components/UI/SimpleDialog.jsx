import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { Divider } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

//const emails = ['username@gmail.com', 'user02@gmail.com'];


function SimpleDialog(props) {
  const { onClose, selectedValue, open, onDeleteSingle, onDeleteAll } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  const callOnDeleteSingle = () => {
    onDeleteSingle();
    handleListItemClick('addAccount');
  }

  const callOnDeleteAll = () => {
    onDeleteAll();
    handleListItemClick('addAccount');
  }

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Options</DialogTitle>
      <List sx={{ pt: 0 }}>
        <ListItem disableGutters>
          <ListItemButton
            autoFocus
            onClick={() => callOnDeleteSingle()}
          >
            <ListItemAvatar>
              <Avatar>
                <DeleteIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Delete current message" />
          </ListItemButton>
        </ListItem>
      </List>

      <Divider />

      <List sx={{ pt: 0 }}>
        <ListItem disableGutters>
          <ListItemButton
            autoFocus
            onClick={() => callOnDeleteAll()}
          >
            <ListItemAvatar>
              <Avatar>
                <DeleteForeverIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Delete all messages" />
          </ListItemButton>
        </ListItem>
      </List>
    </Dialog>
  );
}

export function SimpleDialogDemo({ onDeleteSingle, onDeleteAll }) {
  const [open, setOpen, ] = React.useState(false);
  //const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  // console.log(onDeleteSingle);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    //setSelectedValue(value);
  };

  return (
    <div>
      <span onClick={handleClickOpen} style={{cursor: 'pointer', display: 'inline-block', float: 'right', height: '15px', marginBottom: '5px'}}>
        ...
      </span>
      <SimpleDialog
        //selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
        onDeleteSingle={onDeleteSingle}
        onDeleteAll={onDeleteAll}
      />
    </div>
  );
}