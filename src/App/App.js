import React from 'react';
import './App.css';
import Home from '../Home/Home';
import Step from '../Step/Step';
import { Route, Link, BrowserRouter} from 'react-router-dom';
import { DesignContext } from '../utils/DesignContext';
import { v4 } from 'uuid';



function App() {

  const [id, setId] = React.useState(v4());
  const [intensity, setIntensity] = React.useState('');
  const [numberLamps, setNumberLamps] = React.useState('');

  const value = {
    id: id,
    intensity: intensity,
    numberLamps: numberLamps,
    setIntensity: setIntensity,
    setNumberLamps: setNumberLamps,
  }

  return (
    <div className="App">
      <DesignContext.Provider value={value}>
        <BrowserRouter>
          <Route path="/" exact component={Home} />
          <Route path="/design" component={Step} />
          <Route path="/design/:id?" component={Step} />
        </BrowserRouter>
      </DesignContext.Provider>
    </div>
  );
}

export default App;
