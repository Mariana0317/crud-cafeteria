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
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Index></Index>
        </Route>
        <Route exact path="/productos">
          <ListarProductos></ListarProductos>
        </Route>
        <Route exact path="/productos/agregar">
          <AgregarProductos></AgregarProductos>
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
