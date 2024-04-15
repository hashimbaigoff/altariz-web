import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/Header/About';
import Training from './components/Header/Training';
import Development from './components/Header/Development';
import Outsourcing from './components/Header/Outsourcing';

function App() {
  return (
    <>
     <Router>
      <Routes>
        <Route path='/' Component={Home}/>
        <Route  path='/about' Component={About}/>
        <Route path='/training' Component={Training}/>
        <Route path='/development' Component={Development}/>
        <Route path='/outsourcing' Component={Outsourcing}/>
      </Routes>
     </Router>
    </>
  );
}

export default App;
