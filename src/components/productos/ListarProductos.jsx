import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import LineaProductos from "./LineaProductos";

const ListarProductos = (props) => {
  return (
    <>
    <h4 className="text-center my-3">Productos existentes</h4>
    <ListGroup>

    {
      props.productosApi.map((productoUnico) => (
      <LineaProductos key={productoUnico.id} 
      productoUnico={productoUnico} 
      actualizaProductos={props.actualizaProductos}
       />
    ))
    }
  </ListGroup>
  </>
  );
};

export default ListarProductos;
