import { useContext, useEffect } from "react";
import { GlobalContext } from "../App";
import "../css/intro.css";

function EducationScreen() {
  const {
    value: { index },
    changeIndex
  } = useContext(GlobalContext);

  const handleChange=()=>{
    console.log("ehllo");
    changeIndex(0)
  }

  const handleKeyDown=(event)=>{
    if(event.code==="Backspace")
    {
      changeIndex(0)
    }

  }

  useEffect(()=>{
    document.addEventListener('keydown',handleKeyDown);

    return ()=>{
      // document.removeEventListener('keydown');
      document.removeEventListener("keydown",handleKeyDown);
    }


  },[]);

  return (
    <div  className={index === 2 ? "introDivAppear" : "introDiv"}>
      <h1 onClick={handleChange}>THIS IS THE Education SCREEN.</h1>
    </div>
  );
}

export default EducationScreen;
