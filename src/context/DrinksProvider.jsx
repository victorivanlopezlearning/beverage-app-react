import { createContext } from "react";

const DrinksContext = createContext();

export const DrinksProvider = ({ children }) => {

  return (
    <DrinksContext.Provider
      value={{}}
    >
      {children}
    </DrinksContext.Provider>
  )
}

export default DrinksContext;