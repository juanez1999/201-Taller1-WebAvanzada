import React from 'react';
import './App.css';
import Home from '../Home/Home';
import Step from '../Step/Step';
import { Route, Link, BrowserRouter} from 'react-router-dom';
import { DesignContext } from '../utils/DesignContext';
import { v4 } from 'uuid';
import { Design } from '../Design/Design'
 


function App() {

  const [id, setId] = React.useState(v4());
  const [priceTotal, setPriceTotal] = React.useState();

  const [ config, setConfig ] = React.useState({
    intensity: 1,
    numberLamps: ' ',
    color: '#ffffff',
  });

  const [list, setList] = React.useState([]);
  
  const value = {
    id: id,
    priceTotal: priceTotal,
    setPriceTotal: setPriceTotal,
    // intensity: intensity,
    // numberLamps: numberLamps,
    // setIntensity: setIntensity,
    // setNumberLamps: setNumberLamps,
    config: config,
    setConfig: setConfig,
    list: list,
    setList: setList,
  }

  return (
    <div className="App">
      <DesignContext.Provider value={value}>
        <BrowserRouter>
          <Route path="/diseño" render={()=>{
            return <Design color={config.color} id={id} intensity={config.intensity} numberLamps={config.numberLamps} /> 
          }}/>
          <Route path="/" exact component={Home} />
          <Route path="/diseño" component={Step} />
          <Route path="/diseño/:id?" component={Step} />
        </BrowserRouter>
      </DesignContext.Provider>
    </div>
  );
}

export default App;
