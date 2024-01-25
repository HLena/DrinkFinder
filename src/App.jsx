import { Container } from "react-bootstrap"
import Form from "./components/Form"
import { CategoriesProvider } from './context/CategoriesProvider'

function App() {

  return (
    <CategoriesProvider>
      <header className="py-5">
        <h1> Drink Finder</h1>
      </header>
      <Container className="py-5">
        <Form/>
      </Container>
    </CategoriesProvider>
  )
}

export default App
