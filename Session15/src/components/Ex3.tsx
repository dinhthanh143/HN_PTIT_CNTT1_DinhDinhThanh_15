import React, { useState } from 'react'

export const Ex3 = () => {
    const [date,setDate] = useState("")
    const [tempDate, setTemp] = useState("")
    const handleSubmit= (e: React.FormEvent) => {
        e.preventDefault()
        console.log(tempDate);
        setDate(tempDate)
    }
  return (
    <div>
        <form action="" style ={{display:"flex", flexDirection:"column", gap:"10px"}}>
            <label htmlFor="">Ngày sinh : {date}</label>
            <input type="date" name="" id="" value={tempDate}  onChange={(e) => setTemp(e.target.value)}/>
            <button style={{width:"50%"}} onClick={handleSubmit}>Submit</button>
        </form>
    </div>
 )
}
