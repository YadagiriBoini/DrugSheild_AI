import React, { useState } from "react";
import { checkDrugs } from "./api";
import Result from "./Result";

function DrugInput(){

 const [input,setInput] = useState("")
 const [results,setResults] = useState([])

 const handleCheck = async ()=>{

  const drugs = input.split(",").map(d=>d.trim())

  const data = await checkDrugs(drugs)

  setResults(data)
 }

 return(

  <div>

   <input
    placeholder="Enter medicines separated by comma"
    value={input}
    onChange={(e)=>setInput(e.target.value)}
    style={{width:"400px",padding:"10px"}}
   />

   <br/><br/>

   <button onClick={handleCheck}>
    Check Interaction
   </button>

   <Result results={results}/>

  </div>

 )

}

export default DrugInput