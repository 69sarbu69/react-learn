import { useContext, useEffect } from "react";
import { GlobalContext } from "../App";
import "../css/intro.css";
import { FaCrown } from "react-icons/fa";
import sarbagya from '../assets/sarbu.jpg';
import yugal from '../assets/yugey.jpg'
import rockstar from '../assets/rock.png'

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
      {/* <h1> सर्वज्ञ श्रेष्ठ  </h1> */}
     {/* <h1> युगल परियार   </h1>  */}
     <h1> Yugal Pariyar </h1>


      </div>
      
      <div className="Sign">
   {/* <svg width="426" height="227" viewBox="0 0 426 227" fill="none" xmlns="http://www.w3.org/2000/svg">
<path className="signature" d="M32 158C51.3945 132.022 67.1826 103.273 83.3333 75.2222C92.6642 59.0161 106.51 39.6414 108.833 20.2778C109.281 16.5432 110.356 8.91829 107 6C97.0859 -2.62098 78.3067 6.2209 70.2222 12.6667C54.8052 24.9586 41.3027 41.9118 33.4444 59.8889C27.7705 72.869 23.7789 85.0206 31.2222 98.6667C39.8197 114.429 58.7343 121.925 74.1111 128.778C85.3695 133.795 105.38 138.769 111.944 150.667C117.152 160.106 112.551 171.647 105.889 178.889C99.7759 185.533 92.6218 190.941 85.5556 196.5C77.7446 202.645 70.1196 211.688 60.3889 214.667C45.7838 219.138 25.9468 221.211 14.4444 209.444C0.0718479 194.741 -1.07997 169.064 7 150.778C9.25494 145.674 14.2686 147 19.0556 147C29.068 147 37.3788 152.268 44.2222 159.222C50.0368 165.131 54.7449 173.973 58.3333 181.389C61.3739 187.673 62.0071 194.927 65.9444 200.833C71.1273 208.608 73.6073 217.616 81.5556 223.444C85.3289 226.212 91.8532 225 96.2222 225C103.144 225 111.015 226.062 117.444 222.944C134.322 214.761 144.889 197.266 155.167 182.278C162.926 170.962 166 159.509 166 145.944C166 140.08 168.616 125.535 163.5 121.556C162.079 120.45 159.475 121.061 157.778 121C152.65 120.817 148.149 118.605 143.611 122.444C129.959 133.996 127.072 154.301 128 171C128.149 173.683 136.521 173.055 138.444 173C149.061 172.697 152.613 156.151 157.778 149C161.652 143.636 161.928 137.233 163.778 131.222C164.366 129.311 166 116.846 166 121.778C166 130.333 166 138.889 166 147.444C166 152.044 164.104 161 170.778 161C174.318 161 177.376 162.693 180.944 161.444C185.162 159.968 189.535 155.531 192 152C199.345 141.479 207.801 132.398 213.5 121C216.868 114.264 215.268 92.7417 203.056 99.6111C198.824 101.991 195 113.646 195 118.5C195 123.571 190.91 133.177 197 136.222C203.144 139.294 213.988 139.077 219.556 135.222C224.874 131.54 230.366 127.523 234.944 122.944C238.67 119.219 240.485 113.905 244 110C245.848 107.946 247.029 102.559 244.5 107.056C241.979 111.537 240.2 116.368 238 121C233.869 129.698 232 137.434 232 147C232 151.099 229.827 161 236 161C239.07 161 242.155 161.102 245.222 161C252.152 160.769 255.248 153.252 258 147.944C263.019 138.266 267.065 127.672 271.111 117.556C274.441 109.232 275.124 99.6251 278.944 91.6667C280.873 87.6486 279.871 82.5965 281 78.2222C282.635 71.8861 282.211 64.9546 283 58.4445C284.476 46.2666 285.745 31.7341 283.5 19.6111C283.148 17.7085 282.753 7.19919 280.333 12.6667C275.429 23.7478 274.397 32.5153 273.944 44.5C273.254 62.7865 271 80.6294 271 99C271 114.667 271 130.333 271 146C271 149.333 271 152.667 271 156C271 157.645 270 163.492 270 158.222C270 145.398 269.758 132.928 272.222 120.333C275.215 105.036 286.369 89 303 89C315.943 89 315 123.098 315 132C315 141.588 310.068 155.365 303.444 162.556C296.529 170.064 290.487 171 280.5 171C271.374 171 274 156.288 274 150.056C274 141.229 278.403 132.519 288.389 134.056C292.02 134.614 299.899 140.899 302.5 143.5C307.15 148.15 311.622 149.665 318.111 148.944C324.633 148.22 327.277 140.686 330.222 135.778C333.197 130.819 338.896 124.321 339.944 118.556C341.621 109.336 342 99.9857 342 90.6111C342 77.2945 340 96.0919 340 99.7778C340 107.333 340 114.889 340 122.444C340 130.354 339.696 138.319 340 146.222C340.114 149.189 344.812 148 346.944 148C351.205 148 354.4 144.99 357 141.778C363.271 134.031 367.863 126.228 370.222 116.556C372.87 105.698 375 95.1777 375 84C375 79.7593 375 75.5185 375 71.2778C375 68.8383 373.55 75.9444 373.056 78.3333C371.65 85.1266 371 91.0112 371 98.0556C371 104.914 368.69 116.384 372.056 122.556C374.672 127.352 381.786 127.448 386.5 127.944C394.481 128.785 399.521 127.13 403.5 120.056C407.738 112.522 422.114 106.406 424.5 98.0556" stroke="white" stroke-width="3" stroke-linecap="round"/>
</svg> */}
 <svg width="430" height="283"  viewBox="0 0 361 327" fill="none" xmlns="http://www.w3.org/2000/svg">
<path className="signature" d="M3.00003 151C0.873964 172.526 0.40115 194.263 18.7778 208.556C31.1335 218.166 43.1768 205.475 47 194.222C51.5319 180.883 56 164.18 56 150C56 148.76 53.9526 141.619 53.2222 143.444C51.8576 146.856 55.1249 153.8 56 157C58.3002 165.412 59.4953 174.155 62.2222 182.444C65.8156 193.368 72.7573 202.703 76.7778 213.444C80.254 222.732 83.74 231.974 87.3334 241.222C95.8741 263.204 106.701 299.752 85.8889 318.333C80.1246 323.48 74.7442 325.468 67.2223 324.778C57.9478 323.927 53.2246 316.271 48 309.222C33.7403 289.983 34.742 262.221 37.3334 239.667C39.2898 222.638 43.7812 205.967 50 190C54.2054 179.202 57.4699 167.177 64.7778 158C66.808 155.45 81.418 131.093 82.8889 133.667C84.7506 136.925 82.8649 145.029 83.1111 148.722C83.5068 154.657 86.2621 160.031 86.9445 165.944C87.7588 173.002 88.9227 179.638 91 186.389C91.9974 189.63 94.5949 189 97.4445 189C104.752 189 107.073 185.865 111.556 179.889C119.91 168.75 124 154.889 124 141C124 134.807 125.862 125.426 123.444 119.556C121.885 115.768 121.111 122.707 121.111 123.611C121.111 127.212 121.649 131.115 122.556 134.611C124.468 141.988 127.667 147.523 133 153C142.911 163.179 151.389 169.174 165.222 161C184.327 149.711 198 128.461 198 106.222C198 94.2942 187.756 92.4375 177.444 94.2222C163.691 96.6026 154.852 115.44 164.056 126.944C168.588 132.61 175.497 135 182.5 135C192.572 135 198.049 129.679 202.389 121C205.659 114.46 206.708 106.921 205.944 99.6667C205.81 98.3851 204.847 96.2201 203.556 95.6667C202.676 95.2897 204.01 109.024 204.111 109.667C208.855 139.824 224.432 166.111 232.444 195.333C236.396 209.743 235.891 229.555 229.611 243.222C227.018 248.866 223.84 254.018 218.333 257.056C190.738 272.281 177.643 226.756 177.056 207.667C175.977 172.627 198.032 149.728 217 123C226.415 109.734 237.325 98.0884 245.444 83.9445C247.553 80.2719 248.918 76.612 250 72.5556C251.901 65.427 242.366 85.1826 238.556 91.5C232.916 100.85 229 108.6 229 119.778C229 135.383 252.729 134.004 261.222 125.333C267.558 118.865 272.144 110.876 272 101.778C271.863 93.1477 266.648 87.1776 262.222 80.2222C256.855 71.7878 258.719 86.3497 261 90C265.156 96.6503 269.428 102.428 275 108C277.885 110.885 281.866 117 286.222 117C295.426 117 300.056 106.722 304.389 99.5C318.818 75.4523 310.655 47.1634 299.333 23.8333C297.097 19.2245 292.151 3.53347 285.5 2.05556C277.159 0.202099 280.332 16.8901 280.556 20.5556C281.689 39.1765 287.725 56.4254 292.389 74.3889C295.474 86.2717 302.106 93.1575 313.833 96.8889C319.476 98.6842 328.874 99.2641 334.5 97.3889C348.172 92.8317 354.053 74.8738 359 63" stroke="#FFFBFB" stroke-width="3" stroke-linecap="round"/>

</svg>
{/* <svg width="430" height="283" viewBox="0 0 430 283" fill="none" xmlns="http://www.w3.org/2000/svg">
<path className="signature" d="M2 238C32.482 207.518 61.6441 175.566 82.7778 137.611C94.604 116.372 102.795 92.4404 106.833 68.5C109.328 53.7111 111 38.6529 111.667 23.6667C111.877 18.9476 112.636 11.1468 110.389 6.38888C108.524 2.44006 103.485 1.94583 99.6667 1.99999C86.8496 2.1818 76.4032 9.41906 67.5556 18.2222C59.3733 26.3634 51.6751 37.5242 48.8889 48.8889C45.7881 61.5369 50.347 76.307 53.7778 88.3333C68.7445 140.797 120.821 191.642 98.5 249.556C92.1263 266.093 75.7432 276.072 58.3889 276.889C47.4491 277.404 35.7726 277.098 26.8333 269.889C17.6909 262.516 13.4652 249.429 11.7222 238.167C10.4647 230.041 10.9932 221.489 13.1111 213.556C14.8539 207.027 17.6154 196.829 22.6667 191.778C32.1841 182.26 49.6117 186.612 57.8889 194.889C64.456 201.456 68.8836 208.565 73.6111 216.444C79.3994 226.092 86.9462 234.453 92.3333 244.389C98.3365 255.461 105.194 263.756 112.944 273.444C118.902 280.891 124.424 281.281 133.778 281C151.038 280.482 162.385 260.531 166.222 245.889C170.941 227.882 174 208.745 174 190.111C174 181.628 173.512 171.478 165 167.222C142.952 156.198 131.544 191.571 129.611 206.389C128.44 215.371 128.582 224.918 129.778 233.889C130.473 239.099 130.128 239.889 136 240C141.88 240.111 146.566 241.765 152 238.444C158.392 234.538 163.603 226.125 166 219.333C169.75 208.708 171.744 194.227 169.444 183.056C168.961 180.707 168.581 177.385 167.5 175.222C167.386 174.995 167 183.19 167 184.333C167 194.258 168 204.121 168 214C168 217.654 169.679 221.252 173.444 222.556C180.089 224.856 192.951 226.007 197.944 220.389C207.845 209.251 212.826 195.951 214.5 181.556C215.643 171.725 215.157 161.553 215 151.667C214.948 148.404 213.164 142.416 209 142C195.414 140.641 196 158.19 196 168.222C196 176.456 209.766 172.388 215.444 173.056C217.816 173.335 217.541 190.093 218.778 193.556C220.918 199.549 222.629 207.363 229.222 210C255.474 220.501 263.654 178.494 265.944 161.889C268.078 146.424 268.644 128.371 264.944 113.111C263.026 105.198 261.082 96.9556 258.056 89.3889C257.883 88.9565 253.961 81.2983 253.556 82.1667C251.266 87.072 252.97 96.1866 253 101.444C253.048 109.981 254.128 118.201 255 126.667C256.536 141.572 257.537 156.824 261 171.444C262.904 179.485 265.372 186.558 270 193.5C271.843 196.265 275.413 204.517 278.5 205.889C282.687 207.75 289.066 187.468 290 184.222C292.725 174.755 293 165.002 293 155.222C293 152.968 291.079 142.099 291 148.111C290.941 152.625 289.584 157.532 290.222 162C290.665 165.097 292.254 167.915 292.778 171C293.499 175.245 292.152 181.401 297.556 182.944C302.412 184.332 304.919 179.105 307.222 175.778C314.348 165.485 320.557 147.611 321 134.778C321.099 131.916 321 133.727 321 135.833C321 142.678 321.393 149.459 322.5 156.222C323.66 163.311 326.408 169.873 327.056 177C327.772 184.885 339.468 192.716 346.944 189.444C351.879 187.286 356.924 178.311 358.556 173.778C361.975 164.28 360.9 149.198 359.778 139.222C359.734 138.829 357.822 132.741 357.667 133C356.322 135.241 360.742 144.828 361.5 147.333C363.785 154.891 368.252 164.252 373.944 169.944C381.134 177.134 390.385 179.712 400.444 177.778C408.677 176.195 415.608 164.845 419 158.111C425.046 146.106 428 132.419 428 119" stroke="#FFFBFB" stroke-width="3" stroke-linecap="round"/>
</svg> */}

      </div>

      <div>
      <img className="photo" src={yugal} alt="logo"/>
      </div>

      <span className="Footertext">
        i love <span className="bold">coding</span> and your <span className="bold">mom</span>o.
      </span>

  </>   
  );

}

export default IntroScreen;

