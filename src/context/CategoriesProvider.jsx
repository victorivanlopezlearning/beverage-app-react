import { createContext, useEffect, useState } from "react";
import axios from "axios";

const CategoriesContext = createContext();

export const CategoriesProvider = ({ children }) => {

  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`;
    try {
      const { data } = await axios(url);
      setCategories(data.drinks);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getCategories();
  }, [])

  return (
    <CategoriesContext.Provider
      value={{
        categories,
      }}
    >
      {children}
    </CategoriesContext.Provider>
  )
}

export default CategoriesContext;