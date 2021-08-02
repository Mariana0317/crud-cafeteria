import React, { useRef, useState } from "react";
import { Container, Form, Button, Col, Alert } from "react-bootstrap";
import Swal from "sweetalert2";
import { withRouter } from "react-router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'


const EditarProductos = (props) => {
  //usamos el useRef
  const nombreProductoRef = useRef("");
  const precioProductoRef = useRef("");
  //para categoria creamos un state
  const [categoria, setCategoria] = useState("");
  //tambien debemos validar asi que usamos el estado error
  const [error, setError] = useState(false);

  const leerCategoria = (e) => {
    setCategoria(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //revisar si cambio la categoria
    let _categoria =
      categoria === "" ? props.productoEncontrado.categoria : categoria;
    console.log(_categoria);
    console.log(nombreProductoRef.current.value);
    console.log(precioProductoRef.current.value);
    //validar los datos
    if (
      nombreProductoRef.current.value.trim() === "" ||
      precioProductoRef.current.value.trim() === "" ||
      _categoria === ""
    ) {
      //mostrabamos el cartel de error
      setError(true);
      return; //termina la ejecucion del codigo porque hay errores
    }
    //aqui ya tengo los datos validados entonces set error en false
    setError(false);

    //obtener los nuevos datos del formulario y enviar la modificacioon
    const datosEditados = {
      nombreProducto: nombreProductoRef.current.value,
      precioProducto: precioProductoRef.current.value,
      categoria: _categoria,
    };
    //enviar informacion
    try {
      //enviar el request
      const consulta = await fetch(
        `http://localhost:4001/api/Cafeteria/${props.productoEncontrado._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(datosEditados),
        }
      );
      console.log(consulta);
      if (consulta.status === 200) {
        Swal.fire(
          "Producto Modificado!",
          "Se modifico el producto!",
          "success"
        );
        props.setRecargarProductos(true);
        props.history.push("/productos");
      }
    } catch (errorInfo) {
      console.log(errorInfo);
    }
  };
  return (
    <Container className="">
      <Form
        className="container my-5  w-50 bg-transparent"
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
            ref={nombreProductoRef}
            defaultValue={props.productoEncontrado.nombreProducto}
          />
        </Form.Group>

        <Form.Group as={Col} className="mb-3" controlId="precioProducto">
          <Form.Control
            type="number"
            placeholder="Precio"
            className="my-3"
            name="precio"
            ref={precioProductoRef}
            defaultValue={props.productoEncontrado.precioProducto}
          />
        </Form.Group>
        <Form.Group className="mb-3 text-light" controlId="categoria">
          <h4 className="text-dark bg-white my-5 text-center fs-3 w-25">Categoria</h4>

          <Form.Check
            className="mx-3 text-dark bg-white border fs-5"
            type="radio"
            label="Bebida Fria"
            value="bebida-fria"
            name="categoria"
            id="bebida-fria"
            inline
            onChange={leerCategoria}
            defaultChecked={
              props.productoEncontrado.categoria === "bebida-fria"
            }
          />

          <Form.Check
            className="mx-3 text-dark bg-white border fs-5"
            type="radio"
            label="Bebida Caliente"
            value="bebida-caliente"
            name="categoria"
            id="bebida-caliente"
            onChange={leerCategoria}
            defaultChecked={
              props.productoEncontrado.categoria === "bebida-caliente"
            }
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
            defaultChecked={props.productoEncontrado.categoria === "dulce"}
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
            defaultChecked={props.productoEncontrado.categoria === "salado"}
            inline
          />
        </Form.Group>

        <Button className="my-3" variant="primary" type="submit">
        <FontAwesomeIcon icon={faPaperPlane} />
        </Button>
      </Form>
    </Container>
  );
};

export default withRouter(EditarProductos);
