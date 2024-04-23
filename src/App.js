
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './containers/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/footer';
import LogandReg from './containers/LoginRegister/index';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/login&register' Component={LogandReg} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
