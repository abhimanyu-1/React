import React from 'react'
import './Header.css'
import {useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  const nav = ()=>{
    navigate('/')
  }
  return (
    <div className='Heading'>
    <h1 onClick={nav}>Dogs & Cat</h1>
    <div className='btn'><a href='#'>Logout</a></div>
    </div>
  )
}

export default Header
