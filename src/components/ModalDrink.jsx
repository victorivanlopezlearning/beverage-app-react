import { Modal, Image, ListGroup, Button } from "react-bootstrap";
import useDrinks from "../hooks/useDrinks";

export default function ModalDrink() {

  const { showModal, toggleModal, drink, loading } = useDrinks();

  const showIngredients = () => {
    let ingredients = [];

    for (let i = 1; i < 16; i++) {
      if (drink[`strIngredient${i}`]) {
        ingredients.push(
          <ListGroup.Item>{drink[`strMeasure${i}`]} {drink[`strIngredient${i}`]}</ListGroup.Item>
        )
      }
    }
    return ingredients;
  }

  return (
    !loading && (
      <Modal show={showModal} onHide={toggleModal}>
        {Object.values(drink).length > 0 ? (
          <>
            <Image
              src={drink?.strDrinkThumb}
              alt={`Imagen receta ${drink?.strDrink}`}
            />
            <Modal.Header>
              <Modal.Title as={'h2'}>{drink?.strDrink}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="p-2">
                <h3>Instrucciones</h3>
                <p>{drink?.strInstructions}</p>
                <h3>Ingredientes</h3>
                <ListGroup variant="flush">
                  {showIngredients()}
                </ListGroup>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={toggleModal}>
                Close
              </Button>
            </Modal.Footer>
          </>
        ) : (
          <Modal.Body>
            Sin resultados
          </Modal.Body>
        )}
      </Modal>
    )
  )
}
