import {
    Grid,
    GridProps,
    Avatar,
    AvatarProps,
    Box,
    Typography,
    TypographyProps,
    styled,
} from '@mui/material';
import { MessageItem } from './MessageItem';
import { SimpleDialogDemo } from '../../UI/SimpleDialog';

const StyledBox = styled(Box)<{ itsMe }>(({ itsMe }) => ({
    textAlign: itsMe ? 'right' : 'left',
  }));
  
  const StyledTypography = styled(Typography)<{ itsMe }>(({ theme, itsMe }) => ({
    display: 'inline-block',
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
    userId,
    messages,
    GridContainerProps,
    GridItemProps,
    AvatarProps,
    TypographyProps,
}) {
    return (
        // <div className="">
        //     {list.map((item, index) => (
        //         <div key={index} style={{display: 'flex', alignItems: 'center'}}>
        //             <MessageItem item={item} />  
        //             <SimpleDialogDemo onDeleteSingle={() => onDelete(item)} onDeleteAll={() => onDeleteAll()} />              
        //         </div>
        //     ))}
        // </div>
      <Grid
        container
        spacing={2}
        justifyContent={itsMe ? 'flex-end' : 'flex-start'}
        {...GridContainerProps}
      >
  
        <Grid item xs={8}>
          {list.map((msg, index) => (
            <StyledBox key={index} itsMe={!!itsMe}>
              <StyledTypography {...TypographyProps} itsMe={!!itsMe}>
                {msg}
              </StyledTypography>
            </StyledBox>
          ))}
        </Grid>
      </Grid>
    )
};