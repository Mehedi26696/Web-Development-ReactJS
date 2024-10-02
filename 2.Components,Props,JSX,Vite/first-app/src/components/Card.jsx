import React from 'react'
import "./Card.css"
const Cards = (props) => {
  return (
    <div className='card'>

      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <img src="https://cdn.vox-cdn.com/thumbor/OnzY3znz55vd7KkXT1iopZ0KQRo=/0x0:1287x1452/1200x800/filters:focal(538x432:742x636)/cdn.vox-cdn.com/uploads/chorus_image/image/71463282/1410155014.0.jpg" alt="" width={333}  style={{border: "2px solid black", borderRadius : "67px"}}/>
    </div>
  )
}

export default Cards
