import React from 'react'
import Header from '../components/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer'

export default function Layout() {
  return (
    <div className='min-h-screen flex flex-col'>
    <Header/>
    <div className='flex-grow'><Outlet/></div>
     <Footer/>
    </div>
  )
}
