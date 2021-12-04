import { useState } from 'react';
import './App.css';
import Character from './components/Character/Character';
import CatchPhrase from './components/Controls/CatchPhrase';
import Controls from './components/Controls/Controls';
import Display from './components/Display/Display';

function App() {

  const [head, setHead] = useState('Fry');
  const [torso, setTorso] = useState('Aladdin');
  const [legs, setLegs] = useState('SkateObama');
  const [newCatchphrase, setNewCatchphrase] = useState('');
  const [allCatchphrases, setAllCatchphrases] = useState([]);

  const handleClick = () => {
    setAllCatchphrases((previousCatches) => [...previousCatches, newCatchphrase])
  }

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
          <CatchPhrase newCatchphrase={newCatchphrase}
          setNewCatchphrase={setNewCatchphrase}
          handleClick={handleClick} />
          <Display allCatchphrases={allCatchphrases} />
          <Character head={head}
          torso={torso}
          legs={legs}
          />

    </div>
  );
}

export default App;
