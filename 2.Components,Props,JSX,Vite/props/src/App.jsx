import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [Count, setCount] = useState(15)
  
  let myobj={
    username:"Mehedi",
    reg: 22435364
  }

  let arr = [5,7,8,3]
  

  return (
    <>
      <div className='flex flex-col justify-center items-center py-20'>
      <h1>Now you Learn About props</h1>
      <Card test="okay" someobj = {myobj} somearr = {arr} />
      </div>
      
    </>
  )
}

export default App
