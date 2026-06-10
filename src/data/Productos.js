const productos = [
  {
    id: 1,
    nombre: "Auriculares inalámbricos",
    categoria: "Auriculares",
    precio: 30000,
    imagen: "/img/auriculares.jpg",
    descripcion: "Auriculares Bluetooth con buena autonomía.",
    stock: 12
  },
  {
    id: 2,
    nombre: "Teclado Aureox",
    categoria: "Teclados",
    precio: 24000,
    imagen: "/img/tecladoAureox.jpeg",
    descripcion: "Teclado mecánico Aureox con luces RGB.",
    stock: 4
  },
  {
    id: 3,
    nombre: "Teclado Redragon",
    categoria: "Teclados",
    precio: 28000,
    imagen: "/img/tecladoRedragon.png",
    descripcion: "Teclado mecánico Redragon con luces RGB.",
    stock: 7
  },
  {
    id: 4,
    nombre: "Mouse Redragon",
    categoria: "Mouse",
    precio: 19000,
    imagen: "/img/mouseRedragon.png",
    descripcion: "Mouse gaming Redragon con luces RGB.",
    stock: 0
  },
  {
    id: 5,
    nombre: "Fuente Aureox",
    categoria: "Fuentes",
    precio: 19000,
    imagen: "/img/fuenteAureox.jpg",
    descripcion: "Fuente de poder Aureox, 600W.",
    stock: 15
  },
  {
    id: 6,
    nombre: "Mouse Logitech",
    categoria: "Mouse",
    precio: 30000,
    imagen: "/img/mouseLogitech.png",
    descripcion: "Mouse gaming Logitech. Diseño cómodo y preciso, para largas sesiones de juego.",
    stock: 9
  },
  {
    id: 7,
    nombre: "Joystick PlayStation 3 Wireless",
    categoria: "Joysticks",
    precio: 11000,
    imagen: "/img/joystickPlayStation3.jpg",
    descripcion: "Joystick para PlayStation 3, inalámbrico.",
    stock: 15
  },
  {
    id: 8,
    nombre: "Joystick PlayStation 4 Wireless",
    categoria: "Joysticks",
    precio: 22000,
    imagen: "/img/joystickPlayStation4.jpg",
    descripcion: "Joystick para PlayStation 4, inalámbrico.",
    stock: 18
  },
  {
    id: 9,
    nombre: "Playstation 2 Chipeada",
    categoria: "Consolas",
    precio: 100000,
    imagen: "/img/playstation2.jpg",
    descripcion: "Consola PlayStation 2 chipeada.",
    stock: 3
  },
  {
    id: 10,
    nombre: "Playstation 3 Chipeada",
    categoria: "Consolas",
    precio: 200000,
    imagen: "/img/playstation3.png",
    descripcion: "Consola PlayStation 3 chipeada.",
    stock: 2
  },
  {
    id: 11,
    nombre: "Playstation 4 Chipeada",
    categoria: "Consolas",
    precio: 300000,
    imagen: "/img/playstation4.jpg",
    descripcion: "Consola PlayStation 4 chipeada.",
    stock: 1
  },
  {
    id: 12,
    nombre: "Motherboard ASUS",
    categoria: "Motherboards",
    precio: 150000,
    imagen: "/img/motherboardASUS.jpg",
    descripcion: "Motherboard ASUS Z390.",
    stock: 3
  }
]

export default productos