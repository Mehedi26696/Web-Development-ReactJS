import Navbar from "./components/Navbar"

import Footer from "./components/Footer"

import Card from "./components/Card"

 

function App() {
   

  return (
    <>
      <Navbar/>
       
      <div className="cards">
          <Card title="card 1" description="It's card 1"/>
          <Card title="card 2" description="It's card 2"/>
          <Card title="card 3" description="It's card 3"/>
          <Card title="card 4" description="It's card 4"/>
      </div>
      <Footer/>
    </>
  )
}

export default App
