/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useState } from "react"

const DrinksContext = createContext();

const DrinksProvider = ({children}) => {

    const [drinks, setDrinks] = useState([]);

    const getDrinks = async({name, category}) => {
        try {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}&c=${category}`;
            const { data } = await axios(url);
            setDrinks(data.drinks)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <DrinksContext.Provider 
            value={{
                getDrinks,
                drinks
            }}>
            {children}
        </DrinksContext.Provider>
    )
}
export {
    DrinksProvider
}
export default DrinksContext