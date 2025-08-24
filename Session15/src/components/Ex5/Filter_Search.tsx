import React from 'react'

export const Filter_Search = () => {
  return (
    <div style={{display:"flex", gap:"2%", marginLeft:"auto", marginBottom:"2%"}}>
        <select name="sort" id="sort" style={{padding:"1.5%",borderRadius:"5px"}}>
            <option value="" selected disabled hidden>Sap xep theo tuoi</option>
        </select>
        <input type="search" style={{width:"280px", borderRadius:"5px", border:"1px solid gray"}} placeholder='Tim kiem tu khoa theo ten hoac email' name="" id="" />
    </div>
  )
}
