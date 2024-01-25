import useDrinks from "../hooks/useDrinks"
import Drink from "./Drink"

const DrinksList = () => {
    const { drinks } = useDrinks();
    return (
        <div>
            <h3>Drinks List</h3>
            {
                drinks.map(drink => (
                    <Drink 
                        key={drink.idDrink}
                        drink={drink}
                    />
                )
                )
            }
        </div>
    )
}

export default DrinksList