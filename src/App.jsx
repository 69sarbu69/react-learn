import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import { createContext, useCallback, useState } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import data from "../particlesjs-config.json";
import IntroScreen from "./screens/IntroScreen";
import EducationScreen from "./screens/EducationScreen";
import ProjectScreen from "./screens/ProjectScreen";
import TechStackScreen from "./screens/TechStackScreen";

export const GlobalContext = createContext(null);

function App() {

  const particlesInit = useCallback(async (engine) => {

    console.log(engine);

    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size

    await loadFull(engine);

  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  const [value, setValue] = useState({
    index: 0,
    changed:false,
    backChanged:false
  });

  const changeIndex = (index) => {
    setValue({ ...value,changed:true});
    setTimeout(()=>{
    setValue({ ...value,index:index});
    },500)
  };

  const changeChangedStatus = (change) => {
    setValue({ ...value, changed: change });
  };

  console.log()


  return (
    <GlobalContext.Provider value={{ value, changeIndex,changeChangedStatus }}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={data}
      />
      <div className="Home">
        {value.index === 0 && 
        <HomeScreen />
        }
        {value.index === 1 && 
        <IntroScreen/>
    }

        {value.index === 2 && 
        <EducationScreen/>
    }

        {value.index === 3 && 
        <ProjectScreen/>
    }

        {value.index === 4 && 
        <TechStackScreen/>
    }




      </div>
    </GlobalContext.Provider>
  );
}

export default App;
