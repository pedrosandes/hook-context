import { useContext } from "react";
import { AccountContext } from "../contexts/AccountContext";

// Crio o hook
export function useAccount(){
  // Uso o context (para pegar as informações)
  const context = useContext(AccountContext)

  // Se o context for null ou um valor falsy da error
  if(!context) {
     throw new Error('useAccount must be used within an AccountProvider')
  }
  // Se o valor for valido, ele retorna o context
  return context
}