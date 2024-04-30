
import './App.css'
import React from 'react'
import { AddProblemComponent, LoginComponent, NavbarComponent, NotFoundComponent, NoteComponent, ProblemComponent } from './components';
import { Route, Routes } from 'react-router-dom';
import TestPage from './pages/TestPage/TestPage';
import RegisterPage from './pages/SignUpPage/SignUpPage';




function App() {
  return (
    <>
      <NavbarComponent />
      <AddProblemComponent />
    <Routes>
      <Route path='/' element={<ProblemComponent answer={false} />} />
      <Route path='/login' element={<><LoginComponent /> </>}/>
      <Route path='/signup' element={<><RegisterPage /> </>}/>
      <Route path='/test' element={<TestPage>testpage</TestPage>}/>
      <Route path='/note' element={<NoteComponent/>}/>
      <Route path='/problem' element={<div>problempage</div>}/>
      <Route path='*' element={<NotFoundComponent />}/>
     </Routes>
      </>
  );
}


export default App
