import logo from './logo.svg';
import './App.css';
import Bar from './components/chatComp/Chat';
import Messages from './components/chatComp/Chat';
import { Fragment } from 'react';

function App() {
  return (
    <div className="App">
      <Fragment>
        <Bar />
        <Messages />
      </Fragment>
      
    </div>
  );
}

export default App;
