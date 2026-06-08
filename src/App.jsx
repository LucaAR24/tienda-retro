import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Inicio from './pages/Inicio'
import Productos from './pages/Productos'   // Catálogo
import DetalleProducto from './pages/DetalleProducto'
import Carrito from './pages/Carrito'
import Contacto from './pages/Contacto'

function App() {
  const [carrito, setCarrito] = useState(() => {
    const guardado = localStorage.getItem('carrito')
    return guardado ? JSON.parse(guardado) : []
  })

  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(carrito))
  }, [carrito])

  // Agregar producto al carrito
  const agregarAlCarrito = (producto) => {
    setCarrito((carritoActual) => {
      const existe = carritoActual.find(item => item.id === producto.id)

      if (existe) {
        return carritoActual.map(item =>
          item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
        )
      }

      return [...carritoActual, { ...producto, cantidad: 1 }]
    })
  }

  // Aumentar en 1 la cantidad del producto en el carrito
  const aumentarCantidad = (id) => {
    setCarrito((carritoActual) =>
      carritoActual.map(item =>
        item.id === id ? { ...item, cantidad: item.cantidad + 1 } : item
      )
    )
  }

  // Quitar uno del carrito
  const disminuirCantidad = (id) => {
    setCarrito((carritoActual) =>
      carritoActual.map(item =>
        item.id === id && item.cantidad > 1 ? { ...item, cantidad: item.cantidad - 1 } : item
      )
    )
  }

  // Eliminar producto
  const eliminarProducto = (id) => {
    setCarrito((carritoActual) => carritoActual.filter(item => item.id !== id))
  }

  return (
    <>
      <Navbar carrito={carrito} />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route 
          path="/productos" 
          element={<Productos agregarAlCarrito={agregarAlCarrito} />} 
        />
        <Route 
          path="/productos/:id" 
          element={<DetalleProducto agregarAlCarrito={agregarAlCarrito} />} 
        />
        <Route 
          path="/carrito" 
          element={
            <Carrito 
              carrito={carrito} 
              aumentarCantidad={aumentarCantidad} 
              disminuirCantidad={disminuirCantidad} 
              eliminarProducto={eliminarProducto} 
            />
          } 
        />
        <Route path="/contacto" element={<Contacto carrito={carrito} />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App