import { Modal, Image } from "react-bootstrap"
import useDrinks from "../hooks/useDrinks"


const DrinkModal = () => {

    const {modal, handleCloseModal, drinkSelected, isLoading } = useDrinks();

    const showIngredients = () => {
        let ingredients = [];
        for(let i = 0; i < 16 ; i++) {
            if(drinkSelected[`strIngredient${i}`]) {
                ingredients.push(
                    <li key={`${drinkSelected[`strIngredient${i}`]}-${drinkSelected.strDrink}`}>{drinkSelected[`strIngredient${i}`]} {drinkSelected[`strMeasure${i}`]}</li>
                )
            }
        }

        return ingredients;
    }

    return (
        !isLoading &&
            (
                <Modal show={modal} onHide={handleCloseModal}>
                    <Image 
                        src={drinkSelected.strDrinkThumb}
                        alt={drinkSelected.strDrink}
                        />
                    <Modal.Header>
                        <Modal.Title>{drinkSelected.strDrink}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h2>Instructions</h2>
                        {drinkSelected.strInstructions}
                        <h2>Ingredients and Mesures</h2>
                        { showIngredients() }
                    </Modal.Body>
                </Modal>
            )
    )
}

export default DrinkModal