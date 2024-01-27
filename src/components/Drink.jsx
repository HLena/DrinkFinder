/* eslint-disable react/prop-types */
import { Col, Card, Button } from 'react-bootstrap'
import useDrinks from '../hooks/useDrinks'


const Drink = ({drink}) => {

  const { handleCloseModal } = useDrinks()
  return (
    <Col md={6} lg={3}>
      <Card className='mb-4'>
        <Card.Img
          variant='top'
          src={drink.strDrinkThumb}
          alt={`Image of ${drink.strDrink}`}
        />
        <Card.Body>
          <Card.Title className="text-center">{drink.strDrink}</Card.Title>
          <Button 
            variant='warning'
            className="w-100 text-uppercase mt-2"
            onClick={handleCloseModal}>See more</Button>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default Drink