import { Container } from "react-bootstrap"
import { CategoriesProvider } from './context/CategoriesProvider'
import { DrinksProvider } from "./context/DrinksProvider"
import Form from "./components/Form"
import DrinksList from "./components/DrinksList"

function App() {

  return (
    <CategoriesProvider>
      <DrinksProvider>
        <header className="py-5">
          <h1> Drink Finder</h1>
        </header>
        <Container className="py-5">
          <Form/>
          <DrinksList/>
        </Container>
      </DrinksProvider>
    </CategoriesProvider>
  )
}

export default App
