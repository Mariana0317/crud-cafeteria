import React from 'react';
import {Form, Button, Col} from "react-bootstrap";

const AgregarProductos = () => {
    return (
        <div >
      <Form className="container w-50 bg-dark my-5" variant="light">
        <h1 className="text-center my-3 text-light">Datos del Producto</h1>

        <Form.Group as={Col} className="mb-3" controlId="nombreProducto">
          <Form.Control
            type="text"
            placeholder="Nombre del Producto"
            className="my-3"
            name="nombre"
          />
        </Form.Group>

        <Form.Group as={Col} className="mb-3" controlId="precioProducto">
          <Form.Control
            type="number"
            placeholder="Precio"
            className="my-3"
            name="precio"
          />
        </Form.Group>
        <Form.Group className="mb-3 " controlId="categoria">
          <h4 className="text-info">Categoria</h4>

          <Form.Check
            className="mx-3 light"
            type="radio"
            label="Bebida Fria"
            value="bebidas-frias"
            name="categoria"
            id="bebidas-frias"
            inline
          />

          <Form.Check
            className="mx-3"
            type="radio"
            label="Bebida Caliente"
            value="bebidas-calientes"
            name="categoria"
            id="bebidas-calientes"
            inline
          />

          <Form.Check
            className="mx-3"
            type="radio"
            label="Dulce"
            value="dulce"
            name="categoria"
            id="dulce"
            inline
          />

          <Form.Check
            className="mx-3"
            type="radio"
            label="Salado"
            value="salado"
            name="categoria"
            id="salado"
            inline
          />
        </Form.Group>

        <Button className="my-3" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
    );
};

export default AgregarProductos;