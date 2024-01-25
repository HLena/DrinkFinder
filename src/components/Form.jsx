import { Form as FormBt, Row, Col } from "react-bootstrap"

const Form = () => {
  return (
    <FormBt>
        <Row>
            <Col>
                <FormBt.Group>
                    <FormBt.Label  htmlFor="name">Drink name</FormBt.Label>
                    <FormBt.Control 
                        id="name"
                        type="text"
                        placeholder="Ex: Tequila,  wine, coffee"
                        name="name"
                    />
                </FormBt.Group>
            </Col>
            <Col>
                <FormBt.Label  htmlFor="name">Drink name</FormBt.Label>
                <FormBt.Select>
                    <option value="">Select category</option>
                </FormBt.Select>

            </Col>
        </Row>
    </FormBt>
  )
}

export default Form