import { useState } from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
import ProductoCard from '../components/ProductoCard'

function Productos({ productos, agregarAlCarrito }) {
  const [busqueda, setBusqueda] = useState("")
  const [categoria, setCategoria] = useState("")
  const [orden, setOrden] = useState("")

  // Filtrado por nombre
  let productosFiltrados = productos.filter(producto =>
    producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
  )

  // Filtrado por categoría
  if (categoria) {
    productosFiltrados = productosFiltrados.filter(producto =>
      producto.categoria === categoria
    )
  }

  // Ordenamiento por precio
  if (orden === "asc") {
    productosFiltrados = [...productosFiltrados].sort((a, b) => a.precio - b.precio)
  } else if (orden === "desc") {
    productosFiltrados = [...productosFiltrados].sort((a, b) => b.precio - a.precio)
  }

  return (
    <Container className="mt-4">
      <h2>Catálogo de productos</h2>
      <Form className="mb-4">
        <Row>
          <Col md={4}>
            <Form.Control 
              type="text" 
              placeholder="Buscar por nombre..." 
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
            />
          </Col>
          <Col md={4}>
            <Form.Select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
              <option value="">Todas las categorías</option>
              <option value="Mouse">Mouse</option>
              <option value="Teclados">Teclados</option>
              <option value="Fuentes">Fuentes</option>
              <option value="Joysticks">Joysticks</option>
              <option value="Consolas">Consolas</option>
              <option value="Motherboards">Motherboards</option>
            </Form.Select>
          </Col>
          <Col md={4}>
            <Form.Select value={orden} onChange={(e) => setOrden(e.target.value)}>
              <option value="">Precios</option>
              <option value="desc">Productos más caros</option>
              <option value="asc">Productos más baratos</option>
            </Form.Select>
          </Col>
        </Row>
      </Form>
      <Row>
        {productosFiltrados.map(prod => (
          <Col key={prod.id} md={4}>
            <ProductoCard producto={prod} agregarAlCarrito={agregarAlCarrito} />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Productos