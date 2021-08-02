import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";

const LineaProductos = (props) => {
  const eliminarProducto = (id) => {
    Swal.fire({
      title: "Estas seguro de eliminar el producto?",
      text: "esta acción es irreversible!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "si, eliminar!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const resultado = await fetch(
            `http://localhost:4001/api/Cafeteria/${id}`,
            {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          console.log(resultado);
          if (resultado.status === 200) {
            Swal.fire(
              "Eliminado!",
              "Tu producto ha sido eliminado.",
              "success"
            );
            props.actualizaProductos(true);
          }
        } catch (error) {
          console.log(error);
        }
      }
    });
  };
  return (
    <ListGroup.Item
      className="container w-50 d-flex justify-content-between my-2"
      action
      variant="light"
    >
      <p className="text-primary text-capitalize">
        {props.productoUnico.nombreProducto}
      </p>
      <p className="text-primary text-capitalize">
        {props.productoUnico.precioProducto}
      </p>
      <p className="text-primary text-capitalize ">
        {props.productoUnico.categoria}
      </p>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => eliminarProducto(props.productoUnico._id)}
      >
        <FontAwesomeIcon icon={faTrashAlt} />
      </Button>
      <Link
        to={`/productos/editar/${props.productoUnico._id}`}
        size="sm"
        className="btn btn-outline-info"
      >
        <FontAwesomeIcon icon={faEdit} />
      </Link>
    </ListGroup.Item>
  );
};

export default LineaProductos;
