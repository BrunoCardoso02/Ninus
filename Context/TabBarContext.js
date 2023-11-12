import React, {useContext, createContext, useState} from "react";


export const TabBarContext = createContext({});

export default function TabBarProvider({ children }) {
  const [home, setHome] = useState(true);
  const [infoGrafico, setInfoGrafico] = useState(false);
  const [user, setUser] = useState(false);

  return (
    <TabBarContext.Provider value={{ home, setHome, infoGrafico, setInfoGrafico, user, setUser }}>
      {children}
    </TabBarContext.Provider>
  );
}


