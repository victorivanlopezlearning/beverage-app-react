import { Modal, Image } from "react-bootstrap";
import useDrinks from "../hooks/useDrinks";

export default function ModalDrink() {

  const { showModal, toggleModal } = useDrinks();

  return (
    <Modal show={showModal} onHide={toggleModal}>
      <Modal.Body>
        Cuerpo del modal
      </Modal.Body>
    </Modal>
  )
}
