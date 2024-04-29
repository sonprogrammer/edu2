
import './App.css'
import React from 'react'
import { AddProblemComponent, NavbarComponent, ProblemComponent } from './components';



function App() {
  return (
    <>
      <NavbarComponent />
      <ProblemComponent />
      <AddProblemComponent />
    </>
  );
}


export default App
