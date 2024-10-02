import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
 // const [name, setname] = useState("Mehedi");

 const [form, setform] = useState({email: "",phone:""})

  const handleclick = () => {
    alert("I am clicked");
  };

  const handlemouseover = () => {
    alert("I am a mouse over");
  };

  const handlechange = (e) =>{
    //setname(e.target.value) 
    setform({...form, [e.target.name]:e.target.value})
    console.log(form);
    
  }

  return (
    <>
      <div className="button">
        <button onClick={handleclick}>Click Me</button>
      </div>
      {/* <div className="red" onMouseOver={handlemouseover}>
        I am a red dev
      </div> */}
      {/* <input type="text" value={name} onChange={handlechange} /> */}
      <input type="text" name='email' value={form.email?form.email:""} onChange={handlechange} />
      <input type="text" name='phone' value={form.phone?form.phone:""} onChange={handlechange} />
    </>
  );
}

export default App;
