import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function ProductoCard({ producto, agregarAlCarrito }) {
  return (
    <Card className="mb-4" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={producto.imagen} alt={producto.nombre} />
      <Card.Body>
        <Card.Title>{producto.nombre}</Card.Title>
        <Card.Text>
          {producto.descripcion}<br />
          <strong>Precio:</strong> ${producto.precio}<br />
          <strong>Stock:</strong> {producto.stock > 0 ? producto.stock : "Sin stock"}
        </Card.Text>
        <Link to={`/productos/${producto.id}`}>
          <Button variant="info" className="me-2">Ver detalle</Button>
        </Link>
        <Button 
          variant="primary" 
          disabled={producto.stock === 0}
          onClick={() => agregarAlCarrito(producto)}
        >
          Agregar al carrito
        </Button>
      </Card.Body>
    </Card>
  )
}

export default ProductoCard