import  { useContext } from 'react'
import { GlobalContext } from '../src/App';

function BottomChooseFields() {
     const {
    value: { index },
    changeIndex,
  } = useContext(GlobalContext);
  return (
    <div className="Home_Intro">
    <span
      onClick={() => changeIndex(1)}
      className={index === 1 ? `Home_Intro_Selected` : ""}
      style={{ borderTopLeftRadius: 10, borderBottomLeftRadius: 10 }}
    >
      intro
    </span>
    <span
      onClick={() => changeIndex(2)}
      className={index === 2 ? `Home_Intro_Selected` : ""}
      style={{ borderLeft: 0 }}
    >
      education
    </span>
    <span
      onClick={() => changeIndex(3)}
      className={index === 3? `Home_Intro_Selected` : ""}
      style={{ borderLeft: 0 }}
    >
      projects
    </span>
    <span
      onClick={() => changeIndex(4)}
      className={index === 4 ? `Home_Intro_Selected` : ""}
      style={{
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        borderLeft: 0,
      }}
    >
      techstack
    </span>
  </div>
  )
}

export default BottomChooseFields