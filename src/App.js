import logo from './logo.svg';
import './App.css';
import './Navbar.css';
import Navbar from './Navbar';
import { useState, useEffect } from 'react';
import Emote from './Emote';

function App() {
  const [emotion, setEmotion] = useState("Happy");
  const [secondary, setSecondary] = useState("Tired");


  useEffect(() => {
    console.log("Emotion changed to " + emotion);
  }, [emotion]);


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
          secondary={secondary}
          setSecondary={setSecondary}
        />
      </header>
    </div>
  );
}

export default App;
