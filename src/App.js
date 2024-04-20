
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './containers/Home';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/navbar';
import Footer from './components/Footer/footer';



function App() {
  return (
    <>
     <Router>
      <Navbar/>
      <Header />
      <Routes>
        <Route path='/' Component={Home}/>
       
      </Routes>
      <Footer/>
     </Router>
    </>
  );
}

export default App;
