import React, { useState } from "react";


const App=() => {
  const [Name,setName] = useState("2name");
  const Change = () => {
    (Name=="2name"? setName("1stname") : setName("2name"))
            //or
    // if(Name=="2nd name"){
    //  setName("1st name");
    // }
    // else{
    //   setName("2nd name");
    // }

  }
      return(
        <div>
          <h1>{Name}</h1>
          <button onClick={Change}>Click Here</button>
        </div>
      );
}
export default App; 