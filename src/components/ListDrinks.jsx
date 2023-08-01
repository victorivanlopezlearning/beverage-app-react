import { Row } from "react-bootstrap";
import useDrinks from "../hooks/useDrinks";
import DrinkItem from "./DrinkItem";

export default function ListDrinks() {

  const { drinks } = useDrinks();

  return (
    <Row className="mt-5">
      {(drinks.length > 0) ? (drinks?.map((drink) => (
        <DrinkItem
          key={drink.idDrink}
          drink={drink}
        />
      ))) : (
        <p className="text-center fw-light">Selecciona nombre y categoría para consultar alguna bebida.</p>
      )}
    </Row>
  )
}
