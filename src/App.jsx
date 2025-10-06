import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './Homepage'
import Header from './Navigation/Header'
import Footer from './Navigation/Footer'


const App = () => {
  return (
    <>
      <Router>
        <div>
          <Header/>
        <Routes>
          <Route path='/' element={<Homepage/>} />
        </Routes>
        <Footer/>
        </div>
      </Router>
    </>
  )
}

export default App