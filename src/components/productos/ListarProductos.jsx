import React from "react";
import { ListGroup, Row } from "react-bootstrap";
import LineaProductos from "./LineaProductos";

const ListarProductos = (props) => {
  return (
    <Row className="d-flex justify-content-center">
      <h4 className="text-center my-5 text-black bg-white w-25 text-uppercase fs-2 ">
        Productos existentes
      </h4>
      <ListGroup className="bg-transparent">
        {props.productosApi.map((productoUnico) => (
          <LineaProductos
            key={productoUnico._id}
            id={productoUnico._id}
            productoUnico={productoUnico}
            actualizaProductos={props.actualizaProductos}
          />
        ))}
      </ListGroup>
    </Row>
  );
};

export default ListarProductos;
