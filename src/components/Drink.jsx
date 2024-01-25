/* eslint-disable react/prop-types */
import { Col, Card, Button } from 'react-bootstrap'
const Drink = ({drink}) => {
  console.log(drink)
  return (
    <Col md={6} lg={3}>
      <Card className='mb-4'>
        <Card.Img
          variant='top'
          src={drink.strDrinkThumb}
          alt={`Image of ${drink.strDrink}`}
        />
        <Card.Body>
          <h4 className="text-center">{drink.strDrink}</h4>
          <Button className="w-100" >See more</Button>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default Drink