import { useState } from 'react';
import './App.css';
import Character from './components/Character/Character';
import Controls from './components/Controls/Controls';

function App() {

  const [head, setHead] = useState('');
  const [torso, setTorso] = useState('');
  const [legs, setLegs] = useState('');

  return (
    <div className="App">

        <h1>Meme Designer</h1>
          <Controls head={head}
          setHead={setHead}
          torso={torso}
          setTorso={setTorso}
          legs={legs}
          setLegs={setLegs}
          />
          <Character head={head}/>

    </div>
  );
}

export default App;
