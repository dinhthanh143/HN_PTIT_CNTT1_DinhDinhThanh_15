import React, { useState } from 'react'

export const Ex2 = () => {
    const [color, setColor] = useState("")
    const [tempColor, setTemp] = useState("")
    const handleSubmit  = (event : React.FormEvent) =>{
        event.preventDefault()
        setColor(tempColor)
    }

    // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>{

    // }
    
  return (
    <div>
        <span style={{fontSize:"20px"}}> <strong>Color: {color}</strong> </span>
        <form action="" style ={{display:"flex", flexDirection:"column", gap:"10px", marginRight:"auto"}}>
            <p>Màu sắc</p>
            <input type="color" name="" id="" value={tempColor} onChange={(e)=>{setTemp(e.target.value)}} />
            <button onClick={handleSubmit}>Submit</button>
        </form>
    </div>
  )
}
