
import './App.css';
import Pin from './components/Pin';
import { useState } from 'react';

function App() {
  const [pinInput,setPinInput]=useState("");
  // const [isValid,setIsValid]=useState(true)
  return (
    <div className="App">
     <Pin len={4}
     setPinInput={setPinInput} />
     <h4>THE VALUE OF OTP IS {pinInput}</h4>
    </div>
  );
}

export default App;
