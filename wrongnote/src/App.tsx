
import './App.css'
import React, { Suspense } from 'react'
import { AddProblemComponent, LoginComponent, NavbarComponent, NotFoundComponent, NoteComponent, ProblemComponent } from './components';
import { Route, Routes } from 'react-router-dom';
import TestPage from './pages/TestPage/TestPage';
import RegisterPage from './pages/SignUpPage/SignUpPage';
import { AddProblemPage, MainPage } from './pages';
import { LandingPage } from './pages/LandingPage';




function App() {
  return (
    <>
      {/* <NavbarComponent /> */}
      {/* <AddProblemComponent /> */}

    <Routes>
      {/* <Route path='/' element={<LandingPage />}/> */}
    {/* <Route element={<PrivateRoute />}></Route>  --> 이건 나중에 인증된 회원들만 들어갈 수있게 하는거라 나중에 감싸야함 landgin페이지 제외하고*/}
      <Route path='*' element={<NotFoundComponent />}/>
      <Route path='/' element={<MainPage />}>
      {/* <Route element={<Suspense fallback={<div></div>}><MainPage /></Suspense>}> </Route> */}
      <Route path='/login' element={<><LoginComponent /> </>}/>
      <Route path='/signup' element={<><RegisterPage /> </>}/>
      <Route path='/test' element={<TestPage />}/>
      <Route path='/note' element={<NoteComponent/>}/>
      <Route path='/problem' element={<AddProblemPage />}/>
      </Route>
     </Routes>
      </>
  );
}


export default App
