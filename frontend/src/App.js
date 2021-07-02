
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './screens/Home';
import NovoProfissional from './screens/NovoProfissional';
import NovaProfissao from './screens/NovaProfissao';
import ListarProfissionais from './screens/ListarProfissionais';
import ListarProfissoes from './screens/ListarProfissoes';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Switch>
        <Route path ='/' exact component={Home}/>
        <Route path ='/novoProfissional' exact component={NovoProfissional}/>
        <Route path ='/novaProfissao' exact component={NovaProfissao}/>
        <Route path ='/listarProfissionais' exact component={ListarProfissionais}/>
        <Route path ='/listarProfissoes' exact component={ListarProfissoes}/>
      </Switch>
      </Router>
     
    </div>
  );
}

export default App;