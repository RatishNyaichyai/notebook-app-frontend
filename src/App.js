import './App.css';
import { Fragment } from 'react';
import { Route, Routes } from "react-router-dom"

import Register from './components/Register';
import Login from './components/Login';
import Homepage from './components/Homepage';

function App() {



  return (
    <Fragment>
      <Routes>
        <Route path='/' element={<Homepage />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>

    </Fragment>
  );
}

export default App;
