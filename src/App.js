import './App.css';
import Inicio from './components/inicio/inicio.jsx'
import SelecGallo from './components/selecgallo/selecgallo.jsx'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
        <Switch>
          <Route path="/selecgallo">
            <SelecGallo />
          </Route>
          <Route path="/">
            <Inicio />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
