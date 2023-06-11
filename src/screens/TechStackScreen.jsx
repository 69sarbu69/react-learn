import { useContext, useEffect } from "react";
import { GlobalContext } from "../App";
import "../css/intro.css";

function TechStackScreen() {
  const {
    value: { index },
    changeIndex
  } = useContext(GlobalContext);

  const handleChange=()=>{
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
    <div  className={index === 4 ? "introDivAppear" : "introDiv"}>
      <h1 onClick={handleChange}>THIS IS THE TECH STACK SCREEN.</h1>
    </div>
  );
}

export default TechStackScreen;
