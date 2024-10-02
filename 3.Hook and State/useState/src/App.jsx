import { useState } from 'react'
import './App.css'

function App() {
  const [Count, setCount] = useState(15)

  const addvalue = () =>{
    console.log("clicked",Count)
     setCount(Count+1)
  }
  const removevalue = () =>{
    console.log("clicked",Count)
     setCount(Count-1)
  }

  return (
    <>
      <div className='flex flex-col justify-center items-center py-20'>
      <h1 >Counter-{Count}</h1>
      <button onClick={addvalue}>Add</button>
      <button onClick={removevalue}>Remove</button>
      </div>
    </>
  )
}

export default App
