import './Producto.css';
import FechaProducto from './FechaProducto';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Producto(props) {

    const [nombre, setNombre] = useState(props.producto.nombre);
    const [resultado, setResultado] = useState(0);
    const [numero1, setNumero1] = useState(0);
    const precio = props.producto.precio;

    const clickHandler = () => {
        setNombre('Nuevo nombre');
    }

    const sumarHandler = () => {
        setResultado(numero1+1);
        setNumero1(numero1+1);
        console.log(resultado);
        
    }
    const restarHandler = () => {
        if (resultado>=1){
            setResultado(numero1-1);
            setNumero1(numero1-1);
            console.log(resultado);
        }

    }

    const borraHandler = () => {
        props.borraProducto(props.producto.id)
    }

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [enviarCarritoHandler, setEnviarCarritoHandler] = useState('');

    const submitHandler = (event) => {
        event.preventDefault();
    }

    return (
        <div className='producto'>
            <div id='container'>
                <img src='https://mdbootstrap.com/img/new/slides/041.webp' width="120" height="250" />
            </div>
            <div className='producto__nombre'>
                <h2>{nombre}</h2>
                <div className='producto__precio'>{precio} €</div>
            </div>
            <Button variant="warning" onClick={handleShow}> Ver detalles </Button>
            <Button variant="danger" onClick={borraHandler} ><svg xmlns="http://www.w3.org/2000/svg" width="30" height="40" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg> {resultado}  </Button>
            <Button variant="info">COMPRAR</Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{nombre}</Modal.Title>
                </Modal.Header>
                <Modal.Body>Descripcion: {precio}</Modal.Body>
            </Modal>
            <div className='producto2'>
                <Form onSubmit={submitHandler}>
                    <Container>
                        <Row>
                            <Col>
                                <Button variant="primary" onClick={sumarHandler}>+</Button>
                                <Form.Control onChange={enviarCarritoHandler} type='text' value={resultado + " unidades = "+resultado*precio +" €"} />
                                <Button variant="primary" onClick={restarHandler}>—</Button>
                            </Col>
                        </Row>
                    </Container>
                </Form>
            </div>
        </div>
    )
}
export default Producto;