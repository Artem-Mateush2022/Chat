import {
    Grid,
    Avatar,
    Box,
    Typography,
    styled,
} from '@mui/material';
import { MessageItem } from './MessageItem';
import { SimpleDialogDemo } from '../../UI/SimpleDialog';
import { faker } from '@faker-js/faker';
//import { UserAvatar, UserName } from '../shared/UserInfo';

const StyledAvatar = styled(Avatar)(({ theme }) => ({
    width: theme.spacing(4),
    height: theme.spacing(4),
  }));

const StyledBox = styled(Box)(({ itsMe }) => ({
    textAlign: itsMe ? 'right' : 'left',
  }));
  
  const StyledTypography = styled(Typography)(({ theme, itsMe }) => ({
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(0.5),
    padding: theme.spacing(1, 2),
    backgroundColor: itsMe ? theme.palette.primary.main : theme.palette.grey[100],
    borderRadius: theme.spacing(0.5),
    [itsMe ? 'borderTopLeftRadius' : 'borderTopRightRadius']: theme.spacing(2),
    [itsMe ? 'borderBottomLeftRadius' : 'borderBottomRightRadius']: theme.spacing(2),
    color: itsMe ? theme.palette.common.white : '',
    wordBreak: 'break-word',
  
    '*:first-child > &': {
      [itsMe ? 'borderTopRightRadius' : 'borderTopLeftRadius']: theme.spacing(2),
    },
  
    '*:last-child > &': {
      [itsMe ? 'borderBottomRightRadius' : 'borderBottomLeftRadius']: theme.spacing(2),
    },
  }));
  

export function MessagesList({ 
    list, 
    onDelete, 
    onDeleteAll,
    // --------------
    itsMe,
    messages,
    userId,
    GridContainerProps,
    GridItemProps,
    AvatarProps,
    TypographyProps,
}) {
    return (
      <Grid
        container
        spacing={2}
        justifyContent={itsMe ? 'flex-end' : 'flex-start'}
        {...GridContainerProps}
      >
        {!itsMe && (
        <Grid item {...GridItemProps}>
          {/* <UserAvatar userId={userId} />
          <UserName userId={userId} /> */}
          <StyledAvatar src={faker.image.avatar()} {...AvatarProps} />
        </Grid>
      )}
  
        <Grid item xs={8}>
          {messages.map((msg, index) => (
            <StyledBox key={index} itsMe={!!itsMe}>
              <StyledTypography {...TypographyProps} itsMe={!!itsMe}>
                <MessageItem item={msg} /> 
                <SimpleDialogDemo onDeleteSingle={() => onDelete(msg)} onDeleteAll={() => onDeleteAll()}/>  
              </StyledTypography>
            </StyledBox>
          ))}
        </Grid>
      </Grid>
    )
};