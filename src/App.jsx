import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Inicio from './pages/Inicio'
import Productos from './pages/Productos'   // Catálogo
import DetalleProducto from './pages/DetalleProducto'
import Carrito from './pages/Carrito'
import Contacto from './pages/Contacto'
import productosData from './data/productos'

function App() {
  const [productos, setProductos] = useState(() => {
    const guardado = localStorage.getItem('productos')
    return guardado ? JSON.parse(guardado) : productosData
  })

  const [carrito, setCarrito] = useState(() => {
    const guardado = localStorage.getItem('carrito')
    return guardado ? JSON.parse(guardado) : []
  })

  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(carrito))
  }, [carrito])

  useEffect(() => {
    localStorage.setItem('productos', JSON.stringify(productos))
  }, [productos])

  const agregarAlCarrito = (producto) => {
    if (producto.stock <= 0) return

    setCarrito((carritoActual) => {
      const existe = carritoActual.find(item => item.id === producto.id)
      if (existe) {
        return carritoActual.map(item =>
          item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
        )
      }
      return [...carritoActual, { ...producto, cantidad: 1 }]
    })

    setProductos((productosActuales) =>
      productosActuales.map(p =>
        p.id === producto.id && p.stock > 0
          ? { ...p, stock: p.stock - 1 }
          : p
      )
    )
  }


  // Aumentar en 1 la cantidad del producto en el carrito
  const aumentarCantidad = (id) => {
    const producto = productos.find(p => p.id === id)
    if (!producto || producto.stock <= 0) return

    setCarrito((carritoActual) =>
      carritoActual.map(item =>
        item.id === id ? { ...item, cantidad: item.cantidad + 1 } : item
      )
    )

    setProductos((productosActuales) =>
      productosActuales.map(p =>
        p.id === id ? { ...p, stock: p.stock - 1 } : p
      )
    )
  }

  // Quitar uno del carrito
  const disminuirCantidad = (id) => {
    const itemEnCarrito = carrito.find(item => item.id === id)
    if (!itemEnCarrito || itemEnCarrito.cantidad <= 1) return

    setCarrito((carritoActual) =>
      carritoActual.map(item =>
        item.id === id ? { ...item, cantidad: item.cantidad - 1 } : item
      )
    )

    setProductos((productosActuales) =>
      productosActuales.map(p =>
        p.id === id ? { ...p, stock: p.stock + 1 } : p
      )
    )
  }

  // Eliminar producto
  const eliminarProducto = (id) => {
    const itemEnCarrito = carrito.find(item => item.id === id)
    if (!itemEnCarrito) return

    setCarrito((carritoActual) => carritoActual.filter(item => item.id !== id))

    setProductos((productosActuales) =>
      productosActuales.map(p =>
        p.id === id ? { ...p, stock: p.stock + itemEnCarrito.cantidad } : p
      )
    )
  }

  return (
    <>
      <Navbar carrito={carrito} />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route 
          path="/productos" 
          element={<Productos productos={productos} agregarAlCarrito={agregarAlCarrito} />} 
        />
        <Route 
          path="/productos/:id" 
          element={<DetalleProducto productos={productos} agregarAlCarrito={agregarAlCarrito} />} 
        />
        <Route 
          path="/carrito" 
          element={
            <Carrito 
              carrito={carrito} 
              productos={productos}
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