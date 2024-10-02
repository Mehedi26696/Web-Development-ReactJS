import React ,{useEffect} from 'react'

const Navbar = ({color}) => {


//case 1: Run in evrey render

  useEffect(() => {
    alert("hey I will run on every render")
})

//case 2: Run only on first render
  useEffect(() => {
    alert("Hey welcome to my page.This is the first render")
  }, [])


//case 3: Run only  when certain state changed
useEffect(() => {
  alert("I am runing because color was changed")
}, [color])

//Example of Cleanup function

useEffect(() => {
  
    alert("Hey welcome to my page.This is the first render of app.jsx")
  return () => {
     alert("component was unmounted")
  }
}, [])

    
  return (
    <div>
      I am a {color} color navbar
    </div>
  )
}

export default Navbar
