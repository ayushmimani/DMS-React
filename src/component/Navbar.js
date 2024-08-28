import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-full h-10 bg-slate-100 '>
        <ul className='flex '>
        {/* <li className='m-1 cursor-pointer'>
          <Link to="/">Home</Link>
        </li> */}
        {/* <li className='m-1 cursor-pointer'><Link to="/">  Home</Link></li> */}
         
            {/* <Link to="/about"><li className='m-1 cursor-pointer'>About</li></Link>  
            <Link to="/contact">  <li className='m-1 cursor-pointer'>Contact</li></Link> */}
    
        </ul>
    </div>
  )
}

export default Navbar