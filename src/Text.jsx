import React, { useState } from "react";

function Text() {
  
  const [textInput, setTextInput] = useState("");
  
  return (
    <div> Enter your pet's name: 
      <input type="text" className="textbox" onChange={(e) => setTextInput(e.target.value)} /><br/><br/><br/><br/>
      <p>Look at your beautiful {textInput} ! </p>
      <p> Select its levels and watch the evolution.</p>
    </div>
  );
}

export default Text;