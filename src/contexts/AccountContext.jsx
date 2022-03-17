import { useState, createContext } from "react";

// Cria e exporta o context
export const AccountContext = createContext({})

// Cria o provider do contexto AccountContext
export function AccountProvider({children}){
  const [userData, setUserData] = useState({
    name: '',
    age: '',
    email: '',
  })
 
  return (
    // Utilizo o provider e passo os valores que ireia acessar com o hook
    <AccountContext.Provider value={{
      userData,
      setUserData,
    }}>
      {children}
    </AccountContext.Provider>
  )
}
