import { Form as FormBt, Row, Col } from "react-bootstrap"
import useCategories from "../hooks/useCategories"

const Form = () => {

    const { categories } = useCategories();
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
                        {
                            categories.map(category => (
                                <option 
                                    key={category.strCategory}
                                    value={category.strCategory}
                                >
                                    {category.strCategory}
                                </option>
                            ))
                        }
                    </FormBt.Select>

                </Col>
            </Row>
        </FormBt>
    )
}

export default Form