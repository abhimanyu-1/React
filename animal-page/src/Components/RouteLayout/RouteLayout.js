import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Dog from '../Dog/Dog'
import Details from '../Details/Details'
import Home from '../Cat/Home/Home'
import CatDetails from '../Cat/Details/CatDetails'
import Main from '../Home/Main'

function RouteLayout() {
  return (

    <Router>
        <Header/>
        <Routes>
            <Route path='/' element={<Main/>}></Route>
            <Route path='/dog' element={<Dog/>}></Route>
            <Route path='/details/:id' element={<Details/>}></Route>
            <Route path='/cat' element={<Home/>}></Route>
            <Route path='/catdetails/:id' element={<CatDetails/>}></Route>
        </Routes>
        <Footer/>
    </Router>
  )
}

export default RouteLayout