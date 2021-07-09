import React, { useState } from "react";
import {Container, Form, Button, Col, Alert } from "react-bootstrap";
import Swal from 'sweetalert2';
import { withRouter } from "react-router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

const AgregarProductos = (props) => {
  const [nombreProducto, setNombreProducto] = useState("");
  const [precioProducto, setPrecioProducto] = useState("");
  const [categoria, setCategoria] = useState("");
  const [error, setError] = useState(false); //cuando esta en false no muestra el cartel de error

  const leerCategoria = (e) => {
    setCategoria(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      nombreProducto.trim() === "" ||
      precioProducto.trim() === "" ||
      categoria.trim() === ""
    ) {
      setError(true);
      return;
    }
    setError(false);
    const datosEnviados = {
      nombreProducto,
      precioProducto,
      categoria,
    };
    try {
      const cabecera = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(datosEnviados),
      };
      const resultado = await fetch(
        "http://localhost:4000/Cafeteria",
        cabecera
      );
      console.log(resultado);
      if(resultado.status === 200){
        Swal.fire(
            'Se agrego!',
            'Se agrego el producto!',
            'success'
          )
      }
      //despues que agruego un nuevo producto pongo recargar productos en true para que muestre el nuevo producto que se agrego a lista
      props.actualizaProductos(true);
      props.history.push("/productos");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container>
      <Form
        className="container w-50 bg-transparent my-5"
        variant="light"
        onSubmit={handleSubmit}
      >
        <h1 className="text-center my-3 text-black bg-white">Datos del Producto</h1>
        {error ? (
          <Alert className="text-center bg-warning" variant="danger">
            Todos los campos son obligatorios!
          </Alert>
        ) : null}

        <Form.Group as={Col} className="mb-3" controlId="nombreProducto">
          <Form.Control
            type="text"
            placeholder="Nombre del Producto"
            className="my-3"
            name="nombre"
            onChange={(e) => setNombreProducto(e.target.value)}
          />
        </Form.Group>

        <Form.Group as={Col} className="mb-3" controlId="precioProducto">
          <Form.Control
            type="number"
            placeholder="Precio"
            className="my-3"
            name="precio"
            onChange={(e) => setPrecioProducto(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-5 text-light" controlId="categoria">
          <h4 className="text-dark bg-white my-5 text-center fs-3 w-25">Categoria</h4>

          <Form.Check
            className="mx-3 text-dark bg-white border fs-5"
            type="radio"
            label="Bebida Fria"
            value="bebidas-frias"
            name="categoria"
            id="bebidas-frias"
            onChange={leerCategoria}
            inline
          />

          <Form.Check
            className="mx-3 text-dark bg-white border fs-5"
            type="radio"
            label="Bebida Caliente"
            value="bebidas-calientes"
            name="categoria"
            id="bebidas-calientes"
            onChange={leerCategoria}
            inline
          />

          <Form.Check
            className="mx-3 text-dark bg-white border fs-5"
            type="radio"
            label="Dulce"
            value="dulce"
            name="categoria"
            id="dulce"
            onChange={leerCategoria}
            inline
          />

          <Form.Check
            className="mx-3 text-dark bg-white border fs-5"
            type="radio"
            label="Salado"
            value="salado"
            name="categoria"
            id="salado"
            onChange={leerCategoria}
            inline
          />
        </Form.Group>

        <Button className="my-2" variant="dark" type="submit">
        <FontAwesomeIcon icon={faPaperPlane} />
        </Button>
      </Form>
    </Container>
  );
};

export default withRouter(AgregarProductos);
