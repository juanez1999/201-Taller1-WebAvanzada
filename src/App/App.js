import React from 'react';
import './App.css';
import Home from '../Home/Home';
import Step from '../Step/Step';
import { Route, Link, BrowserRouter} from 'react-router-dom';
import { DesignContext } from '../utils/DesignContext';
import { v4 } from 'uuid';
import { Design } from '../Design/Design'
import { lamps } from '../config/lamps';
import { ilumination } from '../config/ilumination';
import Gallery from '../Gallery/Gallery';
import { Room } from '../Room/Room';
import NavBar from '../NavBar/NavBar';
import { floor } from '../config/floor';

function App() {

  const [id, setId] = React.useState(' ');

  const [ config, setConfig ] = React.useState({
    intensity: 1,
    numberLamps: ' ',
    color: '#ffffff',
    texture: ' ',
  });

  const [list, setList] = React.useState([]);

  const priceLamps = lamps.find((e) => e.value == config.numberLamps)?.cost || 0;
  const priceIlumination = ilumination.find((e) => e.value == config.intensity)?.cost || 0;
  const priceFloor = floor.find((e) => e.value == config.texture)?.cost || 0;
  const priceTotal = priceLamps + priceIlumination + priceFloor;

  React.useEffect(()=>{
    const listString = localStorage.getItem('list');
    if(listString !== null){
      setList(JSON.parse(listString));
    }
  }, []);

  React.useEffect(()=>{
    localStorage.setItem('list', JSON.stringify(list));
  },[ list ]);

  const handleDelete = () => {
    setList([]);
  }

  const handleRoomDelete = (id) => {
    const index = list.findIndex((elem)=>{
      return elem.id === id;
    });

    setList([
      ...list.slice(0, index),
      ...list.slice(index+1),
    ]);
  }

  const handleFinish = () =>{
    setList([
      ...list,
      {
          id: id,
          priceTotal: priceTotal,
          intensity: config.intensity,
          numberLamps: config.numberLamps,
          color: config.color,
          texture: config.texture
      }
    ]);
    setConfig({
        intensity: 1,
        numberLamps: ' ',
        color: '#ffffff',
        texture: ' ',
    });
  }
  
  const value = {
    id: id,
    setId: setId,
    priceTotal: priceTotal,
    config: config,
    setConfig: setConfig,
    list: list,
    setList: setList,
    handleFinish,
    handleDelete,
    handleRoomDelete,
  }

  return (
    <div className="App">
      <DesignContext.Provider value={value}>
        <BrowserRouter>
          <Route path="/diseño" render={()=>{
            return <Design color={config.color} id={id} intensity={config.intensity} numberLamps={config.numberLamps} /> 
          }}/>
          <Route path="/" exact component={Home} />
          <Route path="/diseño/:id?" render={(props)=>{
            return <div className="Design">
              <NavBar route={props.match.params.id}></NavBar>
              <Room id={id} priceTotal={priceTotal} intensity={config.intensity} numberLamps={config.numberLamps} color={config.color} texture={config.texture} /> 
              <Step match={props.match} />
            </div>
          }} />
          <Route path="/Galeria" component={Gallery} />
        </BrowserRouter>
      </DesignContext.Provider>
    </div>
  );
}

export default App;
