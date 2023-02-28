import { Typography , styled} from '@mui/material';

const CastomTyporgraphy = styled(Typography)(({ theme }) => ({
  display: 'inline-block',
  position: 'relative',
  top: '50%',
  left: '35%', 
  fontSize: '18px',
  backgroundColor: 'silver',
  padding: '3px',
  borderRadius: '10px'
}));

export default function Empty() {
  return (
    <CastomTyporgraphy>
      Select a chat to start messaging
    </CastomTyporgraphy>
  );
};