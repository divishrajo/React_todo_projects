import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
 import App from "./Components/UseState";
import Ueffect from './Components/UseEffect';
import Ueffect2 from './Components/UseEffect2';
import Uref from "./Components/useRef";
import Ureducer from "./Components/useReducer";
import CompoC from "./Components/CompoB";
import Sass from "./Sass/Sassmain";
import Mui from "./materialui/1";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Ueffect />  */}
    {/* <Ueffect2 /> */}
    {/* <Uref /> */}
    {/* <Ureducer /> */}
    <CompoC />
    {/* <Sass /> */}
    {/* <Mui /> */}
  </React.StrictMode>
);


