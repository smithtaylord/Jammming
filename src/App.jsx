import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'




export function App() {

  return (
    <div className="App" id="app">
      <header className='sticky-top'>
        <Navbar />
      </header>

      <main>
        <Outlet />
      </main>


    </div>
  )
}
