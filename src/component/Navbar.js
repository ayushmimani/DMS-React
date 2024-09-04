import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-full h-10 bg-slate-100 flex justify-between'>
        <ul className='flex '>
            <Link to="/"><li className='m-1 cursor-pointer'>Home</li></Link>
            <Link to="/about"><li className='m-1 cursor-pointer'>About</li></Link>  
            <Link to="/contact">  <li className='m-1 cursor-pointer'>Contact</li></Link>
        </ul>
        <form className='border  p-2 '>
            <input type='text' placeholder="serach..." className='border-black'/>
            <input type='submit' className='cursor-pointer border-gray-300'/>
        </form>
    </div>
  )
}

export default Navbar