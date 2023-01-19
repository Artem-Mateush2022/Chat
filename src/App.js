import './App.css';
import Bar from './components/Chat';
import { Fragment } from 'react';
import Chat from './components/Chat';

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
