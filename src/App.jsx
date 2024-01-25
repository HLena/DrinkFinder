import { Container } from "react-bootstrap"
import Form from "./components/Form"

function App() {

  return (
    <>
      <header className="py-5">
        <h1> Drink Finder</h1>
      </header>
      <Container className="py-5">
        <Form/>
      </Container>
    </>
  )
}

export default App
