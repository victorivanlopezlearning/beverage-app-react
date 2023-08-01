import { useState } from 'react';
import useCategories from '../hooks/useCategories';
import useDrinks from '../hooks/useDrinks';
import { Form, Row, Col, Button, Alert } from 'react-bootstrap';

export default function FormMain() {

  const [search, setSearch] = useState({
    name: '',
    category: '',
  });
  const [error, setError] = useState(false);
  const { categories } = useCategories();
  const { getDrinks } = useDrinks();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(search).includes('')) {
      setError(true);
      console.error('Todos los campos son obligatorios');
      return;
    }
    setError(false);
    getDrinks(search);
  }

  return (
    <Form
      onSubmit={handleSubmit}
    >
      {error && (
        <Alert
          variant='danger'
          className='text-center'
        >
          Todos los campos son obligatorios
        </Alert>
      )}

      <Row>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="name">Nombre Bebida</Form.Label>
            <Form.Control
              id='name'
              type='text'
              placeholder='Ej: Tequila, Whiskey, Sprite, etc'
              name='name'
              value={search.name}
              onChange={(e) => setSearch({
                ...search,
                [e.target.name]: e.target.value
              })}
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
              value={search.category}
              onChange={(e) => setSearch({
                ...search,
                [e.target.name]: e.target.value
              })}
            >
              <option>- Selecciona -</option>
              {categories.map((category) => (
                <option
                  key={category.strCategory}
                  value={category.strCategory}
                >
                  {category.strCategory}
                </option>
              ))}

            </Form.Select>
          </Form.Group>
        </Col>
      </Row>

      <Row className='justify-content-end'>
        <Col md={4} lg={3}>
          <Button
            type='submit'
            variant='danger'
            className='text-uppercase fw-bold w-100'
          >
            Buscar Bebidas
          </Button>
        </Col>
      </Row>
    </Form>
  )
}
