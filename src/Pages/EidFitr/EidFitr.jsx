import React from "react";
import EidPic from "../../assets/images/eidFitr.jpeg";
import EidAdab from "../../assets/images/Eid1.jpeg";

 
 const EidFitr = () => {
    return (
        <div>
          <p className="text-center text-5xl m-5  text-blue-700">Eid Mubarak!</p>
          <img src={EidPic} alt="" />  
          <img src={EidAdab} alt="" />
        </div>
    );
 };
 
 export default EidFitr;