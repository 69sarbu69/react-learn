import { useContext } from "react";
import BottomChooseFields from "../../components/BottomChooseFields";
import "../css/home.css";
import { FaCrown } from "react-icons/fa";
import { GlobalContext } from "../App";
import golden from "../assets/king.png"
const HomeScreen = () => {
    const {value:{changed}}=useContext(GlobalContext);
  return (
    <>
      <div className={!changed? `Home_Inner_Comp`: `Home_Inner_Comp_Changed`}>
        <div className="Home_Top">
          <FaCrown size={81} color="#FFD700"/>
          {/* <img className="king" src={golden} alt="king"/> */}
        </div>
       
       {/* <div>
        <img className="Home_Top_2" src={golden} alt="golden"/>>
       </div> */}

        <div className="Home_Center">
          <h1 className="MainName">सर्वज्ञ श्रेष्ठ </h1>
          <h4>I CAN DO ANYTHING I SET MY MIND TO</h4>
        </div>
        <BottomChooseFields />
        <div className="footer">
          <span>© DESIGNED BY : SARBAGYA SHRESTHA</span>
        </div>
      </div>

    </>
  );
};

export default HomeScreen;
