import React from "react";
import DrugInput from "./DrugInput";

function App() {

 return (
  <div style={{textAlign:"center"}}>
   <h1>DrugShield AI</h1>
   <p>Detect harmful drug interactions</p>

   <DrugInput/>
  </div>
 );

}

export default App;