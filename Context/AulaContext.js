import React, {useContext, createContext, useState} from "react";


export const AulaContext = createContext({});

export default function AulaProvider({ children }) {
  const [idAula, setIdAula] = useState(0)
    
  return (
    <AulaContext.Provider value={{ idAula, setIdAula}}>
      {children}
    </AulaContext.Provider>
  );
}

