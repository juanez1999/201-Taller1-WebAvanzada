import React from 'react';
import './App.css';
import Home from '../Home/Home';
import Step from '../Step/Step';
import { HashRouter, Route, Link} from 'react-router-dom';



function App() {
  return (
    <div className="App">
       <HashRouter>

       <Route path="/" exact component={Home} />
       <Route path="/design" component={Step} />
       <Route path="/design/:id?" component={Step} />


       </HashRouter>
    </div>
  );
}

export default App;
