
import './App.css'
import React from 'react'
import { AddProblemComponent, LoginComponent, NavbarComponent, NotFoundComponent, NoteComponent, ProblemComponent } from './components';
import { Route, Routes } from 'react-router-dom';




function App() {
  return (
    <>
      <NavbarComponent />
      <AddProblemComponent />
    <Routes>
      <Route path='/' element={<ProblemComponent answer={false} />} />
      <Route path='/login' element={<><LoginComponent /> </>}/>
      <Route path='/test' element={<div>testpage</div>}/>
      <Route path='/note' element={<NoteComponent/>}/>
      <Route path='/problem' element={<div>problempage</div>}/>
      <Route path='*' element={<NotFoundComponent />}/>
     </Routes>
      </>
  );
}


export default App
