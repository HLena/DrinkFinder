import { Form as FormBt, Row, Col, Button, Alert } from "react-bootstrap"
import useCategories from "../hooks/useCategories"
import { useState } from "react";

const Form = () => {

    const [search, setSearch] = useState({
        name: '',
        category: ''
    });
    const [alert, setAlert] = useState('');

    const { categories } = useCategories();

    const handleSubmit = (e) => {
        e.preventDefault();

        if(Object.values(search).includes('')) {
            setAlert('All fields are required')
            return;
        }
        setAlert('');

    }

    return (
        <FormBt
            onSubmit={ handleSubmit }
        >
            {
                alert && 
                    <Alert  variant="danger" className="text-center">{alert}</Alert>
            }
            <Row>
                <Col>
                    <FormBt.Group>
                        <FormBt.Label  htmlFor="name">Drink name</FormBt.Label>
                        <FormBt.Control 
                            id="name"
                            type="text"
                            placeholder="Ex: Tequila,  wine, coffee"
                            name="name"
                            value= {search.name}
                            onChange={ (e) => setSearch({
                                ...search,
                                [e.target.name] : e.target.value
                            })}
                        />
                    </FormBt.Group>
                </Col>
                <Col>
                    <FormBt.Label  htmlFor="category">Drink name</FormBt.Label>
                    <FormBt.Select
                        id="category"
                        name="category"
                        value= {search.category}
                        onChange={ (e) => setSearch({
                            ...search,
                            [e.target.name] : e.target.value
                        })}
                    >
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

            <Row className="justify-content-end py-3">
                <Col md={3}>
                    <Button 
                        type="submit"
                        variant="danger"
                        className="text-uppercase w-100">
                        Search Drinks
                    </Button>
                </Col>
            </Row>
        </FormBt>
    )
}

export default Form