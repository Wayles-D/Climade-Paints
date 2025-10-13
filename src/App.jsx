import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './Homepage'
import Header from './Navigation/Header'
import Footer from './Navigation/Footer'
import About from './Pages/About'
import Services from './Pages/Services'


const App = () => {
  return (
    <>
      <Router>
        <div>
          <Header/>
        <Routes>
          <Route path='/' element={<Homepage/>} />
          <Route path='/About' element={<About/>} />
          <Route path='/Services' element={<Services/>} />
        </Routes>
        <Footer/>
        </div>
      </Router>
    </>
  )
}

export default App