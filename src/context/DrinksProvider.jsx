import { createContext, useState } from "react";
import axios from "axios";

const DrinksContext = createContext();

export const DrinksProvider = ({ children }) => {

  const [drinks, setDrinks] = useState([]);

  const getDrinks = async ({ name, category }) => {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${name}&c=${category}`;
    try {
      const { data } = await axios(url);
      setDrinks(data.drinks);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <DrinksContext.Provider
      value={{
        getDrinks,
        drinks,
      }}
    >
      {children}
    </DrinksContext.Provider>
  )
}

export default DrinksContext;