import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card'

const Home = () => {
        const fetchBlogs = async ()=>{
        const response =  await axios.get("https://localhost:3000/blog")
        }

    useEffect(()=>{
        fetchBlogs()

    },[])
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