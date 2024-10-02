import React from 'react'

const Card = (props) => {
    console.log(props)
  return (
    <div className='border border-slate-950 w-1/6'>
      <h1>{props.test}</h1>
      <h1>{props.someobj.username}</h1>
      <h1>{props.somearr[0]}</h1>
    </div>
  )
}

export default Card
