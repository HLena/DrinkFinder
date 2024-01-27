/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useEffect, useState } from "react"

const DrinksContext = createContext();

const DrinksProvider = ({children}) => {

    const [drinks, setDrinks] = useState([]);
    const [drinkId, setDrinkId] = useState(null);
    const [drinkSelected, setDrinkSelected] = useState({})
    const [modal, setModal] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const getRecipe = async () => {
            setIsLoading(true)
            if(!drinkId) return;
            try {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`
                const {data} = await axios(url);
                setDrinkSelected(data.drinks[0])
            } catch (error) {
                console.log(error)
            } finally {
                setIsLoading(false)
            }
        }

        getRecipe()
    }, [drinkId]);

    const getDrinks = async({name, category}) => {
        try {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}&c=${category}`;
            const { data } = await axios(url);
            setDrinks(data.drinks)
        } catch (error) {
            console.log(error)
        }
    }

    const handleCloseModal = () => {
        setModal(!modal)
    }

    const handleDrinkId = id => {
        setDrinkId(id)
    }

    return (
        <DrinksContext.Provider 
            value={{
                getDrinks,
                drinks,
                handleCloseModal,
                modal,
                handleDrinkId,
                drinkSelected,
                isLoading
            }}>
            {children}
        </DrinksContext.Provider>
    )
}
export {
    DrinksProvider
}
export default DrinksContext