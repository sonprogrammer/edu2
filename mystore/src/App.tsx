import { Link, Route, Router, Routes } from 'react-router-dom'
import './App.css'
import { useState } from 'react'
import { CartPage, LayoutPage, MainPage, MyPage } from './pages'
import { DetailComponet } from './components'





function App() {



  return (
    <div className='flex justify-center '>
      <Routes>
        <Route element={<LayoutPage />}>
          <Route path='/' element={<MainPage />} />
          <Route path='/mypage' element={<MyPage />} />
          <Route path='/detail/:id' element={<DetailComponet />} />
          <Route path='/cart' element={<CartPage />} />
        </Route>
      </Routes>

    </div>
  )
}

export default App
