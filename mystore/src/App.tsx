import { Link, Route, Router, Routes } from 'react-router-dom'
import './App.css'
import { LogoComponent } from './components/LogoComponent'





function App() {

  return (
    <div className='bg-gray-500'>
      <Router> {/* BrowserRouter로 감쌈 */}
      <Routes>
        <Route path="/" element={<LogoComponent />} />
        {/* 다른 라우트도 추가 가능 */}
      </Routes>
    </Router>
    </div>
  )
}

export default App
