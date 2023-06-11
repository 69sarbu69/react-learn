import { useContext, useEffect } from "react";
import { GlobalContext } from "../App";
import "../css/intro.css";
// import { FaCrown } from "react-icons/fa";
import sarbagya from '../assets/sarbu.jpg';

function IntroScreen() {
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
    <>


     <div className="Intro_Top">
      <h1> सर्वज्ञ श्रेष्ठ  </h1>
      </div>
      
      <div>
   <svg width="426" height="227" viewBox="0 0 426 227" fill="none" xmlns="http://www.w3.org/2000/svg">
<path className="signature" d="M32 158C51.3945 132.022 67.1826 103.273 83.3333 75.2222C92.6642 59.0161 106.51 39.6414 108.833 20.2778C109.281 16.5432 110.356 8.91829 107 6C97.0859 -2.62098 78.3067 6.2209 70.2222 12.6667C54.8052 24.9586 41.3027 41.9118 33.4444 59.8889C27.7705 72.869 23.7789 85.0206 31.2222 98.6667C39.8197 114.429 58.7343 121.925 74.1111 128.778C85.3695 133.795 105.38 138.769 111.944 150.667C117.152 160.106 112.551 171.647 105.889 178.889C99.7759 185.533 92.6218 190.941 85.5556 196.5C77.7446 202.645 70.1196 211.688 60.3889 214.667C45.7838 219.138 25.9468 221.211 14.4444 209.444C0.0718479 194.741 -1.07997 169.064 7 150.778C9.25494 145.674 14.2686 147 19.0556 147C29.068 147 37.3788 152.268 44.2222 159.222C50.0368 165.131 54.7449 173.973 58.3333 181.389C61.3739 187.673 62.0071 194.927 65.9444 200.833C71.1273 208.608 73.6073 217.616 81.5556 223.444C85.3289 226.212 91.8532 225 96.2222 225C103.144 225 111.015 226.062 117.444 222.944C134.322 214.761 144.889 197.266 155.167 182.278C162.926 170.962 166 159.509 166 145.944C166 140.08 168.616 125.535 163.5 121.556C162.079 120.45 159.475 121.061 157.778 121C152.65 120.817 148.149 118.605 143.611 122.444C129.959 133.996 127.072 154.301 128 171C128.149 173.683 136.521 173.055 138.444 173C149.061 172.697 152.613 156.151 157.778 149C161.652 143.636 161.928 137.233 163.778 131.222C164.366 129.311 166 116.846 166 121.778C166 130.333 166 138.889 166 147.444C166 152.044 164.104 161 170.778 161C174.318 161 177.376 162.693 180.944 161.444C185.162 159.968 189.535 155.531 192 152C199.345 141.479 207.801 132.398 213.5 121C216.868 114.264 215.268 92.7417 203.056 99.6111C198.824 101.991 195 113.646 195 118.5C195 123.571 190.91 133.177 197 136.222C203.144 139.294 213.988 139.077 219.556 135.222C224.874 131.54 230.366 127.523 234.944 122.944C238.67 119.219 240.485 113.905 244 110C245.848 107.946 247.029 102.559 244.5 107.056C241.979 111.537 240.2 116.368 238 121C233.869 129.698 232 137.434 232 147C232 151.099 229.827 161 236 161C239.07 161 242.155 161.102 245.222 161C252.152 160.769 255.248 153.252 258 147.944C263.019 138.266 267.065 127.672 271.111 117.556C274.441 109.232 275.124 99.6251 278.944 91.6667C280.873 87.6486 279.871 82.5965 281 78.2222C282.635 71.8861 282.211 64.9546 283 58.4445C284.476 46.2666 285.745 31.7341 283.5 19.6111C283.148 17.7085 282.753 7.19919 280.333 12.6667C275.429 23.7478 274.397 32.5153 273.944 44.5C273.254 62.7865 271 80.6294 271 99C271 114.667 271 130.333 271 146C271 149.333 271 152.667 271 156C271 157.645 270 163.492 270 158.222C270 145.398 269.758 132.928 272.222 120.333C275.215 105.036 286.369 89 303 89C315.943 89 315 123.098 315 132C315 141.588 310.068 155.365 303.444 162.556C296.529 170.064 290.487 171 280.5 171C271.374 171 274 156.288 274 150.056C274 141.229 278.403 132.519 288.389 134.056C292.02 134.614 299.899 140.899 302.5 143.5C307.15 148.15 311.622 149.665 318.111 148.944C324.633 148.22 327.277 140.686 330.222 135.778C333.197 130.819 338.896 124.321 339.944 118.556C341.621 109.336 342 99.9857 342 90.6111C342 77.2945 340 96.0919 340 99.7778C340 107.333 340 114.889 340 122.444C340 130.354 339.696 138.319 340 146.222C340.114 149.189 344.812 148 346.944 148C351.205 148 354.4 144.99 357 141.778C363.271 134.031 367.863 126.228 370.222 116.556C372.87 105.698 375 95.1777 375 84C375 79.7593 375 75.5185 375 71.2778C375 68.8383 373.55 75.9444 373.056 78.3333C371.65 85.1266 371 91.0112 371 98.0556C371 104.914 368.69 116.384 372.056 122.556C374.672 127.352 381.786 127.448 386.5 127.944C394.481 128.785 399.521 127.13 403.5 120.056C407.738 112.522 422.114 106.406 424.5 98.0556" stroke="white" stroke-width="3" stroke-linecap="round"/>
</svg>
      </div>

      <div>
      <img className="photo" src={sarbagya} alt="logo"/>
      </div>

      <span className="Footertext">
        an aspiring <span className="bold">code</span>r and <span className="bold">music</span>ian 
      </span>

  </>   
  );

}

export default IntroScreen;