import { createContext, useEffect, useState } from "react";
import axios from "axios";

const DrinksContext = createContext();

export const DrinksProvider = ({ children }) => {

  const [drinks, setDrinks] = useState([]);
  const [drink, setDrink] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [idDrink, setIdDrink] = useState('');

  const getDrink = async () => {
    if (idDrink === '') return;

    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`;

    try {
      const { data } = await axios(url);
      setDrink(data.drinks[0]);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getDrink();
  }, [idDrink])

  const getDrinks = async ({ name, category }) => {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${name}&c=${category}`;
    try {
      const { data } = await axios(url);
      setDrinks(data.drinks);
    } catch (error) {
      console.log(error);
    }
  }

  const toggleModal = () => {
    setShowModal(!showModal);
  }

  const handleSetId = (id) => {
    setIdDrink(id);
  }

  return (
    <DrinksContext.Provider
      value={{
        getDrinks,
        drinks,
        toggleModal,
        showModal,
        handleSetId,
        drink,
      }}
    >
      {children}
    </DrinksContext.Provider>
  )
}

export default DrinksContext;