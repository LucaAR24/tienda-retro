import { useState } from 'react'
import { Container, Table, Button, Alert } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function Carrito({ carrito, aumentarCantidad, disminuirCantidad, eliminarProducto }) {
  const [confirmado, setConfirmado] = useState(false)
  const navigate = useNavigate()

  const total = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0)

  const handleConfirmarCompra = () => {
    setConfirmado(true)
    navigate('/contacto')
  }

  return (
    <Container className="mt-4">
      <h2>Carrito de compras</h2>
      {carrito.length === 0 ? (
        <p>Tu carrito está vacío</p>
      ) : (
        <>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Producto</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Subtotal</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {carrito.map(item => (
                <tr key={item.id}>
                  <td>{item.nombre}</td>
                  <td>${item.precio}</td>
                  <td>{item.cantidad}</td>
                  <td>${item.precio * item.cantidad}</td>
                  <td>
                    <Button 
                      variant="success" 
                      size="sm" 
                      className="me-2"
                      onClick={() => aumentarCantidad(item.id)}
                    >
                      +
                    </Button>
                    <Button 
                      variant="warning" 
                      size="sm" 
                      className="me-2"
                      onClick={() => disminuirCantidad(item.id)}
                    >
                      -
                    </Button>
                    <Button 
                      variant="danger" 
                      size="sm"
                      onClick={() => eliminarProducto(item.id)}
                    >
                      Eliminar
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <h4>Total: ${total}</h4>

          <Button variant="primary" className="mt-3" onClick={handleConfirmarCompra}>
            Confirmar compra
          </Button>

          {confirmado && (
            <Alert variant="success" className="mt-3">
              Redirigiendo a la página de contacto...
            </Alert>
          )}
        </>
      )}
    </Container>
  )
}

export default Carrito