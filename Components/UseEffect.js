import { useEffect, useState } from "react";

const Ueffect = () => {
    const [count,setCount] = useState(0);
    useEffect(()=>{
        console.log("first time");
        if (count>0){
        document.title = `chats (${count})`;
        }
        else{
            document.title = "chats";
        }
    },);
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count+1)}>Click</button>
        </div>
    );
}
export default Ueffect;