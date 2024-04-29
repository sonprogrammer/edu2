
import './App.css'
import React from 'react'
import { AddProblemComponent, NavbarComponent, ProblemComponent } from './components';
import { Route, Routes } from 'react-router-dom';
import { NotFoundComponent } from './components/NotFoundComponent';



function App() {
  return (
    <>
      <NavbarComponent />
      <AddProblemComponent />
    <Routes>
      <Route path='/' element={<ProblemComponent answer={false} />} />
      <Route path='/login' element={<div>loginpage</div>}/>
      <Route path='/test' element={<div>testpage</div>}/>
      <Route path='*' element={<NotFoundComponent />}/>
     </Routes>
      </>
  );
}


export default App
