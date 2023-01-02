import { Message } from '@mui/icons-material';
import './App.css';
import Bar from './components/chatComp/Chat';
//import Messages from './components/chatComp/Chat';
import { Fragment } from 'react';
import Chat from './components/chatComp/Chat';

function App() {
  return (
    <div className="App">
      <Fragment>
        <Bar />
        <Chat />
      </Fragment>
      
    </div>
  );
}

export default App;
