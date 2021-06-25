import React, { useState, useEffect } from "react";
import "./App.css";
import "./bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ListarProductos from "./components/productos/ListarProductos";
import AgregarProductos from "./components/productos/AgregarProductos";
import EditarProductos from "./components/productos/EditarProductos";
import Index from "./components/principal/Index";
import Header from "./components/commons/Header";
import Footer from "./components/commons/Footer";

function App() {
  //estados para guardar los datos que traigo de la opi
  const [productosAPI, setProductosAPI] = useState([]);
  const [recargarProductos, setRecargarProductos] = useState(true);

  useEffect(() => {
    if (recargarProductos) {
      consultarAPI();
      setRecargarProductos(false);
    }
  }, [recargarProductos]);
  //funcion para consultar a la api y traer los datos y la vamos llamar cuando cargue la pagina en la montaje y cuando se actualice la api es decir cuando se agregue un producto, se elimine o modifique

  const consultarAPI = async () => {
    try {
      const respuesta = await fetch("http://localhost:4000/Cafeteria");
      const resultado = await respuesta.json();
      console.log(resultado);
      setProductosAPI(resultado);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Index></Index>
        </Route>
        <Route exact path="/productos">
          <ListarProductos productosApi={productosAPI} actualizaProductos={setRecargarProductos}></ListarProductos>
        </Route>
        <Route exact path="/productos/agregar">
          <AgregarProductos actualizaProductos={setRecargarProductos}></AgregarProductos>
        </Route>
        <Route exact path="/productos/editar">
          <EditarProductos></EditarProductos>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
