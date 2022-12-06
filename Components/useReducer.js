import { useReducer } from "react";
import "./useReducer.css";
import counter from "../images/counter.jpg";
import { Radio } from "@mui/material";

const initialstate = 0;
const reducer = (state,action) => {
    if(action.type=== "Increment"){
        return state+1;
    }
    if (action.type==="Decrement") {
        return state-1;
    }
     else     
    {
       return state=0;
    }

}
const Ureducer = () => {
    const [state,dispatch] = useReducer(reducer,initialstate);
    return(
         <div id="reduce"> 
            <div className="ForReducer" >
                <p className="ForReducerno">{state}</p>
                <button className="Forbtn1" onClick={() => dispatch({type : "Increment"})}>Increment</button><br />
                <button className="Forbtn2" onClick={() => dispatch({type: "Decrement"})}>Decrement</button><br/>
                {/* <radio className="Forbtn3" onClick={()=> dispatch({type:"Reset"})}></radio> */}
                <input  className="Forradiobtn" type="radio" name="reset" onClick={()=> dispatch({type:"Reset"})}></input>
            </div>
         </div>
         
     
    );
      
}
export default Ureducer;