import './App.css';
import Chat from './components/chat/Main';
import { Fragment } from 'react';


function App() {
  return (
    <div className="App">
      <Fragment>
        <Chat />
      </Fragment>
    </div>
  );
}

export default App;
