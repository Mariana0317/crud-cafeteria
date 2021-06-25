import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";

const LineaProductos = (props) => {
  const eliminarProducto = (id) => {
    console.log(id);
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
            `http://localhost:4000/Cafeteria/${id}`,
            {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          console.log(resultado);
          if (resultado.status === 200) {
            Swal.fire("Eliminado!", "Tu producto ha sido eliminado.", "success");
          }
          props.actualizaProductos(true);
        } catch (error) {
          console.log(error);
        }
      }
    });
  };
  return (
    <ListGroup.Item
      className="container w-50 d-flex justify-content-around my-3"
      action
      variant="light"
    >
      <p className="">{props.productoUnico.nombreProducto}</p>
      <p className="">{props.productoUnico.precioProducto} </p>
      <p className="">{props.productoUnico.categoria} </p>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => eliminarProducto(props.productoUnico.id)}
      >
        Eliminar
      </Button>
      <Button variant="outline-info" size="sm">
        Editar
      </Button>
    </ListGroup.Item>
  );
};

export default LineaProductos;
