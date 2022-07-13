import logo from './logo.svg';
import './App.css';
import './Navbar.css';
import Navbar from './Navbar';
import { useState } from 'react';
import Emote from './Emote';

function App() {
  const [emotion, setEmotion] = useState("Happy");
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Navbar
          option1="About"
          option2="Services"
          option3="Contact"
          option4="Login"
        />
        <Emote
          emotion={emotion}
          setEmotion={setEmotion}
        />
      </header>
    </div>
  );
}

export default App;
