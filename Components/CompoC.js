import { Biodata } from "./useContext";
import { useContext } from "react";
const CompoC = ({ name }) => {
    const Channelname = useContext(Biodata);
    console.log(Channelname);
    return(
        <h1>Hello This is from {Channelname} </h1>
    );
}
export default CompoC;

 