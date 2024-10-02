import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

  return (
    <div>
      <nav>
        <NavLink className={(e)=>{ return e.isActive?"bg-red-600 text-white":""}} to='/'><li>Home</li> </NavLink>
        <NavLink className={(e)=>{return e.isActive?"bg-red-600 text-white":""}} to='/about'><li>About</li> </NavLink>
        <NavLink className={(e)=>{ return e.isActive?"bg-red-600 text-white":""}} to='/login'><li>Login</li> </NavLink>
      </nav>
    </div>
  )
}

export default Navbar
