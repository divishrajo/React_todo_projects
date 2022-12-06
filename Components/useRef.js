import { useRef, useState } from "react";
// import "./useRef.css";

const Uref = () => {
    const luckyman = useRef(null);
    const [show,setShow] = useState(false);
    const SubmitForm = (e) => {
           e.preventDefault();
         var name = luckyman.current.value;
         name=== "" ? alert("plz fill the data") : setShow(true);
        //  ref.current.value=" ";
         
    }
    return(
        <div className="login-box">
  <h2>Enter your lucky name</h2>
  <form action="" onSubmit={SubmitForm}>
    <div className="user-box">
    <input type="text" id="luckyman" ref={ luckyman }/>
    </div>
    <button>
      <span></span>
      <span></span>
      <span></span>

      <span></span>
      Submit
    </button>
  </form>
  <p>{show ? `your lucky name is ${luckyman.current.value}`: "" }</p>
</div>
);
}
          
        
export default Uref;






