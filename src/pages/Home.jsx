import React from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card'

const Home = () => {
  return (
    <>
    <Navbar/>
    <div className='flex flex-wrap'>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    </div>
    </>
  )
}

export default Home