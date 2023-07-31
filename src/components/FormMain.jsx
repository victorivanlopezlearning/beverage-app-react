import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function FormMain() {
  return (
    <Form>
      <Row>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="name">Nombre Bebida</Form.Label>
            <Form.Control
              id='name'
              type='text'
              placeholder='Ej: tequila, café, etc'
              name='name'
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="category">Categoría Bebida</Form.Label>
            <Form.Select 
              id='category' 
              name='category'
              aria-label="Selecciona una categoría"
            >
              <option>- Selecciona -</option>
              
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>
    </Form>
  )
}
