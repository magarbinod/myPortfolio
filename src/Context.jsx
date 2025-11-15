import { createContext, useContext, useReducer, useEffect } from "react";
import {skillsReducer} from "./Reducer"


//Step One
export const AppContext = createContext();

export const initialState = {
  frontendDevelopment: [],
  backendDevelopment: [],
  designAndTools: [],
};

//Step Two

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(skillsReducer, initialState);

  //Async function to fetch Data
  const fechSkills = async () => {
    try {
      const res = await fetch("/api/skillsData.json");
      const data = await res.json();
      dispatch({ type: "SET_SKILLS", payload: data });
    } catch (error) {
      console.error("failed to fetch skills:", error);
    }
  };

  // Load the Data
  useEffect(() => {
    fechSkills();
  }, []);

  return (
    <AppContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);


