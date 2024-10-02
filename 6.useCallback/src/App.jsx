import { useCallback, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)
  const [adjective, setAdjective] = useState('good')

  // const getAdjective =()=>{
  //   return "another"
  // }

  // const getAdjective = useCallback(()=>{
  //   return "another"
  // },[])

  //here using getadjective function -> when the app rerender in javaScript the function will be change so when the function change props will be changed 
  //if props chnage(cause we use memo in navbar) then navbar rerender happens
  //to solve this problem we use callback, for this reason new function will not be created so props will not be chnaged as a result navbar will not be rerendering


  //   const getAdjective = useCallback(()=>{
  //   return "another"+count
  // },[])
  //for using callback function will not be changed for this reason navber will not be rerendering and another0 will fixed

  // const getAdjective =() =>{
  //   return "another" + count
  // } 
  //everytime funciton chnages so navbar rerendering everytime and antother changes


  //if we want when a particular state changes then function will be changed and [count] it's called dependencies

     const getAdjective = useCallback(()=>{
    return "another"+count
  },[count])

  return ( 
    <> 
    <Navbar adjective={"good"} getAdjective={getAdjective}/>
    
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
