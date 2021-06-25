import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

const LineaProductos = (props) => {
  return (
    <ListGroup.Item className="container w-50 d-flex justify-content-around my-3" action variant="light">
      <p className="">{props.productoUnico.nombreProducto}</p>
      <p className="">{props.productoUnico.precioProducto} </p>
      <p className="">{props.productoUnico.categoria} </p>
      <Button variant="outline-danger" size="sm">
        Eliminar
      </Button>
      <Button variant="outline-info" size="sm">
        Editar
      </Button>
    </ListGroup.Item>
  );
};

export default LineaProductos;
