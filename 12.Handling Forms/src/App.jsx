import { useState } from 'react'
import { useForm } from 'react-hook-form'
import "./App.css"

function App() {
  const {
    register,
    handleSubmit,
    setError,
   
    formState: { errors , isSubmitting },
  } = useForm();
  const delay =(d)=>{
    return new Promise((resolve,reject)=>{
      setTimeout(() => {
        resolve()
      }, d*1000);
    })
  }
  const onSubmit = async(data) => {
    await delay(2) //simulating network delay
    console.log(data)
    if(data.username!=="mehedi")
    {
      setError("myform", {message: "Your username is invalid"})
    }
    if(data.username === "aurnob")
    {
      setError("blocked", {message: "Sorry this user is blocked"})
    }
  }
  return (
    <>
    {isSubmitting && <div>Loading...</div>}
      <div className="container">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <input className='border m-4' placeholder='username' {...register("username",{ required: {value: true, message:"This fill is required"} ,minLength: {value: 3, message: "Min Length is 3"}, maxLength: {value: 8, message: "Max Length is 8"} } )} type="text"  />
          {errors.username && <div className='text-red-700'>{errors.username.message}</div>}
          <br />
          <input className='border' placeholder='password' {...register("password",{minLength: {value: 7, message: "Min Length of password is 7"}})} type="password"/>
          {errors.password && <div className='text-red-700'>{errors.password.message}</div>}
          <br />
          <input disabled={isSubmitting} type="submit" value="Submit"/>
          {errors.myform && <div className='text-red-700'>{errors.myform.message}</div>}
          {errors.blocked && <div className='text-red-700'>{errors.blocked.message}</div>}

        </form>
      </div>
    </>
  )
}

export default App
