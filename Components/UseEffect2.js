import { useEffect, useState } from "react";

const Ueffect2 = () => {
    const [widthcount,setWidth] = useState(window.screen.width);
    const actualWidth = () => {
        setWidth(window.innerWidth);
    }
    useEffect(() =>{
        window.addEventListener("resize",actualWidth)

     return () => {
          window.removeEventListener("resize",actualWidth);
     }
     },);
    return(
        <div>
            <h1>The Actual Screen Size is</h1>
            <h2>width:{widthcount}</h2>
            <h2>Height:{}</h2>
        </div>
    );
}
export default Ueffect2;