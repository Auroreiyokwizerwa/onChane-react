import './App.css';
import { useState } from 'react';

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const click1 = e => {
    setFirstName(e.target.value);
  }

  const click2 = e => {
    setLastName(e.target.value);
  }
  return (
    <>
      <form>
        <input type="text" value={firstName} placeholder="firstName" onChange={click1 }></input>

        <input type="text"  value={lastName} placeholder="lastName" onChange={click2 }></input>
        <h1>firstName:{firstName}</h1>
        <h1>lastName:{lastName}</h1>
      </form>
    </>
  );
}

export default App;
