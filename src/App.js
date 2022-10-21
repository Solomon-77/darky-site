import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Main from './components/Main'
import Photos from './components/Photos'
import About from './components/About'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/photos/' element={<Photos/>}/>
          <Route path='/about/' element={<About/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App