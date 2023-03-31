import './App.css';
import Productos from './Components/Productos/Productos';
import Header from './Components/UI/Header';
import Footer from './Components/UI/Footer';
import NuevoProducto from './Components/NuevoProducto/NuevoProducto';
import {useState} from 'react';
import FiltroProductos from './Components/Productos/FiltroProductos';

function App() {

  const [productos, setProductos] = useState(
    [
      {
        id: Math.random().toString(),
        nombre: 'Ratón óptico',
        precio: 15.50,
        fecha: new Date(2023, 2, 2)
      },
      {
        id: Math.random().toString(),
        nombre: 'Pantalla 4k',
        precio: 25.50,
        fecha: new Date(2023, 2, 2)
      },
      {
        id: Math.random().toString(),
        nombre: 'Teclado mecánico',
        precio: 9.50,
        fecha: new Date(2024, 2, 2)
      },
      {
        id: Math.random().toString(),
        nombre: 'Alfombrilla',
        precio: 10.5,
        fecha: new Date(2024, 2, 5)
      }
    ]
  )

  const addProducto = (producto) => {
    //setProductos(productos.push(producto));
    setProductos((prevProductos) => {
      return [producto, ...prevProductos];
    });
  }

  const borraProducto = (id) => {
    let copiaProductos = [...productos];
    copiaProductos = copiaProductos.filter((elemento) => {
      return elemento.id !== id;
    })
    setProductos(copiaProductos);
  }

  return (
    
    <div>
      <Header />
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg>
     
      <Productos productos={productos} borraProducto={borraProducto} />
      <Footer />
    </div>
  );
}

export default App;