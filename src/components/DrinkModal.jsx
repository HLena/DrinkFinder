import { Modal } from "react-bootstrap"
import useDrinks from "../hooks/useDrinks"


const DrinkModal = () => {

    const {modal, handleCloseModal } = useDrinks();
    return (
        <Modal show={modal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
                <Modal.Title>titulo de la bebida</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus vero explicabo voluptates quos deserunt, assumenda ipsum iure impedit beatae accusantium incidunt cumque optio nisi, officiis consectetur similique ducimus repudiandae facere.
            </Modal.Body>
        </Modal>
    )
}

export default DrinkModal