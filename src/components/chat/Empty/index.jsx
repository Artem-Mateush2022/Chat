import { Typography , styled} from '@mui/material';

const CastomTyporgraphy = styled(Typography)(({ theme }) => ({
  display: 'flex',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)', 
  fontSize: '20px',
  backgroundColor: 'rgba(0,0,0, 0.12)',
  padding: '3px 13px',
  borderRadius: '15px',
}));

export default function Empty() {
  return (
    <CastomTyporgraphy>
      Select a chat to start messaging
    </CastomTyporgraphy>
  );
};