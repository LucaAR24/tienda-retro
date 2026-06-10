import { useParams, Link } from 'react-router-dom'
import { Card, Button, Container } from 'react-bootstrap'

function DetalleProducto({ productos, agregarAlCarrito }) {
  const { id } = useParams()
  const producto = productos.find(p => p.id === parseInt(id))

  if (!producto) {
    return <p>Producto no encontrado</p>
  }

  return (
    <Container className="mt-4">
      <Card>
        <Card.Img variant="top" src={producto.imagen} alt={producto.nombre} className="img-fluid" style={{ maxWidth: '400px', margin: '0 auto' }} />
        <Card.Body>
          <Card.Title>{producto.nombre}</Card.Title>
          <Card.Text>
            <strong>Precio:</strong> ${producto.precio}<br />
            <strong>Categoría:</strong> {producto.categoria}<br />
            <strong>Stock:</strong> {producto.stock > 0 ? producto.stock : "Sin stock"}<br />
            {producto.descripcion}
          </Card.Text>
          <Link to="/productos">
            <Button variant="secondary" className="me-2">Volver al catálogo</Button>
          </Link>
          <Button variant="primary" disabled={producto.stock === 0} onClick={() => agregarAlCarrito(producto)}> Agregar al carrito </Button>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default DetalleProducto
