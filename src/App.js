import './App.css';
import { useState } from 'react';

function App() {


  // form
  const [title, setTitle] = useState('');
  const [color, setColor] = useState('');
  const submit = (e) => {
    e.preventDefault();
    alert(`${title}, ${color}`);
    setTitle('');
    setColor('000000');
  }
  // 
  return (
    <form onSubmit={submit}>
      <input
        value={title}
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        placeholder="color title..."
      />
      <input value={color}
        onChange={(e) => setColor(e.target.value)}
        type="color" />
      <button>ADD</button>
    </form>

  );
}

export default App;
