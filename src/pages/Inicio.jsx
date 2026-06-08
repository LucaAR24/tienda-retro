import { Link } from 'react-router-dom'
import { Container, Button } from 'react-bootstrap'

function Inicio() {
  return (
    <Container className="text-center mt-5">
      <h1 className="mb-4">Tienda Retro</h1>
      <img 
        src="/img/logo.png" 
        alt="Logo de la tienda" 
        className="mb-3" 
        style={{ width: '150px' }} 
      />
      <p className="lead">
        Bienvenido a Tienda Retro, un emprendimiento dedicado a ofrecer productos<br />
        tecnológicos de calidad a precios accesibles.
      </p>
      <img 
        src="/img/banner.jpg" 
        alt="Banner principal" 
        className="img-fluid rounded mb-4" 
      />
      <Link to="/productos">
        <Button variant="primary" size="lg"> Ver catálogo </Button>
      </Link>
    </Container>
  )
}

export default Inicio