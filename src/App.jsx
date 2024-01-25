import { Container } from "react-bootstrap"
import Form from "./components/Form"
import { CategoriesProvider } from './context/CategoriesProvider'
import { DrinksProvider } from "./context/DrinksProvider"

function App() {

  return (
    <CategoriesProvider>
      <DrinksProvider>
        <header className="py-5">
          <h1> Drink Finder</h1>
        </header>
        <Container className="py-5">
          <Form/>
        </Container>
      </DrinksProvider>
    </CategoriesProvider>
  )
}

export default App
