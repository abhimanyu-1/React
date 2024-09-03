import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Home from '../Home/Home'
import Details from '../Details/Details'

function RouteLayout() {
  return (

    <Router>
        <Header/>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/details/:id' element={<Details/>}></Route>
        </Routes>
        <Footer/>
    </Router>
  )
}

export default RouteLayout