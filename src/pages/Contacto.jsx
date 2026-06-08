import { useState } from 'react'
import { Container, Form, Button, Alert } from 'react-bootstrap'

function Contacto({ carrito }) {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    direccion: '',
    entrega: '',
    mensaje: ''
  })
  const [enviado, setEnviado] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.nombre || !formData.email || !formData.telefono || !formData.direccion) {
      setError('Todos los campos obligatorios deben estar completos.')
      return
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError('El email no tiene un formato válido.')
      return
    }
    if (!carrito || carrito.length === 0) {
      setError('No podés confirmar la compra con el carrito vacío.')
      return
    }
    setError('')
    setEnviado(true)
  }

  return (
    <Container className="mt-4">
      <h2>Finalizar compra / Contacto</h2>
      {enviado ? (
        <Alert variant="success">
          Gracias por tu compra, {formData.nombre}. Te enviaremos un correo a {formData.email}.
        </Alert>
      ) : (
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Nombre y apellido *</Form.Label>
            <Form.Control 
              type="text" 
              name="nombre" 
              value={formData.nombre} 
              onChange={handleChange} 
              required 
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email *</Form.Label>
            <Form.Control 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Teléfono *</Form.Label>
            <Form.Control 
              type="text" 
              name="telefono" 
              value={formData.telefono} 
              onChange={handleChange} 
              required 
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Dirección o localidad *</Form.Label>
            <Form.Control 
              type="text" 
              name="direccion" 
              value={formData.direccion} 
              onChange={handleChange} 
              required 
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Método de entrega</Form.Label>
            <Form.Select 
              name="entrega" 
              value={formData.entrega} 
              onChange={handleChange}
            >
              <option value="">Seleccionar...</option>
              <option value="domicilio">Envío a domicilio</option>
              <option value="retiro">Retiro en tienda</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Mensaje opcional</Form.Label>
            <Form.Control 
              as="textarea" 
              rows={3} 
              name="mensaje" 
              value={formData.mensaje} 
              onChange={handleChange} 
            />
          </Form.Group>

          {error && <Alert variant="danger">{error}</Alert>}

          <Button variant="primary" type="submit">
            Confirmar compra
          </Button>
        </Form>
      )}
    </Container>
  )
}

export default Contacto