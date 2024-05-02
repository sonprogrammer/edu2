
import './App.css'
import React, { Suspense } from 'react'
import { LoginComponent, NotFoundComponent, NoteComponent, ProblemComponent } from './components';
import { Route, Routes } from 'react-router-dom';
import TestPage from './pages/TestPage/TestPage';
import RegisterPage from './pages/SignUpPage/SignUpPage';
import { LoginPage, MainPage, MakeProblemPage } from './pages';
// import { LandingPage } from './pages/LandingPage';




function App() {
  return (
    <>
      {/* <NavbarComponent /> */}
      {/* <AddProblemComponent /> */}

      <Routes>
        {/* <Route path='/' element={<LandingPage />}/> */}
        {/* <Route element={<PrivateRoute />}></Route>  --> 이건 나중에 인증된 회원들만 들어갈 수있게 하는거라 나중에 감싸야함 landgin페이지 제외하고*/}
        <Route path='*' element={
          <Suspense fallback={<div></div>}>
            <NotFoundComponent />
          </Suspense>
        }
        />
        <Route path='/' element={
          <Suspense fallback={<div></div>}>
            <MainPage />
          </Suspense>
        }>
          {/* <Route element={<Suspense fallback={<div></div>}><MainPage /></Suspense>}> </Route> */}
          <Route path='/login' element={
            <Suspense fallback={<div></div>}>
              <LoginPage />
            </Suspense>
          } />
          <Route path='/signup' element={
            <Suspense fallback={<div></div>}>
              <RegisterPage />
            </Suspense>
          } />
          <Route path='/test' element={
            <Suspense fallback={<div></div>}>
              <TestPage />
            </Suspense>
          } />
          <Route path='/note' element={
            <Suspense fallback={<div></div>}>
              <NoteComponent />
            </Suspense>
          } />
          <Route path='/problem' element={
            <Suspense fallback={<div></div>}>
              <MakeProblemPage />
            </Suspense>
          } />
        </Route>
      </Routes>
    </>
  );
}


export default App
