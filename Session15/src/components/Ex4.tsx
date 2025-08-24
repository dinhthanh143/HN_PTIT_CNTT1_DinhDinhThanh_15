import React, { useState } from "react";

export const Ex4 = () => {
  const [progress, setProgress] = useState("")
  const [temp, setTemp] = useState("");
  const handleSubmit = (e:React.FormEvent) =>{
    e.preventDefault()
    setProgress(temp)
    
  }
  return (
    <div>
      <form
        action=""
        style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <span>Tien do hoan thanh: {progress} %</span>
        <input type="range" name="" id="" value={temp} onChange={(e) => setTemp(e.target.value)} />
        <button style={{ width: "50%" }} onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};
