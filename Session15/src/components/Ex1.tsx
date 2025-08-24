import React, { useState } from 'react'

export const Ex1 = () => {
    const [email,setEmail] = useState("")
    const handleSubmit = (event : React.FormEvent)=>{
      event.preventDefault()
      console.log(email);
    }
  return (
    <div >
        <form action="" style ={{display:"flex", flexDirection:"column", gap:"10px"}}>
            <span><strong>Form</strong></span>
            <label htmlFor="">Email</label>
            <input type="text" value={email} onChange={(e)=> setEmail(e.target.value)} />
            <button style={{width:"40%"}} onClick={handleSubmit}>Submit</button>
        </form>
    </div>
  )
}
