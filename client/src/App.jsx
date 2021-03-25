import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Router} from '@reach/router';
import Main from './views/Main';
import Edit from './views/Edit';
import Create from './views/Create';


function App() {
  return (
    <div className="App">
      <h2>Favorite authors</h2>
      <Router>
        <Main path='/'/>
        <Edit path='/edit/:id'/>
        <Create path='/new'/>
      </Router>
    </div>
  );
}

export default App;
