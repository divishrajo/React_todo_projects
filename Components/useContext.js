import { createContext } from "react";
import CompoB from "./Components/CompoC";
const Biodata = createContext();
const CompoA = () => {
    return(
        <Biodata.Provider value={"Hello This is CompoA"}>
             <CompoB />
        </Biodata.Provider>
    );
}
export default CompoA
export {Biodata} ;