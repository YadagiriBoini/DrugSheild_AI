import React from "react";

function Result({results}){

 return(

  <div>

   {results.map((r,i)=>(
    <div key={i} style={{border:"1px solid gray",margin:"10px",padding:"10px"}}>

     <h3>{r.drug1} + {r.drug2}</h3>

     <p><b>Severity:</b> {r.severity}</p>

     <p><b>Effect:</b> {r.effect}</p>

     <p><b>Advice:</b> {r.advice}</p>

    </div>
   ))}

  </div>

 )

}

export default Result