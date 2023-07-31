import { useContext } from "react";
import CategoriesContext from "../context/CategoriesProvider";

const useCategories = () => useContext(CategoriesContext);

export default useCategories;