import React from 'react'
import { memo } from 'react'

const Navbar = ({adjective,getAdjective}) => {
    console.log("Navbar is render.....")
  return (
    <div>
      I am a {adjective} navbar
      <button onClick={()=>{getAdjective()}}>{getAdjective()}</button>
    </div>
  )
}

export default memo(Navbar)


//using memo the Navbar rerendering happens only when props change