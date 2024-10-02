import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)    //here count is state and setCount is such function that can update the value of count  and useState is a hook

  //hook -> Returns an array with two elements: the current state value and a function to update it.


// useState: Manages component state.
// useEffect: Performs side effects after render.
// useContext: Provides access to values from a context.
// useReducer: Provides a more complex state management solution.
// useRef: Provides a mutable reference to values.
// useCallback: Memoizes a callback function.
// useMemo: Memoizes a value.

  return (
    <>
       <div>The count is {count}</div>
       <button onClick={()=>{setCount(count+1)}}>Update count</button>
    </>
  )
}

export default App
